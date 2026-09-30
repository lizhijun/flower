const NS='http://www.w3.org/2000/svg';
const data=[
 {id:'doublelisianthus',name:'洋桔梗',en:'Double lisianthus',size:33,vectorHead:true,colors:[['白紫邊','#7951b4'],['奶白','#fcfaf2'],['淡粉','#e5b8c8'],['紫色','#b5a0cc'],['淺綠','#cbd4ab']]},
 {id:'minirose',name:'迷你玫瑰',en:'Mini rose',size:29,vectorHead:true,stemWidth:1.5,colors:[['柔粉','#e6b3b0'],['奶白','#fcfaf2'],['杏橘','#edb082'],['黃色','#e8c65b'],['經典紅','#c52e36']]},
{"id": "spidermum", "name": "煙火菊", "en": "Spider chrysanthemum", "size": 43, "vectorHead": true, "stemWidth": 2.2, "colors": [["橘金", "#b96b35"], ["黃色", "#e3cd83"]]},
{"id": "feathergerbera", "name": "羽毛太陽", "en": "Spider gerbera", "size": 40, "vectorHead": true, "stemWidth": 2.1, "colors": [["粉色", "#e6b1c3"], ["白色", "#fcfaf3"], ["黃色", "#e7c965"], ["橘色", "#e79a56"], ["紅色", "#c94c53"]]},
{"id": "poppy", "name": "罌粟", "en": "Poppy", "size": 35, "vectorHead": true, "stemWidth": 1.7, "colors": [["紅色", "#ce5149"], ["橘色", "#e49b62"], ["黃色", "#ebce72"], ["白色", "#fcfaf1"]]},
{"id": "laceflower", "name": "蕾絲花", "en": "Lace flower", "size": 33, "artSize": [110, 125], "colors": [["白色", "#f5f3e8"]], "extra": true, "vectorSpray": true, "stemWidth": 1.5},
{"id": "sweetpea", "name": "香碗豆", "en": "Sweet pea", "size": 31, "artSize": [95, 130], "colors": [["粉色", "#e6b6ca"], ["白色", "#fffaf5"], ["紫色", "#a28cb9"]], "extra": true, "vectorSpray": true, "stemWidth": 1.5},
{"id": "gomphrena", "name": "千日紅", "en": "Globe amaranth", "size": 23.4, "artSize": [85.5, 117], "colors": [["紅色", "#b94d64"], ["粉色", "#dfa7c2"], ["漸層橘紅", "#dc8955"], ["白色", "#fbf7ec"]], "extra": true, "vectorSpray": true, "stemWidth": 1.35},
{"id": "lilyofthevalley", "name": "鈴蘭", "en": "Lily of the valley", "size": 30.8, "artSize": [93.5, 148.5], "colors": [["白色", "#fffdf5"]], "extra": true, "vectorSpray": true, "stemWidth": 1.5},
 {id:'rose',name:'玫瑰',en:'Rose',size:27,colors:[['經典紅','#c52e36'],['柔粉','#e6b3b0'],['奶白','#fcfaf2'],['酒紅','#9d344c'],['杏橘','#edb082'],['黃色','#e8c65b'],['深藍色','#344b83'],['紫色','#9773b1'],['漸層紅色','#d86572']]},
 {id:'sunflower',name:'向日葵',en:'Sunflower',size:44,newHead:true,naturalColor:true,neutralKey:true,stemWidth:2.8,colors:[['金黃','#e4b949']]},
 {id:'carnation',name:'康乃馨',en:'Carnation',size:28,colors:[['淺粉','#f5dddc'],['白色','#fcfaf2'],['桃紅','#e5a6bf'],['珊瑚','#efbeb1'],['經典紅','#cf303b']]},
 {id:'tulip',name:'鬱金香',en:'Tulip',size:30.03,colors:[['黃色','#e9cd71'],['奶白','#fcfaf2'],['粉色','#e2a9b3'],['紫色','#b6a0c2']]},
 {id:'gerbera',name:'非洲菊',en:'Gerbera',size:32.3,colors:[['杏橘','#e3a27f'],['黃色','#e6c775'],['粉色','#d99aaa'],['白色','#fcfaf2'],['橘色','#ed913d'],['桃紅','#c64c91'],['紅色','#bf3047']]},
 {id:'lisianthus',name:'單瓣桔梗',en:'Single lisianthus',previewColor:2,size:28,colors:[['奶白','#fcfaf2'],['淡粉','#e5b8c8'],['紫色','#b5a0cc'],['淺綠','#cbd4ab']]},
 {id:'pompon',previewColor:1,name:'乒乓菊',en:'Pompon mum',size:32,colors:[['奶白','#fcfaf2'],['黃色','#e2cc78'],['淺綠','#c4d2a0'],['淡粉','#e4b8c2']]},
 {id:'ranunculus',name:'陸蓮',en:'Ranunculus',size:30,newHead:true,colors:[['柔粉','#ecc2c5'],['奶白','#fcfaf2'],['橘色','#eeb18b'],['酒紅','#a3445e']]},
 {id:'peonymum',name:'牡丹菊',en:'Peony mum',size:48.75,newHead:true,colors:[['粉紫','#d4b1cf'],['奶白','#fcfaf2'],['黃色','#e9d27c']]},
 {id:'pincushion',name:'針墊花',en:'Pincushion protea',size:39,extra:true,newAtlas:true,keepAspect:true,artSize:[92,92],stemWidth:2.5,colors:[['橘色','#d58b3d']]},
 {"id":"peony","name":"芍藥","en":"Peony","size":39,"artSize":[88,86],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"recolorPetals":true,"stemWidth":2.4,"colors":[["柔粉","#edbccd"],["白色","#fffdfa"],["珊瑚","#e79a87"],["酒紅","#983d53"]]},
 {"id":"dahlia","name":"大理花","en":"Dahlia","size":34.2,"artSize":[75.6,75.6],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"recolorPetals":true,"stemWidth":2.4,"colors":[["杏橘","#e9b491"],["奶白","#f4efdf"],["柔粉","#e9adc6"],["黃色","#edcd70"],["酒紅","#873548"]]},
 {"id":"lily","name":"百合花","en":"Lily","size":48.3,"artSize":[117.3,108.1],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"recolorPetals":true,"stemWidth":2.4,"colors":[["白色","#fffdfa"],["柔粉","#e8abc5"],["黃色","#edcd73"],["橘色","#e99a59"],["紅色","#ba4b55"]]},
 {id:'kingprotea',name:'帝王花',en:'King protea',size:49.98,extra:true,newAtlas:true,keepAspect:true,artSize:[112.2,114.24],stemWidth:3,colors:[['霧粉','#c18c98'],['白色紅邊','#f3efeb']]},
 {id:'thistle',name:'薊花',en:'Thistle',size:23,extra:true,newAtlas:true,keepAspect:true,spray:true,recolorPetals:true,artSize:[48,62],stemWidth:1.9,colors:[['藍紫','#8d98bf'],['淡紫','#b3a0c2']]},
 {id:'cotton',name:'棉花',en:'Cotton',stemColor:'#84694c',stemWidth:2.4,size:35.2,extra:true,newAtlas:true,keepAspect:true,spray:true,blueKey:true,artAnchorX:0.5140664961636828,artSize:[99,132],colors:[['棉白','#fcfaf2']]},
 {id:'butterflyranunculus',name:'蝴蝶陸蓮',en:'Butterfly ranunculus',size:25.5,extra:true,newAtlas:true,keepAspect:true,spray:true,artAnchorX:0.4847457627118644,recolorPetals:true,artSize:[80.75,123.25],colors:[['柔粉','#efbec7'],['奶白','#fcfaf2'],['淡黃','#ecd88d']]},
 {id:'silverdollareucalyptus',name:'大圓葉尤加利',en:'Silver dollar eucalyptus',size:34,foliage:true,colors:[['銀綠','#8b9e8d']]},
 {id:'gypsophila',name:'滿天星',keepAspect:true,artAnchorX:0.535473,en:'Baby’s breath',size:33,extra:true,newAtlas:true,artSize:[94,126],colors:[['白色','#fcfaf2']]},
 {id:'oncidium',name:'文心蘭',keepAspect:true,artAnchorX:0.401141,en:'Oncidium',size:32,extra:true,newAtlas:true,artSize:[88,150],colors:[['黃色','#ebcb62']]},
 {id:'buttonmum',name:'鈕扣菊',en:'Button mum',size:15,extra:true,colors:[['黃綠','#cad88c'],['黃色','#e8ca69'],['奶白','#fcfaf2']]},
 {id:'dianthus',name:'深山櫻',en:'Japanese dianthus',size:35,extra:true,colors:[['淡粉','#efc5cf'],['白色','#fcfaf2']]},
 {id:'delphinium',name:'飛燕草',en:'Delphinium',size:28,extra:true,colors:[['藍紫','#9299d5']]},
 {id:'fountaingrass',name:'狼尾',en:'Fountain grass',size:26,extra:true,newAtlas:true,keepAspect:true,spray:true,artAnchorX:0.488,artSize:[40,180],colors:[['原色','#ccb67d'],['霧粉','#e7d6dc']]},
{"id": "birdnestfern", "name": "山蘇", "en": "Bird’s nest fern", "size": 38, "artSize": [65, 170], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "fishtailfern", "name": "魚尾山蘇", "en": "Fishtail fern", "size": 38, "artSize": [88, 155], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "fiddlephilodendron", "name": "琴葉蔓綠絨", "en": "Fiddle-leaf philodendron", "size": 38, "artSize": [96, 150], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "irisleaf", "name": "龍文蘭", "en": "Variegated strap leaves", "size": 38, "artSize": [80, 205], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "asparagusfern", "name": "文竹", "en": "Asparagus fern", "size": 38, "artSize": [120, 156], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "dustymiller", "name": "銀葉菊", "en": "Dusty miller", "size": 38, "artSize": [100, 145], "colors": [["銀綠", "#b7c0b3"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "birch", "name": "樺木", "en": "Birch", "size": 38, "artSize": [110, 180], "colors": [["葉綠", "#567849"]], "leafMaterial": true, "stemWidth": 1.8, "foliage": true},
{"id": "angelphilodendron", "name": "天使蔓綠絨", "en": "Lacy tree philodendron", "size": 43, "artSize": [110, 140], "colors": [["葉綠", "#6b8458"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 2},
{"id": "silveroak", "name": "銀樺木", "en": "Silky oak foliage", "size": 38, "artSize": [98, 175], "colors": [["葉綠", "#b6b9a4"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.5},
{"id": "fatsia", "name": "八角葉", "en": "Fatsia", "size": 43, "artSize": [120, 128], "colors": [["葉綠", "#45613b"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 2},
 {id:'fern',name:'羊齒',en:'Fern',size:38,extra:true,newAtlas:true,keepAspect:true,spray:true,leafMaterial:true,artAnchorX:0.4701298701298701,artSize:[85,160],colors:[['葉綠','#82936e']]},
 {id:'foxtail',name:'狗尾草',en:'Foxtail grass',size:16,extra:true,colors:[['草綠','#a2ae72']]},
 {id:'chamomile',name:'洋甘菊',en:'Chamomile',size:17,extra:true,newAtlas:true,artSize:[76,80],colors:[['白黃','#eee8cd']]},
 {id:'bluestar',name:'藍星花',en:'Blue star',size:20,extra:true,newAtlas:true,artSize:[78,85],colors:[['淡藍','#9bbfda']]},
 {id:'lavender',name:'薰衣草',en:'Lavender',size:18,extra:true,newAtlas:true,artSize:[38,140],colors:[['紫色','#a597c4']]},
 {id:'hydrangea',name:'繡球花',en:'Hydrangea',size:48,extra:true,newAtlas:true,artSize:[112,100],colors:[['藍紫','#a9afd7'],['粉色','#e4b3c7'],['奶白','#fcfaf2'],['淺綠','#c6d7ae']]},
 {id:'anthurium',name:'火鶴',en:'Anthurium',size:34,extra:true,newAtlas:true,artSize:[80,94],colors:[['經典紅','#c83642'],['白色','#fcfaf2'],['紫色','#9867ae']]},
 {id:'pointedeucalyptus',name:'尖葉尤加利',en:'Willow eucalyptus',size:30,foliage:true,colors:[['灰綠','#829c8d']]},
 {id:'monstera',name:'龜背芋',en:'Monstera',size:54,extra:true,leafAtlas:true,artSize:[125,145],colors:[['深綠','#537b58']]},
 {id:'cedar',name:'雪松',en:'Cedar',size:35,foliage:true,colors:[['松綠','#829682']]},
 {id:'eucalyptus',name:'小圓葉尤加利',en:'Eucalyptus',size:25,foliage:true,colors:[['灰綠','#8b9e8d']]},
 {id:'birdofparadise',artAnchorX:0.3800666317715875,name:'天堂鳥',en:'Bird of paradise',size:55.2,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[129.6,173.98],stemWidth:4,colors:[['橘藍','#e7a146']]},
 {id:'celosia',artAnchorX:0.49727800155084345,name:'雞冠花',en:'Cockscomb',size:34,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[86,78],stemWidth:2.3,colors:[['酒紅','#a3445e']]},
 {id:'waxflower',artAnchorX:0.5395832374390508,name:'臘梅',en:'Waxflower',size:30,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[86,142],stemColor:'#8b8064',stemWidth:1.6,recolorPetals:true,colors:[['淡粉','#f2d9e2']]},
 {id:'astilbe',artAnchorX:0.44077907197702554,name:'泡盛',en:'Astilbe',size:30,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[80,145],stemWidth:1.6,colors:[['淡粉','#e5c6cf']]},
 {id:'greendianthus',artKey:'greendianthus-simple',artAnchorX:0.4927478580808048,name:'綠石竹',en:'Green dianthus',size:28,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[72,72],stemWidth:2,colors:[['全綠','#9bae60'],['有小花','#e7d9df']]},
 {"id":"stock","name":"紫羅蘭","en":"Stock","size":28,"artSize":[78,140],"stemWidth":2,"colors":[["淡紫","#ab97bf"]],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"blueKey":true,"recolorPetals":true,"artAnchorX":0.506919924729277},
 {"id":"statice","name":"星辰","en":"Statice","size":29,"artSize":[95,115],"stemWidth":1.7,"colors":[["深紫","#705693"],["淺紫","#b7a2cb"],["白色","#fcfaf2"]],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"blueKey":true,"recolorPetals":true,"artAnchorX":0.5219477260346437},
 {"id":"scabiosa","name":"松蟲草","en":"Scabiosa","size":30,"artSize":[76,70],"stemWidth":1.7,"colors":[["淺紫","#b9accf"],["粉色","#d4a0ba"],["深紅","#8b3548"],["深紫","#68517e"]],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"blueKey":true,"recolorPetals":true,"artAnchorX":0.4937194116570234}
];
const $=id=>document.getElementById(id);let items=[],selected=null,nextId=1;let vase='classic',vaseColor='ivory',backgroundColor='default';let sunflowerNext=0,kingproteaNext=0,birdofparadiseNext=0,lilyNext=0,poppyNext=0,irisNext=0,doubleLisianthusNext=0;
const vaseSizes={urnlow:[55,61,650,'20'],urnhigh:[55,61,685,'26'],classic:[58,66,650,'18'],petite:[22,66,650,'18'],slim:[42,48,600,'13'],bud:[14,48,600,'13'],columnlow:[23,29,650,'18'],columnhigh:[23,46,700,'27'],paper:[82,86,666,'28'],mug:[48,48,600,'10'],bowl:[80,80,565,'7'],canvaswrap:[82,86,712,'28'],naked:[18,40,655,'18'],television:[84,151,636,'25'],poodle:[27,70,640,'24'],typewriter:[42,130,645,'20'],swing:[65,203,598,'10']};
const vaseColors={ivory:{name:'米白色',body:'#e1dbcf',edge:'#c7beaf',rim:'#c9c0b2',inside:'#818975'},gray:{name:'淺灰色',body:'#c1c1bf',edge:'#a6a7a5',rim:'#aeafac',inside:'#6f746c'},black:{name:'黑色',body:'#343633',edge:'#252724',rim:'#50534e',inside:'#20251f'}};
const backgroundColors={default:{color:'#d8d8d8',dark:false},charcoal:{color:'#292929',dark:true}};
function updateBackground(){const theme=backgroundColors[backgroundColor];document.body.dataset.background=backgroundColor;for(const key of Object.keys(backgroundColors))$('background-'+key).setAttribute('aria-pressed',String(key===backgroundColor));}
function stemBase(){if(specialVessels[vase])return specialVessels[vase].base;if(vase==='paper')return 543;if(vase==='bowl')return 494;if(vase==='columnhigh')return 456;if(vase==='columnlow')return 486;return vase==='petite'||vase==='bud'?492:500}
function vaseSurface(id,p){return `<defs><linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0" stop-color="${shade(p.body,-10)}"/><stop offset=".28" stop-color="${shade(p.body,6)}"/><stop offset=".55" stop-color="${p.body}"/><stop offset=".8" stop-color="${shade(p.body,-5)}"/><stop offset="1" stop-color="${shade(p.body,-16)}"/></linearGradient></defs>`}
function paperWrap(p,id){
 const transform='translate(330 568) scale(1.71925 1.495) translate(-330 -568)';
 const left='M245 300 C251 394 265 490 288 542 C302 563 319 577 330 584 C341 578 362 556 374 535 Q330 529 301 487 C271 448 254 368 245 300 Z';
 const right='M415 300 C409 394 395 490 372 542 C355 563 338 577 328 584 Q321 587 320 578 C322 560 349 517 364 480 Q393 385 415 300 Z';
 return {back:`<g transform="${transform}"><path d="M245 300 Q330 328 415 300 C409 394 395 490 372 542 Q351 574 330 588 Q306 567 288 542 C265 490 251 394 245 300 Z" fill="${shade(p.body,-16)}" stroke="${p.edge}" stroke-width=".6"/></g>`,front:`<g transform="${transform}">${vaseSurface(id,p)}<path d="M322 577 Q330 573 338 577 C353 583 357 598 358 616 L359 651 Q330 657 301 651 L302 616 C303 598 307 583 322 577 Z" fill="url(#${id})" stroke="${p.edge}" stroke-width=".6"/><path d="${right}" fill="${shade(p.body,-7)}" stroke="${p.edge}" stroke-width=".6"/><path d="${left}" fill="url(#${id})" stroke="${p.edge}" stroke-width=".6"/><path d="M314 562 Q324 574 330 580 M347 565 Q338 575 334 581 M328 587 Q326 598 323 606 M333 588 Q335 598 337 603" fill="none" stroke="${p.edge}" stroke-width=".7" stroke-linecap="round" opacity=".3"/></g>`};}

function everydayVessel(key,p,id){
 const bowl=key==='bowl',rx=bowl?80:48,ry=bowl?14:10,left=330-rx,right=330+rx;
 const handle=bowl?'':`<path d="M373 508 C437 489 439 579 374 576 L374 567 C425 569 423 507 374 517 Z" fill="${shade(p.body,-5)}" stroke="${p.edge}" stroke-width="1"/>`;
 const back=`${handle}<ellipse cx="330" cy="486" rx="${rx}" ry="${ry}" fill="${p.rim}"/><ellipse cx="330" cy="485" rx="${rx-4}" ry="${ry-3}" fill="${p.inside}"/>`;
 const body=bowl?'M250 486 A80 14 0 0 0 410 486 C405 526 382 548 350 559 L350 564 Q330 570 310 564 L310 559 C278 548 255 526 250 486 Z':'M282 486 A48 10 0 0 0 378 486 L376 575 Q375 599 355 600 L305 600 Q285 599 284 575 Z';
 const front=`${vaseSurface(id,p)}<path d="${body}" fill="url(#${id})" stroke="${p.edge}" stroke-width="1"/><path d="M${left} 486 A${rx} ${ry} 0 0 0 ${right} 486 L${right-4} 486 A${rx-4} ${ry-3} 0 0 1 ${left+4} 486 Z" fill="${p.rim}"/>`;
 return {back,front};
}
const vesselNames={urnlow:'Goblet Low',urnhigh:'Goblet Tall',classic:'Classic',petite:'Slim Neck',slim:'Mini',bud:'Mini Neck',columnlow:'Slender Low',columnhigh:'Slender Tall',paper:'Paper',canvaswrap:'Canvas',naked:'Naked',mug:'Mug',bowl:'Bowl',television:'Vintage TV',poodle:'Poodle',typewriter:'Typewriter',swing:'Swing'};
const specialVessels={urnlow:{base:486,bottom:655,frame:'245 456 170 214'},urnhigh:{base:446,bottom:690,frame:'240 414 180 285'},canvaswrap:{base:543,bottom:697,frame:'130 140 400 600'},naked:{base:515,bottom:640,frame:'230 400 200 290'},television:{base:506,bottom:644,frame:'133 225 370 430'},poodle:{base:401,bottom:643,frame:'235 370 190 285'},typewriter:{base:493,bottom:651,frame:'185 420 290 245'},swing:{base:465.68,bottom:605,frame:'100 180 460 480'}};
function wrappedVessel(key=vase){return key==='paper'||key==='canvaswrap'}
function vesselCategory(key){return ['paper','canvaswrap','naked'].includes(key)?'bouquet':['mug','television','poodle','typewriter','swing'].includes(key)?'imagination':'vessel'}
let vesselGroup='vessel',lastVessel='classic';
function refreshVesselGroups(){if(lastVessel!==vase){vesselGroup=vesselCategory(vase);lastVessel=vase;}for(const group of ['vessel','bouquet','imagination'])$('vessel-category-'+group).setAttribute('aria-pressed',String(group===vesselGroup));for(const key of Object.keys(vaseSizes))$('vase-card-'+key).hidden=key==='swing'||vesselCategory(key)!==vesselGroup;}
function specialVessel(key,p,id){
 const edge=p.edge,body=p.body,low=shade(body,-17),light=shade(body,7),surface=vaseSurface(id,p),fill=`url(#${id})`;let back='',front='';
 if(key==='urnlow'||key==='urnhigh'){
  const y=key==='urnhigh'?446:486,foot=key==='urnhigh'?685:650;
  back=`<ellipse cx="330" cy="${y}" rx="59" ry="12" fill="${p.rim}"/><ellipse cx="330" cy="${y-1}" rx="49" ry="8" fill="${p.inside}"/>`;
  front=`${surface}<path d="M281 ${foot-13}H379V${foot}H281Z" fill="${fill}" stroke="${edge}"/><path d="M304 ${foot-13}Q320 ${foot-30} 322 ${y+106}H338Q340 ${foot-30} 356 ${foot-13}Z" fill="${fill}" stroke="${edge}"/><path d="M281 ${y}Q287 ${y+21} 291 ${y+58}Q294 ${y+90} 318 ${y+98}L319 ${y+110}Q330 ${y+117} 341 ${y+110}L342 ${y+98}Q366 ${y+90} 369 ${y+58}Q373 ${y+21} 379 ${y}A49 8 0 0 1 281 ${y}Z" fill="${fill}" stroke="${edge}"/>`;
  for(const x of [-35,-21,-7,7,21,35])front+=`<path d="M${330+x} ${y+10}Q${330+x*.8} ${y+53} ${330+x*.6} ${y+78}Q${330+x*.35} ${y+94} 330 ${y+98}" fill="none" stroke="${shade(body,x%2?-15:8)}" stroke-width="3" opacity=".5"/>`;
  for(const x of [-12,0,12])front+=`<path d="M${330+x*.35} ${y+121}Q${330+x*.6} ${foot-37} ${330+x} ${foot-18}" fill="none" stroke="${edge}" opacity=".65"/>`;
  front+=`<path d="M271 ${y}A59 12 0 0 0 389 ${y}L379 ${y}A49 8 0 0 1 281 ${y}Z" fill="${light}" stroke="${edge}"/><path d="M294 ${y+63}Q330 ${y+77} 366 ${y+63}" fill="none" stroke="${edge}"/>`;
  return {back,front};
 }
 if(key==='canvaswrap'){
  const tr='translate(330 568) scale(1.9771375 1.495) translate(-330 -568)';
  back=`<g transform="${tr}"><path d="M245 300 Q286 325 330 319 Q379 325 415 300 C409 410 392 502 372 542 Q350 577 330 588 Q306 567 288 542 C267 490 251 394 245 300Z" fill="${low}" stroke="${edge}" stroke-width=".6"/></g>`;
  front=`<g transform="${tr}">${surface}<path d="M322 577Q330 573 338 577C354 584 359 610 359 650Q344 657 331 653Q315 658 301 651C302 616 304 587 322 577Z" fill="${fill}"/><path d="M415 300C409 399 395 492 372 542Q352 568 330 584Q318 588 320 578C324 553 352 511 364 480Q392 389 415 300Z" fill="${shade(body,-6)}"/><path d="M245 300C254 395 268 493 289 541Q309 566 330 584Q353 569 374 535C341 534 318 516 301 487Q264 437 245 300Z" fill="${fill}"/><path d="M250 329Q260 441 295 526M407 331Q397 443 369 524" fill="none" stroke="${edge}" stroke-width=".6" stroke-dasharray="1.2 2" opacity=".55"/><path d="M301 552Q320 572 330 581M360 550Q340 574 332 582M322 592Q312 618 311 638M338 593Q349 618 349 639" fill="none" stroke="${edge}" stroke-width="1.2" opacity=".32" stroke-linecap="round"/>
  <g transform="translate(330 584) scale(1.914956516 2.2022) translate(-330 -584)" fill="#faf9f4" stroke="#d9d6cf" stroke-width=".7"><path d="M328 583C316 576 306 562 303 571C298 584 317 588 328 585Z M332 583C344 576 354 562 357 571C362 584 343 588 332 585Z"/><path d="M326 585Q321 596 310 607L310 600L304 601Q317 589 325 583Z M334 585Q339 596 350 607L350 600L356 601Q343 589 335 583Z"/><ellipse cx="330" cy="584" rx="5" ry="3.5"/></g></g>`;
  // Fine loose fibres follow the actual cloth edge without opening gaps in its surface.
  let fibres='';
  for(let n=0;n<85;n++){const t=(n%43)/42,u=1-t,right=n>42,x=right?u*u*330+2*u*t*379+t*t*415:u*u*245+2*u*t*286+t*t*330,y=right?u*u*319+2*u*t*325+t*t*300:u*u*300+2*u*t*325+t*t*319,dy=2.2+(n%5)*.8;fibres+=`<path d="M${x} ${y+.4}l${(n%3-1)*.7} -${dy}"/>`;}
  front+=`<g transform="${tr}" fill="none" stroke="${edge}" stroke-width=".5" opacity=".8">${fibres}</g>`;
 }else if(key==='naked'){
  for(const [x,y,a,k] of [[-49,486,-45,1],[49,486,45,1],[-26,462,-22,.9],[28,457,25,.86],[-64,514,-67,.8],[66,515,68,.82]])back+=`<g transform="translate(330 540) rotate(${a})"><path d="M0 0Q-32 -32 0 -91Q30 -31 0 0Z" fill="${a<0?'#7f8c70':'#929d7e'}" transform="scale(${k*1.4})"/><path d="M0 -3V-${119*k}" stroke="#b1b8a1" stroke-width=".8"/></g>`;
  for(let j=0;j<13;j++){const x=319+j*1.8,end=307+j*3.7;front+=`<path d="M${x} 532Q${x+(j-6)*.3} 590 ${end} ${647+(j%3)*5}" fill="none" stroke="${['#79866a','#909c7a','#a0a88a'][j%3]}" stroke-width="3.2" stroke-linecap="round"/>`;}
  front+='<path d="M317 537Q330 542 343 537L344 547Q330 552 316 547Z" fill="#b6a58b"/><path d="M317 540Q330 545 343 540M317 544Q330 549 343 544" fill="none" stroke="#95856f" stroke-width=".8"/>';
 }else if(key==='television'){
  back=`${surface}<rect x="252" y="402" width="207" height="211" rx="15" fill="${fill}" stroke="${edge}"/><rect x="264" y="417" width="132" height="132" rx="5" fill="${low}"/><path d="M270 423H390V543H270Z" fill="#41463d"/>`;
  front=`<g fill="#9eaaa3" fill-opacity=".48" stroke="#c0c9bd" stroke-width=".8"><path d="M270 423H299L288 437L293 454L278 446L270 468Z"/><path d="M344 423H390V469L374 454L380 439L359 447Z"/><path d="M270 490L283 503L278 519L299 536L290 543H270Z"/><path d="M390 489L379 501L386 516L369 527L375 543H390Z"/><path d="M311 543L319 531L328 543Z"/></g><path d="M270 423 279 423 273 441 286 450 272 462M390 428 381 445 389 459M270 514 282 530 278 543M390 509 377 526 385 543" fill="none" stroke="#aeb5a7" stroke-width="1.3"/><path d="M285 401 266 367M355 401 377 355" stroke="#76786f" stroke-width="2" stroke-linecap="round"/><ellipse cx="324" cy="401" rx="27" ry="5" fill="${low}"/><circle cx="428" cy="447" r="12" fill="${low}" stroke="${edge}"/><path d="M422 453 434 441" stroke="${light}" stroke-width="2"/><circle cx="428" cy="483" r="8" fill="${low}"/>${Array.from({length:7},(_,j)=>`<path d="M415 ${514+j*5}h26" stroke="${low}" stroke-width="1.3"/>`).join('')}<path d="M270 613 264 633h14l8-20M422 613l7 20h13l-4-20" fill="${low}"/><path d="M269 588h30" stroke="${edge}"/>`;
 }else if(key==='poodle'){
  const torso='M297 472Q281 496 277 533Q261 559 263 593Q257 610 266 622Q279 636 299 625H361Q384 637 395 621Q402 607 395 590Q400 563 382 535Q380 497 363 472Z';
  const head='M284 424Q279 413 288 409Q283 397 296 394Q296 381 310 384Q319 373 330 381Q343 374 351 385Q367 381 368 395Q381 398 375 410Q385 420 375 431Q380 450 366 463Q353 480 330 480Q305 480 291 463Q278 448 284 424Z';
  back=`${surface}<path d="${torso}" fill="${fill}" stroke="${edge}"/>
  <path d="M291 414Q273 410 268 431Q257 454 267 474Q266 488 279 492Q290 500 299 485L307 431Z M369 414Q387 410 392 431Q403 454 393 474Q394 488 381 492Q370 500 361 485L353 431Z" fill="${shade(body,-14)}" stroke="${edge}"/>
  <path d="${head}" fill="${body}" stroke="${edge}"/>
  <path d="M305 537Q298 552 300 568L294 614Q281 634 304 638Q323 642 324 626L330 553L336 626Q337 642 356 638Q379 634 366 614L360 568Q362 552 355 537" fill="${body}" stroke="${edge}" stroke-width="1"/>
  <ellipse cx="314" cy="437" rx="3.5" ry="3" fill="${parseInt(body.slice(1,3),16)<90?'#f3f1e9':'#343730'}"/><ellipse cx="346" cy="437" rx="3.5" ry="3" fill="${parseInt(body.slice(1,3),16)<90?'#f3f1e9':'#343730'}"/>
  <path d="M330 450Q316 442 306 452Q297 463 307 471Q318 480 330 474Q342 480 353 471Q363 463 354 452Q344 442 330 450Z" fill="${light}"/>
  <path d="M321 451Q330 447 339 451Q341 457 330 462Q319 457 321 451Z" fill="#43463e"/><path d="M330 462v5m0 0q-5 5-10 1m10-1q5 5 10 1" fill="none" stroke="${low}" stroke-width="1.1" stroke-linecap="round"/>
  <defs><clipPath id="${id}-coat"><path d="${torso}"/><path d="${head}"/></clipPath></defs>`;
  let curls='';const locks=[[302,401,1],[320,412,.8],[340,412,.9],[355,402,1],[291,422,.8],[366,424,.8],[301,449,.7],[358,451,.8],[312,481,1],[333,485,.9],[350,484,.85],[297,507,1],[320,509,1],[343,510,.9],[366,510,.9],[285,539,1],[373,541,1],[278,571,1],[382,573,1],[310,560,.8],[350,559,.8],[307,590,.9],[353,591,.9],[280,607,.8],[379,608,.8]];
  for(const [x,y,k] of locks)curls+=`<path transform="translate(${x} ${y}) scale(${k})" d="M-5 0Q-9 -7-3 -8Q3 -9 2 -3Q1 1 6 2Q11 3 9 8"/>`;
  back+=`<g clip-path="url(#${id}-coat)" fill="none" stroke="${edge}" opacity=".55" stroke-width=".8" stroke-linecap="round">${curls}</g><path d="M277 436q-6 9-3 18m5-2q-6 11-1 21m106-37q6 9 3 18m-5-2q6 11 1 21" fill="none" stroke="${edge}" stroke-width="1" opacity=".6"/><ellipse cx="330" cy="397" rx="18" ry="5" fill="${p.rim}"/><ellipse cx="330" cy="397" rx="15" ry="3.2" fill="${p.inside}"/>`;
  front=`<path d="M312 397A18 5 0 0 0 348 397L347 402Q330 408 313 402Z" fill="${body}" stroke="${edge}" stroke-width=".7"/>`;
 }else if(key==='typewriter'){
  back=`${surface}<path d="M242 480h176v47H242Z" fill="${low}"/><rect x="250" y="470" width="160" height="18" rx="8" fill="#565a52"/><path d="M258 477h144" stroke="#969b8c"/><path d="M252 489H408L428 580H232Z" fill="${fill}" stroke="${edge}"/><path d="M296 488Q330 474 364 488L360 512H300Z" fill="${p.inside}"/>`;
  front=`<path d="M250 511H410L439 595Q440 609 425 612H234Q220 610 221 596Z" fill="${fill}" stroke="${edge}"/><path d="M264 523H396L414 582H246Z" fill="${low}"/>${Array.from({length:4},(_,row)=>Array.from({length:10-row%2},(_,j)=>`<ellipse cx="${330+(j-(9-row%2)/2)*(13+row*.5)}" cy="${537+row*12}" rx="5.2" ry="3.8" fill="${light}" stroke="${edge}" stroke-width=".7"/>`).join('')).join('')}<rect x="282" y="586" width="95" height="6" rx="2" fill="${low}"/><path d="M238 612v7h22v-7M402 612v7h22v-7" fill="#666b61"/><path d="M251 506 259 500M416 594l10-4" stroke="${edge}"/>`;
 }else if(key==='swing'){
  back=`<path d="M275 -30V552M385 -30V552" stroke="#9d917b" stroke-width="3"/><path d="M274 -30V550M384 -30V550" stroke="#c8bda7" stroke-width=".6" stroke-dasharray="2 3"/>${surface}<g transform="translate(330 551) scale(.5) translate(-330 -551)"><path d="M283 484H377L380 493H280Z" fill="${p.rim}"/><path d="M289 488H371L369 500H291Z" fill="${p.inside}"/></g>`;
  front=`<g transform="translate(330 551) scale(.5) translate(-330 -551)"><path d="M280 493H380L375 551H285Z" fill="${fill}" stroke="${edge}"/><path d="M286 506H374M288 534H372" stroke="${edge}" stroke-width=".6"/></g><path d="M265 551H395V560Q330 567 265 560Z" fill="${low}" stroke="${edge}"/><path d="M274 537q7 4 0 8q-6 4 0 7M386 537q-7 4 0 8q6 4 0 7" fill="none" stroke="#a89a81" stroke-width="2.5"/>`;
  if(key==='swing')front+=`<g fill="none" stroke="${edge}" stroke-width=".3" opacity=".55"><path d="M270 555Q307 553 340 556T389 555M276 559Q309 556 342 559T388 558M310 537Q325 535 346 538M312 543Q330 540 350 544"/></g>`;
 }
 if(['television','swing','typewriter'].includes(key)){const k={television:1.4,swing:3.12,typewriter:1.2}[key],anchor=key==='television'?526:key==='swing'?498:specialVessels[key].base,tr=`translate(${key==='television'?-48:0} ${key==='television'?-40:key==='swing'?-115:0}) translate(330 ${anchor}) scale(${k}) translate(-330 -${anchor})`;back=`<g transform="${tr}">${back}</g>`;front=`<g transform="${tr}">${front}</g>`;}
 return {back,front};
}

function vaseThumbnail(key){if(specialVessels[key]){const parts=specialVessel(key,vaseColors[vaseColor],'special-thumb-'+key);return `<svg viewBox="${specialVessels[key].frame}" aria-hidden="true">${parts.back}${parts.front}</svg>`;}if(key==='mug'||key==='bowl'){const parts=everydayVessel(key,vaseColors[vaseColor],'everyday-thumb-'+key);return `<svg viewBox="${key==='mug'?'240 450 210 180':'230 428 200 175'}" aria-hidden="true">${parts.back}${parts.front}</svg>`}if(key==='paper'){const p=paperWrap(vaseColors[vaseColor],'paper-thumb');return `<svg viewBox="130 140 400 600" aria-hidden="true">${p.back}${p.front}</svg>`}const [neck,body,bottom]=vaseSizes[key],narrow=key==='petite'||key==='bud',lip=narrow?5:8,shoulder=narrow?528:505,left=330-neck,right=330+neck,p=vaseColors[vaseColor],mouth=key==='columnhigh'?456:486,frame=key==='columnhigh'?280:key.startsWith('column')?250:210;return `<svg viewBox="230 ${(mouth-lip+bottom)/2-frame/2} 200 ${frame}" aria-hidden="true">${vaseSurface('vase-surface-thumb-'+key,p)}<ellipse cx="330" cy="${mouth}" rx="${neck}" ry="${lip}" fill="${p.rim}"/><ellipse cx="330" cy="${mouth}" rx="${neck-4}" ry="${lip-2}" fill="${p.inside}"/><path d="${key==='columnhigh'?'M307 456 A23 8 0 0 0 353 456 L376 664 C379 686 362 700 330 700 C298 700 281 686 284 664 Z':`M${left} ${mouth} A${neck} ${lip} 0 0 0 ${right} ${mouth} L${right} ${narrow?508:490} C${right} ${shoulder} ${330+body} ${shoulder} ${330+body} ${bottom-43} Q${330+body} ${bottom} ${330+body-22} ${bottom} L${330-body+22} ${bottom} Q${330-body} ${bottom} ${330-body} ${bottom-43} C${330-body} ${shoulder} ${left} ${shoulder} ${left} ${narrow?508:490} Z`}" fill="url(#vase-surface-thumb-${key})" stroke="${p.edge}"/></svg>`}
function updateVase(){document.body.dataset.vessel=vase;refreshVesselGroups();for(const id of ['stems','flowers','front-flowers']){if(wrappedVessel())$(id).setAttribute('clip-path','url(#paper-flower-clip)');else $(id).removeAttribute?.('clip-path');}for(const key of Object.keys(vaseSizes)){const card=$('vase-card-'+key);card.setAttribute('aria-pressed',String(key===vase));card.innerHTML=vaseThumbnail(key)+'<span translate="no" lang="en">'+vesselNames[key]+'</span>';}const palette=vaseColors[vaseColor];for(const key of Object.keys(vaseColors))$('vase-color-'+key).setAttribute('aria-pressed',String(key===vaseColor));const [neck,body,bottom,cm]=vaseSizes[vase],narrow=vase==='petite'||vase==='bud',lip=narrow?5:8,inner=neck-4,mouth=vase==='columnhigh'?456:486,shoulder=narrow?528:505,left=330-neck,right=330+neck;
 for(const id of ['vase-back','vase-front','vase-shadow'])$(id).removeAttribute?.('transform');
 if(specialVessels[vase]&&vase!=='canvaswrap'){const spec=specialVessels[vase],parts=specialVessel(vase,palette,'special-scene');if(vase==='naked'){parts.back=`<g transform="translate(0 -25)">${parts.back}</g>`;parts.front=`<g transform="translate(0 -25)">${parts.front}</g>`;}$('vase-back').innerHTML=parts.back;$('vase-front').innerHTML=parts.front;$('vase-shadow').setAttribute('cy',spec.bottom);$('vase-shadow').setAttribute('rx',vase==='swing'?0:body*1.2);$('vase-shadow').setAttribute('ry',10);$('vase-select').value=vase;$('vase-scale').textContent=vesselNames[vase];return;}
 if(vase==='mug'||vase==='bowl'){const parts=everydayVessel(vase,palette,'everyday-scene');$('vase-back').innerHTML=parts.back;$('vase-front').innerHTML=parts.front;$('vase-shadow').setAttribute('cy',bottom+5);$('vase-shadow').setAttribute('rx',vase==='bowl'?62:64);$('vase-shadow').setAttribute('ry',9);$('vase-select').value=vase;$('vase-scale').textContent=`花器高約 ${cm} cm`;return}
 if(wrappedVessel()){const paper=vase==='canvaswrap'?specialVessel(vase,palette,'canvas-scene'):paperWrap(palette,'paper-scene');paper.back=`<g transform="translate(0 -25)">${paper.back}</g>`;paper.front=`<g transform="translate(0 -25)">${paper.front}</g>`;const wrapScale=vase==='canvaswrap'?1.9771375:1.71925;const outline=vase==='canvaswrap'?'M248 278 Q330 306 412 278 L412 300 C406 399 392 492 369 530 L292 530 C271 493 257 395 248 300 Z':'M245 278 Q330 306 415 278 L415 300 C409 394 395 490 372 542 Q351 574 330 588 Q306 567 288 542 C265 490 251 394 245 300 Z';$('vase-back').innerHTML='<defs><clipPath id="paper-flower-clip" clipPathUnits="userSpaceOnUse"><path transform="translate(0 -25) translate(330 568) scale('+wrapScale+' 1.495) translate(-330 -568)" d="'+outline+'"/></clipPath></defs>'+paper.back;$('vase-front').innerHTML=paper.front;$('vase-shadow').setAttribute('cy',687);$('vase-shadow').setAttribute('rx',103.155);$('vase-shadow').setAttribute('ry',10);$('vase-select').value=vase;$('vase-scale').textContent=vesselNames[vase];return}
 $('vase-back').innerHTML=`<ellipse cx="330" cy="${mouth}" rx="${neck}" ry="${lip}" fill="${palette.rim}"/><ellipse cx="330" cy="${mouth}" rx="${inner}" ry="${lip-2}" fill="${palette.inside}"/>`;
 $('vase-front').innerHTML=`${vaseSurface('vase-surface-scene',palette)}<path d="${vase==='columnhigh'?'M307 456 A23 8 0 0 0 353 456 L376 664 C379 686 362 700 330 700 C298 700 281 686 284 664 Z':`M${left} ${mouth} A${neck} ${lip} 0 0 0 ${right} ${mouth} L${right} ${narrow?508:490} C${right} ${shoulder} ${330+body} ${shoulder} ${330+body} ${bottom-43} Q${330+body} ${bottom} ${330+body-22} ${bottom} L${330-body+22} ${bottom} Q${330-body} ${bottom} ${330-body} ${bottom-43} C${330-body} ${shoulder} ${left} ${shoulder} ${left} ${narrow?508:490} Z`}" fill="url(#vase-surface-scene)" stroke="${palette.edge}" stroke-width="1"/><path d="M${left} ${mouth} A${neck} ${lip} 0 0 0 ${right} ${mouth} L${330+inner} ${mouth} A${inner} ${lip-2} 0 0 1 ${330-inner} ${mouth} Z" fill="${palette.rim}"/>`;
 $('vase-shadow').setAttribute('cy',bottom+5);$('vase-shadow').setAttribute('rx',body*1.5);$('vase-shadow').setAttribute('ry','14');$('vase-select').value=vase;$('vase-scale').textContent=`花器高約 ${cm} cm`}
const history=[];let sliderSnapshot=null;
function snapshot(){return JSON.stringify({items,selected,nextId,vase,vaseColor,backgroundColor,sunflowerNext,kingproteaNext,birdofparadiseNext,lilyNext,poppyNext,irisNext,doubleLisianthusNext})}
function remember(before=snapshot()){history.push(before);if(history.length>100)history.shift()}
function undo(){sliderSnapshot=null;if(!history.length)return;const state=JSON.parse(history.pop());items=state.items;selected=state.selected;nextId=state.nextId;vase=state.vase??'classic';vaseColor=state.vaseColor??'ivory';backgroundColor=state.backgroundColor??'default';sunflowerNext=state.sunflowerNext??0;kingproteaNext=state.kingproteaNext??0;birdofparadiseNext=state.birdofparadiseNext??0;lilyNext=state.lilyNext??0;poppyNext=state.poppyNext??0;irisNext=state.irisNext??0;doubleLisianthusNext=state.doubleLisianthusNext??0;render();announce("已返回上一步")}
function variation(type){const delta=()=> (Math.random()<.5?-1:1)*(.05+Math.random()*.05);return {variant:Math.floor(Math.random()*(type==='fishtailfern'?6:['poppy','laceflower'].includes(type)?3:4)),scale:1+(Math.random()<.5?-1:1)*((type==='fern'?.22:type==='rose'?.05:.10)+Math.random()*(type==='fern'?.18:type==='rose'?.03:.05)),tone:delta(),bend:(Math.random()<.5?-1:1)*(.75+Math.random()*.5),knee:(Math.random()-.5)*.8}}
function tint(hex,tone){if(Math.min(...hex.slice(1).match(/../g).map(v=>parseInt(v,16)))>210)tone=Math.max(-.025,tone);return "#"+hex.slice(1).match(/../g).map(x=>{const v=parseInt(x,16);return Math.round(tone>0?v+(255-v)*tone:v*(1+tone)).toString(16).padStart(2,"0")}).join("")}
const el=(tag,a={},children='')=>`<${tag} ${Object.entries(a).map(([k,v])=>`${k}="${v}"`).join(' ')}>${children}</${tag}>`;
function shade(hex,n){return '#'+hex.slice(1).match(/../g).map(x=>Math.max(0,Math.min(255,parseInt(x,16)+n)).toString(16).padStart(2,'0')).join('')}
// Individual motif bounds preserve the hand-painted silhouettes without adjacent cells.
const atlasCells={"sunflower-open":[0, 0, 760, 724],"sunflower-near":[760, 0, 750, 724],"sunflower-half":[1510, 0, 662, 724],ranunculus:[30,677,570,535],peonymum:[665,675,575,550],rose:[35,65,340,325],carnation:[399,70,342,320],tulip:[779,72,279,310],gerbera:[1080,65,359,332],lisianthus:[52,415,329,305],pompon:[397,429,340,290]};
// Each motif downloads independently while retaining its original atlas coordinates.
const assetCrops={"lily-half":[75, 60, 1105, 1118],"peony":[17, 84, 1229, 1085],"dahlia":[23, 48, 1208, 1149],"lily":[28, 53, 1212, 1074],"waxflower-alt":[160,53,886,1148],"astilbe-alt":[359,109,804,1072],"stock":[363,27,527,1182],"statice":[244,80,757,1092],"scabiosa":[159,177,938,938],"greendianthus-bloom-simple":[124,66,1017,1132],"greendianthus-simple":[139,111,1013,1056],"celosia":[30,138,1196,982],"waxflower":[323,49,601,1166],"astilbe":[317,24,626,1202],"greendianthus":[139,118,994,1045],"greendianthus-bloom":[168,86,925,1085],"birdofparadise":[99, 67, 973, 1286],"kingprotea-white-half":[215, 110, 833, 1043],"kingprotea-white":[93, 115, 1074, 1025],"kingprotea-half":[210, 110, 840, 1045],"kingprotea":[94, 120, 1067, 1021],"thistle":[341, 214, 596, 829],"pincushion":[77, 144, 1100, 965],"fountaingrass":[250, 10, 250, 705],"fern":[1620, 10, 385, 705],"fountaingrass-curved":[760, 10, 750, 705],"sunflower-open":[0, 0, 760, 724],"sunflower-near":[760, 0, 750, 724],"sunflower-half":[1510, 0, 662, 724],"silver-dollar-single":[40,745,288,420],"cotton":[0,0,1173,1341],"butterflyranunculus":[645, 20, 590, 600],"silver-dollar":[40, 745, 565, 420],"silver-dollar-tip":[725, 725, 440, 440],"gypsophila":[99, 0, 592, 1024],"oncidium":[916, 0, 526, 1024],"ranunculus":[30, 677, 570, 535],"peonymum":[665, 675, 575, 550],"rose":[35,65,340,325],"carnation":[399,70,342,320],"tulip":[779,72,279,310],"gerbera":[1080,65,359,332],"lisianthus":[52,415,329,305],"pompon":[397,429,340,290],"eucalyptus":[47,810,335,180],"eucalyptus-tip":[420,743,317,276],"cedar":[780,723,306,320],"cedar-tip":[1180,723,208,327],"bud":[824,431,173,287],"half-open":[1111,421,287,302],"pointed":[64,87,412,400],"pointed-tip":[648,72,247,415],"monstera":[1048,73,442,445],"chamomile":[79,82,389,378],"bluestar":[576,61,414,402],"lavender":[1206,45,147,443],"hydrangea":[66,564,423,393],"anthurium":[105,45,1105,1040],"buttonmum":[145,145,345,325],"delphinium":[205,620,240,625],"foxtail":[855,650,175,585],"dianthus":[670,43,520,580]};
function paintedImage(key,filter=''){if(key==='birdofparadise')filter='bird-stem-key';if(['peony','dahlia','lily','lily-half'].includes(key))filter=(key==='peony'||key==='dahlia')?'clean-botanical-key':'flower-sprite-key';if(/^(sunflower-|anthurium$|foxtail$|cedar|eucalyptus)/.test(key))filter='clean-botanical-key';const [x,y,w,h]=assetCrops[key];const markup=`<image href="assets/${key}.webp${key==='birdofparadise'?'?v=79':key==='cotton'?'?v=36':key.startsWith('sunflower-')?'?v=42':key.startsWith('fountaingrass')?'?v=52':''}" x="${x}" y="${y}" width="${w}" height="${h}" ${filter?`filter="url(#${filter})"`:''}/>`;return /^(peony$|dahlia$|lily|sunflower-|anthurium$|foxtail$|cedar|eucalyptus)/.test(key)?`<g filter="url(#clean-cutout-edge)">${markup}</g>`:markup}
function sprite(type,x,y,width,height,color,gradient=false){if(type==='rose'){const src=window.ForiRose.image(color,gradient);return src?`<image class="rose-front" href="${src}" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/>`:'';}const crop=atlasCells[type];if(data.find(d=>d.id===type).newHead)return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${crop.join(' ')}">${coloredPetals(paintedImage(type,data.find(d=>d.id===type).neutralKey?'botanical-key':''),color,!data.find(d=>d.id===type).naturalColor)}</svg>`;const whiteGerbera=type==='gerbera'&&Math.min(...color.slice(1).match(/../g).map(v=>parseInt(v,16)))>185;return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${crop.join(' ')}" overflow="hidden" aria-hidden="true">${whiteGerbera?'<defs><filter id="white-petal-edge" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB"><feMorphology in="SourceAlpha" operator="dilate" radius="2.2" result="expanded"/><feComposite in="expanded" in2="SourceAlpha" operator="out" result="edge"/><feFlood flood-color="#a6a39b" flood-opacity=".65"/><feComposite in2="edge" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>':''}<g ${whiteGerbera?'filter="url(#white-petal-edge)"':''}><g filter="url(#tone-${color.slice(1)})">${paintedImage(type,'botanical-key')}</g></g>${gradient?`<defs><radialGradient id="rose-red-gradient" cx="50%" cy="45%" r="58%"><stop stop-color="#73182e"/><stop offset=".45" stop-color="#b73249"/><stop offset="1" stop-color="#e87d85"/></radialGradient><filter id="rose-alpha-white" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/></filter><mask id="rose-gradient-mask" maskUnits="userSpaceOnUse" x="35" y="65" width="340" height="325"><g filter="url(#rose-alpha-white)">${paintedImage('rose','botanical-key')}</g></mask></defs><rect x="35" y="65" width="340" height="325" fill="url(#rose-red-gradient)" mask="url(#rose-gradient-mask)" opacity=".42"/>`:''}${whiteGerbera?`<defs><clipPath id="gerbera-yellow-disc"><ellipse cx="1254" cy="236" rx="46" ry="47"/></clipPath></defs><g clip-path="url(#gerbera-yellow-disc)">${paintedImage('gerbera','botanical-key')}</g>`:''}</svg>`}
function updatePalette(){const colors=new Set(data.flatMap(d=>d.colors.map(c=>c[1])));items.forEach(i=>colors.add(tint(data.find(d=>d.id===i.type).colors[i.color][1],i.tone)));$('palette').innerHTML=[...colors].map(color=>{const [r,g,b]=color.slice(1).match(/../g).map(v=>parseInt(v,16)/255);const pale=Math.min(r,g,b)>.68,slope=pale?.16:.8,base=pale?.84:.2;return `<filter id="tone-${color.slice(1)}" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope="${slope}" intercept="${base}"/><feFuncG type="linear" slope="${slope}" intercept="${base}"/><feFuncB type="linear" slope="${slope}" intercept="${base}"/></feComponentTransfer><feColorMatrix type="matrix" values="${r} 0 0 0 0 0 ${g} 0 0 0 0 0 ${b} 0 0 0 0 0 1 0"/></filter>`}).join('')}
// Recolor only warm petals, preserving the painted green stems and flower column.
function petalFilter(color,texture=false){const [r,g,b]=color.slice(1).match(/../g).map(v=>parseInt(v,16)/255);return `<filter id="petal-${color.slice(1)}${texture?'-texture':''}" color-interpolation-filters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 12 -12 0 0 0" result="warm"/><feComposite in="warm" in2="SourceAlpha" operator="in" result="mask"/><feColorMatrix in="SourceGraphic" type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope="${texture?.8:.2}" intercept="${texture?.2:.8}"/><feFuncG type="linear" slope="${texture?.8:.2}" intercept="${texture?.2:.8}"/><feFuncB type="linear" slope="${texture?.8:.2}" intercept="${texture?.2:.8}"/></feComponentTransfer><feColorMatrix type="matrix" values="${r} 0 0 0 0 0 ${g} 0 0 0 0 0 ${b} 0 0 0 0 0 1 0"/><feComposite in2="mask" operator="in" result="petals"/><feComposite in="SourceGraphic" in2="mask" operator="out"/><feComposite in2="petals" operator="arithmetic" k2="1" k3="1"/></filter>`}
function coloredPetals(markup,color,enabled,texture=false){return enabled?`${petalFilter(color,texture)}<g filter="url(#petal-${color.slice(1)}${texture?'-texture':''})">${markup}</g>`:markup}
function flower(type,color,variant=0,gradient=false){if(data.find(d=>d.id===type)?.vectorHead)return newBotanicalHead(type,color,variant);if(type==='sunflower'){const stage=variant%3,key=['sunflower-open','sunflower-near','sunflower-half'][stage],w=[44,42,36][stage]*2.15;return `<svg class="botanical-cell" style="overflow:hidden" x="${-w/2}" y="${-w/2}" width="${w}" height="${w}" viewBox="${atlasCells[key].join(' ')}">${paintedImage(key,'botanical-key')}</svg>`;}const d=data.find(d=>d.id===type),w=d.size*2.15,tilt=[0,-7,5,-3][variant],sx=[1,.97,1.04,.98][variant],sy=[1,1.03,.96,1.02][variant];if(type==='rose'&&variant%2)return roseSideBloom(color,gradient);if(type==='tulip'){const joint=w*.44;return `<g transform="rotate(${tilt} 0 ${joint})"><path d="M-2 ${joint-3} Q0 ${joint+3} 0 ${joint+8} Q0 ${joint+3} 2 ${joint-3} Z" fill="#7e8d70"/>${sprite(type,-w/2,-w/2,w,w,color,gradient)}</g>`}return `<g opacity="1" transform="rotate(${tilt}) scale(${sx} ${sy})">${sprite(type,-w/2,-w/2,w,w,color,gradient)}</g>`}
// Leaf petiole and bud base anchors align each painted module to the continuous stem.
const referenceCrops={eucalyptus:[47,810,335,180,208,904],'eucalyptus-tip':[420,743,317,276,568,1004],cedar:[780,723,306,320,886,1030],'cedar-tip':[1180,723,208,327,1290,1035],bud:[824,431,173,287,910,704],'half-open':[1111,421,287,302,1255,708]};
function referencePiece(kind,anchorX,anchorY,width,color){const [cx,cy,cw,ch,ax,ay]=referenceCrops[kind],height=width*ch/cw,x=anchorX-(ax-cx)*width/cw,y=anchorY-(ay-cy)*width/cw;return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${cx} ${cy} ${cw} ${ch}" preserveAspectRatio="none" overflow="hidden" aria-hidden="true"><g ${kind==='half-open'?`filter="url(#tone-${color.slice(1)})"`:''}>${paintedImage(kind,'botanical-key')}</g></svg>`}

const leafCrops={'silver-dollar-single':[40,745,288,420,319,1135],'silver-dollar':[40,745,565,420,319,1135],'silver-dollar-tip':[725,725,440,440,939,1134],pointed:[64,87,412,400,278,479],'pointed-tip':[648,72,247,415,779,480],monstera:[1048,73,442,445,1285,508]};
function leafModule(kind,x,y,width){const [cx,cy,cw,ch,ax,ay]=leafCrops[kind],height=width*ch/cw;return `<svg class="botanical-cell" style="overflow:hidden" x="${x-(ax-cx)*width/cw}" y="${y-(ay-cy)*width/cw}" width="${width}" height="${height}" viewBox="${cx} ${cy} ${cw} ${ch}">${paintedImage(kind)}</svg>`}
function foliagePiece(type,tip,anchorX,anchorY,width){if(type==='silverdollareucalyptus')return leafModule(tip?'silver-dollar-tip':'silver-dollar',anchorX,anchorY,width);if(type==='pointedeucalyptus')return leafModule(tip?'pointed-tip':'pointed',anchorX,anchorY,width);return referencePiece(type+(tip?'-tip':''),anchorX,anchorY,width)}

// A continuous organic centerline; all joints use the same sampled curve.
function stemGeometry(item,endY=-item.h+8){const amplitude=Math.min(7,item.h*.028)*(item.bend??[1,-1,.8,-.75][item.variant]),knee=Math.min(4,item.h*.016)*(item.knee??.2),x=t=>amplitude*Math.sin(Math.PI*t)+knee*Math.sin(2*Math.PI*t),dx=t=>amplitude*Math.PI*Math.cos(Math.PI*t)+2*Math.PI*knee*Math.cos(2*Math.PI*t);let path='M0 0';for(let n=0;n<5;n++){const a=n/5,b=(n+1)/5,dt=(b-a)/3;path+=` C${x(a)+dx(a)*dt} ${endY*(a+dt)} ${x(b)-dx(b)*dt} ${endY*(b-dt)} ${x(b)} ${endY*b}`}return {path,xAt:y=>x(Math.max(0,Math.min(1,y/endY))),angleAt:y=>-Math.atan(dx(Math.max(0,Math.min(1,y/endY)))/endY)*180/Math.PI}}
function largeRoundFoliageMarkup(item){
 const tipY=-item.h+18,curve=stemGeometry(item,tipY);
 let out=`<path class="foliage-trunk" d="${curve.path}" fill="none" stroke="#7f8065" stroke-width="1.5" stroke-linecap="round"/>`;
 const gaps=[35,29,41,32],sizes=[44,38,46,40],sides=[1,-1,1,1,-1],angles=[-12,17,-4,22,7];
 let n=0;
 for(let y=-38;y>tipY+24;){
  const k=n+item.variant,width=sizes[k%sizes.length]*item.scale*(1-.18*Math.min(1,-y/item.h));
  out+=`<g class="foliage-node" transform="translate(${curve.xAt(y)} ${y}) rotate(${curve.angleAt(y)+angles[k%angles.length]}) scale(${sides[k%sides.length]} 1)">${leafModule('silver-dollar-single',0,0,width)}</g>`;
  y-=gaps[(n+item.variant)%gaps.length];n++;
 }
 out+=`<g class="foliage-tip" transform="translate(${curve.xAt(tipY)} ${tipY}) rotate(${26+item.variant*3})">${leafModule('silver-dollar-single',0,0,27*item.scale)}</g>`;
 return out;
}
function foliageMarkup(item,color){if(item.type==='birch')return ruscusBranch(item,color);if(item.type==='silverdollareucalyptus')return largeRoundFoliageMarkup(item);const h=item.h,tipY=-h+18,curve=stemGeometry(item,tipY);let out=`<path class="foliage-trunk" d="${curve.path}" fill="none" stroke="${shade(color,-25)}" stroke-width="${item.type==='cedar'?1.8:1.4}" stroke-linecap="round"/>`;let n=0;
 for(let y=-48;y>tipY+10;y-=(item.type==='eucalyptus'?24:item.type==='pointedeucalyptus'?32:item.type==='silverdollareucalyptus'?44:40)){const fraction=Math.max(0,Math.min(1,(-y)/h)),taper=1-.42*fraction,angle=curve.angleAt(y);if(item.type==='cedar'){for(const side of [-1,1]){const width=(48+Math.sin(n*2+item.variant)*5)*item.scale*taper,spread=side*(35+((n+item.variant)%3)*8);out+=`<g class="foliage-node" data-length-cm="5" transform="translate(${curve.xAt(y+side*4)} ${y+side*4}) rotate(${angle+spread})" opacity="${1-Math.max(0,item.tone)*.45}">${foliagePiece(item.type,false,0,0,width)}</g>`}}else{const width=((item.type==='silverdollareucalyptus'?70:item.type==='pointedeucalyptus'?56:38)+Math.sin(n+item.variant)*3)*item.scale*taper;out+=`<g class="foliage-node" data-length-cm="3" transform="translate(${curve.xAt(y)} ${y}) rotate(${angle}) scale(${n%2?-1:1} ${item.type==='silverdollareucalyptus'?1:.78+(n%3)*.08})">${foliagePiece(item.type,false,0,0,width)}</g>`}n++}
 const topWidth=(item.type==='cedar'?24:item.type==='silverdollareucalyptus'?36:item.type==='pointedeucalyptus'?28:19)*item.scale;out+=`<g class="foliage-tip" transform="translate(${curve.xAt(tipY)} ${tipY}) rotate(${curve.angleAt(tipY)})">${foliagePiece(item.type,true,0,0,topWidth)}</g>`;return out}
function lisianthusSpray(item,color){const v=item.variant,s=item.scale*1.1;const buds=[[v%2?-29:26,[-6,-32,12,-18][v],11,v%2?-15:12]];let out='';const branch=(x,y)=>`<path d="M0 44 C0 26 ${x*.35} ${y+19} ${x} ${y+8}" fill="none" stroke="#7f9271" stroke-width="1.4"/>`;
 const blossoms=[[-21,15,.76,-9],[19,-15,.62,10]];for(const [x,y,scale,angle]of blossoms){out+=branch(x,y)+`<g class="lisianthus-bloom" transform="translate(${x} ${y}) rotate(${angle+v*2}) scale(${scale})">${flower('lisianthus',color,v)}</g>`}
 out+=branch(34,27)+`<g class="lisianthus-half-open" transform="translate(34 27) rotate(16)">${referencePiece('half-open',0,12,29,color)}</g>`;
 for(const [x,y,w,angle]of buds)out+=branch(x,y)+`<g class="lisianthus-bud" transform="translate(${x} ${y}) rotate(${angle})">${referencePiece('bud',0,8,w,color)}</g>`;
 return `<g transform="scale(${s})">${out}</g>`}

const gardenCrops={"lily-half":[75, 60, 1105, 1118],"peony":[17, 84, 1229, 1085],"dahlia":[23, 48, 1208, 1149],"lily":[28, 53, 1212, 1074],"waxflower-alt":[160,53,886,1148],"astilbe-alt":[359,109,804,1072],"stock":[363,27,527,1182],"statice":[244,80,757,1092],"scabiosa":[159,177,938,938],"greendianthus-bloom-simple":[124,66,1017,1132],"greendianthus-simple":[139,111,1013,1056],"celosia":[30,138,1196,982],"waxflower":[323,49,601,1166],"astilbe":[317,24,626,1202],"greendianthus":[139,118,994,1045],"greendianthus-bloom":[168,86,925,1085],"birdofparadise":[99, 67, 973, 1286],"kingprotea-white-half":[215, 110, 833, 1043],"kingprotea-white":[93, 115, 1074, 1025],"kingprotea-half":[210, 110, 840, 1045],"kingprotea":[94, 120, 1067, 1021],"thistle":[341, 214, 596, 829],"pincushion":[77, 144, 1100, 965],"fountaingrass":[250, 10, 250, 705],"fern":[1620, 10, 385, 705],"fountaingrass-curved":[760, 10, 750, 705],cotton:[0,0,1173,1341],butterflyranunculus:[645,20,590,600],gypsophila:[99,0,592,1024],oncidium:[916,0,526,1024],chamomile:[79,82,389,378],bluestar:[576,61,414,402],lavender:[1206,45,147,443],hydrangea:[66,564,423,393],anthurium:[587,551,389,413]};
function whiteBlushSprite(key){const [x,y,w,h]=gardenCrops[key],id='white-blush-'+key,markup=paintedImage(key);return `${coloredPetals(markup,'#fffefd',true,false)}<defs><filter id="${id}-petals" color-interpolation-filters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 12 -12 0 0 0"/><feComposite in2="SourceAlpha" operator="in"/></filter><mask id="${id}-mask" maskUnits="userSpaceOnUse" x="${x}" y="${y}" width="${w}" height="${h}"><g filter="url(#${id}-petals)">${markup}</g></mask><radialGradient id="${id}-color" gradientUnits="userSpaceOnUse" cx="${x+w*.5}" cy="${y+h*.75}" r="${w*.43}"><stop stop-color="#eab7cb" stop-opacity=".42"/><stop offset=".5" stop-color="#f2cbd9" stop-opacity=".2"/><stop offset="1" stop-color="#f2cbd9" stop-opacity="0"/></radialGradient></defs><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}-color)" mask="url(#${id}-mask)"/>`}
function gardenSprite(d,x,y,w,h,color){const key=d.artKey??d.id;if(d.spray)return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${gardenCrops[key].join(' ')}" preserveAspectRatio="xMidYMid meet">${d.whiteBlush?whiteBlushSprite(key):coloredPetals(paintedImage(key,d.blueKey?'blue-screen-key':d.neutralKey?'grass-key':''),color,d.recolorPetals,['stock','statice','scabiosa','peony','dahlia','lily'].includes(d.id))}</svg>`;if(d.id==='anthurium')return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${w}" height="${h}" viewBox="105 45 1105 1040" preserveAspectRatio="none">${coloredPetals(paintedImage('anthurium','botanical-key'),color,parseInt(color.slice(5,7),16)>parseInt(color.slice(1,3),16)*.8)}</svg>`;return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${gardenCrops[key].join(' ')}" preserveAspectRatio="${d.keepAspect?'xMidYMid meet':'none'}"><g ${d.id==='hydrangea'?`filter="url(#tone-${color.slice(1)})"`:''}>${paintedImage(key,d.id==='gypsophila'?'gypsophila-neutral':'')}</g></svg>`}
function variedSpray(d,item){if(d.id==='lilyofthevalley'&&item?.variant%2)return {...d,artSize:[93.5,187]};if(d.id==='lily'&&item?.variant%2)return {...d,artKey:'lily-half',artSize:[87.4,98.9]};if((d.id==='waxflower'||d.id==='astilbe')&&item?.variant%2){const key=d.id+'-alt';return {...d,artKey:key,blueKey:true,artAnchorX:{"waxflower-alt":0.5614588860461045,"astilbe-alt":0.29539543508692034,"stock":0.506919924729277,"statice":0.5219477260346437,"scabiosa":0.4937194116570234}[key]}}return d}
function gardenMarkup(d,item,color){d=variedSpray(d,item);if(d.id==='lily'||d.id==='peony')d={...d,whiteBlush:item.color===(d.id==='lily'?0:1)};if(d.id==='birdofparadise'&&item.variant%2)return `<g transform="scale(-1 1)">${gardenMarkup(d,{...item,variant:0},color)}</g>`;if(d.id==='greendianthus')d={...d,blueKey:item.color===1,artKey:item.color===1?'greendianthus-bloom-simple':'greendianthus-simple',artAnchorX:item.color===1?0.5095348996338699:d.artAnchorX};if(d.id==='kingprotea')d={...d,spray:true,blueKey:item.color===1,neutralKey:item.color===0&&!!(item.variant%2),artKey:item.color===1?(item.variant%2?'kingprotea-white-half':'kingprotea-white'):(item.variant%2?'kingprotea-half':'kingprotea')};if(d.id==='fountaingrass')d={...d,artKey:item.variant%2?'fountaingrass-curved':'fountaingrass',neutralKey:true,artAnchorX:item.variant%2?40/750:d.artAnchorX,recolorPetals:item.color===1};const [w,h]=extraDimensions(d,item.h),factor=Math.max(.8,Math.min(1,item.h/160)),angle=[0,-3,3,-1][item.variant];let out='';if(d.id==='chamomile'||d.id==='bluestar'){const diameter=d.id==='chamomile'?23:29;const blooms=[[-22,23,.85],[5,4,1],[24,42,.8]];if(d.id==='chamomile'){if(item.variant>=1)blooms.push([-27,53,.72]);if(item.variant>=2)blooms.push([29,13,.76]);if(item.variant===3)blooms.push([2,35,.8]);}for(const [x,y,k]of blooms){const size=diameter*k;out+=`<path d="M0 ${d.artSize[1]*.96} C0 ${y+37} ${x*.65} ${y+size} ${x} ${y+size*.76}" stroke="#849272" stroke-width="1.4" fill="none"/>${gardenSprite(d,x-size/2,y,size,size,color)}`}return `<g transform="translate(0 ${-item.h}) scale(${item.scale*factor}) rotate(${angle} 0 ${d.artSize[1]*.96})">${out}</g>`}return `<g transform="translate(0 ${-item.h}) scale(${item.scale}) rotate(${angle} 0 ${h*.96})">${gardenSprite(d,-w*(d.artAnchorX??.5),0,w,h,color)}</g>`}
const extraCrops={buttonmum:[145,145,345,325],dianthus:[670,43,520,580],delphinium:[205,620,240,625],foxtail:[855,650,175,585]};
function extraDimensions(d,h=300){if(d.vectorSpray||d.vectorLeaf)return d.artSize.map(n=>n*Math.max(.8,Math.min(1,h/160)));const factor=Math.max(.8,Math.min(1,h/160));if(d.keepAspect){const crop=gardenCrops[d.artKey??d.id],height=d.artSize[1]*factor;return [height*crop[2]/crop[3],height]}if(d.newAtlas||d.leafAtlas)return d.artSize.map(n=>n*factor);return d.id==='buttonmum'?[68*factor,75*factor]:d.id==='dianthus'?[100*factor,112*factor]:d.id==='delphinium'?[64*factor,170*factor]:[36*factor,108*factor]}
function extraMarkup(d,item,color){if(d.vectorLeaf)return newLeafMarkup(d,item,color);if(d.vectorSpray)return newBotanicalSpray(d,item,color);if(d.leafAtlas){const [w,h]=extraDimensions(d,item.h);return `<g transform="translate(0 ${-item.h}) scale(${item.scale})">${leafModule('monstera',0,h*.96,w)}</g>`}if(d.newAtlas)return gardenMarkup(d,item,color);const [w,h]=extraDimensions(d,item.h),crop=extraCrops[d.id],x=d.id==='foxtail'?-w*(94/175):-w/2,y=-item.h;if(d.id==='buttonmum'){let clusters='';for(const [px,py,diam]of [[-20,25,25],[12,10,27],[25,43,23]])clusters+=`<path d="M0 72 Q${px*.2} ${py+25} ${px} ${py+diam*.7}" fill="none" stroke="#849272" stroke-width="1.5"/><svg class="botanical-cell" style="overflow:hidden" x="${px-diam/2}" y="${py}" width="${diam}" height="${diam}" viewBox="${crop.join(' ')}"><g filter="url(#tone-${color.slice(1)})">${paintedImage(d.id)}</g></svg>`;return `<g transform="translate(0 ${y}) scale(${item.scale*Math.max(.8,Math.min(1,item.h/160))})">${clusters}</g>`}return `${d.id==='dianthus'?petalFilter(color):''}<g transform="translate(0 ${y}) scale(${item.scale})"><svg class="botanical-cell" style="overflow:hidden" x="${x}" y="0" width="${w}" height="${h}" viewBox="${crop.join(' ')}" preserveAspectRatio="none"><g ${d.id==='dianthus'&&Math.abs(parseInt(color.slice(1,3),16)-parseInt(color.slice(3,5),16))<15?`filter="url(#petal-${color.slice(1)})"`:''}>${paintedImage(d.id,d.id==='dianthus'||d.id==='foxtail'?'botanical-key':'')}</g></svg></g>`}
function specimen(d,item){d=variedSpray(d,item);const color=item?tint(d.colors[item.color][1],item.tone):d.colors[d.previewColor??0][1],sample={type:d.id,color:d.previewColor??0,h:135,variant:0,scale:1,tone:0,bend:.8,knee:.15,...item,h:135};if(d.extra){const preview={...sample,h:155,scale:1},[w,h]=extraDimensions(d,155);return `<svg viewBox="${d.id==='fountaingrass'&&item?.variant%2?'-30 -175 235 220':d.id==='astilbe'&&item?.variant%2?'-65 -175 160 220':d.id==='birdofparadise'?'-95 -175 190 220':(d.id==='kingprotea'||d.id==='fatsia')?'-80 -175 160 220':'-65 -175 130 220'}" aria-hidden="true"><path d="M0 35 Q4 -10 0 ${-155+h*.96}" fill="none" stroke="${d.stemColor??'#849272'}" stroke-width="${d.stemWidth?d.stemWidth*1.8/2.1:1.8}"/>${extraMarkup(d,preview,color)}</svg>`}if(d.foliage)return `<svg viewBox="-65 -155 130 190" aria-hidden="true">${foliageMarkup(sample,color)}</svg>`;if(d.id==='lisianthus')return `<svg viewBox="-70 -78 140 165" aria-hidden="true"><path d="M0 84Q3 64 0 41.14" stroke="#849272" stroke-width="1.8" fill="none"/>${lisianthusSpray({...sample,scale:.85},color)}</svg>`;return `<svg viewBox="-55 -65 110 150" aria-hidden="true"><path d="M0 78 C3 54 -2 35 0 ${d.id==='carnation'?d.size*.9*(item?.scale??1):8}" stroke="#849272" stroke-width="${d.stemWidth?d.stemWidth*1.8/2.1:1.8}" fill="none"/><g transform="scale(${item?.scale??1})">${flower(d.id,color,item?.variant??0,d.id==='rose'&&item?.color===8)}</g></svg>`}

function setPanel(panel){document.body.dataset.panel=panel;$('materials-tab').setAttribute('aria-selected',String(panel==='materials'));$('adjust-tab').setAttribute('aria-selected',String(panel==='adjust'));$('vase-tab').setAttribute('aria-selected',String(panel==='vase'))}

function announce(s){$('status').textContent=s}
function add(type){if(items.length>=50){announce('最多可使用 50 枝花材 · Maximum 50 stems');return}let d=data.find(d=>d.id===type);if(!d)throw Error('未知花材');remember();let i={...variation(type),id:nextId++,type,color:0,h:270+(items.length%3)*27,a:items.length?((items.length%5)-2)*12:0,x:330};if(type==='doublelisianthus'){i.variant=doubleLisianthusNext;doubleLisianthusNext=1-doubleLisianthusNext;}if(type==='irisleaf'){i.variant=irisNext;irisNext=1-irisNext;}if(type==='poppy'){i.variant=poppyNext;poppyNext=(poppyNext+1)%3;}if(type==='birdofparadise'){i.variant=birdofparadiseNext;birdofparadiseNext=1-birdofparadiseNext;}if(type==='sunflower'){i.variant=sunflowerNext;sunflowerNext=(sunflowerNext+1)%3;}if(type==='lily'){i.variant=lilyNext;lilyNext=1-lilyNext;}if(type==='kingprotea'){i.variant=kingproteaNext;kingproteaNext=(kingproteaNext+1)%2;}items.push(i);selected=i.id;render();globalThis.ForiSound?.added();announce(`已加入${d.name}`);return i.id}
// Stop at the size floor and keep the painted base above the vase opening.
function minimumHeight(item){const d=variedSpray(data.find(d=>d.id===item.type),item);if(d.id==='greendianthus')return Math.ceil(Math.max(24,extraDimensions(d,80)[1]*item.scale*.88));if(vase==='bowl'){if(d.extra)return Math.ceil(Math.max(24,extraDimensions(d,80)[1]*item.scale*.9));if(d.foliage)return 24;return Math.ceil(Math.max(18,d.size*.62*item.scale));}if(d.extra)return Math.ceil(Math.max(128,extraDimensions(d,160)[1]*item.scale*.96+20));if(d.foliage)return 40;return Math.ceil(Math.max(40,(d.id==='lisianthus'?48.4:d.size*1.075)*item.scale+20))}
function active(){return items.find(x=>x.id===selected)}
// Geometry helper for mouth overlap; artwork order itself always follows the item list.
function flowerAtMouth(d,i){if(wrappedVessel())return false;
 let left,right,top,bottom;
 if(d.foliage){left=-65*i.scale;right=65*i.scale;top=-i.h-20;bottom=-12;}
 else if(d.extra){const [w,h]=extraDimensions(d,i.h),anchor=d.artAnchorX??.5;left=-w*anchor*i.scale;right=w*(1-anchor)*i.scale;top=-i.h;bottom=top+h*i.scale;}
 else if(d.id==='doublelisianthus'){left=-33*i.scale;right=46*i.scale;top=-i.h-55*i.scale;bottom=-i.h+36*i.scale;}
 else {const r=d.size*1.15*i.scale;left=-r;right=r;top=-i.h-r;bottom=-i.h+(d.id==='lisianthus'?49*i.scale:r);}
 if(d.id==='birdofparadise'&&i.variant%2)[left,right]=[-right,-left];
 const a=i.a*Math.PI/180,ys=[left,right].flatMap(x=>[top,bottom].map(y=>stemBase()+x*Math.sin(a)+y*Math.cos(a)));
 return Math.max(...ys)>=(vase==='paper'?520:vase==='columnhigh'?448:478);
}
function render(){updateBackground();updateVase();updatePalette();let stems='',tops='',fronts='';for(const i of items){const d=variedSpray(data.find(d=>d.id===i.type),i),t=`translate(${i.x-(vase==='television'?48:0)} ${stemBase()}) rotate(${i.a})`,color=tint(d.colors[i.color][1],i.tone);const tip=d.extra?i.h-extraDimensions(d,i.h)[1]*i.scale*.96:d.foliage?i.h-35:i.type==='tulip'?i.h-d.size*2.15*.44*i.scale:i.type==='carnation'?i.h-d.size*.9*i.scale:i.h-8;
 let plantStem='';if(!d.foliage)plantStem+=`<path d="${stemGeometry(i,i.type==='lisianthus'?-i.h+48.4*i.scale:i.type==='doublelisianthus'?-i.h+33*i.scale:-tip).path}" stroke="${d.stemColor??'#7e8d70'}" stroke-width="${d.stemWidth??2.1}" fill="none"/>`;
 let art=d.extra?extraMarkup(d,i,color):d.foliage?foliageMarkup(i,color):i.type==='lisianthus'?`<g transform="translate(0 ${-i.h})">${lisianthusSpray(i,color)}</g>`:`<g transform="translate(0 ${-i.h}) scale(${i.scale})">${flower(i.type,color,i.variant,i.type==='rose'&&i.color===8)}</g>`;
 // The fern bitmap includes a bare petiole. Keep it behind the vessel while leaves follow item order.
 if(d.id==='fern'&&!wrappedVessel()){
  const cut=-i.h+extraDimensions(d,i.h)[1]*i.scale*.89,leafId=`fern-leaves-${i.id}`,stemId=`fern-petiole-${i.id}`;
  const defs=`<defs><clipPath id="${leafId}" clipPathUnits="userSpaceOnUse"><path d="M-1000 -2000H1000V${cut}H-1000Z"/></clipPath><clipPath id="${stemId}" clipPathUnits="userSpaceOnUse"><path d="M-1000 ${cut}H1000V2000H-1000Z"/></clipPath></defs>`;
  plantStem+=defs+`<g clip-path="url(#${stemId})">${art}</g>`;art=`<g clip-path="url(#${leafId})">${art}</g>`;
 }
 if(d.foliage){art=art.replace(/<path class="foliage-trunk"[^>]*\/>/g,path=>{plantStem+=path;return '';});}
 const inFront=!wrappedVessel(),open=`<g class="stem-item" data-id="${i.id}" tabindex="0" role="button" aria-label="${d.name}，第 ${items.indexOf(i)+1} 枝，方向鍵移動" transform="${t}">`,decor=`<circle cy="${-i.h+(d.foliage?35:0)}" r="${Math.max(36,d.size*i.scale+15)}" fill="transparent"/>${art}${selected===i.id?`<circle class="selection-ring" cy="${-i.h+(d.foliage?35:0)}" r="${d.size*i.scale+15}"/>`:''}`;
 if(inFront){tops+=`<g data-replay-id="${i.id}" transform="${t}">${plantStem}</g>`;fronts+=open+decor+'</g>';}
 else tops+=open+plantStem+decor+'</g>';
 }
 if(vase==='columnlow'||vase==='columnhigh'){const mouth=stemBase();tops=`<defs><clipPath id="slender-stem-opening" clipPathUnits="userSpaceOnUse"><path d="M-2000 -2000H2660V${mouth}H-2000Z"/><ellipse cx="330" cy="${mouth}" rx="18" ry="5"/></clipPath></defs><g clip-path="url(#slender-stem-opening)">${tops}</g>`;}
 if(['television','poodle','typewriter','swing'].includes(vase)){const base=stemBase(),half={television:84,poodle:16,typewriter:36,swing:65.52}[vase],cx=vase==='television'?282:330,top=vase==='television'?342:base-(vase==='swing'?12.48:vase==='typewriter'?9.6:8);const clip=`<defs><clipPath id="special-opening" clipPathUnits="userSpaceOnUse"><path d="M-2000 -2000H2660V${top}H${cx+half}V${base+2}H${cx-half}V${top}H-2000Z"/></clipPath></defs>`;tops=clip+`<g clip-path="url(#special-opening)">${tops}</g>`;if(!['television','poodle'].includes(vase))fronts=`<g clip-path="url(#special-opening)">${fronts}</g>`;}
 $('stems').innerHTML=stems;$('flowers').innerHTML=tops;$('front-flowers').innerHTML=fronts;$('empty').hidden=items.length>0;$('undo').disabled=!history.length;$('delete-selected').disabled=!active();$('count').textContent=String(items.length).padStart(2,'0')+' 枝 / stems';updateControls();globalThis.ForiReplay?.changed();}

function updateControls(){let i=active();$('controls').hidden=!i;$('no-selection').hidden=!!i;$('selection-number').innerHTML=items.length?items.map((item,n)=>`<option value="${item.id}" ${item.id===selected?'selected':''}>${String(n+1).padStart(2,'0')} · ${data.find(d=>d.id===item.type).name}</option>`).join(''):'<option value="">尚未選取 / Select a stem</option>' ;if(!i)return;const d=data.find(d=>d.id===i.type);$('selected-name').textContent=d.name;$('selected-en').setAttribute('data-opening',String(d.id==='sunflower'||d.id==='kingprotea'));$('selected-en').textContent=d.id==='sunflower'?['全開 · FULL BLOOM','幾乎全開 · NEARLY OPEN','半開 · HALF OPEN'][i.variant]:d.id==='kingprotea'?['全開 · FULL BLOOM','半開 · HALF OPEN'][i.variant]:d.en.toUpperCase();$('selected-preview').innerHTML=specimen(d,i);$('color-name').textContent=d.colors[i.color][0];$('swatches').innerHTML=d.colors.map((c,n)=>`<button class="swatch" style="background:${d.id==='gomphrena'&&n===2?'linear-gradient(#edb568,#cc5748)':d.id==='greendianthus'&&n===1?'linear-gradient(90deg,#9bae60 0 50%,#e7d9df 50% 100%)':d.id==='rose'&&n===8?'radial-gradient(#73182e,#b73249 45%,#e87d85)':c[1]}" aria-label="${c[0]}" aria-pressed="${n===i.color}" data-color="${n}" title="${c[0]}"></button>`).join('');$('height').min=minimumHeight(i);$('height').value=i.h;$('height-value').value=Math.round(i.h/8)+' cm';$('angle').value=i.a;$('angle-value').value=i.a+'°';}
 $('materials-tab').onclick=()=>setPanel('materials');$('adjust-tab').onclick=()=>setPanel('adjust');
 const foliageTypes=new Set(['cedar','eucalyptus','pointedeucalyptus','silverdollareucalyptus','monstera','fern','birdnestfern','fishtailfern','fiddlephilodendron','irisleaf','asparagusfern','dustymiller','birch','angelphilodendron','fatsia','silveroak']);
 const fillerTypes=new Set(['minirose','laceflower','sweetpea','gomphrena','lilyofthevalley','stock','statice','scabiosa','celosia','waxflower','astilbe','greendianthus','thistle','buttonmum','dianthus','chamomile','bluestar','lavender','delphinium','foxtail','gypsophila','oncidium','butterflyranunculus','fountaingrass']);
 function materialCategory(d){return foliageTypes.has(d.id)?'foliage':fillerTypes.has(d.id)?'filler':'main'}
 let category='main';
 const previewObserver=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;entry.target.querySelectorAll('image[data-src]').forEach(img=>{img.setAttribute('href',img.getAttribute('data-src'));img.removeAttribute('data-src')});previewObserver.unobserve(entry.target)}},{root:$('catalog'),rootMargin:'120px'});
 function catalogSpecimen(d){const markup=specimen(d);return previewObserver?markup.replace(/href="/g,'data-src="'):markup}
 function renderCatalog(){previewObserver?.disconnect();$('catalog').innerHTML=data.filter(d=>materialCategory(d)===category).sort((a,b)=>(b.id==='rose')-(a.id==='rose')).map(d=>`<button class="flower-card" data-type="${d.id}" aria-label="加入${d.name}">${catalogSpecimen(d)}<strong>${d.id==='eucalyptus'?'小圓葉<br>尤加利':d.id==='silverdollareucalyptus'?'大圓葉<br>尤加利':d.name}</strong><small>${d.en}</small><span class="add">＋</span></button>`).join('');if(previewObserver)$('catalog').querySelectorAll('.flower-card').forEach(card=>previewObserver.observe(card));$('catalog').scrollTop=0;$('catalog').scrollLeft=0;for(const name of ['main','filler','foliage'])$('category-'+name).setAttribute('aria-pressed',String(category===name));}
 for(const name of ['main','filler','foliage'])$('category-'+name).onclick=()=>{category=name;renderCatalog()};
 renderCatalog();
 $('catalog').onclick=e=>{let b=e.target.closest('[data-type]');if(b)add(b.dataset.type)};
 $('swatches').onclick=e=>{let b=e.target.closest('[data-color]');if(b&&active()){if(active().color===+b.dataset.color)return;remember();active().color=+b.dataset.color;render()}};
 for(let [id,key] of [['height','h'],['angle','a']]){const control=$(id);control.oninput=e=>{if(active()){sliderSnapshot??=snapshot();active()[key]=key==='h'?Math.max(minimumHeight(active()),Math.min(390,+e.target.value)):Math.max(-75,Math.min(75,+e.target.value));render()}};control.onchange=()=>{if(sliderSnapshot&&sliderSnapshot!==snapshot())remember(sliderSnapshot);sliderSnapshot=null;render()}}
 function removeSelected(){if(!active())return;remember();items=items.filter(i=>i.id!==selected);selected=items.at(-1)?.id??null;render();announce('已移除花材，可按上一步復原')}
 $('remove').onclick=$('delete-selected').onclick=removeSelected;
 $('undo').onclick=undo;
 $('selection-number').onchange=e=>{selected=Number(e.target.value);render()};
 document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='z'&&!e.shiftKey){e.preventDefault();undo()}});
 $('reset').onclick=()=>{if(!items.length)return;if(!confirm(globalThis.ForiLocale?.translate('確定清空全部花材，重新開始？')||'確定清空全部花材，重新開始？'))return;remember();items=[];selected=null;sunflowerNext=0;kingproteaNext=0;birdofparadiseNext=0;lilyNext=0;poppyNext=0;irisNext=0;doubleLisianthusNext=0;render();announce('已清空花器，可按上一步復原')};
 for(const id of ['back','front'])$(id).onclick=()=>{const n=items.findIndex(i=>i.id===selected),dest=id==='front'?items.length-1:0;if(n<0||n===dest)return;remember();const [item]=items.splice(n,1);items.splice(dest,0,item);render();announce(id==='front'?'已移到最前':'已移到最後')};
 $('zoom-canvas').onclick=()=>{const board=scene.parentElement,zoomed=board.classList.toggle('is-zoomed');$('zoom-canvas').setAttribute('aria-pressed',String(zoomed));$('zoom-canvas').setAttribute('aria-label',zoomed?'還原大小':'放大畫布');$('zoom-canvas').title=zoomed?'還原大小':'放大畫布';$('zoom-help').textContent=zoomed?'在空白處滑動查看 · Pan to explore':'';if(zoomed){const item=active(),rad=(item?.a??0)*Math.PI/180,focusX=item?item.x+Math.sin(rad)*item.h:330,focusY=item?stemBase()-Math.cos(rad)*item.h:350;board.scrollLeft=focusX/660*scene.clientWidth-board.clientWidth/2;board.scrollTop=focusY/720*scene.clientHeight-board.clientHeight*.35;}else{board.scrollLeft=0;board.scrollTop=0;}};
 let drag=null;const scene=$('scene');function point(e){let p=scene.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(scene.getScreenCTM().inverse())}
 scene.onpointerdown=e=>{let g=e.target.closest('[data-id]');if(!g)return;selected=+g.dataset.id;setPanel('adjust');let p=point(e),i=active();drag={id:i.id,p,a:i.a,h:i.h,x:i.x,before:snapshot()};scene.setPointerCapture(e.pointerId);render()};
 scene.onpointermove=e=>{if(!drag)return;let i=active(),p=point(e);let rad=drag.a*Math.PI/180,headX=drag.x+Math.sin(rad)*drag.h+p.x-drag.p.x,headY=stemBase()-Math.cos(rad)*drag.h+p.y-drag.p.y;let dx=headX-i.x,dy=stemBase()-headY;i.a=Math.round(Math.max(-75,Math.min(75,Math.atan2(dx,dy)*180/Math.PI)));i.h=Math.round(Math.max(minimumHeight(i),Math.min(390,Math.hypot(dx,Math.max(0,dy)))));render()};
 scene.onpointerup=scene.onpointercancel=()=>{if(drag&&drag.before!==snapshot())remember(drag.before);drag=null;render()};
 scene.onkeydown=e=>{let g=e.target.closest('[data-id]');if(!g)return;selected=+g.dataset.id;let i=active();if(e.key==='Enter'||e.key===' '){e.preventDefault();render()}else if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();const before=snapshot();if(e.key==='ArrowLeft')i.a=Math.max(-75,i.a-2);if(e.key==='ArrowRight')i.a=Math.min(75,i.a+2);if(e.key==='ArrowUp')i.h=Math.min(390,i.h+5);if(e.key==='ArrowDown')i.h=Math.max(minimumHeight(i),i.h-5);if(before!==snapshot())remember(before);render();scene.querySelector(`[data-id="${selected}"]`).focus()}else if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();$('remove').click()}};
 render();
 if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'add_flower',title:'加入花材',description:'在花器中加入一枝指定的花材並選取它。',inputSchema:{type:'object',properties:{type:{type:'string',enum:data.map(d=>d.id)}},required:['type'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||!data.some(d=>d.id===input.type)||Object.keys(input).some(k=>k!=='type'))throw Error('請選擇有效花材');if(items.length>=50)throw Error('花器最多可容納 50 枝 · Maximum 50 stems');const id=add(input.type);return{id,count:items.length}}})).catch(()=>{})}catch{}}

$('vase-select').onchange=e=>{remember();vase=e.target.value;render()};

for(const key of Object.keys(vaseColors))$('vase-color-'+key).onclick=()=>{if(vaseColor===key)return;remember();vaseColor=key;render();};

function setBackgroundMenu(open){$('background-options').hidden=!open;$('background-toggle').setAttribute('aria-expanded',String(open));}
$('background-toggle').onclick=()=>setBackgroundMenu($('background-options').hidden);
for(const key of Object.keys(backgroundColors))$('background-'+key).onclick=()=>{if(backgroundColor!==key){remember();backgroundColor=key;render();}setBackgroundMenu(false);$('background-toggle').focus({preventScroll:true});};
document.addEventListener('pointerdown',event=>{if(!event.target.closest('.background-tools'))setBackgroundMenu(false);},true);
document.querySelector('.background-tools').addEventListener('keydown',event=>{if(event.key==='Escape'){setBackgroundMenu(false);$('background-toggle').focus({preventScroll:true});}});

$('vase-tab').onclick=()=>setPanel('vase');for(const key of Object.keys(vaseSizes))$('vase-card-'+key).onclick=()=>{if(vase===key)return;remember();vase=key;render();};

// Quiet, transparent vector flowers: broad color planes and a few botanical details.
function looseFlowerCenter(color,seed=0,poppy=false){
 const red=parseInt(color.slice(3,5),16)<125,base=poppy?(red?'#51443b':'#bfaa62'):'#817344';
 let out=`<path d="M-10 -3Q-12 -9 -5 -10Q0 -14 6 -9Q13 -7 10 0Q13 7 5 9Q-2 13 -7 8Q-13 5 -10 -3Z" fill="${base}"/>`;
 for(let j=0;j<29;j++){const a=j*2.39996+seed*.7,r=2+Math.sqrt(j/29)*8.5,x=Math.cos(a)*r,y=Math.sin(a)*r*.85;
 out+=`<ellipse cx="${x}" cy="${y}" rx="${.55+(j%4)*.2}" ry="${.75+(j%3)*.2}" transform="rotate(${j*37} ${x} ${y})" fill="${poppy?(red?['#afa284','#6f6250','#bdb295'][j%3]:['#e1c574','#d5b65e','#a39458'][j%3]):['#aa985f','#918052','#b09e65'][j%3]}"/>`;}
 if(poppy)out+='<path d="M-4 -2Q-3 -6 1 -5Q5 -5 5 -1Q7 2 2 4Q-3 5 -5 1Z" fill="#89906b"/><path d="M-2 -2Q0 -3 3 -1M-2 1Q1 0 2 2" fill="none" stroke="#bbc09b" stroke-width=".8"/>';
 return out;
}
function newBotanicalHead(type,color,variant=0){
 let out='';const light=shade(color,15),dark=shade(color,-18);
 if(type==='doublelisianthus'){
  const rgb=color.slice(1).match(/../g).map(v=>parseInt(v,16)),picotee=rgb[0]<160&&rgb[1]<125&&rgb[2]>130;
  const petal=picotee?'#f4f0e8':color,edge=picotee?shade(color,30):shade(color,-7);
  // A quiet cup of three broad petals, with soft folds instead of stacked ruffles.
  let bloom=`<path d="M-24 -16 C-27 -28 -14 -29 -7 -25 C0 -32 13 -29 16 -22 C27 -25 29 -17 24 -10 C22 7 11 24 1 29 C-10 24 -22 7 -24 -16Z" fill="${shade(petal,-8)}"/>
   <path d="M-24 -16 C-27 -25 -16 -28 -7 -23 C1 -18 7 -9 8 2 C9 13 5 24 1 29 C-12 22 -22 3 -24 -16Z" fill="${shade(petal,5)}"/>
   <path d="M24 -17 C21 -24 15 -25 8 -21 C0 -16 -5 -8 -5 3 C-5 15 -1 24 1 29 C13 23 22 3 24 -17Z" fill="${petal}"/>
   <path d="M-15 -9 C-13 -17 -5 -18 1 -13 C8 -19 17 -16 18 -9 C16 8 8 22 1 29 C-8 23 -14 7 -15 -9Z" fill="${shade(petal,9)}"/>
   <path d="M-24 -16 C-27 -25 -16 -28 -7 -23 M8 -21 C15 -25 21 -24 24 -17 M-15 -9 C-13 -17 -5 -18 1 -13 C8 -19 17 -16 18 -9" fill="none" stroke="${edge}" stroke-width="${picotee?1.6:.65}" stroke-linecap="round" opacity=".8"/>
   <path d="M0 33 Q-6 29 -8 22 Q-3 25 1 29 Q5 25 9 21 Q7 29 2 34Z" fill="#87996e"/>`;
  let branch='';if(variant%2)branch=`<path d="M0 32 Q26 18 31 -21" fill="none" stroke="#7e8d70" stroke-width="1.4"/><g transform="translate(32 -29) rotate(17) scale(.78)"><path d="M0 15 C-12 5 -9 -12 0 -20 C10 -13 12 4 0 15Z" fill="#c5cf86"/><path d="M0 14 Q-2 0 2 -17 M0 14 Q-10 4 -9 -4 M0 14 Q9 5 9 -3" fill="none" stroke="#8a9b59" stroke-width=".8"/><path d="M-4 -14 Q-2 -21 0 -18 Q3 -23 5 -16" fill="#e3e6ae"/></g>`;
  return `<g class="double-lisianthus-spray">${branch}<g class="double-lisianthus-bloom" transform="rotate(${variant%2?-9:6} 0 30) scale(.88 1)">${bloom}</g><path d="M0 33 Q-20 16 -22 25 Q-17 34 0 36" fill="#81956d"/></g>`;
 }
 if(type==='minirose'){
  for(const [x,y,scale] of [[-17,8,.4],[13,-13,.46],[22,18,.3]])out+=`<path d="M0 28Q${x*.4} ${y+15} ${x} ${y}" fill="none" stroke="#7e8d70" stroke-width="1.2"/><g transform="translate(${x} ${y}) scale(${scale})">${roseSideBloom(color,false)}</g>`;
  out+='<path d="M-2 19Q-22 4 -25 14Q-19 25 -2 22M4 7Q15 -2 24 2Q20 13 4 11" fill="#7e8d70"/>';
  return out;
 }
 if(type==='spidermum'){
  const rgb=color.slice(1).match(/../g).map(n=>parseInt(n,16)),warm=rgb[0]>rgb[1]*1.3&&rgb[2]<rgb[1]*.8,tip=warm?'#d9b54c':shade(color,20),root=warm?shade(color,-25):shade(color,-28);
  // Slender straight tubular petals, orange-red bases and golden pointed tips.
  for(let row=0;row<3;row++)for(let j=0;j<39;j++){
   const a=j*360/39+row*4.7+Math.sin(j*2.1)*1.7,len=48-row*13+Math.sin(j*2.7+row)*5,bend=Math.sin(j*1.8+row)*3,width=1.05-row*.12,base=row?2:5;
   out+=`<g transform="rotate(${a})"><path d="M${-width} -${base} Q${bend-width} -${len*.65} ${bend-.35} -${len} Q${bend+1} -${len+2} ${bend+1.2} -${len-.2} Q${bend+width} -${len*.62} ${width} -${base}Z" fill="${[color,shade(color,7),root][(j+row)%3]}"/><path d="M${bend-.3} -${len} Q${bend+.8} -${len+1.5} ${bend+1.1} -${len-.2} L${bend+.8} -${len-8-row*1.5} L${bend-.5} -${len-7-row*1.5}Z" fill="${j%4?tip:shade(tip,-17)}"/></g>`;
  }
  for(let j=0;j<12;j++){const a=j*2.4,r=Math.sqrt(j)*1.6;out+=`<ellipse cx="${Math.cos(a)*r}" cy="${Math.sin(a)*r}" rx=".8" ry="2.5" transform="rotate(${j*47})" fill="${j%3?tip:root}"/>`;}
 }else if(type==='feathergerbera'){
  for(let row=0;row<2;row++)for(let j=0;j<34;j++){
   const a=j*360/34+row*5.3,len=41-row*10+Math.sin(j*2.3)*3;
   out+=`<path transform="rotate(${a})" d="M-2 -8 Q-5 -23 -2 -${len-5} Q0 -${len+3} 3 -${len} Q1 -${len-8} 3 -23 L2 -8Z" fill="${[color,light,dark][(j+row)%3]}"/>`;
  }
  out+=looseFlowerCenter(color,variant);

 }else if(type==='irisleaf'){i.variant=irisNext;irisNext=1-irisNext;}if(type==='poppy'){
  const stage=variant%3;
  if(stage===0){
   for(let j=0;j<5;j++)out+=`<path transform="rotate(${j*72+variant*4})" d="M0 6 C-12 5 -34 -6 -35 -23 Q-36 -31 -28 -32 Q-22 -39 -16 -35 Q-8 -39 -1 -33 Q8 -36 12 -29 C20 -13 11 1 0 6Z" fill="${[color,light,dark,color,light][j]}"/>`;
   out+=looseFlowerCenter(color,variant,true);
  }else{
   // A cupped three-quarter bloom and a deeper side-facing bloom.
   const mirror=stage===2?-1:1;
   out+=`<g transform="scale(${mirror} 1)"><path d="M-30 -3Q-42 -23 -27 -32Q-21 -39 -14 -32Q-4 -40 5 -31Q13 -38 22 -26Q35 -25 34 -7L17 15Q-11 18 -30 -3Z" fill="${light}"/><path d="M-31 -5Q-35 -22 -23 -28Q-14 -16 -5 5L6 18Q-20 20 -31 -5" fill="${color}"/><g transform="translate(8 ${stage===2?-4:1}) scale(1 .58)">${looseFlowerCenter(color,variant,true)}</g><path d="M-33 -5Q-19 -3 -5 10Q11 15 24 -3Q30 -14 37 -14Q42 4 25 20Q7 32 -9 22Q-28 18 -33 -5Z" fill="${color}"/><path d="M-12 20Q11 27 29 13Q18 29 4 28Q-6 28 -12 20" fill="${dark}"/></g>`;
  }
 }
 return `<g transform="rotate(${[0,-12,14,-3][variant%4]})">${out}</g>`;
}
function newBotanicalSpray(d,item,color){
 if(d.id==='lilyofthevalley'&&item.variant>=2)return `<g transform="scale(-1 1)">${newBotanicalSpray(d,{...item,variant:item.variant-2},color)}</g>`;
 const [w,h]=extraDimensions(d,item.h),green='#849272',light=shade(color,13),dark=shade(color,-15);let out='';
 const stem=(path,width=1.25)=>`<path d="${path}" fill="none" stroke="${green}" stroke-width="${width}" stroke-linecap="round"/>`;
 const leaf=(x,y,angle,k=1)=>`<path transform="translate(${x} ${y}) rotate(${angle}) scale(${k})" d="M0 0 Q-17 -9 -9 -28 Q4 -17 0 0Z" fill="#909f7d"/>`;
 if(d.id==='laceflower'){
  const branchSets=[[[-28,43,.72],[2,18,.93],[29,39,.75]],[[-20,51,.82],[13,21,.95]],[[-37,55,.72],[-7,16,.8],[37,36,.7]]];
  out+=stem('M0 125 Q3 85 0 60',1.5);
  for(const [x,y,k]of branchSets[item.variant%3]){
   out+=stem(`M0 115 Q${x*.24} 76 ${x} ${y+20}`);
   for(let j=0;j<6;j++){const a=Math.PI+j*Math.PI/5,px=x+Math.cos(a)*23*k,py=y+Math.sin(a)*12*k+Math.sin(j*4)*2;
    out+=stem(`M${x} ${y+20} Q${(x+px)/2} ${y+7} ${px} ${py}`,.6);
    for(let b=0;b<3;b++){const bx=px+Math.sin(b*2.4+j)*3.6,by=py+Math.cos(b*2.4+j)*3.2;
     out+=`<g transform="translate(${bx} ${by}) scale(.7)"><path d="M0 -2.8Q3 -4 2.4 -.7Q5 1 1.2 2Q0 5 -1.4 2Q-5 1 -2.2 -1Q-3 -4 0 -2.8" fill="${b%2?color:light}"/><circle r=".55" fill="#bfc4a2"/></g>`;
    }
   }
  }
  for(const side of [-1,1])for(let j=0;j<3;j++)out+=stem(`M0 ${105-j*5} Q${side*(10+j*2)} ${92-j*4} ${side*(17+j*2)} ${92-j*7}`,.65);
 }else if(d.id==='sweetpea'){
  out+=stem('M0 128 Q7 79 1 26',1.6);
  for(const [x,y,k,a]of [[6,23,.8,-12],[-18,48,1,-24],[21,72,.92,18],[-9,96,.75,-10]]){
   out+=stem(`M2 ${y+24} Q${x*.8} ${y+18} ${x} ${y+10}`);
   out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 11 C-12 8 -24 -3 -18 -13 Q-15 -20 -8 -16 Q-1 -23 6 -16 Q17 -19 20 -10 C23 2 12 12 0 11" fill="${light}"/><path d="M0 11 Q-21 6 -21 -2 Q-8 -9 0 6 Q10 -10 23 -5 Q22 9 0 13" fill="${color}"/><path d="M-7 6 Q0 -1 8 5 Q11 17 0 18 Q-8 16 -7 6" fill="${dark}"/></g>`;
  }
  out+=leaf(0,119,-45,.7)+stem('M4 112 Q27 110 26 99 Q24 95 21 99',.7);
 }else if(d.id==='gomphrena'){
  for(const [x,y,k]of [[-25,46,.79],[7,24,1],[26,76,.7]]){
   out+=stem(`M0 126 Q${x*.25} 90 ${x} ${y+23}`,1.5);
   out+=`<g transform="translate(${x} ${y}) rotate(${x*.18}) scale(${k})"><path d="M0 23Q-13 13 -20 18Q-13 29 0 26Q13 31 21 20Q11 15 0 23" fill="#8c9d74"/><g transform="translate(0 25.65) scale(.85) translate(0 -25.65) scale(.88 1.35)"><path d="M-15 -3C-16 -12 -9 -19 0 -19C10 -19 17 -12 17 -2C18 9 11 19 1 19C-10 19 -18 11 -17 1Z" fill="${color}"/>`;
   for(let j=0;j<56;j++){
    const a=j*2.39996+.32*Math.sin(j*3),r=16*Math.sqrt(j/56),xx=Math.cos(a)*r,yy=Math.sin(a)*r,cc=item.color===2?['#ebb374','#e4a366','#dc8a5b','#d27155','#c66053','#ba5556'][Math.max(0,Math.min(5,Math.floor((yy+18)/6)))]:[color,light,shade(color,-8),shade(color,7)][j%4];
    out+=`<path transform="translate(${xx} ${yy}) rotate(${j*41})" d="M-2.6 1.3Q-4 -1 -1.7 -2.5Q0 -4 1.8 -2Q4 -1 2.2 1.6Q0 3.1 -2.6 1.3Z" fill="${cc}"/>`;
   }
   out+='</g></g>';
  }
  out+=leaf(0,116,58,.7)+leaf(-4,100,-28,.6);
 }else if(d.id==='lilyofthevalley'){
  const long=item.variant%2,base=long?170:135;
  out+=`<g transform="translate(0 ${base}) scale(.64) translate(0 -130)"><path d="M-3 130 C-31 103 -40 60 -27 31 C-7 51 -6 95 -3 130Z" fill="#82936c"/><path d="M2 130 Q26 83 34 63 Q40 103 2 130Z" fill="#96a47d"/></g>`;
  out+=stem(`M0 ${base} Q-3 43 16 15 Q28 3 31 19`,1.8);
  const bells=long?[[29,19,.6],[21,36,.7],[15,54,.8],[11,73,.9],[9,94,1],[8,116,1],[8,139,.95]]:[[29,19,.6],[19,34,.75],[13,52,.85],[9,72,1],[8,95,1]];
  for(const [x,y,k]of bells){
   out+=stem(`M${x-7} ${y-7} Q${x+7} ${y-10} ${x+7} ${y+1}`,.9);
   out+=`<g transform="translate(${x+6} ${y}) scale(${k})"><path d="M-5 0 Q0 -5 5 0 Q5 9 10 12 Q6 17 3 13 Q0 18 -3 13 Q-6 17 -10 12 Q-5 9 -5 0Z" fill="${color}"/><path d="M-8 12Q-5 15 -3 12Q0 16 3 12Q6 15 8 12" fill="none" stroke="#d9dfcb" stroke-width="1"/></g>`;
  }

 }
 return `<g transform="translate(0 ${-item.h}) scale(${item.scale*w/(d.id==='lilyofthevalley'?85:d.id==='gomphrena'?95:d.artSize[0])} ${item.scale*h/(d.id==='lilyofthevalley'?(item.variant%2?170:135):d.id==='gomphrena'?130:d.artSize[1])})">${out}</g>`;
}

// Upright cupped rose in three-quarter view; layers model petals rather than flattening the front sprite.
function roseSideBloom(color,gradient=false){
 const deep='#919191',mid='#b6b6b6',light='#d6d6d6',front='#c9c9c9';
 const petalBase='#c9c9c9';
 const petals=` <path d="M-23 -12C-29 -23 -22 -31 -13 -32Q-7 -38 1 -33Q15 -39 22 -28Q29 -25 26 -14C28 0 17 15 3 20Q-15 19 -23 -12Z" fill="${mid}"/>
 <path d="M-24 -17C-32 -27 -23 -34 -14 -30Q-11 -26 -6 -26Q-18 -21 -12 -13Q-20 -9 -24 -17Z" fill="${light}"/>
 <path d="M-13 -29Q-7 -36 2 -31Q12 -36 18 -28Q11 -30 5 -23Q-2 -20 -13 -29Z" fill="${petalBase}"/>
 <path d="M-8 -24Q-3 -32 8 -27Q17 -22 9 -14Q-1 -10 -8 -24Z" fill="${deep}"/>
 <path d="M-7 -25Q-1 -29 5 -23Q9 -20 5 -15Q1 -21 -4 -20Q-8 -20 -7 -25Z" fill="${light}"/>
 <path d="M16 -29C26 -33 31 -22 23 -16Q16 -11 7 -12Q15 -17 12 -22Q21 -20 16 -29Z" fill="${front}"/>
 <path d="M-24 -16Q-16 -14 -12 -5Q-8 4 5 7Q10 17 2 25C-10 29 -23 17 -23 6Q-29 -4 -24 -16Z" fill="${petalBase}"/>
 <path d="M-24 -14Q-20 -16 -17 -11Q-12 -3 -8 -2Q-19 0 -24 -7Z" fill="${light}"/>
 <path d="M25 -16Q31 -13 27 -4C23 3 23 14 14 21Q3 30 -8 25C-18 19 -14 8 -6 4Q1 0 10 -2Q20 -7 25 -16Z" fill="${front}"/>
 <path d="M25 -16Q29 -12 23 -8Q16 -2 9 0Q-4 2 -10 11Q-8 3 2 -1Q19 -7 25 -16Z" fill="${light}" opacity=".75"/>
 <path d="M-10 19Q1 28 14 20Q7 28 -2 28Q-8 27 -10 19Z" fill="${mid}"/>
`;
 return `<g class="rose-side-bloom" transform="rotate(7)">
 <path d="M-2 36C-14 36 -28 28 -34 18Q-23 16 -15 22L-13 20Q-4 25 -2 36Z" fill="#82966f"/>
 <path d="M0 40C11 24 22 28 33 24Q28 35 17 39L15 42Q7 44 0 40Z" fill="#91a17e"/>
 <path d="M-3 34Q-18 27 -28 21M3 39Q16 33 27 28" fill="none" stroke="#acb69a" stroke-width=".7" opacity=".55"/>
 <path d="M-4 25C-20 27 -23 11 -31 8Q-36 7 -38 11Q-34 2 -28 5Q-20 8 -15 18L-1 24Q13 13 26 12Q33 9 35 6Q36 16 25 18Q14 21 9 27Z" fill="#788c65"/>
 <g class="rose-side-petals" transform="translate(0 25) scale(.85) translate(0 -25)">
 <g filter="url(#tone-${color.slice(1)})">${petals}</g>
 ${gradient?`<defs><radialGradient id="rose-side-red-gradient" cx="50%" cy="45%" r="58%"><stop stop-color="#73182e"/><stop offset=".45" stop-color="#b73249"/><stop offset="1" stop-color="#e87d85"/></radialGradient><clipPath id="rose-side-gradient-clip">${petals}</clipPath></defs><path d="M-40 -45H40V35H-40Z" fill="url(#rose-side-red-gradient)" clip-path="url(#rose-side-gradient-clip)" opacity=".42"/>`:''}
 </g>
 <path d="M-8 25Q-3 25 0 29Q4 25 10 24Q6 33 0 34Q-7 33 -8 25Z" fill="#879870"/>
 </g>`;
}

for(const group of ['vessel','bouquet','imagination'])$('vessel-category-'+group).onclick=()=>{vesselGroup=group;refreshVesselGroups();};

function newLeafMarkup(d,item,color){
 const [w,h]=extraDimensions(d,item.h),v=item.variant%(d.id==='fishtailfern'?6:4),ink=shade(color,-19),pale=shade(color,22);let art='';
 const vein=(path,width=1)=>`<path d="${path}" fill="none" stroke="${pale}" stroke-width="${width}" stroke-linecap="round" opacity=".65"/>`;
 if(d.id==='fishtailfern'){
  const fork=[[-33,0,32,2],[-28,4,39,-2],[-39,2,25,6],[-25,-3,35,4],[-42,12,37,-6],[-19,-9,44,14]][v];
  const edge=v>=4?'M0 153C-16 125-22 89-13 58Q-18 40-40 16Q-24 19-16 33Q-23 13-19 0Q-3 12 0 38Q8 22 15 3Q23 17 17 35Q32 14 43 12Q39 35 19 54C26 88 18 124 0 153Z':`M0 153C-15 128-21 91-13 61C-11 46 ${fork[0]} 25 ${fork[0]} ${fork[1]}Q-13 15 0 36Q14 17 ${fork[2]} ${fork[3]}C${fork[2]-2} 28 14 46 16 63C25 94 17 128 0 153Z`;
  art=`<path d="${edge}" fill="${color}"/>`+vein('M0 149Q4 102 0 42',1.2);
  for(let j=0;j<8;j++){const y=58+j*10,k=9-Math.max(0,j-4);art+=vein(`M1 ${y+7}L-${k} ${y}M1 ${y+7}L${k+1} ${y-1}`,.55);}
 }else if(d.id==='angelphilodendron'){
  const edge='M0 0C-8 7-11 27-9 40C-17 27-24 7-30 12C-39 18-26 43-15 53C-28 43-44 26-48 35C-52 43-32 62-15 68C-32 60-55 48-56 60C-56 71-32 80-13 83C-33 79-53 77-49 89C-45 98-27 98-10 97C-22 106-43 109-34 119C-25 129-8 114 0 137C9 115 24 128 34 117C42 107 22 107 11 98C29 98 49 99 51 87C52 77 30 79 14 82C33 75 58 67 56 56C53 47 31 61 15 67C31 55 51 41 45 31C40 24 26 44 14 52C23 38 36 16 28 10C20 7 13 30 8 40C10 24 7 7 0 0Z';
  art=`<path d="${edge}" fill="${color}"/>`+vein('M0 135Q-3 67 0 5',1.3);
  for(const [y,x,dy]of [[37,14,-12],[55,21,-13],[75,27,-7],[94,25,-3],[112,15,2]])art+=vein(`M0 ${y}Q-${x*.5} ${y+dy} -${x} ${y+dy}M0 ${y}Q${x*.5} ${y+dy} ${x} ${y+dy}`, .65);
 }else if(d.id==='fatsia'){
  art=`<path d="M0 115Q-8 106-16 114Q-26 119-36 110Q-16 108-21 101C-42 105-62 96-67 87C-45 78-25 98-16 95C-22 88-48 87-53 70L-59 46C-36 41-27 81-15 82C-12 75-32 56-29 35L-30 7C-4 20-6 58-5 70Q0 82 3 64C2 38 16 10 27 3C41 30 21 54 14 73C28 56 33 27 57 19C61 43 43 69 24 80Q17 88 27 85C46 69 59 63 76 67C69 92 46 102 25 99Q15 98 22 104C42 104 56 109 64 120C45 117 39 134 17 115Q8 109 13 121Q25 135 27 146C11 139 6 124 0 115Z" fill="${color}"/>`;
  for(const [x,y]of [[-29,12],[26,8],[54,24],[70,70],[58,119],[23,140],[-62,88],[-55,49]])art+=vein(`M0 115L${x} ${y}`, .8);
  art+=`<path d="M0 115L0 151" fill="none" stroke="${ink}" stroke-width="1.8"/>`;
 }else if(d.id==='birdnestfern'){
  const crown=d.id==='fishtailfern'?['M0 20L-27 0Q-29 17-17 34L-37 20Q-36 44-19 55','M0 27L-12 0L-17 20L-32 7Q-37 29-19 55','M0 18L-34 5L-23 26L-40 25Q-36 47-19 55','M0 25L-20 0L-19 23L-30 13Q-31 37-19 55'][v]:'M0 0Q-12 16-16 35';
  art=`<path d="${crown}Q-29 55-19 75Q-29 99-12 120Q-18 141 0 153Q18 140 12 121Q28 101 20 79Q30 55 17 35${d.id==='fishtailfern'?['Q36 35 35 15L17 29Q29 9 22 0L0 20','Q32 29 27 6L10 24L6 0L0 27','Q42 40 39 17L20 26L30 0L0 18','Q30 30 34 12L17 29L14 0L0 25'][v]:'Q15 15 0 0'}Z" fill="${color}"/>`+vein('M0 151Q-3 92 0 23',1.6);
  for(let j=0;j<12;j++){const y=36+j*9;art+=vein(`M0 ${y+7}Q${-9} ${y} ${-14-Math.sin(j)*3} ${y-3}M0 ${y+7}Q9 ${y} ${14+Math.sin(j)*3} ${y-3}`,.55);}
 }else if(d.id==='fiddleleaf'){
  art=`<path d="M0 133Q-32 135-35 110Q-37 95-23 81Q-19 69-32 51Q-49 20-28 7Q-11 -3 0 9Q18 -4 35 11Q49 28 31 52Q19 70 24 82Q42 104 31 120Q20 135 0 133Z" fill="${color}"/>`+vein('M0 132Q-6 72 0 9',1.6);
  for(let j=0;j<7;j++){const y=23+j*15,reach=y>50&&y<90?17:26;art+=vein(`M-1 ${y+12}Q-12 ${y+7} -${reach} ${y}M-1 ${y+12}Q12 ${y+5} ${reach} ${y}`,1);}
 }else if(d.id==='fiddlephilodendron'){
  art=`<path d="M0 143Q-9 116-31 121Q-52 118-40 89Q-34 71-20 86Q-14 72-27 50Q-35 20 0 0Q34 24 26 51Q13 74 20 86Q38 69 44 96Q50 121 28 122Q10 117 0 143Z" fill="${color}"/>`+vein('M0 143Q-4 69 0 3',1.4)+vein('M0 116L-31 105M0 113L33 101M0 73L-22 43M0 73L22 44',.8);
 }else if(d.id==='irisleaf'){
  for(const [angle,k] of (v%2?[[ -7,.92],[6,.83],[0,1]]:[[-5,1],[6,.88]]))art+=`<g transform="rotate(${angle} 0 190) translate(0 ${190*(1-k)}) scale(1 ${k})"><path d="M0 190Q-9 94-3 24L1 0Q7 99 5 155Z" fill="${color}"/><path d="M0 189Q-5 99 0 15Q1 103 2 152Z" fill="#c9cea0"/>${vein('M0 187L1 8',.6)}</g>`;
 }else if(d.id==='dustymiller'){
  const leaf='M0 0Q-9 -4-10 -14Q-23 -10-25 -20Q-29 -30-17 -31Q-31 -40-24 -47Q-17 -54-10 -42Q-15 -59-6 -61Q3 -64 3 -48Q9 -62 16 -56Q23 -49 13 -38Q29 -43 29 -32Q30 -23 15 -22Q24 -12 16 -6Q9 -2 0 0Z';
  art=`<path d="M0 140Q-4 70 0 35" stroke="${ink}" stroke-width="1.5" fill="none"/>`;
  for(const [x,y,a,k] of [[0,62,0,.9],[-9,98,-45,.68],[10,105,44,.75],[-7,135,-57,.55],[8,138,55,.57]])art+=`<path d="M-1 ${y+8}L${x} ${y}" stroke="${ink}" stroke-width="1.2"/><g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="${leaf}" fill="${color}"/><path d="M0 0L-2 -51M-1 -16L-18 -25M-1 -22L18 -32" fill="none" stroke="${pale}" stroke-width="1" opacity=".7"/></g>`;
 }else if(d.id==='silveroak'){
  const curl=[0,15,-12,7][v],count=[11,9,12,10][v],spread=[1,.76,1.14,.9][v];
  art=`<path d="M0 168Q${curl} 92 3 7" fill="none" stroke="#b4b8a1" stroke-width="1.3"/>`;
  for(let j=0;j<count;j++)for(const side of [-1,1]){const y=30+j*123/(count-1),len=(14+Math.sin((j+1)/(count+2)*Math.PI)*25)*(side===1?.88:1)*spread,up=20+(count-1-j)*1.2+(j%3)*2;
   art+=`<g transform="translate(${2*curl*(y/168)*(1-y/168)} ${y+(side===1?4:0)}) scale(${side} 1)"><path d="M0 2C${len*.35} -5 ${len*.78} ${-up*.53} ${len} ${-up}C${len*.96} ${-up*.35} ${len*.4} 4 0 5Z" fill="${color}"/>${vein(`M1 3Q${len*.6} -5 ${len*.91} ${-up*.8}`,.4)}</g>`;
  }
  art+=`<path d="M2 24Q-2 8 6 0Q9 12 2 24Z" fill="${color}"/>`;
 }else if(d.id==='birch'){
  art='<path d="M0 174Q-8 87 7 10" stroke="#8c816d" stroke-width="1.8" fill="none"/>';
  for(let j=0;j<8;j++){const y=28+j*18,x=(j%2?1:-1)*(18+(j%3)*9),k=.65+(j%3)*.12;art+=`<path d="M0 ${y+20}Q${x*.4} ${y+8} ${x} ${y}" stroke="#8c816d" stroke-width="1" fill="none"/><g transform="translate(${x} ${y}) rotate(${x<0?-35:30}) scale(${k})"><path d="M0 0C-19 -9-19 -30 0 -44C18 -29 17 -10 0 0Z" fill="${color}"/>${vein('M0 -1Q-2 -23 0 -41',.7)}</g>`;}
 }else{
  art=`<path d="M0 151Q-9 87 6 0" fill="none" stroke="${ink}" stroke-width=".8"/>`;
  const spray=(sx,sy,ex,ey,width)=>{
   let out=`<path d="M${sx} ${sy}Q${sx+(ex-sx)*.5} ${sy+(ey-sy)*.44} ${ex} ${ey}" fill="none" stroke="${ink}" stroke-width="${width}" stroke-linecap="round"/>`;
   for(let k=1;k<=6;k++){const t=k/7,x=sx+(ex-sx)*t,y=sy+(ey-sy)*t,reach=((1-t)*3.5+.35)*Math.min(1,Math.hypot(ex-sx,ey-sy)/15);
    for(const side of [-1,1])for(let q=0;q<2;q++){const dx=side*reach*(.5+q*.25),dy=-reach*(.6+(2-q)*.32);out+=`<path d="M${x} ${y}l${dx} ${dy}" fill="none" stroke="${color}" stroke-width=".42" stroke-linecap="round"/>`;}
   }return out;
  };
  art+=spray(4,28,6,0,.5);
  for(let j=0;j<7;j++){const y=25+j*16,span=(16+j*3.6)*[1,1.45,1.7,1.3][v]*(j%2?1:-1),rise=[15,8,2,22][v]+(j%3)*4;
   art+=spray(0,y+14,span,y-rise,.55);
   for(let k=1;k<6;k++){const t=k/6,x=span*t,yy=y+14-(14+rise)*t;
    for(const side of [-1,1]){const dx=side*(3+(1-t)*12),dy=-3-(1-t)*15;art+=spray(x,yy,x+dx,yy+dy,.35);}
   }
  }
 }
 const naturalHeight=({birdnestfern:153,fishtailfern:153,fiddleleaf:133,fiddlephilodendron:143,irisleaf:190,asparagusfern:151,dustymiller:140,birch:174,angelphilodendron:137,fatsia:151,silveroak:168}[d.id])/.96;
 return `<g transform="translate(0 ${-item.h}) scale(${item.scale*w/d.artSize[0]} ${item.scale*h/naturalHeight})"><g transform="rotate(${[0,-5,4,-2,8,-8][v]} 0 ${naturalHeight*.94})">${art}</g></g>`;
}

function ruscusBranch(item,color){
 const tip=-item.h+20,curve=stemGeometry(item,tip),v=item.variant;let out=`<path class="foliage-trunk" d="${curve.path}" fill="none" stroke="${shade(color,-15)}" stroke-width="1.8"/>`;
 const leaf=(k,flip)=>`<g transform="scale(${flip*k} ${k})"><path d="M0 0C-22 -14-24 -42 5 -61C7 -42 31 -23 0 0Z" fill="${color}"/><path d="M0 -1Q4 -31 5 -57M0 -12Q-9 -29-7 -43M3 -14Q15 -31 8 -45" fill="none" stroke="${shade(color,18)}" stroke-width=".65" opacity=".7"/></g>`;
 let j=0;for(let y=-38;y>tip+30;y-=30+(j%3)*5){const side=(j+v)%2?1:-1,k=(.75+.1*((j+v)%3))*item.scale;out+=`<g class="foliage-node" transform="translate(${curve.xAt(y)} ${y}) rotate(${side*(26+(j%3)*12)+curve.angleAt(y)})">${leaf(k,side)}</g>`;j++;}
 out+=`<g class="foliage-tip" transform="translate(${curve.xAt(tip+35)} ${tip+35}) rotate(${curve.angleAt(tip)})">${leaf(.7*item.scale,1)}</g>`;return out;
}

window.ForiRose.ready.then(()=>{renderCatalog();render();}).catch(error=>{console.error(error);announce("玫瑰素材載入失敗，請重新整理再試。");});
