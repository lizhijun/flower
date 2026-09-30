// Choose a unique ten-work exhibition, targeting six priority works and at most two bouquets.
globalThis.ForiExhibition={choose(works,random=Math.random){
 const groups=[[],[],[],[]];
 for(const w of new Map(works.map(w=>[w.image,w])).values())groups[(w.lightboxPriority===true?0:2)+(w.vessel==='bouquet'?1:0)].push(w);
 const shuffle=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 let best=-Infinity,plans=[];
 for(let p=0;p<=10;p++)for(let n=0;n<=10-p;n++)for(let pb=0;pb<=Math.min(2,p);pb++)for(let nb=0;nb<=Math.min(2-pb,n);nb++){
  const plan=[p-pb,pb,n-nb,nb];if(plan.some((c,i)=>c>groups[i].length))continue;
  const score=(p+n)*100-Math.abs(p-Math.round((p+n)*.6));
  if(score>best){best=score;plans=[plan];}else if(score===best)plans.push(plan);
 }
 const plan=plans[Math.floor(random()*plans.length)];return shuffle(groups.flatMap((g,i)=>shuffle(g).slice(0,plan[i])));
}};
