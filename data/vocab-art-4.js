/* 単語のイメージ図（追加分 4）。書き方は vocab-art.js と同じ */
Object.assign(VOCAB_ART, (() => {
  const A = b => `<svg viewBox="0 0 240 140" role="img">${b}</svg>`;
  const SP2 = '<line x1="120" y1="8" x2="120" y2="132" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 5"/>';
  const LB = (x, y, t) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="11"
    fill="var(--muted)" font-family="-apple-system,sans-serif">${t}</text>`;

  return {

  whatever: A(`
    ${[[50,50],[100,40],[150,58],[200,44]].map(([x,y],i)=>{
      const shapes=[`<circle cx="${x}" cy="${y}" r="14" fill="var(--accent)" opacity="${.5+i*.1}"/>`,
        `<rect x="${x-14}" y="${y-14}" width="28" height="28" rx="4" fill="var(--accent)" opacity="${.5+i*.1}"/>`,
        `<path d="M${x} ${y-14} l14 14 -14 14 -14 -14 z" fill="var(--accent)" opacity="${.5+i*.1}"/>`,
        `<circle cx="${x}" cy="${y}" r="14" fill="var(--accent)" opacity="${.5+i*.1}"/>`];
      return shapes[i%4];}).join('')}
    <path d="M40 96 h160" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 4"/>
    <path d="M198 96 l10 -5 v10 z" fill="var(--accent)"/>
    ${LB(120,120,'どれでも同じ→何でも')}`),

  necessary: A(`
    <path d="M76 30 a44 44 0 1 0 1 0 z" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M78 30 a44 44 0 0 1 86 44" fill="none" stroke="var(--accent)" stroke-width="7" stroke-dasharray="0"/>
    <rect x="112" y="62" width="16" height="16" rx="3" fill="var(--accent)"/>
    <text x="120" y="45" text-anchor="middle" font-size="26" fill="var(--accent)" font-weight="bold">!</text>
    ${LB(120,126,'欠けたら困る→必要な')}`),

  influence: A(`
    <circle cx="70" cy="70" r="10" fill="var(--accent)"/>
    ${[26,42,58].map(r=>`<circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--accent)" stroke-width="2" opacity="${.6-r*0.007}"/>`).join('')}
    <rect x="170" y="56" width="30" height="30" rx="4" fill="var(--muted)" opacity=".5"/>
    <path d="M132 68 h30" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M162 68 l-8 5 v-10 z" fill="var(--accent)"/>
    ${LB(120,124,'波紋が届く→影響')}`),

  respect: A(`
    <circle cx="120" cy="36" r="16" fill="var(--accent)"/>
    <path d="M96 108 q24 -22 48 0" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${[0,1,2].map(i=>`<path d="M${74+i*20} 108 l6 -6" stroke="var(--accent)" stroke-width="3" opacity=".6"/>`).join('')}
    <path d="M120 60 v20" stroke="var(--muted)" stroke-width="2" opacity=".6"/>
    ${LB(120,126,'見上げて敬う')}`),

  various: A(`
    <circle cx="46" cy="50" r="16" fill="var(--accent)"/>
    <rect x="86" y="34" width="32" height="32" rx="4" fill="var(--accent)" opacity=".8"/>
    <path d="M150 34 l18 32 h-36 z" fill="var(--accent)" opacity=".65"/>
    <ellipse cx="200" cy="50" rx="18" ry="12" fill="var(--accent)" opacity=".5"/>
    <line x1="24" y1="96" x2="216" y2="96" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".6"/>
    ${LB(120,120,'形がいろいろ')}`),

  catch: A(`
    <circle cx="40" cy="40" r="10" fill="var(--accent)"/>
    <path d="M52 46 q40 10 76 40" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 5" opacity=".7"/>
    <path d="M150 60 q20 10 22 26" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <path d="M150 96 q10 -30 30 -10 q10 8 4 20 q-6 12 -22 8 q-14 -4 -12 -18 z" fill="var(--accent)"/>
    ${LB(120,126,'手を伸ばして捕まえる')}`),

  thus: A(`
    <circle cx="50" cy="60" r="16" fill="var(--accent)" opacity=".6"/>
    <circle cx="130" cy="60" r="16" fill="var(--accent)" opacity=".8"/>
    <circle cx="204" cy="60" r="16" fill="var(--accent)"/>
    <path d="M70 60 h38 M150 60 h32" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M108 60 l-8 -5 v10 z M182 60 l-8 -5 v10 z" fill="var(--accent)"/>
    ${LB(120,124,'つながって→こうして')}`),

  skill: A(`
    <rect x="86" y="60" width="44" height="52" rx="10" fill="var(--accent)"/>
    <rect x="88" y="34" width="12" height="34" rx="6" fill="var(--accent)"/>
    <rect x="102" y="24" width="12" height="44" rx="6" fill="var(--accent)"/>
    <rect x="116" y="34" width="12" height="34" rx="6" fill="var(--accent)"/>
    ${[0,1,2,3].map(i=>`<rect x="${150+i*17}" y="${96-i*16}" width="12" height="${16+i*16}" rx="2" fill="var(--accent)" opacity="${.4+i*.2}"/>`).join('')}
    ${LB(120,128,'手が磨いた腕前')}`),

  attempt: A(`
    <circle cx="120" cy="60" r="40" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="60" r="24" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="60" r="8" fill="var(--accent)"/>
    <path d="M40 108 L96 76" stroke="var(--muted)" stroke-width="3" stroke-linecap="round"/>
    <path d="M96 76 l-14 2 4 -14 z" fill="var(--muted)"/>
    ${LB(120,126,'まだ外れた矢→試み')}`),

  simple: A(SP2 + `
    <circle cx="61" cy="62" r="26" fill="var(--accent)"/>
    ${LB(61,120,'単純な形')}
    <path d="M158 62 a24 6 0 1 0 48 0 a24 6 0 1 0 -48 0 M158 62 v14 a24 6 0 0 0 48 0 v-14"
      fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M170 40 h4 M180 34 h4 M196 38 h4" stroke="var(--muted)" stroke-width="2"/>
    ${LB(182,120,'入り組んだ物')}`),

  medium: A(SP2 + `
    <rect x="24" y="44" width="24" height="36" rx="3" fill="var(--accent)" opacity=".4"/>
    <rect x="50" y="34" width="24" height="46" rx="3" fill="var(--accent)"/>
    <rect x="76" y="24" width="24" height="56" rx="3" fill="var(--accent)" opacity=".4"/>
    ${LB(61,120,'中間の大きさ')}
    <rect x="150" y="40" width="60" height="44" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
      return `<line x1="${180+34*Math.cos(r)}" y1="${62+10*Math.sin(r)}" x2="${180+40*Math.cos(r)}" y2="${62+12*Math.sin(r)}" stroke="var(--accent)" stroke-width="1.5" opacity=".5"/>`}).join('')}
    ${LB(180,120,'伝える媒体')}`),

  management: A(`
    <circle cx="120" cy="30" r="12" fill="var(--accent)"/>
    <path d="M120 42 v14" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="60" cy="90" r="10" fill="var(--muted)" opacity=".6"/>
    <circle cx="120" cy="90" r="10" fill="var(--muted)" opacity=".6"/>
    <circle cx="180" cy="90" r="10" fill="var(--muted)" opacity=".6"/>
    <path d="M120 56 L60 80 M120 56 L120 80 M120 56 L180 80" stroke="var(--accent)" stroke-width="2.5" fill="none"/>
    ${LB(120,120,'束ねて動かす')}`),

  character: A(SP2 + `
    <circle cx="61" cy="46" r="18" fill="var(--accent)"/>
    <path d="M40 100 q21 -20 42 0" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    <path d="M50 40 q11 9 22 0" fill="none" stroke="var(--bg)" stroke-width="2.5"/>
    ${LB(61,124,'その人らしさ')}
    <rect x="152" y="30" width="56" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <text x="180" y="72" text-anchor="middle" font-size="34" fill="var(--accent)" font-weight="bold">A</text>
    ${LB(180,124,'文字・登場人物')}`),

  establish: A(`
    <line x1="24" y1="112" x2="216" y2="112" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
    <rect x="76" y="88" width="88" height="20" rx="2" fill="var(--accent)" opacity=".4"/>
    <rect x="88" y="60" width="64" height="28" rx="2" fill="var(--accent)" opacity=".7"/>
    <rect x="100" y="34" width="40" height="26" rx="2" fill="var(--accent)"/>
    <path d="M120 24 v10" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M120 20 l6 8 h-12 z" fill="var(--accent)"/>
    ${LB(120,128,'土台から積み上げ設立')}`),

  indeed: A(`
    <circle cx="120" cy="60" r="40" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M100 62 l14 14 28 -30" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    <text x="120" y="120" text-anchor="middle" font-size="20" fill="var(--accent)" font-weight="bold">!</text>`),

  final: A(`
    ${[[36,86],[76,68],[116,50],[156,34]].map(([x,y])=>`<rect x="${x}" y="${y}" width="28" height="${104-y}" rx="3" fill="var(--muted)" opacity=".4"/>`).join('')}
    <rect x="196" y="18" width="28" height="86" rx="3" fill="var(--accent)"/>
    <path d="M210 8 v10" stroke="var(--accent)" stroke-width="2"/>
    <path d="M210 8 l16 5 -16 5 z" fill="var(--accent)"/>
    ${LB(120,126,'一番最後')}`),

  economy: A(SP2 + `
    <circle cx="61" cy="60" r="16" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M61 44 v32" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M46 70 q45 30 30 -20 M76 70 q-45 30 -30 -20" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".7"/>
    ${LB(61,120,'お金が回る仕組み')}
    <circle cx="180" cy="60" r="16" fill="var(--accent)"/>
    <path d="M172 60 h16" stroke="var(--bg)" stroke-width="2.5"/>
    <path d="M180 52 v16" stroke="var(--bg)" stroke-width="2.5"/>
    ${LB(180,120,'切り詰める→節約')}`),

  fit: A(SP2 + `
    <path d="M30 60 h20 v-14 h20 v14 h20 v20 h-20 v14 h-20 v-14 h-20 z" fill="var(--accent)"/>
    ${LB(61,120,'ぴったり合う')}
    <rect x="160" y="70" width="10" height="26" rx="4" fill="var(--muted)"/>
    <rect x="150" y="52" width="30" height="10" rx="4" fill="var(--accent)"/>
    <circle cx="180" cy="46" r="12" fill="var(--accent)"/>
    ${LB(180,120,'体を鍛える')}`),

  guy: A(`
    <circle cx="120" cy="44" r="18" fill="var(--accent)"/>
    <rect x="98" y="66" width="44" height="46" rx="10" fill="var(--accent)"/>
    ${LB(120,130,'男・やつ（くだけた言い方）')}`),

  function: A(SP2 + `
    <circle cx="45" cy="61" r="9" fill="var(--accent)"/>
    ${[0,60,120,180,240,300].map(a=>{const r=a*Math.PI/180;
      return `<rect x="${45+22*Math.cos(r)-5}" y="${61+22*Math.sin(r)-5}" width="10" height="10" fill="var(--accent)" transform="rotate(${a} ${45+22*Math.cos(r)} ${61+22*Math.sin(r)})"/>`}).join('')}
    ${LB(61,120,'歯車の役目')}
    <path d="M140 96 h72" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <path d="M140 40 v56" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <path d="M150 90 q20 -50 44 -46" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${LB(180,120,'x に対する y')}`),

  behavior: A(`
    <circle cx="80" cy="50" r="16" fill="var(--accent)"/>
    <rect x="62" y="70" width="36" height="40" rx="8" fill="var(--accent)"/>
    <path d="M104 84 q30 -10 50 6" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <path d="M154 90 l10 3 -6 9 z" fill="var(--accent)"/>
    ${LB(120,126,'ふるまい方')}`),

  addition: A(`
    <rect x="34" y="50" width="30" height="30" rx="4" fill="var(--accent)" opacity=".8"/>
    <text x="90" y="76" text-anchor="middle" font-size="26" fill="var(--accent)" font-weight="bold">+</text>
    <rect x="116" y="50" width="30" height="30" rx="4" fill="var(--accent)" opacity=".8"/>
    <path d="M164 65 h20" stroke="var(--muted)" stroke-width="2.5"/>
    <path d="M184 65 l-8 -5 v10 z" fill="var(--muted)"/>
    <rect x="198" y="42" width="30" height="46" rx="4" fill="var(--accent)"/>
    ${LB(120,120,'足し算・追加')}`),

  determine: A(`
    <circle cx="60" cy="60" r="9" fill="var(--accent)"/>
    <path d="M68 60 h30" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M98 60 l30 -30 M98 60 l30 30" stroke="var(--muted)" stroke-width="2.5" opacity=".4" stroke-dasharray="3 4"/>
    <path d="M98 60 l40 0" stroke="var(--accent)" stroke-width="4"/>
    <circle cx="150" cy="60" r="10" fill="var(--accent)"/>
    <path d="M150 60 l8 -8 -8 -8" fill="none" stroke="var(--accent)" stroke-width="3" transform="translate(0,0)"/>
    ${LB(120,126,'ひとつに決める')}`),

  population: A(`
    ${[0,1,2,3,4].map(r=>[0,1,2,3,4,5].map(c=>
      `<circle cx="${40+c*30}" cy="${34+r*20}" r="7" fill="var(--accent)" opacity="${.4+((r+c)%3)*.2}"/>`).join('')).join('')}
    ${LB(120,132,'人口（人の集まり）')}`),

  fail: A(`
    <circle cx="120" cy="56" r="34" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M104 40 l32 32 M136 40 l-32 32" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(120,124,'うまくいかない')}`),

  environment: A(`
    <circle cx="120" cy="66" r="46" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 5" opacity=".7"/>
    <circle cx="120" cy="80" r="20" fill="var(--accent)"/>
    <path d="M100 96 q20 10 40 0" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <path d="M76 46 q10 -14 24 -10 M164 46 q-10 -14 -24 -10" fill="none" stroke="var(--accent)" stroke-width="3" opacity=".7"/>
    ${LB(120,132,'まわりの環境')}`),

  production: A(`
    <rect x="30" y="70" width="180" height="10" rx="3" fill="var(--muted)" opacity=".5"/>
    ${[46,90,134,178].map((x,i)=>`<rect x="${x}" y="46" width="24" height="24" rx="3" fill="var(--accent)" opacity="${.4+i*.2}"/>`).join('')}
    <path d="M40 62 h180" stroke="var(--muted)" stroke-width="2" opacity=".3"/>
    <path d="M56 24 l32 0 l-8 16 h-16 z" fill="var(--accent)"/>
    ${LB(120,128,'流れ作業→生産')}`),

  contract: A(SP2 + `
    <rect x="26" y="30" width="70" height="66" rx="3" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M36 46 h50 M36 58 h50 M36 70 h30" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <path d="M62 82 q10 6 22 2" fill="none" stroke="var(--accent)" stroke-width="2"/>
    ${LB(61,120,'契約書')}
    <rect x="164" y="30" width="40" height="40" rx="4" fill="var(--accent)"/>
    <path d="M150 24 l14 10 -14 10 M230 24 l-14 10 14 10" stroke="var(--accent)" stroke-width="2.5" fill="none" opacity=".6"/>
    ${LB(180,110,'縮む')}`),

  comment: A(`
    <path d="M30 30 h150 v54 h-90 l-24 22 v-22 h-36 z" fill="var(--accent)" opacity=".8"/>
    <path d="M50 48 h100 M50 62 h70" stroke="var(--bg)" stroke-width="3" opacity=".8"/>
    ${LB(120,128,'ひとこと言う')}`),

  occur: A(`
    <line x1="20" y1="80" x2="220" y2="80" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
    ${[60,120,180].map(x=>`<circle cx="${x}" cy="80" r="4" fill="var(--muted)" opacity=".5"/>`).join('')}
    <circle cx="150" cy="80" r="10" fill="var(--accent)"/>
    <path d="M150 60 v-20" stroke="var(--accent)" stroke-width="2"/>
    <text x="150" y="34" text-anchor="middle" font-size="18" fill="var(--accent)" font-weight="bold">!</text>
    ${LB(120,124,'ある時点で起こる')}`),

  alone: A(`
    <circle cx="120" cy="50" r="16" fill="var(--accent)"/>
    <rect x="100" y="72" width="40" height="42" rx="9" fill="var(--accent)"/>
    <circle cx="120" cy="82" r="50" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 6" opacity=".5"/>
    ${LB(120,132,'ひとりきり')}`),

  significant: A(`
    <rect x="30" y="30" width="30" height="20" rx="3" fill="var(--muted)" opacity=".35"/>
    <rect x="76" y="20" width="30" height="30" rx="3" fill="var(--muted)" opacity=".4"/>
    <rect x="140" y="26" width="66" height="68" rx="4" fill="var(--accent)"/>
    <path d="M140 108 q33 -10 66 0" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(173,126,'重く見過ごせない')}`),

  series: A(`
    ${[40,80,120,160,200].map((x,i)=>`<circle cx="${x}" cy="66" r="14" fill="var(--accent)" opacity="${.4+i*.12}"/>`).join('')}
    <path d="M56 66 h32 M96 66 h32 M136 66 h32 M176 66 h32" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 3" opacity=".5"/>
    ${LB(120,124,'続き物・シリーズ')}`),

  direct: A(SP2 + `
    <path d="M28 62 h56" stroke="var(--accent)" stroke-width="5"/>
    <path d="M84 62 l-14 -8 v16 z" fill="var(--accent)"/>
    ${LB(61,120,'まっすぐ・直接')}
    <circle cx="160" cy="46" r="12" fill="var(--accent)"/>
    <rect x="150" y="60" width="20" height="24" rx="6" fill="var(--accent)"/>
    <path d="M170 68 h32" stroke="var(--accent)" stroke-width="3"/>
    <path d="M202 68 l-9 -5 v10 z" fill="var(--accent)"/>
    ${LB(190,120,'指図する')}`),

  success: A(`
    <path d="M84 108 h72 l-8 -30 h-56 z" fill="var(--accent)" opacity=".4"/>
    <path d="M100 78 l20 -46 20 46 z" fill="var(--accent)"/>
    <path d="M120 32 v-12" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M120 12 l16 6 -16 6 z" fill="var(--accent)"/>
    ${LB(120,128,'頂上に届く→成功')}`),

  director: A(`
    <circle cx="70" cy="42" r="15" fill="var(--accent)"/>
    <path d="M52 90 q18 -16 36 0 v20 h-36 z" fill="var(--accent)"/>
    <path d="M100 60 q40 -10 70 -6" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <path d="M168 54 l10 0 -4 -10" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <rect x="150 " y="70" width="20" height="16" rx="2" fill="var(--muted)" opacity=".5" transform="translate(20,0)"/>
    ${LB(120,128,'指図して動かす人')}`),

  clearly: A(SP2 + `
    <rect x="30" y="34" width="62" height="52" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="61" cy="60" r="14" fill="var(--accent)" opacity=".2"/>
    ${LB(61,120,'透けて見える')}
    <rect x="150" y="34" width="62" height="52" rx="4" fill="none" stroke="var(--muted)" stroke-width="3" opacity=".5"/>
    <circle cx="181" cy="60" r="14" fill="var(--muted)" opacity=".6" filter="blur(1px)"/>
    ${LB(181,120,'かすんで見えない')}`),

  lack: A(`
    ${[36,72,144,180].map(x=>`<rect x="${x}" y="50" width="28" height="28" rx="4" fill="var(--accent)"/>`).join('')}
    <rect x="108" y="50" width="28" height="28" rx="4" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="4 4"/>
    ${LB(120,110,'ひとつ欠けている')}`),

  review: A(`
    <rect x="76" y="30" width="88" height="70" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M92 48 h56 M92 62 h56 M92 76 h40" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <circle cx="180" cy="90" r="18" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M193 103 l14 14" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
    ${LB(120,128,'見直す・批評する')}`),

  depend: A(`
    <path d="M60 30 h120 v10 h-120 z" fill="var(--accent)"/>
    <path d="M75 40 v40" stroke="var(--muted)" stroke-width="4"/>
    <circle cx="75" cy="94" r="14" fill="var(--accent)" opacity=".7"/>
    <path d="M165 40 v20" stroke="var(--muted)" stroke-width="4" opacity=".4"/>
    ${LB(120,126,'ぶら下がって頼る')}`),

  recognize: A(`
    <circle cx="110" cy="62" r="28" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="100" cy="56" r="4" fill="var(--accent)"/><circle cx="120" cy="56" r="4" fill="var(--accent)"/>
    <path d="M98 72 q12 8 24 0" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <circle cx="150" cy="90" r="18" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M163 102 l16 16" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
    <path d="M140 84 l6 8 12 -16" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
    ${LB(120,128,'見て分かる')}`),

  department: A(`
    <rect x="34" y="30" width="172" height="72" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="120" y1="30" x2="120" y2="102" stroke="var(--accent)" stroke-width="3"/>
    <line x1="34" y1="66" x2="206" y2="66" stroke="var(--accent)" stroke-width="2.5" opacity=".6"/>
    ${LB(120,120,'組織の1部門')}`),

  gain: A(`
    <line x1="24" y1="104" x2="216" y2="104" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <polyline points="34,96 90,76 146,52 202,26" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M214 20 l-14 2 3 12 z" fill="var(--accent)"/>
    <text x="180" y="78" text-anchor="middle" font-size="22" fill="var(--accent)" font-weight="bold">+</text>
    ${LB(120,126,'増えて得る')}`),

  argue: A(`
    <path d="M28 26 h68 v34 h-30 l-16 14 v-14 h-22 z" fill="var(--accent)" opacity=".8"/>
    <path d="M144 26 h68 v34 h-22 v14 l-16 -14 h-30 z" fill="var(--accent)"/>
    <path d="M120 70 l-10 -10 10 -10 10 10 z" fill="var(--muted)" opacity=".7"/>
    ${LB(120,120,'主張がぶつかる')}`),

  holiday: A(`
    <rect x="40" y="30" width="160" height="76" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="40" y1="52" x2="200" y2="52" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="80" r="16" fill="var(--accent)"/>
    ${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
      return `<line x1="${120+20*Math.cos(r)}" y1="${80+20*Math.sin(r)}" x2="${120+26*Math.cos(r)}" y2="${80+26*Math.sin(r)}" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>`}).join('')}
    ${LB(120,124,'カレンダーの休みの日')}`),

  mark: A(SP2 + `
    <path d="M40 60 l14 16 30 -34" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(61,120,'目印・良い印')}
    <line x1="150" y1="34" x2="150" y2="94" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    <path d="M150 64 l30 -20 M150 64 l30 20" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(180,120,'書きしるす')}`),

  achieve: A(`
    ${[0,1,2,3].map(i=>`<rect x="${40+i*40}" y="${100-i*20}" width="30" height="${i*20+16}" rx="3" fill="var(--muted)" opacity=".4"/>`).join('')}
    <path d="M210 20 v20" stroke="var(--accent)" stroke-width="3"/>
    <path d="M198 20 h24 v14 h-24 z" fill="var(--accent)"/>
    <circle cx="196" cy="52" r="8" fill="var(--accent)"/>
    ${LB(120,128,'頂点に達する')}`),

  item: A(`
    <rect x="60" y="28" width="120" height="84" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${[42,64,86].map((y,i)=>`<circle cx="76" cy="${y}" r="4" fill="var(--accent)" opacity="${i===1?1:.4}"/>
      <rect x="90" y="${y-6}" width="80" height="12" rx="2" fill="var(--accent)" opacity="${i===1?1:.3}"/>`).join('')}
    ${LB(120,128,'一覧の1つ1つ')}`),

  prove: A(`
    <path d="M40 60 h60 M40 60 l-4 -4 M40 60 l-4 4" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <text x="120" y="66" text-anchor="middle" font-size="24" fill="var(--accent)" font-weight="bold">= ✓</text>
    <circle cx="170" cy="40" r="16" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M182 52 l16 16" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,120,'確かめて証明')}`),

  cent: A(`
    <circle cx="120" cy="60" r="42" fill="var(--accent)" opacity=".85"/>
    <text x="120" y="72" text-anchor="middle" font-size="34" fill="var(--bg)" font-weight="bold">¢</text>
    ${LB(120,124,'1ドルの100分の1')}`),

  stuff: A(`
    <rect x="40" y="52" width="160" height="52" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="70" cy="70" r="12" fill="var(--accent)" opacity=".7"/>
    <rect x="100" y="60" width="24" height="24" rx="3" fill="var(--accent)" opacity=".6"/>
    <path d="M150 84 l14 -24 14 24 z" fill="var(--accent)" opacity=".8"/>
    ${LB(120,124,'いろんな物・もの')}`),

  anyone: A(`
    ${[[40,60],[90,50],[150,50],[200,60]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="14" fill="var(--muted)" opacity=".4"/>`).join('')}
    <circle cx="120" cy="46" r="16" fill="var(--accent)"/>
    <text x="120" y="34" text-anchor="middle" font-size="16" fill="var(--accent)" font-weight="bold">?</text>
    ${LB(120,120,'誰でもいい')}`),

  analysis: A(`
    <circle cx="90" cy="60" r="38" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M90 60 L90 22 A38 38 0 0 1 122 78 Z" fill="var(--accent)"/>
    <path d="M90 60 L122 78 A38 38 0 0 1 62 92 Z" fill="var(--accent)" opacity=".5"/>
    <path d="M150 60 h20" stroke="var(--muted)" stroke-width="2"/>
    <circle cx="188" cy="60" r="16" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M199 71 l14 14" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,124,'分けてよく見る')}`),

  election: A(`
    <path d="M78 60 h84 v40 h-84 z" fill="var(--accent)" opacity=".3"/>
    <path d="M78 60 l42 -30 42 30 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <rect x="112" y="30" width="16" height="26" rx="2" fill="var(--accent)"/>
    <path d="M112 44 h16" stroke="var(--bg)" stroke-width="2"/>
    <path d="M104 84 l12 12 20 -22" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,124,'投票して選ぶ')}`),

  club: A(SP2 + `
    <path d="M61 34 a13 13 0 1 1 -0.1 0 M50 60 a13 13 0 1 1 22 0 M72 60 a13 13 0 1 1 22 -0 M50 62 a13 13 0 1 0 22 0"
      fill="var(--accent)" transform="translate(0,0)"/>
    <path d="M61 34 a13 13 0 1 0 0 26 a13 13 0 1 0 -22 12 a13 13 0 1 0 22 12 a13 13 0 1 0 22 -12 a13 13 0 1 0 -22 -12 z" fill="var(--accent)"/>
    <rect x="57" y="86" width="8" height="20" fill="var(--accent)"/>
    ${LB(61,120,'クラブ（カードの絵柄）')}
    ${[[160,54],[200,54],[180,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="16" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(180,120,'仲間の集まり')}`),

  discussion: A(`
    <path d="M30 30 h64 v36 h-24 l-16 16 v-16 h-24 z" fill="var(--accent)" opacity=".8"/>
    <path d="M146 40 h64 v36 h-24 v16 l-16 -16 h-24 z" fill="var(--accent)"/>
    <path d="M100 48 h40" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 3"/>
    ${LB(120,110,'話し合い')}`),

  sorry: A(`
    <circle cx="120" cy="50" r="22" fill="var(--accent)"/>
    <path d="M108 44 q5 4 0 8 M132 44 q-5 4 0 8" stroke="var(--bg)" stroke-width="2.5" fill="none"/>
    <path d="M108 62 q12 -6 24 0" fill="none" stroke="var(--bg)" stroke-width="2.5"/>
    <path d="M96 80 q24 14 48 0" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="100" cy="58" rx="3" ry="5" fill="var(--accent)" opacity=".5"/>
    ${LB(120,128,'すまなく思う')}`),

  challenge: A(`
    <path d="M60 108 L100 30 L140 108 Z" fill="var(--accent)" opacity=".3"/>
    <path d="M96 60 h30 v20 h-14 l-8 8 v-8 h-8 z" fill="var(--accent)"/>
    <path d="M188 24 v20" stroke="var(--accent)" stroke-width="3"/>
    <path d="M176 24 h24 v14 h-24 z" fill="var(--accent)"/>
    ${LB(120,128,'難しさへの挑戦')}`),

  nation: A(`
    <path d="M50 100 q0 -60 70 -74 q70 14 70 74 z" fill="var(--accent)" opacity=".25"/>
    <path d="M120 26 v14" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 30 h26 l-8 12 8 12 h-26 z" fill="var(--accent)"/>
    <line x1="70" y1="104" x2="170" y2="104" stroke="var(--accent)" stroke-width="2.5" opacity=".6"/>
    ${LB(120,128,'国旗のもとの国')}`),

  nearly: A(`
    <rect x="30" y="54" width="180" height="20" rx="10" fill="var(--muted)" opacity=".3"/>
    <rect x="30" y="54" width="152" height="20" rx="10" fill="var(--accent)"/>
    <path d="M210 44 v30" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 3"/>
    ${LB(120,100,'ほとんど届く')}`),

  statement: A(`
    <path d="M30 26 h180 v56 h-100 l-24 22 v-22 h-56 z" fill="var(--accent)" opacity=".8"/>
    <path d="M50 42 h140 M50 56 h140 M50 70 h90" stroke="var(--bg)" stroke-width="2.5" opacity=".8"/>
    ${LB(120,120,'言い切る発言')}`),

  despite: A(`
    <path d="M40 60 h64" stroke="var(--muted)" stroke-width="4" opacity=".5"/>
    <rect x="96" y="42" width="36" height="36" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M104 50 l20 20 M124 50 l-20 20" stroke="var(--accent)" stroke-width="3"/>
    <path d="M136 60 h60" stroke="var(--accent)" stroke-width="4"/>
    <path d="M196 60 l-12 -7 v14 z" fill="var(--accent)"/>
    ${LB(120,120,'邪魔があっても進む')}`),

  introduce: A(`
    <circle cx="60" cy="56" r="16" fill="var(--accent)"/>
    <circle cx="180" cy="56" r="16" fill="var(--muted)" opacity=".5"/>
    <path d="M76 56 h84" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <path d="M154 56 l-10 -6 v12 z" fill="var(--accent)"/>
    <text x="120" y="46" text-anchor="middle" font-size="18" fill="var(--accent)" font-weight="bold">?</text>
    ${LB(120,110,'引き合わせる')}`),

  advantage: A(`
    <line x1="120" y1="24" x2="120" y2="46" stroke="var(--muted)" stroke-width="3"/>
    <line x1="50" y1="60" x2="190" y2="46" stroke="var(--accent)" stroke-width="4"/>
    <rect x="34" y="60" width="40" height="24" rx="4" fill="var(--accent)"/>
    <rect x="176" y="46" width="30" height="14" rx="4" fill="var(--muted)" opacity=".4"/>
    ${LB(120,120,'有利に傾く')}`),

  ready: A(`
    ${[0,1,2].map(i=>`<path d="M${40} ${34+i*22} l10 10 18 -18" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>`).join('')}
    <path d="M160 60 h48" stroke="var(--accent)" stroke-width="5"/>
    <path d="M208 60 l-14 -8 v16 z" fill="var(--accent)"/>
    ${LB(120,120,'準備が整った')}`),

  strike: A(SP2 + `
    <circle cx="40" cy="40" r="9" fill="var(--accent)" opacity=".6"/>
    <path d="M46 46 l24 24" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    <path d="M70 70 v-30" stroke="var(--accent)" stroke-width="6" stroke-linecap="round" transform="rotate(30 70 70)"/>
    <circle cx="70" cy="90" r="14" fill="var(--accent)"/>
    ${LB(61,120,'打つ')}
    <rect x="160" y="30" width="12" height="60" rx="3" fill="var(--accent)"/>
    <path d="M154 24 h24 v14 h-24 z" fill="var(--accent)"/>
    ${[190,200].map(x=>`<circle cx="${x}" cy="70" r="8" fill="var(--muted)" opacity=".5"/>`).join('')}
    ${LB(180,120,'仕事を止める')}`),

  mile: A(`
    <path d="M30 100 h180" stroke="var(--muted)" stroke-width="6" opacity=".4"/>
    <rect x="100" y="70" width="40" height="30" rx="3" fill="var(--accent)"/>
    <text x="120" y="92" text-anchor="middle" font-size="14" fill="var(--bg)" font-weight="bold">1mi</text>
    <path d="M40 100 v-10 M200 100 v-10" stroke="var(--muted)" stroke-width="2"/>
    ${LB(120,124,'距離の単位')}`),

  seek: A(`
    <circle cx="90" cy="60" r="30" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M112 82 l30 30" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    <path d="M80 55 q10 -6 20 0" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <text x="90" y="66" text-anchor="middle" font-size="14" fill="var(--accent)">?</text>
    ${LB(120,120,'探し求める')}`),

  ability: A(`
    ${[0,1,2,3,4].map(i=>`<rect x="${34+i*38}" y="${100-i*16}" width="26" height="${16+i*16}" rx="3" fill="var(--accent)" opacity="${.35+i*.15}"/>`).join('')}
    ${LB(120,126,'できる力の高さ')}`),

  quickly: A(`
    <circle cx="70" cy="70" r="12" fill="var(--accent)"/>
    ${[0,1,2].map(i=>`<path d="M${44-i*14} ${58+i*4} h20" stroke="var(--muted)" stroke-width="2.5" opacity="${.6-i*.15}"/>`).join('')}
    <path d="M86 70 h110" stroke="var(--accent)" stroke-width="3" stroke-dasharray="10 6"/>
    <path d="M204 70 l-14 -8 v16 z" fill="var(--accent)"/>
    ${LB(120,120,'あっという間に')}`),

  interview: A(`
    <circle cx="70" cy="56" r="16" fill="var(--accent)"/>
    <circle cx="170" cy="56" r="16" fill="var(--muted)" opacity=".5"/>
    <rect x="114" y="70" width="12" height="26" rx="6" fill="var(--accent)"/>
    <circle cx="120" cy="64" r="10" fill="var(--accent)"/>
    <path d="M90 56 h20 M130 56 h20" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 3" opacity=".6"/>
    ${LB(120,124,'向き合って質問')}`),

  agreement: A(`
    <path d="M60 70 l30 -16 v14 l24 -12 v30 l-24 -12 v14 z" fill="var(--accent)"/>
    <path d="M180 70 l-30 -16 v14 l-24 -12 v30 l24 -12 v14 z" fill="var(--accent)" opacity=".7"/>
    <path d="M100 62 l20 -6 20 6" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,118,'握手で合意')}`),

  release: A(SP2 + `
    <path d="M50 70 q6 -18 22 -14" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M40 74 l10 -6 6 8 z" fill="var(--accent)"/>
    <path d="M62 44 l14 -6 -8 14 8 4 -18 4 z" fill="var(--accent)"/>
    ${LB(61,120,'放す・解き放つ')}
    <path d="M150 44 l16 8 -6 4 20 30" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${[0,1,2].map(i=>`<path d="M${186+i*10} ${52-i*4} q6 -4 12 0" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".5"/>`).join('')}
    ${LB(180,120,'世に発表する')}`),

  solution: A(SP2 + `
    <path d="M61 30 v14" stroke="var(--muted)" stroke-width="2.5"/>
    <path d="M61 44 a14 14 0 1 0 0.1 0 z" fill="var(--accent)" opacity=".3"/>
    <path d="M50 40 q11 -10 22 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M40 76 h30 v-14 h20 v14 h30 v20 h-20 v14 h-20 v-14 h-40 z" fill="var(--accent)" opacity=".8"/>
    ${LB(61,120,'解決策')}
    <path d="M160 30 l0 30 l-14 30 h68 l-14 -30 v-30 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M158 78 h64" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    <circle cx="190" cy="90" r="12" fill="var(--accent)" opacity=".5"/>
    ${LB(180,120,'溶液')}`),

  capital: A(SP2 + `
    <path d="M30 40 q31 -18 62 0 q0 40 -31 60 q-31 -20 -31 -60 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M61 30 l6 12 13 2 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -2 z" fill="var(--accent)"/>
    ${LB(61,120,'首都（星印）')}
    <path d="M156 60 q24 -20 48 0 q0 30 -24 40 q-24 -10 -24 -40 z" fill="var(--accent)"/>
    <text x="180" y="70" text-anchor="middle" font-size="20" fill="var(--bg)" font-weight="bold">$</text>
    ${LB(180,120,'元手の資本')}`),

  popular: A(`
    <circle cx="120" cy="70" r="20" fill="var(--accent)"/>
    ${[0,60,120,180,240,300].map(a=>{const r=a*Math.PI/180;
      return `<path d="M${120+38*Math.cos(r)-6} ${70+38*Math.sin(r)-6} l6 -8 6 8 -6 6 z" fill="var(--accent)" opacity=".7"/>`}).join('')}
    ${LB(120,128,'まわりから人気')}`),

  specific: A(`
    ${[[50,50],[86,60],[122,44],[158,66],[194,52]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="12" fill="${i===2?'var(--accent)':'var(--muted)'}" opacity="${i===2?1:.35}"/>`).join('')}
    <circle cx="122" cy="44" r="20" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    ${LB(120,118,'それだけを指す')}`),

  beautiful: A(`
    <path d="M120 96 C90 76 84 46 108 38 c8 -3 12 4 12 10 0 -6 4 -13 12 -10 24 8 18 38 -12 58 z" fill="var(--accent)" opacity=".85"/>
    ${[[70,36],[168,30],[50,80]].map(([x,y])=>`<path d="M${x} ${y-5} l2.5 5 5 1 -4 3.5 1 5 -4.5 -2.5 -4.5 2.5 1 -5 -4 -3.5 5 -1 z" fill="var(--accent)" opacity=".8"/>`).join('')}
    ${LB(120,120,'美しい')}`),

  aim: A(`
    <circle cx="120" cy="60" r="38" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="60" r="22" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="120" cy="60" r="7" fill="var(--accent)"/>
    <path d="M40 108 L108 68" stroke="var(--muted)" stroke-width="3" stroke-linecap="round"/>
    <path d="M108 68 l-14 3 5 -13 z" fill="var(--muted)"/>
    ${LB(120,126,'狙いを定める')}`),

  serious: A(SP2 + `
    <circle cx="61" cy="60" r="28" fill="var(--accent)"/>
    <path d="M50 54 h6 M66 54 h6" stroke="var(--bg)" stroke-width="3"/>
    <path d="M50 74 h22" stroke="var(--bg)" stroke-width="3"/>
    ${LB(61,120,'まじめ・深刻')}
    <circle cx="180" cy="60" r="28" fill="var(--accent)" opacity=".5"/>
    <path d="M168 74 q12 10 24 0" fill="none" stroke="var(--bg)" stroke-width="3"/>
    ${LB(180,120,'軽い（笑顔）')}`),

  pull: A(`
    <rect x="150" y="46" width="40" height="34" rx="5" fill="var(--accent)" opacity=".5"/>
    <path d="M60 60 h80" stroke="var(--accent)" stroke-width="6"/>
    <path d="M60 60 l14 -8 v16 z" fill="var(--accent)"/>
    <circle cx="40" cy="60" r="12" fill="var(--accent)"/>
    ${LB(120,120,'こちらへ引く')}`),

  red: A(`
    <rect x="60" y="30" width="120" height="60" rx="8" fill="var(--accent)"/>
    ${LB(120,116,'色の名前（赤）')}`),

  access: A(`
    <path d="M56 66 a20 20 0 1 1 0.1 0 z" fill="none" stroke="var(--accent)" stroke-width="6"/>
    <rect x="70" y="60" width="70" height="10" rx="3" fill="var(--accent)"/>
    <rect x="120" y="70" width="8" height="14" rx="2" fill="var(--accent)"/>
    <rect x="150" y="30" width="60" height="66" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="150" y1="63" x2="210" y2="63" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    ${LB(120,120,'鍵で開き入る')}`),

  movement: A(`
    <circle cx="150" cy="60" r="16" fill="var(--accent)"/>
    <circle cx="110" cy="60" r="14" fill="var(--accent)" opacity=".5"/>
    <circle cx="76" cy="60" r="11" fill="var(--accent)" opacity=".25"/>
    <path d="M40 96 q60 -10 110 -36" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4" opacity=".5"/>
    ${LB(120,124,'動き・移動')}`),

  treat: A(SP2 + `
    <circle cx="45" cy="50" r="13" fill="var(--accent)"/>
    <rect x="30" y="66" width="30" height="30" rx="6" fill="var(--accent)"/>
    <path d="M75 66 h20" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="100" cy="66" r="8" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(61,120,'手当てする')}
    <circle cx="160" cy="70" r="16" fill="var(--accent)" opacity=".7"/>
    <path d="M182 60 q10 -20 26 -14" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="212" cy="42" r="10" fill="var(--accent)"/>
    ${LB(180,120,'ごちそうする')}`),

  identify: A(`
    <circle cx="100" cy="60" r="28" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M120 80 l30 30" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
    <path d="M86 50 q14 -8 28 0 M86 70 q14 8 28 0" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <path d="M182 74 l10 10 20 -20" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,120,'見分けて特定する')}`),

  loss: A(`
    <line x1="30" y1="100" x2="210" y2="100" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <polyline points="40,50 90,68 140,80 190,102" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M202 108 l-14 -2 3 -12 z" fill="var(--accent)"/>
    <text x="60" y="40" text-anchor="middle" font-size="22" fill="var(--accent)" font-weight="bold">-</text>
    ${LB(120,124,'失って減る')}`),

  shall: A(`
    <circle cx="60" cy="60" r="10" fill="var(--accent)"/>
    <path d="M76 60 h60" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <path d="M136 60 l-10 -6 v12 z" fill="var(--accent)"/>
    <circle cx="170" cy="60" r="16" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <text x="170" y="66" text-anchor="middle" font-size="16" fill="var(--accent)" font-weight="bold">?</text>
    ${LB(120,120,'先のことを丁寧に言う')}`),

  modern: A(SP2 + `
    <rect x="30" y="70" width="60" height="26" rx="2" fill="var(--muted)" opacity=".4"/>
    <path d="M32 70 l28 -30 28 30 z" fill="var(--muted)" opacity=".4"/>
    ${LB(61,120,'昔ながら')}
    <rect x="146" y="34" width="60" height="62" rx="4" fill="var(--accent)"/>
    <rect x="152" y="40" width="20" height="20" rx="2" fill="var(--bg)" opacity=".7"/>
    <rect x="180" y="40" width="20" height="20" rx="2" fill="var(--bg)" opacity=".7"/>
    ${LB(180,120,'今どきの建物')}`),

  treatment: A(`
    <circle cx="70" cy="52" r="14" fill="var(--accent)"/>
    <rect x="52" y="70" width="36" height="38" rx="7" fill="var(--accent)"/>
    <rect x="150" y="60" width="60" height="26" rx="5" fill="var(--accent)" opacity=".7"/>
    ${[164,180,196].map(x=>`<path d="M${x} 44 v12" stroke="var(--accent)" stroke-width="3"/>
      <path d="M${x} 58 l5 -9 h-10 z" fill="var(--accent)"/>`).join('')}
    ${LB(120,124,'治療・手当て')}`),

  yourself: A(`
    <rect x="130" y="30" width="70" height="80" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="60" cy="50" r="14" fill="var(--accent)"/>
    <rect x="44" y="70" width="32" height="34" rx="7" fill="var(--accent)"/>
    <circle cx="165" cy="60" r="14" fill="var(--accent)" opacity=".5"/>
    <rect x="149" y="80" width="32" height="34" rx="7" fill="var(--accent)" opacity=".5"/>
    ${LB(120,124,'鏡に映る自分')}`),

  supply: A(`
    <rect x="30" y="56" width="46" height="36" rx="4" fill="var(--accent)"/>
    <path d="M80 74 h60" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <path d="M140 74 l-12 -7 v14 z" fill="var(--accent)"/>
    <rect x="160" y="56" width="50" height="36" rx="4" fill="var(--accent)" opacity=".5"/>
    ${LB(120,120,'届けて供給する')}`),

  worth: A(`
    <line x1="120" y1="24" x2="120" y2="42" stroke="var(--muted)" stroke-width="3"/>
    <line x1="50" y1="52" x2="190" y2="52" stroke="var(--accent)" stroke-width="4"/>
    <rect x="36" y="52" width="34" height="24" rx="3" fill="var(--accent)"/>
    <circle cx="188" cy="66" r="16" fill="var(--muted)" opacity=".5"/>
    <text x="188" y="71" text-anchor="middle" font-size="16" fill="var(--bg)" font-weight="bold">$</text>
    ${LB(120,116,'釣り合うだけの価値')}`),

  natural: A(SP2 + `
    <path d="M40 96 q10 -40 21 -50" stroke="var(--accent)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="70" cy="40" r="14" fill="var(--accent)" opacity=".8"/>
    ${LB(61,120,'自然のまま')}
    <rect x="150" y="50" width="60" height="46" rx="4" fill="var(--muted)" opacity=".5"/>
    <path d="M170 50 v-16 M190 50 v-16" stroke="var(--muted)" stroke-width="4" opacity=".6"/>
    ${LB(180,120,'人が作った物')}`),

  express: A(SP2 + `
    <path d="M28 30 h64 v34 h-24 l-16 14 v-14 h-24 z" fill="var(--accent)"/>
    <path d="M50 90 C40 74 42 64 52 64 c6 0 8 4 8 6 0 -2 2 -6 8 -6 10 0 12 10 -8 26 z" fill="var(--accent)"/>
    ${LB(61,120,'気持ちを表す')}
    <rect x="146" y="50" width="60" height="24" rx="10" fill="var(--accent)"/>
    <path d="M212 62 h14" stroke="var(--accent)" stroke-width="3"/>
    <path d="M226 62 l-10 -6 v12 z" fill="var(--accent)"/>
    ${LB(180,120,'急行の電車')}`),

  indicate: A(`
    <circle cx="70" cy="60" r="9" fill="var(--accent)"/>
    <path d="M80 60 h60" stroke="var(--accent)" stroke-width="4"/>
    <path d="M140 60 l-12 -7 v14 z" fill="var(--accent)"/>
    <circle cx="180" cy="60" r="22" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    ${LB(120,120,'指し示す')}`),

  attend: A(`
    <path d="M60 100 h120 v-10 h-120 z" fill="var(--muted)" opacity=".3"/>
    ${[80,110,140,170].map((x,i)=>`<circle cx="${x}" cy="70" r="10" fill="${i===1?'var(--accent)':'var(--muted)'}" opacity="${i===1?1:.4}"/>`).join('')}
    <path d="M110 40 v18" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M110 44 l-10 6 10 6 10 -6 z" fill="var(--accent)"/>
    ${LB(120,120,'その場に出る')}`),

  investment: A(`
    <circle cx="70" cy="90" r="10" fill="var(--muted)" opacity=".6"/>
    <path d="M70 80 q0 -30 0 -46" stroke="var(--accent)" stroke-width="4" fill="none"/>
    <circle cx="70" cy="30" r="16" fill="var(--accent)"/>
    <text x="70" y="35" text-anchor="middle" font-size="14" fill="var(--bg)" font-weight="bold">$</text>
    <path d="M120 90 h70" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    <path d="M190 90 l-12 -7 v14 z" fill="var(--accent)"/>
    <circle cx="210" cy="60" r="20" fill="var(--accent)" opacity=".7"/>
    ${LB(120,124,'お金を育てる')}`),

  organize: A(`
    ${[[40,40],[60,50],[46,60]].map(([x,y])=>`<rect x="${x}" y="${y}" width="20" height="16" rx="2" fill="var(--muted)" opacity=".5" transform="rotate(${(x+y)%20-10} ${x+10} ${y+8})"/>`).join('')}
    <path d="M90 55 h30" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 55 l-10 -6 v12 z" fill="var(--accent)"/>
    ${[0,1,2].map(i=>`<rect x="${150+i*24}" y="40" width="20" height="20" rx="3" fill="var(--accent)" opacity="${.6+i*.15}"/>`).join('')}
    ${LB(120,110,'整えて組み立てる')}`),

  promise: A(`
    <path d="M60 60 q10 -14 20 0" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round"/>
    <path d="M160 60 q-10 -14 -20 0" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round"/>
    <path d="M80 62 q40 20 80 -2" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    ${LB(120,120,'指切りの約束')}`),

  potential: A(`
    <circle cx="90" cy="80" r="14" fill="var(--accent)"/>
    <path d="M90 66 v-30" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5" opacity=".5"/>
    <path d="M76 44 q14 -10 28 0" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 4" opacity=".6"/>
    <path d="M60 108 q30 10 60 0" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
    ${LB(120,124,'まだ芽の可能性')}`),

  trouble: A(`
    <path d="M120 30 L182 100 H58 Z" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <line x1="120" y1="58" x2="120" y2="80" stroke="var(--accent)" stroke-width="5"/>
    <circle cx="120" cy="92" r="4" fill="var(--accent)"/>
    ${LB(120,124,'困った問題')}`),

  relation: A(`
    <circle cx="70" cy="60" r="20" fill="var(--accent)" opacity=".7"/>
    <circle cx="170" cy="60" r="20" fill="var(--accent)" opacity=".7"/>
    <path d="M90 60 h60" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    ${LB(120,116,'つながり')}`),

  suffer: A(`
    <circle cx="120" cy="46" r="16" fill="var(--accent)"/>
    <rect x="100" y="66" width="40" height="16" rx="4" fill="var(--muted)" opacity=".6"/>
    <path d="M96 66 q24 -14 48 0" fill="none" stroke="var(--accent)" stroke-width="6"/>
    <path d="M105 58 q5 4 0 8 M135 58 q-5 4 0 8" stroke="var(--bg)" stroke-width="2" fill="none"/>
    ${LB(120,128,'重みに苦しむ')}`),

  strategy: A(`
    <path d="M60 30 l0 60 30 20 30 -20 v-60 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M90 42 v50" stroke="var(--accent)" stroke-width="2" opacity=".4"/>
    <path d="M70 60 q20 20 40 0 q10 10 20 0" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <circle cx="150" cy="60" r="8" fill="var(--accent)"/>
    ${LB(120,124,'先を読む作戦')}`),

  except: A(`
    ${[[46,60],[80,60],[160,60],[194,60]].map(([x])=>`<circle cx="${x}" cy="60" r="14" fill="var(--accent)"/>`).join('')}
    <circle cx="120" cy="60" r="14" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="4 3"/>
    <path d="M110 50 l20 20 M130 50 l-20 20" stroke="var(--muted)" stroke-width="2.5"/>
    ${LB(120,116,'ひとつ除いて')}`),

  tend: A(`
    <circle cx="60" cy="60" r="10" fill="var(--accent)" opacity=".5"/>
    <path d="M70 62 q40 30 90 20" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    <path d="M158 82 l14 4 -6 -14 z" fill="var(--accent)"/>
    ${LB(120,120,'そちらへ傾きがち')}`),

  advance: A(`
    <line x1="24" y1="90" x2="216" y2="90" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    ${[36,80,124,168].map((x,i)=>`<circle cx="${x}" cy="90" r="9" fill="var(--accent)" opacity="${.3+i*.2}"/>`).join('')}
    <path d="M186 90 h20" stroke="var(--accent)" stroke-width="3"/>
    <path d="M206 90 l-10 -6 v12 z" fill="var(--accent)"/>
    ${LB(120,120,'前へ進む')}`),

  network: A(`
    ${[[60,40],[170,40],[40,90],[120,100],[200,90],[120,40]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="var(--accent)"/>`).join('')}
    <path d="M60 40 L120 40 L170 40 M60 40 L40 90 M120 40 L120 100 M170 40 L200 90 M40 90 L120 100 L200 90"
      stroke="var(--accent)" stroke-width="2" fill="none" opacity=".6"/>
    ${LB(120,124,'網の目のつながり')}`),

  generally: A(`
    <circle cx="120" cy="60" r="44" fill="var(--accent)" opacity=".15"/>
    ${[[100,50],[130,64],[110,78],[145,44]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(120,124,'だいたい当てはまる')}`),

  operation: A(SP2 + `
    <circle cx="45" cy="61" r="9" fill="var(--accent)"/>
    ${[0,72,144,216,288].map(a=>{const r=a*Math.PI/180;
      return `<rect x="${45+22*Math.cos(r)-5}" y="${61+22*Math.sin(r)-5}" width="10" height="10" fill="var(--accent)"/>`}).join('')}
    ${LB(61,120,'機械の運転')}
    <circle cx="180" cy="66" r="16" fill="var(--accent)" opacity=".7"/>
    <path d="M180 34 v14 M204 42 l-10 10 M156 42 l10 10" stroke="var(--accent)" stroke-width="3"/>
    ${LB(180,120,'手術')}`),

  match: A(SP2 + `
    <path d="M30 70 h20 v-14 h20 v14 h20 v20 h-20 v14 h-20 v-14 h-20 z" fill="var(--accent)"/>
    ${LB(61,120,'ぴったり合う対')}
    <rect x="175" y="60" width="10" height="34" rx="4" fill="var(--muted)"/>
    <circle cx="180" cy="52" r="10" fill="var(--accent)"/>
    <path d="M175 46 q-14 -4 -10 -18" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".7"/>
    ${LB(180,120,'マッチ棒')}`),

  avoid: A(`
    <path d="M30 90 h60" stroke="var(--muted)" stroke-width="4"/>
    <circle cx="120" cy="70" r="18" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M90 90 q30 -40 60 -40" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    <path d="M150 50 h30" stroke="var(--accent)" stroke-width="3"/>
    <path d="M180 50 l-10 -6 v12 z" fill="var(--accent)"/>
    ${LB(120,120,'避けて通る')}`),

  task: A(`
    <rect x="70" y="30" width="100" height="76" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <rect x="90" y="24" width="60" height="14" rx="4" fill="var(--accent)"/>
    <path d="M88 60 l10 10 20 -22" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    <path d="M90 90 h60" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    ${LB(120,124,'やるべき仕事')}`),

  normal: A(`
    <path d="M30 96 q30 -60 90 -60 q60 0 90 60" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M110 96 v-40 h20 v40 z" fill="var(--accent)" opacity=".7"/>
    ${LB(120,120,'まんなかが普通')}`),

  associate: A(SP2 + `
    <circle cx="45" cy="60" r="15" fill="var(--accent)" opacity=".7"/>
    <circle cx="77" cy="60" r="15" fill="var(--accent)" opacity=".7"/>
    <path d="M55 60 h12" stroke="var(--bg)" stroke-width="2"/>
    ${LB(61,120,'結びつける')}
    <circle cx="180" cy="52" r="14" fill="var(--accent)"/>
    <rect x="162" y="70" width="36" height="10" rx="3" fill="var(--muted)" opacity=".5"/>
    ${LB(180,120,'仲間の同僚')}`),

  blue: A(`
    <rect x="60" y="30" width="120" height="60" rx="8" fill="var(--accent)"/>
    ${LB(120,116,'色の名前（青）')}`),

  positive: A(SP2 + `
    <circle cx="61" cy="60" r="26" fill="var(--accent)"/>
    <path d="M50 54 h6 M66 54 h6" stroke="var(--bg)" stroke-width="3"/>
    <path d="M48 68 q13 12 26 0" fill="none" stroke="var(--bg)" stroke-width="3"/>
    ${LB(61,120,'前向き・陽性')}
    <line x1="150" y1="60" x2="210" y2="60" stroke="var(--accent)" stroke-width="4"/>
    <line x1="180" y1="30" x2="180" y2="90" stroke="var(--accent)" stroke-width="4"/>
    ${LB(180,120,'プラス')}`),

  option: A(`
    <circle cx="70" cy="60" r="9" fill="var(--accent)"/>
    <path d="M79 60 h20 M99 60 L140 30 M99 60 L140 60 M99 60 L140 90" stroke="var(--accent)" stroke-width="2.5" fill="none"/>
    ${[30,60,90].map(y=>`<circle cx="150" cy="${y}" r="10" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(120,120,'選べる道')}`),

  message: A(`
    <path d="M40 34 h140 v56 h-70 l-20 18 v-18 h-50 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M56 50 h108 M56 64 h80" stroke="var(--accent)" stroke-width="2.5" opacity=".7"/>
    ${LB(120,120,'伝える文面')}`),

  instance: A(`
    ${[[46,50],[86,60],[126,44],[166,66],[200,50]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="11" fill="${i===1?'var(--accent)':'var(--muted)'}" opacity="${i===1?1:.35}"/>`).join('')}
    <circle cx="86" cy="60" r="18" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    ${LB(120,120,'具体的な一例')}`),

  style: A(`
    <path d="M60 30 q40 20 0 40 q40 20 0 40" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <circle cx="150" cy="50" r="16" fill="var(--accent)"/>
    <rect x="134" y="70" width="32" height="34" rx="8" fill="var(--accent)"/>
    ${LB(120,124,'その人らしい様式')}`),

  refer: A(`
    <circle cx="60" cy="60" r="9" fill="var(--accent)"/>
    <path d="M70 60 h50" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    <path d="M120 60 l-10 -6 v12 z" fill="var(--accent)"/>
    <path d="M150 30 C134 20 108 20 92 26 v54 c16 -6 42 -6 58 4 z" fill="var(--accent)" opacity=".8"/>
    ${LB(120,120,'参照する')}`),

  push: A(`
    <rect x="150" y="46" width="40" height="34" rx="5" fill="var(--accent)" opacity=".5"/>
    <path d="M60 60 h80" stroke="var(--accent)" stroke-width="6"/>
    <path d="M140 60 l-14 -8 v16 z" fill="var(--accent)"/>
    <circle cx="40" cy="60" r="12" fill="var(--accent)"/>
    ${LB(120,120,'向こうへ押す')}`),

  quarter: A(`
    <circle cx="120" cy="60" r="42" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M120 60 L120 18 A42 42 0 0 1 162 60 Z" fill="var(--accent)"/>
    ${LB(120,122,'4分の1')}`),

  assume: A(`
    <circle cx="120" cy="54" r="24" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    <text x="120" y="60" text-anchor="middle" font-size="20" fill="var(--accent)" font-weight="bold">?</text>
    <path d="M120 78 v14" stroke="var(--muted)" stroke-width="2"/>
    <circle cx="120" cy="98" r="8" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'たぶんそうだと思う')}`),

  successful: A(`
    <path d="M84 108 h72 l-8 -30 h-56 z" fill="var(--accent)" opacity=".4"/>
    <path d="M100 78 l20 -46 20 46 z" fill="var(--accent)"/>
    <path d="M100 64 l14 14 30 -30" fill="none" stroke="var(--bg)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,128,'成功をおさめた')}`),

  doubt: A(`
    <text x="120" y="70" text-anchor="middle" font-size="40" fill="var(--accent)" font-weight="bold">?</text>
    <path d="M80 96 q40 16 80 0" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" opacity=".5"/>
    ${LB(120,120,'信じきれない')}`),

  competition: A(`
    <circle cx="70" cy="70" r="14" fill="var(--accent)"/>
    <circle cx="170" cy="70" r="14" fill="var(--accent)" opacity=".7"/>
    <path d="M50 90 q20 -30 40 -30 M150 90 q20 -30 40 -30" stroke="var(--accent)" stroke-width="3" fill="none"/>
    <path d="M110 40 h20" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(120,120,'競い合う')}`),

  theory: A(`
    <circle cx="120" cy="54" r="24" fill="var(--accent)" opacity=".8"/>
    <rect x="112" y="78" width="16" height="10" fill="var(--accent)"/>
    <text x="120" y="60" text-anchor="middle" font-size="16" fill="var(--bg)" font-weight="bold">?</text>
    ${LB(120,120,'仕組みの説明')}`),

  propose: A(SP2 + `
    <circle cx="61" cy="52" r="10" fill="var(--accent)"/>
    <path d="M46 92 q15 -16 30 0" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    <text x="61" y="30" text-anchor="middle" font-size="16" fill="var(--accent)" font-weight="bold">?</text>
    ${LB(61,120,'提案する')}
    <path d="M180 60 a20 20 0 1 0 0.1 0 z" fill="none" stroke="var(--accent)" stroke-width="6"/>
    <path d="M192 48 l10 -10 8 8 -10 10 z" fill="var(--accent)"/>
    ${LB(180,120,'結婚を申し込む')}`),

  reference: A(`
    <path d="M60 30 C46 22 24 22 16 26 v54 c8 -4 30 -4 44 4 z" fill="var(--accent)" opacity=".8"/>
    <path d="M100 40 h30" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <path d="M130 40 l-10 -6 v12 z" fill="var(--accent)"/>
    <rect x="150" y="26" width="60" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M160 44 h40 M160 58 h40 M160 72 h24" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    ${LB(120,122,'参照先')}`),

  argument: A(`
    <path d="M30 34 h70 v34 h-30 l-16 14 v-14 h-24 z" fill="var(--accent)" opacity=".8"/>
    <path d="M30 44 h50 M30 56 h50" stroke="var(--bg)" stroke-width="2" opacity=".7"/>
    <path d="M140 44 h70 v34 h-24 v14 l-16 -14 h-30 z" fill="var(--accent)"/>
    <path d="M160 54 h50 M160 66 h50" stroke="var(--bg)" stroke-width="2" opacity=".7"/>
    ${LB(120,120,'理由をぶつけ合う')}`),

  adult: A(SP2 + `
    <circle cx="61" cy="34" r="12" fill="var(--accent)" opacity=".5"/>
    <rect x="49" y="48" width="24" height="30" rx="7" fill="var(--accent)" opacity=".5"/>
    ${LB(61,120,'子ども')}
    <circle cx="180" cy="30" r="16" fill="var(--accent)"/>
    <rect x="160" y="48" width="40" height="52" rx="9" fill="var(--accent)"/>
    ${LB(180,120,'大人')}`),

  pattern: A(`
    ${[0,1,2].map(r=>[0,1,2,3,4].map(c=>
      `<circle cx="${44+c*36}" cy="${34+r*32}" r="9" fill="var(--accent)" opacity="${(r+c)%2?1:.35}"/>`).join('')).join('')}
    ${LB(120,124,'繰り返す模様')}`),

  application: A(SP2 + `
    <rect x="34" y="34" width="54" height="54" rx="12" fill="var(--accent)"/>
    <circle cx="61" cy="61" r="14" fill="var(--bg)" opacity=".7"/>
    ${LB(61,120,'スマホのアプリ')}
    <rect x="150" y="30" width="60" height="66" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M160 46 h40 M160 60 h40 M160 74 h24" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    ${LB(180,120,'申込書')}`),

  obviously: A(`
    <circle cx="120" cy="50" r="20" fill="var(--accent)"/>
    ${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
      return `<line x1="${120+26*Math.cos(r)}" y1="${50+26*Math.sin(r)}" x2="${120+36*Math.cos(r)}" y2="${50+36*Math.sin(r)}" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>`}).join('')}
    <path d="M104 100 l12 12 24 -24" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,128,'誰の目にも明らか')}`),

  unclear: A(`
    <circle cx="120" cy="60" r="30" fill="var(--muted)" opacity=".3"/>
    <text x="120" y="68" text-anchor="middle" font-size="26" fill="var(--muted)" opacity=".7" font-weight="bold">?</text>
    ${LB(120,120,'かすんではっきりしない')}`),

  central: A(`
    ${[[40,40],[200,40],[40,90],[200,90]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--muted)" opacity=".4"/>`).join('')}
    <circle cx="120" cy="65" r="20" fill="var(--accent)"/>
    ${LB(120,124,'まんなかの中心')}`),

  career: A(`
    ${[0,1,2,3].map(i=>`<rect x="${40+i*44}" y="${100-i*20}" width="30" height="${i*20+16}" rx="3" fill="var(--accent)" opacity="${.35+i*.18}"/>`).join('')}
    <circle cx="200" cy="68" r="10" fill="var(--accent)"/>
    ${LB(120,126,'積み重ねる職業人生')}`),

  anyway: A(`
    <rect x="60" y="52" width="30" height="30" rx="4" fill="var(--muted)" opacity=".5"/>
    <path d="M96 66 h100" stroke="var(--accent)" stroke-width="3" stroke-dasharray="8 5"/>
    <path d="M188 66 l-12 -7 v14 z" fill="var(--accent)"/>
    ${LB(120,120,'それでもとにかく')}`),

  speech: A(`
    <rect x="100" y="80" width="40" height="16" rx="2" fill="var(--muted)" opacity=".5"/>
    <circle cx="120" cy="46" r="16" fill="var(--accent)"/>
    <rect x="104" y="62" width="32" height="18" rx="6" fill="var(--accent)"/>
    <path d="M144 40 h44 v26 h-16 l-12 10 v-10 h-16 z" fill="var(--accent)" opacity=".8"/>
    ${LB(120,124,'人前で話す')}`),

  throughout: A(`
    <line x1="24" y1="70" x2="216" y2="70" stroke="var(--accent)" stroke-width="4"/>
    <circle cx="24" cy="70" r="8" fill="var(--accent)"/>
    <circle cx="216" cy="70" r="8" fill="var(--accent)"/>
    ${LB(120,110,'始めから終わりまでずっと')}`),

  profit: A(`
    <path d="M90 100 q0 -40 0 -60" stroke="var(--accent)" stroke-width="4"/>
    <circle cx="90" cy="30" r="18" fill="var(--accent)"/>
    <text x="90" y="36" text-anchor="middle" font-size="16" fill="var(--bg)" font-weight="bold">$</text>
    <path d="M150 90 h30" stroke="var(--accent)" stroke-width="3"/>
    <path d="M150 60 v30" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,124,'儲けの利益')}`),

  guess: A(`
    <text x="90" y="70" text-anchor="middle" font-size="30" fill="var(--accent)" font-weight="bold">?</text>
    <path d="M140 60 h40" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="190" cy="60" r="12" fill="var(--accent)" opacity=".6"/>
    ${LB(120,120,'当てずっぽう')}`),

  fun: A(`
    <circle cx="120" cy="60" r="26" fill="var(--accent)"/>
    <circle cx="110" cy="52" r="4" fill="var(--bg)"/><circle cx="130" cy="52" r="4" fill="var(--bg)"/>
    <path d="M104 68 q16 14 32 0" fill="none" stroke="var(--bg)" stroke-width="3"/>
    ${[[76,30],[164,30],[60,80]].map(([x,y])=>`<path d="M${x} ${y-4} l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--accent)" opacity=".7"/>`).join('')}
    ${LB(120,120,'楽しい')}`),

  resource: A(`
    <circle cx="80" cy="80" r="14" fill="var(--accent)" opacity=".8"/>
    <rect x="130" y="70" width="22" height="30" rx="3" fill="var(--muted)" opacity=".6"/>
    <circle cx="190" cy="40" r="14" fill="var(--accent)" opacity=".7"/>
    ${LB(120,120,'使える資源・資料')}`),

  damage: A(`
    <rect x="60" y="30" width="100" height="70" rx="4" fill="var(--accent)" opacity=".7"/>
    <path d="M90 30 l-14 30 20 6 -16 34" stroke="var(--bg)" stroke-width="4" fill="none"/>
    ${LB(120,120,'壊れて傷む')}`),

  basis: A(`
    <rect x="50" y="88" width="140" height="18" rx="3" fill="var(--accent)"/>
    <rect x="70" y="56" width="100" height="26" rx="3" fill="var(--accent)" opacity=".6"/>
    <rect x="90" y="30" width="60" height="20" rx="3" fill="var(--accent)" opacity=".35"/>
    ${LB(120,124,'土台にある根拠')}`),

  basic: A(`
    <rect x="90" y="60" width="60" height="40" rx="4" fill="var(--accent)"/>
    ${LB(120,120,'ひとつだけの基本形')}`),

  encourage: A(`
    <circle cx="80" cy="80" r="12" fill="var(--muted)" opacity=".5"/>
    <path d="M92 78 h30" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <path d="M122 78 l-10 -6 v12 z" fill="var(--accent)"/>
    <circle cx="160" cy="60" r="14" fill="var(--accent)"/>
    <path d="M160 46 v-14" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M160 24 l8 12 h-16 z" fill="var(--accent)"/>
    <path d="M148 84 q12 8 24 0" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
    ${LB(120,120,'背中を押して励ます')}`),

  hair: A(`
    <circle cx="120" cy="62" r="24" fill="var(--accent)" opacity=".3"/>
    ${[-30,-10,10,30].map(a=>`<path d="M${120+22*Math.sin(a*Math.PI/180)} 44 q${4*Math.sin(a*Math.PI/180)} -20 ${8*Math.sin(a*Math.PI/180)} -30"
      fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`).join('')}
    ${LB(120,120,'頭の髪')}`),

  male: A(`
    <circle cx="110" cy="76" r="26" fill="none" stroke="var(--accent)" stroke-width="5"/>
    <path d="M128 58 l30 -30 M158 28 h-18 v18" stroke="var(--accent)" stroke-width="5" fill="none"/>
    ${LB(120,124,'男性のマーク')}`),

  operate: A(`
    <circle cx="60" cy="60" r="9" fill="var(--accent)"/>
    ${[0,72,144,216,288].map(a=>{const r=a*Math.PI/180;
      return `<rect x="${60+22*Math.cos(r)-5}" y="${60+22*Math.sin(r)-5}" width="10" height="10" fill="var(--accent)"/>`}).join('')}
    <path d="M100 60 h30" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>
    <path d="M170 60 v14" stroke="var(--accent)" stroke-width="3"/>
    <path d="M158 46 l24 0" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,124,'動かす・手術する')}`),

  reflect: A(SP2 + `
    <circle cx="61" cy="50" r="15" fill="var(--accent)"/>
    <line x1="61" y1="80" x2="61" y2="80" stroke="var(--muted)"/>
    <line x1="30" y1="86" x2="92" y2="86" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="61" cy="104" r="12" fill="var(--accent)" opacity=".35" transform="scale(1,-1) translate(0,-208)"/>
    ${LB(61,124,'鏡に映る')}
    <circle cx="180" cy="50" r="16" fill="var(--accent)" opacity=".8"/>
    <text x="180" y="56" text-anchor="middle" font-size="14" fill="var(--bg)" font-weight="bold">?</text>
    ${LB(180,120,'思いをめぐらす')}`),

  exercise: A(`
    <circle cx="90" cy="40" r="12" fill="var(--accent)"/>
    <path d="M90 52 v24 M76 66 h28 M90 76 l-14 24 M90 76 l14 24" stroke="var(--accent)" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="150" y="55" width="10" height="10" fill="var(--accent)"/>
    <rect x="200" y="55" width="10" height="10" fill="var(--accent)"/>
    <path d="M160 60 h40" stroke="var(--accent)" stroke-width="4"/>
    ${LB(120,120,'体を動かす')}`),

  useful: A(`
    <path d="M110 30 l0 18 -14 8 v18 h48 v-18 l-14 -8 v-18 z" fill="var(--accent)"/>
    <path d="M104 90 l12 12 24 -24" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    ${LB(120,120,'道具として役立つ')}`),

  income: A(`
    <path d="M60 40 h60" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <path d="M120 40 l-10 -6 v12 z" fill="var(--accent)"/>
    <path d="M150 60 v40" stroke="var(--muted)" stroke-width="4" opacity=".4"/>
    <rect x="140" y="90" width="30" height="20" rx="8" fill="var(--accent)"/>
    <text x="155" y="104" text-anchor="middle" font-size="12" fill="var(--bg)" font-weight="bold">$</text>
    ${LB(120,120,'入ってくるお金')}`),

  property: A(SP2 + `
    <path d="M40 66 L61 46 L82 66 v34 h-42 z" fill="var(--accent)"/>
    ${LB(61,120,'不動産')}
    <circle cx="180" cy="50" r="16" fill="var(--accent)" opacity=".6"/>
    <path d="M150 90 h30 M182 90 h30" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    ${LB(180,120,'固有の性質')}`),

  previous: A(`
    <path d="M60 60 h100" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    <circle cx="60" cy="60" r="12" fill="var(--accent)"/>
    <circle cx="160" cy="60" r="10" fill="var(--muted)" opacity=".4"/>
    <path d="M96 60 l14 -8 v16 z" fill="var(--accent)"/>
    ${LB(120,116,'ひとつ前')}`),

  imagine: A(`
    <path d="M96 46 a24 24 0 1 1 -0.1 0 z" fill="var(--accent)" opacity=".2"/>
    <circle cx="150" cy="46" r="18" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
    <circle cx="90" cy="88" r="6" fill="var(--accent)" opacity=".5"/>
    <circle cx="76" cy="100" r="4" fill="var(--accent)" opacity=".4"/>
    <path d="M110 40 q10 -10 20 -4 q6 -8 16 -2" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    ${LB(120,124,'頭に思い描く')}`),

  okay: A(`
    <path d="M60 60 l20 20 40 -44" fill="none" stroke="var(--accent)" stroke-width="7" stroke-linecap="round"/>
    ${LB(120,110,'それでいい')}`),

  earn: A(`
    <path d="M60 90 h30" stroke="var(--accent)" stroke-width="3"/>
    <path d="M60 60 v30" stroke="var(--accent)" stroke-width="3"/>
    <path d="M110 76 h30" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 5"/>
    <path d="M140 76 l-10 -6 v12 z" fill="var(--accent)"/>
    <circle cx="180" cy="76" r="18" fill="var(--accent)"/>
    <text x="180" y="82" text-anchor="middle" font-size="16" fill="var(--bg)" font-weight="bold">$</text>
    ${LB(120,120,'働いて稼ぐ')}`),

  post: A(SP2 + `
    <rect x="30" y="40" width="62" height="44" rx="3" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M30 40 l31 26 31 -26" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    ${LB(61,120,'郵便')}
    <rect x="176" y="30" width="8" height="70" fill="var(--accent)"/>
    <rect x="150" y="46" width="60" height="20" rx="2" fill="var(--accent)" opacity=".7"/>
    ${LB(180,120,'掲示する・柱')}`),

  define: A(`
    <path d="M120 30 C104 22 78 22 62 28 v54 c16 -6 42 -6 58 4 z" fill="var(--accent)" opacity=".8"/>
    <rect x="80" y="46" width="30" height="12" rx="2" fill="var(--bg)" opacity=".7"/>
    <path d="M76 44 h38 M76 60 h38" stroke="var(--accent)" stroke-width="1.5" opacity=".3"/>
    ${LB(120,120,'言葉の意味を決める')}`),

  conclusion: A(`
    ${[[40,30],[80,40],[120,55]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="var(--muted)" opacity=".4"/>`).join('')}
    <path d="M50 34 q40 20 80 30" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity=".5"/>
    <path d="M130 60 q30 10 40 30" stroke="var(--accent)" stroke-width="3" fill="none"/>
    <circle cx="180" cy="96" r="14" fill="var(--accent)"/>
    ${LB(120,124,'まとまり着く結論')}`),

  everybody: A(`
    ${[0,1,2].map(r=>[0,1,2,3].map(c=>
      `<circle cx="${44+c*44}" cy="${34+r*30}" r="10" fill="var(--accent)" opacity="${.5+((r+c)%2)*.4}"/>`).join('')).join('')}
    ${LB(120,124,'みんな全員')}`),

  perform: A(`
    <rect x="30" y="90" width="180" height="10" fill="var(--muted)" opacity=".4"/>
    <circle cx="120" cy="52" r="14" fill="var(--accent)"/>
    <path d="M105 70 q15 -6 30 0 v20 h-30 z" fill="var(--accent)"/>
    <path d="M60 30 h20 v56 h-20 z M160 30 h20 v56 h-20 z" fill="var(--accent)" opacity=".3"/>
    ${LB(120,120,'舞台で演じる')}`),

  professional: A(`
    <circle cx="120" cy="42" r="16" fill="var(--accent)"/>
    <path d="M96 100 l24 -46 24 46 z" fill="var(--accent)"/>
    <path d="M108 76 h24" stroke="var(--bg)" stroke-width="3"/>
    <circle cx="170" cy="60" r="14" fill="var(--accent)" opacity=".5"/>
    <path d="M162 52 l16 16 M178 52 l-16 16" stroke="var(--bg)" stroke-width="2"/>
    ${LB(120,120,'プロの職業人')}`),

  mine: A(SP2 + `
    <path d="M40 96 L52 50 h18 L82 96 z" fill="var(--muted)" opacity=".4"/>
    <rect x="46" y="40" width="30" height="12" fill="var(--accent)"/>
    ${LB(61,120,'鉱山')}
    <circle cx="180" cy="60" r="16" fill="var(--accent)"/>
    <path d="M180 44 v-10" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M172 34 h16 v8 h-16 z" fill="var(--accent)"/>
    ${LB(180,120,'私のもの')}`),

  debate: A(`
    <rect x="46" y="70" width="30" height="24" rx="3" fill="var(--accent)" opacity=".6"/>
    <rect x="164" y="70" width="30" height="24" rx="3" fill="var(--accent)" opacity=".6"/>
    <circle cx="61" cy="50" r="12" fill="var(--accent)"/>
    <circle cx="179" cy="50" r="12" fill="var(--accent)"/>
    <path d="M80 46 h30 v22 h-12 l-8 8 v-8 h-10 z" fill="var(--accent)" opacity=".7"/>
    <path d="M130 60 h20 v22 h-10 v8 l-8 -8 h-2 z" fill="var(--accent)"/>
    ${LB(120,120,'議論をたたかわす')}`),

  memory: A(SP2 + `
    <path d="M61 30 a30 30 0 1 0 0.1 0 z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <rect x="46" y="50" width="30" height="22" rx="2" fill="var(--accent)" opacity=".7"/>
    ${LB(61,120,'記憶')}
    <rect x="160" y="40" width="40" height="40" rx="3" fill="none" stroke="var(--accent)" stroke-width="3"/>
    ${[0,1,2].map(i=>`<line x1="${168+i*10}" y1="34" x2="${168+i*10}" y2="40" stroke="var(--accent)" stroke-width="2"/>`).join('')}
    ${LB(180,120,'メモリ')}`),

  green: A(`
    <rect x="60" y="30" width="120" height="60" rx="8" fill="var(--accent)"/>
    ${LB(120,116,'色の名前（緑）')}`),

  song: A(`
    <path d="M70 90 q0 -40 0 -50 l50 -10 v50" stroke="var(--accent)" stroke-width="4" fill="none"/>
    <circle cx="70" cy="94" r="12" fill="var(--accent)"/>
    <circle cx="120" cy="84" r="12" fill="var(--accent)"/>
    <path d="M150 30 q10 -6 20 0 M150 40 q10 -6 20 0" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
    ${LB(120,120,'歌う音楽')}`),

  object: A(SP2 + `
    <rect x="40" y="46" width="42" height="42" rx="4" fill="var(--accent)"/>
    ${LB(61,120,'物体')}
    <path d="M150 60 h50" stroke="var(--accent)" stroke-width="6"/>
    <path d="M150 60 l14 -8 v16 z" fill="var(--accent)"/>
    <path d="M215 40 h5 v40 h-5 z" fill="var(--muted)" opacity=".5"/>
    ${LB(180,120,'反対する')}`),

  maintain: A(`
    <line x1="30" y1="60" x2="210" y2="60" stroke="var(--accent)" stroke-width="6"/>
    <path d="M110 60 v-16" stroke="var(--muted)" stroke-width="3"/>
    <circle cx="110" cy="38" r="10" fill="var(--accent)"/>
    ${LB(120,110,'水平を保ち続ける')}`),

  discover: A(`
    <circle cx="90" cy="60" r="28" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <path d="M110 80 l30 30" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
    <path d="M80 50 l4 12 12 4 -12 4 -4 12 -4 -12 -12 -4 12 -4 z" fill="var(--accent)"/>
    ${LB(120,120,'見つけ出す')}`),

  dead: A(`
    <circle cx="120" cy="60" r="30" fill="var(--muted)" opacity=".4"/>
    <path d="M104 50 l14 14 M118 50 l-14 14" stroke="var(--bg)" stroke-width="3"/>
    <path d="M128 50 l14 14 M142 50 l-14 14" stroke="var(--bg)" stroke-width="3"/>
    <path d="M104 82 h32" stroke="var(--bg)" stroke-width="3"/>
    ${LB(120,120,'死んでいる・停止')}`),

  prefer: A(`
    <circle cx="70" cy="54" r="22" fill="var(--accent)"/>
    <path d="M60 100 q10 8 20 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="180" cy="66" r="13" fill="var(--muted)" opacity=".4"/>
    <path d="M60 32 h20 M170 44 h20" stroke="var(--muted)" stroke-width="2" opacity=".3"/>
    ${LB(120,116,'こちらの方を好む')}`),

  extend: A(`
    <path d="M40 60 h50" stroke="var(--accent)" stroke-width="6"/>
    <path d="M40 60 h130" stroke="var(--accent)" stroke-width="4" stroke-dasharray="8 6" opacity=".6"/>
    <path d="M200 60 l-12 -7 v14 z" fill="var(--accent)"/>
    ${LB(120,110,'延ばして広げる')}`),

  possibility: A(`
    <circle cx="70" cy="70" r="12" fill="var(--accent)"/>
    <path d="M82 66 q30 -30 60 -20 M82 74 q30 30 60 -4 M82 70 q30 0 60 0" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <text x="180" y="30" text-anchor="middle" font-size="14" fill="var(--accent)">?</text>
    <text x="180" y="80" text-anchor="middle" font-size="14" fill="var(--accent)">?</text>
    ${LB(120,124,'いくつもの可能性')}`),

  facility: A(`
    <rect x="50" y="46" width="140" height="56" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="80" cy="30" r="9" fill="var(--accent)"/>
    ${[0,72,144,216,288].map(a=>{const r=a*Math.PI/180;
      return `<rect x="${80+16*Math.cos(r)-4}" y="${30+16*Math.sin(r)-4}" width="8" height="8" fill="var(--accent)"/>`}).join('')}
    <rect x="110" y="66" width="22" height="22" rx="2" fill="var(--accent)" opacity=".6"/>
    <rect x="150" y="66" width="22" height="22" rx="2" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'設備のある施設')}`),

  variety: A(`
    <circle cx="46" cy="50" r="14" fill="var(--accent)"/>
    <rect x="82" y="36" width="28" height="28" rx="3" fill="var(--accent)" opacity=".8"/>
    <path d="M142 36 l16 28 h-32 z" fill="var(--accent)" opacity=".65"/>
    <ellipse cx="196" cy="50" rx="16" ry="11" fill="var(--accent)" opacity=".5"/>
    ${LB(120,120,'種類の多さ')}`),

  daily: A(`
    ${[0,1,2,3,4,5,6].map(i=>`<circle cx="${34+i*29}" cy="60" r="11" fill="var(--accent)" opacity=".85"/>`).join('')}
    ${LB(120,116,'毎日繰り返す')}`),

  completely: A(`
    <rect x="30" y="54" width="180" height="20" rx="10" fill="var(--accent)"/>
    ${LB(120,100,'すきまなく全部')}`),

  female: A(`
    <circle cx="120" cy="60" r="26" fill="none" stroke="var(--accent)" stroke-width="5"/>
    <line x1="120" y1="86" x2="120" y2="112" stroke="var(--accent)" stroke-width="5"/>
    <line x1="106" y1="100" x2="134" y2="100" stroke="var(--accent)" stroke-width="5"/>
    ${LB(120,128,'女性のマーク')}`),

  responsibility: A(`
    <circle cx="120" cy="40" r="14" fill="var(--accent)"/>
    <rect x="102" y="58" width="36" height="16" rx="4" fill="var(--accent)"/>
    <path d="M120 74 v20" stroke="var(--muted)" stroke-width="4"/>
    <rect x="90" y="94" width="60" height="16" rx="3" fill="var(--muted)" opacity=".5"/>
    ${LB(120,124,'背負う責任')}`),

  original: A(`
    <circle cx="70" cy="60" r="18" fill="var(--accent)"/>
    <text x="70" y="66" text-anchor="middle" font-size="14" fill="var(--bg)" font-weight="bold">1st</text>
    ${[[140,50],[180,68]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="14" fill="var(--accent)" opacity=".4"/>`).join('')}
    <path d="M90 60 h34 M150 58 h16" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 3" opacity=".5"/>
    ${LB(120,120,'最初の・独自の')}`),

  nor: A(`
    <circle cx="70" cy="60" r="20" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="170" cy="60" r="20" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M56 46 l28 28 M84 46 l-28 28 M156 46 l28 28 M184 46 l-28 28" stroke="var(--accent)" stroke-width="3"/>
    ${LB(120,116,'どちらも〜ない')}`),

  easily: A(`
    <path d="M30 90 q90 -70 180 0" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <circle cx="200" cy="86" r="10" fill="var(--accent)"/>
    ${LB(120,120,'すいすい進む')}`),

  agency: A(`
    <rect x="60" y="40" width="120" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="90" cy="66" r="10" fill="var(--accent)"/>
    <circle cx="150" cy="66" r="10" fill="var(--accent)"/>
    <path d="M100 66 q20 -8 40 0" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(120,120,'代わりに動く機関')}`),

  dollar: A(`
    <circle cx="120" cy="60" r="42" fill="var(--accent)" opacity=".85"/>
    <text x="120" y="74" text-anchor="middle" font-size="36" fill="var(--bg)" font-weight="bold">$</text>
    ${LB(120,124,'ドル')}`),

  yeah: A(`
    <path d="M40 30 h60 v30 h-24 l-14 12 v-12 h-22 z" fill="var(--accent)" opacity=".8"/>
    <circle cx="70" cy="45" r="12" fill="none" stroke="var(--bg)" stroke-width="2"/>
    <path d="M160 60 v-30" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
    <circle cx="160" cy="80" r="14" fill="var(--accent)"/>
    ${LB(120,120,'うん（くだけた yes）')}`),

  legal: A(`
    <line x1="120" y1="26" x2="120" y2="50" stroke="var(--accent)" stroke-width="3"/>
    <line x1="60" y1="42" x2="180" y2="42" stroke="var(--accent)" stroke-width="4"/>
    <path d="M60 42 l-16 30 h32 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M180 42 l-16 30 h32 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <rect x="96" y="90" width="48" height="10" rx="2" fill="var(--accent)"/>
    ${LB(120,116,'法にかなう')}`),

  proposal: A(`
    <rect x="70" y="30" width="100" height="70" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M86 46 h60 M86 60 h60 M86 74 h40" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
    <path d="M150 82 l14 -18 6 6 -14 18 z" fill="var(--accent)"/>
    ${LB(120,120,'書いて申し出る案')}`),

  version: A(`
    <rect x="34" y="46" width="60" height="46" rx="4" fill="var(--muted)" opacity=".4"/>
    <text x="64" y="76" text-anchor="middle" font-size="20" fill="var(--muted)" font-weight="bold">v1</text>
    <rect x="146" y="30" width="60" height="46" rx="4" fill="var(--accent)"/>
    <text x="176" y="60" text-anchor="middle" font-size="20" fill="var(--bg)" font-weight="bold">v2</text>
    <path d="M100 66 h40" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
    <path d="M140 66 l-10 -6 v12 z" fill="var(--accent)"/>
    ${LB(120,116,'作り直された版')}`),

  conversation: A(`
    <path d="M28 30 h84 v40 h-30 l-18 16 v-16 h-36 z" fill="var(--accent)" opacity=".8"/>
    <path d="M128 44 h84 v40 h-24 v16 l-18 -16 h-42 z" fill="var(--accent)"/>
    <path d="M46 46 h50 M46 58 h50" stroke="var(--bg)" stroke-width="2" opacity=".6"/>
    <path d="M148 58 h50 M148 70 h50" stroke="var(--bg)" stroke-width="2" opacity=".6"/>
    ${LB(120,118,'会話のやりとり')}`),

  somebody: A(`
    ${[[40,60],[90,50],[150,50],[200,60]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="13" fill="${i===2?'var(--accent)':'var(--muted)'}" opacity="${i===2?1:.35}"/>`).join('')}
    <text x="150" y="30" text-anchor="middle" font-size="16" fill="var(--accent)" font-weight="bold">?</text>
    ${LB(120,118,'誰か1人')}`),

  pound: A(SP2 + `
    <circle cx="61" cy="60" r="34" fill="var(--accent)" opacity=".85"/>
    <text x="61" y="74" text-anchor="middle" font-size="34" fill="var(--bg)" font-weight="bold">£</text>
    ${LB(61,120,'ポンド（通貨）')}
    <line x1="180" y1="30" x2="180" y2="46" stroke="var(--muted)" stroke-width="3"/>
    <line x1="140" y1="46" x2="220" y2="46" stroke="var(--accent)" stroke-width="4"/>
    <rect x="160" y="66" width="40" height="24" rx="4" fill="var(--accent)"/>
    ${LB(180,116,'重さの単位(lb)')}`),

  magazine: A(`
    <rect x="70" y="26" width="100" height="80" rx="4" fill="var(--accent)"/>
    <rect x="82" y="38" width="76" height="34" rx="2" fill="var(--bg)" opacity=".8"/>
    <path d="M82 82 h76 M82 92 h50" stroke="var(--bg)" stroke-width="2.5" opacity=".7"/>
    ${LB(120,120,'雑誌')}`),

  immediately: A(`
    <circle cx="120" cy="60" r="34" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <line x1="120" y1="60" x2="120" y2="38" stroke="var(--accent)" stroke-width="4"/>
    <line x1="120" y1="60" x2="120" y2="30" stroke="var(--accent)" stroke-width="4" opacity=".4"/>
    <path d="M162 40 l14 -10" stroke="var(--accent)" stroke-width="2" stroke-dasharray="2 4" opacity=".6"/>
    ${LB(120,120,'間を置かずすぐ')}`),

  welcome: A(`
    <rect x="90" y="30" width="60" height="70" rx="4" fill="var(--accent)"/>
    <path d="M90 30 l-24 12 v56 l24 -12 z" fill="var(--accent)" opacity=".6"/>
    <circle cx="60" cy="66" r="10" fill="var(--muted)"/>
    <path d="M50 40 q10 -6 20 0" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".6"/>
    ${LB(120,120,'開けて迎え入れる')}`),

  communication: A(`
    <rect x="34" y="34" width="16" height="50" rx="3" fill="var(--accent)"/>
    <rect x="190" y="34" width="16" height="50" rx="3" fill="var(--accent)"/>
    <path d="M56 50 q30 -10 60 0 M124 50 q30 -10 60 0" stroke="var(--accent)" stroke-width="2.5" fill="none" opacity=".7"/>
    <path d="M56 70 q30 10 60 0 M124 70 q30 10 60 0" stroke="var(--accent)" stroke-width="2.5" fill="none" opacity=".5"/>
    ${LB(120,120,'信号のやりとり')}`),

  traditional: A(`
    <path d="M60 90 q60 -50 120 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <rect x="90" y="60" width="60" height="10" rx="2" fill="var(--accent)" opacity=".7"/>
    <circle cx="70" cy="40" r="10" fill="var(--accent)" opacity=".5"/>
    <circle cx="170" cy="40" r="10" fill="var(--accent)" opacity=".5"/>
    ${LB(120,116,'昔から受け継ぐ')}`),

  replace: A(`
    <rect x="34" y="46" width="40" height="40" rx="4" fill="var(--muted)" opacity=".4"/>
    <path d="M88 50 q20 -20 40 0 M88 82 q20 20 40 0" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M128 50 l10 -4 -2 10 z M128 82 l10 4 -2 -10 z" fill="var(--accent)"/>
    <rect x="150" y="46" width="40" height="40" rx="4" fill="var(--accent)"/>
    ${LB(120,120,'入れ替える')}`),

  herself: A(`
    <rect x="130" y="30" width="70" height="80" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="60" cy="48" r="13" fill="var(--accent)"/>
    <path d="M60 74 q13 8 26 0" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    <path d="M75 60 q30 -10 60 0" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="165" cy="60" r="13" fill="var(--accent)" opacity=".5"/>
    <path d="M165 84 q13 8 26 0" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity=".5"/>
    ${LB(120,124,'彼女自身')}`),

  suddenly: A(`
    <circle cx="120" cy="60" r="16" fill="var(--accent)"/>
    ${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
      return `<line x1="${120+22*Math.cos(r)}" y1="${60+22*Math.sin(r)}" x2="${120+38*Math.cos(r)}" y2="${60+38*Math.sin(r)}" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`}).join('')}
    ${LB(120,120,'いきなり突然')}`),

  generation: A(SP2 + `
    <circle cx="45" cy="46" r="12" fill="var(--accent)" opacity=".4"/>
    <circle cx="61" cy="70" r="12" fill="var(--accent)" opacity=".7"/>
    <circle cx="77" cy="94" r="12" fill="var(--accent)"/>
    <path d="M50 56 l6 6 M66 80 l6 6" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
    ${LB(61,120,'世代')}
    <path d="M170 44 l8 24 h-16 z" fill="var(--accent)"/>
    <path d="M170 68 l-8 22 h16 z" fill="var(--accent)" opacity=".7"/>
    ${LB(180,120,'電気を起こす')}`),

  estimate: A(`
    <line x1="70" y1="60" x2="170" y2="60" stroke="var(--accent)" stroke-width="4"/>
    <text x="120" y="40" text-anchor="middle" font-size="20" fill="var(--accent)" font-weight="bold">≈</text>
    <rect x="60" y="60" width="30" height="24" rx="3" fill="var(--accent)"/>
    <rect x="150" y="60" width="30" height="24" rx="3" fill="var(--muted)" opacity=".4"/>
    ${LB(120,110,'だいたいの見積もり')}`),

  favorite: A(`
    <path d="M100 44 l4 12 12 1 -9 8 3 12 -10 -6 -10 6 3 -12 -9 -8 12 -1 z" fill="var(--accent)"/>
    <path d="M140 44 l4 12 12 1 -9 8 3 12 -10 -6 -10 6 3 -12 -9 -8 12 -1 z" fill="var(--accent)" opacity=".4"/>
    <circle cx="120" cy="24" r="8" fill="var(--accent)"/>
    ${LB(120,116,'一番のお気に入り')}`),

  difficulty: A(`
    <path d="M40 108 L100 30 L160 108 Z" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M64 96 q26 -30 52 -50" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
    <text x="185" y="60" text-anchor="middle" font-size="20" fill="var(--accent)" font-weight="bold">?</text>
    ${LB(120,124,'険しくて難しい')}`),

  purchase: A(`
    <path d="M50 50 h20 l14 46 h60 l16 -34 h-84" fill="none" stroke="var(--accent)" stroke-width="4"/>
    <circle cx="94" cy="106" r="8" fill="var(--accent)"/>
    <circle cx="134" cy="106" r="8" fill="var(--accent)"/>
    <path d="M160 40 h30" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4"/>
    <path d="M190 40 l-10 -6 v12 z" fill="var(--accent)"/>
    <circle cx="205" cy="40" r="10" fill="var(--accent)" opacity=".6"/>
    ${LB(120,124,'お金を払って買う')}`),

  the: A(`
    ${[[46,50],[90,60],[178,44],[210,66]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="var(--muted)" opacity=".35"/>`).join('')}
    <circle cx="134" cy="52" r="18" fill="var(--accent)"/>
    <circle cx="134" cy="52" r="26" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    ${LB(120,120,'その特定の1つ')}`),

  };
})());
