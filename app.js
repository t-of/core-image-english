/* ============================================================
   コアイメージ英語 — アプリ本体
   ============================================================ */
/* 教科書は各データファイルを連結して作る（順序がそのまま目次の順序） */
const TEXTBOOK = [].concat(
  typeof PARTICLES !== 'undefined' ? PARTICLES : [],
  typeof VERBS     !== 'undefined' ? VERBS     : [],
  typeof GRAMMAR   !== 'undefined' ? GRAMMAR   : [],
  typeof WORDSETS  !== 'undefined' ? WORDSETS  : []
);

const KEY = 'coreEn.v1';
const INTERVALS = [0, 1, 3, 7, 21, 60];   // SRS: box → 次回までの日数
const DAY = 86400000;

/* ---------- 設定 ---------- */
const DEFAULTS = { theme:'auto', accent:'orange', fs:1, size:10, haptics:true, sound:true, hideChoices:false };
const THEMES  = [{id:'auto',label:'自動',note:'端末に合わせる'},
                 {id:'light',label:'ライト',note:'明るい'},
                 {id:'dark',label:'ダーク',note:'暗い'}];
const FONTS   = [{id:0.9,label:'小'},{id:1,label:'標準'},{id:1.15,label:'大'},{id:1.3,label:'特大'}];
const ACCENTS = [{id:'orange',label:'土'},{id:'blue',label:'藍'},{id:'green',label:'苔'},
                 {id:'purple',label:'菫'},{id:'pink',label:'紅'}];
const SIZES   = [5, 10, 20];

const sessionSize = () => store.set.size;

const store = load();
function load(){
  try { const o = JSON.parse(localStorage.getItem(KEY)) || {};
        return { rec:o.rec || {}, cells:o.cells || {},
                 set:{ ...DEFAULTS, ...(o.set || {}) },
                 last:o.last || null }; }
  catch(e){ return { rec:{}, cells:{}, set:{ ...DEFAULTS }, last:null }; }
}

/* 設定を画面に反映する。CSS 側は data-theme / data-accent / --fs だけを見ている */
function applySettings(){
  const r = document.documentElement, s = store.set;
  s.theme === 'auto'     ? r.removeAttribute('data-theme')  : r.setAttribute('data-theme', s.theme);
  s.accent === 'orange'  ? r.removeAttribute('data-accent') : r.setAttribute('data-accent', s.accent);
  r.style.setProperty('--fs', s.fs);
  setAudioSession(s.sound);
  syncThemeColor();
}

/* スマホの上端（ステータスバー）の色を、いまの地の色に合わせる */
function syncThemeColor(){
  const meta = document.getElementById('tc');
  if(!meta) return;
  meta.setAttribute('content',
    getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() || '#f6f5f2');
}
/* 「自動」のときは端末の設定が変わった瞬間に追従させる */
if(window.matchMedia){
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => { if(store.set.theme === 'auto') syncThemeColor(); });
}

/* 正誤が分かるよう、ごく短く振動させる。うるさくないよう長さは抑える */
function buzz(ok){
  if(!store.set.haptics || !navigator.vibrate) return;
  navigator.vibrate(ok ? 12 : [10, 40, 10]);
}

/* ============================================================
   効果音 ── その場で合成する

   音声ファイルは持たない。数十バイトのコードで済むうえ、
   読み込み待ちが無く、圏外でも鳴り、キャッシュも増えない。

   音の作りは「正解を褒めすぎず、不正解を責めない」こと。
   正解は上がる2音、不正解は下がる2音で、どちらも0.2秒で終わる。
   間違えたときの音を耳ざわりにすると、間違えるのが嫌になって
   手が止まる。そこは震え（buzz）の役目に任せる。
   ============================================================ */
const TONES = {
  /* [周波数, 開始秒, 長さ秒, 音量] */
  ok:   { wave:'sine',     notes:[[880, 0, .09, .16], [1318.51, .07, .13, .14]] },
  ng:   { wave:'triangle', notes:[[261.63, 0, .11, .11], [196, .09, .16, .09]] },
  done: { wave:'sine',     notes:[[523.25, 0, .12, .12], [659.25, .07, .12, .12],
                                  [783.99, .14, .12, .12], [1046.5, .21, .3, .13]] }
};

/* iPhone のマナーモードでも鳴らす（Safari 16.4 以降）。
   何もしないと Web Audio は着信音と同じ扱いになり、マナーモードで消える。
   'playback' にすると音楽アプリの曲が止まるので、音がオンのときだけにする */
function setAudioSession(soundOn){
  try { if(navigator.audioSession) navigator.audioSession.type = soundOn ? 'playback' : 'auto'; }
  catch(e){ /* 対応していない */ }
}

let actx = null;
function play(kind){
  if(!store.set.sound) return;
  const t = TONES[kind];
  if(!t) return;
  try{
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) return;
    /* 鳴らす瞬間まで作らない。iOS は操作の中でしか音を出せないので、
       ここ（タップの処理の中）で作って起こすのがちょうどいい */
    setAudioSession(true);
    actx = actx || new AC();
    /* iOS はアプリを裏に回すと 'interrupted' にする。'suspended' だけ見ていると戻っても鳴らない */
    if(actx.state !== 'running') actx.resume();
    const now = actx.currentTime;
    t.notes.forEach(([hz, at, dur, vol]) => {
      const osc = actx.createOscillator(), g = actx.createGain();
      osc.type = t.wave;
      osc.frequency.value = hz;
      /* 立ち上がりを少し鈍らせないと、頭が「プチッ」と鳴る */
      g.gain.setValueAtTime(0.0001, now + at);
      g.gain.exponentialRampToValueAtTime(vol, now + at + .012);
      g.gain.exponentialRampToValueAtTime(0.0001, now + at + dur);
      osc.connect(g).connect(actx.destination);
      osc.start(now + at);
      osc.stop(now + at + dur + .02);
    });
  }catch(err){ /* 音が出せない環境でも学習は止めない */ }
}

/* 裏に回ったら音の出口を捨てる。戻ってから次に鳴らすとき、タップの中で作り直す。
   iOS では中断された出口が resume しても生き返らないことがあるため */
document.addEventListener('visibilitychange', () => {
  if(document.hidden && actx){ actx.close().catch(() => {}); actx = null; }
});

/* 震えと音は必ず一緒に出す。片方だけ呼ぶと、設定を切ったときに
   手ごたえが半分だけ残って、壊れたように感じる */
function feedback(ok){ buzz(ok); play(ok ? 'ok' : 'ng'); }
/* プライベートモードや容量超過で書けなくても、学習は止めない */
function save(){ try { localStorage.setItem(KEY, JSON.stringify(store)); } catch(e){} }
function rec(id){
  return store.rec[id] || (store.rec[id] = { r:0, w:0, box:0, due:0 });
}
function grade(id, ok){
  const t = rec(id);
  if(ok){ t.r++; t.box = Math.min(t.box + 1, INTERVALS.length - 1); }
  else  { t.w++; t.box = 0; }
  t.due = Date.now() + INTERVALS[t.box] * DAY;
  save();
}

const state = { tab:'book', page:null, focusSense:null, quiz:null, cell:null, mxVerb:'get',
                vocab:null, vBand:1, vMode:'ja', panel:null, q:'', scope:'all', cat:'particle',
                vTab:'test', vq:'', vFilter:'all', vOpen:null };
const MATRIX_ID = '__matrix';
const $ = s => document.querySelector(s);

/* どの画面からでも設定を開けるよう、見出し行の右端に置く */
const searchBox = () => `<div class="searchbox">
  <span class="mag" aria-hidden="true">🔍</span>
  <input id="q" type="search" inputmode="search" autocapitalize="off" autocorrect="off"
     placeholder="ページを探す（コアや例文からでも）" value="${esc(state.q)}">
  ${state.q ? '<button class="clear" data-clearq aria-label="消す">✕</button>' : ''}
</div>`;

const headRow = title => `<div class="head"><h1>${title}</h1>
  <button class="icon-btn" data-panel="settings" aria-label="設定">⚙</button></div>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);

/* 見出し語を例文中でハイライト
   文法ページの見出し（have + p.p. など）は正規表現の特殊文字を含むので、
   英単語1語のときだけハイライトする */
function markHead(en, head){
  if(!/^[a-zA-Z]+$/.test(head)) return esc(en);
  return esc(en).replace(new RegExp('\\b' + head + '\\b','g'), '<em>' + head + '</em>');
}

/* ============================================================
   教科書
   ============================================================ */
/* 見出し語が長いページでもグリフ枠からはみ出さないように */
function glyphSize(w){
  return w.length <= 2 ? 22 : w.length === 3 ? 19 : w.length === 4 ? 16 : 13;
}
/* 目次のグリフは glyph 優先（文法ページは headword が長いため） */
const pageGlyph = p => p.glyph || p.headword;
/* 見出しは title があればそちら（文法ページの日本語名） */
const pageName  = p => p.title || p.headword;

/* ============================================================
   検索
   107ページから目当てのページを引けるようにする。
   見出し語だけでなく、コア・派生・例文・豆知識まで見にいくので、
   「接触」や「ほとんど〜ない」のような、意味の側からでも辿り着ける
   ============================================================ */
function pageHaystack(p){
  if(p._hay) return p._hay;
  const parts = [p.headword, p.title || '', p.core, p.coreNote];
  p.senses.forEach(s => {
    parts.push(s.chip, s.label, s.gloss);
    s.examples.forEach(e => parts.push(e.en, e.ja, e.note || ''));
  });
  p.trivia.forEach(t => parts.push(t.title, t.body));
  return (p._hay = parts.join('\n'));
}

/* 何にあたったかを短く見せる。探している手応えが出る */
function matchHint(p, q){
  const lower = q.toLowerCase();
  if((p.headword + (p.title || '')).toLowerCase().includes(lower)) return '';
  if(p.core.toLowerCase().includes(lower)) return 'コア：' + p.core;
  for(const s of p.senses){
    if((s.chip + s.label + s.gloss).toLowerCase().includes(lower)) return s.label;
    for(const e of s.examples)
      if((e.en + e.ja).toLowerCase().includes(lower)) return e.en + ' ' + e.ja;
  }
  for(const t of p.trivia) if((t.title + t.body).toLowerCase().includes(lower)) return '⚡ ' + t.title;
  return '';
}

function searchPages(q){
  const lower = q.trim().toLowerCase();
  if(!lower) return null;
  return TEXTBOOK.filter(p => pageHaystack(p).toLowerCase().includes(lower));
}

const TYPE_SECTION = [
  { type:'particle', tab:'不変化詞',   label:'不変化詞のコア', note:'前置詞・副詞。ここが全体の土台' },
  { type:'verb',     tab:'基本動詞',   label:'基本動詞のコア', note:'不変化詞と掛け算される側' },
  { type:'grammar',  tab:'文法',       label:'文法のコア',     note:'なぜそうなるかを原理から' },
  { type:'word',     tab:'紛らわしい語', label:'紛らわしい語',  note:'日本語では同じ訳なのに、英語では別物' }
];

function tocItem(p, hint){
  const ex = EXERCISES.filter(e => e.ref === p.id);
  const ok = ex.filter(e => (store.rec[e.id]||{}).r > 0).length;
  const pct = ex.length ? Math.round(ok / ex.length * 100) : 0;
  return `<button class="btn toc-item" data-open="${p.id}">
    <span class="toc-glyph" style="font-size:${glyphSize(pageGlyph(p))}px">${esc(pageGlyph(p))}</span>
    <span class="toc-body">
      <b>${esc(pageName(p))} ── ${esc(p.core)}</b>
      <span>${hint ? esc(hint) : `${p.senses.length}の派生 ・ 演習 ${ok}/${ex.length}`}</span>
      ${hint ? '' : `<span class="toc-bar"><i style="width:${pct}%"></i></span>`}
    </span>
  </button>`;
}

function viewBookList(){
  const hits = searchPages(state.q);
  if(hits){
    return `
      ${headRow('教科書')}
      ${searchBox()}
      <p class="sub">${hits.length ? `${hits.length}件` : '見つかりません'}</p>
      ${hits.map(p => tocItem(p, matchHint(p, state.q))).join('')}
      ${hits.length ? '' : `<div class="empty"><span class="ic">🔍</span>
        見出し語・コア・派生・例文・豆知識のどこにも見あたりませんでした。</div>`}`;
  }

  const sec   = TYPE_SECTION.find(s => s.type === state.cat) || TYPE_SECTION[0];
  const pages = TEXTBOOK.filter(p => p.type === sec.type);

  /* このジャンルの演習がどこまで進んだか */
  const ex   = EXERCISES.filter(e => PAGE_TYPE.get(e.ref) === sec.type);
  const done = ex.filter(e => (store.rec[e.id]||{}).r > 0).length;
  const pct  = ex.length ? Math.round(done / ex.length * 100) : 0;

  const revealed = Object.keys(store.cells).length;

  return `
    ${headRow('教科書')}
    ${searchBox()}
    <button class="btn install" data-wak="install"${window.WebAppKit && WebAppKit.canInstall() ? '' : ' hidden'}>
      <span class="ic">📲</span>
      <span><b>アプリとして追加</b>
      <span>ホーム画面から開けて、電波がなくても使えます</span></span>
    </button>

    <button class="mx-entry" data-open="${MATRIX_ID}">
      <span class="ic">▦</span>
      <span>
        <b>句動詞マトリクス</b>
        <span>動詞 × 不変化詞 の交点 ── ${revealed}/${PHRASALS.length} マス</span>
      </span>
    </button>

    <div class="seg scroll cats">${TYPE_SECTION.map(s => {
      const n = TEXTBOOK.filter(p => p.type === s.type).length;
      return `<button data-cat="${s.type}" aria-current="${s.type === state.cat}">
        ${s.tab}<small>${n}</small></button>`;
    }).join('')}</div>

    <p class="sub" style="margin:2px 0 10px">${esc(sec.note)}</p>
    <div class="progress"><i style="width:${pct}%"></i></div>
    <p class="sub" style="margin:-10px 0 14px">${pages.length}ページ　・　演習 ${done} / ${ex.length}</p>

    ${groupedList(sec.type, pages)}`;
}

/* 小見出しの定義があればそれに沿って並べ、なければそのまま並べる */
function groupedList(type, pages){
  const groups = type === 'grammar' && typeof GRAMMAR_GROUPS !== 'undefined' ? GRAMMAR_GROUPS : null;
  if(!groups) return pages.map(p => tocItem(p, '')).join('');
  const byId = new Map(pages.map(p => [p.id, p]));
  return groups.map(g => {
    const items = g.ids.map(id => byId.get(id)).filter(Boolean);
    if(!items.length) return '';
    return `<div class="sec-label">${esc(g.label)}　<span style="font-weight:400;letter-spacing:0">${
      items.length}項目</span></div>` + items.map(p => tocItem(p, '')).join('');
  }).join('');
}

function viewBookPage(id){
  const p = TEXTBOOK.find(x => x.id === id);
  return `
    <button class="backlink" data-back>← 教科書</button>
    <div class="hero">
      <div class="word">${esc(p.headword)}</div>
      ${p.title ? `<div class="wordname">${esc(p.title)}</div>` : ''}
      <div class="corelabel">コア：${esc(p.core)}</div>
      ${DIAGRAMS[p.diagram] || ''}
      <p class="corenote">${esc(p.coreNote)}</p>
    </div>

    <div class="chips" id="chips">
      ${p.senses.map(s =>
        `<button class="chip" data-jump="${s.id}">${esc(s.chip || s.label)}</button>`).join('')}
    </div>

    <div class="sec-label">コアからの派生</div>
    ${p.senses.map(s => `
      <div class="sense" id="s-${s.id}">
        <h3>${esc(s.label)}</h3>
        <p class="gloss">${esc(s.gloss)}</p>
        ${s.examples.map(e => `
          <div class="ex">
            <div class="en">${markHead(e.en, p.headword)}</div>
            <div class="ja">${esc(e.ja)}</div>
            ${e.note ? `<div class="note">${esc(e.note)}</div>` : ''}
          </div>`).join('')}
      </div>`).join('')}

    <div class="sec-label">⚡ 豆知識</div>
    ${p.trivia.map(t => `
      <div class="trivia">
        <h4>${esc(t.title)}</h4>
        <p>${esc(t.body)}</p>
      </div>`).join('')}

    <button class="btn primary" data-quizref="${p.id}" style="margin-top:18px">
      このページの演習をやる</button>`;
}

/* ============================================================
   句動詞マトリクス ── 掛け算を目で見る
   ============================================================ */
const cellKey = (v,p) => v + '/' + p;
const findPhrasal = (v,p) => PHRASALS.find(x => x.v === v && x.p === p);

function viewMatrix(){
  const sel  = state.cell;
  const verb = state.mxVerb;
  /* 句動詞を1つも作らない不変化詞は列から外す（そのこと自体は下に明記する） */
  const cols = MATRIX_PARTICLES.filter(p => PHRASALS.some(x => x.p === p));
  const dead = MATRIX_PARTICLES.filter(p => !cols.includes(p));

  /* ---- 俯瞰マップ：750マスの全体像を1画面に ---- */
  const map = [
    '<div class="mmap-corner"></div>',
    ...cols.map(p => `<div class="mmap-h">${p}</div>`),
    ...MATRIX_VERBS.flatMap(v => [
      `<div class="mmap-v ${v === verb ? 'sel' : ''}">${v}</div>`,
      ...cols.map(p => {
        const ph = findPhrasal(v, p);
        if(!ph) return '<div class="mmap-c"></div>';
        return `<div class="mmap-c ${store.cells[cellKey(v,p)] ? 'done' : 'has'}"></div>`;
      })
    ])
  ].join('');

  /* ---- 選んだ動詞の行 ---- */
  const page = TEXTBOOK.find(x => x.id === verb);
  const rows = PHRASALS.filter(x => x.v === verb);
  const cards = rows.map(ph => {
    const key  = cellKey(ph.v, ph.p);
    const open = !!store.cells[key];
    const cls  = 'pv-card ' + (open ? 'done' : 'hidden') + (sel === key ? ' sel' : '');
    return `<button class="${cls}" data-cell="${key}">
      <span class="p">${esc(verb)} ${esc(ph.p)}</span>
      <span class="m">${open ? esc(ph.short === ph.ja ? ph.ja : ph.ja) : 'タップして開く'}</span>
    </button>`;
  }).join('');

  /* ---- 選んだマスの詳細 ---- */
  let detail = '';
  if(sel){
    const [v,p] = sel.split('/');
    const ph = findPhrasal(v,p);
    const vp = TEXTBOOK.find(x => x.id === v), pp = TEXTBOOK.find(x => x.id === p);
    detail = `<div class="card mx-detail">
      <div class="formula"><b>${esc(v)}</b> × <b>${esc(p)}</b></div>
      <div class="cores">${esc(vp.core)} × ${esc(pp.core)}</div>
      <div class="mean">${esc(ph.ja)}</div>
      ${ph.note ? `<div class="note">${esc(ph.note)}</div>` : ''}
      <div class="sample">${esc(ph.en)}</div>
      <div class="mx-links">
        <button class="linkto" data-goto="${v}" data-sense="">📖 ${esc(v)}</button>
        <button class="linkto" data-goto="${p}" data-sense="">📖 ${esc(p)}</button>
      </div>
    </div>`;
  }

  const revealed = Object.keys(store.cells).length;
  return `
    <button class="backlink" data-back>← 教科書</button>
    <h1>句動詞マトリクス</h1>
    <p class="sub">${PHRASALS.length}個の熟語ではなく、${MATRIX_VERBS.length}＋${cols.length}個のコアの掛け算として見る</p>
    <div class="progress"><i style="width:${revealed / PHRASALS.length * 100}%"></i></div>
    <p class="sub" style="margin:-10px 0 12px">${revealed} / ${PHRASALS.length} マス</p>

    <div class="mmap-legend">
      <span><i style="background:var(--accent)"></i>開いた</span>
      <span><i style="background:var(--line)"></i>まだ</span>
      <span><i style="background:transparent;border:1px solid var(--line)"></i>使われない組み合わせ</span>
    </div>
    <div class="mmap-wrap">
      <div class="mmap" style="grid-template-columns:44px repeat(${cols.length}, 11px)">${map}</div>
    </div>
    <p class="sub" style="margin:8px 0 0; font-size:12px">
      ${esc(dead.join(' / '))} は句動詞をまったく作らない。前置詞ではあっても、動詞にくっつく副詞辞にはならないため。
    </p>

    <div class="vchips">
      ${MATRIX_VERBS.map(v => `<button class="vchip" data-verb="${v}"
        aria-current="${v === verb}">${esc(v)}<span class="n">${
          PHRASALS.filter(x => x.v === v).length}</span></button>`).join('')}
    </div>

    <p class="pv-head"><b>${esc(verb)}</b> ── ${esc(page.core)}　・　${rows.length}個</p>
    <div class="pv-grid">${cards}</div>
    ${detail}

    <button class="btn primary" data-quizphrasal style="margin-top:18px">
      句動詞${PHRASALS.length}個を演習する</button>
    <p class="sub" style="margin-top:8px">
      不変化詞を選ぶ・意味を選ぶ・動詞を選ぶの3つの形で出ます。
      誤答は同じ動詞か同じ不変化詞から引くので、消去法では解けません。</p>`;
}

/* ============================================================
   演習
   ============================================================ */
const KIND_LABEL = { core:'コア適用', fill:'用法穴埋め', meaning:'意味選択',
                     phrasal:'句動詞', spell:'スペル入力' };

/* どのページに属する問題かで絞れるようにする。
   「文法だけ集中的に」といった回し方ができると、学習の効率が変わる */
const PAGE_TYPE = new Map(TEXTBOOK.map(p => [p.id, p.type]));

/* 句動詞の「この○○はどの意味?」。手で書いた問題がない句動詞には、マトリクスから作る。
   誤答は同じ動詞のほかの句動詞の意味にする（不変化詞のコアを取り違えたら選ぶもの）。
   足りなければ同じ不変化詞、それでも足りなければ残りから引く */
const isMeaning = e => e.kind === 'phrasal' && e.question.includes('どの意味');
{
  const hasMeaning = new Set(EXERCISES.filter(isMeaning).map(e => e.id));
  PHRASALS.forEach(x => {
    const base = EXERCISES.find(e => e.id === `ph-${x.v}-${x.p}`);
    if(!base || hasMeaning.has(base.id)) return;
    const others = PHRASALS.filter(y => y !== x);
    const pool = [...shuffle(others.filter(y => y.v === x.v)), ...shuffle(others.filter(y => y.v !== x.v && y.p === x.p)),
                  ...shuffle(others.filter(y => y.v !== x.v && y.p !== x.p))];
    const choices = shuffle([x.ja, ...pool.slice(0, 3).map(y => y.ja)]);
    EXERCISES.push({ id:`phm-${x.v}-${x.p}`, kind:'phrasal', ref:base.ref, refSense:base.refSense,
      prompt:x.en, question:`この ${x.v} ${x.p} はどの意味?`, choices, answer:choices.indexOf(x.ja),
      explain:base.explain });
  });
}

const SCOPES = [{id:'all',label:'すべて'},{id:'particle',label:'不変化詞'},
                {id:'verb',label:'基本動詞'},{id:'phrasal',label:'句動詞'},{id:'phmean',label:'句動詞の意味'},
                {id:'grammar',label:'文法'},{id:'word',label:'紛らわしい語'}];

/* 句動詞の問題は、解説の飛び先として不変化詞・動詞のページを ref に持つ。
   絞り込みでは「句動詞」だけに属させる。両方に出すと、
   不変化詞を選んだつもりが句動詞ばかり出てくることになる */
const inScope = e => state.scope === 'all'
  || (state.scope === 'phmean' ? isMeaning(e)
    : state.scope === 'phrasal' ? e.kind === 'phrasal'
                                : e.kind !== 'phrasal' && PAGE_TYPE.get(e.ref) === state.scope);

function buildQueue(onlyWrong){
  const now = Date.now();
  let pool = EXERCISES.filter(e => {
    const t = store.rec[e.id];
    if(onlyWrong) return t && t.w > 0 && t.due <= now;   // 復習は範囲をまたいで拾う
    return inScope(e) && (!t || t.due <= now);
  });
  return { list: shuffle(pool).slice(0, sessionSize()), i:0, sel:null, right:0 };
}

function startQuiz(ref, onlyWrong){
  state.quiz = buildQueue(onlyWrong);
  if(ref) state.quiz.list = shuffle(EXERCISES.filter(e => e.ref === ref)).slice(0, sessionSize());
  state.quiz.i = 0; state.quiz.sel = null; state.quiz.right = 0;
}

/* 空欄は種類ではなく、文の中に ___ があるかで決める。
   句動詞の問題も穴埋めを使うので、kind で分けると取りこぼす */
function renderSentence(e){
  return esc(e.prompt).replace('___', '<span class="blank">____</span>');
}

/* 間違えた答えでも別の意味の文として成り立つときは、正解の文と並べて意味を見せる（data/exercise-alts.js） */
function compareMeaning(e, sel){
  const a = EX_ALT[e.id];
  if(!a || !a.alt[sel]) return '';
  const fill = c => esc(e.prompt).replace('___', '<b>' + esc(c) + '</b>');
  return `<div class="compare">
    <p><span class="tag ok">正解</span><span class="en">${fill(e.choices[e.answer])}</span><span class="ja">${esc(a.ja)}</span></p>
    <p><span class="tag ng">選んだ答え</span><span class="en">${fill(e.choices[sel])}</span><span class="ja">${esc(a.alt[sel])}</span></p>
  </div>`;
}

function viewQuiz(){
  const q = state.quiz;
  if(!q) return viewQuizStart();
  if(q.i >= q.list.length) return viewQuizDone();

  const e = q.list[q.i];
  const answered = q.sel !== null;
  const ok = answered && q.sel === e.answer;
  const isEn = c => /^[A-Za-z][A-Za-z '’-]*$/.test(c);
  const mono = e.kind === 'fill' || (e.kind === 'phrasal' && e.choices.every(isEn))
    ? ' mono' : '';

  return `
    <div class="progress"><i style="width:${(q.i / q.list.length) * 100}%"></i></div>
    <div class="q-meta">
      <span class="q-kind">${KIND_LABEL[e.kind]}</span>
      <span>${q.i + 1} / ${q.list.length}</span>
    </div>
    <div class="q-prompt"><div class="sent">${renderSentence(e)}</div></div>
    <p class="q-ask">${esc(e.question)}</p>

    ${e.choices.map((c, i) => {
      let cls = 'btn choice' + mono;
      if(answered && i === e.answer) cls += ' correct';
      else if(answered && i === q.sel) cls += ' wrong';
      return `<button class="${cls}" data-pick="${i}" ${answered ? 'disabled' : ''}>
        <span class="num">${i + 1}</span><span class="txt">${esc(c)}</span></button>`;
    }).join('')}

    ${answered ? `
      <div class="card" style="margin-top:14px">
        <div class="verdict ${ok ? 'ok' : 'ng'}" role="status" aria-live="polite">${
          ok ? '◎ 正解' : '✗ 不正解'}</div>
        ${!ok ? compareMeaning(e, q.sel) : ''}
        <p class="explain">${esc(e.explain)}</p>
        <button class="linkto" data-goto="${(e.jumpTo || e.ref + '/' + e.refSense).split('/')[0]}"
          data-sense="${(e.jumpTo || e.ref + '/' + e.refSense).split('/')[1]}">
          📖 ${e.jumpTo ? esc(e.jumpTo.split('/')[0]) + ' のコアで確認' : '教科書で確認'}</button>
      </div>
      <div class="sticky-next"><button class="btn primary" data-next>
        ${q.i + 1 < q.list.length ? '次へ' : '結果を見る'}</button></div>` : ''}`;
}

/* 達成度の小さなドーナツ。parts は [数, 色の変数, ラベル]、先頭を真ん中の % にする */
function donut(parts){
  const total = parts.reduce((n, p) => n + p[0], 0) || 1;
  const live = parts.filter(p => p[0]);
  let at = 0;
  const stops = live.map(([n, c]) => {
    const a = at, b = at += n / total * 360, g = live.length > 1 ? 2 : 0;
    return `var(${c}) ${a}deg ${b - g}deg, var(--surface) ${b - g}deg ${b}deg`;
  }).join(',') || 'var(--line) 0deg 360deg';
  return `<div class="donut-card">
    <div class="donut" style="background:conic-gradient(${stops})" role="img"
      aria-label="${parts.map(p => p[2] + ' ' + p[0]).join('、')}">
      <b>${Math.round(parts[0][0] / total * 100)}<small>%</small></b></div>
    <ul class="donut-legend">${parts.map(([n, c, l]) =>
      `<li><i style="background:var(${c})"></i>${l}<b>${n}</b></li>`).join('')}</ul>
  </div>`;
}
const recParts = ids => {
  const t = ids.map(id => store.rec[id] || {});
  const ok = t.filter(r => r.r > 0).length, ng = t.filter(r => !(r.r > 0) && r.w > 0).length;
  return [[ok, '--ok', '正解済み'], [ng, '--ng', '間違えたまま'], [ids.length - ok - ng, '--line', 'まだ解いていない']];
};

function viewQuizStart(){
  const now = Date.now();
  const scoped  = EXERCISES.filter(inScope);
  const due     = scoped.filter(e => { const t = store.rec[e.id]; return !t || t.due <= now; }).length;
  return `
    ${headRow('演習')}
    <p class="sub">誤答は「コアを取り違えたら選ぶもの」だけを並べています</p>

    <div class="seg scroll">${SCOPES.map(s => `<button data-scope="${s.id}"
      aria-current="${s.id === state.scope}">${s.label}</button>`).join('')}</div>

    ${donut(recParts(scoped.map(e => e.id)))}

    <div class="stat-row">
      <div class="stat"><b>${due}</b><span>いま出題できる</span></div>
      <div class="stat"><b>${scoped.length}</b><span>この範囲</span></div>
    </div>
    ${due ? `<button class="btn primary" data-start>${Math.min(due, sessionSize())}問はじめる</button>`
          : `<div class="empty"><span class="ic">✓</span>
               この範囲でいま出題できる問題はありません。<br>
               別の範囲を選ぶか、復習タブで間隔があくのを待ちます。</div>`}`;
}

function viewQuizDone(){
  const q = state.quiz, n = q.list.length;
  const pct = Math.round(q.right / n * 100);
  return `
    <div class="big">${pct === 100 ? '🎉' : pct >= 70 ? '👍' : '📖'}</div>
    <h1 class="center">${q.right} / ${n} 正解</h1>
    <p class="sub center">${
      pct === 100 ? 'コアが掴めています' :
      pct >= 70  ? '間違えた問題は復習に回りました' :
                   'もう一度 on のページを読むのがおすすめです'}</p>
    <button class="btn primary" data-startover style="margin-top:20px">続ける</button>
    <button class="btn" data-tab="book" style="margin-top:10px">📖 教科書を読む</button>`;
}

/* ============================================================
   単語 ── NGSL 上位1000語
   コアページを持つ語は、暗記ではなくそのページへ誘導する
   ============================================================ */
const BANDS = [
  { id:1, label:'1〜333位',    note:'最頻出' },
  { id:2, label:'334〜666位',  note:'頻出'   },
  { id:3, label:'667〜1000位', note:'基礎'   }
];
const V_MODES = [
  { id:'ja',    label:'英 → 日', note:'4択' },
  { id:'en',    label:'日 → 英', note:'4択' },
  { id:'spell', label:'スペル',  note:'入力' }
];
const bandOf = w => w[2] <= 333 ? 1 : w[2] <= 666 ? 2 : 3;
const vKey   = w => 'w:' + w[0];

/* src: 'due'（新しい語と間隔があいた語） / 'wrong'（復習タブから：帯をまたいで誤答だけ）
        / 'all'（この帯で一度でも解いた語を、間隔に関係なくもう一度） */
function buildVocabQueue(src){
  const now = Date.now();
  const pool = VOCAB.filter(w => {
    const t = store.rec[vKey(w)];
    if(src === 'wrong') return t && t.w > 0 && t.due <= now;
    if(bandOf(w) !== state.vBand) return false;
    return src === 'all' ? !!t : (!t || t.due <= now);
  });
  return { src, list: shuffle(pool).slice(0, sessionSize()), i:0, sel:null, right:0, typed:'', judged:false };
}

/* 4択の誤答は同じ帯から引く（難易度をそろえるため） */
function vocabChoices(w){
  const same = VOCAB.filter(x => bandOf(x) === bandOf(w) && x[0] !== w[0] && x[1] !== w[1]);
  const wrong = shuffle(same).slice(0, 3);
  return shuffle([w, ...wrong]);
}

function viewVocabStart(){
  const now = Date.now();
  const band = VOCAB.filter(w => bandOf(w) === state.vBand);
  const due  = band.filter(w => { const t = store.rec[vKey(w)]; return !t || t.due <= now; }).length;
  const withPage = band.filter(w => w[6]).length;
  const recs = band.map(w => store.rec[vKey(w)]).filter(Boolean);
  const answers = recs.reduce((n, t) => n + t.r + t.w, 0);
  return `
    ${headRow('単語')}
    ${vocabTabs()}
    <p class="sub">NGSL 頻度順の上位1000語</p>
    ${donut(recParts(VOCAB.map(vKey)))}
    <div class="stat-row">
      <div class="stat"><b>${due}</b><span>出題できる</span></div>
      <div class="stat"><b>${withPage}</b><span>コアページあり</span></div>
    </div>
    <div class="stat-row">
      <div class="stat"><b>${recs.length}<small> / ${band.length}</small></b><span>この帯で解いた語</span></div>
      <div class="stat"><b>${answers}</b><span>のべ回答数</span></div>
    </div>

    <div class="sec-label">どの帯を</div>
    <div class="seg">${BANDS.map(b => `<button data-vband="${b.id}" aria-current="${b.id === state.vBand}">
      ${b.label}<small>${b.note}</small></button>`).join('')}</div>

    <div class="sec-label">出題のしかた</div>
    <div class="seg">${V_MODES.map(m => `<button data-vmode="${m.id}" aria-current="${m.id === state.vMode}">
      ${m.label}<small>${m.note}</small></button>`).join('')}</div>

    ${state.vMode === 'spell' ? '' : `<div class="sec-label">選択肢</div>
    <div class="seg">${[{id:'off',label:'すぐ出す',note:'見て選ぶ'},
                        {id:'on', label:'考えてから',note:'押すと出る'}].map(o =>
      `<button data-set="hideChoices" data-val="${o.id}" aria-current="${o.id === (store.set.hideChoices ? 'on' : 'off')}">
      ${o.label}<small>${o.note}</small></button>`).join('')}</div>`}

    ${due ? `<button class="btn primary" data-vstart style="margin-top:6px">${
        Math.min(due, sessionSize())}語はじめる</button>`
          : `<div class="empty"><span class="ic">✓</span>
               この帯でいま出題できる語はありません。<br>別の帯を選ぶか、間隔があくのを待ちます。</div>`}
    ${recs.length ? `<button class="btn" data-vstartall style="margin-top:10px">
        解いた${recs.length}語から${Math.min(recs.length, sessionSize())}語を復習する</button>` : ''}

    <div class="card" style="margin-top:16px;color:var(--muted);font-size:13px;line-height:1.85">
      この1000語のうち<b style="color:var(--text)">66語</b>は、教科書にコアページを持っています。
      その語が出たときは暗記せず、<b style="color:var(--text)">コアから入る</b>ようにしてください。
      答え合わせの画面からそのページへ飛べます。
    </div>`;
}

function viewVocabDone(){
  const q = state.vocab, n = q.list.length;
  const pct = Math.round(q.right / n * 100);
  return `
    <div class="big">${pct === 100 ? '🎉' : pct >= 70 ? '👍' : '🔤'}</div>
    <h1 class="center">${q.right} / ${n} 正解</h1>
    <p class="sub center">間違えた語は復習に回りました</p>
    <button class="btn primary" ${q.src === 'all' ? 'data-vstartall' : 'data-vstart'} style="margin-top:20px">続ける</button>
    <button class="btn" data-tab="vocab" style="margin-top:10px">単語トップへ</button>`;
}

function viewVocab(){
  const q = state.vocab;
  if(!q) return viewVocabStart();
  if(q.i >= q.list.length) return viewVocabDone();

  const w = q.list[q.i];
  const mode = state.vMode;
  const answered = q.judged;
  const ok = answered && (mode === 'spell'
    ? q.typed.trim().toLowerCase() === w[0].toLowerCase()
    : q.sel === w[0]);

  /* 問題文。答え合わせのあとは、同じ情報を二度出さないよう作り分ける */
  let prompt, body;
  if(mode === 'ja'){
    prompt = `<div class="v-word">${esc(w[0])}</div><div class="v-ipa">${esc(w[5])}</div>`;
    body = `<div class="choices2">${q.choices.map(c => {
      let cls = 'btn choice';
      if(answered && c[0] === w[0]) cls += ' correct';
      else if(answered && c[0] === q.sel) cls += ' wrong';
      return `<button class="${cls}" data-vpick="${esc(c[0])}" ${answered ? 'disabled' : ''}>
        <span class="txt">${esc(c[1])}</span></button>`;
    }).join('')}</div>`;
  } else if(mode === 'en'){
    prompt = `<div class="v-ja">${esc(w[1])}</div>`;
    body = `<div class="choices2">${q.choices.map(c => {
      let cls = 'btn choice mono';
      if(answered && c[0] === w[0]) cls += ' correct';
      else if(answered && c[0] === q.sel) cls += ' wrong';
      return `<button class="${cls}" data-vpick="${esc(c[0])}" ${answered ? 'disabled' : ''}>
        <span class="txt">${esc(c[0])}</span></button>`;
    }).join('')}</div>`;
  } else {
    const blank = '_'.repeat(Math.max(3, w[0].length));
    const masked = esc(w[3]).replace(new RegExp('\\b' + w[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b','ig'),
                                     `<span class="v-blank">${blank}</span>`);
    prompt = `<div class="v-ja">${esc(w[1])}</div>`
           + (answered ? '' : `<div class="v-ex">${masked}<div class="ja">${esc(w[4])}</div></div>`);
    body = `<input class="v-input ${answered ? (ok ? 'ok' : 'ng') : ''}" id="vin"
       type="text" inputmode="latin" autocapitalize="off" autocorrect="off" spellcheck="false"
       value="${esc(q.typed)}" placeholder="英語を入力" ${answered ? 'disabled' : ''}>
      ${answered ? '' : '<button class="btn primary" data-vcheck style="margin-top:10px">答え合わせ</button>'}`;
  }

  /* 「考えてから」のときは、先に答えを思い浮かべてから選択肢を開く */
  if(mode !== 'spell' && store.set.hideChoices && !q.shown && !answered)
    body = `<button class="btn primary" data-vshow>選択肢を見る</button>`;

  /* 答え合わせ。英→日のときは問題文に単語が出ているので繰り返さない */
  const showWord = mode !== 'ja';
  const result = !answered ? '' : `
    <div class="card v-result">
      <div class="verdict ${ok ? 'ok' : 'ng'}" role="status" aria-live="polite">${
        ok ? '◎ 正解' : '✗ 不正解'}</div>
      ${showWord ? `<div class="v-word" style="font-size:1.375rem">${esc(w[0])}</div>
                    <div class="v-ipa">${esc(w[5])}</div>` : ''}
      ${vocabSenses(w)}
      ${w[6] ? `<button class="linkto" data-goto="${w[6]}" data-sense=""
          style="margin-top:10px">📖 この語はコアページがあります</button>` : ''}
    </div>`;

  return `
    <div class="progress"><i style="width:${(q.i / q.list.length) * 100}%"></i></div>
    <div class="q-meta">
      <span class="q-kind">${V_MODES.find(m => m.id === mode).label}</span>
      <span>${q.i + 1} / ${q.list.length}　・　${w[2]}位</span>
    </div>
    <div class="q-prompt${answered ? ' tight' : ''}">${prompt}</div>
    ${body}
    ${result}
    ${answered ? `<div class="sticky-next"><button class="btn primary" data-vnext>
        ${q.i + 1 < q.list.length ? '次へ' : '結果を見る'}</button></div>` : ''}
    ${answered ? vocabExtras(w) : ''}`;
}

/* 豆知識は「次へ」の下に置く。
   先へ進むための操作は常に画面内にあり、読み物は読みたい人だけが下へ送る。
   スクロールの意味が「進むため」から「読むため」に変わる */
/* 「次へ」の下に置く読み物。絵と豆知識。
   先へ進む操作は画面内に残し、見たい人だけが下へ送る */
function vocabExtras(w){
  const art = hasArt(w[0]) ? `<div class="wb-figure v-figure">${VOCAB_ART[w[0]]}</div>` : '';
  return art + vocabTrivia(w);
}

function vocabTrivia(w){
  const t = typeof VOCAB_TRIVIA !== 'undefined' ? VOCAB_TRIVIA[w[0]] : null;
  if(!t) return '';
  return `<div class="trivia v-trivia">
    <h4>⚡ ${esc(t[0])}</h4>
    <p>${esc(t[1])}</p>
  </div>`;
}

/* 意味ごとの例文。意味が1つなら1つだけ、複数あればその数だけ並べる */
function vocabSenses(w){
  const extra = typeof VOCAB_SENSES !== 'undefined' ? VOCAB_SENSES[w[0]] : null;
  if(!extra) return `
    <div class="v-ja" style="font-size:1rem;margin-top:6px">${esc(w[1])}</div>
    <div class="v-ex">${esc(w[3])}<div class="ja">${esc(w[4])}</div></div>`;
  return `<div class="v-senses">${extra.map(s => `
    <div class="v-sense">
      <div class="m">${esc(s[0])}</div>
      <div class="e">${esc(s[1])}</div>
      <div class="j">${esc(s[2])}</div>
    </div>`).join('')}</div>`;
}

/* ============================================================
   単語帳
   テストとは別に、1000語をただ眺めて調べられる場所。
   覚えているかを問われずに、意味・例文・豆知識・絵を見に行ける
   ============================================================ */
const V_FILTERS = [
  { id:'all',   label:'すべて' },
  { id:'new',   label:'未出題' },
  { id:'wrong', label:'間違えた' },
  { id:'done',  label:'正解済み' }
];

function wordState(w){
  const t = store.rec[vKey(w)];
  if(!t) return 'new';
  if(t.w > 0) return 'wrong';
  return t.r > 0 ? 'done' : 'new';
}

function filterWords(){
  const q = state.vq.trim().toLowerCase();
  return VOCAB.filter(w => {
    if(bandOf(w) !== state.vBand && !q) return false;   /* 検索中は帯をまたぐ */
    if(state.vFilter !== 'all' && wordState(w) !== state.vFilter) return false;
    if(!q) return true;
    return w[0].toLowerCase().includes(q) || w[1].includes(q)
        || w[3].toLowerCase().includes(q) || w[4].includes(q);
  });
}

const hasArt = word => typeof VOCAB_ART !== 'undefined' && !!VOCAB_ART[word];

function viewWordbook(){
  const list = filterWords();
  const seg = (items, cur, key) => `<div class="seg scroll">${items.map(it => `
    <button data-${key}="${it.id}" aria-current="${String(it.id) === String(cur)}">${it.label}</button>`).join('')}</div>`;

  return `
    ${headRow('単語')}
    ${vocabTabs()}

    <div class="searchbox">
      <span class="mag" aria-hidden="true">🔍</span>
      <input id="vq" type="search" inputmode="search" autocapitalize="off" autocorrect="off"
        placeholder="単語・訳・例文から探す" value="${esc(state.vq)}">
      ${state.vq ? '<button class="clear" data-clearvq aria-label="消す">✕</button>' : ''}
    </div>

    ${state.vq ? '' : seg(BANDS.map(b => ({ id:b.id, label:b.label })), state.vBand, 'vband')}
    ${seg(V_FILTERS, state.vFilter, 'vfilter')}

    <p class="sub" style="margin:2px 0 12px">${list.length}語${
      state.vq ? '（検索中は帯をまたいで探します）' : ''}</p>

    ${list.length ? list.map(w => wordRow(w)).join('')
      : `<div class="empty"><span class="ic">🔍</span>該当する語がありません。</div>`}`;
}

function wordRow(w){
  const open = state.vOpen === w[0];
  const st = wordState(w);
  const dot = { new:'', wrong:'ng', done:'ok' }[st];
  return `<div class="wb ${open ? 'open' : ''}">
    <button class="wb-head" data-word="${esc(w[0])}">
      <span class="wb-rank ${dot}">${w[2]}</span>
      <span class="wb-main">
        <b>${esc(w[0])}</b>
        <span class="wb-ja">${esc(w[1])}</span>
      </span>
      <span class="wb-caret">${open ? '▲' : '▼'}</span>
    </button>
    ${open ? `<div class="wb-body">
      ${hasArt(w[0]) ? `<div class="wb-figure">${VOCAB_ART[w[0]]}</div>` : ''}
      <div class="wb-ipa">${esc(w[5])}</div>
      ${vocabSenses(w)}
      ${w[6] ? `<button class="linkto" data-goto="${w[6]}" data-sense=""
          style="margin-top:10px">📖 この語はコアページがあります</button>` : ''}
      ${vocabTrivia(w)}
    </div>` : ''}
  </div>`;
}

/* テストと単語帳の切り替え */
const vocabTabs = () => `<div class="seg" style="margin-bottom:14px">
  <button data-vtab="test" aria-current="${state.vTab === 'test'}">テスト</button>
  <button data-vtab="book" aria-current="${state.vTab === 'book'}">単語帳</button>
</div>`;

/* ============================================================
   復習
   ============================================================ */
function viewReview(){
  const now = Date.now();
  const wrongEx = EXERCISES.filter(e => (store.rec[e.id]||{}).w > 0);
  const wrongV  = VOCAB.filter(w => (store.rec[vKey(w)]||{}).w > 0);
  const dueEx   = wrongEx.filter(e => store.rec[e.id].due <= now);
  const dueV    = wrongV.filter(w => store.rec[vKey(w)].due <= now);

  if(!wrongEx.length && !wrongV.length) return `
    ${headRow('復習')}
    <div class="empty"><span class="ic">🔁</span>
      間違えた問題と単語がここに溜まります。<br>正解するたびに次回の間隔が延びます。</div>`;

  const row = (title, sub, t) => {
    const left = Math.max(0, Math.ceil((t.due - now) / DAY));
    return `<div class="card" style="padding:12px 15px">
      <div style="font-family:Georgia,serif;font-size:15px">${title}</div>
      <div style="font-size:12px;color:var(--muted);margin-top:4px">
        ${sub} ・ 誤 ${t.w} / 正 ${t.r} ・
        ${left ? `あと ${left} 日` : '<span style="color:var(--accent)">出題できます</span>'}
      </div></div>`;
  };

  return `
    ${headRow('復習')}
    <p class="sub">間隔反復：0日 → 1 → 3 → 7 → 21 → 60日</p>
    <div class="stat-row">
      <div class="stat"><b>${wrongEx.length}</b><span>演習</span></div>
      <div class="stat"><b>${wrongV.length}</b><span>単語</span></div>
      <div class="stat"><b>${dueEx.length + dueV.length}</b><span>いま出せる</span></div>
    </div>
    ${dueEx.length ? `<button class="btn primary" data-startwrong style="margin-bottom:8px">
      演習を ${Math.min(dueEx.length, sessionSize())}問 復習する</button>` : ''}
    ${dueV.length ? `<button class="btn primary" data-vstartwrong style="margin-bottom:16px">
      単語を ${Math.min(dueV.length, sessionSize())}語 復習する</button>` : ''}

    ${wrongEx.length ? `<div class="sec-label">演習</div>` : ''}
    ${wrongEx.map(e => row(renderSentence(e), KIND_LABEL[e.kind], store.rec[e.id])).join('')}

    ${wrongV.length ? `<div class="sec-label">単語</div>` : ''}
    ${wrongV.map(w => row(esc(w[0]) + ' <span style="font-family:inherit;font-size:13px;color:var(--muted)">'
        + esc(w[1]) + '</span>', w[2] + '位', store.rec[vKey(w)])).join('')}`;
}

/* ============================================================
   設定
   見た目（テーマ・文字の大きさ・色）と、学習の進め方をここで変える。
   変更はすぐ画面に反映し、保存もその場で行う
   ============================================================ */
function viewSettings(){
  const s = store.set;
  const seg = (name, items, cur, key) => `<div class="seg">${items.map(it => `
    <button data-set="${key}" data-val="${it.id}" aria-current="${String(it.id) === String(cur)}">
      ${it.label}${it.note ? `<small>${it.note}</small>` : ''}</button>`).join('')}</div>`;

  const doneEx = EXERCISES.filter(e => (store.rec[e.id]||{}).r > 0).length;
  const doneV  = VOCAB.filter(w => (store.rec[vKey(w)]||{}).r > 0).length;
  const doneC  = Object.keys(store.cells).length;

  return `<div class="overlay" data-close>
    <div class="sheet" role="dialog" aria-label="設定">
      <div class="sheet-head">
        <h2>設定</h2>
        <button class="icon-btn" data-close aria-label="閉じる">✕</button>
      </div>

      <div class="set-group">
        <div class="set-label">明るさ</div>
        ${seg('theme', THEMES, s.theme, 'theme')}
      </div>

      <div class="set-group">
        <div class="set-label">文字の大きさ</div>
        ${seg('fs', FONTS, s.fs, 'fs')}
      </div>

      <div class="set-group">
        <div class="set-label">色</div>
        <div class="swatches">${ACCENTS.map(c => `
          <button class="swatch" data-set="accent" data-val="${c.id}"
            aria-current="${c.id === s.accent}" aria-label="${c.label}">
            <i style="background:${ACCENT_HEX[c.id][isDark() ? 1 : 0]}"></i></button>`).join('')}</div>
        <div class="set-preview">
          <div class="en">a picture <em>on</em> the wall</div>
          <div class="ja">壁にかかった絵</div>
          <span class="tag">コア：接触</span>
        </div>
      </div>

      <div class="set-group">
        <div class="set-label">1回に出す数　<b>${s.size}問／語</b></div>
        ${seg('size', SIZES.map(n => ({ id:n, label:n + '問' })), s.size, 'size')}
      </div>

      <div class="set-group">
        <div class="set-label">正解・不正解のときに音を鳴らす</div>
        ${seg('sound', [{id:'on',label:'オン'},{id:'off',label:'オフ'}],
              s.sound ? 'on' : 'off', 'sound')}
        <p class="set-note">マナーモードでも鳴る端末があります。</p>
      </div>

      <div class="set-group">
        <div class="set-label">正解・不正解のときに震わせる</div>
        ${seg('haptics', [{id:'on',label:'オン'},{id:'off',label:'オフ'}],
              s.haptics ? 'on' : 'off', 'haptics')}
      </div>

      <div class="set-group">
        <div class="set-label">学習の記録</div>
        <div class="stat-row">
          <div class="stat"><b>${doneEx}</b><span>解いた問題</span></div>
          <div class="stat"><b>${doneV}</b><span>覚えた単語</span></div>
          <div class="stat"><b>${doneC}</b><span>開いたマス</span></div>
        </div>
        <button class="btn danger" data-reset>記録をすべて消す</button>
      </div>

      <div class="set-group">
        <div class="set-label">このアプリを人に教える</div>
        <button class="btn share" data-wak="share">
          <span class="ic">🔗</span><span>共有する</span></button>
      </div>

      <p class="set-src">単語リストと頻度順：<a href="https://www.newgeneralservicelist.com/" target="_blank" rel="noopener">New General Service List</a>（Browne, C., Culligan, B. &amp; Phillips, J.）<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja" target="_blank" rel="noopener">CC BY-SA 4.0</a>。上位1000語を抜き出し、訳・例文・発音記号を加えた単語データも CC BY-SA 4.0 です。<br>
        発音記号：<a href="https://github.com/open-dict-data/ipa-dict" target="_blank" rel="noopener">ipa-dict</a>（MIT）</p>

      <p class="set-credit"><a href="/">T.OF...</a> のアプリ・<a href="https://t-of.github.io/contact/">問い合わせ</a></p>
    </div></div>`;
}

/* 見本の色玉に出す実際の色。CSS 側の定義と合わせてある（明るい側, 暗い側） */
const ACCENT_HEX = {
  orange:['#b4531f','#ff9a5c'], blue:['#1f62b4','#6aa9ff'], green:['#2c7a53','#5fd39a'],
  purple:['#6b46b0','#b18aff'], pink:['#b33a72','#ff86b4']
};
const isDark = () => store.set.theme === 'dark' ||
  (store.set.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);

function viewConfirmReset(){
  return `<div class="overlay" data-close>
    <div class="sheet" role="dialog" aria-label="確認">
      <div class="sheet-head"><h2>記録をすべて消しますか</h2></div>
      <p class="explain">解いた問題、覚えた単語、開いたマス、復習の予定が
        すべて消えます。元には戻せません。設定（明るさ・文字の大きさ・色）は残ります。</p>
      <button class="btn danger" data-reset-yes>消す</button>
      <button class="btn" data-close style="margin-top:9px">やめる</button>
    </div></div>`;
}

/* ============================================================
   ルーティング
   ============================================================ */
/* 該当の派生へスクロールし、一瞬ハイライトする */
function jumpTo(senseId){
  const el = document.getElementById('s-' + senseId);
  if(!el) return;
  el.scrollIntoView({ block:'start', behavior:'smooth' });
  el.classList.add('focus');
  clearTimeout(jumpTo._t);
  jumpTo._t = setTimeout(() => el.classList.remove('focus'), 1800);
}

/* スクロール位置に応じて、いまどの派生を読んでいるかをチップに反映 */
function watchSenses(){
  const chips = document.querySelectorAll('.chip');
  if(!chips.length) return;
  const bar  = document.getElementById('chips');
  const view = document.getElementById('view');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const id = e.target.id.slice(2);
      chips.forEach(c => c.setAttribute('aria-current', String(c.dataset.jump === id)));
      const active = document.querySelector('.chip[aria-current="true"]');
      if(active && bar) bar.scrollTo({ left: active.offsetLeft - 60, behavior:'smooth' });
    });
  }, { root: view, rootMargin:'-58px 0px -65% 0px' });
  document.querySelectorAll('.sense').forEach(el => io.observe(el));
  const onScroll = () => bar && bar.classList.toggle('stuck', view.scrollTop > 0);
  view.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

/* 次に開いたとき、前に見ていたところから始められるようにする。
   演習や単語の途中の1問までは覚えない（途中再開はかえって迷う）。
   開いているあいだのタブの行き来では、途中の問題も残す（上の data-tab） */
function rememberPlace(){
  const l = { tab: state.tab, page: state.page, cat: state.cat };
  if(JSON.stringify(l) !== JSON.stringify(store.last)){ store.last = l; save(); }
}

/* いまどの画面を見ているかを表す鍵。
   これが変わらない更新（行を開く、答えを選ぶ、マスを選ぶ）は
   「同じ画面の中の出来事」なので、スクロール位置をそのまま保つ。
   変わったときだけ移動とみなし、その画面を前に見ていた位置から始める。

   鍵に入れないもの: vOpen（単語帳の開閉）、cell（マトリクスの選択）、
   quiz.sel / vocab.judged（答えたかどうか）、panel（設定の開閉） */
function screenKey(){
  if(state.tab === 'book'){
    if(state.page) return 'book:' + state.page;
    return 'booklist:' + state.cat + ':' + state.q;
  }
  if(state.tab === 'quiz')
    return state.quiz ? 'quiz:' + state.quiz.i : 'quiztop:' + state.scope;
  if(state.tab === 'vocab'){
    if(state.vocab) return 'vocabq:' + state.vocab.i;
    if(state.vTab === 'book') return 'wordbook:' + state.vBand + ':' + state.vFilter + ':' + state.vq;
    return 'vocabtop';
  }
  return 'review';
}
let lastKey = null;
const scrollMemo = {};

function render(){
  const viewEl = $('#view');
  const prevKey = lastKey;
  const prevTop = viewEl ? viewEl.scrollTop : 0;

  let html;
  if(state.tab === 'book')        html = state.page === MATRIX_ID ? viewMatrix()
                                       : state.page ? viewBookPage(state.page) : viewBookList();
  else if(state.tab === 'quiz')   html = viewQuiz();
  else if(state.tab === 'vocab')  html = state.vocab ? viewVocab()
                                       : state.vTab === 'book' ? viewWordbook() : viewVocab();
  else                            html = viewReview();
  /* 別の画面に移るときは #view を作り直す。iPhone の Safari では、スクロールした要素の中身を
     入れ替えて scrollTop を戻すと、押せる位置が前のスクロール分ずれたまま残り、
     下のほうのボタン（演習の 4 つ目など）が押せなくなることがあるため */
  if(screenKey() !== prevKey && viewEl) viewEl.replaceWith(viewEl.cloneNode(false));
  $('#view').innerHTML = html;
  $('#panel').innerHTML = state.panel === 'settings' ? viewSettings()
                        : state.panel === 'reset'    ? viewConfirmReset() : '';

  document.querySelectorAll('#tabs button').forEach(b =>
    b.setAttribute('aria-selected', b.dataset.tab === state.tab));
  rememberPlace();

  /* 画面が変わっていなければその場に留まる。
     innerHTML を入れ替えると中身ごと作り直されて 0 に戻るので、明示的に書き戻す */
  const key = screenKey();
  if(key === prevKey){
    $('#view').scrollTop = prevTop;
  }else{
    if(prevKey !== null) scrollMemo[prevKey] = prevTop;
    $('#view').scrollTop = scrollMemo[key] || 0;
  }
  lastKey = key;

  const vin = document.getElementById('vin');
  if(vin && !vin.disabled) vin.focus();

  /* ジャンルのタブが上に貼りついたら、下に境界線を出して浮いていることを示す */
  const cats = $('.seg.cats'), view = $('#view');
  if(cats && view){
    const onScroll = () => cats.classList.toggle('stuck', view.scrollTop > 0);
    view.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  }

  /* 検索欄は描き直すと中身ごと作り直されるので、入力位置を戻しておく */
  const q = document.getElementById('q');
  if(q && state.qFocus){ q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
  const vq = document.getElementById('vq');
  if(vq && state.vqFocus){ vq.focus(); vq.setSelectionRange(vq.value.length, vq.value.length); }
  if(state.tab === 'book' && state.page && state.page !== MATRIX_ID){
    watchSenses();
    if(state.focusSense){ jumpTo(state.focusSense); state.focusSense = null; }
  }
}

/* 検索は打つたびに絞り込む。変換中（日本語入力の途中）は反応させない */
document.addEventListener('input', ev => {
  if(ev.target.id === 'vq'){
    if(ev.isComposing) return;
    state.vq = ev.target.value; state.vqFocus = true; state.vOpen = null; render(); return;
  }
  if(ev.target.id !== 'q') return;
  if(ev.isComposing) return;
  state.q = ev.target.value;
  state.qFocus = true;
  render();
});
document.addEventListener('compositionend', ev => {
  if(ev.target.id === 'vq'){ state.vq = ev.target.value; state.vqFocus = true; render(); return; }
  if(ev.target.id !== 'q') return;
  state.q = ev.target.value; state.qFocus = true; render();
});

document.addEventListener('click', ev => {
  const t = ev.target.closest('[data-tab],[data-open],[data-back],[data-pick],[data-next],' +
    '[data-start],[data-startover],[data-startwrong],[data-goto],[data-quizref],[data-jump],'+
    '[data-quizphrasal],'+
    '[data-cell],[data-verb],[data-vband],[data-vmode],[data-vstart],[data-vpick],'+
    '[data-vcheck],[data-vnext],[data-vshow],[data-vstartwrong],[data-vstartall],'+
    '[data-panel],[data-close],[data-set],[data-reset],[data-reset-yes],[data-clearq],'+
    '[data-scope],[data-cat],[data-vtab],[data-word],[data-vfilter],[data-clearvq]');
  if(!t) return;
  const d = t.dataset;

  if(d.jump){ jumpTo(d.jump); return; }   // 再描画するとスクロール位置が飛ぶ

  if(d.clearq !== undefined){ state.q = ''; state.qFocus = true; render(); return; }
  if(d.panel){ state.panel = d.panel; render(); return; }
  if(d.close !== undefined){
    /* 背景を押したときだけ閉じる。シートの中を押しても閉じないようにする */
    if(t.classList.contains('overlay') && ev.target !== t) return;
    state.panel = state.panel === 'reset' ? 'settings' : null; render(); return;
  }
  if(d.set){
    const v = d.val;
    if(d.set === 'theme')   store.set.theme  = v;
    if(d.set === 'accent')  store.set.accent = v;
    if(d.set === 'fs')      store.set.fs     = +v;
    if(d.set === 'size')    store.set.size   = +v;
    if(d.set === 'sound'){ store.set.sound = v === 'on'; play('ok'); }
    if(d.set === 'hideChoices') store.set.hideChoices = v === 'on';
    if(d.set === 'haptics'){ store.set.haptics = v === 'on'; buzz(true); }
    save(); applySettings(); render(); return;
  }
  if(d.reset !== undefined){ state.panel = 'reset'; render(); return; }
  if(d.resetYes !== undefined){
    store.rec = {}; store.cells = {}; store.last = null; save();
    state.panel = null; state.quiz = null; state.vocab = null;
    state.tab = 'book'; state.page = null; render(); return;
  }

  /* ほかのタブへ移るときは、各タブの途中（開いていたページ、解いていた問題）を残す。
     戻ったらそこから続けられる。いま開いているタブをもう一度押したときだけトップに戻る */
  if(d.tab !== undefined){
    if(d.tab === state.tab){ state.page = null; if(d.tab === 'vocab') state.vocab = null; }
    state.tab = d.tab;
  }
  else if(d.open)         { state.page = d.open; state.cell = null; state.qFocus = false; }
  else if(d.back !== undefined){ state.page = null; }
  else if(d.quizref)      { state.tab = 'quiz'; startQuiz(d.quizref); }
  else if(d.quizphrasal !== undefined){
    state.tab = 'quiz'; state.scope = 'phrasal'; startQuiz(null, false); }
  else if(d.start !== undefined || d.startover !== undefined){ startQuiz(null, false); }
  else if(d.startwrong !== undefined){ startQuiz(null, true); }
  else if(d.goto)         { state.tab = 'book'; state.page = d.goto; state.focusSense = d.sense || null; }
  else if(d.pick !== undefined){
    const q = state.quiz, e = q.list[q.i];
    if(q.sel !== null) return;
    q.sel = +d.pick;
    const ok = q.sel === e.answer;
    if(ok) q.right++;
    grade(e.id, ok); feedback(ok);
  }
  else if(d.next !== undefined){
    state.quiz.i++; state.quiz.sel = null;
    if(state.quiz.i >= state.quiz.list.length) play('done');
  }
  else if(d.cell)         { state.cell = d.cell; store.cells[d.cell] = 1; save(); }
  else if(d.verb)         { state.mxVerb = d.verb; state.cell = null; }
  else if(d.scope)        { state.scope = d.scope; state.quiz = null; }
  else if(d.cat)          { state.cat = d.cat; }
  else if(d.vtab)         { state.vTab = d.vtab; state.vocab = null; state.vOpen = null; }
  else if(d.word)         { state.vOpen = state.vOpen === d.word ? null : d.word; }
  else if(d.vfilter)      { state.vFilter = d.vfilter; state.vOpen = null; }
  else if(d.clearvq !== undefined){ state.vq = ''; state.vqFocus = true; }
  else if(d.vband)        { state.vBand = +d.vband; state.vocab = null; state.vOpen = null; }
  else if(d.vmode)        { state.vMode = d.vmode;  state.vocab = null; }
  else if(d.vstart !== undefined || d.vstartwrong !== undefined || d.vstartall !== undefined){
    const src = d.vstartwrong !== undefined ? 'wrong' : d.vstartall !== undefined ? 'all' : 'due';
    state.vocab = buildVocabQueue(src);
    if(src === 'wrong'){ state.tab = 'vocab'; state.vTab = 'test'; }
    if(state.vocab.list.length) state.vocab.choices = vocabChoices(state.vocab.list[0]);
  }
  else if(d.vpick){
    const q = state.vocab; if(q.judged) return;
    q.sel = d.vpick; q.judged = true;
    const w = q.list[q.i], ok = q.sel === w[0];
    if(ok) q.right++;
    grade(vKey(w), ok); feedback(ok);
  }
  else if(d.vcheck !== undefined){
    const q = state.vocab; if(q.judged) return;
    const el = document.getElementById('vin');
    q.typed = el ? el.value : '';
    q.judged = true;
    const w = q.list[q.i];
    const ok = q.typed.trim().toLowerCase() === w[0].toLowerCase();
    if(ok) q.right++;
    grade(vKey(w), ok); feedback(ok);
  }
  else if(d.vshow !== undefined){ state.vocab.shown = true; }
  else if(d.vnext !== undefined){
    const q = state.vocab;
    q.i++; q.sel = null; q.typed = ''; q.judged = false; q.shown = false;
    if(q.i < q.list.length) q.choices = vocabChoices(q.list[q.i]);
    else play('done');
  }

  render();
});

applySettings();

/* 前回の続きから開く。ページが消えている場合もあるので存在を確かめる */
if(store.last){
  const { tab, page } = store.last;
  if(['book','quiz','vocab','review'].includes(tab)) state.tab = tab;
  if(page && (page === MATRIX_ID || TEXTBOOK.some(p => p.id === page))) state.page = page;
  if(store.last.cat && TYPE_SECTION.some(s => s.type === store.last.cat)) state.cat = store.last.cat;
}
render();
