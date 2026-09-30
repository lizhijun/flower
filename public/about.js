(()=>{
 const garden=document.querySelector('.falling-petals'),button=document.getElementById('petals-toggle'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let width=innerWidth,height=innerHeight,paused=false,frame=0,last=0,time=0,nextGust=6,gustStart=-100,gustDuration=7,gustStrength=1;
 const seeds=[],random=(a,b)=>a+Math.random()*(b-a);
 function spawn(p,initial=false){
  // Keep a balanced mix of distant, in-focus and near-camera seeds.
  const layers=[{depth:.4,size:[18,29],blur:.5,alpha:.24},{depth:.85,size:[40,65],blur:0,alpha:.56},{depth:1.55,size:width<700?[80,110]:[100,150],blur:1.7,alpha:.4},{depth:2.3,size:width<700?[180,240]:[250,330],blur:3.5,alpha:.3}];
  const layer=layers[p.layer];p.depth=layer.depth;p.alpha=layer.alpha;p.size=random(...layer.size);
  p.x=initial?random(-p.size,width):random(-width*.3,width*.85);p.y=initial?random(-p.size,height):-p.size;
  p.phase=random(0,Math.PI*2);p.fall=random(10,19)*p.depth;p.speed=random(.85,1.15);p.age=initial?3:0;p.vx=7*p.depth;p.vy=p.fall;
  p.el.style.setProperty('--size',p.size+'px');p.el.style.setProperty('--softness',layer.blur+'px');p.el.style.zIndex=p.layer;
 }
 function tick(now){
  if(paused||document.hidden||reduced.matches){frame=0;last=0;return;}
  const dt=last?Math.min((now-last)/1000,.05):0;last=now;time+=dt;
  if(time>=nextGust){gustStart=time;gustDuration=random(5,8);gustStrength=random(.8,1.25);nextGust=time+gustDuration+random(10,17);}
  const progress=(time-gustStart)/gustDuration,gust=progress>=0&&progress<1?Math.pow(Math.sin(progress*Math.PI),2)*gustStrength:0;
  const wind=7+3*Math.sin(time*.23)+48*gust;
  for(const p of seeds){
   if(p.rare&&!p.active){if(time<p.nextAt)continue;spawn(p);p.x=random(-p.size*.4,width*.2);p.y=random(-p.size,height*.25);p.active=true;}
   p.age+=dt;
   // A shared gust accelerates and lifts the seeds; inertia softens its arrival and release.
   const follow=1-Math.exp(-dt*1.2);
   p.vx+=(wind*p.speed*p.depth+3*Math.sin(time*.7+p.phase)-p.vx)*follow;
   p.vy+=(p.fall+3*Math.sin(time*.5+p.phase)-gust*19*p.depth-p.vy)*follow;
   p.x+=p.vx*dt;p.y+=p.vy*dt;
   if(p.y>height+p.size||p.x>width+p.size){if(p.rare){p.active=false;p.nextAt=time+random(45,75);p.el.style.opacity=0;continue;}spawn(p);}
   const turn=-12-gust*24+10*Math.sin(time*.65+p.phase),fold=.91+.08*Math.sin(time*.55+p.phase);
   p.el.style.transform=`translate3d(${p.x}px,${p.y}px,0) rotate(${turn}deg) scaleX(${fold})`;
   const edge=Math.max(0,Math.min(1,(p.x+p.size)/(p.size+20),(width+p.size-p.x)/(p.size+20),(height+35-p.y)/90,p.age/2.5));
   p.el.style.opacity=edge*p.alpha;
  }
  frame=requestAnimationFrame(tick);
 }
 function resume(){if(!frame&&!paused&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(tick);}
 for(let i=0;i<(width<700?10:17);i++){const el=document.createElement('img');el.src='assets/dandelion-seed.png';el.alt='';el.className='falling-petal';el.draggable=false;garden.append(el);const p={el,layer:[0,1,0,1,2][i%5]};spawn(p,true);seeds.push(p);}
 const closeSeed=document.createElement('img');closeSeed.src='assets/dandelion-seed.png';closeSeed.alt='';closeSeed.className='falling-petal';closeSeed.draggable=false;garden.append(closeSeed);seeds.push({el:closeSeed,layer:3,rare:true,active:false,nextAt:random(20,35)});
 button.addEventListener('click',()=>{paused=!paused;button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'繼續飄落':'暫停飄落';if(paused){cancelAnimationFrame(frame);frame=0;last=0;}else resume();});
 addEventListener('resize',()=>{width=innerWidth;height=innerHeight;});document.addEventListener('visibilitychange',resume);reduced.addEventListener('change',resume);resume();
})();
