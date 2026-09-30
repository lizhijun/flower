// Render the original front rose once into real alpha pixels. Avoid nested SVG
// chroma-key/tone filters, which can leave an opaque rectangle on some GPUs.
window.ForiRose=(()=>{
 let source=null;const cache=new Map();
 const clamp=n=>Math.max(0,Math.min(1,n));
 const ready=new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>{try{const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(im,0,0);source={width:c.width,height:c.height,pixels:ctx.getImageData(0,0,c.width,c.height).data};resolve();}catch(e){reject(e)}};im.onerror=()=>reject(Error('Rose image could not load'));im.src='assets/rose.webp';});
 function image(color,gradient=false){if(!source)return null;const key=color+':'+gradient;if(cache.has(key))return cache.get(key);const {width,height,pixels}=source,c=document.createElement('canvas');c.width=width;c.height=height;const ctx=c.getContext('2d'),out=ctx.createImageData(width,height),rgb=color.slice(1).match(/../g).map(x=>parseInt(x,16)),pale=Math.min(...rgb)>173.4;
 for(let i=0;i<pixels.length;i+=4){const r=pixels[i]/255,g=pixels[i+1]/255,b=pixels[i+2]/255;const alpha=clamp(4*clamp(clamp(8*(g-r)-.04)+clamp(8*(r-b)-.04)))*pixels[i+3]/255;const tone=(.2126*r+.7152*g+.0722*b)*(pale?.16:.8)+(pale?.84:.2);let result=rgb.map(v=>v*tone),a=alpha;
 if(gradient&&alpha){const x=(i/4)%width,y=Math.floor(i/4/width),t=clamp(Math.hypot((x/width-.5)/.58,(y/height-.45)/.58));const stops=[[115,24,46],[183,50,73],[232,125,133]],lo=t<.45?0:1,u=t<.45?t/.45:(t-.45)/.55,overlay=stops[lo].map((v,j)=>v+(stops[lo+1][j]-v)*u),oa=.42*alpha;a=oa+alpha*(1-oa);result=result.map((v,j)=>(overlay[j]*oa+v*alpha*(1-oa))/a);}
 out.data[i]=Math.round(result[0]);out.data[i+1]=Math.round(result[1]);out.data[i+2]=Math.round(result[2]);out.data[i+3]=Math.round(a*255);}
 ctx.putImageData(out,0,0);const url=c.toDataURL('image/png');if(cache.size>=128)cache.delete(cache.keys().next().value);cache.set(key,url);return url;
 }
 return {ready,image};
})();
