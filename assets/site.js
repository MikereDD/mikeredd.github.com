(() => {
  'use strict';

  const FAMILY = {
    studio:{label:'Studio Suite',sub:'Windows applications',color:'#9b6cff'},
    android:{label:'Android / Media',sub:'mobile & connected media',color:'#78df76'},
    wear:{label:'Wear OS',sub:'watch faces & time',color:'#f1bd55'},
    automation:{label:'Automation',sub:'Telegram agents',color:'#b06cff'},
    engineering:{label:'Engineering / Tools',sub:'infrastructure & utilities',color:'#55c7ff'}
  };

  const projects = [
    {id:'cadence',repo:'Cadence-Studio',name:'Cadence Studio',family:'studio',glyph:'∿',platform:'Windows',language:'C#',tech:'WPF · XAML · MVVM',purpose:'Local-first music player and listening environment.',description:'A polished Windows music player built around local playback, library management, visualization, themes, and an intentional listening experience.',relations:['parallax','release'],keywords:'music audio player visualizer studio'},
    {id:'parallax',repo:'Parallax-Studio',name:'Parallax Studio',family:'studio',glyph:'▷',platform:'Windows',language:'C#',tech:'WPF · libmpv · MVVM',purpose:'Video playback built around a cinematic desktop experience.',description:'A Windows video player focused on reliable playback, elegant presentation, and a cohesive Typezer∅ Studio design language.',relations:['cadence','release'],keywords:'video movie player mpv studio'},
    {id:'sariel',repo:'Sariel',name:'Sariel',family:'android',glyph:'☁',platform:'Android / TV / Auto',language:'Java',tech:'Android · Cloud media',purpose:'Native multi-cloud media player.',description:'A native multi-cloud media player for Android, Android TV, and Android Auto, built to browse and play personal media from connected cloud services.',relations:['couchlink','atomicclock'],keywords:'cloud media android tv auto player'},
    {id:'seraph',repo:'Seraph',name:'Seraph',family:'android',glyph:'◇',platform:'Android',language:'Kotlin',tech:'Material 3 · Jetpack Compose',purpose:'Audio metadata and cover-art editor.',description:'An Android audio tagger for browsing music, editing metadata, and managing embedded cover art.',relations:['siphon','resound'],keywords:'audio tags metadata cover art'},
    {id:'siphon',repo:'Siphon',name:'Siphon',family:'android',glyph:'▽',platform:'Android',language:'Kotlin',tech:'Jetpack Compose · FFmpeg',purpose:'Extract high-quality audio from video.',description:'Extract audio from local video or a link in the format and quality you choose, with full metadata tagging.',relations:['seraph','resound'],keywords:'audio extract video ffmpeg'},
    {id:'resound',repo:'Resound',name:'Resound',family:'android',glyph:'≋',platform:'Android',language:'Kotlin',tech:'Jetpack Compose · FFmpeg',purpose:'Audio editor and multitrack mixer.',description:'Open or record audio, edit it, arrange clips across tracks, and export the result with FFmpeg-backed processing.',relations:['siphon','seraph','release'],keywords:'audio editor mixer multitrack ffmpeg'},
    {id:'couchlink',repo:'CouchLink',name:'CouchLink',family:'android',glyph:'⇄',platform:'Android ↔ Windows',language:'Kotlin / C#',tech:'Bluetooth HID · TCP · WPF',purpose:'Local-first remote control for a Windows gaming PC.',description:'Turns an Android phone or tablet into a polished keyboard, mouse, and control surface for a Windows living-room PC.',relations:['sariel','release'],keywords:'remote keyboard mouse gaming windows android'},
    {id:'atomicclock',repo:'AtomicClock',name:'AtomicClock',family:'android',glyph:'◷',platform:'Android',language:'Kotlin',tech:'NTP · Weather · Widget',purpose:'Precise time, local weather, and home-screen clock work.',description:'A precision time project built around NTP synchronization, local weather, and carefully designed clock experiences.',relations:['watch'],keywords:'clock time ntp weather widget midnight'},
    {id:'watch',repo:'Pixel-Watch-Themes',name:'Pixel Watch Themes',family:'wear',glyph:'◴',platform:'Wear OS',language:'Kotlin / Watch Face',tech:'Wear OS',purpose:'Premium watch faces focused on precision and realism.',description:'A collection of highly detailed Wear OS watch faces designed around mathematical precision, readability, realism, and function.',relations:['atomicclock'],keywords:'wear os watch faces themes time'},
    {id:'musicrepair',repo:'Music-Library-Repair',name:'Music Library Repair',family:'engineering',glyph:'⌁',platform:'Windows',language:'PowerShell',tech:'PowerShell · FFmpeg',purpose:'Safe, transactional music-library repair and normalization.',description:'A repair toolkit built around discovery, preview, transactional replacement, verification, and rollback-safe workflows.',relations:['mnemosyne','release'],keywords:'music repair library powershell ffmpeg'},
    {id:'mnemosyne',repo:'Mnemosyne',name:'Mnemosyne',family:'engineering',glyph:'▤',platform:'Cross-platform',language:'Python',tech:'Media fetch · Library organization',purpose:'Unified media fetcher and library organizer.',description:'A unified media fetcher and library organizer for ebooks, audiobooks, and music.',relations:['musicrepair'],keywords:'ebooks audiobooks music library organizer python'},
    {id:'release',repo:'Typezero-Release-Standards',name:'Release Standards',family:'engineering',glyph:'⬡',platform:'Windows / Android',language:'PowerShell',tech:'Release · Update · Verify · Rollback',purpose:'Reusable release and updater architecture.',description:'Shared Typezer∅ standards for release manifests, verification, update channels, checksums, rollback, and platform-specific deployment.',relations:['cadence','parallax','resound','couchlink'],keywords:'release updater standards checksum rollback infrastructure'},
    {id:'kokabiel',repo:'Kokabiel-Bot',name:'Kokabiel',family:'automation',glyph:'✧',platform:'Telegram',language:'Python',tech:'Bot API',purpose:'Film, TV, and documentary tracking agent.',description:'A Telegram automation agent for discovery, shared watchlists, viewing progress, ratings, and recommendations.',relations:['raziel','gabriel','sandalphon','selaphiel','zaphkiel'],keywords:'telegram bot movies tv documentary'},
    {id:'raziel',repo:'Raziel-Bot',name:'Raziel',family:'automation',glyph:'✦',platform:'Telegram',language:'Python',tech:'Bot API',purpose:'Telegram automation agent.',description:'Part of the Typezer∅ Telegram automation family.',relations:['kokabiel','gabriel','sandalphon','selaphiel','zaphkiel'],keywords:'telegram bot automation'},
    {id:'gabriel',repo:'Gabriel-Bot',name:'Gabriel',family:'automation',glyph:'✣',platform:'Telegram',language:'Python',tech:'Bot API',purpose:'Telegram automation agent.',description:'Part of the Typezer∅ Telegram automation family.',relations:['kokabiel','raziel','sandalphon','selaphiel','zaphkiel'],keywords:'telegram bot automation'},
    {id:'sandalphon',repo:'Sandalphon-Bot',name:'Sandalphon',family:'automation',glyph:'✥',platform:'Telegram',language:'Python',tech:'Bot API',purpose:'Telegram automation agent.',description:'Part of the Typezer∅ Telegram automation family.',relations:['kokabiel','raziel','gabriel','selaphiel','zaphkiel'],keywords:'telegram bot automation'},
    {id:'selaphiel',repo:'Selaphiel-Bot',name:'Selaphiel',family:'automation',glyph:'✤',platform:'Telegram',language:'Python',tech:'Bot API',purpose:'Telegram automation agent.',description:'Part of the Typezer∅ Telegram automation family.',relations:['kokabiel','raziel','gabriel','sandalphon','zaphkiel'],keywords:'telegram bot automation'},
    {id:'zaphkiel',repo:'Zaphkiel-Bot',name:'Zaphkiel',family:'automation',glyph:'✶',platform:'Telegram',language:'Python',tech:'Bot API',purpose:'Telegram automation agent.',description:'Part of the Typezer∅ Telegram automation family.',relations:['kokabiel','raziel','gabriel','sandalphon','selaphiel'],keywords:'telegram bot automation'}
  ];

  const positions = {
    cadence:[45,18],parallax:[58,19],
    sariel:[21,31],seraph:[18,40],siphon:[18,49],resound:[19,58],couchlink:[21,67],atomicclock:[25,75],
    watch:[79,30],
    kokabiel:[84,43],raziel:[86,51],gabriel:[86,59],sandalphon:[84,67],selaphiel:[80,74],zaphkiel:[75,79],
    musicrepair:[41,83],mnemosyne:[52,86],release:[63,83]
  };
  const familyLabels = {studio:[52,8],android:[15,22],wear:[82,20],automation:[88,34],engineering:[52,72]};

  const app = document.querySelector('.app-shell');
  const nodesHost = document.getElementById('nodes');
  const svg = document.getElementById('connections');
  const detail = document.getElementById('detail');
  const ecosystem = document.getElementById('ecosystem');
  const alternate = document.getElementById('alternate-view');
  const signalList = document.getElementById('signal-list');
  const familyStats = document.getElementById('family-stats');
  const timeline = document.getElementById('timeline');
  const commandDialog = document.getElementById('command-dialog');
  const commandInput = document.getElementById('command-input');
  const commandResults = document.getElementById('command-results');
  const statusMessage = document.getElementById('status-message');

  let selected = null;
  let github = new Map();
  let scale = 1;
  let offsetX = 0, offsetY = 0;
  let dragging = false, dragX = 0, dragY = 0;
  let commandSelection = 0;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  app.classList.add(reducedMotion ? 'motion-off' : 'motion-on');

  const repoUrl = p => `https://github.com/MikereDD/${p.repo}`;
  const familyColor = p => FAMILY[p.family].color;
  const formatAgo = iso => {
    if (!iso) return 'unknown';
    const s = Math.max(1, (Date.now() - new Date(iso).getTime()) / 1000);
    if (s < 3600) return `${Math.floor(s/60)}m ago`;
    if (s < 86400) return `${Math.floor(s/3600)}h ago`;
    if (s < 604800) return `${Math.floor(s/86400)}d ago`;
    if (s < 2592000) return `${Math.floor(s/604800)}w ago`;
    return new Date(iso).toLocaleDateString(undefined,{year:'numeric',month:'short'});
  };

  function renderMap(){
    nodesHost.innerHTML=''; svg.innerHTML='';
    Object.entries(familyLabels).forEach(([key,[x,y]])=>{
      const tag=document.createElement('div'); tag.className='family-tag'; tag.style.left=`${x}%`;tag.style.top=`${y}%`;tag.style.setProperty('--family',FAMILY[key].color);tag.innerHTML=`${FAMILY[key].label}<small>${FAMILY[key].sub}</small>`;nodesHost.append(tag);
    });
    projects.forEach(p=>{
      const [x,y]=positions[p.id]; const node=document.createElement('button'); node.className='project-node';node.dataset.project=p.id;node.style.left=`${x}%`;node.style.top=`${y}%`;node.style.setProperty('--family',familyColor(p));
      node.innerHTML=`<span class="node-body"><span class="node-orb">${p.glyph}</span><span class="node-copy"><strong>${p.name}</strong><small>${p.purpose}</small></span></span>`;
      node.addEventListener('click',e=>{e.stopPropagation();selectProject(p.id)});nodesHost.append(node);
      lineToCore(p);
    });
    relationshipLines();
  }

  function lineToCore(p){
    const [x,y]=positions[p.id], cx=50, cy=53;
    const line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',`${cx}%`);line.setAttribute('y1',`${cy}%`);line.setAttribute('x2',`${x}%`);line.setAttribute('y2',`${y}%`);line.setAttribute('stroke',familyColor(p));line.setAttribute('stroke-opacity','.24');line.setAttribute('stroke-width','1');line.dataset.family=p.family;svg.append(line);
  }

  function relationshipLines(){
    const unique=new Set();
    projects.forEach(p=>p.relations.forEach(id=>{
      const key=[p.id,id].sort().join('|'); if(unique.has(key))return; unique.add(key);
      const a=positions[p.id], b=positions[id]; if(!a||!b)return;
      const line=document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('x1',`${a[0]}%`);line.setAttribute('y1',`${a[1]}%`);line.setAttribute('x2',`${b[0]}%`);line.setAttribute('y2',`${b[1]}%`);line.setAttribute('stroke','#c3b5ff');line.setAttribute('stroke-opacity','.055');line.setAttribute('stroke-dasharray','2 5');line.setAttribute('stroke-width','.75');line.classList.add('relationship-line');svg.append(line);
    }));
  }

  function selectProject(id){
    const p=projects.find(x=>x.id===id); if(!p)return; selected=p;
    document.querySelectorAll('.project-node').forEach(n=>n.classList.toggle('is-active',n.dataset.project===id));
    const data=github.get(p.repo.toLowerCase()); const activity=data?.pushed_at || data?.updated_at;
    const related=p.relations.map(r=>projects.find(x=>x.id===r)).filter(Boolean);
    detail.innerHTML=`<div class="detail-card">
      <div class="detail-identity"><div class="detail-icon" style="--family:${familyColor(p)}">${p.glyph}</div><div class="detail-title"><div class="detail-overline">${FAMILY[p.family].label}</div><h2>${p.name}</h2><small>${p.purpose}</small><span class="activity-pill">${activity?'● '+formatAgo(activity):'● repository'}</span></div></div>
      <div class="detail-meta"><div class="meta-row"><span>Platform</span><span>${p.platform}</span></div><div class="meta-row"><span>Language</span><span>${data?.language||p.language}</span></div><div class="meta-row"><span>Stack</span><span>${p.tech}</span></div><div class="meta-row"><span>Family</span><span>${FAMILY[p.family].label}</span></div></div>
      <p class="detail-description">${data?.description || p.description}</p>
      <div class="detail-actions"><a href="${repoUrl(p)}" target="_blank" rel="noopener noreferrer">OPEN REPOSITORY ↗</a><a href="${repoUrl(p)}/releases" target="_blank" rel="noopener noreferrer">RELEASES</a></div>
      ${related.length?`<div class="relation-block"><h3>CONNECTED SYSTEMS</h3><div class="relation-list">${related.map(r=>`<button class="relation-chip" data-open="${r.id}">${r.name}</button>`).join('')}</div></div>`:''}
    </div>`;
    detail.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>selectProject(b.dataset.open)));
    statusMessage.textContent=`INSPECTING ${p.name.toUpperCase()} · ${p.platform.toUpperCase()}`;
    if(innerWidth<900) detail.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'});
  }

  function renderStats(){
    familyStats.innerHTML='';
    Object.entries(FAMILY).forEach(([key,f])=>{const count=projects.filter(p=>p.family===key).length; const row=document.createElement('div');row.className='family-stat';row.style.setProperty('--family',f.color);row.innerHTML=`<i></i><span>${f.label}</span><b>${count}</b>`;familyStats.append(row)});
    document.getElementById('project-count').textContent=projects.length;document.getElementById('stats-total').textContent=projects.length;
  }

  function spark(p){const data=github.get(p.repo.toLowerCase());const seed=(data?.stargazers_count||0)+(data?.forks_count||0)+p.name.length;let vals=[];for(let i=0;i<16;i++)vals.push(2+((seed*(i+3)*7+i*i*5)%13));return `<span class="spark" style="--family:${familyColor(p)}">${vals.map(v=>`<b style="height:${v}px"></b>`).join('')}</span>`}

  function renderSignals(){
    const sorted=[...projects].sort((a,b)=>new Date(github.get(b.repo.toLowerCase())?.pushed_at||0)-new Date(github.get(a.repo.toLowerCase())?.pushed_at||0)).slice(0,6);
    signalList.innerHTML=sorted.map(p=>{const d=github.get(p.repo.toLowerCase());return `<div class="signal-item" style="--family:${familyColor(p)}"><i></i><span>${p.name}</span><small>${formatAgo(d?.pushed_at)}</small>${spark(p)}</div>`}).join('');
  }

  function renderTimeline(){
    const years=[2022,2023,2024,2025,2026]; const min=new Date('2022-01-01').getTime(),max=new Date('2027-01-01').getTime();
    timeline.innerHTML='<div class="timeline-axis"></div>';
    const width=timeline.clientWidth-52;
    years.forEach(y=>{const el=document.createElement('span');el.className='timeline-year';el.style.left=`${46+((new Date(`${y}-01-01`).getTime()-min)/(max-min))*width}px`;el.textContent=y;timeline.append(el)});
    projects.forEach((p,i)=>{const d=github.get(p.repo.toLowerCase());const when=d?.created_at?new Date(d.created_at).getTime():new Date(`2025-${String((i%12)+1).padStart(2,'0')}-01`).getTime();const x=46+Math.max(0,Math.min(1,(when-min)/(max-min)))*width;const dot=document.createElement('button');dot.className='timeline-dot';dot.style.left=`${x}px`;dot.style.bottom=`${26+(i%4)*17}px`;dot.style.setProperty('--family',familyColor(p));dot.dataset.label=p.name;dot.title=p.name;dot.addEventListener('click',()=>selectProject(p.id));timeline.append(dot)});
  }

  async function loadGitHub(){
    try{
      const response=await fetch('https://api.github.com/users/MikereDD/repos?per_page=100&sort=updated',{headers:{Accept:'application/vnd.github+json'}});
      if(!response.ok) throw new Error(`GitHub ${response.status}`);
      const repos=await response.json(); repos.forEach(r=>github.set(r.name.toLowerCase(),r));
      const weekAgo=Date.now()-7*864e5; const active=projects.filter(p=>new Date(github.get(p.repo.toLowerCase())?.pushed_at||0).getTime()>weekAgo).length;
      document.getElementById('active-count').textContent=active;document.getElementById('last-sync').textContent='live';
      renderSignals();renderTimeline();if(selected)selectProject(selected.id);
    }catch(e){document.getElementById('system-status').textContent='LOCAL';document.getElementById('last-sync').textContent='cached';renderSignals();renderTimeline();}
  }

  function setTransform(){const t=`translate(${offsetX}px,${offsetY}px) scale(${scale})`;svg.style.transform=t;nodesHost.style.transform=t;document.querySelector('.rings').style.transform=t;document.getElementById('core').style.transform=`translate(calc(-50% + ${offsetX}px),calc(-50% + ${offsetY}px)) scale(${scale})`}
  ecosystem.addEventListener('wheel',e=>{e.preventDefault();scale=Math.max(.75,Math.min(1.45,scale+(e.deltaY<0?.06:-.06)));setTransform()},{passive:false});
  ecosystem.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;dragging=true;dragX=e.clientX-offsetX;dragY=e.clientY-offsetY;ecosystem.setPointerCapture(e.pointerId)});
  ecosystem.addEventListener('pointermove',e=>{if(!dragging)return;offsetX=e.clientX-dragX;offsetY=e.clientY-dragY;setTransform()});
  ecosystem.addEventListener('pointerup',()=>dragging=false);ecosystem.addEventListener('pointercancel',()=>dragging=false);
  document.getElementById('fit-system').addEventListener('click',()=>{scale=1;offsetX=offsetY=0;setTransform()});
  document.getElementById('toggle-labels').addEventListener('click',e=>{const on=e.currentTarget.getAttribute('aria-pressed')==='true';e.currentTarget.setAttribute('aria-pressed',String(!on));app.classList.toggle('labels-off',on)});
  document.getElementById('toggle-motion').addEventListener('click',e=>{const on=e.currentTarget.getAttribute('aria-pressed')==='true';e.currentTarget.setAttribute('aria-pressed',String(!on));app.classList.toggle('motion-off',on);app.classList.toggle('motion-on',!on)});
  document.getElementById('core').addEventListener('click',()=>openCommand(''));

  function showView(view){
    if(view==='system'){alternate.hidden=true;document.querySelector('.system-stage').hidden=false;detail.hidden=false;document.querySelector('.lower-grid').hidden=false}
    else{document.querySelector('.system-stage').hidden=true;detail.hidden=true;document.querySelector('.lower-grid').hidden=true;alternate.hidden=false;renderAlternate(view)}
    document.querySelectorAll('[data-view-target]').forEach(b=>b.classList.toggle('is-active',b.dataset.viewTarget===view));app.dataset.view=view;statusMessage.textContent=`VIEW ${view.toUpperCase()} · TYPEZER∅ SYSTEM`;
  }

  function renderAlternate(view){
    const head=(title,sub)=>`<div class="alt-head"><div><p>TYPEZER∅ // ${view.toUpperCase()}</p><h2>${title}</h2></div><span>${sub}</span></div>`;
    if(view==='index'){
      alternate.innerHTML=head('Project index.','Direct access to every public system.')+`<div class="index-grid">${projects.map(p=>`<button class="index-card" data-open="${p.id}" style="--family:${familyColor(p)}"><b>${p.name}</b><span>${p.purpose}</span><small>${FAMILY[p.family].label} · ${p.platform}</small></button>`).join('')}</div>`;
    } else if(view==='signal'){
      const sorted=[...projects].sort((a,b)=>new Date(github.get(b.repo.toLowerCase())?.pushed_at||0)-new Date(github.get(a.repo.toLowerCase())?.pushed_at||0));
      alternate.innerHTML=head('Repository signal.','Live GitHub activity when available.')+`<div class="signal-big">${sorted.map(p=>{const d=github.get(p.repo.toLowerCase());return `<button class="signal-big-row" data-open="${p.id}" style="--family:${familyColor(p)}"><b>${p.name}</b><span>${d?.description||p.purpose}</span><small>${d?.language||p.language}</small><small>${formatAgo(d?.pushed_at)}</small></button>`}).join('')}</div>`;
    } else if(view==='history'){
      const min=new Date('2022-01-01').getTime(),max=new Date('2027-01-01').getTime();
      alternate.innerHTML=head('Evolution over time.','Repository creation through current development.')+`<div class="history-lanes">${Object.entries(FAMILY).map(([key,f])=>{const arr=projects.filter(p=>p.family===key);const points=arr.map((p,i)=>{const d=github.get(p.repo.toLowerCase());const start=d?.created_at?new Date(d.created_at).getTime():new Date(`2025-${String((i%12)+1).padStart(2,'0')}-01`).getTime();const pct=Math.max(0,Math.min(100,(start-min)/(max-min)*100));return `<button class="lane-point" data-open="${p.id}" title="${p.name}" style="left:${pct}%"></button>`}).join('');return `<div class="history-lane" style="--family:${f.color}"><span>${f.label}</span><div class="lane-track"><i class="lane-segment" style="left:0;right:0"></i>${points}</div></div>`}).join('')}</div>`;
    } else if(view==='relationships'){
      const groups=[['Audio toolchain','Siphon extracts, Seraph identifies and tags, Resound edits and mixes.',['siphon','seraph','resound']],['Studio language','Cadence and Parallax share the Typezer∅ Studio desktop identity.',['cadence','parallax']],['Time lineage','AtomicClock feeds the design language that expands into Wear OS themes.',['atomicclock','watch']],['Release infrastructure','Reusable release and update principles connect application projects.',['release','cadence','parallax','resound','couchlink']],['Automation family','The angel-named Telegram agents form a coordinated bot collection.',['kokabiel','raziel','gabriel','sandalphon','selaphiel','zaphkiel']],['Library systems','Mnemosyne organizes media while Music Library Repair focuses on safe correction and normalization.',['mnemosyne','musicrepair']]];
      alternate.innerHTML=head('Ideas have lineage.','Workflows, shared standards, and project families.')+`<div class="relations-grid">${groups.map(g=>`<article class="relation-card"><h3>${g[0]}</h3><p>${g[1]}</p><div class="relation-flow">${g[2].map((id,i)=>`${i?'<i>→</i>':''}<button data-open="${id}">${projects.find(p=>p.id===id).name}</button>`).join('')}</div></article>`).join('')}</div>`;
    }
    alternate.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{showView('system');selectProject(b.dataset.open)}));
  }

  document.querySelectorAll('[data-view-target]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.viewTarget)));
  document.querySelector('.observe-toggle').addEventListener('click',()=>{app.classList.toggle('observe');if(app.classList.contains('observe'))showView('system')});
  addEventListener('keydown',e=>{if(e.key==='/'&&!commandDialog.open&&document.activeElement.tagName!=='INPUT'){e.preventDefault();openCommand('')}if(e.key==='Escape'&&app.classList.contains('observe'))app.classList.remove('observe')});
  ecosystem.addEventListener('dblclick',()=>app.classList.toggle('observe'));

  function filteredProjects(q){q=q.trim().toLowerCase();if(!q)return projects;return projects.filter(p=>[p.name,p.repo,p.platform,p.language,p.tech,p.purpose,p.keywords,FAMILY[p.family].label].join(' ').toLowerCase().includes(q))}
  function renderCommand(q=''){
    const rows=filteredProjects(q);commandSelection=Math.min(commandSelection,Math.max(0,rows.length-1));
    commandResults.innerHTML=rows.map((p,i)=>`<button type="button" class="command-result ${i===commandSelection?'is-selected':''}" data-open="${p.id}" style="--family:${familyColor(p)}"><b>${p.name}</b><small>${p.platform}</small><span>${p.purpose}</span></button>`).join('')||'<div class="command-foot">No matching system.</div>';
    commandResults.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{commandDialog.close();showView('system');selectProject(b.dataset.open)}));
  }
  function openCommand(q=''){commandSelection=0;commandInput.value=q;renderCommand(q);commandDialog.showModal();setTimeout(()=>commandInput.focus(),20)}
  document.getElementById('open-command').addEventListener('click',()=>openCommand(''));
  commandInput.addEventListener('input',()=>{commandSelection=0;renderCommand(commandInput.value)});
  commandInput.addEventListener('keydown',e=>{const rows=filteredProjects(commandInput.value);if(e.key==='ArrowDown'){e.preventDefault();commandSelection=Math.min(rows.length-1,commandSelection+1);renderCommand(commandInput.value)}else if(e.key==='ArrowUp'){e.preventDefault();commandSelection=Math.max(0,commandSelection-1);renderCommand(commandInput.value)}else if(e.key==='Enter'&&rows[commandSelection]){e.preventDefault();commandDialog.close();showView('system');selectProject(rows[commandSelection].id)}});

  renderMap();renderStats();renderSignals();renderTimeline();loadGitHub();
})();
