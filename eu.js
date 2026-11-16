(function(){
 if(document.getElementById('eu-music'))return;
 var H=document.documentElement,pref=null;
 try{pref=localStorage.getItem('eu-lang');}catch(x){}
 if(pref==='en'||(!pref&&!/^zh/i.test(navigator.language||'zh'))){H.classList.add('eu-en');}
 document.addEventListener('click',function(e){
  var t=e.target&&e.target.closest?e.target.closest('.eu-lang'):null; if(!t)return;
  H.classList.toggle('eu-en');
  try{localStorage.setItem('eu-lang',H.classList.contains('eu-en')?'en':'zh');}catch(x){}
 });
 if(!document.getElementById('eu-bg')){
  var bg=document.createElement('div');bg.id='eu-bg';bg.setAttribute('aria-hidden','true');
  var P='https://euddddd.github.io/portfolio/ic_';
  var G=['petal','star','note_g','heart','sparkle','petal','flower','tako','heart','star','sparkle','eye','anchor2','note'];
  var N=window.innerWidth>700?26:14;
  for(var j=0;j!==N;j++){
   var f=document.createElement('div');f.className='f';
   var sp=document.createElement('img');sp.src=P+G[j%G.length]+'.png';sp.alt='';
   var dur=18+Math.random()*22;
   f.style.left=(Math.random()*100)+'vw';
   var rr=Math.random(),sz=rr>0.85?44+Math.random()*26:(rr>0.5?24+Math.random()*16:12+Math.random()*10);
   sp.style.width=sz.toFixed(0)+'px';
   f.style.zIndex=sz>40?'1':'0';
   f.style.setProperty('--o',(0.16+Math.random()*0.16).toFixed(2));
   f.style.animationDuration=dur+'s';
   f.style.animationDelay=(-Math.random()*dur)+'s';
   sp.style.animationDuration=(2.5+Math.random()*3)+'s';
   f.appendChild(sp);bg.appendChild(f);
  }
  document.body.insertBefore(bg,document.body.firstChild);
 }
 setTimeout(function(){document.documentElement.classList.add('eu-seen');},3000);
 if(!document.getElementById('eu-bur')&&!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){
  var bu=document.createElement('div');bu.id='eu-bur';bu.setAttribute('aria-hidden','true');var bw=document.createElement('div');bw.className='bw';bu.appendChild(bw);
  var LY=[],G=[['bottom',6.62,71.98,87.0],['patty',6.62,59.09,86.88],['cheese',5.25,53.81,89.75],['lettuce',0.0,37.75,100.0],['top',6.5,6,87.12],['eye',61.0,61,24.88]];
  G.forEach(function(g,i){var sp=document.createElement('span');sp.className='ly';sp.style.left=g[1]+'%';sp.style.top=g[2]+'%';sp.style.width=g[3]+'%';sp.style.setProperty('--d',(i*0.045).toFixed(3)+'s');sp.style.zIndex=i;var im=document.createElement('img');im.src='https://euddddd.github.io/portfolio/bur_'+g[0]+'.webp';im.alt='';im.draggable=false;sp.appendChild(im);bw.appendChild(sp);LY.push(sp);});
  var bsay=document.createElement('div');bsay.className='bsay';bu.appendChild(bsay);document.body.appendChild(bu);
  var BL={zh:['你好','歡迎光臨','好餓','吃掉你','要點餐嗎','我在看你','再來一份','別走'],en:['hello','welcome','so hungry','eat you','order now','i see you','one more','dont go']};
  var JK='#$%&@*!?▓░▒§¤◆',bT=0,bI=0;
  function toks(t){var a=[],i=0;while(t.length>i){if(t.charAt(i+1)==='@'){a.push(t.charAt(i)+'@');i+=2;}else{a.push(t.charAt(i));i++;}}return a;}
  function garble(t){var a=toks(t),o='';if(a.length>2&&Math.random()>.65){var i=Math.floor(Math.random()*(a.length-1));var c=a[i];a[i]=a[i+1];a[i+1]=c;}
   for(var i=0;i!==a.length;i++){o+=a[i];if(Math.random()>.78)o+=(Math.random()>.6?'...':'')+JK.charAt(Math.floor(Math.random()*JK.length));}return o;}
  var BH={zh:['我的料要掉了','放開我','邪@大人...救我','別搖','眼睛要掉了','放我下去'],en:['my fillings','let go','dont shake','lord @vil...save me','my eye','put me down']};
  function bput(g){bsay.textContent='';var p=g.split('@');for(var i=0;i!==p.length;i++){if(i){var m=document.createElement('span');m.className='mos';bsay.appendChild(m);}bsay.appendChild(document.createTextNode(p[i]));}}
  function bTalk(src,dur){src=src||BL;var L=document.documentElement.classList.contains('eu-en')?src.en:src.zh;var t=L[Math.floor(Math.random()*L.length)];
   bput(garble(t));bsay.classList.add('show');clearInterval(bI);bI=setInterval(function(){bput(garble(t));},700);
   clearTimeout(bT);bT=setTimeout(function(){clearInterval(bI);bsay.classList.remove('show');},dur||2200);}
  function BW(){var v=document.documentElement.clientWidth||window.innerWidth;if(window.visualViewport&&window.visualViewport.width)v=Math.min(v,window.visualViewport.width);return Math.max(0,v-(bu.offsetWidth||58)-8);}
  var bface=1,bx=BW()*(0.2+Math.random()*0.6),by=0,bvx=0,bvy=0,air=false,bnext=performance.now()+1500,blast=0,hops=0;
  function sq(){bu.classList.remove('sq');void bu.offsetWidth;bu.classList.add('sq');}
  function jump(power,dirBias){var dir=dirBias||(Math.random()>0.5?1:-1);if(bx>BW()-40)dir=-1;if(40>bx)dir=1;
   bnext=performance.now()+99999;bu.classList.add('pre');setTimeout(function(){bu.classList.remove('pre');bvy=power;bvx=dir*(60+Math.random()*90);air=true;},120);}
  var bd=null,bheld=false,bnoClick=false;
  bu.style.touchAction='none';bu.style.cursor='grab';
  bu.addEventListener('pointerdown',function(e){if(e.button>0)return;var r=bu.getBoundingClientRect();bd={sx:e.clientX,sy:e.clientY,ox:e.clientX-r.left,id:e.pointerId,on:false};});
  window.addEventListener('pointermove',function(e){if(!bd||e.pointerId!==bd.id)return;
   if(!bd.on){if(6>Math.abs(e.clientX-bd.sx)+Math.abs(e.clientY-bd.sy))return;bd.on=true;bheld=true;bu.style.zIndex=9998;air=false;bvx=0;bvy=0;bnext=performance.now()+99999;bu.classList.remove('pre');bu.classList.remove('spin');bu.style.cursor='grabbing';
    try{bu.setPointerCapture(e.pointerId);}catch(q){} bd.ox=bu.offsetWidth/2; bTalk(BH,99999);}
   var h=bu.offsetHeight||64; bx=e.clientX-bd.ox; by=Math.max(0,window.innerHeight-2-(e.clientY-6+h)); if(bx>BW())bx=BW(); if(0>bx)bx=0;
   var vx=e.movementX||0; if(vx>1)bface=1;else if(-1>vx)bface=-1; bsw=Math.max(-1,Math.min(1,bsw*0.6+vx*0.08));});
  function bdrop(e){if(!bd||(e&&e.pointerId!==bd.id))return;var was=bd.on;bd=null;if(!was)return;bnoClick=true;setTimeout(function(){bnoClick=false;},50);
   bheld=false;bu.style.cursor='grab';clearTimeout(bT);bT=setTimeout(function(){clearInterval(bI);bsay.classList.remove('show');},900);
   if(by>2){air=true;bvy=0;bvx=0;}else{sq();bnext=performance.now()+1800;}}
  window.addEventListener('pointerup',bdrop);window.addEventListener('pointercancel',bdrop);
  var bsw=0;
  bu.addEventListener('click',function(){if(bnoClick){bnoClick=false;return;}bTalk();if(air)return;bu.classList.remove('spin');void bu.offsetWidth;bu.classList.add('spin');jump(560,0);setTimeout(function(){bu.classList.remove('spin');},800);});
  function btick(now){var dt=blast?Math.min(0.05,(now-blast)/1000):0;blast=now;
   if(bheld){}
   else if(air){bvy-=1500*dt;by+=bvy*dt;bx+=bvx*dt;if(bx>BW()){bx=BW();bvx=-bvx*0.5;}if(0>bx){bx=0;bvx=-bvx*0.5;}
    if(0>=by){by=0;air=false;sq();hops--;bnext=now+(hops>0?260:1800+Math.random()*3500);}}
   else if(now>bnext){if(0>=hops){hops=1+Math.floor(Math.random()*3);bu.style.zIndex=9990+Math.floor(Math.random()*8);}jump(260+Math.random()*120);}
   if(bx>BW())bx=BW();
   bu.style.transform='translate('+bx.toFixed(1)+'px,'+(-by).toFixed(1)+'px)';
   if(bvx>5)bface=1;else if(-5>bvx)bface=-1; var eyeL=bface>0?61:14;
   if(LY[5]&&LY[5]._l!==eyeL){LY[5]._l=eyeL;LY[5].style.left=eyeL+'%';}
   var sp=air?Math.min(1,Math.max(0,by/45)):0, ex=(bu.offsetWidth||60)/12;
   if(bheld){bsw*=0.92;var tt=now/1000;
    for(var li=0;li!==LY.length;li++){var k=li===5?1.6:li, d=(4-k)*ex*0.75+Math.sin(tt*9+li)*ex*0.18, sx=Math.sin(tt*5+li*0.7)*(4-k)*0.9+bsw*(4-k)*3, rot=Math.sin(tt*6+li)*(4-k)*2.2+(li===5?Math.sin(tt*11)*18:0);
     LY[li].style.transform='translate('+sx.toFixed(1)+'px,'+d.toFixed(1)+'px) rotate('+rot.toFixed(1)+'deg)';}}
   else for(var li=0;li!==LY.length;li++){var k=li===5?1.6:li, wob=li===5?(sp*25*(bvx>0?1:-1)):0;LY[li].style.transform=sp?'translateY('+(-sp*k*ex).toFixed(1)+'px) rotate('+wob.toFixed(1)+'deg)':'';}requestAnimationFrame(btick);}
  requestAnimationFrame(btick);
 }
 function mkWalker(o){if(document.getElementById(o.id))return;
  var ME='https://euddddd.github.io/portfolio/'+o.pre;
  var me=document.createElement('div');me.id=o.id;me.className='eu-wk';me.setAttribute('aria-hidden','true');
  var bob=document.createElement('div');bob.className='bob';var fr=document.createElement('div');fr.className='fr';
  var F={};['walk','side','front','wave','sit','up'].forEach(function(k){var im=document.createElement('img');im.src=ME+k+'.webp';im.alt='';im.draggable=false;fr.appendChild(im);F[k]=im;});
  var say=document.createElement('div');say.className='say';
  bob.appendChild(fr);me.appendChild(bob);me.appendChild(say);document.body.appendChild(me);
  var cur=null;function show(k){if(cur===k)return;if(cur)F[cur].classList.remove('on');F[k].classList.add('on');cur=k;}
  var still=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var x=Math.random()*Math.max(0,VW()-140),tx=x,mode='idle',until=0,step=0,stepT=0,last=0,busy=0;
  function VW(){var a=document.documentElement.clientWidth||window.innerWidth;if(window.visualViewport&&window.visualViewport.width)a=Math.min(a,window.visualViewport.width);return a;}
  function W(){return me.offsetWidth||107;}
  function maxX(){return Math.max(0,VW()-W()-8);}
  function pick(now){
   var r=Math.random();me.style.zIndex=9990+Math.floor(Math.random()*8);
   if(still){mode='idle';show('front');until=now+99999;return;}
   if(r>0.82){mode='sit';show('sit');me.classList.remove('walking');until=now+7000+Math.random()*6000;return;}
   if(r>0.55){mode='idle';show('front');me.classList.remove('walking');until=now+2500+Math.random()*3500;return;}
   mode='walk';var d=120+Math.random()*Math.max(80,VW()*0.45);
   tx=Math.random()>0.5?x+d:x-d; if(tx>maxX())tx=maxX()-Math.random()*40; if(0>tx)tx=Math.random()*40;
   me.classList.toggle('flip',x>tx);me.classList.add('walking');
  }
  var lines=o.lines;
  me.addEventListener('click',function(){
   if(noClick){noClick=false;return;}
   var L=document.documentElement.classList.contains('eu-en')?lines.en:lines.zh;
   say.textContent='';say.classList.remove('heart');var pickI=Math.floor(Math.random()*(L.length+(o.heart?1:0)));if(pickI===L.length){var hh=document.createElement('img');hh.src='https://euddddd.github.io/portfolio/ic_heart.png';hh.alt='♡';say.appendChild(hh);say.classList.add('heart');}else{say.textContent=L[pickI];}say.classList.add('show');
   me.classList.remove('walking');me.classList.remove('flip');show('wave');mode='talk';
   me.classList.remove('hop');void me.offsetWidth;me.classList.add('hop');
   clearTimeout(busy);busy=setTimeout(function(){say.classList.remove('show');me.classList.remove('hop');mode='idle';show('front');until=performance.now()+1500;},2400);
  });
  var lift=0,vy=0,drag=null,noClick=false;
  var holdL=o.hold;
  me.addEventListener('pointerdown',function(e){if(e.button>0)return;var r=me.getBoundingClientRect();drag={sx:e.clientX,sy:e.clientY,ox:e.clientX-r.left,oy:e.clientY-r.top,on:false,id:e.pointerId};});
  window.addEventListener('pointermove',function(e){
   if(!drag||e.pointerId!==drag.id)return;
   if(!drag.on){if(6>Math.abs(e.clientX-drag.sx)+Math.abs(e.clientY-drag.sy))return;drag.on=true;
    try{me.setPointerCapture(e.pointerId);}catch(q){}
    clearTimeout(busy);me.classList.remove('walking');me.classList.remove('flip');me.classList.remove('hop');me.classList.add('held');me.style.zIndex=9998;show('up');mode='held';drag.ox=me.offsetWidth*o.ax;drag.oy=me.offsetHeight*o.ay;
    var L=document.documentElement.classList.contains('eu-en')?holdL.en:holdL.zh;say.classList.remove('heart');say.textContent=L[Math.floor(Math.random()*L.length)];say.classList.add('show');}
   var h=me.offsetHeight||130,base=window.innerHeight-h+4;
   x=e.clientX-drag.ox; lift=Math.max(0,base-(e.clientY-drag.oy)); vy=0;
   if(x>maxX())x=maxX(); if(0>x)x=0;
  });
  function drop(e){if(!drag||(e&&e.pointerId!==drag.id))return;var was=drag.on;drag=null;if(!was)return;noClick=true;setTimeout(function(){noClick=false;},50);
   me.classList.remove('held');mode=lift>2?'fall':'land';if(mode==='land')land();}
  function land(){lift=0;vy=0;say.classList.remove('show');show('front');me.classList.remove('hop');void me.offsetWidth;me.classList.add('hop');mode='idle';until=performance.now()+1800;}
  window.addEventListener('pointerup',drop);window.addEventListener('pointercancel',drop);
  function tick(now){
   var dt=last?Math.min(0.1,(now-last)/1000):0;last=now;
   if(mode==='walk'){
    var sp=(VW()>600?46:34)*o.spd*dt, dir=tx>x?1:-1;
    if(sp>=Math.abs(tx-x)){x=tx;me.classList.remove('walking');mode='idle';show('front');until=now+1800+Math.random()*2500;}
    else{x+=dir*sp; if(now>stepT){step=1-step;stepT=now+260;show(step?'walk':'side');}}
   }else if(mode==='fall'){vy+=2600*dt;lift-=vy*dt;if(0>=lift)land();
   }else if(mode==='held'){
   }else if(mode!=='talk'&&now>until){pick(now);}
   if(x>maxX())x=maxX(); if(0>x)x=0;
   if(mode==='walk'&&((x>=maxX()&&tx>=x)||(0>=x&&x>=tx))){me.classList.remove('walking');mode='idle';show('front');until=now+1500;}
   me.style.transform='translate('+x.toFixed(1)+'px,'+(-lift).toFixed(1)+'px)';
   requestAnimationFrame(tick);
  }
  show('front');until=performance.now()+1200;requestAnimationFrame(tick);
 }
 mkWalker({id:'eu-me',pre:'me_',heart:true,ax:.5,ay:.06,spd:1,
  lines:{zh:['嗨～歡迎光臨！','慢慢逛喔～','要不要玩章魚燒？','今天也辛苦了～','我在散步～','AI 聊天真的很好玩！'],en:['Hi, welcome!','Take your time~','Try Takoyaki House?','You did great today~','Just taking a stroll~','AI chat is so much fun!']},
  hold:{zh:['哇啊啊！','放我下來～','好、好高喔！','咦咦咦？！'],en:['Whoa!','Put me down~','So high!','Eek?!']}});
 mkWalker({id:'eu-rin',pre:'rin_',heart:false,ax:.63,ay:.15,spd:1.12,
  lines:{zh:['你的願望本大神收下了！','又來啦？嘿嘿','別忘了本大神喔','快來找本大神許願～','神明也是會無聊的嘛','本大神才沒有在等你'],en:['Your wish? Received!','Back again? Heh','Don\'t forget me','Come make a wish~','Even gods get bored','I wasn\'t waiting for you or anything']},
  hold:{zh:['喂！放本大神下來！','本大神可是神耶！','……不爽。','你當本大神是貓喔？'],en:['Hey! Put me down!','I\'m a god, you know!','...Hmph.','Am I a cat to you?']}});
 var a=new Audio();a.loop=true;a.volume=0.2;
 var ready=null,want=false,ok=false,SIL='data:audio/wav;base64,UklGRkQDAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YSADAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==';
 function load(){if(ready)return ready;ready=fetch('https://euddddd.github.io/portfolio/bgm.dat').then(function(r){return r.arrayBuffer();}).then(function(buf){
  var u=new Uint8Array(buf),n=u.length,o=new Uint8Array(n),K='EuTreasureTrove-2026',k=K.length;
  for(var i=0;i!==n;i++){o[i]=u[n-1-i]^K.charCodeAt(i%k)^((i*31)&255);}
  a.src=URL.createObjectURL(new Blob([o],{type:'audio/mpeg'}));ok=true;
  if(want){want=false;go();}
 });return ready;}
 function go(){if(!ok){want=true;try{a.src=SIL;var q=a.play();if(q&&q.catch)q.catch(function(){});}catch(x){}load();return;}a.play().then(function(){set(true);}).catch(function(){set(false);});}
 setTimeout(load,1500);
 var b=document.createElement('button');
 b.id='eu-music';b.type='button';b.setAttribute('aria-label','播放音樂');
 var ic=document.createElement('span');ic.className='ic';var NS='http://www.w3.org/2000/svg',sv=document.createElementNS(NS,'svg');sv.setAttribute('viewBox','0 0 16 16');sv.setAttribute('width','15');sv.setAttribute('height','15');var pa=document.createElementNS(NS,'path');pa.setAttribute('d','M7 2.2h1.7c.4 1.6 1.6 2.4 3.3 2.9v1.8c-1.4-.2-2.5-.7-3.3-1.4v5.6c0 1.7-1.4 2.9-3.1 2.9C4 14 3 13.2 3 12c0-1.4 1.4-2.4 3-2.4.4 0 .7 0 1 .1z');pa.setAttribute('fill','currentColor');sv.appendChild(pa);ic.appendChild(sv);
 var tx=document.createElement('span');tx.className='tx';
 var tz=document.createElement('span');tz.className='l-zh';var te=document.createElement('span');te.className='l-en';tx.appendChild(tz);tx.appendChild(te);
 var bars=document.createElement('span');bars.className='bars';
 for(var k=0;k!==3;k++){bars.appendChild(document.createElement('i'));}
 b.appendChild(ic);b.appendChild(tx);b.appendChild(bars);
 set(false);
 function set(on){b.classList.toggle('on',on);tz.textContent=on?'音樂播放中':'放點音樂';te.textContent=on?'Playing':'Music';b.setAttribute('aria-label',on?'暫停音樂':'播放音樂');}
 b.addEventListener('click',function(){
  if(a.paused&&!want){go();}
  else{want=false;a.pause();set(false);}
 });
 var away=false;
 a.addEventListener('pause',function(){if(!away)set(false);});
 document.addEventListener('visibilitychange',function(){
  if(document.hidden){if(!a.paused){away=true;a.pause();}}
  else if(away){away=false;go();}
 });
 var first=true;
 function kick(e){
  if(!first)return; first=false;
  document.removeEventListener('pointerdown',kick,true);
  document.removeEventListener('keydown',kick,true);
  if(e&&e.target&&b.contains(e.target))return;
  if(a.paused){go();}
 }
 document.addEventListener('pointerdown',kick,true);
 document.addEventListener('keydown',kick,true);
 document.body.appendChild(b);
})();
