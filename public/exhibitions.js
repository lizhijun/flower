(()=>{const $=id=>document.getElementById(id);let activeWork=null,rooms=[],currentRoom=null,lobbyScroll=0,scrollFrame=0;const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 const roomHref=id=>'/exhibitions?room='+encodeURIComponent(id),workHref=w=>'/gallery?work='+encodeURIComponent(w.id);
 function image(w){const img=el('img');img.src=w.image;img.alt=w.alt||w.creator+' 的花藝作品';img.loading='lazy';img.decoding='async';img.width=600;img.height=900;return img;}
 function ig(w){const handle=(w.instagram||'').replace(/^@/,'');return /^[A-Za-z0-9._]{1,30}$/.test(handle)?handle:null;}
 function openArt(w){activeWork=w;$('hall-art-image').src=w.image;$('hall-art-image').alt=w.alt||w.creator+' 的花藝作品';$('hall-art-credit').textContent=w.creator;$('hall-art-ig').hidden=!ig(w);if(ig(w)){$('hall-art-ig').textContent='@'+ig(w);$('hall-art-ig').href='https://www.instagram.com/'+ig(w)+'/';}$('hall-art-detail').href=workHref(w);$('art-share-status').textContent='';$('hall-room-stamps').replaceChildren(...rooms.filter(r=>r.items.some(item=>item.id===w.id)).map(r=>ForiRoomStamps.create(r.stamp)));$('hall-art').showModal();}
 $('close-hall-art').onclick=()=>$('hall-art').close();$('hall-art').addEventListener('click',e=>{if(e.target===$('hall-art')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
 async function share(path,title,status){const url=new URL(path,location.origin).href;status.replaceChildren();try{if(navigator.share){await navigator.share({title,url});return;}await navigator.clipboard.writeText(url);status.textContent='連結已複製。';}catch(e){if(e.name==='AbortError')return;const a=el('a',null,'複製這個連結');a.href=url;status.append(a);}}
 $('share-hall-art').onclick=()=>activeWork&&share(workHref(activeWork),activeWork.creator+' 的花藝作品',$('art-share-status'));

 const scenes={sun:{name:'Morning Table',image:'/rooms/shelf-morning.webp',alt:'暖金拱形空間與淺木展示架，放著放大的杯盤、水壺和陶碗',description:'早餐還溫熱，晨光落在桌邊。讓一束花陪你慢慢開始今天。'},space:{name:'Quiet Afternoon',image:'/rooms/shelf-afternoon.webp',alt:'冷藍空間與霧面石材架，書本、檯燈和杯子構成閱讀角落',description:'翻開一本書，留一杯咖啡的位置。花就在身旁，不必說話。'},red:{name:'After Work',image:'/rooms/shelf-evening.webp',alt:'酒紅空間與深木展示架，吊燈、水壺、玻璃杯和果盤',description:'回家後點一盞燈，坐下來吃飯。桌上的花，陪你把一天放下。'}};
 const scene=r=>scenes[r.theme]||scenes.space;
 const stage=document.querySelector('.room-stage');
 function alignShelf(){const theme=rooms.find(r=>r.id===currentRoom)?.theme||'sun',y={sun:.63,space:.61,red:.56}[theme];const h=stage.clientHeight,w=stage.clientWidth,rendered=Math.max(h,w/1.5),level=(h-rendered)/2+rendered*y;const mat=$('room-works').querySelector('.work-mat');if(mat)stage.style.setProperty('--works-top',Math.max(24,level-mat.offsetHeight)+'px');}
 new ResizeObserver(alignShelf).observe(stage);

 function renderLobby(){
  $('hall-lobby').hidden=false;$('room-entries').replaceChildren();
  rooms.forEach((r,i)=>{const a=el('button','room-entry');a.type='button';a.dataset.roomId=r.id;a.setAttribute('aria-controls','hall-room');const photo=el('img','room-scene');photo.src=scene(r).image;photo.alt=scene(r).alt;photo.width=1200;photo.height=800;photo.decoding='async';photo.loading=i?'lazy':'eager';const caption=el('div','entry-description');caption.append(el('span','overline','ROOM '+String(i+1).padStart(2,'0')),el('h3',null,scene(r).name));a.append(photo,caption);a.onclick=()=>selectRoom(r.id,true);$('room-entries').append(a);});
 }
 function renderRoom(r){
  document.body.classList.remove('theme-sun','theme-space','theme-red');document.body.classList.add('living-rooms','theme-'+r.theme);$('room-works').replaceChildren();$('room-works').scrollLeft=0;$('share-status').textContent='';$('hall-room').hidden=false;
  $('room-english').textContent=scene(r).name;$('room-description').textContent=scene(r).description;$('room-seal').replaceChildren(ForiRoomStamps.create(r.stamp));
  $('share-room').onclick=()=>share(roomHref(r.id),scene(r).name+'｜FORi Flower',$('share-status'));
  if(!r.items.length)$('room-works').append(el('p','empty-room','這個房間正在安排作品。'));
  r.items.forEach(w=>{const f=el('figure','exhibit-work'),button=el('button'),mat=el('div','work-mat');button.type='button';button.setAttribute('aria-label','查看 '+w.creator+' 的作品');button.onclick=()=>openArt(w);mat.append(image(w));button.append(mat);const cap=el('figcaption');cap.append(el('span',null,w.creator));if(ig(w)){const a=el('a',null,'@'+ig(w));a.href='https://www.instagram.com/'+ig(w)+'/';a.target='_blank';a.rel='noopener noreferrer';cap.append(a);}f.append(button,cap);$('room-works').append(f);});
 }
 function selectRoom(id,push=false){
  const r=rooms.find(r=>r.id===id)||rooms[0];if(!r)return;
  if(currentRoom===r.id)return;currentRoom=r.id;
  if($('hall-art').open)$('hall-art').close();
  if(push)history.pushState({room:r.id},'',roomHref(r.id));
  for(const b of document.querySelectorAll('.room-entry'))b.setAttribute('aria-pressed',String(b.dataset.roomId===r.id));
  renderRoom(r);requestAnimationFrame(alignShelf);if(!reducedMotion.matches)$('hall-room').animate([{opacity:.3},{opacity:1}],{duration:450});
 }
 const track=$('room-entries');let scrollTimer;const alignSelected=()=>{const c=[...track.children].find(b=>b.dataset.roomId===currentRoom);if(c)track.scrollTo({left:c.offsetLeft,behavior:'instant'});};window.addEventListener('resize',()=>{clearTimeout(scrollTimer);alignSelected();});
 track.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{const center=track.getBoundingClientRect().left+(track.firstElementChild?.offsetWidth||track.clientWidth)/2;const cards=[...track.children];const nearest=cards.sort((a,b)=>Math.abs(a.getBoundingClientRect().left+a.offsetWidth/2-center)-Math.abs(b.getBoundingClientRect().left+b.offsetWidth/2-center))[0];if(nearest)selectRoom(nearest.dataset.roomId);},120);},{passive:true});
 document.querySelectorAll('[data-track]').forEach(b=>b.onclick=()=>{const t=$(b.dataset.track);if(t===track){const i=rooms.findIndex(r=>r.id===currentRoom),next=Math.max(0,Math.min(rooms.length-1,i+Number(b.dataset.step)));selectRoom(rooms[next].id,true);t.scrollTo({left:t.children[next].offsetLeft,behavior:reducedMotion.matches?'instant':'smooth'});}else t.scrollBy({left:Number(b.dataset.step)*(t.firstElementChild?.offsetWidth+24||300),behavior:reducedMotion.matches?'instant':'smooth'});});
 window.addEventListener('popstate',()=>{selectRoom(new URLSearchParams(location.search).get('room'));const card=[...track.children].find(b=>b.dataset.roomId===currentRoom);if(card)track.scrollLeft=card.offsetLeft;});
 async function load(){try{const res=await fetch('/api/exhibitions',{cache:'no-store'}),data=await res.json();if(!res.ok)throw Error(data.error||'小房間暫時無法載入。');rooms=data.exhibitions;$('hall-status').hidden=true;renderLobby();if(!rooms.length){$('hall-status').hidden=false;$('hall-status').textContent='新的小房間正在準備中。';return;}selectRoom(new URLSearchParams(location.search).get('room'));const card=[...track.children].find(b=>b.dataset.roomId===currentRoom);if(card)track.scrollLeft=card.offsetLeft;}catch(e){$('hall-status').hidden=false;$('hall-status').textContent=e.message||'小房間暫時無法載入。';const retry=el('button',null,'重新載入');retry.onclick=()=>location.reload();$('hall-status').append(retry);}}
 load();})();
