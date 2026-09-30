// Export a self-contained SVG before drawing to canvas: no external image requests
// are left inside the exported scene, and selection controls are excluded.
const CARD_EXPORT_SCALE=2;
const POSTCARD_EXPORT_SCALE=3;
let printBusy=false;
let cardBlob=null,cardUrl=null,cardBusy=false,cardRevision=0,cardTimer=null,cardQueued=false,cardComposing=false;
function scheduleCardPreview(){clearTimeout(cardTimer);cardTimer=null;if(cardComposing||!$('card-dialog').open||!greetingValid())return;cardTimer=setTimeout(()=>{cardTimer=null;prepareCard()},450)}
const assetCache=new Map();
async function embeddedAsset(url){if(!assetCache.has(url))assetCache.set(url,fetch(url).then(r=>{if(!r.ok)throw Error('素材載入失敗');return r.blob()}).then(blob=>new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob)})).then(async data=>{await loadPicture(data);return data}).catch(error=>{assetCache.delete(url);throw error}));return assetCache.get(url)}
function loadPicture(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=async()=>{try{if(img.decode)await img.decode();resolve(img)}catch(error){reject(error)}};img.onerror=()=>reject(Error('圖片製作失敗'));img.src=src})}
// Every export uses the same transparent ink artwork: no opaque white background,
// canvas filters or blend-mode support required on the receiving device.
const exportLogos=new Map();
async function exportLogo(dark){const key=Boolean(dark);if(!exportLogos.has(key))exportLogos.set(key,(async()=>{const image=await loadPicture(await embeddedAsset('fori-card-logo.png?v=2')),layer=document.createElement('canvas');layer.width=image.naturalWidth;layer.height=image.naturalHeight;const ctx=layer.getContext('2d');ctx.drawImage(image,0,0);const pixels=ctx.getImageData(0,0,layer.width,layer.height),color=key?[238,238,233]:[48,54,46];for(let i=0;i<pixels.data.length;i+=4){const luminance=.2126*pixels.data[i]+.7152*pixels.data[i+1]+.0722*pixels.data[i+2];pixels.data[i+3]=Math.round(pixels.data[i+3]*Math.max(0,(250-luminance)/225));pixels.data[i]=color[0];pixels.data[i+1]=color[1];pixels.data[i+2]=color[2];}ctx.putImageData(pixels,0,0);return layer;})().catch(e=>{exportLogos.delete(key);throw e;}));return exportLogos.get(key);}
function drawExportLogo(ctx,logo,x,y,width){ctx.save();ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;ctx.drawImage(logo,x,y,width,width*logo.height/logo.width);ctx.restore();}
function cardLines(ctx,text,width){const out=[];for(const paragraph of text.split('\n').map(line=>line.trim())){let line='';for(const char of paragraph){if(ctx.measureText(line+char).width>width&&line){out.push(line.trim());line=''}line+=char}out.push(line.trim())}return out}
// Center the visible ink, including emoji/fallback fonts on iOS, not just font advances.
function drawCenteredCardText(ctx,text,x,y,maxWidth=870){
 text=text.trim();if(!text)return;
 const scale=ctx.getTransform().a,size=parseFloat(ctx.font)||40,pad=100;
 const layer=document.createElement('canvas');layer.width=Math.ceil((ctx.measureText(text).width+pad*4)*scale);layer.height=Math.ceil(size*5*scale);
 const ink=layer.getContext('2d');ink.scale(scale,scale);ink.font=ctx.font;ink.fillStyle=ctx.fillStyle;ink.textAlign='left';ink.direction='ltr';ink.textBaseline='alphabetic';ink.fillText(text,pad,size*3);
 const pixels=ink.getImageData(0,0,layer.width,layer.height).data;let left=layer.width,right=-1;
 for(let row=0;row<layer.height;row++)for(let col=0;col<layer.width;col++)if(pixels[(row*layer.width+col)*4+3]>0){left=Math.min(left,col);right=Math.max(right,col)}
 if(right<left)return;const width=(right-left+1)/scale,ratio=Math.min(1,maxWidth/width);
 ctx.drawImage(layer,left,0,right-left+1,layer.height,x-width*ratio/2,y-size*3*ratio,width*ratio,layer.height/scale*ratio);
}
function greetingLayout(text=$('card-message').value.trim()){const measure=document.createElement('canvas').getContext('2d');measure.font='38px sans-serif';return cardLines(measure,text,870)}
function greetingValid(){return greetingLayout().length<=3}
// Keep the text below the vessel and its shadow, including the scaled paper wrap.
function cardTextLayout(vessel){const bottom=wrappedVessel(vessel)?722:vaseSizes[vessel][2]+5+(['mug','bowl'].includes(vessel)?9:14),y=Math.max(1190,Math.ceil(20+Math.min(720,bottom)*1178/720+54));return {y,recipientGap:y>1190?54:64,lineGap:y>1190?44:50};}
async function renderCardCanvas(scale,cardText,postcard=false){
 if(items.some(i=>i.type==='rose'&&i.variant%2===0))await window.ForiRose.ready;
 const background=backgroundColors[backgroundColor],textLayout=cardTextLayout(vase);const clone=$('scene').cloneNode(true);clone.setAttribute('xmlns',NS);clone.setAttribute('width',String(1080*scale));clone.setAttribute('height',String(1178*scale));clone.removeAttribute('id');clone.querySelectorAll('.selection-ring').forEach(e=>e.remove());clone.querySelectorAll('[tabindex]').forEach(e=>e.removeAttribute('tabindex'));
 const defs=document.createElementNS(NS,'defs');document.querySelectorAll('body > svg defs').forEach(e=>{for(const child of e.children)defs.appendChild(child.cloneNode(true))});clone.prepend(defs);
 await Promise.all([...clone.querySelectorAll('image')].map(async img=>{const data=await embeddedAsset(img.getAttribute('href'));img.setAttribute('href',data);img.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href',data)}));
 // Decode embedded bitmaps and the complete SVG before rasterizing, including a paint boundary.
 const svg=new Blob([new XMLSerializer().serializeToString(clone)],{type:'image/svg+xml;charset=utf-8'});
 const svgData=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(svg)});
 const artwork=await loadPicture(svgData);await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
 const canvas=document.createElement('canvas');canvas.width=1080*scale;canvas.height=(postcard?1620:1600)*scale;const ctx=canvas.getContext('2d');ctx.scale(scale,scale);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.fillStyle=background.color;ctx.fillRect(0,0,1080,postcard?1620:1600);if(postcard)ctx.translate(0,10);ctx.drawImage(artwork,0,20,1080,1178);
 ctx.fillStyle=background.dark?'#eeeee9':'#30362e';ctx.textAlign='center';ctx.font='40px sans-serif';let y=textLayout.y;const recipient=cardText.to;if(recipient){drawCenteredCardText(ctx,recipient,540,y,870);y+=textLayout.recipientGap}
 ctx.font='38px sans-serif';for(const line of greetingLayout(cardText.message)){drawCenteredCardText(ctx,line,540,y);y+=textLayout.lineGap}
 const sender=cardText.from;if(sender){ctx.font='32px sans-serif';y+=18;drawCenteredCardText(ctx,sender,540,y,870)}
 const logo=await exportLogo(background.dark);drawExportLogo(ctx,logo,400,1508,280);
 return canvas;
}
async function prepareCard(){if(cardComposing||!$('card-dialog').open)return;if(cardBusy){cardQueued=true;return;}clearTimeout(cardTimer);cardTimer=null;cardQueued=false;if(!greetingValid()){cardBlob=null;$('download-card').disabled=true;$('share-card').disabled=true;$('download-print').disabled=true;$('card-status').textContent='祝福文字最多三行（包含自動換行），請縮短文字或減少斷行。';return;}const revision=cardRevision,cardText={to:$('card-to').value.trim(),message:$('card-message').value.trim(),from:$('card-from').value.trim()};cardBusy=true;cardBlob=null;$('retry-card').hidden=true;$('card-status').textContent='正在製作圖片… · Preparing image…';for(const id of ['download-card','download-print','share-card','retry-card'])$(id).disabled=true;try{
 const canvas=await renderCardCanvas(CARD_EXPORT_SCALE,cardText);
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('圖片製作失敗');if(revision!==cardRevision||!$('card-dialog').open||cardComposing)return;cardBlob=blob;if(cardUrl)URL.revokeObjectURL(cardUrl);cardUrl=URL.createObjectURL(blob);$('card-preview').src=cardUrl;$('card-status').textContent='';
 }catch(error){if(revision===cardRevision&&$('card-dialog').open){cardBlob=null;$('retry-card').hidden=false;$('card-status').textContent='圖片暫時無法製作，請按「重新產生」再試一次。';}console.error(error)}finally{cardBusy=false;$('retry-card').disabled=false;$('download-card').disabled=!cardBlob;$('share-card').disabled=!cardBlob;$('download-print').disabled=!cardBlob||printBusy;if(cardQueued&&!cardTimer&&!cardComposing&&$('card-dialog').open){cardQueued=false;prepareCard()}}}
$('finish').onclick=()=>{cardRevision++;$('card-dialog').showModal();prepareCard()};$('close-card').onclick=()=>$('card-dialog').close();$('retry-card').onclick=prepareCard;
$('card-dialog').addEventListener('close',()=>{$('print-status').textContent='';cardRevision++;clearTimeout(cardTimer);cardTimer=null;cardQueued=false;cardComposing=false;cardBlob=null;});
function cardTextChanged(){$('print-status').textContent='';$('retry-card').hidden=true;cardRevision++;cardBlob=null;$('download-card').disabled=true;$('share-card').disabled=true;$('download-print').disabled=true;clearTimeout(cardTimer);cardTimer=null;$('card-status').textContent=greetingValid()?'文字修改後會自動更新預覽。 · Preview updates automatically.':'祝福文字最多三行（包含自動換行），請縮短文字或減少斷行。';scheduleCardPreview()}
for(const id of ['card-to','card-message','card-from']){const input=$(id);input.oninput=cardTextChanged;input.addEventListener('compositionstart',()=>{cardComposing=true;cardTextChanged()});input.addEventListener('compositionend',()=>{cardComposing=false;cardTextChanged()});}
$('download-card').onclick=()=>{if(!cardBlob)return;const a=document.createElement('a');a.href=cardUrl;a.download=globalThis.ForiLocale.translate('FORi Flower-花藝賀卡.png');a.click();$('card-status').textContent='已下載，可將圖片傳給朋友。 · Downloaded. Ready to send.'};
$('share-card').onclick=async()=>{if(!cardBlob)return;const file=new File([cardBlob],globalThis.ForiLocale.translate('FORi Flower-花藝賀卡.png'),{type:'image/png'});if(navigator.canShare?.({files:[file]})){try{await navigator.share({files:[file],title:globalThis.ForiLocale.translate('FORi Flower｜送你一份花意')})}catch(e){if(e.name!=='AbortError')$('card-status').textContent='分享未完成，請下載圖片後傳送。'}}else{$('download-card').click();$('card-status').textContent='此瀏覽器不支援直接分享，已改為下載圖片。'}};

$('download-print').onclick=async()=>{if(!cardBlob||printBusy)return;const button=$('download-print'),revision=cardRevision;printBusy=true;button.disabled=true;$('print-status').textContent=globalThis.ForiLocale.translate('正在製作明信片檔案…');let canvas;try{
 canvas=await renderCardCanvas(POSTCARD_EXPORT_SCALE,{to:$('card-to').value.trim(),message:$('card-message').value.trim(),from:$('card-from').value.trim()},true);
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',.98));if(!blob)throw Error();if(revision!==cardRevision||!$('card-dialog').open)return;
 const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='FORi-Flower-postcard-3240x4860.jpg';a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);
 $('print-status').textContent='';
 }catch{if(revision===cardRevision)$('print-status').textContent=globalThis.ForiLocale.translate('明信片檔案暫時無法下載，請再試一次。')}finally{if(canvas){canvas.width=0;canvas.height=0}printBusy=false;button.disabled=!cardBlob}};
