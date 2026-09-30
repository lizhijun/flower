// Local, bounded visual history. No screen, microphone, or camera capture.
(() => {
 let job=0,busy=false,url=null,stream=null,recorder=null;
 const button=$('make-replay'),download=$('download-replay'),status=$('replay-status');
 const mime=typeof MediaRecorder==='undefined'?'':['video/mp4;codecs=avc1.640028','video/mp4','video/webm;codecs=vp8','video/webm'].find(t=>MediaRecorder.isTypeSupported(t));
 const supported=!!mime&&!!HTMLCanvasElement.prototype.captureStream;
 function clearOutput(){if(url)URL.revokeObjectURL(url);url=null;download.hidden=true;download.removeAttribute('href');$('replay-preview').hidden=true;$('replay-preview').removeAttribute('src');}
 // Reconstruct the finished arrangement, instead of sampling only recent edits.
 // Stable insertion IDs preserve appearance order without altering final layering.
 function buildFrames(){
  const clone=$('scene').cloneNode(true);clone.setAttribute('xmlns',NS);clone.setAttribute('width','1080');clone.setAttribute('height','1500');clone.removeAttribute('id');clone.querySelectorAll('.selection-ring').forEach(n=>n.remove());clone.querySelectorAll('[tabindex]').forEach(n=>n.removeAttribute('tabindex'));
  const defs=document.createElementNS(NS,'defs');document.querySelectorAll('body > svg defs').forEach(d=>{for(const child of d.children)defs.appendChild(child.cloneNode(true));});clone.prepend(defs);
  const ids=items.map(i=>i.id).sort((a,b)=>a-b),steps=Math.min(11,ids.length),result=[];
  for(let step=0;step<=steps;step++){
   const count=steps?Math.ceil(step*ids.length/steps):0,visible=new Set(ids.slice(0,count)),frame=clone.cloneNode(true);
   frame.querySelectorAll('[data-id],[data-replay-id]').forEach(n=>{if(!visible.has(Number(n.dataset.id??n.dataset.replayId)))n.remove();});
   result.push({svg:new XMLSerializer().serializeToString(frame),background:{...backgroundColors[backgroundColor]},count});
  }
  return result;
 }
 globalThis.ForiReplay={changed(){clearOutput();},buildFrames,get count(){return Math.min(12,items.length+1);}};
 function stop(){job++;if(recorder?.state==='recording')recorder.stop();stream?.getTracks().forEach(t=>t.stop());stream=null;busy=false;button.disabled=!supported;}
 $('card-dialog').addEventListener('close',()=>{stop();clearOutput();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&busy){stop();status.textContent='影片製作已中斷，請保持頁面開啟後重試。';}});
 $('finish').addEventListener('click',()=>{status.textContent=supported?'約 8 秒，從空花器逐步呈現到完成作品。':'此瀏覽器暫不支援影片下載，請使用新版 Safari 或 Chrome。';button.disabled=!supported;});
 button.disabled=!supported;
 button.onclick=async()=>{
  if(busy||!supported)return;clearOutput();busy=true;button.disabled=true;const current=++job;
  const check=()=>{if(current!==job)throw Error('cancelled');};
  status.textContent='正在製作影片，請保持頁面開啟…';
  const decoded=[];
  try{
   // Bound full-HD frame buffers to 12 while retaining the first and final states.
   const chosen=buildFrames();
   for(const frame of chosen){check();const doc=new DOMParser().parseFromString(frame.svg,'image/svg+xml'),root=doc.documentElement;
    await Promise.all([...root.querySelectorAll('image')].map(async n=>{const data=await embeddedAsset(n.getAttribute('href'));n.setAttribute('href',data);n.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href',data);}));check();
    const blob=new Blob([new XMLSerializer().serializeToString(root)],{type:'image/svg+xml;charset=utf-8'});
    const src=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob);});
    const img=await loadPicture(src);check();const c=document.createElement('canvas');c.width=1080;c.height=1920;const ctx=c.getContext('2d');ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.fillStyle=frame.background.color;ctx.fillRect(0,0,1080,1920);ctx.drawImage(img,0,135,1080,1500);drawExportLogo(ctx,await exportLogo(frame.background.dark),400,1920*1508/1600,280);decoded.push(c);
   }
   check();const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1920;const ctx=canvas.getContext('2d');ctx.drawImage(decoded[0],0,0);stream=canvas.captureStream(30);
   recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:10000000});const parts=[];const finished=new Promise((resolve,reject)=>{recorder.ondataavailable=e=>{if(e.data.size)parts.push(e.data);};recorder.onstop=resolve;recorder.onerror=reject;});
   recorder.start();const start=performance.now();
   await new Promise((resolve,reject)=>{function tick(now){try{check();const elapsed=Math.max(0,now-start),p=Math.max(0,Math.min((elapsed-600)/5400,1))*(decoded.length-1),i=Math.floor(p),fraction=p-i;ctx.globalAlpha=1;ctx.drawImage(decoded[i],0,0);if(i<decoded.length-1){ctx.globalAlpha=fraction;ctx.drawImage(decoded[i+1],0,0);ctx.globalAlpha=1;}if(elapsed>=8000){resolve();return;}requestAnimationFrame(tick);}catch(e){reject(e);}}requestAnimationFrame(tick);});
   recorder.stop();await finished;check();const blob=new Blob(parts,{type:recorder.mimeType||mime});if(!blob.size)throw Error('empty video');url=URL.createObjectURL(blob);download.href=url;download.download='FORi Flower-creation.'+(blob.type.includes('mp4')?'mp4':'webm');download.hidden=false;$('replay-preview').src=url;$('replay-preview').hidden=false;status.textContent='影片已完成，可以預覽並下載。';
  }catch(e){if(current===job){status.textContent='影片製作失敗，請重試或使用新版 Safari 或 Chrome。';console.error(e);}}
  finally{decoded.forEach(c=>{c.width=0;c.height=0;});if(current===job){if(recorder?.state==='recording')recorder.stop();stream?.getTracks().forEach(t=>t.stop());stream=null;busy=false;button.disabled=false;}}
 };
})();
