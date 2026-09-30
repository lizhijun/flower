// Weighted sampling without replacement: a featured work has four tickets.
globalThis.ForiLightbox={choose(works,random=Math.random){
 const pool=[...new Map(works.map(w=>[w.image,w])).values()],chosen=[];
 while(chosen.length<2&&pool.length){const total=pool.reduce((sum,w)=>sum+(w.lightboxPriority===true?4:1),0);let ticket=random()*total,index=pool.length-1;for(let i=0;i<pool.length;i++){ticket-=pool[i].lightboxPriority===true?4:1;if(ticket<0){index=i;break;}}chosen.push(pool.splice(index,1)[0]);}
 return chosen;
}};
