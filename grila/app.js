"use strict";
(()=>{
const DATA=window.LEGE_CONTROL;const main=document.getElementById('main');let view='control';
const esc=v=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
function nav(){}
function stop(){}
function openArticle(n){const a=DATA.articles.find(a=>a.article===String(n));if(!a)return;const dialog=document.getElementById('sourceDialog');document.getElementById('sourceTitle').textContent='ROFUIP · Articolul '+a.article;document.getElementById('sourceBody').innerHTML=a.legalText.split('\n').map(p=>'<p>'+esc(p)+'</p>').join('');dialog.showModal();}
  const BANK = window.LEGE_CONTROL.items;
  let session = null, sessionTick = null;
  const inlineChoices = new Map(), inlineShown = new Set();
  const quizFor = a => BANK.filter(q => q.article === a.article || (a.article === '251' && q.article === 'Anexă'));
  const timeText = seconds => {
    const s = Math.max(0, Math.floor(seconds));
    return [Math.floor(s/3600), Math.floor(s/60)%60, s%60].map(n=>String(n).padStart(2,'0')).join(':');
  };
  const questionText = q => esc(q.prompt).replaceAll('\n','<br>');
  const answerText = q => q.options[q.answer];
  function feedbackHTML(q,chosen){
    const good=chosen===q.answer;
    return `<div class="answer-feedback ${good?'success':'retry'}"><strong>${chosen===undefined?'Fără răspuns.':good?'Corect.':'Răspuns greșit.'} Răspunsul corect: ${'abcd'[q.answer]}) ${esc(answerText(q))}</strong><p>${esc(q.source)}</p>${q.context?`<p class="source-context">${esc(q.context)}</p>`:""}<blockquote>${esc(q.quote)}</blockquote></div>`;
  }
  function quizHTML(a){
    const questions=quizFor(a);
    return `<details class="article-quiz"><summary>Grilă de control · ${questions.length} ${questions.length===1?'item':'itemi'}</summary><p>Alege răspunsul, apoi verifică atunci când dorești. Poți corecta toți itemii articolului la final.</p><div class="quiz-list">${questions.map(q=>{
      const chosen=inlineChoices.get(q.id),shown=inlineShown.has(q.id);
      return `<fieldset class="quiz-item" data-inline="${esc(q.id)}"><legend>${questionText(q)}</legend>${q.options.map((o,i)=>`<button type="button" class="answer-option ${chosen===i?'selected':''} ${shown&&i===q.answer?'correct':''} ${shown&&chosen===i&&i!==q.answer?'wrong':''}" data-inline-choice="${i}" aria-pressed="${chosen===i}" ${shown?'disabled':''}><span>${'abcd'[i]})</span> ${esc(o)}</button>`).join('')}<button type="button" class="secondary" data-inline-check="${esc(q.id)}" ${chosen===undefined||shown?'disabled':''}>Verifică răspunsul</button><div data-inline-feedback>${shown?feedbackHTML(q,chosen):''}</div></fieldset>`;
    }).join('')}</div><div class="audio-actions"><button type="button" class="primary" data-inline-finish="${a.article}">Corectează articolul</button><button type="button" class="secondary" data-inline-reset="${a.article}">Reia itemii articolului</button><button type="button" class="secondary" data-control-open>Deschide seriile de 60 de minute</button></div></details>`;
  }
  function bindInline(){
    document.querySelectorAll('[data-inline]').forEach(item=>{
      const q=BANK.find(x=>x.id===item.dataset.inline);
      item.querySelectorAll('[data-inline-choice]').forEach(button=>button.onclick=()=>{
        if(inlineShown.has(q.id))return;
        const chosen=Number(button.dataset.inlineChoice);inlineChoices.set(q.id,chosen);
        item.querySelectorAll('[data-inline-choice]').forEach(b=>{const yes=Number(b.dataset.inlineChoice)===chosen;b.classList.toggle('selected',yes);b.setAttribute('aria-pressed',String(yes));});
        item.querySelector('[data-inline-check]').disabled=false;
      });
      item.querySelector('[data-inline-check]').onclick=()=>{
        if(!inlineChoices.has(q.id))return;
        inlineShown.add(q.id);showInline(item,q);
      };
    });
    function showInline(item,q){
      const chosen=inlineChoices.get(q.id);
      item.querySelectorAll('[data-inline-choice]').forEach(b=>{const n=Number(b.dataset.inlineChoice);b.disabled=true;b.classList.toggle('correct',n===q.answer);b.classList.toggle('wrong',chosen===n&&n!==q.answer);});
      item.querySelector('[data-inline-feedback]').innerHTML=feedbackHTML(q,chosen);
      item.querySelector('[data-inline-check]').disabled=true;
    }
    document.querySelectorAll('[data-inline-finish]').forEach(button=>button.onclick=()=>{
      const a=DATA.articles.find(x=>x.article===button.dataset.inlineFinish);
      quizFor(a).forEach(q=>{inlineShown.add(q.id);const item=document.querySelector(`[data-inline="${q.id}"]`);if(item)showInline(item,q);});
    });
    document.querySelectorAll('[data-inline-reset]').forEach(button=>button.onclick=()=>{
      const a=DATA.articles.find(x=>x.article===button.dataset.inlineReset);
      quizFor(a).forEach(q=>{inlineChoices.delete(q.id);inlineShown.delete(q.id);});
      const box=button.closest('.article-quiz');const holder=document.createElement('div');holder.innerHTML=quizHTML(a);holder.firstElementChild.open=true;box.replaceWith(holder.firstElementChild);bindInline();
    });
    document.querySelectorAll('[data-control-open]').forEach(b=>b.onclick=()=>controlView());
  }
  function scopeItems(scope){
    if(scope==='all')return BANK;
    const m=DATA.modules.find(m=>m.id===Number(scope));
    return BANK.filter(q=>q.articleNumber>=m.startArticle&&q.articleNumber<=m.endArticle);
  }
  function seriesFor(scope='all',size=30){
    const pool=scopeItems(scope),chunks=[];
    for(let i=0;i<pool.length;i+=size)chunks.push(pool.slice(i,i+size));
    return chunks;
  }
  function clearSessionTimer(){clearInterval(sessionTick);sessionTick=null;}
  function elapsedSession(){return session?Math.min(3600000,(session.endedAt??performance.now())-session.startedAt):0;}
  function syncSessionClock(){
    if(!session||session.finished)return;
    const elapsed=elapsedSession(),label=document.getElementById('controlRemaining');
    if(label)label.textContent=timeText((3600000-elapsed)/1000);
    if(elapsed>=3600000)finishSession(true);
  }
  function startSession(items,mode='final',settings={}){
    clearSessionTimer();session={items:[...items],answers:{},shown:new Set(),index:0,mode,settings,startedAt:performance.now(),endedAt:null,finished:false,timedOut:false};
    sessionTick=setInterval(syncSessionClock,500);renderSession();window.scrollTo?.({top:0});
  }
  function controlView(){
    view='control';stop();nav();
    if(session){if(session.finished)renderResults();else renderSession();return;}
    renderSetup();window.scrollTo?.({top:0});
  }
  function renderSetup(){
    view='control';stop();nav();
    main.innerHTML=`<section class="page-head"><p class="eyebrow">ÎNVĂȚARE ȘI AUTOVERIFICARE</p><h1>Grilă de control</h1><p class="lead">${BANK.length} de întrebări scurte · toate cele 186 de articole ROFUIP.</p><p>Câte un item pentru fiecare grup de maximum 8 puncte dintr-un articol. Alineatele și punctele enumerărilor sunt grupate în ordinea materialului. Notele de modificare și titlurile nu sunt itemi.</p></section>
    <section class="control-setup"><h2>Alege cum lucrezi</h2><div class="control-fields"><label>Domeniul<select id="controlScope"><option value="all">Tot ROFUIP</option>${DATA.modules.map(m=>`<option value="${m.id}">${m.id}. ${esc(m.title)} · ${esc(m.articles)}</option>`).join('')}</select></label><label>Dimensiunea seriei<select id="controlSize"><option value="30">30 de itemi · 60 de minute</option><option value="20">20 de itemi · 60 de minute</option><option value="all">Grila completă din domeniul ales · 60 de minute</option></select></label><label>Seria<select id="controlSeries"></select></label></div>
    <fieldset class="control-mode"><legend>Când vrei să vezi răspunsurile corecte?</legend><label><input type="radio" name="controlMode" value="final" checked> La final</label><label><input type="radio" name="controlMode" value="immediate"> După fiecare răspuns</label></fieldset>
    <p>Și în modul „La final” poți apăsa <strong>Verifică acest răspuns</strong> la un item asupra căruia ai dubii. Itemul verificat se blochează pentru această parcurgere.</p><p id="controlSeriesInfo"></p><button type="button" id="controlStart" class="primary">Începe seria</button><p class="source-note">Formulările corecte sunt extrase din materialul integral al platformei: ${esc(DATA.sourceVersion)}. Seriile parcurse în ordine acoperă întreaga bancă. Răspunsurile nu sunt salvate după închiderea sau reîncărcarea paginii.</p></section>`;
    const scope=document.getElementById('controlScope'),size=document.getElementById('controlSize'),series=document.getElementById('controlSeries');
    function update(){
      const n=size.value==='all'?scopeItems(scope.value).length:Number(size.value),groups=seriesFor(scope.value,n||1);
      series.innerHTML=groups.map((group,i)=>`<option value="${i}">Seria ${i+1} · ${group.length} itemi · ${group[0].article==='Anexă'?'anexa':'art. '+group[0].article} – ${group.at(-1).article==='Anexă'?'anexa':'art. '+group.at(-1).article}</option>`).join('');
      document.getElementById('controlSeriesInfo').textContent=`${scopeItems(scope.value).length} de itemi în ${groups.length} ${groups.length===1?'serie':'serii'}. Timp maxim pentru o parcurgere: 60 de minute.`;
    }
    scope.onchange=update;size.onchange=update;update();
    document.getElementById('controlStart').onclick=()=>{
      const n=size.value==='all'?scopeItems(scope.value).length:Number(size.value),groups=seriesFor(scope.value,n||1),number=Number(series.value);
      const mode=document.querySelector('input[name="controlMode"]:checked').value;
      startSession(groups[number],mode,{scope:scope.value,size:n,series:number});
    };
  }
  function chooseAnswer(option){
    if(!session||session.finished)return;
    if(elapsedSession()>=3600000){finishSession(true);return;}
    const q=session.items[session.index];if(session.shown.has(q.id))return;
    session.answers[q.id]=option;
    if(session.mode==='immediate')session.shown.add(q.id);
    renderSession();
  }
  function revealCurrent(){
    const q=session.items[session.index];if(session.answers[q.id]===undefined)return;
    session.shown.add(q.id);renderSession();
  }
  function renderSession(){
    view='control';nav();
    if(session.finished){renderResults();return;}
    if(elapsedSession()>=3600000){finishSession(true);return;}
    const q=session.items[session.index],chosen=session.answers[q.id],shown=session.shown.has(q.id),answered=Object.keys(session.answers).length;
    main.innerHTML=`<section class="control-top"><div><strong>Grilă de control · ${session.index+1}/${session.items.length}</strong><span>${answered} ${answered===1?'răspuns completat':'răspunsuri completate'} · ${session.mode==='immediate'?'verificare imediată':'corectare la final'}</span></div><div class="control-clock">Timp rămas <strong id="controlRemaining">${timeText((3600000-elapsedSession())/1000)}</strong></div></section>
    <section class="control-question"><p class="eyebrow">${esc(q.source)} · grupa ${q.block}</p><h1 class="control-prompt">${questionText(q)}</h1><div role="group" aria-label="Variante de răspuns">${q.options.map((o,i)=>`<button type="button" class="answer-option ${i===chosen?'selected':''} ${shown&&i===q.answer?'correct':''} ${shown&&chosen===i&&i!==q.answer?'wrong':''}" data-control-answer="${i}" aria-pressed="${chosen===i}" ${shown?'disabled':''}><span>${'abcd'[i]})</span> ${esc(o)}</button>`).join('')}</div>
    <div aria-live="polite">${shown?feedbackHTML(q,chosen):chosen===undefined?'<p>Alege o variantă. Poți reveni asupra ei înainte de verificare.</p>':'<p>Răspuns înregistrat pentru această parcurgere.</p>'}</div>
    <div class="control-actions"><button type="button" class="secondary" id="controlPrev" ${session.index===0?'disabled':''}>← Înapoi</button><button type="button" class="secondary" id="controlReveal" ${chosen===undefined||shown?'disabled':''}>Verifică acest răspuns</button><button type="button" class="primary" id="controlNext" ${session.index===session.items.length-1?'disabled':''}>Următorul →</button></div>
    <details class="control-map"><summary>Grila răspunsurilor · ${answered}/${session.items.length}</summary><div>${session.items.map((x,i)=>`<button type="button" data-control-jump="${i}" class="${i===session.index?'current':''} ${session.answers[x.id]!==undefined?'filled':''}" aria-label="Itemul ${i+1}${session.answers[x.id]===undefined?', fără răspuns':', completat'}">${i+1}</button>`).join('')}</div></details><button type="button" class="control-finish" id="controlFinish">Finalizează și vezi rezultatul${answered<session.items.length?` · ${session.items.length-answered} fără răspuns`:''}</button></section>`;
    document.querySelectorAll('[data-control-answer]').forEach(b=>b.onclick=()=>chooseAnswer(Number(b.dataset.controlAnswer)));
    document.getElementById('controlPrev').onclick=()=>{if(session.index>0){session.index--;renderSession();window.scrollTo?.({top:0});}};
    document.getElementById('controlNext').onclick=()=>{if(session.index<session.items.length-1){session.index++;renderSession();window.scrollTo?.({top:0});}};
    document.getElementById('controlReveal').onclick=revealCurrent;
    document.getElementById('controlFinish').onclick=()=>finishSession(false);
    document.querySelectorAll('[data-control-jump]').forEach(b=>b.onclick=()=>{session.index=Number(b.dataset.controlJump);renderSession();window.scrollTo?.({top:0});});
  }
  function finishSession(timedOut=false){
    if(!session||session.finished)return;
    session.endedAt=timedOut?session.startedAt+3600000:performance.now();session.finished=true;session.timedOut=timedOut;clearSessionTimer();
    if(view==='control')renderResults();
  }
  function sessionStats(){
    const total=session.items.length,correct=session.items.filter(q=>session.answers[q.id]===q.answer).length,answered=Object.keys(session.answers).length;
    return {total,correct,wrong:answered-correct,unanswered:total-answered};
  }
  function renderResults(){
    view='control';nav();window.scrollTo?.({top:0});const stats=sessionStats(),wrongItems=session.items.filter(q=>session.answers[q.id]!==q.answer),settings=session.settings;
    const groups=settings.scope?seriesFor(settings.scope,settings.size):[],hasNext=groups.length>settings.series+1;
    main.innerHTML=`<section class="page-head"><p class="eyebrow">REZULTATUL PARCURGERII</p><h1>${stats.correct} din ${stats.total} răspunsuri corecte</h1><p>${stats.wrong} greșite · ${stats.unanswered} fără răspuns · ${Math.round(stats.correct/stats.total*100)}% corecte</p><p><strong>Timp total: ${timeText(elapsedSession()/1000)}</strong>${session.timedOut?' · Cele 60 de minute s-au încheiat.':''}</p><div class="control-actions"><button type="button" class="primary" id="controlRetryWrong" ${wrongItems.length?'':'disabled'}>Reia greșelile și itemii necompletați (${wrongItems.length})</button><button type="button" class="secondary" id="controlRetryAll">Reia aceeași serie</button>${hasNext?'<button type="button" class="primary" id="controlNextSeries">Seria următoare →</button>':''}<button type="button" class="secondary" id="controlNew">Alege altă serie</button></div></section>
    <section class="control-review"><h2>Răspunsurile și pasajele din material</h2><label class="control-review-filter"><input type="checkbox" id="controlOnlyWrong"> Arată numai greșelile și itemii fără răspuns</label>${session.items.map((q,i)=>{
      const chosen=session.answers[q.id],good=chosen===q.answer;
      return `<details class="control-result ${good?'result-good':'result-wrong'}" data-result-good="${good}"><summary>${i+1}. ${esc(q.source)} · ${chosen===undefined?'Fără răspuns':good?'Corect':'Greșit'}</summary><div><p>${questionText(q)}</p><p>Răspunsul tău: <strong>${chosen===undefined?'necompletat':esc('abcd'[chosen]+') '+q.options[chosen])}</strong></p>${feedbackHTML(q,chosen)}<button type="button" class="secondary" data-result-article="${q.article==='Anexă'?'251':q.article}">Deschide articolul integral</button></div></details>`;
    }).join('')}</section>`;
    document.getElementById('controlRetryWrong').onclick=()=>startSession(wrongItems,session.mode,{});
    document.getElementById('controlRetryAll').onclick=()=>startSession(session.items,session.mode,session.settings);
    if(hasNext)document.getElementById('controlNextSeries').onclick=()=>startSession(groups[settings.series+1],session.mode,{...settings,series:settings.series+1});
    document.getElementById('controlNew').onclick=()=>{clearSessionTimer();session=null;renderSetup();};
    document.getElementById('controlOnlyWrong').onchange=e=>document.querySelectorAll('[data-result-good]').forEach(d=>d.hidden=e.target.checked&&d.dataset.resultGood==='true');
    document.querySelectorAll('[data-result-article]').forEach(b=>b.onclick=()=>openArticle(b.dataset.resultArticle));
  }

window.LEGE_CONTROL_APP={controlView,seriesFor,startSession,chooseAnswer,revealCurrent,finishSession,sessionStats,getSession:()=>session};
document.getElementById('sourceClose').onclick=()=>document.getElementById('sourceDialog').close();
document.getElementById('resetQuiz').onclick=()=>{clearSessionTimer();session=null;renderSetup();window.scrollTo?.({top:0,behavior:'instant'});};
renderSetup();
})();
