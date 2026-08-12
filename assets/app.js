/* =========================================================
   英语小课桌 · 译林版6年级  —  main logic
   纯前端 / 手机优先 / 本地存储 / 离线可用
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 基础工具 ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function dateStr(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
  function todayStr() { return dateStr(new Date()); }

  function normEn(s) {
    return String(s).toLowerCase().replace(/[.,!?;:'"’‘]/g, '').replace(/\s+/g, ' ').trim();
  }
  function normZh(s) {
    return String(s).replace(/[，。、！？；：\s]/g, '').trim();
  }
  // 莱文斯坦距离
  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      }
    }
    return dp[m][n];
  }
  function sim(a, b) {
    a = normEn(a); b = normEn(b);
    if (!a && !b) return 1;
    const d = lev(a, b);
    const max = Math.max(a.length, b.length) || 1;
    return 1 - d / max;
  }

  /* ---------- 语音：TTS ---------- */
  function speak(text, rate) {
    if (!('speechSynthesis' in window)) { toast('当前浏览器不支持发音'); return; }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate || 0.9;
      u.pitch = 1;
      speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }

  // 分句连续朗读（用于阅读全文）
  function speakSeq(text) {
    if (!('speechSynthesis' in window)) { toast('当前浏览器不支持发音'); return; }
    try {
      speechSynthesis.cancel();
      const parts = String(text).split(/(?<=[.!?])\s+/).filter(Boolean);
      parts.forEach(p => {
        const u = new SpeechSynthesisUtterance(p);
        u.lang = 'en-US'; u.rate = 0.85; u.pitch = 1;
        speechSynthesis.speak(u);
      });
    } catch (e) { /* ignore */ }
  }

  /* ---------- 语音：识别 ---------- */
  function startRecognition(onResult, onError) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { onError('not-supported'); return null; }
    const rec = new SR();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (e) => onResult(e.results[0][0].transcript);
    rec.onerror = (e) => onError(e.error || 'error');
    rec.onend = () => { if (rec._onend) rec._onend(); };
    try { rec.start(); } catch (e) { onError('start-failed'); }
    return rec;
  }

  /* ---------- 本地存储 ---------- */
  const STORE_KEY = 'el_data_v1';
  let store = loadStore();
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStore() { localStorage.setItem(STORE_KEY, JSON.stringify(store)); }
  store.wrong = store.wrong || {};        // key: unitId::en
  store.progress = store.progress || {};  // unitId -> {attempts,correct,wrong}
  store.streak = store.streak || { lastDay: null, days: 0 };
  store.learned = store.learned || [];    // ['u1::magic', ...]

  const wkey = (u, en) => `${u}::${en}`;

  function bumpStreak() {
    const t = todayStr();
    const s = store.streak;
    if (s.lastDay === t) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    s.days = (s.lastDay === dateStr(y)) ? s.days + 1 : 1;
    s.lastDay = t;
    saveStore();
  }

  function markLearned(u, en) {
    const k = wkey(u, en);
    if (!store.learned.includes(k)) { store.learned.push(k); saveStore(); }
  }
  function addWrong(unitId, w) {
    const k = wkey(unitId, w.en);
    const now = Date.now();
    if (store.wrong[k]) {
      store.wrong[k].wrongCount += 1;
      store.wrong[k].nextReview = now; // 写错立即待复习
    } else {
      store.wrong[k] = { unitId, en: w.en, zh: w.zh, ph: w.ph, wrongCount: 1, correctStreak: 0, nextReview: now };
    }
    saveStore();
  }
  function markRight(unitId, en) {
    const k = wkey(unitId, en);
    const e = store.wrong[k];
    if (!e) return;
    e.correctStreak = (e.correctStreak || 0) + 1;
    if (e.correctStreak >= 2) { delete store.wrong[k]; }
    else { e.nextReview = Date.now() + 2 * 86400000; }
    saveStore();
  }
  function wrongDueCount() {
    const now = Date.now();
    return Object.values(store.wrong).filter(e => e.nextReview <= now).length;
  }
  function totalWrongCount() { return Object.keys(store.wrong).length; }

  function addProgress(unitId, ok) {
    const p = store.progress[unitId] || { attempts: 0, correct: 0, wrong: 0 };
    p.attempts += 1;
    if (ok) p.correct += 1; else p.wrong += 1;
    store.progress[unitId] = p;
    saveStore();
  }

  /* ---------- Toast ---------- */
  let toastTimer = null;
  function toast(msg) {
    let el = $('.toast');
    if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
  }

  /* ---------- 导航 ---------- */
  function goPage(name) {
    $$('.page').forEach(p => p.classList.remove('active'));
    $('#page-' + name).classList.add('active');
    $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.page === name));
    if (name === 'home') renderHome();
    if (name === 'progress') renderProgress();
    if (name === 'bank') renderUnitList();
    if (name === 'skills') renderSkills();
    window.scrollTo(0, 0);
  }

  /* ---------- 首页 ---------- */
  function renderHome() {
    const now = new Date();
    const wk = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];
    $('#heroDate').textContent = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 星期${wk}`;
    $('#heroStreak').textContent = `🔥 连续学习 ${store.streak.days} 天`;
    $('#msLearned').textContent = store.learned.length;
    $('#msWrong').textContent = totalWrongCount();
    $('#msDue').textContent = wrongDueCount();
    $('#homeWrongCount').textContent = `${totalWrongCount()} 个待巩固`;
  }

  /* ---------- 单词库 ---------- */
  function renderUnitList() {
    $('#wordListView').classList.add('hidden');
    $('#unitList').classList.remove('hidden');
    const box = $('#unitList');
    box.innerHTML = '';
    UNITS.forEach(u => {
      const card = document.createElement('div');
      card.className = 'unit-card';
      card.innerHTML = `<div><div class="unit-name">${u.title}</div><div class="unit-topic">${u.topic}</div></div><div class="unit-count">${u.words.length} 词 ›</div>`;
      card.onclick = () => renderWordList(u);
      box.appendChild(card);
    });
  }
  function renderWordList(unit) {
    $('#unitList').classList.add('hidden');
    const box = $('#wordListView');
    box.classList.remove('hidden');
    let html = `<button class="back-btn" id="bankBack">‹ 返回单元列表</button>`;
    html += `<div style="font-weight:700;margin-bottom:10px;">${unit.title}</div>`;
    unit.words.forEach(w => {
      html += `<div class="word-item">
        <div style="flex:1">
          <div class="word-en">${w.en}</div>
          <div class="word-ph">${w.ph || ''}</div>
          <div class="word-zh">${w.zh}${w.ex ? '<br><span style="color:var(--sub);font-size:12px">' + w.ex + '</span>' : ''}</div>
        </div>
        <button class="speak-btn" data-w="${w.en}">🔊</button>
      </div>`;
    });
    box.innerHTML = html;
    $('#bankBack').onclick = renderUnitList;
    $$('.speak-btn', box).forEach(b => b.onclick = () => speak(b.dataset.w));
  }

  /* ---------- 默写 ---------- */
  let dictState = { mode: 'zh2en', units: new Set(), queue: [], idx: 0, score: 0, wrongList: [] };

  function renderDictSetup() {
    $('#dictSetup').classList.remove('hidden');
    $('#dictPlay').classList.add('hidden');
    $('#dictResult').classList.add('hidden');
    const row = $('#dictUnits');
    row.innerHTML = '<span class="chip all" data-all="1">全部</span>';
    UNITS.forEach(u => {
      const c = document.createElement('span');
      c.className = 'chip'; c.textContent = u.id.toUpperCase();
      c.dataset.unit = u.id;
      c.onclick = () => { c.classList.toggle('active'); syncAllChip(); };
      row.appendChild(c);
    });
    // 模式
    $$('.mode-btn').forEach(b => b.onclick = () => {
      $$('.mode-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      dictState.mode = b.dataset.mode;
    });
    function syncAllChip() {
      const all = $('#dictUnits .chip.all');
      const active = $$('#dictUnits .chip:not(.all).active');
      all.classList.toggle('active', active.length === UNITS.length);
    }
    $('#dictUnits .chip.all').onclick = function () {
      const on = !this.classList.contains('active');
      this.classList.toggle('active', on);
      $$('#dictUnits .chip:not(.all)').forEach(c => c.classList.toggle('active', on));
    };
  }

  function startDictation(useWrong) {
    let words = [];
    if (useWrong) {
      words = Object.values(store.wrong).map(e => ({ unitId: e.unitId, en: e.en, zh: e.zh, ph: e.ph }));
      if (!words.length) { toast('错词本还是空的，先去默写吧'); return; }
    } else {
      const sel = $$('#dictUnits .chip:not(.all).active').map(c => c.dataset.unit);
      if (!sel.length) { toast('请先选择单元'); return; }
      sel.forEach(uid => {
        const u = UNITS.find(x => x.id === uid);
        u.words.forEach(w => words.push({ unitId: uid, en: w.en, zh: w.zh, ph: w.ph }));
      });
      // 打乱
      words = words.sort(() => Math.random() - 0.5);
    }
    dictState.queue = words;
    dictState.idx = 0;
    dictState.score = 0;
    dictState.wrongList = [];
    $('#dictSetup').classList.add('hidden');
    renderDictPlay();
  }

  function renderDictPlay() {
    const box = $('#dictPlay');
    box.classList.remove('hidden');
    $('#dictResult').classList.add('hidden');
    const item = dictState.queue[dictState.idx];
    const total = dictState.queue.length;
    const mode = dictState.mode;
    let promptHtml = '';
    if (mode === 'zh2en') {
      promptHtml = `<div class="dict-prompt">${item.zh}</div><div class="dict-ph">${item.ph || ''}</div>`;
    } else if (mode === 'en2zh') {
      promptHtml = `<div class="dict-prompt">${item.en}</div><div class="dict-ph">${item.ph || ''}</div>`;
    } else { // listen
      promptHtml = `<div class="dict-prompt">🔊 听音写词</div><div class="dict-ph">点击下方按钮播放发音</div>`;
    }
    const phLabel = mode === 'en2zh' ? '写出中文意思' : '写出英文单词';
    box.innerHTML = `
      <div class="dict-head">
        <button class="back-btn" id="dictBack">‹ 退出</button>
        <div class="dict-progress">${dictState.idx + 1} / ${total}</div>
      </div>
      ${promptHtml}
      ${mode === 'listen' ? '<button class="dict-listen-btn" id="dictListen">🔊</button>' : ''}
      <input class="dict-input" id="dictInput" placeholder="${phLabel}" autocomplete="off" />
      <div class="dict-feedback" id="dictFeedback"></div>
      <div class="dict-reveal" id="dictReveal"></div>
      <div class="dict-actions">
        <button class="btn-ghost" id="dictSkip">不会，看答案</button>
        <button class="btn-primary" id="dictSubmit">提交</button>
      </div>`;
    $('#dictBack').onclick = () => { renderDictSetup(); };
    if (mode === 'listen') $('#dictListen').onclick = () => speak(item.en, 0.85);
    const input = $('#dictInput');
    input.focus();
    input.addEventListener('keydown', e => { if (e.key === 'Enter') submitAnswer(); });
    $('#dictSubmit').onclick = submitAnswer;
    $('#dictSkip').onclick = () => submitAnswer(true);
  }

  function submitAnswer(skip) {
    const item = dictState.queue[dictState.idx];
    const mode = dictState.mode;
    const input = $('#dictInput');
    const val = input.value;
    let ok = false;
    if (skip) {
      ok = false;
    } else if (mode === 'en2zh') {
      ok = normZh(val) === normZh(item.zh);
    } else { // zh2en or listen -> 写英文
      ok = normEn(val) === normEn(item.en);
    }
    const fb = $('#dictFeedback');
    const rev = $('#dictReveal');
    if (ok) {
      fb.textContent = '✅ 正确！';
      fb.className = 'dict-feedback fb-ok';
      rev.textContent = '';
      dictState.score += 1;
      addProgress(item.unitId, true);
      markLearned(item.unitId, item.en);
      markRight(item.unitId, item.en);
    } else {
      fb.textContent = skip ? '💡 已记录' : '❌ 再想想';
      fb.className = 'dict-feedback fb-no';
      rev.textContent = `正确答案：${item.en} · ${item.zh}`;
      addProgress(item.unitId, false);
      markLearned(item.unitId, item.en);
      addWrong(item.unitId, item);
      dictState.wrongList.push(item);
    }
    bumpStreak();
    dictState.idx += 1;
    // 锁定输入，1秒后下一题
    input.disabled = true;
    setTimeout(() => {
      if (dictState.idx >= dictState.queue.length) showResult();
      else renderDictPlay();
    }, 900);
  }

  function showResult() {
    const box = $('#dictResult');
    $('#dictPlay').classList.add('hidden');
    box.classList.remove('hidden');
    const total = dictState.queue.length;
    const score = dictState.score;
    const pct = total ? Math.round(score / total * 100) : 0;
    let wrongHtml = '';
    if (dictState.wrongList.length) {
      wrongHtml = '<div class="wrong-list"><div style="font-weight:700;margin-bottom:8px;">本次错词</div>' +
        dictState.wrongList.map(w => `<div class="wrong-list-item"><span><b>${w.en}</b> — ${w.zh}</span><button class="speak-btn" data-w="${w.en}" style="width:34px;height:34px;font-size:14px">🔊</button></div>`).join('') +
        '</div>';
    }
    box.innerHTML = `
      <div class="card" style="text-align:center">
        <div class="result-score">${pct}分</div>
        <div class="result-sub">答对 ${score} / ${total} 词</div>
        ${wrongHtml}
        <button class="btn-primary" id="resAgain" style="margin-top:14px">再来一组</button>
        <button class="btn-ghost" id="resHome">返回首页</button>
      </div>`;
    $$('.speak-btn', box).forEach(b => b.onclick = () => speak(b.dataset.w));
    $('#resAgain').onclick = () => { $('#dictSetup').classList.remove('hidden'); renderDictSetup(); };
    $('#resHome').onclick = () => goPage('home');
  }

  /* ---------- 听说读 ---------- */
  let skillState = { listen: { unit: null, item: null }, speak: { unit: null, item: null }, read: { unit: 'u1' } };

  // 显示指定技能面板（与 CSS .skill-panel.active 规则一致）
  function showSkill(sk) {
    ['listen', 'speak', 'read'].forEach(s => {
      const panel = $('#skill' + cap(s));
      panel.classList.toggle('active', s === sk); // 显示当前面板
      panel.classList.remove('hidden');           // 清除可能残留的 hidden
    });
  }

  function renderSkills() {
    // 标签切换
    $$('.skill-tab').forEach(t => t.onclick = () => {
      $$('.skill-tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      showSkill(t.dataset.skill);
    });
    // 默认显示当前激活的标签（HTML 中第一个为 listen）
    const activeTab = $('.skill-tab.active') || $('.skill-tab');
    showSkill(activeTab.dataset.skill);
    renderListen();
    renderSpeak();
    renderRead();
  }
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  function unitChipRow(selected, onPick) {
    let html = '';
    UNITS.forEach(u => {
      html += `<span class="chip ${selected === u.id ? 'active' : ''}" data-u="${u.id}">${u.id.toUpperCase()}</span>`;
    });
    return `<div class="read-unit-sel">${html}</div>`;
  }

  function renderListen() {
    const box = $('#skillListen');
    const sel = skillState.listen.unit || 'u1';
    box.innerHTML = unitChipRow(sel, null) +
      `<div id="listenBody"></div>`;
    $$('.chip', box).forEach(c => c.onclick = () => { skillState.listen.unit = c.dataset.u; renderListen(); });
    nextListen();
  }
  function nextListen() {
    const uid = skillState.listen.unit || 'u1';
    const u = UNITS.find(x => x.id === uid);
    const item = u.words[Math.floor(Math.random() * u.words.length)];
    skillState.listen.item = item;
    // 选项：正确 + 3 随机
    const others = [];
    const pool = UNITS.flatMap(x => x.words).filter(w => w.en !== item.en);
    while (others.length < 3 && pool.length) {
      const r = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      if (!others.find(o => o.zh === r.zh)) others.push(r);
    }
    const opts = [item, ...others].sort(() => Math.random() - 0.5);
    const body = $('#listenBody');
    body.innerHTML = `
      <div class="listen-q">
        <div style="text-align:center;color:var(--sub);font-size:13px">听发音，选中文意思</div>
        <button class="dict-listen-btn" id="lnPlay" style="background:var(--green)">🔊</button>
        <div class="listen-opts" id="lnOpts">
          ${opts.map(o => `<button class="listen-opt" data-en="${o.en}">${o.zh}</button>`).join('')}
        </div>
        <div class="dict-feedback" id="lnFb"></div>
        <button class="btn-primary" id="lnNext" style="margin-top:10px">下一题</button>
      </div>`;
    $('#lnPlay').onclick = () => speak(item.en, 0.9);
    speak(item.en, 0.9);
    $$('.listen-opt', body).forEach(b => b.onclick = () => {
      const correct = b.dataset.en === item.en;
      $$('.listen-opt', body).forEach(x => {
        if (x.dataset.en === item.en) x.classList.add('correct');
        else if (x === b && !correct) x.classList.add('wrong');
      });
      const fb = $('#lnFb');
      fb.textContent = correct ? '✅ 答对啦' : '❌ 正确答案已标绿';
      fb.className = 'dict-feedback ' + (correct ? 'fb-ok' : 'fb-no');
      if (correct) { addProgress(uid, true); bumpStreak(); }
      else { addProgress(uid, false); }
      markLearned(uid, item.en);
    });
    $('#lnNext').onclick = nextListen;
  }

  function renderSpeak() {
    const box = $('#skillSpeak');
    const sel = skillState.speak.unit || 'u1';
    box.innerHTML = unitChipRow(sel, null) + `<div id="speakBody"></div>`;
    $$('.chip', box).forEach(c => c.onclick = () => { skillState.speak.unit = c.dataset.u; renderSpeak(); });
    nextSpeak();
  }
  function nextSpeak() {
    const uid = skillState.speak.unit || 'u1';
    const u = UNITS.find(x => x.id === uid);
    const item = u.words[Math.floor(Math.random() * u.words.length)];
    skillState.speak.item = item;
    const body = $('#speakBody');
    body.innerHTML = `
      <div class="speak-word">
        <button class="speak-btn" id="spPlay" data-w="${item.en}" style="position:absolute;right:14px;top:14px">🔊</button>
        <div class="speak-en">${item.en}</div>
        <div class="speak-zh">${item.zh}</div>
      </div>
      <button class="mic-btn" id="spMic">🎤</button>
      <div class="speak-score" id="spScore"></div>
      <div class="speak-heard" id="spHeard">点击麦克风，跟读上面的单词</div>
      <button class="btn-primary" id="spNext" style="margin-top:10px">下一个</button>`;
    $('#spPlay').onclick = () => speak(item.en, 0.9);
    const mic = $('#spMic');
    mic.onclick = () => {
      mic.classList.add('recording');
      $('#spScore').textContent = '';
      $('#spHeard').textContent = '正在聆听…';
      startRecognition(
        (heard) => {
          mic.classList.remove('recording');
          const s = Math.round(sim(heard, item.en) * 100);
          $('#spScore').textContent = s + ' 分';
          $('#spScore').style.color = s >= 80 ? 'var(--green)' : (s >= 50 ? 'var(--accent)' : 'var(--red)');
          $('#spHeard').textContent = '你读的是：' + heard;
          if (s >= 50) { addProgress(uid, true); markLearned(uid, item.en); }
          bumpStreak();
        },
        (err) => {
          mic.classList.remove('recording');
          if (err === 'not-supported') toast('当前浏览器不支持语音识别，建议用 Chrome');
          else $('#spHeard').textContent = '没听清，再试一次吧';
        }
      );
    };
    $('#spNext').onclick = nextSpeak;
  }

  function renderRead() {
    const box = $('#skillRead');
    const sel = skillState.read.unit || 'u1';
    const u = UNITS.find(x => x.id === sel);
    box.innerHTML = unitChipRow(sel, null) +
      `<div id="readInfo" class="card" style="font-size:14px;color:var(--sub)">点击课文中的蓝色单词，可听发音并查看释义。</div>
       <div class="read-passage" id="readPassage"></div>`;
    $$('.chip', box).forEach(c => c.onclick = () => { skillState.read.unit = c.dataset.u; renderRead(); });
    const passage = $('#readPassage');
    passage.innerHTML = u.text.split(/\s+/).map(tok => {
      const clean = tok.replace(/[^A-Za-z']/g, '');
      return `<span class="read-word" data-w="${clean}">${tok}</span>`;
    }).join(' ');
    $$('.read-word', passage).forEach(sp => sp.onclick = () => {
      const w = sp.dataset.w.toLowerCase();
      const found = u.words.find(x => normEn(x.en) === w);
      const info = $('#readInfo');
      if (found) info.innerHTML = `<b>${found.en}</b> <span style="color:var(--sub)">${found.ph || ''}</span><br>${found.zh}`;
      else info.innerHTML = `<b>${w}</b>`;
      speak(found ? found.en : w, 0.85);
    });
  }

  /* ---------- 进度 ---------- */
  function renderProgress() {
    $('#streakDays').textContent = store.streak.days;
    // 单元掌握度
    const bars = $('#unitBars');
    bars.innerHTML = '';
    UNITS.forEach(u => {
      const p = store.progress[u.id] || { attempts: 0, correct: 0, wrong: 0 };
      const rate = p.attempts ? Math.round(p.correct / p.attempts * 100) : 0;
      const div = document.createElement('div');
      div.className = 'bar-row';
      div.innerHTML = `<div class="bar-label"><span>${u.id.toUpperCase()} ${u.topic}</span><span>${rate}% (${p.attempts}次)</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${rate}%"></div></div>`;
      bars.appendChild(div);
    });
    // 错词本
    const wb = $('#wrongBook');
    const entries = Object.values(store.wrong);
    if (!entries.length) {
      wb.innerHTML = '<div style="color:var(--sub);font-size:14px">还没有错词，真棒！</div>';
    } else {
      wb.innerHTML = entries.map(e =>
        `<div class="wrong-book-item">
           <div><span class="wrong-en">${e.en}</span> <span class="wrong-zh">${e.zh}</span></div>
           <div style="display:flex;align-items:center;gap:8px"><span class="wrong-times">错${e.wrongCount}次</span><button class="speak-btn" data-w="${e.en}" style="width:32px;height:32px;font-size:13px">🔊</button></div>
         </div>`).join('');
      $$('.speak-btn', wb).forEach(b => b.onclick = () => speak(b.dataset.w));
    }
    $('#clearWrong').onclick = () => {
      if (confirm('确定清空错词本？')) { store.wrong = {}; saveStore(); renderProgress(); toast('已清空'); }
    };
  }

  /* ---------- 初始化 ---------- */
  function init() {
    // 底部导航
    $$('.tab').forEach(t => t.onclick = () => goPage(t.dataset.page));
    // 首页快捷卡
    $$('.quick-card').forEach(c => c.onclick = () => {
      goPage(c.dataset.goto);
      if (c.dataset.skill) {
        $$('.skill-tab').forEach(x => x.classList.toggle('active', x.dataset.skill === c.dataset.skill));
        showSkill(c.dataset.skill);
      }
      if (c.dataset.mode === 'wrong') { dictState.mode = 'zh2en'; startDictation(true); }
    });
    // 默写入口
    $('#dictStart').onclick = () => startDictation(false);
    $('#dictWrongEnter').onclick = () => startDictation(true);
    // 搜索
    $('#bankSearch').addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) { renderUnitList(); return; }
      $('#unitList').classList.add('hidden');
      const box = $('#wordListView');
      box.classList.remove('hidden');
      let html = `<button class="back-btn" id="bankBack">‹ 返回单元列表</button>`;
      let found = 0;
      UNITS.forEach(u => u.words.forEach(w => {
        if (normEn(w.en).includes(q) || normZh(w.zh).includes(q) || (w.en.toLowerCase().includes(q))) {
          found++;
          html += `<div class="word-item"><div style="flex:1"><div class="word-en">${w.en}</div><div class="word-ph">${w.ph || ''}</div><div class="word-zh">${w.zh}</div></div><button class="speak-btn" data-w="${w.en}">🔊</button></div>`;
        }
      }));
      if (!found) html += '<div style="color:var(--sub)">没找到相关单词</div>';
      box.innerHTML = html;
      $('#bankBack').onclick = renderUnitList;
      $$('.speak-btn', box).forEach(b => b.onclick = () => speak(b.dataset.w));
    });

    renderHome();
    renderDictSetup();
    renderUnitList();
    renderSkills();
    renderProgress();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
