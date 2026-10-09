const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],pick=a=>a[Math.random()*a.length|0];
const PAL=['#2ee6c8','#e9c46a','#ff7a90','#8ab4ff','#c792ea','#7ee787'];
const N=['Aziza','Jasur','Dilnoza','Bobur','Madina','Sardor','Nilufar','Otabek','Zarina','Sherzod'],S=['Karimov','Yusupov','Rahimova','Tursunov','Aliyeva','Ergashev'];
const D7=['Du','Se','Cho','Pa','Ju','Sha','Ya'];
// k:[nomi,qiymat,belgi,o'zgarish%]  r:[1-ustun,2-ustun,holat indeksi]  p:1 => odam ismi qo'shiladi
const M=[
{n:'Admin Markazi',i:'🛡️',c:'#2ee6c8',k:[['Foydalanuvchilar',12480,'',5],['Faol sessiyalar',842,'',12],['Server yuklamasi',47,'%',-3],['Ogohlantirishlar',3,'',-40]],ct:'Kunlik kirishlar',t:'line',l:D7,d:[420,560,610,580,740,520,390],tt:'Foydalanuvchilar',h:['Ism','Rol','Holat'],s:['Faol','Kutilmoqda','Bloklangan'],p:1,r:[['Aziza Karimova','Admin',0],['Jasur Yusupov','Moderator',0],['Bobur Tursunov','Muharrir',1],['Madina Aliyeva','Tahlilchi',0],['Sardor Ergashev','Mehmon',2]]},
{n:'Maktab Paneli',i:'🏫',c:'#8ab4ff',k:[['O‘quvchilar',1240,'',2],['Davomat',96,'%',1],['O‘qituvchilar',68,'',0],['O‘rtacha baho',4,'.3',3]],ct:'Sinflar bo‘yicha o‘rtacha ball',t:'bar',l:['5-A','6-B','7-A','8-C','9-A','10-B','11-A'],d:[78,84,81,88,76,91,86],tt:'Bugungi davomat',h:['O‘quvchi','Sinf','Holat'],s:['Keldi','Kechikdi','Kelmadi'],p:1,r:[['Dilnoza Rahimova','7-A',0],['Otabek Karimov','9-A',1],['Zarina Aliyeva','5-A',0],['Sherzod Tursunov','11-A',2],['Nilufar Yusupova','8-C',0]]},
{n:'Shifoxona',i:'🏥',c:'#ff7a90',k:[['Band yotoqlar',214,'/260',4],['Bugungi bemorlar',138,'',9],['Shoshilinch',7,'',-12],['Shifokorlar',42,'',0]],ct:'Bo‘limlar bo‘yicha bemorlar',t:'donut',l:['Terapiya','Jarrohlik','Kardiologiya','Pediatriya','Nevrologiya'],d:[46,28,22,31,11],tt:'Bemorlar',h:['Bemor','Bo‘lim','Holat'],s:['Qabulda','Davolanmoqda','Chiqarildi'],p:1,r:[['Zarina Aliyeva','Kardiologiya',1],['Bobur Karimov','Jarrohlik',0],['Madina Yusupova','Pediatriya',1],['Jasur Ergashev','Nevrologiya',2],['Aziza Tursunova','Terapiya',0]]},
{n:'Mehmonxona',i:'🏨',c:'#e9c46a',k:[['Band xonalar',82,'%',6],['Bugungi check-in',24,'',11],['Daromad',18400,' $',8],['Reyting',4,'.8',1]],ct:'Haftalik bandlik (%)',t:'line',l:D7,d:[64,70,78,82,91,96,88],tt:'Xonalar',h:['Xona','Mehmon','Holat'],s:['Band','Bo‘sh','Tozalanmoqda'],r:[['#101','J. Smith',0],['#102','—',1],['#205','A. Karimova',0],['#207','—',2],['#310','M. Rossi',0]]},
{n:'Restoran',i:'🍽️',c:'#ff9f45',k:[['Buyurtmalar',164,'',7],['Band stollar',18,'/24',3],['Kunlik tushum',12600,'k so‘m',9],['O‘rtacha chek',76,'k',2]],ct:'Soatlar bo‘yicha buyurtmalar',t:'bar',l:['10','12','14','16','18','20','22'],d:[12,38,52,24,41,66,35],tt:'Stollar',h:['Stol','Buyurtma','Holat'],s:['Tayyorlanmoqda','Tayyor','Xizmat qilindi'],r:[['Stol 3','Palov ×2, Choy',0],['Stol 7','Lag‘mon, Salat',1],['Stol 1','Shashlik ×4',0],['Stol 12','Somsa ×6',2],['Stol 9','Manti ×3',1]]},
{n:'Xodimlar',i:'👥',c:'#c792ea',k:[['Jami xodimlar',312,'',1],['Bugun ishda',287,'',2],['Ta’tilda',18,'',-5],['Ish haqi fondi',1200,' mln',3]],ct:'Bo‘limlar bo‘yicha xodimlar',t:'donut',l:['IT','Savdo','Moliya','HR','Ishlab chiqarish'],d:[54,82,36,18,122],tt:'Xodimlar',h:['Xodim','Lavozim','Holat'],s:['Ishda','Ta’tilda','Kasal'],p:1,r:[['Sardor Yusupov','Dasturchi',0],['Nilufar Karimova','Buxgalter',1],['Otabek Aliyev','Menejer',0],['Dilnoza Ergasheva','HR',2],['Jasur Tursunov','Dizayner',0]]},
{n:'Savdo Paneli',i:'💰',c:'#7ee787',k:[['Savdo',84200,'k so‘m',14],['Buyurtmalar',1893,'',8],['Konversiya',3,'.8%',2],['Qaytarilgan',12,'',-9]],ct:'Oylik savdo (mln so‘m)',t:'line',l:['Yan','Fev','Mar','Apr','May','Iyn','Iyl'],d:[42,48,45,61,70,66,84],tt:'Buyurtmalar',h:['Buyurtma','Mijoz','Holat'],s:['Yangi','Yo‘lda','Yetkazildi'],p:1,r:[['#A-2041','Madina Aliyeva',0],['#A-2040','Bobur Karimov',1],['#A-2039','Zarina Yusupova',2],['#A-2038','Jasur Ergashev',1],['#A-2037','Aziza Rahimova',2]]},
{n:'Analitika',i:'📊',c:'#4dd0e1',k:[['Tashrif',245000,'',18],['Bounce rate',38,'%',-4],['O‘rtacha vaqt',3,':42',6],['Konversiya',4,'.1%',5]],ct:'Trafik (so‘nggi 7 kun)',t:'line',l:D7,d:[31,36,34,42,48,39,45],tt:'Trafik manbalari',h:['Manba','Tashrif','Trend'],s:['O‘sish','Barqaror','Pasayish'],r:[['Google','96 400',0],['Telegram','58 200',0],['Instagram','41 900',1],['To‘g‘ridan','32 700',1],['Facebook','15 800',2]]},
{n:'Vazifalar',i:'✅',c:'#ffd166',k:[['Jami vazifa',48,'',4],['Jarayonda',15,'',0],['Tugallangan',27,'',12],['Muddati o‘tgan',3,'',-20]],ct:'Vazifalar taqsimoti',t:'donut',l:['Tugallangan','Jarayonda','Kutilmoqda'],d:[27,15,6],tt:'Vazifalar (bosing — holat o‘zgaradi)',h:['Vazifa','Mas’ul','Holat'],s:['Kutilmoqda','Jarayonda','Tugadi'],r:[['Login sahifasi','Sardor',2],['API ulash','Jasur',1],['Dizayn tasdiq','Dilnoza',1],['Test yozish','Otabek',0],['Hosting sozlash','Bobur',0]]},
{n:'Aqlli Shahar',i:'🏙️',c:'#5eead4',live:1,k:[['Havo sifati (AQI)',54,'',-6],['Tirbandlik',42,'%',3],['Elektr (MW)',318,'',1],['Yoritilgan chiroqlar',98,'%',0]],ct:'Elektr iste’moli — jonli (MW)',t:'line',l:['','','','','','','','','',''],d:[300,305,312,308,315,322,318,311,316,318],tt:'Tuman sensorlari',h:['Tuman','Sensor','Holat'],s:['Normal','Ogohlantirish','Xavf'],r:[['Chilonzor','Havo',0],['Yunusobod','Trafik',1],['Mirzo Ulug‘bek','Elektr',0],['Sergeli','Shovqin',0],['Yakkasaroy','Suv',2]]}
];
let on=1,AC,cur=0,q='';
function beep(f,d=.1,t='sine',v=.08){if(!on)return;AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain(),n=AC.currentTime;o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,n);g.gain.exponentialRampToValueAtTime(.001,n+d);o.connect(g);g.connect(AC.destination);o.start();o.stop(n+d)}
const chime=(b,m=[1,1.25,1.5,2])=>m.forEach((x,i)=>setTimeout(()=>beep(b*x,.16,'triangle'),i*80));
const fmt=v=>v.toLocaleString('ru');
function toast(s){const t=$('#t');t.textContent=s;t.classList.add('on');clearTimeout(t.h);t.h=setTimeout(()=>t.classList.remove('on'),1400)}
function rows(m){return m.r.map((r,i)=>[r,i]).filter(([r])=>(r[0]+r[1]+m.s[r[2]]).toLowerCase().includes(q)).map(([r,i])=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td><button class="s s${r[2]}" data-r="${i}">${m.s[r[2]]}</button></td></tr>`).join('')||'<tr><td colspan=3>Hech narsa topilmadi</td></tr>'}
function count(){$$('.k b').forEach(b=>{const v=+b.dataset.v,s=b.dataset.s,t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/900);b.textContent=fmt(Math.round(v*(1-Math.pow(1-p,3))))+s;if(p<1)requestAnimationFrame(f)})(t0)})}
function show(i){
  cur=i;q='';$('#q').value='';const m=M[i];document.documentElement.style.setProperty('--c',m.c);$('#ttl').textContent=m.i+' '+m.n;
  $$('#nav button').forEach((b,j)=>b.classList.toggle('on',j==i));
  const lg=m.t=='donut'?`<div class=lg>${m.l.map((l,j)=>`<span><i style="background:${PAL[j%6]}"></i>${l} ${m.d[j]}</span>`).join('')}</div>`:'';
  $('#v').innerHTML=`<div class=k>${m.k.map(k=>`<div class=card><small>${k[0]}</small><b data-v="${k[1]}" data-s="${k[2]}">0</b><i class="${k[3]<0?'dn':'up'}">${k[3]<0?'▼':'▲'} ${Math.abs(k[3])}%</i></div>`).join('')}</div>
  <div class=g><div class=card><h3>${m.ct}</h3><canvas id=cv></canvas>${lg}</div>
  <div class="card tb"><h3>${m.tt}</h3><table><tr>${m.h.map(h=>`<th>${h}</th>`).join('')}</tr><tbody id=tb>${rows(m)}</tbody></table></div></div>`;
  count();let t0;(function f(t){t0=t0||t;const p=Math.min(1,(t-t0)/800);chart(m,1-Math.pow(1-p,3));if(p<1)requestAnimationFrame(f)})(performance.now());
  chime(300+i*32);
}
function chart(m,p){
  const cv=$('#cv');if(!cv)return;const r=devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;cv.width=w*r;cv.height=h*r;
  const x=cv.getContext('2d');x.scale(r,r);const D=m.d,n=D.length;x.textAlign='center';
  if(m.t=='donut'){const R=Math.min(w,h)/2-18,s=D.reduce((a,b)=>a+b);let a=-Math.PI/2;x.lineWidth=R*.34;
    D.forEach((v,i)=>{const e=v/s*6.283*p;x.beginPath();x.arc(w/2,h/2,R*.82,a,a+Math.max(0,e-.04));x.strokeStyle=PAL[i%6];x.stroke();a+=e});
    x.fillStyle='#fff';x.font='700 26px Georgia';x.fillText(s,w/2,h/2+9);return}
  const mx=Math.max(...D)*1.15,Y=v=>h-26-(v/mx)*(h-46)*p;
  x.strokeStyle='#ffffff14';x.lineWidth=1;for(let i=0;i<5;i++){const y=14+i*(h-40)/4;x.beginPath();x.moveTo(0,y);x.lineTo(w,y);x.stroke()}
  x.fillStyle='#8a94b8';x.font='11px system-ui';
  if(m.t=='bar'){const bx=w/n,bw=bx*.55;D.forEach((v,i)=>{const x0=i*bx+(bx-bw)/2,g=x.createLinearGradient(0,Y(v),0,h);g.addColorStop(0,m.c);g.addColorStop(1,m.c+'22');x.fillStyle=g;x.fillRect(x0,Y(v),bw,h-26-Y(v));x.fillStyle='#8a94b8';x.fillText(m.l[i],x0+bw/2,h-8)});return}
  const X=i=>14+i*(w-28)/(n-1);x.beginPath();D.forEach((v,i)=>i?x.lineTo(X(i),Y(v)):x.moveTo(X(i),Y(v)));
  x.strokeStyle=m.c;x.lineWidth=3;x.lineJoin='round';x.stroke();x.lineTo(X(n-1),h-26);x.lineTo(X(0),h-26);
  const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,m.c+'66');g.addColorStop(1,m.c+'00');x.fillStyle=g;x.fill();
  D.forEach((v,i)=>{x.beginPath();x.arc(X(i),Y(v),4,0,6.283);x.fillStyle='#fff';x.fill();x.fillStyle='#8a94b8';x.fillText(m.l[i],X(i),h-8)});
}
// --- Hodisalar ---
$('#nav').innerHTML=M.map(m=>`<button title="${m.n}">${m.i}</button>`).join('');
$('#nav').onclick=e=>{const b=e.target.closest('button');if(b)show($$('#nav button').indexOf(b))};
$('#nav').onpointerover=e=>e.target.closest('button')&&beep(760,.04,'sine',.025);
$('#v').onclick=e=>{const b=e.target.closest('.s');if(!b)return;const m=M[cur],r=m.r[b.dataset.r];r[2]=(r[2]+1)%3;beep(320+r[2]*180,.14,'square',.05);$('#tb').innerHTML=rows(m);toast('✓ '+r[0]+' → '+m.s[r[2]])};
$('#add').onclick=()=>{const m=M[cur];m.r.unshift([m.p?pick(N)+' '+pick(S):'#'+(100+Math.random()*899|0),pick(m.r)[1],0]);$('#tb').innerHTML=rows(m);chime(520,[1,1.5,2]);toast('＋ Yangi yozuv qo‘shildi')};
$('#q').oninput=e=>{q=e.target.value.toLowerCase();$('#tb').innerHTML=rows(M[cur]);beep(900,.03,'sine',.03)};
$('#snd').onclick=()=>{on=!on;$('#snd').textContent=on?'🔊':'🔇';if(on)beep(600)};
$('#go').onclick=()=>{$('#splash').classList.add('x');chime(392,[1,1.26,1.5,2,2.52])};
addEventListener('resize',()=>chart(M[cur],1));
// Aqlli shahar — jonli ma'lumot
setInterval(()=>{const m=M[cur];if(!m.live)return;m.k.forEach(k=>k[1]=Math.max(1,k[1]+Math.round(Math.random()*6-3)));m.d=[...m.d.slice(1),Math.max(250,m.d.at(-1)+Math.round(Math.random()*16-8))];$$('.k b').forEach((b,j)=>b.textContent=fmt(m.k[j][1])+m.k[j][2]);chart(m,1)},2000);
const tick=()=>$('#clock').textContent=new Date().toLocaleString('uz',{weekday:'long',day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'});
setInterval(tick,3e4);tick();show(0);