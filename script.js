const slider = document.getElementById('yearSlider');
const selectedYear = document.getElementById('selectedYear');
const yearLabel = document.getElementById('yearLabel');
const yearSummary = document.getElementById('yearSummary');
const keyChanges = document.getElementById('keyChanges');
const metricsGrid = document.getElementById('metricsGrid');
const cityScene = document.getElementById('cityScene');
const yearChips = Array.from(document.querySelectorAll('.year-chip'));
const unitList = document.getElementById('unitList');

const milestones = {
  2025: {
    label: 'Baseline conditions with major development already underway.',
    summary: 'Dubai is already a global city shaped by migration, construction, tourism, logistics, and ambitious long-term planning.',
    changes: [
      'Population growth remains strongly connected to migration and labor demand.',
      'Smart-city systems are expanding, but daily life is still partly in transition.',
      'Food security still depends heavily on imports, with local agri-tech in an early stage.'
    ],
    story: 'Dubai begins as a global city with rapid migration, construction, and policy planning already shaping the future.'
  },
  2030: {
    label: 'Digital systems become more visible in transport and services.',
    summary: 'By 2030, urban technology is more noticeable, mobility systems are smarter, and economic diversification is becoming more practical than symbolic.',
    changes: [
      'Autonomous and AI-supported transport becomes a visible part of mobility.',
      'Growth pressure increases demand for housing, infrastructure, and public space.',
      'Economic policy pushes tourism, logistics, finance, and tech more strongly.'
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
    label: 'Green-space access',
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
    note: 'Share of fresh food supply that could be supported by local food technology.'
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
    current: 'Dubai is important because of its site on the Arabian Gulf and its situation between Europe, Asia, and Africa. Geography helps explain its trade, aviation, and logistics role.',
    future: 'By 2050, space will feel more connected through real-time mapping, AI routing, and digitally managed infrastructure. Distance matters less in daily movement, but location still matters for trade and influence.',
    why: 'This unit shows that geography is not just where a place is. It explains why Dubai became globally important and how technology may change spatial interaction.',
    stages: {
      2025: 'Dubai already uses digital systems and benefits from its strategic location, but many daily interactions still depend on traditional commuting and centralized hubs.',
      2030: 'AI-supported navigation, logistics, and public services become more common, making spatial interaction faster and more efficient.',
      2040: 'Urban planning and GIS tools connect multiple service centers, reducing pressure on the old core and improving regional movement.',
      2050: 'The city operates as a highly mapped and networked environment where data shapes mobility, services, and emergency response.'
    }
  },
  {
    id: 2,
    tag: 'Unit 2',
    title: 'Population and Migration',
    current: 'Dubai has a rapidly growing population influenced heavily by international migration. Workers, professionals, and investors all shape the city.',
    future: 'By 2050, the population will likely be larger and even more diverse. The major challenge will not only be growth, but how to provide housing, transport, and services fairly.',
    why: 'This unit helps explain why the city grows and how migration changes the age structure, labor market, and urban demand.',
    stages: {
      2025: 'Migration remains the main force behind demographic growth, especially through labor demand and international business.',
      2030: 'Population growth increases pressure on infrastructure and housing, making planning more important.',
      2040: 'A larger population pushes Dubai toward more mixed-use districts and broader service coverage.',
      2050: 'Demographic complexity becomes a defining feature of the city, making inclusion and urban balance more important.'
    }
  },
  {
    id: 3,
    tag: 'Unit 3',
    title: 'Cultural Patterns and Processes',
    current: 'Arabic and Islam remain central to local identity, but Dubai is also strongly multicultural because of its expatriate population and global economy.',
    future: 'By 2050, globalization is likely to deepen cultural diversity while government policy continues to protect Emirati heritage, Arabic language, and national identity.',
    why: 'This unit shows how culture can both spread and be protected at the same time.',
    stages: {
      2025: 'Dubai already combines a strong local identity with a highly diverse expatriate society.',
      2030: 'Global consumer culture becomes even more visible, while official heritage programs stay important.',
      2040: 'Cultural diversity shapes neighborhoods, services, and tourism more clearly.',
      2050: 'The city becomes a stronger example of cultural coexistence, but preservation policies remain necessary to protect local identity.'
    }
  },
  {
    id: 4,
    tag: 'Unit 4',
    title: 'Political Geography',
    current: 'Dubai is part of the UAE, a politically stable state with strong global trade and diplomatic relationships.',
    future: 'By 2050, political geography will matter through climate cooperation, regional stability, migration policy, and global economic partnerships.',
    why: 'Human geography is shaped not only by people and places but also by political decisions, international ties, and policy responses.',
    stages: {
      2025: 'Political stability supports investment, trade, and long-term planning.',
      2030: 'Transport, innovation, and climate policy become more visible parts of governance.',
      2040: 'Regional cooperation around sustainability and resource security becomes more important.',
      2050: 'International cooperation is likely to shape how Dubai handles climate pressure, migration, and economic competitiveness.'
    }
  },
  {
    id: 5,
    tag: 'Unit 5',
    title: 'Agriculture and Rural Land Use',
    current: 'Because of the desert climate, Dubai and the UAE depend heavily on imported food. Local agriculture is limited by heat, water scarcity, and land conditions.',
    future: 'By 2050, vertical farming, hydroponics, and controlled-environment agriculture may improve food resilience, but full self-sufficiency is still unlikely.',
    why: 'This unit helps show how environmental limits affect food systems and how technology may reduce those limits without removing them completely.',
    stages: {
      2025: 'Food security relies mainly on imported supply chains, with emerging local agri-tech experiments.',
      2030: 'Food technology scales up and becomes a clearer part of resilience planning.',
      2040: 'Controlled-environment agriculture supports a larger share of selected produce.',
      2050: 'Agri-tech improves resilience significantly, but imports are still necessary because of environmental constraints.'
    }
  },
  {
    id: 6,
    tag: 'Unit 6',
    title: 'Cities and Urban Land Use',
    current: 'Dubai is defined by rapid urban growth, large-scale infrastructure, and highly planned development.',
    future: 'By 2050, the city is likely to be denser, greener, more connected, and more polycentric, with smart mobility playing a bigger role in how land is used.',
    why: 'This unit explains how people shape urban space and how cities respond to growth pressures.',
    stages: {
      2025: 'The city already shows large-scale development and major infrastructure expansion.',
      2030: 'Smart systems improve mobility and make urban services more efficient.',
      2040: 'Multiple urban centers and green corridors reduce pressure on the main core.',
      2050: 'Urban land use becomes more mixed, more data-driven, and more sustainability-focused.'
    }
  },
  {
    id: 7,
    tag: 'Unit 7',
    title: 'Industrial and Economic Development',
    current: 'Dubai has already diversified far beyond oil into tourism, trade, logistics, finance, aviation, real estate, and technology.',
    future: 'By 2050, knowledge industries, advanced services, clean energy, and innovation are likely to dominate even more strongly, while automation changes the labor market.',
    why: 'This unit connects development to employment, sector change, and economic strategy.',
    stages: {
      2025: 'The economy is already diversified, but major future growth depends on services and innovation.',
      2030: 'Tech, tourism, logistics, and finance gain more strategic importance.',
      2040: 'A more mature, diversified economy relies on highly connected infrastructure and skilled labor.',
      2050: 'Economic growth is increasingly linked to knowledge, digital systems, and sustainable technologies.'
    }
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
  const milestone = closestMilestone(year);
  return String(milestone);
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
}

function updateForecast(year) {
  const milestone = closestMilestone(year);
  const stage = stageFromYear(year);
  const milestoneData = milestones[milestone];

  selectedYear.textContent = year;
  yearLabel.textContent = milestoneData.label;
  yearSummary.textContent = milestoneData.summary;
  keyChanges.innerHTML = milestoneData.changes.map(item => `<li>${item}</li>`).join('');
  cityScene.dataset.stage = stage;

  yearChips.forEach(chip => chip.classList.toggle('active', Number(chip.dataset.year) === milestone));

  renderMetrics(year);
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
