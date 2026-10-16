"use strict";
const SECTIONS=[
{title:"Anul școlar și programul educației timpurii",article:"Art. 9-10",facts:[
"Anul școlar începe la 1 septembrie și se încheie la 31 august din anul calendaristic următor.",
"Educația timpurie: program normal 5 ore/zi; program prelungit 10 ore/zi; programul zilnic al copilului nu poate depăși 10 ore.",
"În vacanțe, activitățile educativ-recreative pentru programul prelungit se pot organiza cu minimum 10 copii înscriși."
]},
{title:"Durata orelor, pauzelor și programul claselor mici",article:"Art. 11",facts:[
"Clasa pregătitoare și clasele I-II: cursurile nu încep înainte de ora 8:00 și nu se termină după ora 14:00.",
"Primar: ora 45 minute, pauză 15 minute, iar după a doua oră pauza este de 20 minute; la pregătitoare și clasa I, predare-învățare-evaluare 30-35 minute.",
"Gimnazial/liceal/postliceal: ora 50 minute, pauză 10 minute, cu posibilă pauză de 15-20 minute după a treia oră; special: 45 minute, pauză 15 minute și 30 minute după a doua oră."
]},
{title:"Vârste în educația timpurie și efective excepționale",article:"Art. 13",facts:[
"Antepreșcolar: grupa mică 3-12 luni; mijlocie 13-24 luni; mare 25-36 luni.",
"Preșcolar: grupa mică 3-4 ani; mijlocie 4-5 ani; mare 5-6 ani.",
"În situații excepționale, formațiunile pot funcționa cu cel mult 2 beneficiari sub minim și cel mult 4 peste maxim."
]},
{title:"Director adjunct - praguri numerice",article:"Art. 24",facts:[
"Directorul poate fi ajutat de 1, 2 sau 3 directori adjuncți.",
"Se poate norma o funcție de director adjunct pentru unități cu peste 30 de formațiuni de studiu.",
"Se poate norma o funcție de director adjunct și pentru unități cu 20-30 de clase care îndeplinesc condițiile prevăzute de regulament, inclusiv existența internatului și cantinei."
]},
{title:"Conducere interimară și raportul directorului",article:"Art. 20-21 și 25",facts:[
"Dacă nu se poate asigura detașarea, delegarea conducerii interimare nu poate depăși 60 de zile calendaristice și nici sfârșitul anului școlar.",
"Eliberarea din funcție a directorului poate fi propusă de 2/3 dintre membrii CA sau de consiliul profesoral cu votul secret a 2/3 dintre membri, în condițiile regulamentului.",
"Raportul anual asupra calității educației se postează în maximum 30 de zile de la începerea anului școlar."
]},
{title:"Consiliul profesoral - cvorum și vot",article:"Art. 54",facts:[
"Cvorumul pentru ședința consiliului profesoral este de 2/3 din numărul total al membrilor cu norma de bază în unitate.",
"Hotărârile se adoptă cu cel puțin jumătate plus unu din numărul total al membrilor consiliului profesoral cu norma de bază în unitate.",
"Procesul-verbal consemnează cvorumul și numărul voturilor pentru, împotrivă și al abținerilor."
]},
{title:"Consiliul clasei - cvorum și vot",article:"Art. 64",facts:[
"Consiliul clasei se întrunește în prezența a cel puțin 2/3 din totalul membrilor.",
"Hotărârile consiliului clasei se adoptă cu votul a jumătate plus unu din totalul membrilor săi.",
"La finalul fiecărei ședințe, toți membrii au obligația de a semna procesul-verbal."
]},
{title:"Comisia pentru formare și dezvoltare în cariera didactică",article:"Art. 72",facts:[
"Comisia pentru formare și dezvoltare în cariera didactică este formată din 3-7 membri, inclusiv responsabilul/coordonatorul.",
"Comisiile cu caracter temporar funcționează doar în anumite perioade ale anului școlar.",
"Responsabilul comisiei pentru curriculum este propus de consiliul profesoral, aprobat de CA și numit prin decizia directorului."
]},
{title:"Motivarea absențelor",article:"Art. 94",facts:[
"Pe baza cererilor scrise ale părintelui/elevului major pot fi motivate cel mult 40 de ore/an, fără a depăși 20% din orele unei discipline.",
"Pentru elevele gravide și elevii părinți: maximum 100 de ore/an, fără a depăși 40% din orele unei discipline.",
"Actele justificative trebuie prezentate în termen de 7 zile calendaristice de la reluarea activității elevului."
]},
{title:"Risc de abandon și abandon școlar",article:"Art. 95 și 122",facts:[
"Risc de abandon școlar: absențe nemotivate la cel puțin 75% din numărul orelor de curs prevăzute într-un an școlar la disciplinele/modulele respective.",
"Abandon școlar: absențele nemotivate au condus la imposibilitatea finalizării a 2 ani școlari succesivi; după 2 ani consecutivi în această situație elevul este radiat din evidențe.",
"În antepreșcolar și preșcolar grupa mică, o absență mai mare de 15 zile lucrătoare consecutive fără justificare poate declanșa notificarea; dacă în 5 zile nu există răspuns scris, copilul este considerat retras."
]},
{title:"Numărul de note și evaluarea curentă",article:"Art. 106-107",facts:[
"Numărul de note/calificative este, de regulă, cu cel puțin 3 mai mare decât numărul de ore săptămânale, dar nu mai mic de 4 note/an la fiecare disciplină.",
"Pentru disciplinele cu mai puțin de o oră/săptămână: minimum 2 note/an; pentru un modul: minimum 2 note, de regulă o notă la 25 de ore.",
"Elevii aflați în situație de corigență au cel puțin o notă în plus; ultima este acordată, de regulă, în ultimele 3 săptămâni ale anului școlar."
]},
{title:"Plan individualizat și frauda la evaluare",article:"Art. 106",facts:[
"Pentru frauda constatată la evaluările scrise se acordă nota 1 sau calificativul Insuficient.",
"Elevul beneficiază pe parcursul unui an școlar de cel puțin 1 plan individualizat de învățare.",
"Portofoliul educațional este utilizat începând cu debutul învățământului obligatoriu și pe tot parcursul învățământului preuniversitar."
]},
{title:"Amânarea și repetenția",article:"Art. 117-119",facts:[
"Elevul poate fi declarat amânat dacă a absentat, motivat și nemotivat, la cel puțin 50% din orele unei discipline/modul și nu are numărul minim de note.",
"Elevul amânat care nu promovează la 1 sau 2 discipline/module în sesiunea de încheiere se poate prezenta la corigențe.",
"Elevii din clasa pregătitoare și clasa I nu pot fi lăsați repetenți."
]},
{title:"Reexaminarea după corigență",article:"Art. 121",facts:[
"Cererea de reexaminare se depune în termen de 24 de ore de la afișarea rezultatelor examenului de corigență.",
"Reexaminarea se desfășoară în termen de 2 zile de la depunerea cererii, fără a depăși începutul noului an școlar.",
"Aprobarea reexaminării se acordă, în cazuri justificate, o singură dată pe an școlar."
]},
{title:"Învățământ obligatoriu și frecvență redusă",article:"Art. 124",facts:[
"Frecventarea învățământului obligatoriu la forma cu frecvență poate înceta la 18 ani.",
"Frecvență redusă: depășirea vârstei clasei cu mai mult de 3 ani în primar, 4 ani în gimnazial și 5 ani în liceal.",
"Persoanele care nu au finalizat învățământul obligatoriu până la 18 ani și au depășit cu peste 3 ani vârsta clasei își pot continua studiile în formele prevăzute de regulament."
]},
{title:"Elevi audienți și echivalarea studiilor",article:"Art. 125",facts:[
"Dosarul pentru echivalare se depune în maximum 30 de zile de la înscrierea ca audient; după primirea atestatului, înscrierea în catalog se face în maximum 15 zile.",
"Inspectorul școlar general emite decizia de constituire a comisiei în 10 zile, iar evaluarea se realizează în cel mult 20 de zile de la emiterea deciziei.",
"Dacă elevul nu promovează ultimul an la 3 sau mai multe discipline/module, poate solicita reexaminarea în 24 de ore; la unele proceduri de echivalare nota minimă de promovare este 5."
]},
{title:"Examene - probe și durate",article:"Art. 131-132",facts:[
"Există 3 tipuri de probe: scrise, orale și practice; de regulă se susțin 2 din cele 3 probe.",
"Proba scrisă durează 45 de minute în primar și 90 de minute în secundar și postliceal.",
"Proba scrisă conține 2 variante de subiecte, iar elevul tratează o singură variantă, la alegere."
]},
{title:"Corigențe - comisie și termene",article:"Art. 131, 134-135",facts:[
"Comisia de corigențe are un președinte și câte 2 cadre didactice examinatoare pentru fiecare comisie pe disciplină.",
"Actele pentru neprezentarea justificată la examen se depun în cel mult 7 zile lucrătoare de la data examenului.",
"Rezultatele examenelor se trec în catalog în maximum 5 zile de la afișare."
]},
{title:"Transferuri - termene administrative",article:"Art. 144-150",facts:[
"Unitățile de învățământ liceal militar pot efectua transferuri la clasa a IX-a în primele 30 de zile de la începerea anului școlar, în condițiile specifice.",
"Unitatea primitoare solicită situația școlară în termen de 5 zile lucrătoare de la aprobarea transferului.",
"Unitatea de origine transmite situația școlară în termen de 10 zile lucrătoare de la primirea solicitării."
]},
{title:"Părinți - adunarea generală și comitetul clasei",article:"Art. 161-162",facts:[
"Adunarea generală poate fi convocată și de 1/3 din numărul total al membrilor; este valabil întrunită cu jumătate plus unu din total.",
"Hotărârile adunării generale se adoptă cu jumătate plus unu din cei prezenți.",
"Comitetul de părinți se alege în primele 15 zile calendaristice de la începerea cursurilor și este format din 3 persoane: 1 președinte și 2 membri."
]},
{title:"Consiliul reprezentativ al părinților",article:"Art. 167",facts:[
"Consiliul reprezentativ al părinților este statutar în prezența a 2/3 din numărul total al membrilor.",
"Dacă nu se întrunește cvorumul, ședința reconvocată este statutară cu jumătate plus 1 din totalul membrilor.",
"Hotărârile se adoptă prin vot deschis, cu majoritatea simplă a celor prezenți."
]},
{title:"Grupele de acomodare",article:"Anexa nr. 2, art. 8-9",facts:[
"Grupa de acomodare are în medie 11 elevi, minimum 8 și maximum 14.",
"Sunt prevăzute 3 categorii de vârstă: 6-10 ani, 11-14 ani și 15-18 ani.",
"Fiecare elev beneficiază de 2 ore/săptămână; dacă a început mai târziu, poate continua și anul următor astfel încât să beneficieze de cel puțin 72 de ore."
]},
{title:"Termene instituționale",article:"Art. 21, 96 și 186",facts:[
"Raportul anual asupra calității educației este publicat în maximum 30 de zile de la începutul anului școlar.",
"În cazul retragerii din învățământ, dovada continuării studiilor trebuie prezentată în cel mult 60 de zile.",
"Regulamentele proprii ale unității trebuiau aprobate în termen de 45 de zile de la intrarea în vigoare a ROFUIP."
]}
];

const app=document.getElementById("app"), search=document.getElementById("search");
let view="theory",qIndex=0,score=0,answered={},flash=0,show=false;
let quizStartedAt=null,quizTimer=null,totalQuizTime=0;
function elapsedTime(){return quizStartedAt===null?totalQuizTime:Math.max(0,performance.now()-quizStartedAt);}
function formatTime(ms){const s=Math.floor(ms/1000);return [Math.floor(s/3600),Math.floor(s/60)%60,s%60].map(n=>String(n).padStart(2,"0")).join(":");}
function updateQuizTime(){const label=document.getElementById("quizElapsed");if(label)label.textContent="Timp scurs: "+formatTime(elapsedTime());}
const ICONS=["Teacher_2.gif","Teacher_4.gif","Strict_teacher.gif","cutieboy.gif","cutiepieg.gif"];
const icon=i=>ICONS[Math.abs(Number(i)||0)%ICONS.length];
const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
function variants(fact){
 const m=fact.match(/\d+(?:[.,]\d+)?/); if(!m)return [fact+" - variantă modificată",fact+" - reper schimbat",fact+" - valoare diferită"];
 const raw=m[0],n=Number(raw.replace(",",".")),c=[];
 const cand=n>=100?[n-10,n+10,n+20]:n>=20?[n-5,n+5,n+10]:n>=10?[n-2,n+2,n+5]:[Math.max(0,n-1),n+1,n+2];
 for(const v of cand){const s=fact.replace(raw,String(v).replace(".",","));if(s!==fact&&!c.includes(s))c.push(s)}
 while(c.length<3)c.push(fact.replace(raw,String(n+c.length+1))); return c.slice(0,3);
}
function prompt(title,fi){
 const t=title.toLowerCase();
 if(fi===0){
  if(t.includes("durata")||t.includes("program"))return "Care dintre următoarele variante prezintă corect durata sau programul prevăzut?";
  if(t.includes("cvorum")||t.includes("consili"))return "Care este pragul numeric corect pentru constituirea sau adoptarea hotărârilor?";
  if(t.includes("absen"))return "Care este limita numerică ce trebuie reținută în această situație?";
  if(t.includes("transfer"))return "Care este termenul corect prevăzut pentru această etapă?";
  return "Care dintre următoarele variante conține reperul numeric corect?";
 }
 if(fi===1)return "În aplicarea acestei prevederi, ce valoare numerică trebuie respectată?";
 return "Care dintre următoarele asocieri numerice este corectă?";
}
const QUESTIONS=[];
SECTIONS.forEach((s,si)=>s.facts.forEach((fact,fi)=>{
 let opts=[fact,...variants(fact)]; const rot=(si+fi)%4;opts=opts.slice(rot).concat(opts.slice(0,rot));
 QUESTIONS.push({section:si,article:s.article,title:s.title,prompt:prompt(s.title,fi),options:opts,correct:opts.indexOf(fact),explanation:fact});
}));
function setView(v){if(v==="quiz")resetQuiz();view=v;document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===v));search.style.display=v==="theory"?"block":"none";render()}
document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>setView(b.dataset.view));
function theory(){
 const term=(search.value||"").toLowerCase().trim();
 const items=SECTIONS.map((s,i)=>({s,i})).filter(({s})=>!term||(`${s.title} ${s.article} ${s.facts.join(" ")}`).toLowerCase().includes(term));
 app.innerHTML=`<div class="stats"><div class="stat"><strong>${SECTIONS.length}</strong>aspecte numerice</div><div class="stat"><strong>${QUESTIONS.length}</strong>itemi</div><div class="stat"><strong>3</strong>itemi/aspect</div></div><div class="grid">${items.map(({s,i})=>`<article class="card"><div class="card-head"><img src="${icon(i)}" alt=""><div><div class="article">${esc(s.article)}</div><h2>${esc(s.title)}</h2></div></div><ol class="facts">${s.facts.map(f=>`<li>${esc(f)}</li>`).join("")}</ol></article>`).join("")}</div>`;
}
search.oninput=()=>view==="theory"&&theory();
function quiz(){
 const q=QUESTIONS[qIndex],sec=SECTIONS[q.section],done=answered[qIndex];
 app.innerHTML=`<div class="quiz-wrap"><div class="stats"><div class="stat"><strong>${qIndex+1}/${QUESTIONS.length}</strong>item</div><div class="stat"><strong>${score}</strong>corecte</div><div class="stat"><strong>${QUESTIONS.length}</strong>repere numerice</div></div><div class="progress"><span style="width:${((qIndex+1)/QUESTIONS.length)*100}%"></span></div><div class="question"><div class="q-top"><img src="${icon(q.section)}" alt=""><div><div class="question-topic">${esc(q.title||sec.title)}</div><h2>${esc(q.prompt)}</h2></div></div>${q.options.map((o,i)=>`<button class="option ${done!==undefined?(i===q.correct?"correct":(i===done&&done!==q.correct?"wrong":"")):""}" data-opt="${i}" ${done!==undefined?"disabled":""}>${"ABCD"[i]}. ${esc(o)}</button>`).join("")}<div id="fb">${done!==undefined?`<div class="feedback"><strong>${done===q.correct?"Corect.":"Răspuns corect:"}</strong><br>${esc(q.explanation)}<div class="article-source">Sursa: ${esc(q.article)}</div></div>`:""}</div><div class="navq"><button data-prev ${qIndex===0?"disabled":""}>← Înapoi</button><button data-next>${qIndex===QUESTIONS.length-1?"Final":"Următorul →"}</button></div></div></div>`;
  const restart=document.createElement("button");
  restart.type="button";
  restart.className="reset";
  restart.textContent="Reia de la început";
  restart.onclick=()=>{resetQuiz();quiz();};
  app.querySelector(".navq").appendChild(restart);
  const timer=document.createElement("p");
  timer.id="quizElapsed";
  timer.className="quiz-time";
  app.querySelector(".quiz-wrap").prepend(timer);
  updateQuizTime();
 document.querySelectorAll("[data-opt]").forEach(b=>b.onclick=()=>answer(Number(b.dataset.opt)));
 document.querySelector("[data-prev]").onclick=()=>{if(qIndex>0){qIndex--;quiz()}};
 document.querySelector("[data-next]").onclick=()=>{if(qIndex<QUESTIONS.length-1){qIndex++;quiz()}else finish()};
}
function answer(i){if(answered[qIndex]!==undefined)return;answered[qIndex]=i;if(i===QUESTIONS[qIndex].correct)score++;quiz()}
function resetQuiz(){
  answered={};score=0;qIndex=0;totalQuizTime=0;
  quizStartedAt=performance.now();
  clearInterval(quizTimer);
  quizTimer=setInterval(updateQuizTime,1000);
}
function finish(){
  totalQuizTime=elapsedTime();quizStartedAt=null;clearInterval(quizTimer);quizTimer=null;
  const pct=Math.round(score/QUESTIONS.length*100);
  app.innerHTML=`<div class="flash"><img src="${icon(pct)}" alt=""><h2>Rezultat</h2><div class="big-number">${score}/${QUESTIONS.length} · ${pct}%</div><p class="quiz-time"><strong>Timp total: ${formatTime(totalQuizTime)}</strong></p><p>Explicația corectă a fost afișată după fiecare răspuns.</p><button class="reset" id="reset">Reia de la început</button></div>`;
  document.getElementById("reset").onclick=()=>{resetQuiz();quiz();};
}
function review(){const s=SECTIONS[flash];app.innerHTML=`<div class="flash"><img src="${icon(flash)}" alt=""><div class="article">${esc(s.article)}</div><h2>${esc(s.title)}</h2>${show?`<ol class="facts">${s.facts.map(f=>`<li>${esc(f)}</li>`).join("")}</ol>`:`<p>Spune din memorie cifrele, apoi verifică.</p>`}<button id="flip">${show?"Ascunde":"Arată cifrele"}</button><button id="prevF">←</button><button id="nextF">→</button><div>${flash+1}/${SECTIONS.length}</div></div>`;document.getElementById("flip").onclick=()=>{show=!show;review()};document.getElementById("prevF").onclick=()=>{flash=(flash-1+SECTIONS.length)%SECTIONS.length;show=false;review()};document.getElementById("nextF").onclick=()=>{flash=(flash+1)%SECTIONS.length;show=false;review()}}
function render(){if(view==="theory")theory();else if(view==="quiz")quiz();else review()}
try{localStorage.removeItem("rofuip-cifre-progress");}catch(e){}
render();


// Lectură continuă în română, independentă de teste și de căutare.
(() => {
  const panel = document.createElement('section');
  panel.className = 'audio-player';
  panel.setAttribute('aria-label', 'Player audio în limba română');
  panel.innerHTML = `<h2>Ascultă materialul în limba română</h2>
    <p>Lectură integrală, cu trecere automată la tema următoare.</p>
    <div class="audio-controls"><button type="button" id="audioPlay">▶ Redare</button><button type="button" id="audioPause" disabled>⏸ Pauză</button><button type="button" id="audioRestart">↺ De la început</button></div>
    <div class="audio-settings"><label>Tema <select id="audioTopic"></select></label><label>Viteză <select id="audioRate"><option value="0.8">0,8×</option><option value="1" selected>1×</option><option value="1.15">1,15×</option><option value="1.3">1,3×</option></select></label><label>Voce în română <select id="audioVoice"></select></label></div>
    <p id="audioStatus" role="status" aria-live="polite">Pregătit pentru redare.</p><progress id="audioProgress" value="0" max="1" aria-label="Progresul lecturii"></progress><p id="audioText" class="audio-text"></p>`;
  document.querySelector('main').prepend(panel);
  const style = document.createElement('style');
  style.textContent = `.audio-player{margin:20px;padding:20px;background:#fff;border:1px solid #d8c8e5;border-radius:20px}.audio-player h2{margin:0;font-size:1.25rem;color:#5e337a}.audio-player p{margin:8px 0}.audio-controls,.audio-settings{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}.audio-controls button{padding:11px 16px;border:0;border-radius:10px;background:#6a3b7d;color:#fff;font:inherit;font-weight:700;cursor:pointer}.audio-controls button:disabled{opacity:.45;cursor:default}.audio-settings label{display:flex;gap:6px;align-items:center;flex-wrap:wrap}.audio-settings select{padding:8px;border:1px solid #d8c8e5;border-radius:8px;max-width:100%;font:inherit}.audio-settings label:first-child{flex:1 1 100%}.audio-settings label:first-child select{flex:1;min-width:0}.audio-player progress{width:100%;height:12px;accent-color:#6a3b7d}.audio-text{padding:12px;background:#f5eff9;border-radius:10px;min-height:48px}.audio-player button:focus-visible,.audio-player select:focus-visible{outline:3px solid #e8b72c;outline-offset:3px}@media(max-width:650px){.audio-player{margin:12px;padding:15px}.audio-settings label{width:100%}}`;
  document.head.append(style);
  const el = id => document.getElementById(id);
  const play = el('audioPlay'), pause = el('audioPause'), restart = el('audioRestart');
  const topic = el('audioTopic'), rate = el('audioRate'), voiceSelect = el('audioVoice');
  const status = el('audioStatus'), progress = el('audioProgress'), text = el('audioText');
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    status.textContent = 'Acest browser nu permite lectura audio. Deschide pagina într-un browser care acceptă sinteza vocală.';
    [play,pause,restart,topic,rate,voiceSelect].forEach(e => e.disabled = true);
    return;
  }
  const synth = window.speechSynthesis, parts = [], starts = [];
  // Expand only the spoken copy; the study text stays unchanged.
  function spoken(value) {
    return value.replace(/\bArt\./gi,'Articolul').replace(/\bart\./g,'articolul').replace(/\balin\./g,'alineatul')
      .replace(/\b2\/3\b/g,'două treimi').replace(/\b1\/3\b/g,'o treime')
      .replace(/(\d)[–-](\d)/g,'$1 până la $2').replace(/%/g,' la sută')
      .replace(/\bCA\b/g,'consiliul de administrație').replace(/\bCES\b/g,'cerințe educaționale speciale')
      .replace(/ore\/zi/g,'ore pe zi').replace(/ore\/săptămână/g,'ore pe săptămână').replace(/note\/an/g,'note pe an');
  }
  function add(value, section) {
    // Short utterances avoid long-text cutoffs in browser speech engines.
    const words = spoken(value).split(/\s+/); let chunk = '';
    for (const word of words) { if (chunk.length + word.length > 190 && chunk) { parts.push({text:chunk,section});chunk=''; } chunk += (chunk?' ':'')+word; }
    if (chunk) parts.push({text:chunk,section});
  }
  SECTIONS.forEach((s,i) => {
    starts.push(parts.length);
    const option = document.createElement('option');option.value=i;option.textContent=`${i+1}. ${s.title}`;topic.append(option);
    add(`Tema ${i+1}. ${s.title}. ${s.article}.`, i);
    s.facts.forEach(f => add(f, i));
  });
  let voices = [], index = 0, active = false, token = 0, utterance = null;
  progress.max = parts.length;
  function loadVoices() {
    const selected=voiceSelect.value;
    voices=synth.getVoices().filter(v=>/^ro(?:[-_]|$)/i.test(v.lang));
    voiceSelect.replaceChildren();
    const fallback=document.createElement('option');fallback.value='';fallback.textContent=voices.length?'Voce română automată':'Română — vocea disponibilă în browser';voiceSelect.append(fallback);
    voices.forEach(v=>{const o=document.createElement('option');o.value=v.voiceURI;o.textContent=v.name;voiceSelect.append(o);});
    if(voices.some(v=>v.voiceURI===selected))voiceSelect.value=selected;
  }
  loadVoices();synth.addEventListener('voiceschanged',loadVoices);
  function buttons(){play.disabled=active;pause.disabled=!active;play.textContent=index>0&&index<parts.length?'▶ Continuă':'▶ Redare';}
  function cancel(){token++;active=false;synth.cancel();utterance=null;buttons();}
  function read(){
    if(!active)return;
    if(index>=parts.length){active=false;progress.value=parts.length;status.textContent='Lectură încheiată. Poți relua materialul de la început.';buttons();return;}
    const part=parts[index], current=token;
    topic.value=part.section;text.textContent=part.text;progress.value=index;
    status.textContent=`Se citește tema ${part.section+1} din ${SECTIONS.length}: ${SECTIONS[part.section].title}`;
    utterance=new SpeechSynthesisUtterance(part.text);utterance.lang='ro-RO';utterance.rate=Number(rate.value);utterance.volume=1;
    const voice=voices.find(v=>v.voiceURI===voiceSelect.value)||voices[0];if(voice)utterance.voice=voice;
    utterance.onend=()=>{if(current!==token||!active)return;index++;read();};
    utterance.onerror=event=>{if(current!==token||!active)return;active=false;buttons();status.textContent='Redarea s-a oprit. Apasă Continuă pentru a reîncerca. Verifică dacă dispozitivul are o voce în limba română.';};
    synth.speak(utterance);buttons();
  }
  function start(){if(index>=parts.length)index=0;cancel();active=true;read();}
  play.onclick=start;
  pause.onclick=()=>{cancel();status.textContent='Pauză. Continuă reia fraza curentă.';};
  restart.onclick=()=>{cancel();index=0;progress.value=0;start();};
  topic.onchange=()=>{const was=active;cancel();index=starts[Number(topic.value)];progress.value=index;text.textContent=parts[index].text;status.textContent='Tema selectată. Apasă Redare pentru a asculta.';if(was)start();};
  [rate,voiceSelect].forEach(control=>control.onchange=()=>{if(active)start();});
  window.addEventListener('pagehide',cancel);
})();
