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
 if(!document.getElementById('eu-me')){
  var ME='https://euddddd.github.io/portfolio/me_';
  var me=document.createElement('div');me.id='eu-me';me.setAttribute('aria-hidden','true');
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
   var r=Math.random();
   if(still){mode='idle';show('front');until=now+99999;return;}
   if(r>0.82){mode='sit';show('sit');me.classList.remove('walking');until=now+7000+Math.random()*6000;return;}
   if(r>0.55){mode='idle';show('front');me.classList.remove('walking');until=now+2500+Math.random()*3500;return;}
   mode='walk';var d=120+Math.random()*Math.max(80,VW()*0.45);
   tx=Math.random()>0.5?x+d:x-d; if(tx>maxX())tx=maxX()-Math.random()*40; if(0>tx)tx=Math.random()*40;
   me.classList.toggle('flip',x>tx);me.classList.add('walking');
  }
  var lines={zh:['嗨～歡迎光臨！','慢慢逛喔～','要不要玩章魚燒？','今天也辛苦了～','我在散步～','AI 聊天真的很好玩！'],en:['Hi, welcome!','Take your time~','Try Takoyaki House?','You did great today~','Just taking a stroll~','AI chat is so much fun!']};
  me.addEventListener('click',function(){
   if(noClick){noClick=false;return;}
   var L=document.documentElement.classList.contains('eu-en')?lines.en:lines.zh;
   say.textContent='';say.classList.remove('heart');var pickI=Math.floor(Math.random()*(L.length+1));if(pickI===L.length){var hh=document.createElement('img');hh.src='https://euddddd.github.io/portfolio/ic_heart.png';hh.alt='♡';say.appendChild(hh);say.classList.add('heart');}else{say.textContent=L[pickI];}say.classList.add('show');
   me.classList.remove('walking');me.classList.remove('flip');show('wave');mode='talk';
   me.classList.remove('hop');void me.offsetWidth;me.classList.add('hop');
   clearTimeout(busy);busy=setTimeout(function(){say.classList.remove('show');me.classList.remove('hop');mode='idle';show('front');until=performance.now()+1500;},2400);
  });
  var lift=0,vy=0,drag=null,noClick=false;
  var holdL={zh:['哇啊啊！','放我下來～','好、好高喔！','咦咦咦？！'],en:['Whoa!','Put me down~','So high!','Eek?!']};
  me.addEventListener('pointerdown',function(e){if(e.button>0)return;var r=me.getBoundingClientRect();drag={sx:e.clientX,sy:e.clientY,ox:e.clientX-r.left,oy:e.clientY-r.top,on:false,id:e.pointerId};});
  window.addEventListener('pointermove',function(e){
   if(!drag||e.pointerId!==drag.id)return;
   if(!drag.on){if(6>Math.abs(e.clientX-drag.sx)+Math.abs(e.clientY-drag.sy))return;drag.on=true;
    try{me.setPointerCapture(e.pointerId);}catch(q){}
    clearTimeout(busy);me.classList.remove('walking');me.classList.remove('flip');me.classList.remove('hop');me.classList.add('held');show('up');mode='held';drag.ox=me.offsetWidth/2;drag.oy=me.offsetHeight*0.06;
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
    var sp=(VW()>600?46:34)*dt, dir=tx>x?1:-1;
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
 var ic=document.createElement('span');ic.className='ic';ic.textContent='♪';
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
