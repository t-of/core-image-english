/* 単語のイメージ図（追加分 2）。書き方は vocab-art.js と同じ */
Object.assign(VOCAB_ART, (() => {
  const A = b => `<svg viewBox="0 0 240 140" role="img">${b}</svg>`;
  const SP2 = '<line x1="120" y1="8" x2="120" y2="132" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 5"/>';
  const LB = (x, y, t) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="11"
    fill="var(--muted)" font-family="-apple-system,sans-serif">${t}</text>`;
  /* 矢印: 始点から終点、先端に三角 */
  const ARW = (x1,y1,x2,y2,c='var(--accent)',w=3) => {
    const ang = Math.atan2(y2-y1,x2-x1);
    const hx = x2-10*Math.cos(ang), hy = y2-10*Math.sin(ang);
    const p = ang+Math.PI/2;
    const lx=(hx+6*Math.cos(p)).toFixed(1), ly=(hy+6*Math.sin(p)).toFixed(1);
    const rx=(hx-6*Math.cos(p)).toFixed(1), ry=(hy-6*Math.sin(p)).toFixed(1);
    return `<line x1="${x1}" y1="${y1}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>
      <path d="M${x2} ${y2} L${lx} ${ly} L${rx} ${ry} Z" fill="${c}"/>`;
  };
  /* 簡単な人のアイコン(頭+胴) */
  const PS = (x,y,c='var(--accent)',op=1) =>
    `<circle cx="${x}" cy="${y-22}" r="10" fill="${c}" opacity="${op}"/><rect x="${x-13}" y="${y-11}" width="26" height="34" rx="9" fill="${c}" opacity="${op}"/>`;
  /* 横いっぱいの時間軸 */
  const TLW = y => `<line x1="16" y1="${y}" x2="224" y2="${y}" stroke="var(--muted)" stroke-width="2" opacity=".5"/>`;
  /* 半分幅の時間軸(SP2使用時) */
  const TLH = (x0,x1,y) => `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="var(--muted)" stroke-width="2" opacity=".5"/>`;

  return {

  /* ---------- 最頻出の機能語・基本動詞 ---------- */
  be: A(`
    <circle cx="70" cy="66" r="30" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="5 5" opacity=".6"/>
    ${LB(70,120,'まだ無い')}
    ${ARW(112,66,150,66)}
    <circle cx="182" cy="66" r="30" fill="var(--accent)"/>
    ${LB(182,120,'ある・である')}`),
  and: A(`
    <circle cx="76" cy="66" r="30" fill="var(--accent)"/>
    <circle cx="164" cy="66" r="30" fill="var(--accent)" opacity=".7"/>
    <rect x="98" y="58" width="44" height="16" rx="8" fill="var(--muted)"/>
    ${LB(120,120,'そして・つなぐ')}`),
  of: A(`
    <circle cx="120" cy="62" r="46" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
    <path d="M120 62 L120 16 A46 46 0 0 1 160 84 Z" fill="var(--accent)"/>
    ${LB(120,124,'全体の一部')}`),
  to: A(`
    <circle cx="30" cy="66" r="10" fill="var(--muted)" opacity=".6"/>
    ${ARW(46,66,190,66)}
    <circle cx="206" cy="66" r="10" fill="var(--accent)"/>
    ${LB(120,120,'〜へ（到達する先）')}`),
  a: A(`
    <circle cx="120" cy="60" r="26" fill="var(--accent)"/>
    <text x="120" y="68" text-anchor="middle" font-size="22" fill="var(--bg)" font-family="-apple-system,sans-serif">1</text>
    ${LB(120,120,'ひとつの（不特定）')}`),
  in: A(`
    <rect x="46" y="30" width="148" height="76" rx="10" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="68" r="12" fill="var(--accent)"/>
    ${LB(120,124,'〜の中に')}`),
  have: A(`
    ${PS(120,96)}
    <rect x="107" y="52" width="26" height="20" rx="4" fill="var(--bg)" opacity=".85"/>
    ${LB(120,124,'持っている')}`),
  it: A(`
    <rect x="30" y="40" width="52" height="40" rx="6" fill="var(--accent)" opacity=".5"/>
    ${LB(56,120,'（前に出た物）')}
    ${ARW(150,60,96,60)}
    <rect x="150" y="40" width="52" height="40" rx="6" fill="var(--muted)" opacity=".3"/>
    ${LB(176,120,'それ（指す）')}`),
  you: A(`
    ${PS(120,96)}
    ${ARW(120,26,120,60,'var(--muted)',2.5)}
    ${LB(120,124,'あなた（話しかける相手）')}`),
  he: A(`
    ${PS(120,96)}
    <rect x="112" y="46" width="16" height="10" rx="2" fill="var(--bg)"/>
    ${LB(120,124,'彼（男性ひとり）')}`),
  for: A(`
    ${ARW(30,80,178,44)}
    <circle cx="196" cy="38" r="16" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="196" cy="38" r="6" fill="var(--accent)"/>
    ${LB(120,120,'〜のために（目的地）')}`),
  they: A(`
    ${[70,120,170].map(x=>PS(x,90,'var(--accent)',x===120?1:.6)).join('')}
    ${LB(120,124,'彼ら・それら（複数）')}`),
  not: A(`
    <circle cx="120" cy="62" r="42" fill="none" stroke="var(--accent)" stroke-width="6"/>
    <line x1="90" y1="32" x2="150" y2="92" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(120,124,'〜でない（打ち消し）')}`),
  that: A(`
    <circle cx="40" cy="70" r="10" fill="var(--muted)" opacity=".6"/>
    ${ARW(56,66,200,40)}
    <circle cx="212" cy="34" r="12" fill="var(--accent)"/>
    ${LB(120,120,'あれ（遠くを指す）')}`),
  we: A(`
    ${[80,120,160].map(x=>PS(x,90)).join('')}
    <path d="M74 100 q46 26 92 0" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4"/>
    ${LB(120,124,'私たち（自分を含む）')}`),
  on: A(`
    <rect x="40" y="86" width="160" height="16" rx="4" fill="var(--muted)" opacity=".5"/>
    <rect x="80" y="46" width="80" height="40" rx="6" fill="var(--accent)"/>
    ${LB(120,120,'〜の上に（接して）')}`),
  with: A(`
    <circle cx="86" cy="66" r="28" fill="var(--accent)"/>
    <circle cx="154" cy="66" r="28" fill="var(--accent)" opacity=".65"/>
    <rect x="108" y="58" width="24" height="16" rx="8" fill="var(--muted)"/>
    ${LB(120,120,'〜と一緒に')}`),
  this: A(`
    <circle cx="120" cy="66" r="22" fill="var(--accent)"/>
    ${[0,60,120,180,240,300].map(a=>{const r=a*Math.PI/180;
      return `<line x1="${120+30*Math.cos(r)}" y1="${66+30*Math.sin(r)}" x2="${120+42*Math.cos(r)}" y2="${66+42*Math.sin(r)}" stroke="var(--muted)" stroke-width="2"/>`}).join('')}
    ${LB(120,124,'これ・この（近い）')}`),
  i: A(`
    ${PS(120,96)}
    <path d="M120 20 q-30 10 -20 40" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4"/>
    <circle cx="98" cy="58" r="3" fill="var(--muted)"/>
    ${LB(120,124,'私（話し手自身）')}`),
  do: A(`
    <circle cx="120" cy="60" r="26" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M120 60 l14 -14 M120 60 l0 -20" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="120" cy="60" r="5" fill="var(--accent)"/>
    ${LB(120,120,'する（行動を起こす）')}`),
  as: A(`
    <rect x="30" y="46" width="60" height="34" rx="6" fill="var(--accent)"/>
    <text x="112" y="70" text-anchor="middle" font-size="20" fill="var(--muted)">=</text>
    <rect x="140" y="46" width="60" height="34" rx="6" fill="var(--accent)"/>
    ${LB(120,120,'〜として・〜のように（同じ）')}`),
  at: A(`
    <path d="M120 30 q28 0 28 30 q0 24 -28 52 q-28 -28 -28 -52 q0 -30 28 -30 z" fill="var(--accent)"/>
    <circle cx="120" cy="60" r="9" fill="var(--bg)"/>
    ${LB(120,124,'〜で（決まった一点）')}`),
  she: A(`
    ${PS(120,96)}
    <path d="M107 46 q13 -14 26 0" fill="none" stroke="var(--bg)" stroke-width="3"/>
    ${LB(120,124,'彼女（女性ひとり）')}`),
  but: A(`
    ${ARW(40,44,110,44,'var(--ok)')}
    ${ARW(40,90,110,90,'var(--accent)')}
    <line x1="120" y1="20" x2="120" y2="112" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4"/>
    ${LB(60,124,'思っていた向き')}
    ${LB(180,124,'しかし逆に')}`),
  from: A(`
    <circle cx="46" cy="66" r="14" fill="var(--accent)"/>
    ${ARW(60,66,206,66)}
    ${LB(120,120,'〜から（出発点）')}`),
  by: A(SP2 + `
    ${PS(52,90)}
    ${ARW(78,70,104,50)}
    ${LB(61,120,'〜によって（する人）')}
    <circle cx="160" cy="70" r="10" fill="var(--muted)" opacity=".6"/>
    <circle cx="196" cy="70" r="10" fill="var(--accent)"/>
    ${LB(180,120,'〜のそばに')}`),
  will: A(`
    ${TLW(96)}
    <circle cx="70" cy="96" r="6" fill="var(--muted)"/>
    ${LB(70,120,'今')}
    ${ARW(84,96,190,96)}
    <rect x="176" y="66" width="40" height="24" rx="4" fill="var(--accent)" opacity=".4"/>
    ${LB(196,58,'これから')}`),
  or: A(`
    <circle cx="120" cy="40" r="9" fill="var(--muted)"/>
    <path d="M120 48 L70 92" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 48 L170 92" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="70" cy="98" r="14" fill="var(--accent)"/>
    <circle cx="170" cy="98" r="14" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'または（どちらか）')}`),
  say: A(`
    ${PS(70,104)}
    <ellipse cx="150" cy="50" rx="52" ry="28" fill="var(--accent)"/>
    <path d="M112 62 L86 80 L124 72 Z" fill="var(--accent)"/>
    <text x="150" y="58" text-anchor="middle" font-size="26" fill="var(--bg)"
      font-family="-apple-system,sans-serif">…</text>
    ${LB(150,124,'言う')}`),
  go: A(`
    ${PS(70,90)}
    ${ARW(96,80,190,50)}
    ${LB(120,120,'行く（離れていく）')}`),
  so: A(SP2 + `
    <circle cx="40" cy="70" r="8" fill="var(--muted)"/>
    ${ARW(54,70,96,70)}
    <circle cx="110" cy="70" r="12" fill="var(--accent)"/>
    ${LB(61,120,'だから（結果）')}
    <rect x="152" y="30" width="18" height="70" rx="4" fill="var(--muted)" opacity=".3"/>
    <rect x="152" y="30" width="18" height="70" rx="4" fill="var(--accent)"/>
    ${LB(180,120,'とても')}`),
  if: A(`
    <circle cx="120" cy="34" r="9" fill="var(--muted)"/>
    <path d="M120 42 L74 78" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <path d="M120 42 L166 78" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <circle cx="74" cy="90" r="13" fill="var(--accent)" opacity=".5"/>
    <circle cx="166" cy="90" r="13" fill="var(--accent)"/>
    ${LB(120,120,'もし〜ならば')}`),
  one: A(`
    <circle cx="120" cy="60" r="34" fill="var(--accent)"/>
    <text x="120" y="70" text-anchor="middle" font-size="30" fill="var(--bg)" font-family="-apple-system,sans-serif">1</text>
    ${LB(120,124,'1・ひとつ')}`),
  would: A(`
    ${TLW(96)}
    <circle cx="70" cy="96" r="6" fill="var(--muted)"/>
    ${ARW(84,96,190,96,'var(--accent)',3)}
    <rect x="176" y="66" width="40" height="24" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    ${LB(196,58,'かもしれない')}`),
  about: A(`
    <circle cx="120" cy="62" r="40" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <text x="120" y="70" text-anchor="middle" font-size="24" fill="var(--accent)">~</text>
    ${LB(120,124,'〜について・約')}`),
  can: A(`
    <rect x="86" y="50" width="68" height="44" rx="8" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="72" r="7" fill="var(--accent)"/>
    <path d="M104 50 v-14 a16 16 0 0 1 32 0 v14" fill="none" stroke="var(--ok)" stroke-width="4"/>
    ${LB(120,120,'〜できる')}`),
  which: A(`
    <circle cx="120" cy="34" r="9" fill="var(--muted)"/>
    <path d="M120 42 L68 84" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="3 4"/>
    <path d="M120 42 L172 84" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="68" cy="94" r="12" fill="var(--muted)" opacity=".4"/>
    <circle cx="172" cy="94" r="12" fill="var(--accent)"/>
    ${LB(120,120,'どちら・どの')}`),
  there: A(`
    <circle cx="40" cy="96" r="6" fill="var(--muted)" opacity=".5"/>
    ${LB(40,120,'ここ')}
    ${ARW(56,90,190,50)}
    <circle cx="204" cy="42" r="10" fill="var(--accent)"/>
    ${LB(204,66,'あそこ')}
    ${LB(120,120,'そこに・〜がある')}`),
  know: A(`
    <circle cx="120" cy="56" r="30" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M106 58 l10 10 22 -22" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,120,'知っている（頭の中）')}`),
  get: A(`
    <circle cx="176" cy="40" r="12" fill="var(--accent)" opacity=".5"/>
    ${ARW(160,50,90,84)}
    ${PS(70,96)}
    ${LB(120,124,'得る・手に入れる')}`),

  who: A(`
    ${PS(120,96)}
    <text x="120" y="34" text-anchor="middle" font-size="26" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    ${LB(120,124,'誰（人を尋ねる）')}`),
  like: A(SP2 + `
    <path d="M61 92 C40 74 30 56 44 44 C54 36 61 44 61 50 C61 44 68 36 78 44 C92 56 82 74 61 92 Z" fill="var(--accent)"/>
    ${LB(61,120,'好む')}
    <path d="M148 78 h30" stroke="var(--accent)" stroke-width="3"/>
    <path d="M188 78 h30" stroke="var(--accent)" stroke-width="3"/>
    <text x="170" y="82" text-anchor="middle" font-size="16" fill="var(--muted)">≈</text>
    <circle cx="163" cy="52" r="10" fill="var(--accent)"/>
    <circle cx="197" cy="52" r="10" fill="var(--accent)" opacity=".6"/>
    ${LB(180,120,'〜のような')}`),
  when: A(`
    <circle cx="110" cy="60" r="34" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="110" y1="60" x2="110" y2="38" stroke="var(--accent)" stroke-width="3"/>
    <line x1="110" y1="60" x2="128" y2="70" stroke="var(--accent)" stroke-width="3"/>
    <text x="176" y="52" text-anchor="middle" font-size="26" fill="var(--muted)">?</text>
    ${LB(120,120,'いつ・〜するとき')}`),
  think: A(`
    ${PS(72,96)}
    <circle cx="130" cy="46" r="7" fill="var(--muted)" opacity=".6"/>
    <circle cx="148" cy="34" r="10" fill="var(--muted)" opacity=".6"/>
    <ellipse cx="182" cy="20" rx="26" ry="18" fill="var(--accent)" opacity=".4"/>
    <path d="M172 16 q10 -8 20 0" stroke="var(--accent)" stroke-width="2.5" fill="none"/>
    ${LB(120,124,'考える・思う')}`),
  make: A(`
    <rect x="24" y="70" width="24" height="24" fill="var(--muted)" opacity=".6"/>
    <circle cx="66" cy="82" r="12" fill="var(--muted)" opacity=".6"/>
    ${ARW(94,80,150,60)}
    <rect x="164" y="40" width="56" height="44" rx="6" fill="var(--accent)"/>
    <path d="M176 40 v44 M200 40 v44" stroke="var(--bg)" stroke-width="2" opacity=".6"/>
    ${LB(120,120,'作る（材料から）')}`),
  see: A(`
    <path d="M30 66 Q120 14 210 66 Q120 118 30 66 Z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="66" r="18" fill="var(--accent)"/>
    <circle cx="120" cy="66" r="7" fill="var(--bg)"/>
    ${LB(120,124,'見る・わかる')}`),
  what: A(`
    <rect x="90" y="40" width="60" height="44" rx="6" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    <text x="120" y="70" text-anchor="middle" font-size="26" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    ${LB(120,120,'何（不明な物）')}`),
  up: A(`
    ${ARW(120,110,120,26)}
    ${LB(120,124,'上へ')}`),
  other: A(`
    <circle cx="70" cy="66" r="26" fill="var(--muted)" opacity=".4"/>
    ${LB(70,120,'これ')}
    <circle cx="170" cy="66" r="26" fill="var(--accent)"/>
    <path d="M170 50 l8 32 M158 66 h24" stroke="var(--bg)" stroke-width="2" opacity=".6"/>
    ${LB(170,120,'他の（別の）')}`),
  out: A(`
    <rect x="30" y="34" width="90" height="60" rx="8" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
    ${ARW(96,64,206,64)}
    <circle cx="60" cy="64" r="10" fill="var(--accent)"/>
    ${LB(120,120,'外へ')}`),
  people: A(`
    ${[52,92,132,172,208].map((x,i)=>PS(x,i%2?98:88,'var(--accent)',i===2?1:.65)).join('')}
    ${LB(120,124,'人々')}`),
  take: A(`
    <circle cx="176" cy="52" r="14" fill="var(--muted)" opacity=".6"/>
    ${ARW(160,60,90,88)}
    ${PS(66,96)}
    ${LB(120,124,'取る・持っていく')}`),
  no: A(`
    <line x1="80" y1="30" x2="160" y2="100" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    <line x1="160" y1="30" x2="80" y2="100" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(120,124,'いいえ・少しも〜ない')}`),
  well: A(SP2 + `
    <path d="M36 88 l14 -30 12 18 12 -34 12 46" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round"/>
    <path d="M40 96 l6 8 12 -14" fill="none" stroke="var(--ok)" stroke-width="3" stroke-linecap="round"/>
    ${LB(61,120,'上手に')}
    <ellipse cx="180" cy="62" rx="30" ry="20" fill="var(--accent)" opacity=".4"/>
    <text x="180" y="68" text-anchor="middle" font-size="16" fill="var(--muted)">…</text>
    ${LB(180,120,'さて（話し始め）')}`),
  because: A(`
    <circle cx="46" cy="66" r="14" fill="var(--accent)" opacity=".6"/>
    ${LB(46,110,'理由')}
    ${ARW(64,66,178,66)}
    <circle cx="196" cy="66" r="14" fill="var(--accent)"/>
    ${LB(196,110,'結果')}
    ${LB(120,124,'なぜなら')}`),
  very: A(`
    <rect x="80" y="24" width="24" height="80" rx="4" fill="var(--muted)" opacity=".3"/>
    <rect x="80" y="24" width="24" height="80" rx="4" fill="var(--accent)"/>
    ${ARW(140,90,140,26)}
    ${LB(120,124,'とても（程度が大きい）')}`),
  just: A(`
    ${TLW(70)}
    <line x1="112" y1="52" x2="112" y2="88" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <line x1="128" y1="52" x2="128" y2="88" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="120" cy="70" r="8" fill="var(--accent)"/>
    ${LB(120,124,'ちょうど・ただ〜だけ')}`),
  come: A(`
    ${PS(190,90)}
    ${ARW(174,80,80,50)}
    <circle cx="60" cy="42" r="8" fill="var(--muted)" opacity=".5"/>
    ${LB(120,124,'来る（こちらへ）')}`),
  could: A(`
    <rect x="86" y="50" width="68" height="44" rx="8" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5" opacity=".8"/>
    <circle cx="120" cy="72" r="7" fill="var(--accent)" opacity=".8"/>
    <path d="M104 50 v-14 a16 16 0 0 1 32 0 v14" fill="none" stroke="var(--muted)" stroke-width="4"/>
    ${LB(120,120,'〜できた（過去の力）')}`),
  work: A(SP2 + `
    <circle cx="61" cy="62" r="22" fill="none" stroke="var(--accent)" stroke-width="4"/>
    ${[0,60,120,180,240,300].map(a=>{const r=a*Math.PI/180;
      return `<rect x="${61+20*Math.cos(r)-4}" y="${62+20*Math.sin(r)-4}" width="8" height="8" fill="var(--accent)" transform="rotate(${a} ${61+20*Math.cos(r)} ${62+20*Math.sin(r)})"/>`}).join('')}
    ${LB(61,120,'働く')}
    <rect x="150" y="40" width="60" height="50" rx="4" fill="var(--accent)"/>
    <rect x="168" y="56" width="24" height="18" fill="var(--bg)" opacity=".7"/>
    ${LB(180,120,'仕事（職場）')}`),
  use: A(`
    ${PS(50,96)}
    <rect x="90" y="70" width="40" height="14" rx="4" fill="var(--accent)"/>
    ${ARW(134,76,196,50)}
    <circle cx="206" cy="44" r="12" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'使う（道具で）')}`),
  than: A(`
    <line x1="120" y1="24" x2="120" y2="60" stroke="var(--muted)" stroke-width="3"/>
    <line x1="50" y1="60" x2="190" y2="60" stroke="var(--muted)" stroke-width="3"/>
    <line x1="50" y1="60" x2="50" y2="88" stroke="var(--accent)" stroke-width="3"/>
    <rect x="30" y="88" width="40" height="12" fill="var(--accent)"/>
    <line x1="190" y1="60" x2="190" y2="76" stroke="var(--accent)" stroke-width="3"/>
    <rect x="170" y="76" width="40" height="12" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'〜よりも（比べる）')}`),
  now: A(`
    ${TLW(76)}
    <circle cx="120" cy="76" r="9" fill="var(--accent)"/>
    <line x1="120" y1="76" x2="120" y2="40" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(120,120,'今（この瞬間）')}`),
  then: A(`
    ${TLW(76)}
    <circle cx="70" cy="76" r="8" fill="var(--muted)" opacity=".6"/>
    ${ARW(84,76,158,76,'var(--accent)',2.5)}
    <circle cx="172" cy="76" r="9" fill="var(--accent)"/>
    ${LB(120,120,'それから（その次）')}`),
  also: A(`
    <circle cx="70" cy="66" r="24" fill="var(--accent)"/>
    <circle cx="130" cy="66" r="24" fill="var(--accent)" opacity=".6"/>
    <text x="180" y="76" text-anchor="middle" font-size="30" fill="var(--accent)">+</text>
    <circle cx="212" cy="66" r="16" fill="var(--accent)" opacity=".9"/>
    ${LB(120,124,'〜もまた（追加）')}`),
  into: A(`
    <rect x="130" y="34" width="80" height="64" rx="8" fill="none" stroke="var(--muted)" stroke-width="2.5"/>
    ${ARW(30,66,160,66)}
    <circle cx="30" cy="66" r="10" fill="var(--accent)"/>
    ${LB(120,124,'〜の中へ（動いて入る）')}`),
  only: A(`
    ${[46,90,150,194].map((x,i)=>`<circle cx="${x}" cy="66" r="16" fill="var(--muted)" opacity=".3"/>`).join('')}
    <circle cx="120" cy="66" r="20" fill="var(--accent)"/>
    ${LB(120,120,'〜だけ・唯一の')}`),
  look: A(`
    <circle cx="60" cy="60" r="16" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="60" cy="60" r="6" fill="var(--accent)"/>
    <line x1="76" y1="60" x2="190" y2="60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    <rect x="192" y="40" width="30" height="40" rx="4" fill="var(--accent)" opacity=".6"/>
    ${LB(120,120,'見る・〜に見える')}`),
  want: A(`
    ${PS(56,96)}
    <path d="M110 70 C100 56 108 42 120 48 C132 42 140 56 130 70 L120 84 Z" fill="var(--accent)"/>
    ${ARW(100,66,150,70,'var(--muted)',2)}
    ${LB(120,124,'欲しい・〜したい')}`),
  give: A(`
    ${PS(52,96)}
    <rect x="86" y="62" width="26" height="20" rx="3" fill="var(--accent)"/>
    ${ARW(110,72,158,72)}
    ${PS(190,96,'var(--accent)',.6)}
    ${LB(120,124,'与える')}`),
  find: A(`
    <circle cx="86" cy="56" r="24" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <line x1="104" y1="74" x2="128" y2="98" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
    <path d="M74 44 l10 10 18 -18" fill="none" stroke="var(--ok)" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="176" cy="56" r="10" fill="var(--muted)" opacity=".5"/>
    ${LB(120,124,'見つける')}`),
  over: A(`
    <rect x="98" y="70" width="44" height="34" rx="4" fill="var(--muted)" opacity=".5"/>
    <path d="M40 96 Q120 10 200 96" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M200 96 l-14 0 6 -13 z" fill="var(--accent)"/>
    ${LB(120,124,'〜の上を越えて')}`),
  any: A(`
    ${[50,90,130,170,206].map((x,i)=>`<circle cx="${x}" cy="66" r="15" fill="var(--muted)" opacity=".4" stroke="var(--accent)" stroke-width="2"/>`).join('')}
    ${LB(120,124,'どれでも（決めない）')}`),
  after: A(`
    ${TLW(76)}
    <circle cx="70" cy="76" r="9" fill="var(--accent)"/>
    ${LB(70,50,'出来事')}
    ${ARW(86,76,160,76,'var(--muted)',2.5)}
    <circle cx="176" cy="76" r="9" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'〜の後に')}`),
  day: A(`
    <path d="M20 96 h200" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="120" cy="70" r="30" fill="var(--accent)"/>
    ${[0,45,90,135,180].map(a=>{const r=a*Math.PI/180;
      return `<line x1="${120+38*Math.cos(r)}" y1="${70-38*Math.sin(r)}" x2="${120+50*Math.cos(r)}" y2="${70-50*Math.sin(r)}" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`}).join('')}
    ${LB(120,124,'日・一日（明るい間）')}`),
  where: A(`
    <path d="M120 30 q28 0 28 30 q0 24 -28 52 q-28 -28 -28 -52 q0 -30 28 -30 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <text x="120" y="70" text-anchor="middle" font-size="22" fill="var(--accent)">?</text>
    ${LB(120,124,'どこ')}`),
  thing: A(`
    <path d="M70 40 h70 l30 26 v40 h-100 z" fill="var(--accent)" opacity=".7"/>
    <text x="140" y="86" text-anchor="middle" font-size="20" fill="var(--bg)">?</text>
    ${LB(120,124,'物・こと（何か）')}`),
  should: A(`
    <path d="M30 96 Q120 96 120 40" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>
    ${ARW(120,40,190,40)}
    <circle cx="30" cy="96" r="9" fill="var(--accent)"/>
    <circle cx="206" cy="40" r="10" fill="var(--ok)"/>
    ${LB(120,124,'〜すべきだ（勧める）')}`),
  need: A(`
    <rect x="80" y="40" width="80" height="52" rx="6" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    <text x="120" y="76" text-anchor="middle" font-size="30" fill="var(--accent)">!</text>
    ${LB(120,120,'必要とする（欠かせない）')}`),
  much: A(`
    <rect x="60" y="20" width="40" height="84" rx="4" fill="var(--accent)"/>
    ${LB(80,120,'多くの')}
    <rect x="150" y="86" width="40" height="18" rx="4" fill="var(--muted)" opacity=".5"/>
    ${LB(170,120,'少し(参考)')}`),

  how: A(`
    <text x="70" y="76" text-anchor="middle" font-size="28" fill="var(--accent)">?</text>
    ${ARW(96,66,150,66)}
    <rect x="152" y="46" width="56" height="40" rx="6" fill="var(--accent)" opacity=".7"/>
    ${LB(120,124,'どのように（やり方）')}`),
  mean: A(`
    <rect x="30" y="48" width="70" height="30" rx="6" fill="var(--accent)"/>
    <text x="65" y="68" text-anchor="middle" font-size="13" fill="var(--bg)">word</text>
    ${ARW(104,63,160,63)}
    <ellipse cx="196" cy="63" rx="34" ry="24" fill="var(--accent)" opacity=".4"/>
    ${LB(120,124,'意味する')}`),
  even: A(`
    ${[[40,70],[76,58],[112,74],[148,52]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--muted)" opacity=".5"/>`).join('')}
    <circle cx="196" cy="40" r="8" fill="var(--accent)"/>
    <path d="M182 30 l6 -8 4 10" fill="none" stroke="var(--accent)" stroke-width="2"/>
    ${LB(120,124,'〜でさえ（意外な追加）')}`),
  may: A(`
    <rect x="60" y="40" width="60" height="60" rx="6" fill="var(--accent)" opacity=".2"/>
    <path d="M60 70 h-16" stroke="var(--ok)" stroke-width="4" stroke-linecap="round"/>
    <path d="M90 40 v-14 a15 15 0 0 1 30 0 v14" fill="none" stroke="var(--accent)" stroke-width="3.5" opacity=".7"/>
    <text x="176" y="70" text-anchor="middle" font-size="24" fill="var(--muted)">50%</text>
    ${LB(120,124,'〜かもしれない・してよい')}`),
  here: A(`
    <circle cx="120" cy="66" r="14" fill="var(--accent)"/>
    ${[0,72,144,216,288].map(a=>{const r=a*Math.PI/180;
      return `<line x1="${120+20*Math.cos(r)}" y1="${66+20*Math.sin(r)}" x2="${120+30*Math.cos(r)}" y2="${66+30*Math.sin(r)}" stroke="var(--accent)" stroke-width="2.5"/>`}).join('')}
    ${LB(120,120,'ここに（自分の場所）')}`),
  such: A(`
    <path d="M60 40 h60 v56 h-60 z" fill="var(--accent)"/>
    ${LB(90,120,'この種類')}
    <path d="M150 40 h60 v56 h-60 z" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    ${LB(180,120,'そのような（同じ種類）')}`),
  last: A(SP2 + `
    ${[36,64,92].map((x,i)=>`<circle cx="${x}" cy="70" r="12" fill="var(--muted)" opacity=".4"/>`).join('')}
    <circle cx="120" cy="70" r="14" fill="var(--accent)"/>
    ${LB(78,120,'最後の')}
    <line x1="150" y1="70" x2="220" y2="70" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(185,120,'続く（続いている）')}`),
  really: A(`
    <text x="120" y="76" text-anchor="middle" font-size="30" fill="var(--accent)" font-weight="bold">!</text>
    <line x1="70" y1="98" x2="170" y2="98" stroke="var(--accent)" stroke-width="4"/>
    ${LB(120,120,'本当に（強調）')}`),
  call: A(`
    <path d="M60 46 q-8 30 20 52 q22 18 44 8 l6 -18 -22 -12 -8 10 q-14 -8 -20 -22 l10 -8 -12 -22 z" fill="var(--accent)"/>
    ${LB(120,124,'呼ぶ・電話する')}`),
  company: A(`
    <rect x="70" y="34" width="100" height="70" fill="var(--accent)" opacity=".8"/>
    ${[0,1,2].map(r=>[0,1,2].map(c=>`<rect x="${84+c*30}" y="${46+r*20}" width="16" height="12" fill="var(--bg)" opacity=".6"/>`).join('')).join('')}
    ${PS(196,104,'var(--accent)',.7)}
    ${LB(120,124,'会社')}`),
  through: A(`
    <rect x="100" y="24" width="40" height="88" rx="18" fill="none" stroke="var(--muted)" stroke-width="3"/>
    ${ARW(30,68,206,68)}
    ${LB(120,124,'〜を通って')}`),
  down: A(`
    ${ARW(120,26,120,110)}
    ${LB(120,124,'下へ')}`),
  show: A(`
    <rect x="30" y="30" width="90" height="66" rx="4" fill="var(--muted)" opacity=".2"/>
    <path d="M55 66 Q75 40 95 66 Q75 92 55 66 Z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="75" cy="66" r="7" fill="var(--accent)"/>
    ${ARW(122,66,190,66)}
    <rect x="192" y="46" width="30" height="40" rx="4" fill="var(--accent)"/>
    ${LB(120,124,'見せる・示す')}`),
  life: A(`
    ${TLW(70)}
    <path d="M20 70 h30 l10 -30 12 50 10 -30 8 20 h30" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="30" cy="70" r="6" fill="var(--accent)"/>
    <circle cx="200" cy="70" r="6" fill="var(--muted)" opacity=".6"/>
    ${LB(120,124,'人生・生命')}`),
  place: A(`
    <ellipse cx="120" cy="90" rx="70" ry="14" fill="var(--muted)" opacity=".3"/>
    <path d="M120 26 q30 0 30 32 q0 26 -30 56 q-30 -30 -30 -56 q0 -32 30 -32 z" fill="var(--accent)"/>
    <circle cx="120" cy="58" r="10" fill="var(--bg)"/>
    ${LB(120,124,'場所')}`),
  between: A(`
    <circle cx="40" cy="66" r="18" fill="var(--accent)" opacity=".6"/>
    <circle cx="200" cy="66" r="18" fill="var(--accent)" opacity=".6"/>
    <circle cx="120" cy="66" r="10" fill="var(--accent)"/>
    <line x1="60" y1="66" x2="108" y2="66" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4"/>
    <line x1="132" y1="66" x2="182" y2="66" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4"/>
    ${LB(120,124,'〜の間に')}`),
  feel: A(`
    ${PS(120,96)}
    <path d="M114 68 C106 58 112 48 120 52 C128 48 134 58 126 68 L120 76 Z" fill="var(--accent)"/>
    <path d="M60 60 q20 -10 32 4" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".6"/>
    ${LB(120,124,'感じる')}`),
  too: A(SP2 + `
    <circle cx="45" cy="66" r="18" fill="var(--accent)"/>
    <circle cx="80" cy="66" r="18" fill="var(--accent)" opacity=".6"/>
    ${LB(61,120,'〜もまた')}
    <rect x="150" y="80" width="60" height="16" rx="4" fill="var(--muted)" opacity=".3"/>
    <rect x="150" y="30" width="60" height="66" rx="4" fill="var(--accent)"/>
    ${ARW(180,26,180,10,'var(--accent)',2)}
    ${LB(180,120,'あまりに（多すぎる）')}`),
  still: A(`
    ${TLW(76)}
    <circle cx="90" cy="76" r="9" fill="var(--accent)"/>
    <line x1="90" y1="76" x2="188" y2="76" stroke="var(--accent)" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round"/>
    <circle cx="188" cy="76" r="9" fill="var(--accent)" opacity=".7"/>
    ${LB(120,120,'まだ・それでも（続いたまま）')}`),
  problem: A(`
    <path d="M120 26 L206 100 H34 Z" fill="var(--accent)" opacity=".85"/>
    <text x="120" y="90" text-anchor="middle" font-size="34" fill="var(--bg)" font-weight="bold">!</text>
    ${LB(120,124,'問題')}`),
  lot: A(`
    ${[[36,90],[62,84],[88,92],[112,80],[138,90],[164,84],[190,92]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="13" fill="var(--accent)" opacity="${.5+Math.random()*.3}"/>`).join('')}
    ${LB(120,124,'たくさん')}`),
  great: A(`
    <path d="M120 30 l12 26 28 4 -20 20 5 28 -25 -14 -25 14 5 -28 -20 -20 28 -4 z" fill="var(--accent)"/>
    <line x1="60" y1="110" x2="180" y2="110" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,128,'素晴らしい・偉大な')}`),
  try: A(`
    ${PS(60,96)}
    ${ARW(86,86,150,66)}
    <rect x="150" y="40" width="50" height="50" rx="6" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M150 40 l14 14 M200 40 l-14 14" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    ${LB(120,124,'試す・努力する')}`),
  leave: A(SP2 + `
    ${PS(80,60)}
    ${ARW(96,54,110,20,'var(--accent)',2.5)}
    ${LB(61,120,'去る')}
    ${PS(160,50,'var(--muted)',.4)}
    <rect x="180" y="66" width="30" height="24" rx="3" fill="var(--accent)"/>
    ${LB(180,120,'残す（物を置いて去る）')}`),
  both: A(`
    <circle cx="76" cy="66" r="30" fill="var(--accent)"/>
    <circle cx="164" cy="66" r="30" fill="var(--accent)"/>
    <path d="M64 66 l8 8 16 -18" fill="none" stroke="var(--bg)" stroke-width="3.5"/>
    <path d="M152 66 l8 8 16 -18" fill="none" stroke="var(--bg)" stroke-width="3.5"/>
    ${LB(120,124,'両方')}`),
  own: A(`
    ${PS(90,96)}
    <rect x="146" y="70" width="40" height="26" rx="4" fill="var(--accent)"/>
    <line x1="112" y1="80" x2="146" y2="80" stroke="var(--accent)" stroke-width="3"/>
    <path d="M112 68 h-4 v24 h4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(120,124,'自分自身の（所有）')}`),
  part: A(`
    <circle cx="120" cy="60" r="40" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
    <path d="M120 60 L120 20 A40 40 0 0 1 154 78 Z" fill="var(--accent)" opacity=".3"/>
    ${ARW(154,78,196,100)}
    <path d="M196 100 L196 60 A40 40 0 0 1 210 88 Z" fill="var(--accent)" transform="translate(30,20) scale(.5)"/>
    <path d="M198 100 l24 8 -8 -24 -20 4 z" fill="var(--accent)"/>
    ${LB(120,124,'部分（切り出す）')}`),
  little: A(`
    <circle cx="70" cy="70" r="34" fill="var(--muted)" opacity=".3"/>
    ${LB(70,120,'大きい(参考)')}
    <circle cx="176" cy="86" r="10" fill="var(--accent)"/>
    ${LB(176,120,'小さい・少し')}`),
  help: A(`
    ${PS(56,96,'var(--muted)',.5)}
    <path d="M56 60 L56 90" stroke="var(--muted)" stroke-width="3" opacity=".5"/>
    ${PS(140,86)}
    <path d="M120 78 L156 60" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${ARW(56,74,86,64,'var(--ok)',3)}
    ${LB(120,124,'助ける')}`),
  something: A(`
    <ellipse cx="120" cy="62" rx="46" ry="34" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <text x="120" y="72" text-anchor="middle" font-size="24" fill="var(--accent)">?</text>
    ${LB(120,124,'何か（一部が不明）')}`),
  put: A(`
    ${PS(56,86)}
    <rect x="90" y="70" width="26" height="20" rx="3" fill="var(--accent)"/>
    ${ARW(112,74,170,90)}
    <rect x="150" y="92" width="60" height="10" rx="3" fill="var(--muted)" opacity=".4"/>
    <rect x="164" y="80" width="30" height="16" rx="3" fill="var(--accent)"/>
    ${LB(120,124,'置く')}`),
  another: A(`
    <circle cx="60" cy="66" r="22" fill="var(--muted)" opacity=".4"/>
    <circle cx="120" cy="66" r="22" fill="var(--muted)" opacity=".4"/>
    <text x="180" y="76" text-anchor="middle" font-size="26" fill="var(--accent)">+</text>
    <circle cx="204" cy="66" r="16" fill="var(--accent)"/>
    ${LB(120,124,'もうひとつの（別の）')}`),
  become: A(`
    <rect x="30" y="46" width="50" height="40" rx="4" fill="var(--muted)" opacity=".6"/>
    ${ARW(88,66,150,66)}
    <circle cx="196" cy="66" r="26" fill="var(--accent)"/>
    ${LB(120,124,'〜になる（変わる）')}`),
  interest: A(SP2 + `
    ${PS(61,90)}
    <path d="M50 44 l5 -8 M72 44 l-5 -8" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="55" cy="52" r="4" fill="var(--accent)"/>
    <circle cx="67" cy="52" r="4" fill="var(--accent)"/>
    ${LB(61,120,'興味')}
    <rect x="150" y="80" width="60" height="14" rx="3" fill="var(--accent)" opacity=".5"/>
    <rect x="150" y="50" width="60" height="14" rx="3" fill="var(--accent)"/>
    ${ARW(180,46,180,28,'var(--accent)',2.5)}
    ${LB(180,120,'利子（増える分）')}`),
  old: A(`
    ${PS(80,86)}
    <line x1="66" y1="96" x2="50" y2="112" stroke="var(--muted)" stroke-width="3" stroke-linecap="round"/>
    <path d="M96 40 q6 -10 0 -20" stroke="var(--muted)" stroke-width="2" opacity=".5" fill="none"/>
    ${LB(90,124,'古い・年をとった')}`),
  each: A(`
    ${[54,102,150,198].map(x=>`<circle cx="${x}" cy="70" r="20" fill="none" stroke="var(--accent)" stroke-width="3"/>`).join('')}
    ${LB(120,124,'それぞれの（ひとつずつ）')}`),
  late: A(`
    ${TLW(76)}
    <circle cx="120" cy="76" r="8" fill="var(--muted)" opacity=".6"/>
    ${LB(120,52,'予定')}
    ${ARW(120,76,178,76,'var(--accent)',3)}
    <circle cx="188" cy="76" r="9" fill="var(--accent)"/>
    ${LB(120,124,'遅い・遅れた')}`),
  off: A(`
    <circle cx="70" cy="66" r="24" fill="var(--muted)" opacity=".3"/>
    <line x1="52" y1="48" x2="88" y2="84" stroke="var(--accent)" stroke-width="4"/>
    ${LB(70,120,'オフの')}
    ${PS(160,60)}
    ${ARW(176,74,210,100)}
    ${LB(190,120,'離れて')}`),
  next: A(`
    <circle cx="60" cy="66" r="18" fill="var(--accent)"/>
    ${ARW(82,66,150,66)}
    <circle cx="176" cy="66" r="22" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    ${LB(120,124,'次の')}`),
  live: A(SP2 + `
    <path d="M61 30 l30 24 h-10 v40 h-40 v-40 h-10 z" fill="var(--accent)"/>
    ${LB(61,120,'住む')}
    <path d="M180 34 v54" stroke="var(--accent)" stroke-width="3"/>
    ${[0,1,2,3].map(i=>`<path d="M${164+i*10} ${88-Math.abs(i-1.5)*14} l6 -14 6 14" fill="none" stroke="var(--accent)" stroke-width="2.5"/>`).join('')}
    ${LB(180,120,'生きる（脈がある）')}`),

  why: A(`
    <text x="70" y="80" text-anchor="middle" font-size="32" fill="var(--accent)">?</text>
    ${ARW(100,66,160,66)}
    <circle cx="196" cy="66" r="20" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'なぜ（理由を尋ねる）')}`),
  while: A(`
    ${TLH(20,220,50)}
    ${TLH(20,220,90)}
    <rect x="90" y="42" width="60" height="56" rx="4" fill="var(--accent)" opacity=".3"/>
    <circle cx="90" cy="50" r="6" fill="var(--accent)"/>
    <circle cx="90" cy="90" r="6" fill="var(--accent)"/>
    ${LB(120,124,'〜する間・一方')}`),
  play: A(`
    ${PS(70,90)}
    <circle cx="150" cy="70" r="16" fill="var(--accent)"/>
    <path d="M150 54 v-14 M134 70 h-14 M166 70 h14 M150 86 v14" stroke="var(--muted)" stroke-width="3" opacity=".5"/>
    ${LB(120,124,'遊ぶ・(スポーツを)する')}`),
  might: A(`
    <path d="M90 40 v-14 a15 15 0 0 1 30 0 v14" fill="none" stroke="var(--accent)" stroke-width="3.5" opacity=".4"/>
    <rect x="60" y="40" width="60" height="60" rx="6" fill="var(--accent)" opacity=".12"/>
    <text x="176" y="70" text-anchor="middle" font-size="24" fill="var(--muted)">20%</text>
    ${LB(120,124,'〜かもしれない（可能性は低め）')}`),
  must: A(`
    <line x1="30" y1="90" x2="180" y2="30" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    <path d="M188 26 l-2 14 -14 -2 z" fill="var(--accent)"/>
    <line x1="30" y1="30" x2="180" y2="90" stroke="var(--muted)" stroke-width="4" opacity=".3" stroke-dasharray="2 8"/>
    ${LB(120,124,'〜しなければならない')}`),
  home: A(`
    <path d="M120 26 l70 52 h-18 v46 h-104 v-46 h-18 z" fill="var(--accent)"/>
    <rect x="104" y="66" width="32" height="38" fill="var(--bg)"/>
    ${LB(120,124,'家・家庭')}`),
  never: A(`
    ${TLW(66)}
    ${[40,80,120,160,200].map(x=>`<line x1="${x-8}" y1="58" x2="${x+8}" y2="74" stroke="var(--accent)" stroke-width="3"/><line x1="${x+8}" y1="58" x2="${x-8}" y2="74" stroke="var(--accent)" stroke-width="3"/>`).join('')}
    ${LB(120,124,'決して〜ない（どの時も無い）')}`),
  include: A(`
    <rect x="30" y="30" width="180" height="76" rx="10" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${[[70,55],[120,70],[168,52],[90,88],[160,90]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(120,124,'含む（中に入っている）')}`),
  course: A(SP2 + `
    <rect x="24" y="34" width="74" height="50" rx="4" fill="var(--accent)" opacity=".2"/>
    <line x1="34" y1="50" x2="88" y2="50" stroke="var(--accent)" stroke-width="3"/>
    <line x1="34" y1="64" x2="78" y2="64" stroke="var(--accent)" stroke-width="3"/>
    ${LB(61,120,'講座')}
    <path d="M140 96 Q160 40 220 40" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <circle cx="140" cy="96" r="8" fill="var(--accent)"/>
    <circle cx="220" cy="40" r="8" fill="var(--accent)"/>
    ${LB(180,120,'進路（もちろん）')}`),
  group: A(`
    <ellipse cx="120" cy="66" rx="86" ry="42" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    ${[80,120,160,140,100].map((x,i)=>PS(x, i%2?86:60,'var(--accent)',.8)).join('')}
    ${LB(120,124,'集団・グループ')}`),
  case: A(SP2 + `
    <circle cx="46" cy="60" r="8" fill="var(--muted)"/>
    <path d="M46 68 L20 96" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="3 4"/>
    <path d="M46 68 L76 96" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="3 4"/>
    ${LB(48,120,'場合')}
    <rect x="150" y="56" width="60" height="42" rx="4" fill="var(--accent)"/>
    <rect x="168" y="46" width="24" height="12" rx="3" fill="var(--accent)"/>
    ${LB(180,120,'事例（ひとつの例）')}`),
  around: A(`
    <circle cx="120" cy="62" r="14" fill="var(--accent)"/>
    <path d="M120 24 a38 38 0 1 1 -37 28" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="5 4"/>
    <path d="M83 52 l6 14 14 -6 z" fill="var(--muted)"/>
    ${LB(120,124,'〜の周りに・約')}`),
  seem: A(`
    <rect x="70" y="40" width="60" height="50" rx="6" fill="var(--accent)"/>
    <rect x="86" y="30" width="60" height="50" rx="6" fill="var(--muted)" opacity=".35" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(120,124,'〜のように見える（外見は）')}`),
  let: A(`
    <rect x="90" y="26" width="10" height="80" fill="var(--muted)" opacity=".5"/>
    <path d="M100 26 l40 14 v52 l-40 14 z" fill="var(--accent)" opacity=".4"/>
    ${ARW(150,66,206,66)}
    ${LB(120,124,'〜させる（通す）')}`),
  again: A(`
    <path d="M60 40 a40 40 0 1 1 -8 40" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
    <path d="M40 30 l14 8 -4 16 z" fill="var(--accent)"/>
    ${LB(120,124,'再び（もう一度）')}`),
  kind: A(SP2 + `
    <rect x="24" y="40" width="30" height="30" rx="4" fill="var(--accent)"/>
    <circle cx="80" cy="55" r="15" fill="var(--accent)" opacity=".7"/>
    <path d="M24 88 h60" stroke="var(--accent)" stroke-width="3"/>
    ${LB(61,120,'種類')}
    <path d="M170 78 C158 66 166 52 180 58 C194 52 202 66 190 78 L180 88 Z" fill="var(--accent)"/>
    ${PS(206,96,'var(--muted)',.5)}
    ${LB(180,120,'親切な')}`),
  keep: A(`
    ${PS(120,96)}
    <rect x="106" y="52" width="28" height="24" rx="3" fill="var(--accent)"/>
    <path d="M100 50 a20 20 0 0 1 40 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,124,'保つ・持ち続ける')}`),
  every: A(`
    ${[54,90,126,162,198].map(x=>`<circle cx="${x}" cy="70" r="18" fill="var(--accent)"/>`).join('')}
    ${LB(120,124,'すべての（全部含む）')}`),
  during: A(`
    ${TLW(76)}
    <rect x="90" y="56" width="70" height="40" rx="4" fill="var(--accent)" opacity=".4"/>
    <circle cx="90" cy="76" r="7" fill="var(--accent)"/>
    <circle cx="160" cy="76" r="7" fill="var(--accent)"/>
    ${LB(120,124,'〜の間に（出来事の中で）')}`),
  always: A(`
    <rect x="16" y="66" width="208" height="18" rx="4" fill="var(--accent)"/>
    ${LB(120,124,'いつも（切れ目なく）')}`),
  set: A(SP2 + `
    ${PS(50,60)}
    ${ARW(70,66,100,86)}
    <rect x="96" y="88" width="24" height="14" rx="3" fill="var(--accent)"/>
    ${LB(61,120,'置く')}
    ${[[150,80],[172,80],[194,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--accent)" opacity=".8"/>`).join('')}
    <path d="M144 62 h58" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4"/>
    ${LB(180,120,'一式（まとまり）')}`),
  study: A(`
    <rect x="40" y="60" width="74" height="12" fill="var(--accent)"/>
    <rect x="40" y="76" width="74" height="12" fill="var(--accent)" opacity=".6"/>
    <path d="M40 50 h74 l-8 -10 h-58 z" fill="var(--accent)" opacity=".8"/>
    <circle cx="168" cy="58" r="20" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <line x1="182" y1="72" x2="204" y2="94" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
    ${LB(120,124,'勉強する・研究')}`),
  important: A(`
    ${[46,86,166,206].map(x=>`<circle cx="${x}" cy="80" r="14" fill="var(--muted)" opacity=".3"/>`).join('')}
    <path d="M120 30 l10 22 24 3 -18 17 5 24 -21 -12 -21 12 5 -24 -18 -17 24 -3 z" fill="var(--accent)"/>
    ${LB(120,128,'重要な（際立つ）')}`),
  since: A(`
    <circle cx="50" cy="76" r="9" fill="var(--accent)"/>
    ${LB(50,50,'始まり')}
    ${ARW(64,76,190,76,'var(--accent)',3)}
    <circle cx="204" cy="76" r="9" fill="var(--muted)"/>
    ${LB(204,50,'今')}
    ${LB(120,124,'〜以来・〜なので')}`),
  run: A(`
    ${PS(70,86)}
    <path d="M58 70 l-18 -6 M84 70 l16 -10" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
    <path d="M100 60 h40 M100 78 h30 M100 96 h44" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,124,'走る・経営する')}`),
  under: A(`
    <rect x="70" y="30" width="100" height="20" rx="4" fill="var(--accent)"/>
    <rect x="90" y="70" width="60" height="30" rx="4" fill="var(--muted)" opacity=".5"/>
    ${LB(120,124,'〜の下に')}`),
  turn: A(`
    <path d="M70 40 a40 40 0 1 0 40 40" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M60 26 l16 6 -6 16 z" fill="var(--accent)"/>
    ${LB(120,124,'回る・曲がる・順番')}`),
  bring: A(`
    ${PS(64,90)}
    <rect x="96" y="66" width="26" height="20" rx="3" fill="var(--accent)"/>
    ${ARW(90,80,150,90)}
    ${PS(190,96,'var(--accent)',.6)}
    ${LB(120,124,'持ってくる（近づける）')}`),
  early: A(`
    ${TLW(76)}
    <circle cx="120" cy="76" r="8" fill="var(--muted)" opacity=".6"/>
    ${LB(120,50,'予定')}
    <circle cx="66" cy="76" r="9" fill="var(--accent)"/>
    ${ARW(66,60,110,44,'var(--muted)',2)}
    ${LB(120,124,'早い・早く')}`),
  state: A(SP2 + `
    <path d="M28 44 l30 -6 20 14 -8 20 12 18 -34 8 -22 -14 z" fill="var(--accent)" opacity=".7"/>
    ${LB(61,120,'州')}
    <circle cx="180" cy="60" r="30" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M180 30 a30 30 0 0 1 0 60" fill="var(--accent)" opacity=".5"/>
    ${LB(180,120,'状態')}`),
  move: A(`
    <rect x="30" y="50" width="46" height="34" rx="4" fill="var(--muted)" opacity=".4"/>
    ${ARW(84,66,158,66)}
    <rect x="164" y="50" width="46" height="34" rx="4" fill="var(--accent)"/>
    ${LB(120,124,'動く・引っ越す')}`),
  fact: A(`
    <rect x="60" y="36" width="100" height="70" rx="4" fill="var(--accent)" opacity=".15" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M84 74 l20 20 44 -48" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(120,124,'事実（確かなこと）')}`),
  however: A(`
    ${ARW(30,50,120,50,'var(--ok)')}
    <line x1="130" y1="24" x2="130" y2="76" stroke="var(--accent)" stroke-width="4"/>
    ${ARW(140,96,210,96,'var(--accent)')}
    ${LB(120,124,'しかしながら（流れを止めて逆へ）')}`),
  provide: A(`
    ${PS(56,96)}
    <rect x="110" y="46" width="50" height="50" rx="6" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    ${ARW(84,76,116,70)}
    <rect x="122" y="66" width="30" height="24" rx="3" fill="var(--accent)"/>
    ${LB(120,124,'提供する（満たす）')}`),
  name: A(`
    <path d="M40 60 h90 l20 20 -20 20 h-90 z" fill="var(--accent)"/>
    <circle cx="62" cy="80" r="5" fill="var(--bg)"/>
    <text x="105" y="86" text-anchor="middle" font-size="14" fill="var(--bg)">ABC</text>
    ${LB(120,124,'名前')}`),
  large: A(`
    <rect x="30" y="30" width="90" height="76" rx="6" fill="var(--accent)"/>
    ${LB(75,120,'大きい')}
    <rect x="150" y="70" width="34" height="36" rx="4" fill="var(--muted)" opacity=".5"/>
    ${LB(167,120,'小さい(参考)')}`),
  business: A(`
    <rect x="70" y="56" width="100" height="50" rx="6" fill="var(--accent)"/>
    <rect x="100" y="40" width="40" height="16" rx="4" fill="var(--accent)"/>
    <rect x="70" y="76" width="100" height="8" fill="var(--bg)" opacity=".5"/>
    ${LB(120,124,'仕事・事業')}`),
  without: A(`
    <rect x="70" y="40" width="50" height="50" rx="6" fill="none" stroke="var(--muted)" stroke-width="3" stroke-dasharray="5 5"/>
    <line x1="60" y1="30" x2="130" y2="100" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
    ${LB(95,120,'〜なしで')}`),
  information: A(`
    <circle cx="120" cy="60" r="40" fill="var(--accent)"/>
    <circle cx="120" cy="42" r="6" fill="var(--bg)"/>
    <rect x="112" y="56" width="16" height="34" rx="3" fill="var(--bg)"/>
    ${LB(120,124,'情報')}`),
  government: A(`
    <path d="M120 24 l60 26 h-120 z" fill="var(--accent)"/>
    <rect x="66" y="52" width="14" height="42" fill="var(--accent)"/>
    <rect x="96" y="52" width="14" height="42" fill="var(--accent)"/>
    <rect x="130" y="52" width="14" height="42" fill="var(--accent)"/>
    <rect x="160" y="52" width="14" height="42" fill="var(--accent)"/>
    <rect x="56" y="96" width="128" height="10" fill="var(--accent)"/>
    ${LB(120,124,'政府')}`),

  issue: A(SP2 + `
    <path d="M61 30 L96 92 H26 Z" fill="var(--accent)" opacity=".8"/>
    <text x="61" y="82" text-anchor="middle" font-size="24" fill="var(--bg)" font-weight="bold">!</text>
    ${LB(61,120,'問題')}
    <rect x="150" y="70" width="60" height="10" fill="var(--muted)" opacity=".4"/>
    ${ARW(180,66,180,30)}
    <rect x="164" y="34" width="32" height="24" rx="3" fill="var(--accent)"/>
    ${LB(180,120,'発行する')}`),
  hold: A(SP2 + `
    ${PS(61,90)}
    <rect x="48" y="48" width="26" height="20" rx="3" fill="var(--accent)"/>
    <path d="M42 46 a20 20 0 0 1 40 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(61,120,'持つ')}
    ${[[152,80],[180,64],[208,80]].map(([x,y])=>PS(x,y+16,'var(--accent)',.7)).join('')}
    <path d="M144 100 h72" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4"/>
    ${LB(180,120,'開催する')}`),
  service: A(`
    ${PS(70,90)}
    <rect x="120" y="70" width="60" height="10" rx="3" fill="var(--accent)"/>
    <circle cx="132" cy="60" r="10" fill="var(--accent)" opacity=".7"/>
    <circle cx="168" cy="60" r="10" fill="var(--accent)" opacity=".7"/>
    ${ARW(102,80,118,74)}
    ${LB(140,124,'サービス・業務')}`),
  against: A(`
    ${ARW(30,66,110,66)}
    <line x1="120" y1="24" x2="120" y2="108" stroke="var(--accent)" stroke-width="5"/>
    ${ARW(210,66,130,66)}
    ${LB(120,124,'〜に反対して（押し合う）')}`),
  believe: A(`
    <circle cx="120" cy="54" r="32" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M106 56 l10 10 22 -20" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    <path d="M120 86 l-8 20 h16 z" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'信じる')}`),
  though: A(`
    ${ARW(30,60,150,44,'var(--ok)',3)}
    <path d="M150 44 q20 20 0 40" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    ${ARW(150,84,206,96,'var(--accent)',3)}
    ${LB(120,124,'〜だけれども（少しそれる）')}`),
  yes: A(`
    <path d="M40 68 l30 30 70 -70" fill="none" stroke="var(--ok)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    ${LB(120,124,'はい')}`),
  job: A(`
    <rect x="70" y="56" width="100" height="46" rx="6" fill="var(--accent)"/>
    <rect x="100" y="42" width="40" height="16" rx="4" fill="var(--accent)"/>
    <rect x="70" y="76" width="100" height="6" fill="var(--bg)" opacity=".5"/>
    <circle cx="120" cy="94" r="6" fill="var(--bg)" opacity=".7"/>
    ${LB(120,124,'仕事・職')}`),
  result: A(`
    <circle cx="40" cy="70" r="10" fill="var(--muted)"/>
    ${ARW(54,70,110,50)}
    ${ARW(54,70,110,90)}
    ${ARW(124,70,180,70)}
    <rect x="184" y="52" width="36" height="36" rx="4" fill="var(--accent)"/>
    ${LB(120,124,'結果')}`),
  away: A(`
    <circle cx="40" cy="66" r="12" fill="var(--accent)"/>
    ${ARW(56,60,150,40)}
    <circle cx="200" cy="30" r="6" fill="var(--muted)" opacity=".4"/>
    ${LB(120,124,'離れて')}`),
  example: A(`
    ${[46,86,166,206].map(x=>`<circle cx="${x}" cy="80" r="14" fill="var(--muted)" opacity=".35"/>`).join('')}
    <circle cx="126" cy="80" r="18" fill="var(--accent)"/>
    <path d="M126 96 l-8 20 h16 z" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'例（ひとつ取り出す）')}`),
  happen: A(`
    <path d="M120 26 l9 20 22 3 -16 15 4 22 -19 -11 -19 11 4 -22 -16 -15 22 -3 z" fill="var(--accent)" opacity=".85"/>
    <circle cx="60" cy="100" r="6" fill="var(--muted)" opacity=".4"/>
    <circle cx="180" cy="100" r="6" fill="var(--muted)" opacity=".4"/>
    ${LB(120,128,'起こる（突然）')}`),
  offer: A(`
    ${PS(70,90)}
    <rect x="112" y="68" width="26" height="20" rx="3" fill="var(--accent)"/>
    <path d="M96 82 h20" stroke="var(--accent)" stroke-width="3"/>
    ${PS(190,90,'var(--muted)',.5)}
    ${ARW(160,78,172,84,'var(--muted)',2)}
    ${LB(120,124,'申し出る・提供する')}`),
  program: A(SP2 + `
    ${[0,1,2].map(i=>`<rect x="30" y="${40+i*20}" width="60" height="12" rx="3" fill="var(--accent)" opacity="${1-i*.2}"/>`).join('')}
    ${LB(61,120,'プログラム')}
    <rect x="150" y="34" width="60" height="46" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M164 90 l-6 12 M196 90 l6 12" stroke="var(--muted)" stroke-width="2.5"/>
    ${LB(180,120,'番組')}`),
  lead: A(`
    ${PS(90,80)}
    ${[130,160].map(x=>PS(x,94,'var(--accent)',.55)).join('')}
    ${ARW(66,72,66,44,'var(--accent)',2.5)}
    ${LB(120,124,'導く・先頭')}`),
  understand: A(`
    <path d="M96 40 h48 v48 h-48 z" fill="var(--accent)"/>
    <path d="M144 40 l40 -14 v76 l-40 -14 z" fill="var(--accent)" opacity=".6"/>
    <path d="M100 100 l14 12 22 -30" fill="none" stroke="var(--ok)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,124,'理解する（組み合わさる）')}`),
  thank: A(`
    <path d="M100 68 C88 54 96 40 108 46 C118 40 128 54 116 68 L108 78 Z" fill="var(--accent)"/>
    ${PS(160,86,'var(--muted)',.6)}
    ${ARW(126,68,146,78)}
    ${LB(120,124,'感謝する')}`),
  today: A(`
    <rect x="40" y="34" width="160" height="70" rx="6" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
    <line x1="40" y1="54" x2="200" y2="54" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    ${[0,1,2,3,4,5,6].map(i=>`<rect x="${48+i*22}" y="62" width="18" height="18" rx="3" fill="${i===3?'var(--accent)':'var(--muted)'}" opacity="${i===3?1:.25}"/>`).join('')}
    ${LB(120,124,'今日')}`),
  room: A(`
    <path d="M36 100 v-60 h148 v60" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <rect x="150" y="60" width="24" height="40" fill="var(--accent)" opacity=".5"/>
    ${LB(120,124,'部屋・余地')}`),
  until: A(`
    ${TLW(76)}
    ${ARW(40,76,178,76,'var(--accent)',3)}
    <line x1="180" y1="56" x2="180" y2="96" stroke="var(--accent)" stroke-width="5"/>
    ${LB(120,124,'〜まで（そこで止まる）')}`),
  reason: A(`
    <circle cx="200" cy="66" r="14" fill="var(--accent)" opacity=".6"/>
    ${LB(200,110,'結果')}
    ${ARW(184,66,64,66,'var(--muted)',2.5)}
    <text x="46" y="76" text-anchor="middle" font-size="24" fill="var(--accent)">?</text>
    ${LB(46,110,'なぜ')}
    ${LB(120,124,'理由・道理')}`),
  form: A(SP2 + `
    <path d="M40 40 h30 v50 h30 v-30 h20" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
    ${LB(61,120,'形')}
    <rect x="150" y="34" width="60" height="70" rx="3" fill="var(--accent)" opacity=".15" stroke="var(--accent)" stroke-width="2"/>
    <line x1="160" y1="50" x2="200" y2="50" stroke="var(--accent)" stroke-width="2"/>
    <line x1="160" y1="64" x2="200" y2="64" stroke="var(--accent)" stroke-width="2"/>
    <line x1="160" y1="78" x2="190" y2="78" stroke="var(--accent)" stroke-width="2"/>
    ${LB(180,120,'用紙・形式')}`),
  spend: A(SP2 + `
    <path d="M61 32 q22 0 22 20 q0 20 -22 20 q-22 0 -22 -20 q0 -20 22 -20 z" fill="var(--accent)"/>
    <text x="61" y="60" text-anchor="middle" font-size="16" fill="var(--bg)">¥</text>
    ${ARW(61,58,61,96,'var(--accent)',2.5)}
    ${LB(61,120,'お金を使う')}
    <circle cx="180" cy="60" r="26" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M180 60 L180 40 L196 50" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".4"/>
    <path d="M180 60 L200 70" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(180,120,'時間を使う・過ごす')}`),
  learn: A(`
    <path d="M40 60 h60 l-8 -10 h-44 z" fill="var(--accent)" opacity=".8"/>
    <rect x="40" y="60" width="60" height="30" fill="var(--accent)" opacity=".5"/>
    ${ARW(106,74,150,74)}
    ${PS(180,90)}
    <circle cx="180" cy="60" r="10" fill="var(--accent)" opacity=".7"/>
    ${LB(120,124,'学ぶ・習得する・知る')}`),
  person: A(`
    ${PS(120,96,'var(--accent)',1)}
    ${LB(120,124,'人・人間')}`),
  experience: A(`
    ${[0,1,2,3].map(i=>`<rect x="${40+i*10}" y="${94-i*16}" width="140" height="14" rx="3" fill="var(--accent)" opacity="${.3+i*.2}"/>`).join('')}
    ${PS(200,96)}
    ${LB(120,128,'経験')}`),
  once: A(`
    ${TLW(76)}
    <circle cx="120" cy="76" r="10" fill="var(--accent)"/>
    <text x="120" y="50" text-anchor="middle" font-size="16" fill="var(--muted)">×1</text>
    ${LB(120,124,'一度・かつて')}`),
  enough: A(`
    <rect x="70" y="30" width="60" height="76" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <rect x="72" y="60" width="56" height="44" fill="var(--accent)"/>
    <line x1="60" y1="60" x2="140" y2="60" stroke="var(--ok)" stroke-width="3" stroke-dasharray="4 4"/>
    ${LB(120,124,'十分な（線まで満ちた）')}`),
  city: A(`
    ${[[30,70,26,36],[64,50,30,56],[102,30,36,76],[146,58,28,48],[182,44,26,62]].map(([x,y,w,h])=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="var(--accent)" opacity="${.5+w/80}"/>`).join('')}
    <line x1="20" y1="106" x2="220" y2="106" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    ${LB(120,124,'都市・市')}`),
  able: A(`
    <circle cx="120" cy="58" r="34" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M106 60 l10 10 22 -22" fill="none" stroke="var(--ok)" stroke-width="5" stroke-linecap="round"/>
    ${LB(120,120,'〜できる・有能な')}`),
  support: A(`
    <rect x="60" y="50" width="120" height="14" rx="3" fill="var(--accent)"/>
    <rect x="70" y="64" width="14" height="40" fill="var(--accent)" opacity=".7"/>
    <rect x="156" y="64" width="14" height="40" fill="var(--accent)" opacity=".7"/>
    <path d="M40 106 q80 -14 160 0" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,124,'支援・支える')}`),
  whether: A(`
    <circle cx="120" cy="30" r="8" fill="var(--muted)"/>
    <path d="M120 38 L70 78" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <path d="M120 38 L170 78" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <text x="70" y="98" text-anchor="middle" font-size="20" fill="var(--accent)">?</text>
    <text x="170" y="98" text-anchor="middle" font-size="20" fill="var(--accent)">?</text>
    ${LB(120,124,'〜かどうか')}`),
  quite: A(`
    <rect x="90" y="24" width="30" height="82" rx="4" fill="var(--muted)" opacity=".25"/>
    <rect x="90" y="42" width="30" height="64" rx="4" fill="var(--accent)"/>
    ${LB(120,124,'かなり（多めに満ちる）')}`),
  although: A(`
    ${ARW(30,60,90,44,'var(--ok)',3)}
    <circle cx="120" cy="66" r="26" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    ${ARW(150,88,210,96,'var(--accent)',3)}
    ${LB(120,124,'〜だけれども（障害を越える）')}`),
  sure: A(`
    ${PS(80,90)}
    <path d="M56 44 l10 10 22 -22" fill="none" stroke="var(--ok)" stroke-width="4" stroke-linecap="round"/>
    <rect x="150" y="30" width="30" height="76" rx="4" fill="var(--accent)"/>
    ${LB(120,124,'確かな・きっと')}`),
  term: A(SP2 + `
    ${TLH(24,98,76)}
    <line x1="40" y1="66" x2="40" y2="86" stroke="var(--accent)" stroke-width="3"/>
    <line x1="82" y1="66" x2="82" y2="86" stroke="var(--accent)" stroke-width="3"/>
    <rect x="40" y="70" width="42" height="12" fill="var(--accent)" opacity=".4"/>
    ${LB(61,120,'期間')}
    <rect x="150" y="50" width="60" height="26" rx="4" fill="var(--accent)"/>
    <text x="180" y="68" text-anchor="middle" font-size="12" fill="var(--bg)">term</text>
    ${LB(180,120,'用語')}`),
  within: A(`
    <rect x="40" y="30" width="160" height="76" rx="8" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="168" cy="52" r="10" fill="var(--accent)"/>
    ${LB(120,124,'〜以内に・〜の中で')}`),
  process: A(`
    <circle cx="40" cy="70" r="14" fill="var(--muted)" opacity=".5"/>
    ${ARW(56,70,96,70)}
    <rect x="98" y="52" width="40" height="36" rx="4" fill="var(--accent)" opacity=".5"/>
    ${ARW(140,70,180,70)}
    <circle cx="200" cy="70" r="14" fill="var(--accent)"/>
    ${LB(120,124,'過程・処理する')}`),
  public: A(`
    ${[40,76,112,148,184,164,52].map((x,i)=>PS(x,i%2?96:80,'var(--accent)',.7)).join('')}
    <path d="M20 30 h200" stroke="var(--muted)" stroke-width="2" opacity=".4" stroke-dasharray="4 4"/>
    ${LB(120,124,'公共の・大衆')}`),
  often: A(`
    ${TLW(76)}
    ${[40,70,100,130,160,190].map(x=>`<line x1="${x}" y1="66" x2="${x}" y2="86" stroke="var(--accent)" stroke-width="3"/>`).join('')}
    ${LB(120,124,'しばしば・よく（何度も）')}`),
  possible: A(`
    <circle cx="120" cy="30" r="8" fill="var(--muted)"/>
    <path d="M120 38 L70 80" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <path d="M120 38 L170 80" stroke="var(--muted)" stroke-width="2.5" opacity=".4"/>
    <circle cx="70" cy="92" r="14" fill="var(--accent)"/>
    <circle cx="170" cy="92" r="14" fill="var(--muted)" opacity=".3"/>
    ${LB(120,124,'可能な・ありうる')}`),
  actually: A(`
    <rect x="40" y="30" width="80" height="60" rx="4" fill="var(--muted)" opacity=".4"/>
    ${LB(80,110,'見た目')}
    ${ARW(126,60,166,60)}
    <path d="M180 30 l30 30 -30 30 -12 -6 24 -24 -24 -24 z" fill="var(--accent)"/>
    ${LB(180,110,'実は')}
    ${LB(120,128,'実際に')}`),
  rather: A(`
    <line x1="30" y1="60" x2="210" y2="60" stroke="var(--muted)" stroke-width="3"/>
    <line x1="120" y1="60" x2="120" y2="40" stroke="var(--muted)" stroke-width="3"/>
    <line x1="60" y1="60" x2="60" y2="84" stroke="var(--accent)" stroke-width="3"/>
    <rect x="40" y="84" width="40" height="12" fill="var(--accent)"/>
    <line x1="180" y1="60" x2="180" y2="72" stroke="var(--muted)" stroke-width="3"/>
    <rect x="160" y="72" width="40" height="8" fill="var(--muted)" opacity=".4"/>
    ${LB(120,124,'むしろ（こちらを選ぶ）')}`),
  view: A(`
    <path d="M20 88 Q120 18 220 88" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="88" r="20" fill="var(--accent)"/>
    <circle cx="120" cy="88" r="8" fill="var(--bg)"/>
    ${LB(120,124,'眺め・見解')}`),
  together: A(`
    <circle cx="90" cy="66" r="28" fill="var(--accent)" opacity=".7"/>
    <circle cx="150" cy="66" r="28" fill="var(--accent)" opacity=".7"/>
    ${LB(120,124,'一緒に・共に')}`),
  consider: A(`
    ${PS(70,96)}
    <line x1="130" y1="40" x2="180" y2="40" stroke="var(--accent)" stroke-width="3"/>
    <line x1="145" y1="40" x2="130" y2="60" stroke="var(--accent)" stroke-width="2.5"/>
    <line x1="145" y1="40" x2="160" y2="60" stroke="var(--accent)" stroke-width="2.5"/>
    <line x1="165" y1="40" x2="150" y2="60" stroke="var(--accent)" stroke-width="2.5"/>
    <line x1="165" y1="40" x2="180" y2="60" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="145" cy="66" r="8" fill="var(--accent)" opacity=".7"/>
    <circle cx="165" cy="66" r="8" fill="var(--accent)" opacity=".7"/>
    ${LB(120,124,'考慮する（比べて考える）')}`),
  parent: A(`
    ${PS(76,86,'var(--accent)',1)}
    ${PS(146,86,'var(--accent)',.8)}
    <circle cx="182" cy="98" r="7" fill="var(--accent)" opacity=".6"/>
    <rect x="174" y="106" width="16" height="18" rx="6" fill="var(--accent)" opacity=".6"/>
    ${LB(120,128,'親・保護者')}`),
  party: A(SP2 + `
    ${[[40,50],[70,36],[90,56]].map(([x,y])=>`<path d="M${x} ${y+18} L${x} ${y} L${x+14} ${y+9} Z" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${PS(65,96,'var(--accent)',.8)}
    ${LB(61,120,'パーティー')}
    <rect x="150" y="46" width="10" height="44" fill="var(--accent)"/>
    <path d="M160 46 l38 10 -38 10 z" fill="var(--accent)"/>
    ${LB(180,120,'政党')}`),
  local: A(`
    <circle cx="120" cy="60" r="42" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <circle cx="120" cy="60" r="16" fill="var(--accent)"/>
    ${LB(120,124,'地元の・地方の')}`),
  control: A(`
    <rect x="60" y="50" width="120" height="14" rx="3" fill="var(--muted)" opacity=".4"/>
    <circle cx="150" cy="57" r="14" fill="var(--accent)"/>
    <rect x="106" y="80" width="28" height="24" rx="4" fill="var(--accent)"/>
    ${LB(120,124,'支配・管理する')}`),
  already: A(`
    ${TLW(76)}
    <circle cx="90" cy="76" r="9" fill="var(--accent)"/>
    <path d="M78 76 l8 8 14 -16" fill="none" stroke="var(--ok)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="180" cy="76" r="7" fill="var(--muted)" opacity=".5"/>
    ${LB(180,54,'今')}
    ${LB(120,124,'すでに・もう（前に済んだ）')}`),
  concern: A(SP2 + `
    <circle cx="61" cy="50" r="18" fill="var(--accent)"/>
    <circle cx="61" cy="46" r="4" fill="var(--bg)"/>
    <rect x="58" y="52" width="6" height="10" fill="var(--bg)"/>
    ${LB(61,120,'関心')}
    <path d="M180 32 L204 84 H156 Z" fill="var(--accent)" opacity=".7"/>
    ${LB(180,120,'懸念')}`),
  product: A(`
    <rect x="70" y="46" width="80" height="54" rx="6" fill="var(--accent)"/>
    <path d="M150 60 h30 v20 h-30 z" fill="var(--accent)" opacity=".6"/>
    <circle cx="110" cy="40" r="8" fill="var(--muted)" opacity=".6"/>
    ${LB(120,124,'製品・産物')}`),
  almost: A(`
    <rect x="90" y="24" width="30" height="82" rx="4" fill="var(--muted)" opacity=".25"/>
    <rect x="90" y="34" width="30" height="72" rx="4" fill="var(--accent)"/>
    <line x1="80" y1="24" x2="130" y2="24" stroke="var(--ok)" stroke-width="2" stroke-dasharray="3 4"/>
    ${LB(120,124,'ほとんど（届く手前）')}`),
  yet: A(`
    ${TLW(76)}
    <circle cx="120" cy="76" r="7" fill="var(--muted)" opacity=".5"/>
    ${LB(120,54,'今')}
    <circle cx="188" cy="76" r="9" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    ${LB(120,124,'まだ・けれども（未達）')}`),

  }; // __END__
})());
