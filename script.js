const slider = document.getElementById('yearSlider');
const selectedYear = document.getElementById('selectedYear');
const yearLabel = document.getElementById('yearLabel');
const predictionTitle = document.getElementById('predictionTitle');
const yearSummary = document.getElementById('yearSummary');
const keyChanges = document.getElementById('keyChanges');
const metricsGrid = document.getElementById('metricsGrid');
const predictionCards = document.getElementById('predictionCards');
const cityScene = document.getElementById('cityScene');
const yearChips = Array.from(document.querySelectorAll('.year-chip'));
const unitList = document.getElementById('unitList');
const unitVisualBody = document.getElementById('unitVisualBody');
const unitVisualTitle = document.getElementById('unitVisualTitle');
const unitVisualTag = document.getElementById('unitVisualTag');
const unitVisualLegend = document.getElementById('unitVisualLegend');

const milestones = {
  2025: {
    label: 'Baseline conditions with major development already underway.',
    summary: 'Dubai is already a global city shaped by migration, construction, tourism, logistics, and ambitious long-term planning.',
    changes: [
      'Population growth is still strongly connected to migration and labor demand.',
      'Smart-city systems are growing, but many changes are still in transition.',
      'Food security still depends heavily on imports, while local agri-tech remains limited.'
    ],
    cards: [
      {
        kicker: 'Population and migration',
        title: 'Rapid growth continues',
        body: 'Dubai keeps attracting workers, professionals, and investors. The main prediction is that population growth remains linked to migration rather than natural increase.'
      },
      {
        kicker: 'Urban land use',
        title: 'Planning becomes more visible',
        body: 'The city is already expanding, but the major prediction is that future growth will become more organized around transit, mixed-use districts, and green space.'
      },
      {
        kicker: 'Economy',
        title: 'Diversification stays central',
        body: 'Tourism, logistics, aviation, finance, and technology continue to define Dubai more than oil.'
      }
    ],
    story: 'Dubai begins as a global city with rapid migration, construction, and policy planning already shaping the future.'
  },
  2030: {
    label: 'Digital systems become more visible in transport and services.',
    summary: 'By 2030, urban technology is more noticeable, mobility systems are smarter, and economic diversification is becoming more practical than symbolic.',
    changes: [
      'Autonomous and AI-supported transport becomes a visible part of mobility.',
      'Growth pressure increases demand for housing, infrastructure, and public space.',
      'Economic policy pushes tourism, logistics, finance, and technology more strongly.'
    ],
    cards: [
      {
        kicker: 'Technology',
        title: 'Smarter movement',
        body: 'A key prediction for 2030 is that daily mobility becomes more efficient through smart systems and partial automation.'
      },
      {
        kicker: 'Culture',
        title: 'More diversity, same identity',
        body: 'Globalization increases cultural diversity, but local culture remains protected through language, heritage, and national identity policies.'
      },
      {
        kicker: 'Food security',
        title: 'Agri-tech becomes useful',
        body: 'Vertical farming and controlled-environment agriculture start contributing more clearly to resilience, even if imports remain important.'
      }
    ],
    story: 'Automation becomes more visible as transport, services, and innovation policy reshape urban life.'
  },
  2040: {
    label: 'Urban planning goals significantly reshape the city.',
    summary: 'By 2040, Dubai appears more polycentric, better connected, and more intentional about green space, service centers, and quality of life.',
    changes: [
      'Urban form spreads into multiple connected centers instead of one dominant core.',
      'Green corridors and public amenities become more important in city planning.',
      'Food technology supports resilience, even if imports remain essential.'
    ],
    cards: [
      {
        kicker: 'Urban development',
        title: 'Multiple centers grow',
        body: 'The main prediction is that Dubai becomes more polycentric, reducing pressure on the original core and spreading services across the city.'
      },
      {
        kicker: 'Political geography',
        title: 'Cooperation matters more',
        body: 'Climate policy, resource management, and regional cooperation become more important for maintaining long-term urban stability.'
      },
      {
        kicker: 'Environment',
        title: 'Greener infrastructure',
        body: 'Parks, public spaces, and green corridors expand because quality of life becomes a stronger planning goal.'
      }
    ],
    story: 'Urban planning changes the city through greener corridors, stronger connectivity, and multiple urban centers.'
  },
  2050: {
    label: 'Dubai functions as a highly networked future city.',
    summary: 'By 2050, Dubai is projected to be more automated, more climate-aware, and more dependent on knowledge industries, while still managing heat, water, and food challenges.',
    changes: [
      'Technology is deeply integrated into everyday life and urban management.',
      'The economy depends even more on knowledge, services, and clean-tech sectors.',
      'The biggest long-term challenges remain sustainability, water, and climate adaptation.'
    ],
    cards: [
      {
        kicker: '2050 core prediction',
        title: 'A smart global city',
        body: 'The strongest overall prediction is that Dubai becomes an even more data-driven and globally connected city, shaped by AI, smart mobility, and knowledge industries.'
      },
      {
        kicker: 'Main challenge',
        title: 'Sustainability pressure',
        body: 'Even with advanced technology, Dubai still has to manage heat, water scarcity, imported food dependence, and the environmental cost of growth.'
      },
      {
        kicker: 'Human geography result',
        title: 'Growth stays uneven',
        body: 'The city becomes more advanced, but its success still depends on how it handles migration, housing, land use, and social balance.'
      }
    ],
    story: 'Dubai becomes a highly networked future city where opportunity and environmental pressure both increase.'
  }
};

const metrics = [
  {
    key: 'population',
    label: 'Population scenario',
    unit: 'M',
    values: { 2025: 4.40, 2030: 4.95, 2040: 5.65, 2050: 6.20 },
    max: 7,
    note: 'Population is likely to keep rising, mainly through migration and urban opportunity.'
  },
  {
    key: 'mobility',
    label: 'Smart mobility share',
    unit: '%',
    values: { 2025: 6, 2030: 25, 2040: 44, 2050: 60 },
    max: 100,
    note: 'Mobility becomes more automated and data-driven over time.'
  },
  {
    key: 'green',
    label: 'Green-space access index',
    unit: '%',
    values: { 2025: 100, 2030: 118, 2040: 150, 2050: 172 },
    max: 180,
    note: 'This index uses 2025 as a baseline of 100 and shows expansion in green and public space.'
  },
  {
    key: 'food',
    label: 'Agri-tech support',
    unit: '%',
    values: { 2025: 8, 2030: 16, 2040: 29, 2050: 42 },
    max: 100,
    note: 'Estimated share of fresh food supply that could be supported by local food technology.'
  },
  {
    key: 'economy',
    label: 'Knowledge-economy strength',
    unit: '%',
    values: { 2025: 42, 2030: 49, 2040: 58, 2050: 70 },
    max: 100,
    note: 'Shows the growing importance of advanced services, innovation, and non-oil sectors.'
  }
];

const units = [
  {
    id: 1,
    tag: 'Unit 1',
    title: 'Thinking Geographically',
    visualTitle: 'Spatial network map',
    current: 'Dubai is important because of its site on the Arabian Gulf and its situation between Europe, Asia, and Africa. Geography helps explain its trade, aviation, and logistics role.',
    future: 'By 2050, space will feel more connected through real-time mapping, AI routing, and digitally managed infrastructure. Distance matters less in daily movement, but location still matters for trade and influence.',
    why: 'This unit shows that geography is not only about location. It explains why Dubai became globally important and how technology may change spatial interaction.',
    bullets: [
      'Dubai will keep acting as a gateway city because its location supports global flows of goods, people, and information.',
      'GIS and AI will improve movement, emergency response, and city management by making spatial data more useful.',
      'The city’s location between major world regions will continue to attract business, migration, and tourism.'
    ],
    stages: {
      2025: 'Dubai already benefits from its strategic location, but many daily interactions still depend on traditional commuting patterns and a strong central core.',
      2030: 'AI-supported navigation, logistics, and public services become more common, making spatial interaction faster and more efficient.',
      2040: 'Urban planning and GIS tools connect multiple service centers, reducing pressure on the old core and improving regional movement.',
      2050: 'The city operates as a highly mapped and networked environment where data shapes mobility, services, and emergency response.'
    },
    visual: 'spatial'
  },
  {
    id: 2,
    tag: 'Unit 2',
    title: 'Population and Migration',
    visualTitle: 'Population pyramid and migration growth',
    current: 'Dubai has a rapidly growing population influenced heavily by international migration. Workers, professionals, and investors all shape the city.',
    future: 'By 2050, the population will likely be larger and even more diverse. The biggest challenge will not only be growth, but how to provide housing, transport, and services fairly.',
    why: 'This unit helps explain why the city grows and how migration changes the age structure, labor market, and urban demand.',
    bullets: [
      'Population growth will continue mainly because of migration rather than natural increase.',
      'The working-age population will stay dominant because Dubai continues attracting labor and professionals.',
      'Housing, transit, and urban services will face more pressure as demographic diversity increases.'
    ],
    stages: {
      2025: 'Migration remains the main force behind demographic growth, especially through labor demand and international business.',
      2030: 'Population growth increases pressure on infrastructure and housing, making planning more important.',
      2040: 'A larger population pushes Dubai toward more mixed-use districts and broader service coverage.',
      2050: 'Demographic complexity becomes a defining feature of the city, making inclusion and urban balance more important.'
    },
    visual: 'population'
  },
  {
    id: 3,
    tag: 'Unit 3',
    title: 'Cultural Patterns and Processes',
    visualTitle: 'Cultural diversity mix',
    current: 'Arabic and Islam remain central to local identity, but Dubai is also strongly multicultural because of its expatriate population and global economy.',
    future: 'By 2050, globalization is likely to deepen cultural diversity while government policy continues to protect Emirati heritage, Arabic language, and national identity.',
    why: 'This unit shows how culture can spread globally while also being protected locally.',
    bullets: [
      'Cultural diversity will continue growing because migration and tourism connect Dubai to many regions.',
      'Heritage preservation will become more important as globalization becomes stronger.',
      'Daily life will reflect both global influences and intentional protection of Emirati identity.'
    ],
    stages: {
      2025: 'Dubai already combines a strong local identity with a highly diverse expatriate society.',
      2030: 'Global consumer culture becomes even more visible, while official heritage programs stay important.',
      2040: 'Cultural diversity shapes neighborhoods, services, and tourism more clearly.',
      2050: 'The city becomes a stronger example of cultural coexistence, but preservation policies remain necessary to protect local identity.'
    },
    visual: 'culture'
  },
  {
    id: 4,
    tag: 'Unit 4',
    title: 'Political Geography',
    visualTitle: 'Regional cooperation network',
    current: 'Dubai is part of the UAE, a politically stable state with strong global trade and diplomatic relationships.',
    future: 'By 2050, political geography will matter through climate cooperation, regional stability, migration policy, and global economic partnerships.',
    why: 'Human geography is shaped not only by people and places but also by political decisions, international ties, and policy responses.',
    bullets: [
      'Dubai will depend more on international cooperation in climate, trade, and technology.',
      'Migration policy and regional stability will remain important because Dubai depends on global flows of people and investment.',
      'Political geography will affect resource security, especially around water, food systems, and energy transition.'
    ],
    stages: {
      2025: 'Political stability supports investment, trade, and long-term planning.',
      2030: 'Transport, innovation, and climate policy become more visible parts of governance.',
      2040: 'Regional cooperation around sustainability and resource security becomes more important.',
      2050: 'International cooperation is likely to shape how Dubai handles climate pressure, migration, and economic competitiveness.'
    },
    visual: 'politics'
  },
  {
    id: 5,
    tag: 'Unit 5',
    title: 'Agriculture and Rural Land Use',
    visualTitle: 'Food security and agri-tech',
    current: 'Because of the desert climate, Dubai and the UAE depend heavily on imported food. Local agriculture is limited by heat, water scarcity, and land conditions.',
    future: 'By 2050, vertical farming, hydroponics, and controlled-environment agriculture may improve food resilience, but full self-sufficiency is still unlikely.',
    why: 'This unit helps show how environmental limits affect food systems and how technology may reduce those limits without removing them completely.',
    bullets: [
      'Agri-tech will increase local food production, especially for fresh produce.',
      'Imports will still remain important because environmental limits cannot be removed completely.',
      'The main long-term prediction is greater food resilience, not total food independence.'
    ],
    stages: {
      2025: 'Food security relies mainly on imported supply chains, with emerging local agri-tech experiments.',
      2030: 'Food technology scales up and becomes a clearer part of resilience planning.',
      2040: 'Controlled-environment agriculture supports a larger share of selected produce.',
      2050: 'Agri-tech improves resilience significantly, but imports are still necessary because of environmental constraints.'
    },
    visual: 'food'
  },
  {
    id: 6,
    tag: 'Unit 6',
    title: 'Cities and Urban Land Use',
    visualTitle: 'Urban growth and land-use shift',
    current: 'Dubai is defined by rapid urban growth, large-scale infrastructure, and highly planned development.',
    future: 'By 2050, the city is likely to be denser, greener, more connected, and more polycentric, with smart mobility playing a bigger role in how land is used.',
    why: 'This unit explains how people shape urban space and how cities respond to growth pressures.',
    bullets: [
      'The city will become more polycentric, with multiple urban centers rather than one dominant core.',
      'Transit, mixed-use districts, and green corridors will play a bigger role in future land use.',
      'The main urban challenge will be balancing continued growth with sustainability and livability.'
    ],
    stages: {
      2025: 'The city already shows large-scale development and major infrastructure expansion.',
      2030: 'Smart systems improve mobility and make urban services more efficient.',
      2040: 'Multiple urban centers and green corridors reduce pressure on the main core.',
      2050: 'Urban land use becomes more mixed, more data-driven, and more sustainability-focused.'
    },
    visual: 'urban'
  },
  {
    id: 7,
    tag: 'Unit 7',
    title: 'Industrial and Economic Development',
    visualTitle: 'Economic sector transition',
    current: 'Dubai has already diversified far beyond oil into tourism, trade, logistics, finance, aviation, real estate, and technology.',
    future: 'By 2050, knowledge industries, advanced services, clean energy, and innovation are likely to dominate even more strongly, while automation changes the labor market.',
    why: 'This unit connects development to employment, sector change, and economic strategy.',
    bullets: [
      'Technology, finance, logistics, tourism, and advanced services will keep gaining importance.',
      'Automation will change jobs, increasing the value of highly skilled work and digital industries.',
      'The strongest economic prediction is that Dubai becomes even less dependent on oil and more dependent on knowledge sectors.'
    ],
    stages: {
      2025: 'The economy is already diversified, but major future growth depends on services and innovation.',
      2030: 'Technology, tourism, logistics, and finance gain more strategic importance.',
      2040: 'A more mature, diversified economy relies on highly connected infrastructure and skilled labor.',
      2050: 'Economic growth is increasingly linked to knowledge, digital systems, and sustainable technologies.'
    },
    visual: 'economy'
  }
];

let activeUnit = 0;

function interpolateValue(values, year) {
  const points = [2025, 2030, 2040, 2050];
  if (values[year] !== undefined) return values[year];
  let lower = 2025;
  let upper = 2050;
  for (let i = 0; i < points.length - 1; i++) {
    if (year > points[i] && year < points[i + 1]) {
      lower = points[i];
      upper = points[i + 1];
      break;
    }
  }
  const progress = (year - lower) / (upper - lower);
  return values[lower] + (values[upper] - values[lower]) * progress;
}

function closestMilestone(year) {
  if (year <= 2027) return 2025;
  if (year <= 2035) return 2030;
  if (year <= 2045) return 2040;
  return 2050;
}

function stageFromYear(year) {
  return String(closestMilestone(year));
}

function renderMetrics(year) {
  metricsGrid.innerHTML = metrics.map(metric => {
    const value = interpolateValue(metric.values, year);
    const percent = Math.max(0, Math.min(100, (value / metric.max) * 100));
    const display = metric.unit === 'M' ? value.toFixed(2) + metric.unit : Math.round(value) + metric.unit;
    return `
      <article class="metric-card glass">
        <span class="metric-label">${metric.label}</span>
        <div class="metric-value">${display}</div>
        <div class="metric-track"><div class="metric-fill" style="width:${percent}%"></div></div>
        <p class="metric-note">${metric.note}</p>
      </article>
    `;
  }).join('');
}

function renderPredictionCards(year) {
  const milestone = closestMilestone(year);
  const cards = milestones[milestone].cards;
  predictionCards.innerHTML = cards.map(card => `
    <article class="prediction-card glass">
      <span class="prediction-kicker">${card.kicker}</span>
      <h3>${card.title}</h3>
      <p>${card.body}</p>
    </article>
  `).join('');
}

function renderUnitsList() {
  unitList.innerHTML = units.map((unit, index) => `
    <button class="unit-button ${index === activeUnit ? 'active' : ''}" data-unit-index="${index}">
      <span>${unit.tag}</span>
      <strong>${unit.title}</strong>
    </button>
  `).join('');

  unitList.querySelectorAll('.unit-button').forEach(button => {
    button.addEventListener('click', () => {
      activeUnit = Number(button.dataset.unitIndex);
      renderUnitsList();
      renderUnitDetail(Number(slider.value));
    });
  });
}

function renderUnitDetail(year) {
  const unit = units[activeUnit];
  const stage = closestMilestone(year);
  document.getElementById('unitTag').textContent = unit.tag;
  document.getElementById('unitTitle').textContent = unit.title;
  document.getElementById('unitCurrent').textContent = unit.current;
  document.getElementById('unitYearView').textContent = unit.stages[stage];
  document.getElementById('unitFuture').textContent = unit.future;
  document.getElementById('unitWhy').textContent = unit.why;
  document.getElementById('unitBullets').innerHTML = unit.bullets.map(item => `<li>${item}</li>`).join('');
  unitVisualTitle.textContent = unit.visualTitle;
  unitVisualTag.textContent = `${unit.tag} visual`;
  renderUnitVisual(unit.visual, year);
}

function legend(items) {
  unitVisualLegend.innerHTML = items.map(item => `
    <span class="legend-item"><span class="legend-dot" style="background:${item.color}"></span><span>${item.label}</span></span>
  `).join('');
}

/* ============================================================
   UNIFIED SVG VISUAL SYSTEM
   One design language across all 7 units:
   - Shared defs (gradients, soft glow, gridlines)
   - Consistent palette tied to CSS vars (gold #f8d28b, sky #8fd6ff, mint #64e2a8)
   - Thin strokes, generous spacing, small uppercase labels
   - Each visual reads in ~3 seconds
   ============================================================ */

const SVG_DEFS = `
  <defs>
    <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbe2ad"/><stop offset="1" stop-color="#f3b75d"/>
    </linearGradient>
    <linearGradient id="gSky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#b9e6ff"/><stop offset="1" stop-color="#6cc4f5"/>
    </linearGradient>
    <linearGradient id="gMint" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#9ff0c9"/><stop offset="1" stop-color="#4ccf93"/>
    </linearGradient>
    <linearGradient id="gFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="rgba(143,214,255,0.18)"/><stop offset="1" stop-color="rgba(143,214,255,0)"/>
    </linearGradient>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="rGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="rgba(248,210,139,0.35)"/><stop offset="1" stop-color="rgba(248,210,139,0)"/>
    </radialGradient>
  </defs>
`;

function svgWrap(inner, vb = '0 0 600 320') {
  return `<svg class="viz" viewBox="${vb}" preserveAspectRatio="xMidYMid meet" role="img">${SVG_DEFS}${inner}</svg>`;
}

function renderUnitVisual(type, year) {
  const milestone = closestMilestone(year);

  /* ---------- UNIT 1 — Spatial network / gateway map ---------- */
  if (type === 'spatial') {
    legend([
      { color: '#f8d28b', label: 'Dubai hub' },
      { color: '#8fd6ff', label: 'Global corridors' }
    ]);

    // abstract world map: Dubai at centre, arcs to world regions
    const hub = { x: 300, y: 168 };
    const nodes = [
      { x: 120, y: 96, l: 'EUROPE' },
      { x: 470, y: 92, l: 'EAST ASIA' },
      { x: 96, y: 232, l: 'AFRICA' },
      { x: 486, y: 236, l: 'OCEANIA' },
      { x: 300, y: 56, l: 'C. ASIA' }
    ];
    const arcs = nodes.map(n => {
      const mx = (hub.x + n.x) / 2;
      const my = (hub.y + n.y) / 2 - 46;
      return `<path d="M${hub.x},${hub.y} Q${mx},${my} ${n.x},${n.y}" fill="none" stroke="url(#gSky)" stroke-width="1.6" opacity="0.7" stroke-linecap="round"/>`;
    }).join('');
    const dots = nodes.map(n => `
      <circle cx="${n.x}" cy="${n.y}" r="5.5" fill="url(#gSky)"/>
      <text x="${n.x}" y="${n.y - 14}" class="viz-mini" text-anchor="middle">${n.l}</text>
    `).join('');

    unitVisualBody.innerHTML = `
      <div class="clean-visual">
        ${svgWrap(`
          ${gridDots()}
          ${arcs}
          ${dots}
          <circle cx="${hub.x}" cy="${hub.y}" r="34" fill="url(#rGlow)"/>
          <circle cx="${hub.x}" cy="${hub.y}" r="13" fill="url(#gGold)"/>
          <text x="${hub.x}" y="${hub.y + 34}" class="viz-label" text-anchor="middle">DUBAI</text>
        `)}
        <p class="visual-note">Prediction: by ${milestone}, Dubai strengthens its role as a gateway city linking major world regions through trade, aviation, smart logistics, and digital mapping.</p>
      </div>
    `;
    return;
  }

  /* ---------- UNIT 2 — Population pyramid ---------- */
  if (type === 'population') {
    legend([
      { color: '#8fd6ff', label: 'Male' },
      { color: '#f8d28b', label: 'Female' }
    ]);

    const rows = [
      ['65+', 18, 14], ['55–64', 34, 30], ['45–54', 58, 52],
      ['35–44', 78, 64], ['25–34', 92, 76], ['15–24', 46, 42], ['0–14', 28, 26]
    ];
    const cx = 300, top = 24, rowH = 30, gap = 8, maxW = 168, axisGap = 38;
    const bars = rows.map((r, i) => {
      const y = top + i * (rowH + gap);
      const lw = (r[1] / 100) * maxW;
      const rw = (r[2] / 100) * maxW;
      return `
        <rect x="${cx - axisGap - lw}" y="${y}" width="${lw}" height="${rowH}" rx="5" fill="url(#gSky)"/>
        <rect x="${cx + axisGap}" y="${y}" width="${rw}" height="${rowH}" rx="5" fill="url(#gGold)"/>
        <text x="${cx}" y="${y + rowH / 2 + 4}" class="viz-mini" text-anchor="middle">${r[0]}</text>
      `;
    }).join('');

    unitVisualBody.innerHTML = `
      <div class="clean-visual">
        ${svgWrap(`
          ${bars}
          <text x="${cx - axisGap - maxW}" y="14" class="viz-mini" text-anchor="start">← MALE</text>
          <text x="${cx + axisGap + maxW}" y="14" class="viz-mini" text-anchor="end">FEMALE →</text>
        `, '0 0 600 290')}
        <p class="visual-note">Prediction: by ${milestone}, working-age groups (25–44) stay dominant because labour migration remains the main driver of Dubai's population growth.</p>
      </div>
    `;
    return;
  }

  /* ---------- UNIT 3 — Cultural composition (donut) ---------- */
  if (type === 'culture') {
    legend([
      { color: '#f8d28b', label: 'Emirati identity' },
      { color: '#8fd6ff', label: 'Global diversity' },
      { color: '#64e2a8', label: 'Tourism & exchange' }
    ]);

    const segs = [
      { v: 18, g: 'url(#gGold)', l: 'Emirati identity' },
      { v: 62, g: 'url(#gSky)', l: 'Global diversity' },
      { v: 20, g: 'url(#gMint)', l: 'Tourism & exchange' }
    ];
    unitVisualBody.innerHTML = `
      <div class="clean-visual rings-clean">
        <div class="ring-wrap">
          ${svgWrap(donut(segs, 110, 110, 78, 22), '0 0 220 220')}
        </div>
        <div class="ring-text">
          ${segs.map(s => `<div><strong>${s.v}%</strong><span>${s.l}</span></div>`).join('')}
        </div>
        <p class="visual-note">Prediction: by ${milestone}, Dubai becomes more multicultural, yet Emirati identity, Arabic language, and national heritage stay protected and central.</p>
      </div>
    `;
    return;
  }

  /* ---------- UNIT 4 — Cooperation network ---------- */
  if (type === 'politics') {
    legend([
      { color: '#f8d28b', label: 'Dubai / UAE' },
      { color: '#8fd6ff', label: 'Shared challenges' }
    ]);

    const hub = { x: 300, y: 160 };
    const r = 118;
    const labels = ['TRADE', 'CLIMATE', 'WATER', 'MIGRATION', 'ENERGY', 'SECURITY'];
    const nodes = labels.map((l, i) => {
      const a = (-90 + i * (360 / labels.length)) * Math.PI / 180;
      return { x: hub.x + Math.cos(a) * r, y: hub.y + Math.sin(a) * r, l };
    });
    const links = nodes.map(n => `<line x1="${hub.x}" y1="${hub.y}" x2="${n.x}" y2="${n.y}" stroke="url(#gSky)" stroke-width="1.4" opacity="0.6"/>`).join('');
    const pts = nodes.map(n => `
      <circle cx="${n.x}" cy="${n.y}" r="6" fill="url(#gSky)"/>
      <text x="${n.x}" y="${n.y > hub.y ? n.y + 18 : n.y - 12}" class="viz-mini" text-anchor="middle">${n.l}</text>
    `).join('');

    unitVisualBody.innerHTML = `
      <div class="clean-visual">
        ${svgWrap(`
          ${links}${pts}
          <circle cx="${hub.x}" cy="${hub.y}" r="30" fill="url(#rGlow)"/>
          <circle cx="${hub.x}" cy="${hub.y}" r="15" fill="url(#gGold)"/>
          <text x="${hub.x}" y="${hub.y + 4}" class="viz-label-dark" text-anchor="middle">UAE</text>
        `)}
        <p class="visual-note">Prediction: by ${milestone}, Dubai relies more on international cooperation to manage trade, climate, water, migration, energy, and regional security.</p>
      </div>
    `;
    return;
  }

  /* ---------- UNIT 5 — Food security split ---------- */
  if (type === 'food') {
    legend([
      { color: '#8fd6ff', label: 'Imported food' },
      { color: '#64e2a8', label: 'Local agri-tech' }
    ]);

    const local = milestone === 2025 ? 8 : milestone === 2030 ? 16 : milestone === 2040 ? 29 : 42;
    const imported = 100 - local;
    const series = [
      { y: 2025, l: 8 }, { y: 2030, l: 16 }, { y: 2040, l: 29 }, { y: 2050, l: 42 }
    ];
    const x0 = 56, x1 = 560, y0 = 40, y1 = 168, span = x1 - x0;
    const px = i => x0 + (i / (series.length - 1)) * span;
    const py = v => y1 - (v / 50) * (y1 - y0);
    const line = series.map((s, i) => `${i ? 'L' : 'M'}${px(i)},${py(s.l)}`).join(' ');
    const area = `${line} L${px(series.length - 1)},${y1} L${px(0)},${y1} Z`;
    const lpts = series.map((s, i) => {
      const active = s.y === milestone;
      return `<circle cx="${px(i)}" cy="${py(s.l)}" r="${active ? 6 : 4}" fill="url(#gMint)" ${active ? 'stroke="#fff" stroke-width="1.5"' : ''}/>
        <text x="${px(i)}" y="190" class="viz-mini" text-anchor="middle">${s.y}</text>`;
    }).join('');

    unitVisualBody.innerHTML = `
      <div class="clean-visual food-split">
        <div class="food-bar">
          <div class="food-import" style="width:${imported}%"><span>${imported}% imported</span></div>
          <div class="food-local" style="width:${local}%"><span>${local}%</span></div>
        </div>
        ${svgWrap(`
          <line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <path d="${area}" fill="url(#gFade)"/>
          <path d="${line}" fill="none" stroke="url(#gMint)" stroke-width="2.5" stroke-linecap="round"/>
          ${lpts}
          <text x="${x0}" y="28" class="viz-mini" text-anchor="start">LOCAL FOOD PRODUCTION %</text>
        `, '0 0 600 210')}
        <p class="visual-note">Prediction: by ${milestone}, vertical farming and hydroponics raise local production, but imports stay essential due to heat, water scarcity, and limited farmland.</p>
      </div>
    `;
    return;
  }

  /* ---------- UNIT 6 — Polycentric urban growth ---------- */
  if (type === 'urban') {
    legend([
      { color: '#8fd6ff', label: 'Urban core' },
      { color: '#f8d28b', label: 'New centers' },
      { color: '#64e2a8', label: 'Green / transit' }
    ]);

    const centers = [
      { x: 150, y: 200, r: 40, g: 'url(#gSky)', l: 'CORE' },
      { x: 300, y: 110, r: 30, g: 'url(#gGold)', l: 'CENTER' },
      { x: 452, y: 196, r: 27, g: 'url(#gGold)', l: 'CENTER' },
      { x: 360, y: 250, r: 20, g: 'url(#gGold)', l: 'HUB' }
    ];
    const corridor = `M150,200 Q230,150 300,110 Q380,150 452,196`;
    const corridor2 = `M300,110 Q330,180 360,250`;
    unitVisualBody.innerHTML = `
      <div class="clean-visual">
        ${svgWrap(`
          ${gridDots()}
          <path d="${corridor}" fill="none" stroke="url(#gMint)" stroke-width="6" opacity="0.5" stroke-linecap="round"/>
          <path d="${corridor2}" fill="none" stroke="url(#gMint)" stroke-width="5" opacity="0.4" stroke-linecap="round"/>
          ${centers.map(c => `
            <circle cx="${c.x}" cy="${c.y}" r="${c.r + 8}" fill="url(#rGlow)" opacity="0.5"/>
            <circle cx="${c.x}" cy="${c.y}" r="${c.r}" fill="${c.g}" opacity="0.92"/>
            <text x="${c.x}" y="${c.y + 4}" class="viz-label-dark" text-anchor="middle">${c.l}</text>
          `).join('')}
        `)}
        <p class="visual-note">Prediction: by ${milestone}, Dubai grows more polycentric — several connected urban centers linked by greener corridors and stronger transit.</p>
      </div>
    `;
    return;
  }

  /* ---------- UNIT 7 — Economic sector transition ---------- */
  if (type === 'economy') {
    legend([
      { color: '#8fd6ff', label: 'Services & logistics' },
      { color: '#f8d28b', label: 'Technology & AI' },
      { color: '#64e2a8', label: 'Tourism & finance' }
    ]);

    const services = milestone === 2025 ? 72 : milestone === 2030 ? 75 : milestone === 2040 ? 79 : 84;
    const tech = milestone === 2025 ? 44 : milestone === 2030 ? 52 : milestone === 2040 ? 63 : 74;
    const tourism = milestone === 2025 ? 58 : milestone === 2030 ? 61 : milestone === 2040 ? 65 : 68;
    const data = [
      { l: 'SERVICES', v: services, g: 'url(#gSky)' },
      { l: 'TECHNOLOGY', v: tech, g: 'url(#gGold)' },
      { l: 'TOURISM', v: tourism, g: 'url(#gMint)' }
    ];
    const x0 = 150, x1 = 540, span = x1 - x0, rowH = 40, gap = 30, top = 36;
    const bars = data.map((d, i) => {
      const y = top + i * (rowH + gap);
      const w = (d.v / 100) * span;
      return `
        <text x="${x0 - 16}" y="${y + rowH / 2 + 4}" class="viz-mini" text-anchor="end">${d.l}</text>
        <rect x="${x0}" y="${y}" width="${span}" height="${rowH}" rx="8" fill="rgba(255,255,255,0.06)"/>
        <rect x="${x0}" y="${y}" width="${w}" height="${rowH}" rx="8" fill="${d.g}"/>
        <text x="${x0 + w - 12}" y="${y + rowH / 2 + 5}" class="viz-value" text-anchor="end">${d.v}</text>
      `;
    }).join('');

    unitVisualBody.innerHTML = `
      <div class="clean-visual">
        ${svgWrap(`${bars}`, '0 0 600 250')}
        <p class="visual-note">Prediction: by ${milestone}, Dubai's economy leans further into advanced services, AI, logistics, tourism, finance, and innovation — moving away from oil dependence.</p>
      </div>
    `;
  }
}

/* ---- SVG helper builders (shared visual grammar) ---- */
function gridDots() {
  let d = '';
  for (let x = 40; x <= 560; x += 40) {
    for (let y = 40; y <= 280; y += 40) {
      d += `<circle cx="${x}" cy="${y}" r="1" fill="rgba(255,255,255,0.06)"/>`;
    }
  }
  return d;
}

function donut(segs, cx, cy, r, sw) {
  const total = segs.reduce((a, s) => a + s.v, 0);
  const C = 2 * Math.PI * r;
  let offset = 0;
  return segs.map(s => {
    const len = (s.v / total) * C;
    const el = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.g}"
      stroke-width="${sw}" stroke-dasharray="${len} ${C - len}"
      stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})" stroke-linecap="round"/>`;
    offset += len;
    return el;
  }).join('');
}

function updateForecast(year) {
  const milestone = closestMilestone(year);
  const stage = stageFromYear(year);
  const milestoneData = milestones[milestone];

  selectedYear.textContent = year;
  yearLabel.textContent = milestoneData.label;
  predictionTitle.textContent = `Prediction for ${year}`;
  yearSummary.textContent = milestoneData.summary;
  keyChanges.innerHTML = milestoneData.changes.map(item => `<li>${item}</li>`).join('');
  cityScene.dataset.stage = stage;

  yearChips.forEach(chip => chip.classList.toggle('active', Number(chip.dataset.year) === milestone));

  renderMetrics(year);
  renderPredictionCards(year);
  renderUnitDetail(year);
}

slider.addEventListener('input', event => {
  updateForecast(Number(event.target.value));
});

yearChips.forEach(chip => {
  chip.addEventListener('click', () => {
    slider.value = chip.dataset.year;
    updateForecast(Number(chip.dataset.year));
  });
});

renderUnitsList();
updateForecast(Number(slider.value));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const storySteps = Array.from(document.querySelectorAll('.story-step'));
const storyYear = document.getElementById('storyYear');
const storyCaption = document.getElementById('storyCaption');
const storyScene = document.getElementById('storyScene');

const storyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const year = Number(entry.target.dataset.storyYear);
    storySteps.forEach(step => step.classList.toggle('active-step', step === entry.target));
    storyYear.textContent = year;
    storyCaption.textContent = milestones[year].story;
    storyScene.dataset.stage = String(year);
    slider.value = year;
    updateForecast(year);
  });
}, { threshold: 0.55 });

storySteps.forEach(step => storyObserver.observe(step));
