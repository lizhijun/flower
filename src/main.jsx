import studio from './pages/studio.html?raw';
import gallery from './pages/gallery.html?raw';
import exhibitions from './pages/exhibitions.html?raw';
import postcards from './pages/postcards.html?raw';
import about from './pages/about.html?raw';
import './local-data.js';

const pages = { studio, gallery, exhibitions, postcards, about };
const route = location.pathname.split('/').filter(Boolean)[0]?.replace(/\.html$/, '') || 'studio';
const page = new DOMParser().parseFromString(pages[route] || studio, 'text/html');
document.title = page.title;
document.documentElement.lang = page.documentElement.lang || 'zh-Hant';
for (const attribute of page.body.attributes) document.body.setAttribute(attribute.name, attribute.value);
const scripts = [...page.querySelectorAll('script[src]')].map(node => node.getAttribute('src'));
page.querySelectorAll('script').forEach(node => node.remove());
const absolute = value => new URL(value, location.origin + '/').href;
const styles = [...page.querySelectorAll('link[rel="stylesheet"]')].map(node => node.getAttribute('href'));
const loadStyles = Promise.all(styles.map(href => new Promise((resolve, reject) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = absolute(href);
  link.onload = resolve;
  link.onerror = () => reject(new Error('樣式載入失敗'));
  document.head.append(link);
})));
for (const original of page.head.querySelectorAll('style,meta[name="description"],link[rel="icon"]')) {
  document.head.append(original.cloneNode(true));
}
document.body.innerHTML = page.body.innerHTML;
async function initialize() {
try {
  await loadStyles;
  for (const src of scripts) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = absolute(src);
      script.onload = resolve;
      script.onerror = () => reject(new Error('功能載入失敗'));
      document.body.append(script);
    });
  }
  if (route === 'gallery') {
    document.querySelector('#finish-submission')?.addEventListener('click', () => {
      location.assign('/gallery#works');
    });
  }
} catch (error) {
  console.error(error);
  const message = document.createElement('p');
  message.setAttribute('role', 'alert');
  message.textContent = '頁面未能完整載入，請重新整理再試。';
  document.body.prepend(message);
}
}
initialize();
