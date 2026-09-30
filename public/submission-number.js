(() => {
 const format=value=>Number.isSafeInteger(value)&&value>0?'No. '+String(value).padStart(4,'0'):'';
 const dateFormat=new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'Asia/Taipei'});
 const categories=['slender','tapered','round','cylinder','bowl','goblet','bouquet','novelty'];
 window.ForiSubmissionNumber={format,attach(host,work){
  host.querySelectorAll(':scope > .art-details,:scope > .submission-number').forEach(el=>el.remove());
  const text=format(work.submission_number),selected=work.vessel==='mug'?'novelty':work.vessel;
  if(!text&&!selected)return;
  host.classList.add('numbered-art');const details=document.createElement('span');details.className='art-details';
  if(selected){const strip=document.createElement('span');strip.className='art-vessel-strip';strip.setAttribute('role','img');strip.setAttribute('aria-label','花器：'+(ForiVesselCategories[selected]||'未分類'));
   const keys=categories.includes(selected)?categories:[...categories,selected];
   for(const key of keys){const icon=document.createElement('span');icon.className='art-vessel-mark'+(key===selected?' selected':'');icon.setAttribute('aria-hidden','true');icon.innerHTML='<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+(ForiVesselIcons[key]||ForiVesselIcons.unclassified)+'</svg>';strip.append(icon);}
   details.append(strip);
  }
  if(text){const label=document.createElement('span');label.className='submission-number';label.textContent=text;label.setAttribute('aria-label','投稿編號 '+text.slice(4));details.append(label);}
  const published=work.published_at||work.reviewed_at;if(text&&Number.isFinite(published)&&published>0){const date=document.createElement('time');date.className='art-added-date';date.dateTime=new Date(published).toISOString();date.lang='en';date.textContent='Added · '+dateFormat.format(published);details.prepend(date);}
  host.append(details);
 }};
})();
