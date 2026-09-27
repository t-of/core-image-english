/* 単語のイメージ図（追加分 3）。書き方は vocab-art.js と同じ */
Object.assign(VOCAB_ART, (() => {
  const A = b => `<svg viewBox="0 0 240 140" role="img">${b}</svg>`;
  const SP2 = '<line x1="120" y1="8" x2="120" y2="132" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 5"/>';
  const LB = (x, y, t) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="11"
    fill="var(--muted)" font-family="-apple-system,sans-serif">${t}</text>`;
  return {

  care: A(`
    <path d="M60 40 q-30 0 -30 30 q0 24 30 42 q30 -18 30 -42 q0 -30 -30 -30 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M46 62 q14 -12 28 0" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <path d="M150 66 q30 -20 60 0 q10 6 10 18 q-40 -6 -70 0 q0 -12 0 -18 z" fill="var(--accent)" opacity=".8"/>
    <circle cx="180" cy="52" r="9" fill="var(--accent)"/>
    ${LB(120,124,'そっと気にかける')}`),

  expect: A(`
    <circle cx="46" cy="66" r="14" fill="var(--accent)"/>
    <path d="M60 66 h100" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 5"/>
    <rect x="168" y="44" width="44" height="44" rx="6" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 4"/>
    ${LB(190,120,'来ると見込んで待つ')}`),

  effect: A(`
    ${[[30,90],[74,90],[118,90],[162,90]].map((p,i)=>`<rect x="${p[0]}" y="${70-i*4}" width="14" height="${20+i*4}" rx="2"
      fill="var(--accent)" opacity="${i===0?1:0.4+i*0.15}" transform="rotate(${i*14} ${p[0]+7} 90)"/>`).join('')}
    <path d="M40 60 l24 20" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(120,120,'一つが次を倒す→結果')}`),

  sort: A(SP2 + `
    ${[[30,50,'circle'],[54,66,'rect'],[36,86,'circle'],[64,90,'rect']].map(([x,y,t])=>
      t==='circle'?`<circle cx="${x}" cy="${y}" r="9" fill="var(--accent)" opacity=".7"/>`
        :`<rect x="${x-9}" y="${y-9}" width="18" height="18" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(61,120,'ばらばら')}
    <circle cx="152" cy="50" r="9" fill="var(--accent)"/>
    <circle cx="152" cy="70" r="9" fill="var(--accent)"/>
    <rect x="196" y="60" width="18" height="18" fill="var(--accent)"/>
    <rect x="196" y="82" width="18" height="18" fill="var(--accent)"/>
    ${LB(180,120,'種類ごとに分ける')}`),

  ever: A(SP2 + `
    <line x1="24" y1="66" x2="98" y2="66" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="70" cy="66" r="6" fill="var(--accent)"/>
    ${LB(61,120,'今までに一度でも')}
    <line x1="140" y1="66" x2="220" y2="66" stroke="var(--accent)" stroke-width="3"/>
    ${[150,166,182,198,214].map(x=>`<circle cx="${x}" cy="66" r="4" fill="var(--accent)"/>`).join('')}
    ${LB(180,120,'いつも変わらず')}`),

  anything: A(`
    <circle cx="120" cy="66" r="46" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4" opacity=".6"/>
    <circle cx="96" cy="50" r="9" fill="var(--accent)" opacity=".5"/>
    <rect x="140" y="42" width="16" height="16" fill="var(--accent)" opacity=".5"/>
    <path d="M100 90 l14 14 l14 -14" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
    <path d="M120 66 l-4 -6 h8 z" fill="var(--accent)"/>
    ${LB(120,128,'どれでもよい・何か')}`),

  cause: A(`
    <circle cx="46" cy="66" r="18" fill="var(--accent)"/>
    ${LB(46,120,'原因')}
    <path d="M70 66 h60" stroke="var(--accent)" stroke-width="3"/>
    <path d="M134 66 l-14 8 v-16 z" fill="var(--accent)"/>
    <rect x="150" y="48" width="60" height="36" rx="6" fill="var(--accent)" opacity=".4"/>
    ${LB(180,120,'結果を引き起こす')}`),

  deal: A(SP2 + `
    <path d="M30 76 h34" stroke="var(--accent)" stroke-width="3"/>
    <path d="M64 76 l-8 -6 v12 z" fill="var(--accent)"/>
    <path d="M92 56 h-34" stroke="var(--accent)" stroke-width="3"/>
    <path d="M58 56 l8 -6 v12 z" fill="var(--accent)"/>
    ${LB(61,120,'取引する')}
    ${[0,1,2].map(i=>`<rect x="${150+i*6}" y="${70-i*6}" width="30" height="20" rx="3" fill="var(--accent)" opacity="${0.4+i*0.2}"/>`).join('')}
    ${LB(180,120,'扱う・処理する')}`),

  send: A(`
    <path d="M40 60 h34 l-10 -10 M74 60 l-10 10" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
    <path d="M96 40 l60 26 l-60 26 l14 -26 z" fill="var(--accent)"/>
    ${LB(120,120,'相手へ送り出す')}`),

  allow: A(`
    <rect x="88" y="30" width="10" height="76" fill="var(--accent)" opacity=".5"/>
    <path d="M98 30 l40 -6 v88 l-40 -6 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="60" cy="66" r="13" fill="var(--accent)"/>
    <path d="M74 66 h40" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
    <path d="M186 50 l14 16 l-14 16" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,124,'通ってよいと認める')}`),

  soon: A(`
    <line x1="24" y1="70" x2="216" y2="70" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="60" cy="70" r="9" fill="var(--accent)"/>
    ${LB(60,96,'今')}
    <circle cx="108" cy="70" r="7" fill="var(--accent)" opacity=".6"/>
    <path d="M78 70 h20" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(108,96,'まもなく')}`),

  base: A(SP2 + `
    <rect x="28" y="86" width="66" height="14" rx="2" fill="var(--accent)"/>
    <path d="M40 86 v-40 h42 v40 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(61,120,'土台・基礎')}
    <rect x="146" y="70" width="68" height="30" rx="4" fill="var(--accent)" opacity=".8"/>
    <path d="M180 70 v-16" stroke="var(--accent)" stroke-width="3"/>
    <path d="M180 44 l14 10 h-28 z" fill="var(--accent)"/>
    ${LB(180,120,'基地')}`),

  probably: A(`
    <path d="M40 100 A80 80 0 0 1 200 100" fill="none" stroke="var(--muted)" stroke-width="10" opacity=".3"/>
    <path d="M40 100 A80 80 0 0 1 172 44" fill="none" stroke="var(--accent)" stroke-width="10"/>
    <line x1="120" y1="100" x2="168" y2="46" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="100" r="6" fill="var(--accent)"/>
    ${LB(120,124,'かなりそうだろう')}`),

  suggest: A(`
    <circle cx="70" cy="60" r="24" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M70 84 l-10 16 l16 -8 z" fill="var(--accent)"/>
    <path d="M70 46 v20 M62 60 h16" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M100 66 h56" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <circle cx="176" cy="66" r="14" fill="var(--accent)" opacity=".5"/>
    ${LB(120,124,'そっと考えを示す')}`),

  test: A(SP2 + `
    <rect x="30" y="30" width="62" height="76" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M42 50 l10 8 l16 -18 M42 74 l10 8 l16 -18" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(61,120,'試験')}
    <circle cx="176" cy="56" r="18" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="190" y1="70" x2="208" y2="88" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(180,120,'検査・試す')}`),

  visit: A(`
    <circle cx="40" cy="70" r="10" fill="var(--accent)"/>
    <rect x="34" y="82" width="12" height="18" fill="var(--accent)"/>
    <path d="M56 90 q30 -18 60 0" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M150 100 h60 v-30 l-30 -22 l-30 22 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <rect x="172" y="82" width="16" height="18" fill="var(--accent)"/>
    ${LB(180,124,'訪ねて行く')}`),

  nothing: A(`
    <circle cx="120" cy="66" r="46" fill="none" stroke="var(--muted)" stroke-width="3" stroke-dasharray="6 5" opacity=".6"/>
    <line x1="90" y1="36" x2="150" y2="96" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
    ${LB(120,128,'何もない・無')}`),

  return: A(`
    <path d="M50 46 h100 q30 0 30 30 q0 30 -30 30 h-90" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M74 92 l-16 14 l16 14" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="50" cy="46" r="7" fill="var(--accent)" opacity=".6"/>
    ${LB(120,128,'もとの場所へ戻る')}`),

  matter: A(SP2 + `
    <rect x="30" y="50" width="60" height="46" rx="4" fill="var(--accent)" opacity=".8"/>
    ${LB(61,120,'物質・実体')}
    <path d="M150 60 h60 M150 60 l-6 -8 M210 60 l6 -8" stroke="var(--accent)" stroke-width="3"/>
    <path d="M180 60 v20" stroke="var(--accent)" stroke-width="3"/>
    <rect x="160" y="80" width="14" height="10" fill="var(--accent)"/>
    <rect x="196" y="80" width="14" height="14" fill="var(--accent)"/>
    ${LB(180,120,'釣り合う重み＝重要')}`),

  mind: A(`
    <path d="M70 40 q-34 4 -34 36 q0 20 18 28 h32 q18 -8 18 -28 q0 -32 -34 -36 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M50 60 q10 -10 20 0 q10 -10 20 0" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".7"/>
    <circle cx="150" cy="50" r="5" fill="var(--accent)" opacity=".5"/>
    <circle cx="170" cy="40" r="5" fill="var(--accent)" opacity=".7"/>
    <circle cx="190" cy="52" r="5" fill="var(--accent)"/>
    ${LB(120,124,'心・考える精神')}`),

  value: A(`
    <path d="M120 34 v20 M96 60 h48" stroke="var(--accent)" stroke-width="3"/>
    <path d="M70 60 l-16 30 h32 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M170 60 l-16 30 h32 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="70" cy="88" r="4" fill="var(--accent)"/>
    <path d="M164 82 l6 6 12 -14" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,124,'釣り合う価値')}`),

  record: A(SP2 + `
    <rect x="30" y="34" width="60" height="72" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${[46,60,74,88].map(y=>`<line x1="40" y1="${y}" x2="80" y2="${y}" stroke="var(--accent)" stroke-width="2" opacity=".6"/>`).join('')}
    ${LB(61,124,'書き留める')}
    <circle cx="180" cy="66" r="30" fill="var(--accent)" opacity=".85"/>
    <circle cx="180" cy="66" r="6" fill="var(--bg)"/>
    ${LB(180,120,'レコード')}`),

  stay: A(`
    <circle cx="120" cy="60" r="16" fill="var(--accent)"/>
    <circle cx="120" cy="96" r="46" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4" opacity=".5"/>
    <path d="M100 108 q20 8 40 0" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(120,128,'その場にとどまる')}`),

  several: A(`
    ${[46,78,110,142,174].map((x,i)=>`<circle cx="${x}" cy="66" r="14" fill="var(--accent)" opacity="${i===2?1:0.7}"/>`).join('')}
    ${LB(120,116,'いくつか（2,3個より多い）')}`),

  develop: A(`
    <circle cx="40" cy="98" r="6" fill="var(--accent)" opacity=".4"/>
    <path d="M76 92 q0 -20 10 -26" stroke="var(--accent)" stroke-width="3" fill="none" opacity=".7"/>
    <path d="M140 84 q-4 -34 20 -44 q26 -10 22 12" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="182" cy="52" r="10" fill="var(--accent)"/>
    <line x1="24" y1="106" x2="216" y2="106" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,126,'だんだん育つ・開発する')}`),

  remember: A(`
    <path d="M70 36 q-34 4 -34 36 q0 20 18 28 h32 q18 -8 18 -28 q0 -32 -34 -36 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M74 60 q-30 0 -30 -20" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
    <path d="M44 40 l0 8 l-8 -2 z" fill="var(--accent)"/>
    <circle cx="180" cy="66" r="18" fill="var(--accent)" opacity=".5"/>
    ${LB(120,120,'過去を呼び戻す')}`),

  bit: A(`
    <rect x="70" y="40" width="80" height="60" rx="4" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="5 4" opacity=".5"/>
    <path d="M70 40 h20 v20 h-20 z" fill="var(--accent)"/>
    ${LB(120,120,'全体のうち少し')}`),

  real: A(SP2 + `
    <rect x="34" y="46" width="54" height="54" rx="6" fill="var(--accent)"/>
    ${LB(61,120,'現実にある')}
    <rect x="146" y="46" width="54" height="54" rx="6" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="5 4" opacity=".5"/>
    ${LB(173,120,'想像・見せかけ')}`),

  decide: A(`
    <path d="M40 100 v-40 l40 -20" fill="none" stroke="var(--muted)" stroke-width="3" opacity=".4"/>
    <path d="M40 60 l70 -30" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M104 32 l-6 12 l14 -2 z" fill="var(--accent)"/>
    <circle cx="40" cy="60" r="8" fill="var(--accent)"/>
    ${LB(120,124,'一つの道を選び決める')}`),

  language: A(`
    <circle cx="60" cy="56" r="20" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M60 76 l-10 16 l16 -8 z" fill="var(--accent)"/>
    <circle cx="180" cy="56" r="20" fill="none" stroke="var(--muted)" stroke-width="3" opacity=".6"/>
    <path d="M180 76 l10 16 l-16 -8 z" fill="var(--muted)" opacity=".6"/>
    <path d="M84 50 q30 -6 66 4" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(120,124,'記号でやり取りする言葉')}`),

  subject: A(SP2 + `
    <rect x="30" y="34" width="62" height="72" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="61" cy="54" r="12" fill="var(--accent)"/>
    ${LB(61,120,'主題・科目')}
    <rect x="140" y="60" width="26" height="16" fill="var(--accent)"/>
    <rect x="172" y="60" width="20" height="16" fill="var(--muted)" opacity=".4"/>
    <rect x="198" y="60" width="20" height="16" fill="var(--muted)" opacity=".4"/>
    ${LB(180,120,'文の主語')}`),

  class: A(SP2 + `
    ${[[30,60],[58,60],[30,86],[58,86]].map(([x,y])=>`<rect x="${x}" y="${y}" width="20" height="14" fill="var(--accent)" opacity=".7"/>`).join('')}
    <rect x="24" y="40" width="74" height="10" fill="var(--accent)"/>
    ${LB(61,120,'授業・クラス')}
    ${[0,1,2].map(i=>`<rect x="${150}" y="${94-i*22}" width="${60-i*14}" height="16" fill="var(--accent)" opacity="${0.4+i*0.25}"/>`).join('')}
    ${LB(180,120,'階級')}`),

  development: A(`
    ${[0,1,2,3].map(i=>`<rect x="${32+i*44}" y="${96-i*20}" width="34" height="${20+i*20}" fill="var(--accent)" opacity="${0.4+i*0.2}"/>`).join('')}
    <path d="M40 100 l150 -70" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4" opacity=".5"/>
    <path d="M190 30 l14 -4 l0 14 z" fill="var(--accent)"/>
    ${LB(120,126,'段階を追って発展')}`),

  town: A(`
    <path d="M30 100 v-30 h20 v30 z M56 100 v-44 h26 v44 z M90 100 v-24 h22 v24 z" fill="var(--accent)"/>
    <path d="M56 56 l13 -12 l13 12 z" fill="var(--accent)"/>
    <path d="M118 100 h96" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <path d="M130 100 v-20 h16 v20 z M156 100 v-34 h18 v34 z M184 100 v-16 h16 v16 z" fill="var(--accent)" opacity=".7"/>
    ${LB(120,122,'建物が集まる町')}`),

  break: A(SP2 + `
    <rect x="30" y="40" width="30" height="30" fill="var(--accent)" transform="rotate(-8 45 55)"/>
    <rect x="66" y="70" width="26" height="26" fill="var(--accent)" opacity=".8" transform="rotate(12 79 83)"/>
    ${LB(61,120,'壊れる・壊す')}
    <rect x="156" y="52" width="40" height="30" rx="4" fill="var(--accent)" opacity=".7"/>
    <circle cx="176" cy="40" r="14" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M176 40 v-8 M176 40 l6 4" stroke="var(--accent)" stroke-width="2"/>
    ${LB(180,120,'休憩')}`),

  clear: A(SP2 + `
    <circle cx="61" cy="60" r="20" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="61" cy="60" r="6" fill="var(--accent)"/>
    <path d="M39 60 h-10 M83 60 h10" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(61,120,'よく見える・明らか')}
    ${[[150,60],[182,60],[214,60]].map(([x,y],i)=>`<rect x="${x-14}" y="${y-40+i*8}" width="28" height="10" fill="var(--muted)" opacity=".4"/>`).join('')}
    <path d="M150 66 h64" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    ${LB(180,120,'片付ける')}`),

  either: A(`
    <circle cx="120" cy="46" r="10" fill="var(--accent)"/>
    <path d="M120 56 v14 M120 70 l-46 26 M120 70 l46 26" stroke="var(--accent)" stroke-width="3" fill="none"/>
    <circle cx="74" cy="102" r="12" fill="var(--accent)"/>
    <circle cx="166" cy="102" r="12" fill="var(--muted)" opacity=".4"/>
    ${LB(120,126,'どちらか一方')}`),

  ago: A(`
    <line x1="24" y1="70" x2="216" y2="70" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="70" cy="70" r="9" fill="var(--accent)"/>
    <circle cx="160" cy="70" r="9" fill="var(--muted)" opacity=".5"/>
    ${LB(70,96,'〜前')}
    ${LB(160,96,'今')}`),

  per: A(`
    ${[0,1,2].map(i=>`<g>${[0,1].map(j=>`<circle cx="${40+i*70+j*16}" cy="60" r="7" fill="var(--accent)"/>`).join('')}
      <rect x="${40+i*70-6}" y="88" width="34" height="16" rx="3" fill="var(--accent)" opacity=".5"/></g>`).join('')}
    ${LB(120,120,'ひと組ごとに同じ数')}`),

  remain: A(`
    ${[40,74,108].map(x=>`<circle cx="${x}" cy="90" r="12" fill="var(--muted)" opacity=".3"/>`).join('')}
    <path d="M30 60 q40 -20 90 -20" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    <circle cx="170" cy="66" r="16" fill="var(--accent)"/>
    ${LB(120,124,'ほかは去っても残る')}`),

  among: A(`
    <circle cx="120" cy="66" r="42" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4" opacity=".5"/>
    ${[[90,50],[150,48],[96,90],[150,92],[70,74]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="var(--muted)" opacity=".4"/>`).join('')}
    <circle cx="120" cy="70" r="12" fill="var(--accent)"/>
    ${LB(120,126,'集まりの中で')}`),

  involve: A(`
    <circle cx="120" cy="60" r="42" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="60" r="16" fill="var(--accent)"/>
    <path d="M158 96 l16 16" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="182" cy="118" r="10" fill="var(--accent)" opacity=".7"/>
    ${LB(120,132,'中に含む・巻き込む')}`),

  social: A(`
    ${[[60,50],[120,40],[180,50],[90,90],[150,90]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--accent)" opacity=".8"/>`).join('')}
    ${[[60,50,120,40],[120,40,180,50],[60,50,90,90],[120,40,150,90],[180,50,150,90],[90,90,150,90]].map(([x1,y1,x2,y2])=>
      `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--accent)" stroke-width="1.5" opacity=".4"/>`).join('')}
    ${LB(120,126,'人と人がつながる社会')}`),

  note: A(SP2 + `
    <rect x="34" y="36" width="54" height="66" rx="3" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${[50,64,78].map(y=>`<line x1="42" y1="${y}" x2="80" y2="${y}" stroke="var(--accent)" stroke-width="2" opacity=".6"/>`).join('')}
    ${LB(61,120,'メモ')}
    <circle cx="168" cy="88" r="8" fill="var(--accent)"/>
    <path d="M176 88 v-40 l20 -6 v40" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="196" cy="82" r="8" fill="var(--accent)"/>
    ${LB(185,120,'音符')}`),

  history: A(`
    <path d="M30 90 q60 -60 180 -10" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4" opacity=".5"/>
    <circle cx="34" cy="86" r="12" fill="var(--accent)" opacity=".5"/>
    <path d="M34 78 v8 l6 4" stroke="var(--bg)" stroke-width="2"/>
    <circle cx="200" cy="72" r="12" fill="var(--accent)"/>
    ${LB(34,112,'昔')}${LB(200,98,'今')}
    ${LB(120,126,'たどってきた歴史')}`),

  type: A(SP2 + `
    <circle cx="46" cy="50" r="9" fill="var(--accent)"/>
    <circle cx="46" cy="76" r="9" fill="var(--accent)"/>
    <rect x="70" y="42" width="18" height="18" fill="var(--muted)" opacity=".5"/>
    <rect x="70" y="68" width="18" height="18" fill="var(--muted)" opacity=".5"/>
    ${LB(61,120,'型・種類')}
    <rect x="140" y="76" width="76" height="20" rx="3" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${[152,166,180,194,208].map(x=>`<rect x="${x-4}" y="82" width="8" height="8" fill="var(--accent)" opacity=".7"/>`).join('')}
    <line x1="178" y1="58" x2="178" y2="72" stroke="var(--accent)" stroke-width="2"/>
    ${LB(180,120,'打ち込む')}`),

  sound: A(SP2 + `
    <rect x="34" y="52" width="14" height="24" fill="var(--accent)"/>
    <path d="M48 44 l20 -10 v60 l-20 -10 z" fill="var(--accent)"/>
    <path d="M78 50 q10 14 0 28 M88 42 q18 22 0 44" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(61,120,'音・聞こえる')}
    <rect x="150" y="50" width="60" height="34" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M162 78 l6 8 24 -22" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(180,120,'健全な・しっかりした')}`),

  political: A(`
    <path d="M40 96 h160" stroke="var(--accent)" stroke-width="3"/>
    <path d="M60 96 v-30 M180 96 v-30" stroke="var(--accent)" stroke-width="4"/>
    <path d="M60 66 l60 -30 l60 30 z" fill="var(--accent)" opacity=".8"/>
    <circle cx="120" cy="50" r="7" fill="var(--bg)"/>
    ${LB(120,120,'国を治めるしくみ')}`),

  free: A(SP2 + `
    <rect x="34" y="34" width="54" height="54" rx="4" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="5 4" opacity=".5"/>
    <path d="M61 46 q-14 4 -14 16 q0 14 14 18 q14 -4 14 -18 l-4 -20" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M92 60 l30 -20" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    ${LB(61,120,'自由な')}
    <rect x="150" y="46" width="60" height="34" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <text x="180" y="70" text-anchor="middle" font-size="18" fill="var(--accent)" font-family="-apple-system,sans-serif">¥0</text>
    ${LB(180,120,'無料の')}`),

  receive: A(`
    <path d="M30 40 l70 30 l-70 30 l14 -30 z" fill="var(--accent)" opacity=".6"/>
    <path d="M126 70 h60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M186 70 l-10 -8 v16 z" fill="var(--accent)"/>
    <path d="M180 88 q10 -14 24 0 q4 10 -4 16 h-32 q-8 -6 -4 -16 q10 -12 16 0" fill="var(--accent)"/>
    ${LB(120,124,'届いたものを受け取る')}`),

  sale: A(`
    <rect x="60" y="40" width="70" height="56" rx="4" fill="var(--accent)" opacity=".8"/>
    <text x="95" y="76" text-anchor="middle" font-size="22" fill="var(--bg)" font-family="-apple-system,sans-serif">%</text>
    <path d="M150 66 h50" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <circle cx="210" cy="66" r="14" fill="var(--accent)" opacity=".5"/>
    ${LB(120,120,'安く売る・販売')}`),

  policy: A(`
    <rect x="40" y="30" width="92" height="76" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${[46,60,74,88].map(y=>`<line x1="52" y1="${y}" x2="118" y2="${y}" stroke="var(--accent)" stroke-width="2" opacity=".6"/>`).join('')}
    <path d="M158 60 h50" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M208 60 l-10 -8 v16 z" fill="var(--accent)"/>
    ${LB(120,124,'決めた方針に沿う')}`),

  further: A(`
    <circle cx="50" cy="66" r="10" fill="var(--muted)" opacity=".5"/>
    <circle cx="120" cy="66" r="10" fill="var(--accent)" opacity=".6"/>
    <path d="M136 66 h60" stroke="var(--accent)" stroke-width="3"/>
    <path d="M196 66 l-14 8 v-16 z" fill="var(--accent)"/>
    ${LB(120,120,'もっと先へ・さらに')}`),

  require: A(`
    <rect x="80" y="36" width="80" height="60" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M108 66 h24 v-14 M132 66 h-24" stroke="var(--accent)" stroke-width="3" fill="none"/>
    <path d="M120 96 l-10 20 h20 z" fill="var(--accent)"/>
    ${LB(120,128,'なくてはならない')}`),

  general: A(SP2 + `
    ${[[36,50],[60,50],[84,50],[36,80],[60,80],[84,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(61,120,'一般の・全体の')}
    <circle cx="180" cy="56" r="13" fill="var(--accent)"/>
    <path d="M156 96 q24 -22 48 0 z" fill="var(--accent)"/>
    <path d="M164 50 l4 -14 8 10 6 -12 8 12 6 -10 4 14" fill="none" stroke="var(--accent)" stroke-width="2"/>
    ${LB(180,120,'将軍')}`),

  appear: A(`
    <circle cx="120" cy="66" r="30" fill="var(--accent)" opacity=".15"/>
    <circle cx="120" cy="66" r="18" fill="var(--accent)" opacity=".55"/>
    <circle cx="120" cy="66" r="8" fill="var(--accent)"/>
    ${LB(120,120,'姿を現す・見える')}`),

  individual: A(SP2 + `
    ${[46,76,106].map(x=>`<circle cx="${x}" cy="70" r="12" fill="var(--muted)" opacity=".4"/>`).join('')}
    ${LB(76,120,'個人（集団の一員）')}
    <circle cx="180" cy="66" r="16" fill="var(--accent)"/>
    <circle cx="180" cy="66" r="30" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4" opacity=".5"/>
    ${LB(180,120,'個々の')}`),

  black: A(`
    <rect x="60" y="34" width="120" height="64" rx="6" fill="var(--text)"/>
    ${LB(120,120,'黒い')}`),

  sense: A(SP2 + `
    <circle cx="40" cy="60" r="8" fill="var(--accent)"/>
    <circle cx="70" cy="46" r="8" fill="var(--accent)" opacity=".8"/>
    <circle cx="90" cy="70" r="8" fill="var(--accent)" opacity=".6"/>
    <path d="M40 60 q20 -20 30 -14 q10 6 20 24" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".4"/>
    ${LB(61,120,'感覚')}
    <path d="M150 60 h60 M180 40 v50" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(180,120,'意味・分別')}`),

  perhaps: A(`
    <path d="M40 100 A80 80 0 0 1 200 100" fill="none" stroke="var(--muted)" stroke-width="10" opacity=".3"/>
    <path d="M40 100 A80 80 0 0 1 96 32" fill="none" stroke="var(--accent)" stroke-width="10"/>
    <line x1="120" y1="100" x2="90" y2="34" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="100" r="6" fill="var(--accent)"/>
    ${LB(120,124,'もしかすると（低め）')}`),

  add: A(`
    <rect x="30" y="70" width="40" height="26" rx="3" fill="var(--accent)" opacity=".7"/>
    <path d="M90 83 h20 M100 73 v20" stroke="var(--accent)" stroke-width="3"/>
    <rect x="126" y="70" width="40" height="26" rx="3" fill="var(--accent)" opacity=".7"/>
    <path d="M182 83 h20" stroke="var(--accent)" stroke-width="3"/>
    <rect x="212" y="60" width="6" height="46" fill="var(--muted)" opacity=".4"/>
    ${LB(120,120,'加えて増やす')}`),

  pass: A(`
    <rect x="30" y="52" width="180" height="16" rx="4" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <circle cx="46" cy="60" r="10" fill="var(--accent)" opacity=".5"/>
    <path d="M70 60 h120" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <circle cx="204" cy="60" r="10" fill="var(--accent)"/>
    <path d="M200 100 l8 10 20 -22" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,126,'通り過ぎる・合格')}`),

  produce: A(`
    <rect x="30" y="70" width="60" height="26" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M96 82 h44" stroke="var(--accent)" stroke-width="3"/>
    <path d="M140 82 l-10 -8 v16 z" fill="var(--accent)"/>
    <circle cx="176" cy="64" r="14" fill="var(--accent)"/>
    <path d="M160 92 q16 -10 32 0" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'作り出す・生産する')}`),

  agree: A(`
    <circle cx="70" cy="60" r="16" fill="var(--accent)"/>
    <circle cx="170" cy="60" r="16" fill="var(--accent)"/>
    <path d="M92 66 h56" stroke="var(--accent)" stroke-width="2" opacity=".4"/>
    <path d="M104 96 l16 12 30 -30" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,126,'同じ意見でうなずく')}`),

  everything: A(`
    <circle cx="120" cy="66" r="46" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${[[100,50],[142,44],[104,88],[144,90],[80,66],[160,66]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="var(--accent)"/>`).join('')}
    ${LB(120,128,'すべて・何もかも')}`),

  research: A(`
    <circle cx="80" cy="56" r="24" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="98" y1="74" x2="120" y2="96" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
    <rect x="68" y="44" width="24" height="16" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <path d="M150 96 h60 M150 96 l0 -50 M180 46 l30 20 v30" stroke="var(--muted)" stroke-width="2" opacity=".4" fill="none"/>
    ${LB(120,126,'調べて明らかにする')}`),

  cover: A(`
    <rect x="60" y="60" width="80" height="40" rx="4" fill="var(--muted)" opacity=".4"/>
    <path d="M50 60 q70 -34 140 0 v10 q-70 -30 -140 0 z" fill="var(--accent)"/>
    ${LB(120,124,'覆う・扱う範囲に含む')}`),

  position: A(`
    <line x1="24" y1="106" x2="216" y2="106" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <line x1="30" y1="30" x2="30" y2="106" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <circle cx="140" cy="60" r="12" fill="var(--accent)"/>
    <line x1="140" y1="60" x2="140" y2="106" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="30" y1="60" x2="140" y2="60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(120,126,'位置・立場')}`),

  human: A(`
    <circle cx="120" cy="46" r="16" fill="var(--accent)"/>
    <path d="M92 106 q28 -30 56 0" fill="var(--accent)"/>
    <path d="M92 106 v-8 q28 -26 56 0 v8" fill="var(--accent)"/>
    ${LB(120,128,'人間・人間らしい')}`),

  situation: A(`
    <circle cx="70" cy="70" r="14" fill="var(--accent)"/>
    ${[[110,50],[150,70],[110,92],[190,60]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="var(--muted)" opacity=".45"/>`).join('')}
    <circle cx="70" cy="70" r="34" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    ${LB(120,126,'今おかれている状況')}`),

  activity: A(`
    <circle cx="70" cy="50" r="10" fill="var(--accent)"/>
    <path d="M70 60 v24 M70 74 l-16 20 M70 74 l16 20 M54 68 l16 8 l16 -8" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M110 70 h30" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    <circle cx="176" cy="50" r="10" fill="var(--accent)" opacity=".7"/>
    <path d="M176 60 v16 l-14 24 M176 76 l14 24 M160 70 l16 6 l16 -6" fill="none" stroke="var(--accent)" stroke-width="3" opacity=".7"/>
    ${LB(120,128,'活発に動く活動')}`),

  account: A(SP2 + `
    <rect x="34" y="44" width="54" height="40" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <text x="61" y="70" text-anchor="middle" font-size="16" fill="var(--accent)" font-family="-apple-system,sans-serif">¥</text>
    ${LB(61,120,'口座')}
    <rect x="140" y="34" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${[48,62,76].map(y=>`<line x1="150" y1="${y}" x2="200" y2="${y}" stroke="var(--accent)" stroke-width="2" opacity=".6"/>`).join('')}
    ${LB(175,120,'説明・記述')}`),

  shop: A(`
    <path d="M30 96 v-30 h100 v30 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M24 66 l10 -24 h80 l10 24 z" fill="var(--accent)"/>
    <rect x="60" y="70" width="20" height="26" fill="var(--accent)" opacity=".6"/>
    <path d="M150 70 h50 l-10 26 h-30 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="164" cy="104" r="6" fill="var(--accent)"/>
    <circle cx="192" cy="104" r="6" fill="var(--accent)"/>
    ${LB(120,124,'店・買い物する')}`),

  major: A(SP2 + `
    <circle cx="46" cy="66" r="26" fill="var(--accent)"/>
    <circle cx="90" cy="66" r="12" fill="var(--muted)" opacity=".4"/>
    ${LB(61,120,'主要な・大きい')}
    <rect x="150" y="50" width="60" height="46" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <text x="180" y="80" text-anchor="middle" font-size="14" fill="var(--accent)" font-family="-apple-system,sans-serif">A</text>
    ${LB(180,120,'専攻')}`),

  someone: A(`
    <circle cx="120" cy="66" r="40" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4" opacity=".5"/>
    ${[[100,50],[142,46],[104,88],[142,90]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="var(--muted)" opacity=".35"/>`).join('')}
    <circle cx="82" cy="66" r="10" fill="var(--accent)"/>
    ${LB(120,124,'（誰かは特定しない）誰か')}`),

  event: A(`
    <rect x="50" y="40" width="140" height="60" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <rect x="50" y="40" width="140" height="18" fill="var(--accent)"/>
    <circle cx="130" cy="80" r="10" fill="var(--accent)" opacity=".8"/>
    <path d="M130 90 l0 -30 M120 66 l10 -6 10 6" fill="none" stroke="var(--accent)" stroke-width="2"/>
    ${LB(120,124,'行事・出来事')}`),

  special: A(`
    <path d="M120 30 l10 24 26 3 -19 18 5 26 -22 -13 -22 13 5 -26 -19 -18 26 -3 z" fill="var(--accent)"/>
    <circle cx="120" cy="66" r="52" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 6" opacity=".4"/>
    ${LB(120,128,'特別な・ほかと違う')}`),

  sometimes: A(`
    <line x1="24" y1="70" x2="216" y2="70" stroke="var(--accent)" stroke-width="3"/>
    ${[46,80,114,148,182,216].map((x,i)=>`<circle cx="${x}" cy="70" r="6" fill="var(--accent)" opacity="${i%2?1:0.2}"/>`).join('')}
    ${LB(120,120,'ときどき起こる')}`),

  condition: A(`
    <circle cx="70" cy="66" r="24" fill="var(--accent)" opacity=".7"/>
    <path d="M110 66 h40" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <rect x="160" y="46" width="50" height="40" rx="6" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M172 62 h26 M172 72 h18" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    ${LB(120,120,'今の状態・条件')}`),

  carry: A(`
    <circle cx="60" cy="46" r="10" fill="var(--accent)"/>
    <path d="M60 56 v20" stroke="var(--accent)" stroke-width="3"/>
    <path d="M40 76 h40" stroke="var(--accent)" stroke-width="4"/>
    <rect x="88" y="60" width="40" height="32" rx="4" fill="var(--accent)" opacity=".6"/>
    <path d="M40 100 h40" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <path d="M150 90 h50" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M204 90 l-10 -8 v16 z" fill="var(--accent)"/>
    ${LB(120,124,'運んで持っていく')}`),

  choose: A(`
    ${[46,100,154,208].map((x,i)=>`<circle cx="${x}" cy="70" r="16" fill="${i===2?'var(--accent)':'var(--muted)'}" opacity="${i===2?1:0.4}"/>`).join('')}
    <path d="M154 40 l0 16 M146 48 l8 8 8 -8" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,120,'一つを選び取る')}`),

  decision: A(`
    <path d="M40 100 v-40 l40 -20" fill="none" stroke="var(--muted)" stroke-width="3" opacity=".4"/>
    <path d="M40 60 l70 -30" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <circle cx="120" cy="26" r="10" fill="var(--accent)"/>
    <circle cx="40" cy="60" r="8" fill="var(--accent)"/>
    ${LB(120,124,'決めたこと・決定')}`),

  certain: A(`
    <circle cx="120" cy="66" r="34" fill="var(--accent)"/>
    <path d="M104 66 l12 12 22 -26" fill="none" stroke="var(--bg)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,120,'確かな・ある種の')}`),

  main: A(`
    <rect x="70" y="40" width="60" height="56" rx="4" fill="var(--accent)"/>
    <rect x="150" y="60" width="30" height="36" rx="4" fill="var(--muted)" opacity=".4"/>
    <rect x="30" y="64" width="26" height="32" rx="4" fill="var(--muted)" opacity=".4"/>
    ${LB(120,120,'一番主要な')}`),

  die: A(`
    <circle cx="70" cy="56" r="14" fill="var(--accent)" opacity=".6"/>
    <path d="M52 96 q18 -20 36 0" fill="var(--accent)" opacity=".6"/>
    <path d="M70 56 v46" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    <path d="M150 40 q-10 30 10 56 q20 -26 10 -56 q-10 14 -10 0 q0 14 -10 0" fill="var(--muted)" opacity=".35"/>
    ${LB(120,124,'命が終わる・枯れる')}`),

  bear: A(`
    <rect x="150" y="70" width="20" height="30" rx="8" fill="var(--accent)"/>
    <path d="M150 90 h20" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 90 h20" stroke="var(--accent)" stroke-width="4"/>
    <path d="M60 60 q0 -20 20 -20 q20 0 20 20 v30 q0 14 -20 14 q-20 0 -20 -14 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(80,120,'重みに耐える・産む')}`),

  cut: A(`
    <rect x="40" y="56" width="140" height="18" rx="3" fill="var(--accent)"/>
    <path d="M120 40 l10 20 -10 20 -10 -20 z" fill="var(--muted)"/>
    <path d="M180 30 l30 30 m0 -30 l-30 30" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,120,'切る・削る')}`),

  describe: A(`
    <rect x="60" y="30" width="80" height="70" rx="4" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
    <path d="M78 46 q20 -10 44 0 q20 10 0 20 q-24 10 -44 0" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <path d="M150 66 h50" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M204 66 l-10 -8 v16 z" fill="var(--accent)"/>
    ${LB(120,120,'言葉で描き出す')}`),

  himself: A(`
    <circle cx="90" cy="60" r="14" fill="var(--accent)"/>
    <rect x="76" y="76" width="28" height="26" rx="6" fill="var(--accent)"/>
    <path d="M118 88 q30 -20 60 -4" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <path d="M178 84 l-6 12 12 -2 z" fill="var(--accent)"/>
    ${LB(120,124,'彼自身へ返ってくる')}`),

  available: A(`
    <circle cx="70" cy="66" r="16" fill="var(--accent)"/>
    <path d="M90 66 h60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <circle cx="170" cy="66" r="16" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,124,'今すぐ使える・空いている')}`),

  especially: A(`
    ${[46,80,158,192].map(x=>`<circle cx="${x}" cy="80" r="10" fill="var(--muted)" opacity=".4"/>`).join('')}
    <circle cx="120" cy="60" r="16" fill="var(--accent)"/>
    <path d="M120 40 v-16 M108 34 l12 -10 12 10" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(120,124,'とりわけこれが際立つ')}`),

  maybe: A(`
    <path d="M40 100 A80 80 0 0 1 200 100" fill="none" stroke="var(--muted)" stroke-width="10" opacity=".3"/>
    <path d="M40 100 A80 80 0 0 1 120 20" fill="none" stroke="var(--accent)" stroke-width="10"/>
    <line x1="120" y1="100" x2="120" y2="22" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="100" r="6" fill="var(--accent)"/>
    ${LB(120,124,'半々くらい・もしかすると')}`),

  community: A(`
    ${[[70,50],[120,40],[170,50],[90,90],[150,90],[120,70]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--accent)" opacity=".75"/>`).join('')}
    <circle cx="120" cy="70" r="52" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    ${LB(120,132,'ともに暮らす地域社会')}`),

  else: A(`
    <circle cx="70" cy="66" r="16" fill="var(--muted)" opacity=".4"/>
    <path d="M96 66 h30" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="150" cy="66" r="16" fill="var(--accent)"/>
    ${LB(120,120,'それ以外の・さもなければ')}`),

  particular: A(`
    ${[46,80,158,192].map(x=>`<circle cx="${x}" cy="80" r="9" fill="var(--muted)" opacity=".35"/>`).join('')}
    <circle cx="120" cy="66" r="20" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="2 5"/>
    <circle cx="120" cy="66" r="9" fill="var(--accent)"/>
    ${LB(120,120,'これぞという特定の')}`),

  role: A(`
    <circle cx="60" cy="50" r="14" fill="var(--accent)"/>
    <rect x="46" y="66" width="28" height="30" rx="6" fill="var(--accent)"/>
    <rect x="150" y="40" width="60" height="56" rx="6" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
    <text x="180" y="76" text-anchor="middle" font-size="20" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    ${LB(120,124,'割り当てられた役割')}`),

  difficult: A(SP2 + `
    <path d="M30 90 h40" stroke="var(--accent)" stroke-width="6"/>
    ${LB(61,120,'簡単')}
    <path d="M150 90 q10 -50 60 -50" fill="none" stroke="var(--accent)" stroke-width="6"/>
    ${LB(180,120,'難しい')}`),

  please: A(`
    <circle cx="70" cy="66" r="20" fill="var(--accent)" opacity=".7"/>
    <path d="M56 62 q14 -10 28 0" fill="none" stroke="var(--bg)" stroke-width="2.5"/>
    <path d="M110 66 h60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <text x="185" y="76" text-anchor="middle" font-size="26" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    ${LB(120,120,'丁寧にお願いする')}`),

  detail: A(`
    <rect x="50" y="34" width="140" height="76" rx="6" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <rect x="82" y="58" width="40" height="28" rx="3" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <circle cx="150" cy="72" r="24" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="168" y1="90" x2="184" y2="106" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,126,'細かな一つ一つ')}`),

  difference: A(SP2 + `
    <path d="M30 60 h60" stroke="var(--accent)" stroke-width="6"/>
    ${LB(61,120,'長い')}
    <path d="M150 60 h20" stroke="var(--accent)" stroke-width="6"/>
    ${LB(180,120,'短い（違いがある）')}`),

  action: A(`
    <circle cx="70" cy="46" r="12" fill="var(--accent)"/>
    <path d="M70 58 v20 M70 68 l-18 24 M70 68 l18 24 M52 62 l18 10 18 -10" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M50 100 q20 8 40 0" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,124,'実際に体を動かす')}`),

  themselves: A(`
    <circle cx="60" cy="52" r="11" fill="var(--accent)"/>
    <rect x="49" y="66" width="22" height="20" rx="5" fill="var(--accent)"/>
    <circle cx="180" cy="52" r="11" fill="var(--accent)"/>
    <rect x="169" y="66" width="22" height="20" rx="5" fill="var(--accent)"/>
    <path d="M84 78 q36 20 74 0" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(120,120,'彼ら自身へ返ってくる')}`),

  white: A(`
    <rect x="60" y="34" width="120" height="64" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,120,'白い')}`),

  practice: A(`
    ${[0,1,2].map(i=>`<circle cx="${70+i*40}" cy="66" r="9" fill="var(--accent)" opacity="${0.4+i*0.3}"/>`).join('')}
    <path d="M60 90 q60 -20 120 0" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    ${LB(120,120,'くり返し練習する')}`),

  model: A(SP2 + `
    <path d="M40 96 v-24 h42 v24 z M46 72 l15 -18 15 18" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(61,120,'模型')}
    <circle cx="180" cy="52" r="12" fill="var(--accent)"/>
    <path d="M162 100 q18 -22 36 0" fill="var(--accent)"/>
    ${LB(180,120,'手本・モデル')}`),

  raise: A(`
    <rect x="70" y="60" width="30" height="36" fill="var(--accent)" opacity=".7"/>
    <path d="M85 50 v-30" stroke="var(--accent)" stroke-width="3"/>
    <path d="M85 14 l-8 14 h16 z" fill="var(--accent)"/>
    <circle cx="160" cy="70" r="12" fill="var(--accent)"/>
    <path d="M144 106 q16 -18 32 0" fill="var(--accent)"/>
    <path d="M160 60 v-14" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(120,124,'上げる・育てる')}`),

  explain: A(`
    <circle cx="60" cy="66" r="16" fill="var(--accent)"/>
    <path d="M80 50 q40 -14 60 4 q10 8 -4 16 q-30 10 -56 -4" fill="var(--accent)" opacity=".7"/>
    <path d="M100 76 h50" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(120,124,'わかるように説く')}`),

  economic: A(`
    <polyline points="30,96 66,74 102,84 138,52 174,60 210,30" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M210 30 l-14 2 4 12 z" fill="var(--accent)"/>
    <text x="60" y="70" text-anchor="middle" font-size="16" fill="var(--accent)" font-family="-apple-system,sans-serif">¥</text>
    ${LB(120,124,'経済のしくみ')}`),

  approach: A(`
    <circle cx="40" cy="66" r="10" fill="var(--accent)"/>
    <path d="M56 66 h100" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <path d="M156 66 l-14 8 v-16 z" fill="var(--accent)"/>
    <rect x="176" y="44" width="34" height="44" rx="5" fill="var(--accent)" opacity=".4" stroke="var(--accent)" stroke-width="2"/>
    ${LB(120,120,'近づく・取り組み方')}`),

  charge: A(SP2 + `
    <text x="61" y="72" text-anchor="middle" font-size="20" fill="var(--accent)" font-family="-apple-system,sans-serif">¥</text>
    ${LB(61,120,'料金・請求')}
    <path d="M180 46 l0 12 M180 90 l0 12 M156 68 h12 M192 68 h12" stroke="var(--accent)" stroke-width="4"/>
    <rect x="168" y="56" width="24" height="24" rx="3" fill="var(--accent)" opacity=".6"/>
    ${LB(180,120,'充電する')}`),

  finally: A(`
    ${[46,90,134].map(x=>`<circle cx="${x}" cy="70" r="9" fill="var(--muted)" opacity=".4"/>`).join('')}
    <path d="M150 70 h30" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="196" cy="70" r="16" fill="var(--accent)"/>
    <path d="M188 70 l6 6 10 -12" fill="none" stroke="var(--bg)" stroke-width="3"/>
    ${LB(120,120,'長く経てついに')}`),

  claim: A(`
    <circle cx="60" cy="60" r="16" fill="var(--accent)"/>
    <path d="M80 46 q40 -10 56 8 q6 8 -6 12" fill="var(--accent)" opacity=".8"/>
    <path d="M126 66 l16 -4" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    <text x="130" y="60" text-anchor="middle" font-size="16" fill="var(--accent)" font-family="-apple-system,sans-serif">!</text>
    ${LB(120,124,'強く主張する')}`),

  relationship: A(`
    <circle cx="70" cy="66" r="18" fill="var(--accent)"/>
    <circle cx="170" cy="66" r="18" fill="var(--accent)"/>
    <path d="M88 66 h64" stroke="var(--accent)" stroke-width="3"/>
    <path d="M88 56 h64 M88 76 h64" stroke="var(--accent)" stroke-width="1.5" opacity=".4"/>
    ${LB(120,120,'つながりのある関係')}`),

  enjoy: A(`
    <circle cx="120" cy="66" r="30" fill="var(--accent)"/>
    <path d="M104 62 q0 -4 4 -4 M136 62 q0 -4 -4 -4" stroke="var(--bg)" stroke-width="3"/>
    <path d="M102 76 q18 16 36 0" fill="none" stroke="var(--bg)" stroke-width="3"/>
    ${LB(120,118,'楽しむ')}`),

  death: A(`
    <circle cx="120" cy="60" r="20" fill="var(--muted)" opacity=".4"/>
    <path d="M100 96 h40" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <path d="M120 80 v20" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,124,'命が終わること')}`),

  nice: A(`
    <circle cx="120" cy="66" r="28" fill="var(--accent)"/>
    <path d="M106 60 q0 -3 3 -3 M138 60 q0 -3 -3 -3" stroke="var(--bg)" stroke-width="3"/>
    <path d="M104 74 q16 14 32 0" fill="none" stroke="var(--bg)" stroke-width="3"/>
    ${LB(120,120,'すてき・親切')}`),

  improve: A(`
    <polyline points="30,96 74,80 118,86 162,54 206,30" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M206 30 l-14 2 4 12 z" fill="var(--accent)"/>
    <line x1="24" y1="106" x2="216" y2="106" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,126,'よりよくなっていく')}`),

  regard: A(SP2 + `
    <circle cx="61" cy="60" r="14" fill="var(--accent)"/>
    <path d="M40 60 q21 -18 42 0" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(61,120,'〜とみなす')}
    <path d="M180 40 q-16 10 -16 26 q0 16 16 26 q16 -10 16 -26 q0 -16 -16 -26" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(180,120,'敬意')}`),

  organization: A(`
    <circle cx="120" cy="40" r="10" fill="var(--accent)"/>
    ${[70,120,170].map(x=>`<circle cx="${x}" cy="86" r="9" fill="var(--accent)" opacity=".7"/>`).join('')}
    <path d="M120 50 v20 M120 70 h-50 v16 M120 70 h50 v16 M120 70 v16" stroke="var(--accent)" stroke-width="2"/>
    ${LB(120,124,'組織立ってまとまる団体')}`),

  couple: A(`
    <circle cx="90" cy="66" r="18" fill="var(--accent)"/>
    <circle cx="150" cy="66" r="18" fill="var(--accent)" opacity=".8"/>
    <path d="M108 66 h24" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(120,120,'一組・二人')}`),

  act: A(`
    <circle cx="70" cy="46" r="11" fill="var(--accent)"/>
    <path d="M70 58 v22 M70 68 l-16 22 M70 68 l16 22 M54 62 l16 10 16 -10" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
    <path d="M150 40 h60 v56 h-60 z" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <circle cx="180" cy="60" r="10" fill="var(--accent)" opacity=".7"/>
    ${LB(120,124,'行動する・演じる')}`),

  quality: A(`
    ${[0,1,2].map(i=>`<path d="M${50+i*70} 34 l9 20 22 3 -16 15 4 22 -19 -11 -19 11 4 -22 -16 -15 22 -3 z" fill="var(--accent)" opacity="${i===1?1:0.4}"/>`).join('')}
    ${LB(120,124,'質の高さ')}`),

  project: A(`
    <path d="M40 60 q40 -20 90 -20 q60 0 90 20" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    <circle cx="60" cy="80" r="10" fill="var(--accent)"/>
    <circle cx="130" cy="70" r="10" fill="var(--accent)" opacity=".7"/>
    <circle cx="200" cy="60" r="10" fill="var(--accent)" opacity=".5"/>
    <path d="M60 80 l70 -10 70 -10" fill="none" stroke="var(--accent)" stroke-width="2"/>
    ${LB(120,124,'計画して進める')}`),

  opportunity: A(`
    <circle cx="120" cy="66" r="16" fill="var(--accent)"/>
    <path d="M100 40 a20 20 0 0 1 40 0" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".5"/>
    <path d="M120 40 v-14 M112 32 l8 -8 8 8" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(120,120,'開いている好機')}`),

  accord: A(`
    <path d="M60 60 q30 -20 60 0 q30 20 60 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="60" cy="60" r="9" fill="var(--accent)"/>
    <circle cx="180" cy="60" r="9" fill="var(--accent)"/>
    ${LB(120,100,'ぴったり合う')}`),

  list: A(`
    <rect x="60" y="30" width="120" height="80" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${[46,64,82,100].map(y=>`<circle cx="76" cy="${y}" r="3" fill="var(--accent)"/><line x1="88" y1="${y}" x2="164" y2="${y}" stroke="var(--accent)" stroke-width="2" opacity=".6"/>`).join('')}
    ${LB(120,124,'並べた一覧')}`),

  therefore: A(`
    <circle cx="50" cy="66" r="10" fill="var(--accent)" opacity=".6"/>
    <circle cx="90" cy="66" r="10" fill="var(--accent)" opacity=".6"/>
    <path d="M112 66 h60" stroke="var(--accent)" stroke-width="3"/>
    <path d="M172 66 l-14 8 v-16 z" fill="var(--accent)"/>
    <circle cx="200" cy="66" r="12" fill="var(--accent)"/>
    ${LB(120,120,'それゆえに導かれる')}`),

  rest: A(`
    <rect x="80" y="60" width="60" height="34" rx="16" fill="var(--accent)" opacity=".7"/>
    <path d="M80 60 q30 -20 60 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="24" y1="106" x2="216" y2="106" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,124,'休息する・残り')}`),

  kid: A(`
    <circle cx="120" cy="52" r="16" fill="var(--accent)"/>
    <path d="M96 106 q24 -22 48 0" fill="var(--accent)"/>
    <path d="M96 106 v-10 q24 -18 48 0 v10" fill="var(--accent)"/>
    ${LB(120,124,'子ども')}`),

  industry: A(`
    <path d="M30 96 v-30 h20 l10 -10 v10 h20 l10 -14 v14 h20 v30 z" fill="var(--accent)"/>
    <circle cx="70" cy="46" r="6" fill="var(--muted)" opacity=".5"/>
    <circle cx="90" cy="42" r="6" fill="var(--muted)" opacity=".4"/>
    <rect x="140" y="70" width="70" height="26" rx="3" fill="var(--accent)" opacity=".6"/>
    <circle cx="150" cy="96" r="8" fill="var(--accent)"/>
    <circle cx="196" cy="96" r="8" fill="var(--accent)"/>
    ${LB(120,124,'ものを作る産業')}`),

  education: A(`
    <path d="M120 34 l60 24 -60 24 -60 -24 z" fill="var(--accent)"/>
    <path d="M60 58 v30 q60 24 120 0 v-30" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(120,120,'学び育てる教育')}`),

  serve: A(`
    <rect x="90" y="70" width="60" height="10" rx="3" fill="var(--accent)"/>
    <circle cx="120" cy="60" r="14" fill="var(--accent)" opacity=".6"/>
    <path d="M60 60 h20" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    <circle cx="52" cy="60" r="8" fill="var(--accent)"/>
    ${LB(120,120,'差し出し仕える')}`),

  likely: A(`
    <path d="M40 100 A80 80 0 0 1 200 100" fill="none" stroke="var(--muted)" stroke-width="10" opacity=".3"/>
    <path d="M40 100 A80 80 0 0 1 186 62" fill="none" stroke="var(--accent)" stroke-width="10"/>
    <line x1="120" y1="100" x2="182" y2="60" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="100" r="6" fill="var(--accent)"/>
    ${LB(120,124,'ありそう（高め）')}`),

  certainly: A(`
    <circle cx="120" cy="66" r="38" fill="var(--accent)"/>
    <path d="M100 66 l14 14 26 -30" fill="none" stroke="var(--bg)" stroke-width="5" stroke-linecap="round"/>
    ${LB(120,120,'確かに・もちろん')}`),

  national: A(`
    <path d="M40 96 h160" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 96 v-60" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 36 h40 l-8 14 8 14 h-40 z" fill="var(--accent)"/>
    ${LB(120,120,'国全体の')}`),

  itself: A(`
    <circle cx="120" cy="60" r="18" fill="var(--accent)"/>
    <path d="M138 66 q26 10 0 30 q-16 12 -30 0" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <path d="M108 96 l-8 6 10 6 z" fill="var(--accent)"/>
    ${LB(120,124,'それ自身へ返ってくる')}`),

  teach: A(`
    <rect x="150" y="34" width="70" height="50" rx="3" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M162 50 h30 M162 62 h20" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <circle cx="60" cy="60" r="14" fill="var(--accent)"/>
    <path d="M80 62 h56" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M132 62 l-10 -8 v16 z" fill="var(--accent)"/>
    ${LB(120,120,'知識を教え授ける')}`),

  security: A(`
    <path d="M120 34 l46 18 v30 q0 40 -46 54 q-46 -14 -46 -54 v-30 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M104 68 l12 12 22 -26" fill="none" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round"/>
    ${LB(120,124,'守られて安全')}`),

  benefit: A(`
    <circle cx="70" cy="66" r="16" fill="var(--accent)"/>
    <path d="M90 66 h56" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M146 66 l-10 -8 v16 z" fill="var(--accent)"/>
    <circle cx="176" cy="66" r="18" fill="var(--accent)" opacity=".8"/>
    <path d="M167 66 l6 6 12 -14" fill="none" stroke="var(--bg)" stroke-width="3"/>
    ${LB(120,124,'受け取る利益')}`),

  trade: A(`
    <path d="M40 70 h60" stroke="var(--accent)" stroke-width="3"/>
    <path d="M100 70 l-8 -8 v16 z" fill="var(--accent)"/>
    <path d="M140 54 h-60" stroke="var(--accent)" stroke-width="3"/>
    <path d="M80 54 l8 -8 v16 z" fill="var(--accent)"/>
    <rect x="150" y="46" width="50" height="34" rx="4" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'品物を交換する貿易')}`),

  risk: A(`
    <path d="M120 34 l70 96 h-140 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="120" y1="62" x2="120" y2="92" stroke="var(--accent)" stroke-width="4"/>
    <circle cx="120" cy="106" r="3.5" fill="var(--accent)"/>
    ${LB(120,124,'危険をはらむ')}`),

  standard: A(`
    <line x1="120" y1="30" x2="120" y2="110" stroke="var(--accent)" stroke-width="3"/>
    <rect x="70" y="52" width="50" height="14" fill="var(--accent)" opacity=".8"/>
    <path d="M70 52 l-14 20 h28 z" fill="var(--accent)" opacity=".5"/>
    ${LB(120,124,'みなが従う基準')}`),

  vote: A(`
    <rect x="90" y="66" width="60" height="34" rx="3" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <rect x="100" y="34" width="40" height="26" rx="2" fill="var(--accent)"/>
    <path d="M120 60 v-6" stroke="var(--accent)" stroke-width="2"/>
    <path d="M100 74 l20 6 20 -6" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    ${LB(120,124,'票を投じる')}`),

  focus: A(`
    <circle cx="120" cy="66" r="40" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".3"/>
    <circle cx="120" cy="66" r="24" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="120" cy="66" r="8" fill="var(--accent)"/>
    ${LB(120,124,'一点に集中する')}`),

  instead: A(`
    <circle cx="70" cy="66" r="16" fill="var(--muted)" opacity=".4"/>
    <line x1="52" y1="48" x2="88" y2="84" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <path d="M96 66 h30" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="160" cy="66" r="16" fill="var(--accent)"/>
    ${LB(120,120,'その代わりに')}`),

  realize: A(`
    <circle cx="120" cy="66" r="20" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 46 v-14 M108 38 l12 -10 12 10" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="120" cy="66" r="6" fill="var(--accent)"/>
    ${LB(120,124,'はっと気づく')}`),

  usually: A(`
    <line x1="24" y1="70" x2="216" y2="70" stroke="var(--accent)" stroke-width="3"/>
    ${[46,80,114,148,182,216].map((x,i)=>`<circle cx="${x}" cy="70" r="6" fill="var(--accent)" opacity="${i===2?0.2:1}"/>`).join('')}
    ${LB(120,120,'たいていはこう（ほぼ毎回）')}`),

  data: A(`
    ${[0,1,2,3].map(i=>`<ellipse cx="${60+i*40}" cy="${90-i*8}" rx="16" ry="8" fill="var(--accent)" opacity="${0.4+i*0.15}"/>`).join('')}
    <path d="M44 90 v10 M180 66 v10" stroke="var(--muted)" stroke-width="1.5" opacity=".3"/>
    ${LB(120,120,'集めた資料・データ')}`),

  address: A(SP2 + `
    <rect x="30" y="50" width="62" height="40" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M30 50 l31 22 31 -22" fill="none" stroke="var(--accent)" stroke-width="2"/>
    ${LB(61,120,'住所')}
    <circle cx="180" cy="56" r="14" fill="var(--accent)"/>
    <path d="M160 96 q20 -18 40 0" fill="var(--accent)"/>
    ${LB(180,120,'演説・取り組む')}`),

  performance: A(`
    <path d="M60 96 v-40 q60 -24 120 0 v40" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <circle cx="120" cy="50" r="12" fill="var(--accent)"/>
    <path d="M108 86 q12 -14 24 0" fill="var(--accent)"/>
    ${LB(120,120,'演技・成績・性能')}`),

  chance: A(`
    <circle cx="120" cy="66" r="30" fill="var(--accent)" opacity=".2"/>
    <path d="M120 36 v-10 M108 30 l12 -8 12 8" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="120" cy="66" r="10" fill="var(--accent)"/>
    ${LB(120,120,'めぐってきた機会')}`),

  accept: A(`
    <path d="M40 60 h60" stroke="var(--accent)" stroke-width="3"/>
    <path d="M100 60 l-8 -8 v16 z" fill="var(--accent)"/>
    <path d="M150 40 q10 -14 24 0 q4 10 -4 16 h-32 q-8 -6 -4 -16 q10 -12 16 0" fill="var(--accent)"/>
    <path d="M132 90 l14 14 30 -34" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,124,'受け入れる')}`),

  society: A(`
    ${[[70,50],[120,40],[170,50],[90,90],[150,90]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--accent)" opacity=".8"/>`).join('')}
    <circle cx="120" cy="68" r="52" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4" opacity=".5"/>
    ${LB(120,132,'まとまって暮らす社会')}`),

  mention: A(`
    <circle cx="60" cy="66" r="16" fill="var(--accent)"/>
    <path d="M80 50 q30 -8 40 4 q4 6 -6 10" fill="var(--accent)" opacity=".7"/>
    <text x="112" y="58" text-anchor="middle" font-size="14" fill="var(--accent)" font-family="-apple-system,sans-serif">…</text>
    ${LB(120,120,'ちらっと話に出す')}`),

  choice: A(`
    ${[46,100,154,208].map((x,i)=>`<circle cx="${x}" cy="70" r="16" fill="${i===2?'var(--accent)':'var(--muted)'}" opacity="${i===2?1:0.4}"/>`).join('')}
    ${LB(120,120,'選ばれたもの・選択')}`),

  common: A(`
    <circle cx="86" cy="66" r="36" fill="var(--accent)" opacity=".4"/>
    <circle cx="154" cy="66" r="36" fill="var(--accent)" opacity=".4"/>
    <circle cx="120" cy="66" r="16" fill="var(--accent)"/>
    ${LB(120,122,'両方に共通する')}`),

  culture: A(`
    <circle cx="70" cy="60" r="14" fill="var(--accent)"/>
    <path d="M70 74 v20" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    <rect x="140" y="40" width="24" height="34" rx="3" fill="var(--accent)" opacity=".7"/>
    <path d="M180 46 h30 M180 60 h20" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <path d="M150 90 q30 10 60 0" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,124,'受け継がれる文化')}`),

  demand: A(`
    <circle cx="60" cy="66" r="16" fill="var(--accent)"/>
    <path d="M80 50 q30 -10 44 6" fill="var(--accent)" opacity=".8"/>
    <text x="120" y="52" text-anchor="middle" font-size="18" fill="var(--accent)" font-family="-apple-system,sans-serif">!</text>
    <path d="M150 90 h50" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <circle cx="205" cy="90" r="12" fill="var(--muted)" opacity=".5"/>
    ${LB(120,124,'強く求める・需要')}`),

  material: A(`
    ${[[40,80],[70,80],[100,80]].map(([x,y])=>`<rect x="${x}" y="${y}" width="24" height="20" fill="var(--accent)" opacity=".7"/>`).join('')}
    <path d="M140 96 h60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M200 96 l-10 -8 v16 z" fill="var(--accent)"/>
    <rect x="150" y="40" width="60" height="40" rx="4" fill="var(--accent)" opacity=".85"/>
    ${LB(120,124,'元になる材料・物質')}`),

  due: A(`
    <line x1="24" y1="70" x2="216" y2="70" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="170" cy="70" r="12" fill="var(--accent)"/>
    <path d="M170 58 v-16 M158 46 l12 -8 12 8" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(170,96,'期限')}`),

  effort: A(`
    <circle cx="70" cy="70" r="12" fill="var(--accent)"/>
    <path d="M82 70 h70" stroke="var(--accent)" stroke-width="4"/>
    <rect x="152" y="56" width="30" height="28" rx="4" fill="var(--accent)" opacity=".5"/>
    <path d="M60 84 q10 10 20 0" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,120,'力をこめて押す努力')}`),

  attention: A(`
    <circle cx="120" cy="66" r="12" fill="var(--accent)"/>
    ${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
      return `<line x1="${120+22*Math.cos(r)}" y1="${66+22*Math.sin(r)}" x2="${120+34*Math.cos(r)}" y2="${66+34*Math.sin(r)}" stroke="var(--accent)" stroke-width="2.5"/>`}).join('')}
    ${LB(120,124,'意識を集める注目')}`),

  upon: A(`
    <rect x="70" y="80" width="100" height="16" rx="3" fill="var(--muted)" opacity=".5"/>
    <rect x="100" y="56" width="40" height="24" rx="3" fill="var(--accent)"/>
    ${LB(120,124,'〜の上に乗って')}`),

  check: A(`
    <rect x="60" y="34" width="120" height="76" rx="6" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M84 72 l16 16 40 -40" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(120,124,'確かめる・点検')}`),

  complete: A(SP2 + `
    ${[0,1,2].map(i=>`<rect x="${30+i*22}" y="${86-i*0}" width="18" height="20" fill="var(--accent)" opacity=".5"/>`).join('')}
    <rect x="30" y="52" width="18" height="20" fill="var(--muted)" opacity=".3" stroke="var(--muted)" stroke-dasharray="3 3"/>
    ${LB(61,120,'途中')}
    ${[0,1,2,3].map(i=>`<rect x="${146+i*17}" y="52" width="15" height="54" fill="var(--accent)"/>`).join('')}
    ${LB(180,120,'完成した')}`),

  lie: A(SP2 + `
    <rect x="30" y="70" width="60" height="14" rx="6" fill="var(--accent)"/>
    <circle cx="40" cy="63" r="10" fill="var(--accent)"/>
    ${LB(61,120,'横たわる')}
    <circle cx="180" cy="66" r="16" fill="var(--accent)"/>
    <path d="M164 60 q16 -10 32 0" fill="none" stroke="var(--bg)" stroke-width="2"/>
    <path d="M198 50 l14 -4" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    ${LB(180,120,'うそをつく')}`),

  personal: A(`
    <circle cx="120" cy="56" r="16" fill="var(--accent)"/>
    <path d="M96 106 q24 -22 48 0" fill="var(--accent)"/>
    <circle cx="120" cy="66" r="46" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    ${LB(120,132,'その人だけの個人的な')}`),

  current: A(SP2 + `
    <circle cx="61" cy="66" r="16" fill="var(--accent)"/>
    <path d="M40 46 h42" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 3" opacity=".4"/>
    ${LB(61,120,'現在の')}
    <path d="M140 60 q20 -14 40 0 q20 14 40 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M212 60 l-4 -8 -6 6 z" fill="var(--accent)"/>
    ${LB(180,120,'流れ')}`),

  evidence: A(`
    <rect x="70" y="30" width="60" height="70" rx="4" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <circle cx="160" cy="60" r="22" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="176" y1="76" x2="196" y2="96" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    <path d="M95 55 l10 8 16 -18" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,124,'裏づける証拠')}`),

  exist: A(`
    <circle cx="120" cy="66" r="26" fill="var(--accent)"/>
    <circle cx="120" cy="66" r="40" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 5" opacity=".4"/>
    ${LB(120,120,'たしかに存在する')}`),

  fine: A(SP2 + `
    <circle cx="61" cy="66" r="26" fill="var(--accent)"/>
    <path d="M50 62 q11 8 22 0" fill="none" stroke="var(--bg)" stroke-width="2.5"/>
    ${LB(61,120,'すばらしい')}
    <text x="180" y="74" text-anchor="middle" font-size="18" fill="var(--accent)" font-family="-apple-system,sans-serif">¥</text>
    <rect x="150" y="46" width="60" height="34" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(180,120,'罰金')}`),

  former: A(`
    <circle cx="60" cy="66" r="16" fill="var(--accent)"/>
    <circle cx="170" cy="66" r="16" fill="var(--muted)" opacity=".4"/>
    <path d="M86 66 h60" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    ${LB(60,96,'前者')}${LB(170,96,'後者')}
    ${LB(120,124,'前の・以前の')}`),

  contact: A(`
    <circle cx="70" cy="66" r="16" fill="var(--accent)"/>
    <circle cx="170" cy="66" r="16" fill="var(--accent)"/>
    <line x1="86" y1="66" x2="154" y2="66" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,120,'連絡してつながる')}`),

  particularly: A(`
    ${[46,80,158,192].map(x=>`<circle cx="${x}" cy="80" r="9" fill="var(--muted)" opacity=".35"/>`).join('')}
    <path d="M120 30 l7 16 18 2 -13 12 3 18 -15 -8 -15 8 3 -18 -13 -12 18 -2 z" fill="var(--accent)"/>
    ${LB(120,120,'それが特に際立つ')}`),

  prepare: A(`
    ${[0,1,2].map(i=>`<rect x="${40+i*30}" y="${86-i*8}" width="24" height="${20+i*8}" fill="var(--accent)" opacity="${0.4+i*0.25}"/>`).join('')}
    <path d="M150 66 h50" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M204 66 l-10 -8 v16 z" fill="var(--accent)"/>
    <path d="M150 46 l16 -14 v14 z" fill="var(--muted)" opacity=".4"/>
    ${LB(120,120,'前もって準備する')}`),

  discuss: A(`
    <circle cx="70" cy="60" r="16" fill="var(--accent)"/>
    <circle cx="170" cy="60" r="16" fill="var(--accent)" opacity=".8"/>
    <path d="M90 50 q20 -6 30 6" fill="var(--accent)" opacity=".7"/>
    <path d="M150 76 q-20 6 -30 -6" fill="var(--accent)" opacity=".6"/>
    ${LB(120,120,'たがいに意見を出す')}`),

  response: A(`
    <path d="M40 60 h50" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4" opacity=".5"/>
    <path d="M90 60 l-10 -8 v16 z" fill="var(--muted)" opacity=".5"/>
    <path d="M170 84 h-50" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 84 l10 -8 v16 z" fill="var(--accent)"/>
    <circle cx="30" cy="60" r="12" fill="var(--muted)" opacity=".4"/>
    <circle cx="190" cy="84" r="12" fill="var(--accent)"/>
    ${LB(120,120,'呼びかけに応じ返す')}`),

  piece: A(`
    <path d="M60 40 h100 v60 h-100 z" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4" opacity=".4"/>
    <path d="M60 40 h50 v30 h-50 z" fill="var(--accent)"/>
    ${LB(120,120,'全体の中の一片')}`),

  suppose: A(`
    <circle cx="120" cy="60" r="20" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <text x="120" y="66" text-anchor="middle" font-size="16" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    ${LB(120,120,'こうだろうと思う')}`),

  apply: A(SP2 + `
    <rect x="30" y="46" width="60" height="46" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M45 92 v10 M75 92 v10" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(61,120,'当てはめる')}
    <rect x="150" y="46" width="60" height="46" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M156 60 h12 M156 72 h20" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    ${LB(180,120,'応募する')}`),

  compare: A(`
    <circle cx="70" cy="66" r="20" fill="var(--accent)" opacity=".7"/>
    <circle cx="170" cy="66" r="26" fill="var(--accent)" opacity=".5"/>
    <path d="M96 50 q24 -6 40 0" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".5"/>
    ${LB(120,120,'並べて見比べる')}`),

  knowledge: A(`
    <path d="M70 36 q-34 4 -34 36 q0 20 18 28 h32 q18 -8 18 -28 q0 -32 -34 -36 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <text x="70" y="76" text-anchor="middle" font-size="20" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    <rect x="130" y="44" width="70" height="50" rx="3" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M142 60 h46 M142 72 h30" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    ${LB(120,124,'蓄えた知識')}`),

  source: A(`
    <circle cx="60" cy="70" r="10" fill="var(--accent)"/>
    <path d="M70 70 q40 -30 90 -10 q40 16 60 4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,120,'流れ出るもとの源')}`),

  manage: A(`
    <circle cx="70" cy="50" r="10" fill="var(--accent)"/>
    <path d="M70 60 h70 M70 70 h70 M70 80 h50" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <path d="M160 40 q10 -14 24 0 q4 10 -4 16 h-32 q-8 -6 -4 -16 q10 -12 16 0" fill="var(--accent)" opacity=".7"/>
    ${LB(120,124,'まとめて管理する')}`),

  simply: A(`
    <circle cx="120" cy="66" r="20" fill="var(--accent)"/>
    <circle cx="120" cy="66" r="34" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 5" opacity=".3"/>
    ${LB(120,120,'単純に・ただそれだけ')}`),

  firm: A(SP2 + `
    <rect x="30" y="40" width="60" height="60" rx="3" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${[52,66,80].map(y=>`<rect x="42" y="${y}" width="10" height="10" fill="var(--accent)" opacity=".6"/><rect x="62" y="${y}" width="10" height="10" fill="var(--accent)" opacity=".6"/>`).join('')}
    ${LB(61,120,'会社')}
    <rect x="150" y="50" width="60" height="30" rx="2" fill="var(--accent)"/>
    ${LB(180,120,'堅い')}`),

  cell: A(SP2 + `
    <circle cx="61" cy="66" r="28" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="61" cy="66" r="10" fill="var(--accent)" opacity=".6"/>
    ${LB(61,120,'細胞')}
    <rect x="152" y="40" width="56" height="52" rx="3" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${[52,64,76].map(y=>`<line x1="152" y1="${y}" x2="208" y2="${y}" stroke="var(--accent)" stroke-width="2" opacity=".5"/>`).join('')}
    ${LB(180,120,'独房')}`),

  foreign: A(`
    <circle cx="70" cy="66" r="20" fill="var(--accent)"/>
    <path d="M50 66 h40 M70 46 v40" stroke="var(--bg)" stroke-width="1.5" opacity=".6"/>
    <path d="M120 66 h40" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="180" cy="66" r="20" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <text x="180" y="72" text-anchor="middle" font-size="14" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    ${LB(120,120,'外国の・よその')}`),

  surprise: A(`
    <circle cx="120" cy="66" r="26" fill="var(--accent)"/>
    <text x="120" y="76" text-anchor="middle" font-size="26" fill="var(--bg)" font-family="-apple-system,sans-serif">!</text>
    ${[[90,36],[150,36],[86,96],[154,96]].map(([x,y])=>`<line x1="${x}" y1="${y}" x2="${x+(x<120?-8:8)}" y2="${y+(y<66?-8:8)}" stroke="var(--accent)" stroke-width="2.5"/>`).join('')}
    ${LB(120,124,'驚かせる')}`),

  feature: A(`
    <circle cx="120" cy="66" r="30" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <path d="M100 60 q20 -10 40 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="100" cy="66" r="5" fill="var(--accent)"/>
    <circle cx="140" cy="66" r="5" fill="var(--accent)"/>
    ${LB(120,120,'目立つ特徴')}`),

  factor: A(`
    ${[[46,46],[46,90],[196,68]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--accent)" opacity=".7"/>`).join('')}
    <path d="M58 46 h100 M58 90 h100" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4" opacity=".5"/>
    <path d="M158 46 v44 M158 68 h26" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(120,124,'結果を左右する要因')}`),

  pretty: A(SP2 + `
    <path d="M61 40 q-20 6 -20 26 q0 20 20 30 q20 -10 20 -30 q0 -20 -20 -26" fill="var(--accent)" opacity=".7"/>
    ${LB(61,120,'かわいい')}
    <path d="M40 100 A80 80 0 0 1 200 100" fill="none" stroke="var(--muted)" stroke-width="8" opacity=".3"/>
    <path d="M40 100 A80 80 0 0 1 178 56" fill="none" stroke="var(--accent)" stroke-width="8"/>
    ${LB(180,120,'かなり')}`),

  recently: A(`
    <line x1="24" y1="70" x2="216" y2="70" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="180" cy="70" r="9" fill="var(--accent)"/>
    <circle cx="204" cy="70" r="6" fill="var(--muted)" opacity=".5"/>
    ${LB(180,96,'すぐ前')}${LB(204,96,'今')}
    ${LB(100,120,'つい最近')}`),

  affect: A(`
    <circle cx="60" cy="66" r="16" fill="var(--accent)"/>
    <path d="M78 66 h50" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <path d="M132 66 l-14 8 v-16 z" fill="var(--accent)"/>
    <circle cx="180" cy="66" r="16" fill="var(--muted)" opacity=".5"/>
    <path d="M180 50 v-10 M170 44 l10 -8 10 8" stroke="var(--accent)" stroke-width="2"/>
    ${LB(120,120,'影響を与える')}`),

  recent: A(`
    <line x1="24" y1="70" x2="216" y2="70" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="180" cy="70" r="12" fill="var(--accent)"/>
    <circle cx="204" cy="70" r="6" fill="var(--muted)" opacity=".5"/>
    ${LB(180,96,'最近の出来事')}${LB(204,96,'今')}`),

  relate: A(`
    <circle cx="70" cy="66" r="16" fill="var(--accent)"/>
    <circle cx="170" cy="66" r="16" fill="var(--accent)" opacity=".7"/>
    <path d="M86 66 h68" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(120,120,'つながりを述べる')}`),

  official: A(SP2 + `
    <circle cx="61" cy="60" r="16" fill="var(--accent)"/>
    <rect x="46" y="76" width="30" height="24" rx="4" fill="var(--accent)"/>
    ${LB(61,120,'役人')}
    <rect x="150" y="46" width="60" height="40" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="180" cy="66" r="10" fill="var(--accent)"/>
    ${LB(180,120,'公式の（押印）')}`),

  financial: A(`
    <text x="120" y="76" text-anchor="middle" font-size="30" fill="var(--accent)" font-family="-apple-system,sans-serif">¥</text>
    <circle cx="120" cy="66" r="38" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    ${LB(120,124,'お金にまつわる財政')}`),

  miss: A(`
    <circle cx="60" cy="70" r="12" fill="var(--accent)"/>
    <path d="M76 70 h60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <circle cx="150" cy="70" r="16" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="4 4" opacity=".5"/>
    <path d="M136 56 l28 28 M164 56 l-28 28" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,120,'つかみ損なう・恋しい')}`),

  campaign: A(`
    <circle cx="70" cy="66" r="14" fill="var(--accent)"/>
    <path d="M90 50 q30 -6 44 8 q6 8 -6 12" fill="var(--accent)" opacity=".8"/>
    <path d="M130 70 h30 M130 82 h20" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(120,124,'目標へ向けた運動')}`),

  private: A(SP2 + `
    <rect x="34" y="46" width="54" height="40" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M44 46 v-14 a17 17 0 0 1 34 0 v14" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(61,120,'私的な')}
    ${[[150,50],[184,50],[150,80],[184,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="10" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(180,120,'民間の')}`),

  pause: A(`
    <rect x="100" y="40" width="14" height="52" rx="3" fill="var(--accent)"/>
    <rect x="126" y="40" width="14" height="52" rx="3" fill="var(--accent)"/>
    <line x1="24" y1="106" x2="216" y2="106" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,124,'一時的に止める')}`),

  everyone: A(`
    ${[[70,50],[120,40],[170,50],[90,90],[150,90],[120,66]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="11" fill="var(--accent)"/>`).join('')}
    ${LB(120,126,'集まった全員')}`),

  forget: A(`
    <path d="M70 36 q-34 4 -34 36 q0 20 18 28 h32 q18 -8 18 -28 q0 -32 -34 -36 z" fill="none" stroke="var(--muted)" stroke-width="3" opacity=".5"/>
    <path d="M50 40 l70 60 M120 40 l-70 60" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <circle cx="170" cy="70" r="10" fill="var(--accent)" opacity=".2"/>
    ${LB(120,124,'記憶が消えていく')}`),

  opinion: A(`
    <circle cx="70" cy="60" r="16" fill="var(--accent)"/>
    <path d="M90 44 q34 -8 44 6" fill="var(--accent)" opacity=".7"/>
    <text x="126" y="52" text-anchor="middle" font-size="14" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    ${LB(120,120,'その人が思うこと')}`),

  represent: A(`
    <circle cx="60" cy="66" r="14" fill="var(--accent)" opacity=".6"/>
    ${[36,60,84].map(x=>`<circle cx="${x}" cy="90" r="8" fill="var(--muted)" opacity=".4"/>`).join('')}
    <path d="M78 66 h56" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M134 66 l-10 -8 v16 z" fill="var(--accent)"/>
    <circle cx="170" cy="60" r="18" fill="var(--accent)"/>
    ${LB(120,120,'代わって表す・代表')}`),

  international: A(`
    <circle cx="90" cy="66" r="30" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="150" cy="66" r="30" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M90 36 v60 M150 36 v60" stroke="var(--accent)" stroke-width="1.5" opacity=".4"/>
    ${LB(120,122,'国と国の間の')}`),

  contain: A(`
    <rect x="60" y="40" width="120" height="60" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${[[86,60],[120,66],[152,58]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="10" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(120,124,'中に含んでいる')}`),

  notice: A(`
    <circle cx="120" cy="66" r="22" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 44 v-14 M108 36 l12 -10 12 10" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="120" cy="66" r="7" fill="var(--accent)"/>
    ${LB(120,124,'気づいて目にとめる')}`),

  wonder: A(`
    <circle cx="120" cy="60" r="20" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="3 5"/>
    <text x="120" y="68" text-anchor="middle" font-size="20" fill="var(--accent)" font-family="-apple-system,sans-serif">?</text>
    ${LB(120,120,'不思議に思い問う')}`),

  nature: A(`
    <path d="M40 96 q20 -30 40 0" fill="var(--accent)" opacity=".6"/>
    <circle cx="150" cy="50" r="14" fill="var(--accent)"/>
    <path d="M120 96 q40 -20 90 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M60 60 q0 -20 20 0" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(120,124,'ありのままの自然')}`),

  structure: A(`
    <rect x="60" y="80" width="120" height="16" fill="var(--accent)" opacity=".8"/>
    <rect x="76" y="56" width="30" height="24" fill="var(--accent)" opacity=".6"/>
    <rect x="134" y="40" width="30" height="40" fill="var(--accent)" opacity=".6"/>
    ${LB(120,120,'組み立てられた構造')}`),

  section: A(`
    <rect x="40" y="46" width="160" height="16" fill="var(--accent)" opacity=".8"/>
    <rect x="40" y="66" width="160" height="16" fill="var(--accent)" opacity=".5"/>
    <rect x="40" y="86" width="160" height="16" fill="var(--accent)" opacity=".8"/>
    <line x1="120" y1="40" x2="120" y2="106" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".5"/>
    ${LB(120,126,'区切られた一部分')}`),

  myself: A(`
    <circle cx="120" cy="52" r="14" fill="var(--accent)"/>
    <rect x="105" y="68" width="30" height="26" rx="6" fill="var(--accent)"/>
    <path d="M136 80 q26 16 0 30 q-14 10 -26 0" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <path d="M110 108 l-8 6 10 6 z" fill="var(--accent)"/>
    ${LB(120,132,'私自身へ返ってくる')}`),

  exactly: A(`
    <circle cx="120" cy="66" r="4" fill="var(--accent)"/>
    <circle cx="120" cy="66" r="16" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="120" cy="66" r="30" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".4"/>
    ${LB(120,120,'寸分たがわず正確に')}`),

  };
})());
