(() => {
 const $=id=>document.getElementById(id),list=$('works');let imageUrl=null,hanaWorks=[],selectedVessel='all',communityRevision=0,featuredImages=[],backgroundRevision=0;
 // Share only current-page metadata; never persist moderation data in browser storage.
 const worksRequests=new Map();
 async function worksPage(offset,vessel){const key=offset+':'+vessel;const existing=worksRequests.get(key);if(existing&&Date.now()-existing.time<30000)return existing.promise;const promise=fetch('/api/works?offset='+offset+'&vessel='+encodeURIComponent(vessel),{cache:'no-store'}).then(response=>{if(!response.ok)throw Error();return response.json();}).catch(error=>{worksRequests.delete(key);throw error;});worksRequests.set(key,{time:Date.now(),promise});return promise;}
 const filter=$('vessel-filter'),icons=ForiVesselIcons;
 for(const [value,label] of Object.entries({all:'不分類',...Object.fromEntries(Object.entries(ForiVesselCategories).filter(([key])=>!['unclassified','vase','other'].includes(key)))})){
  const button=document.createElement('button');button.type='button';button.dataset.vessel=value;button.setAttribute('aria-pressed',String(value==='all'));button.setAttribute('aria-label',label);button.title=label;
  const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');icon.setAttribute('viewBox','0 0 32 32');icon.setAttribute('aria-hidden','true');icon.setAttribute('fill','none');icon.setAttribute('stroke','currentColor');icon.setAttribute('stroke-width','1.4');icon.setAttribute('stroke-linecap','round');icon.setAttribute('stroke-linejoin','round');icon.innerHTML=icons[value];button.append(icon);

  button.onclick=()=>{if(selectedVessel===value)return;selectedVessel=value;for(const item of filter.children)item.setAttribute('aria-pressed',String(item===button));community=[];next=0;featuredImages=[];renderCommunity();more.hidden=true;$('design-note').hidden=true;loadCommunity();};filter.append(button);
 }
 let hanaPage=0,hanaTurning=false,hanaSwipe=null,hanaSuppressClick=false;
 function renderHana(){
  $('hana-empty').hidden=hanaWorks.length>0;$('hana-handbook').hidden=!hanaWorks.length;
  $('hana-count').textContent=String(hanaWorks.length).padStart(2,'0')+' WORKS';
  const pages=$('hana-works');renderInto(pages,hanaWorks.slice(hanaPage*2,hanaPage*2+2),false);
  [...pages.children].forEach((figure,i)=>{const number=document.createElement('span');number.className='hana-folio';number.textContent=String(hanaPage*2+i+1).padStart(2,'0');figure.append(number);});
  if(pages.children.length===1){const end=document.createElement('div');end.className='hana-end-page';end.setAttribute('aria-hidden','true');pages.append(end);}
  const total=Math.ceil(hanaWorks.length/2);$('hana-page-number').textContent=(hanaPage+1)+' / '+total;
  $('hana-prev').disabled=total<2;$('hana-next').disabled=total<2;
 }
 async function turnHana(direction){
  if(hanaTurning||hanaWorks.length<3)return;hanaTurning=true;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let leaf;
  if(!reduce){leaf=document.createElement('div');leaf.className='hana-turning-leaf'+(direction<0?' backwards':'');leaf.setAttribute('aria-hidden','true');leaf.inert=true;leaf.append($('hana-works').children[direction>0?1:0].cloneNode(true));$('hana-binding').append(leaf);}
  hanaPage=(hanaPage+direction+Math.ceil(hanaWorks.length/2))%Math.ceil(hanaWorks.length/2);renderHana();
  if(leaf){await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));leaf.classList.add('turned');await new Promise(resolve=>setTimeout(resolve,850));leaf.remove();}
  hanaTurning=false;
 }
 $('hana-prev').onclick=()=>turnHana(-1);$('hana-next').onclick=()=>turnHana(1);
 const hanaPages=$('hana-works');hanaPages.tabIndex=0;
 hanaPages.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();turnHana(e.key==='ArrowLeft'?-1:1);}});
 hanaPages.addEventListener('pointerdown',e=>{hanaSwipe={x:e.clientX,y:e.clientY};hanaSuppressClick=false;});
 hanaPages.addEventListener('pointerup',e=>{if(!hanaSwipe)return;const dx=e.clientX-hanaSwipe.x,dy=e.clientY-hanaSwipe.y;hanaSwipe=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.5){hanaSuppressClick=true;turnHana(dx<0?1:-1);}});
 hanaPages.addEventListener('pointercancel',()=>{hanaSwipe=null;});
 hanaPages.addEventListener('click',e=>{if(hanaSuppressClick){e.preventDefault();e.stopPropagation();hanaSuppressClick=false;}},true);


 function credit(w){const box=document.createElement('figcaption');if(w.sample){const badge=document.createElement('small');badge.className='sample';badge.textContent='LAYOUT SAMPLE · 排版示範';box.append(badge);}const title=document.createElement('h3');title.textContent=w.title||'';title.hidden=!w.title;const name=document.createElement('p');name.textContent=w.creator;if(w.title)box.append(title);if(w.collection!=='Hana')box.append(name);if(w.sample){const ig=document.createElement('span');ig.textContent='@your.instagram';box.append(ig);}else if(/^[A-Za-z0-9._]{1,30}$/.test((w.instagram||'').replace(/^@/,''))){const a=document.createElement('a'),handle=w.instagram.replace(/^@/,'');a.href='https://www.instagram.com/'+encodeURIComponent(handle)+'/';a.textContent='@'+handle;a.target='_blank';a.rel='noopener noreferrer';box.append(a);}return box;}
 let selectedArtwork=null;
 const shareKey=w=>w.id||(/^gallery\/Hana-(\d+)\./i.exec(w.image||'')?.[1]?'hana-'+/^gallery\/Hana-(\d+)\./i.exec(w.image)[1]:'');
 let roomCatalogPromise=null;
 function appendRoomStamps(w){const area=document.querySelector('.art-stamps');area.querySelectorAll('[data-room-stamp]').forEach(e=>e.remove());for(const award of w.roomStamps||[])area.append(ForiRoomStamps.create(award));}
 function showArtwork(w){
  selectedArtwork=w;$('art-admission-stamp').hidden=!Number.isSafeInteger(w.submission_number);for(const [id,min,max] of [['art-pioneer-stamp',1,99],['art-roots-stamp',100,199],['art-bloom-stamp',200,299]])$(id).hidden=!(Number.isSafeInteger(w.submission_number)&&w.submission_number>=min&&w.submission_number<=max);const milestone=[1,100,200,300].includes(w.submission_number);$('art-milestone-stamp').hidden=!milestone;$('art-milestone-number').textContent=milestone?String(w.submission_number):'';$('art-milestone-stamp').setAttribute('aria-label',milestone?'Milestone — No. '+w.submission_number:'Milestone');$('large-art').src=window.ForiData.image(w.image);$('large-art').alt=w.alt||w.title||w.creator+' 的創作';
  const stampArea=document.querySelector('.art-stamps');stampArea.querySelectorAll('[data-flower-stamp]').forEach(el=>el.remove());
  for(const award of ForiFlowerStamps){if(!Array.isArray(w.flowerStamps)||!w.flowerStamps.includes(award.id))continue;const stamp=document.createElement('span');stamp.className='art-stamp';stamp.dataset.flowerStamp=award.id;stamp.title=award.name+' · '+award.description;stamp.setAttribute('aria-label',stamp.title);stamp.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true">'+award.icon+'</svg><span>'+award.label+'</span>';stampArea.append(stamp);}
  appendRoomStamps(w);
  if(w.collection==='Hana'&&!w.roomStamps){roomCatalogPromise ||=fetch('/api/exhibitions',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json();}).catch(()=>{roomCatalogPromise=null;return null;});roomCatalogPromise.then(data=>{if(!data)return;w.roomStamps=data.exhibitions.filter(r=>r.items.some(item=>item.id===shareKey(w))).map(r=>r.stamp);if(selectedArtwork===w)appendRoomStamps(w);});}
  $('large-credit').replaceChildren(credit(w));ForiSubmissionNumber.attach($('large-info'),w);
  $('share-art-status').textContent='';$('share-art').hidden=!shareKey(w);
  if(!$('art-view').open)$('art-view').showModal();
 }
 $('share-art').onclick=async()=>{
  const key=selectedArtwork&&shareKey(selectedArtwork);if(!key)return;
  const url=new URL('/gallery',location.origin);url.searchParams.set('work',key);
  const share={title:selectedArtwork.creator+' 的花藝作品｜FORi Flower',url:url.href};
  $('share-art-status').textContent='';
  try{if(navigator.share){await navigator.share(share);return;}}
  catch(error){if(error.name==='AbortError')return;}
  try{await navigator.clipboard.writeText(url.href);$('share-art-status').textContent='作品連結已複製。';}
  catch{const link=document.createElement('a');link.href=url.href;link.textContent=url.href;$('share-art-status').replaceChildren(document.createTextNode('長按或複製此連結：'),link);}
 };
 const requestedWork=new URLSearchParams(location.search).get('work');
 const sharedError=()=>{const note=$('shared-work-status');note.hidden=false;note.textContent='這件作品尚未公開、已下架或暫時無法載入。你仍可以瀏覽其他作品。';};
 if(requestedWork&&/^[a-f0-9-]{36}$/i.test(requestedWork))fetch('/api/works/'+encodeURIComponent(requestedWork),{cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(({work})=>{if(!work||!/^\/api\/images\/[a-f0-9-]{36}$/i.test(work.image))throw Error();showArtwork(work);}).catch(sharedError);
 else if(requestedWork&&!/^hana-\d+$/i.test(requestedWork))sharedError();
 function renderInto(list,works,carousel=true){
  const previous=list._carouselIndex||0;
  list.replaceChildren();
  const valid=works.filter(w=>!w.image.includes('..')&&(/^gallery\/[A-Za-z0-9_./-]+\.(png|jpg|jpeg|webp)$/i.test(w.image)||/^\/api\/images\/[a-f0-9-]{36}$/i.test(w.image)));
  const loop=carousel&&valid.length>1&&!list.classList.contains('background-track');
  for(let copy=0;copy<(loop?5:1);copy++)for(const w of valid){if((!/^gallery\/[A-Za-z0-9_./-]+\.(png|jpg|jpeg|webp)$/i.test(w.image)&&!/^\/api\/images\/[a-f0-9-]{36}$/i.test(w.image))||w.image.includes('..'))continue;const figure=document.createElement('figure');figure.className='work';const button=document.createElement('button');button.className='art-button';button.setAttribute('aria-label','放大作品：'+(w.title||w.alt||w.creator+' 的創作'));const img=document.createElement('img');img.src=window.ForiData.image(w.image);img.alt=w.alt||w.title||w.creator+' 的創作';img.loading='lazy';img.decoding='async';button.append(img);button.onclick=()=>showArtwork(w);figure.append(button);const caption=credit(w);if(caption.childElementCount)figure.append(caption);if(loop&&copy!==2){figure.setAttribute('aria-hidden','true');for(const el of figure.querySelectorAll('button,a'))el.tabIndex=-1;}
  list.append(figure);}
  if(carousel)setupCarousel(list,valid.length,previous,loop);else list.hidden=!valid.length;
 }
 const backgroundCache=new Map();
 const backgroundGroups=[['light','淺灰底'],['dark','深灰底'],['unknown','其他作品']];
 function artworkBackground(work){
  if(backgroundCache.has(work.image))return backgroundCache.get(work.image);
  const promise=new Promise(resolve=>{
   const image=new Image();let finished=false;
   const finish=value=>{if(finished)return;finished=true;clearTimeout(timer);resolve(value);};
   const timer=setTimeout(()=>finish('unknown'),15000);
   image.onload=()=>{try{
    const canvas=document.createElement('canvas');canvas.width=32;canvas.height=48;
    const context=canvas.getContext('2d',{willReadFrequently:true});context.drawImage(image,0,0,32,48);
    const samples=[];for(const y of [3,5,42,44])for(const x of [3,8,16,23,28]){const p=context.getImageData(x,y,1,1).data;samples.push(.2126*p[0]+.7152*p[1]+.0722*p[2]);}
    samples.sort((a,b)=>a-b);const light=samples[Math.floor(samples.length/2)];
    finish(light>181?'light':light>93.5?'gray':'dark');
   }catch{finish('unknown');}};
   image.onerror=()=>finish('unknown');image.src=window.ForiData.image(work.image);
  });backgroundCache.set(work.image,promise);return promise;
 }
 // The book owns its selection; vessel filters only affect the gallery below.
 const bookRoot=$('sharing-book'),bookSpread=$('book-spread'),book=$('brass-book');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let bookPool=[],bookPair=[],bookPaused=reduced.matches,bookVisible=false,bookTurning=false,bookTimer,bookStarted=false;
 function bookSchedule(){clearTimeout(bookTimer);if(!bookPaused&&bookVisible&&!document.hidden&&!bookSpread.contains(document.activeElement)&&!$('art-view').open)bookTimer=setTimeout(()=>turnBook(),6500);}
 function chooseBookPair(){const pair=ForiLightbox.choose(bookPool);return pair.length?pair:null;}
 async function turnBook(){
  if(bookTurning)return;const pair=chooseBookPair();if(!pair)return;
  bookTurning=true;clearTimeout(bookTimer);
  // Decode before turning, so slow image requests never reveal an empty page.
  await Promise.all(pair.map(w=>{const img=new Image();img.src=window.ForiData.image(w.image);return img.decode().catch(()=>{});}));
  if(bookPair.length&&!reduced.matches){bookSpread.classList.add('fading');await new Promise(resolve=>setTimeout(resolve,450));}
  bookPair=pair;renderInto(bookSpread,pair,false);bookSpread.querySelectorAll('img').forEach(img=>img.loading='eager');

  bookSpread.classList.toggle('single-artwork',pair.length===1);
  bookSpread.classList.remove('fading');
  bookTurning=false;bookSchedule();
 }
 let exhibitionBusy=false;
 $('exhibition-random').onclick=()=>renderExhibition();
 async function renderExhibition(){if(exhibitionBusy)return;exhibitionBusy=true;const trigger=$('exhibition-random');trigger.disabled=true;trigger.textContent='更新中…';$('exhibition-works').setAttribute('aria-busy','true');try{const chosen=ForiExhibition.choose(bookPool),wall=$('exhibition-works'),tones=await Promise.all(chosen.map(artworkBackground)),order=['light','gray','dark','unknown'];const sorted=chosen.map((work,i)=>({work,tone:tones[i]})).sort((a,b)=>order.indexOf(a.tone)-order.indexOf(b.tone)).map(item=>item.work);renderInto(wall,sorted,false);$('community-exhibition').hidden=!chosen.length;[...wall.children].forEach((work,index)=>{const plaque=document.createElement('span');plaque.className='exhibition-number';plaque.textContent=String(index+1).padStart(2,'0');plaque.setAttribute('aria-hidden','true');work.prepend(plaque);});}finally{exhibitionBusy=false;trigger.disabled=false;trigger.innerHTML='重新隨機 <span aria-hidden="true">↻</span>';$('exhibition-works').removeAttribute('aria-busy');}}
 async function loadBook(){
  if(bookStarted)return;bookStarted=true;let offset=0;
  try{do{
   const result=await worksPage(offset,'all');
   const rows=(result.works||[]).filter(w=>w.image&&/^\/api\/images\/[a-f0-9-]{36}$/i.test(w.image));
   bookPool=[...new Map(bookPool.concat(rows).map(w=>[w.image,w])).values()];
   const previous=offset;offset=result.next;if(offset!==null&&(!Number.isInteger(offset)||offset<=previous))break;
  }while(offset!==null);
  }catch{/* Loaded approved artworks remain usable if a later page fails. */}
  if(bookPool.length){renderExhibition();bookRoot.hidden=false;await turnBook();}
 }
 bookSpread.addEventListener('focusin',()=>clearTimeout(bookTimer));bookSpread.addEventListener('focusout',()=>setTimeout(bookSchedule,0));
 document.addEventListener('visibilitychange',bookSchedule);$('art-view').addEventListener('close',bookSchedule);
 reduced.addEventListener('change',()=>{bookPaused=reduced.matches;bookSchedule();});
 new IntersectionObserver(entries=>{bookVisible=entries[0].isIntersecting;bookSchedule();},{threshold:.15}).observe(bookRoot);
 // Begin loading the featured lightbox when the page title is in view.
 const bookLoader=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){bookLoader.disconnect();loadBook();}},{rootMargin:'400px'});bookLoader.observe(document.querySelector('.gallery-title'));
 async function renderCommunity(){
  const revision=++backgroundRevision;
  if(!featuredImages.length&&community.length){
   const candidates=[...community];
   for(let i=0;i<2&&candidates.length;i++){const index=Math.floor(Math.random()*candidates.length);featuredImages.push(candidates.splice(index,1)[0].image);}
  }
  renderInto($('featured-works'),featuredImages.map(image=>community.find(w=>w.image===image)).filter(Boolean),false);
  const works=community.filter(w=>!featuredImages.includes(w.image));
  if(!works.length){for(const track of list.querySelectorAll('.carousel-track'))track._carouselCleanup?.();list.replaceChildren();list.hidden=true;list.removeAttribute('aria-busy');return;}
  list.setAttribute('aria-busy','true');
  const results=new Array(works.length);let cursor=0;
  await Promise.all(Array.from({length:Math.min(4,works.length)},async()=>{while(cursor<works.length){const index=cursor++;results[index]=await artworkBackground(works[index]);if(revision!==backgroundRevision)return;}}));
  if(revision!==backgroundRevision)return;
  const previous=Object.fromEntries([...list.querySelectorAll('.carousel-track')].map(track=>[track.id,track._carouselIndex||0]));
  for(const track of list.querySelectorAll('.carousel-track'))track._carouselCleanup?.();list.replaceChildren();list.hidden=false;list.removeAttribute('aria-busy');
  for(const [key,label] of backgroundGroups){
   const rows=works.filter((_,i)=>(results[i]==='gray'?'light':results[i])===key);if(!rows.length)continue;
   const section=document.createElement('section');section.className='background-row';
   const heading=document.createElement('h3');heading.id='background-heading-'+key;heading.className='background-heading';
   const swatch=document.createElement('span');swatch.className='background-swatch '+key;swatch.setAttribute('aria-hidden','true');heading.append(swatch,document.createTextNode(label+' · '+rows.length+' 件'));
   section.setAttribute('aria-labelledby',heading.id);const track=document.createElement('div');track.id='background-'+key;track.className='works background-track';track._carouselIndex=previous[track.id]||0;
   section.append(heading,track);list.append(section);renderInto(track,rows);track.setAttribute('aria-label',label+'作品，可左右滑動');
  }
 }
 function setupCarousel(track,count,previous,loop=true){
  track._carouselCleanup?.();track.classList.add('carousel-track');track.tabIndex=0;
  track.setAttribute('aria-label',track.id==='hana-works'?'Hana 老師作品，可左右滑動':'大家的作品，可左右滑動');
  let controls=track.previousElementSibling;
  if(!controls?.classList.contains('carousel-controls')){
   controls=document.createElement('div');controls.className='carousel-controls';
   controls.innerHTML='<span>左右滑動，看看每一份創作</span><button type="button" aria-label="上一張作品"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m14 5-7 7 7 7M7 12h14"/></svg></button><button type="button" aria-label="下一張作品"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m10 5 7 7-7 7M3 12h14"/></svg></button>';
   track.before(controls);
  }
  controls.hidden=count<2;track.hidden=!count;
  let stride=0,cycle=0,frame=0;
  const jump=x=>track.scrollTo({left:x,behavior:'instant'});
  const measure=()=>{stride=track.firstElementChild?track.firstElementChild.getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap):0;cycle=count*stride;jump((loop&&count>1?cycle*2:0)+Math.min(previous,Math.max(0,count-1))*stride);if(!loop)scroll();};
  const scroll=()=>{if(!loop){track._carouselIndex=stride?Math.round(track.scrollLeft/stride):0;previous=track._carouselIndex;buttons[0].disabled=track.scrollLeft<=1;buttons[1].disabled=track.scrollLeft>=track.scrollWidth-track.clientWidth-1;return;}if(count<2||!cycle)return;const x=track.scrollLeft;track._carouselIndex=Math.round(((x%cycle)+cycle)%cycle/stride)%count;previous=track._carouselIndex;if(x<cycle*1.5)jump(x+cycle);else if(x>cycle*2.5)jump(x-cycle);};
  const step=direction=>track.scrollBy({left:direction*stride,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  const buttons=controls.querySelectorAll('button');buttons[0].onclick=()=>step(-1);buttons[1].onclick=()=>step(1);
  const key=e=>{if(e.target!==track)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();step(e.key==='ArrowLeft'?-1:1);}};
  track.addEventListener('scroll',scroll,{passive:true});track.addEventListener('keydown',key);
  const observer=new ResizeObserver(()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(measure);});observer.observe(track);
  track._carouselCleanup=()=>{observer.disconnect();cancelAnimationFrame(frame);track.removeEventListener('scroll',scroll);track.removeEventListener('keydown',key);};
  measure();
 }
 fetch('gallery/works.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(rows=>{if(!Array.isArray(rows))throw Error();const published=rows.filter(w=>w.published===true),hana=published.filter(w=>w.collection==='Hana'),community=published.filter(w=>w.collection!=='Hana');hanaWorks=hana;renderHana();if(requestedWork&&/^hana-\d+$/i.test(requestedWork)){const work=hana.find(w=>shareKey(w)===requestedWork.toLowerCase());if(work)showArtwork(work);else sharedError();}}).catch(()=>{const p=document.createElement('p');p.className='load-error';p.textContent='作品暫時無法載入，請重新整理。';list.append(p);});
 function startSubmission(){$('form-success').hidden=true;$('submission-form').hidden=false;document.querySelector('#submission .notice').hidden=false;}
 $('open-submit').onclick=()=>{startSubmission();$('submission').showModal();};$('finish-submission').onclick=()=>$('submission').close();$('submit-another').onclick=()=>{startSubmission();$('creator').focus();};$('close-submit').onclick=e=>{e.preventDefault();e.stopPropagation();$('submission').close();};$('close-art').onclick=()=>$('art-view').close();

 let requestId=window.ForiData.randomUUID(),busy=false,selectedFile=null,previewRevision=0;
 const button=$('send-submission');
 const resetId=()=>{requestId=window.ForiData.randomUUID();$('form-success').hidden=true;};
 $('creator').addEventListener('input',()=>{resetId();$('preview-creator').textContent=$('creator').value.trim()||'創作者名字'});
 $('instagram').addEventListener('input',()=>{resetId();const handle=$('instagram').value.trim().replace(/^@/,'');$('preview-instagram').textContent=handle?'@'+handle:'';$('preview-instagram').hidden=!handle});
 $('art-file').addEventListener('change',async()=>{
  const revision=++previewRevision;resetId();selectedFile=null;$('form-error').textContent='';
  const file=$('art-file').files[0];if(!file)return;
  if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>10*1024*1024){$('form-error').textContent='請選擇 10 MB 以下的 PNG、JPG 或 WebP 圖片。';return;}
  const src=URL.createObjectURL(file),test=new Image();try{test.src=src;await test.decode();if(test.naturalWidth*test.naturalHeight>40000000)throw Error();}catch{URL.revokeObjectURL(src);$('form-error').textContent='圖片無法讀取或尺寸過大，請換一張圖片。';return;}
  if(revision!==previewRevision){URL.revokeObjectURL(src);return;}if(imageUrl)URL.revokeObjectURL(imageUrl);imageUrl=src;selectedFile=file;$('submission-image').src=src;$('submission-image').hidden=false;document.querySelector('.image-placeholder').hidden=true;
 });
 $('submission-form').onsubmit=async e=>{
  e.preventDefault();if(busy)return;$('form-error').textContent='';if(!$('creator').value.trim()||!selectedFile){$('form-error').textContent='請填寫創作者名字並選擇有效圖片。';return;}
  const form=new FormData();form.set('id',requestId);form.set('creator',$('creator').value.trim());form.set('instagram',$('instagram').value.trim());form.set('consent',$('consent').checked?'yes':'no');form.set('image',selectedFile);
  busy=true;button.disabled=true;button.textContent='正在保存…';$('submission-form').setAttribute('aria-busy','true');
  for(const input of $('submission-form').querySelectorAll('input'))input.disabled=true;
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),60000);
  try{const response=await fetch('/api/submissions',{method:'POST',body:form,signal:controller.signal});const result=await response.json().catch(()=>{throw Error('服務暫時無法連線，請稍後再試。')});if(!response.ok)throw Error(result.error||'投稿未完成，請再試一次。');
   $('submission-form').hidden=true;document.querySelector('#submission .notice').hidden=true;$('form-success').hidden=false;$('submission').scrollTop=0;$('form-success').focus();
   $('submission-form').reset();selectedFile=null;++previewRevision;if(imageUrl){URL.revokeObjectURL(imageUrl);imageUrl=null;}$('submission-image').removeAttribute('src');$('submission-image').hidden=true;document.querySelector('.image-placeholder').hidden=false;$('preview-creator').textContent='創作者名字';$('preview-instagram').textContent='';$('preview-instagram').hidden=true;requestId=window.ForiData.randomUUID();button.textContent='再保存一份作品';
  }catch(error){$('form-error').textContent=error.name==='AbortError'?'連線較慢，請再按一次送出確認，不會重複投稿。':error instanceof TypeError?'無法連線，資料仍保留，請稍後再試。':error.message||'無法連線，請稍後再試。';button.textContent='重新保存';}
  finally{clearTimeout(timeout);busy=false;button.disabled=false;$('submission-form').removeAttribute('aria-busy');for(const input of $('submission-form').querySelectorAll('input'))input.disabled=false;}
 };
 let community=[],next=0;
 const more=document.createElement('button');more.className='primary';more.textContent='看更多作品';more.hidden=true;list.after(more);
 async function loadCommunity(){const version=++communityRevision;more.disabled=true;try{const result=await worksPage(next,selectedVessel);if(version!==communityRevision)return;community=Array.from(new Map(community.concat(result.works).map(w=>[w.image,w])).values());renderCommunity();$('design-note').hidden=community.length>0;$('design-note').textContent='此分類目前沒有作品，歡迎分享你的創作。';$('work-count').textContent=community.length+' WORKS';next=result.next;more.hidden=next===null;}catch{if(version!==communityRevision)return;$('design-note').hidden=false;$('design-note').textContent='大家的作品暫時無法載入，請重新整理再試。';}finally{if(version===communityRevision)more.disabled=false;}}

 more.onclick=()=>loadCommunity();
 const communityLoader=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){communityLoader.disconnect();if(!community.length)loadCommunity();}},{rootMargin:'300px'});communityLoader.observe(filter);

})();
