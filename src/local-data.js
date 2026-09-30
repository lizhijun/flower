// Public-gallery snapshot and browser-only creation storage.
// Uploaded files and visitor metadata never go to the reference site.
const nativeFetch = window.fetch.bind(window);
const urls = new Map();
const uuid = /^[a-f0-9-]{36}$/i;
let database;
let snapshot;

function openDatabase() {
  if (!database) database = new Promise((resolve, reject) => {
    const request = indexedDB.open('flower-studio-creations', 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore('works', { keyPath: 'id' });
      request.result.createObjectStore('images', { keyPath: 'id' });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error('請關閉其他工作室頁面後再試。'));
  });
  return database;
}

async function localWorks() {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['works', 'images'], 'readonly');
    const works = transaction.objectStore('works').getAll();
    const images = transaction.objectStore('images').getAll();
    transaction.oncomplete = () => {
      for (const image of images.result) {
        const path = '/api/images/' + image.id;
        if (!urls.has(path)) urls.set(path, URL.createObjectURL(image.blob));
      }
      resolve(works.result.sort((a, b) => b.published_at - a.published_at));
    };
    transaction.onerror = () => reject(transaction.error);
  });
}

async function allWorks() {
  snapshot ||= nativeFetch('/snapshot/works.json').then(response => {
    if (!response.ok) throw new Error('作品集載入失敗');
    return response.json();
  });
  const [original, own] = await Promise.all([snapshot, localWorks()]);
  return [...own, ...original.works];
}

const json = (value, status = 200) => new Response(JSON.stringify(value), {
  status, headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

async function saveSubmission(form) {
  if (!(form instanceof FormData)) return json({ error: '請選擇作品圖片。' }, 400);
  const id = form.get('id');
  const creator = String(form.get('creator') || '').trim();
  const instagram = String(form.get('instagram') || '').trim();
  const image = form.get('image');
  if (!uuid.test(id || '') || !creator || creator.length > 40 || form.get('consent') !== 'yes') {
    return json({ error: '請填寫名字並勾選作品確認。' }, 400);
  }
  if (instagram && !/^@?[A-Za-z0-9._]{1,30}$/.test(instagram)) {
    return json({ error: 'Instagram 名稱格式不正確。' }, 400);
  }
  if (!(image instanceof Blob) || !['image/png', 'image/jpeg', 'image/webp'].includes(image.type) || image.size > 10 * 1024 * 1024) {
    return json({ error: '請選擇 10 MB 以下的 PNG、JPG 或 WebP 圖片。' }, 400);
  }
  const db = await openDatabase();
  const work = {
    id, creator, instagram, image: '/api/images/' + id, vessel: 'unclassified',
    published_at: Date.now(), collection: 'Community', published: true,
    alt: creator + ' 的創作', flowerStamps: [], roomStamps: [], local: true,
  };
  await new Promise((resolve, reject) => {
    const transaction = db.transaction(['works', 'images'], 'readwrite');
    transaction.objectStore('works').put(work);
    transaction.objectStore('images').put({ id, blob: image });
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
  const path = work.image;
  if (urls.has(path)) URL.revokeObjectURL(urls.get(path));
  urls.set(path, URL.createObjectURL(image));
  return json({ id, saved: true, local: true }, 201);
}

function randomUUID() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
window.ForiData = { image: path => urls.get(path) || path, randomUUID };
window.fetch = async function (input, options = {}) {
  const url = new URL(input instanceof Request ? input.url : String(input), location.href);
  if (url.origin !== location.origin || !url.pathname.startsWith('/api/')) return nativeFetch(input, options);
  if (options.signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  try {
    const method = (options.method || (input instanceof Request ? input.method : 'GET')).toUpperCase();
    if (url.pathname === '/api/submissions' && method === 'POST') return await saveSubmission(options.body);
    if (url.pathname === '/api/exhibitions' && method === 'GET') return nativeFetch('/snapshot/exhibitions.json');
    if (url.pathname === '/api/works' && method === 'GET') {
      let works = await allWorks();
      const vessel = url.searchParams.get('vessel');
      if (vessel && vessel !== 'all') works = works.filter(work => work.vessel === vessel);
      const offset = Math.max(0, Number.parseInt(url.searchParams.get('offset') || '0', 10) || 0);
      const end = offset + 48;
      return json({ works: works.slice(offset, end), next: end < works.length ? end : null });
    }
    if (url.pathname.startsWith('/api/works/') && method === 'GET') {
      const id = url.pathname.split('/').pop();
      const work = (await allWorks()).find(work => work.id === id);
      return work ? json({ work }) : json({ error: '找不到這件作品。' }, 404);
    }
    if (url.pathname.startsWith('/api/images/') && urls.has(url.pathname)) return nativeFetch(urls.get(url.pathname));
    return nativeFetch(input, options);
  } catch (error) {
    return json({ error: error.message || '儲存空間暫時無法使用。' }, 500);
  }
};
