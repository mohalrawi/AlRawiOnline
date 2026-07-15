const LINKS = {
  email: "mailto:moh.raid@yahoo.com",
  linkedin: "https://www.linkedin.com/in/al-rawi/",
  github: "https://github.com/mohalrawi",
  resume: "./src/assets/Mohammed_Al-Rawi_Resume.pdf",
};

const originalAgentMessages = [
  { id: "intro", section: "intro", text: "Hey, welcome in. Give me a moment and I’ll walk you through this properly." },
  { id: "intro-outcome", section: "intro", text: "The short version: Mohammed turns messy product problems into systems that teams can actually ship." },
  { id: "tour-start", section: "hero", text: "I’ll keep this moving like a quick portfolio walkthrough. First, the positioning.", scrollTarget: "hero", highlightTarget: "hero" },
  { id: "hero", section: "hero", text: "This opening is the thesis: ambiguity goes in, structure comes out, and the work has to ship.", scrollTarget: "hero", highlightTarget: "hero" },
  { id: "hero-context", section: "hero", text: "His lane sits between stakeholder workflows, technical teams, AI prototypes, and product execution.", highlightTarget: "hero" },
  { id: "metrics", section: "metrics", text: "Now the proof. These numbers are here so the page is not just saying he is strategic.", scrollTarget: "metrics", highlightTarget: "metrics" },
  { id: "metrics-proof", section: "metrics", text: "Global usage grew from eleven thousand to fourteen thousand cases, with regulated releases across FDA, EU MDR, and APAC paths.", highlightTarget: "metrics" },
  { id: "case-study", section: "case-study", text: "This is the anchor story: Zimmer Biomet surgical planning software.", scrollTarget: "case-study", highlightTarget: "case-study" },
  { id: "case-workflow", section: "case-study", text: "The important part is not just the interface. Surgeons needed a dependable planning workflow across different anatomy and markets.", highlightTarget: "case-study" },
  { id: "case-requirements", section: "case-study", text: "Mohammed’s role was to turn that complexity into clear requirements, align the right teams, and keep execution moving.", highlightTarget: "case-study" },
  { id: "case-impact", section: "case-study", text: "That turned into a Special 510(k) clearance in under four months, with zero FDA questions. That is the signal.", highlightTarget: "case-study" },
  { id: "projects", section: "projects", text: "From there, the experiments show range. These are smaller products, but they still follow the same pattern.", scrollTarget: "projects", highlightTarget: "projects" },
  { id: "retroai", section: "projects", text: "RetroAI structures team feedback instead of letting retrospectives become another meeting people forget.", highlightTarget: "projects" },
  { id: "valorant", section: "projects", text: "The AI coach explores real-time computer vision, turning gameplay moments into useful feedback.", highlightTarget: "projects" },
  { id: "project-wrap", section: "projects", text: "The common thread is product judgment: take a fuzzy idea, shape it, test it, and make it usable.", highlightTarget: "projects" },
  { id: "thinking", section: "thinking", text: "This section explains how he works when the problem is still unclear.", scrollTarget: "thinking", highlightTarget: "thinking" },
  { id: "thinking-flow", section: "thinking", text: "Understand the real problem, create structure, align the team, then ship and learn from what happens.", highlightTarget: "thinking" },
  { id: "quote", section: "thinking", text: "That quote sums it up well: strong products reduce uncertainty and help people make better decisions.", highlightTarget: "thinking" },
  { id: "contact", section: "contact", text: "Last stop. If you need someone who can move between product, stakeholder complexity, AI, and delivery, this is the invitation.", scrollTarget: "contact", highlightTarget: "contact" },
  { id: "closing", section: "contact", text: "Mohammed is open to product opportunities where the work is complex, useful, and worth shipping well.", highlightTarget: "contact" },
];

const agentMessages = [
  { id: "intro", section: "intro", text: "Welcome in." },
  { id: "intro-outcome", section: "intro", text: "Let's start the tour" },
  { id: "tour-start", section: "hero", text: "Welcome, I'll keep this quick and I'll show you what Mohammed has been building", scrollTarget: "hero", highlightTarget: "hero" },
  { id: "hero", section: "hero", text: "Mohammed takes messy problems and helps teams ship real outcomes.", scrollTarget: "hero", highlightTarget: "hero" },
  { id: "hero-context", section: "hero", text: "Working in the space between stakeholders, clients, technical teams, AI prototypes, and product execution.", highlightTarget: "hero" },
  { id: "metrics", section: "metrics", text: "Here are a few proof points.", scrollTarget: "metrics", highlightTarget: "metrics" },
  { id: "metrics-usage", section: "metrics", text: "Global usage grew from 11k to 14k cases, since 2022.", highlightTarget: "metrics" },
  { id: "metrics-510k", section: "metrics", text: " Special 510k cleared with the FDA in under four months.", highlightTarget: "metrics" },
  { id: "metrics-global", section: "metrics", text: "with Mohammed involved in over 5 global releases across FDA, EU MDR, and APAC markets.", highlightTarget: "metrics" },
  { id: "case-study", section: "case-study", text: "This is the main product Mohammed works on.", scrollTarget: "case-study", highlightTarget: "case-study" },
  { id: "case-workflow", section: "case-study", text: "The product helps surgeons and planning teams move through complex shoulder cases with more confidence and clarity.", highlightTarget: "case-study" },
  { id: "case-requirements", section: "case-study", text: "Mohammed's role was to make the messy parts buildable.", highlightTarget: "case-study" },
  { id: "case-impact", section: "case-study", text: "The result was was regulated product releases that moved through testing, validation, and real-world use.", highlightTarget: "case-study" },
  { id: "projects", section: "projects", text: "Now let's look at the side projects.", scrollTarget: "projects", highlightTarget: "projects" },
  { id: "retroai", section: "projects", text: "Team retrospectives can get repetitive, so he built a better way to prepare the retros with RetroAI.", highlightTarget: "projects" },
  { id: "valorant", section: "projects", text: "The AI coach analyzes gameplay and turns it into real-time voice-based feedback.", highlightTarget: "projects" },
  { id: "project-wrap", section: "projects", text: "If you are looking for fun, try out the impossible typing game Demon Keying", highlightTarget: "projects" },
  { id: "thinking", section: "thinking", text: "This part looks at the process of how Mohammed approaches problems before the answer is obvious.", scrollTarget: "thinking", highlightTarget: "thinking" },
  { id: "thinking-flow", section: "thinking", text: "He starts by understanding the real workflow, then creates structure and aligns the right people.", highlightTarget: "thinking" },
  { id: "quote", section: "thinking", text: "The best products reduce uncertainty and guide decisions.", highlightTarget: "thinking" },
  { id: "contact", section: "contact", text: "That brings us to the end. The best fit is a team building complex products where clarity, execution, and good judgment matter.", scrollTarget: "contact", highlightTarget: "contact" },
  { id: "closing", section: "contact", text: "Mohammed is open to product opportunities in AI, workflow automation, and complex B2B software. Thanks for taking the tour." },
];

const messageById = Object.fromEntries(agentMessages.map((message) => [message.id, message]));

const sections = [
  ["hero", "Signal", "hero"],
  ["metrics", "Proof", "metrics"],
  ["case-study", "Case", "case-study"],
  ["projects", "Projects", "projects"],
  ["thinking", "Thinking", "thinking"],
  ["contact", "Contact", "contact"],
];

const icon = {
  play: `<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
  down: `<svg viewBox="0 0 24 24"><path d="M12 5v14m7-7-7 7-7-7"/></svg>`,
  replay: `<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg>`,
  download: `<svg viewBox="0 0 24 24"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 3-10 7L2 7"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3 19c.5.1.7-.2.7-.5v-2c-3 .7-3.7-1.2-3.7-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10 10 0 0 1 5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.1-2.6 5-5 5.3.4.3.8 1 .8 2v3c0 .3.2.6.8.5A10 10 0 0 0 12 2Z"/></svg>`,
  spark: `<svg viewBox="0 0 24 24"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 11 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM4 14l.8 2.2L7 17l-2.2.8L4 20l-.8-2.2L1 17l2.2-.8L4 14Z"/></svg>`,
  pause: `<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>`,
  volume: `<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4Zm13.5-1.5a5 5 0 0 1 0 9M20 5a9 9 0 0 1 0 14"/></svg>`,
  unmute: `<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4Zm13.5-1.5a5 5 0 0 1 0 9M20 5a9 9 0 0 1 0 14M3 3l18 18"/></svg>`,
  x: `<svg viewBox="0 0 24 24"><path d="m18 6-12 12M6 6l12 12"/></svg>`,
  chart: `<svg viewBox="0 0 24 24"><path d="M4 19V5m0 14h16M8 15l3-4 3 2 4-6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>`,
  globe: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
  node: `<svg viewBox="0 0 24 24"><circle cx="6" cy="7" r="3"/><circle cx="17" cy="6" r="3"/><circle cx="15" cy="17" r="3"/><path d="m8.6 8.3 3.8 6.2M9 6.8l5-.5"/></svg>`,
};

const hasSeenIntro = localStorage.getItem("mohammed-portfolio-intro-seen") === "yes";

document.getElementById("root").innerHTML = `
  ${intro(hasSeenIntro)}
  ${guide()}
  <main>
    ${siteHeader()}
    ${hero()}
    ${metrics()}
    ${caseStudy()}
    ${projects()}
    ${thinking()}
    ${contact()}
  </main>
`;
document.body.classList.toggle("has-intro", Boolean(document.querySelector(".intro")));

function siteHeader() {
  return `
    <header class="site-header">
      <a class="mark" href="#hero" aria-label="Mohammed Al-Rawi home">MA</a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="#hero"><span>01</span> About</a>
        <a href="#case-study"><span>02</span> Work</a>
        <a href="#projects"><span>03</span> Experiments</a>
        <a href="#thinking"><span>04</span> Thinking</a>
        <a href="#contact"><span>05</span> Connect</a>
      </nav>
      <a class="resume-link" href="${LINKS.resume}" download>Download resume ${icon.arrow}</a>
    </header>
  `;
}

function intro(isReturning = false) {
  return `
    <section class="intro ${isReturning ? "intro--returning" : ""}" aria-label="Intro sequence">
      <div class="intro__grain"></div>
      <div class="intro__door" aria-hidden="true">
        <div class="intro__panel intro__panel--left"></div>
        <div class="intro__panel intro__panel--right"></div>
        <div class="intro__beam"></div>
        <div class="intro__threshold"></div>
      </div>
      <div class="intro__particles" aria-hidden="true">${Array.from({ length: 52 }, (_, i) => `<span style="--i:${i}"></span>`).join("")}</div>
      <p class="intro__kicker">${isReturning ? "Welcome back" : "Guided product narrative"}</p>
      <div class="intelligence-form" aria-hidden="true"><div class="prism"></div><div class="prism-ring"></div></div>
      <div class="intro__content">
        <h1>Let's turn ambiguity into structure.</h1>
        <p data-intro-message aria-live="polite">I'll show you how Mohammed turns unclear problems into shipped product outcomes.</p>
        <div class="intro__actions">
          <button class="button button--primary" data-begin>${icon.play} Begin guided tour</button>
          <button class="button button--secondary" data-intro-mute aria-label="Mute intro narration">${icon.pause} Mute</button>
          <button class="button button--ghost" data-skip>Skip intro</button>
        </div>
      </div>
    </section>
  `;
}

function guide() {
  return `
    <aside class="guide" aria-label="Guided tour assistant">
      <div class="guide__orb" aria-hidden="true"></div>
      <div class="guide__body">
        <p data-guide-message aria-live="polite">I'll guide you through Mohammed's work: shipped healthcare products, AI prototypes, and the systems thinking behind them.</p>
        <div class="guide__wave" aria-hidden="true"><span></span><span></span><span></span></div>
      </div>
      <div class="guide__controls">
        <button class="guide__button" data-tour title="Start guided tour" aria-label="Start guided tour">${icon.spark}<span>Guide me</span></button>
        <button class="guide__button" data-voice title="Enable voice narration" aria-label="Enable voice narration">${icon.play}<span>Enable voice</span></button>
        <button class="guide__button" data-mute title="Mute voice narration" aria-label="Mute voice narration" hidden>${icon.volume}<span>Mute</span></button>
        <button class="guide__button" data-stop-tour title="Stop guided tour" aria-label="Stop guided tour" hidden>${icon.x}<span>Stop tour</span></button>
        <button class="guide__button guide__button--quiet" data-replay-intro title="Replay intro" aria-label="Replay intro">${icon.replay}<span>Replay intro</span></button>
      </div>
    </aside>
  `;
}

function hero() {
  return `
    <section id="hero" class="section hero">
      <div class="hero__ambient"></div>
      <div class="container hero__grid">
        <div class="hero__copy reveal">
          <p class="eyebrow">Product-minded Systems Architect</p>
          <h1>Turning ambiguity into systems that <span>ship.</span></h1>
          <p class="hero__lead">I turn ambiguous stakeholder, technical, and user problems into clear requirements, shipped features, and measurable product outcomes.</p>
          <div class="hero__actions">
            <a class="button button--primary" href="${LINKS.github}" target="_blank" rel="noreferrer">GitHub ${icon.github}</a>
            <a class="button button--secondary" href="${LINKS.linkedin}">LinkedIn ${icon.linkedin}</a>
            <a class="button button--secondary" href="${LINKS.email}">Email me ${icon.mail}</a>
          </div>
        </div>
        ${ambiguityVisual()}
      </div>
    </section>
  `;
}

function ambiguityVisual() {
  return `
    <div class="hero-visual reveal" aria-label="Abstract ambiguity to structure to impact visual">
      <div class="signal-cloud" aria-hidden="true">${Array.from({ length: 80 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
      <svg class="signal-lines" viewBox="0 0 760 360" aria-hidden="true">
        <path d="M18 165 C95 88, 160 250, 250 158 S390 80, 474 162 622 194 742 98"></path>
        <path d="M30 205 C108 150, 178 170, 260 198 S412 292, 502 174 624 116 746 160"></path>
        <path d="M4 124 C102 170, 158 70, 248 112 S390 214, 484 138 628 112 756 132"></path>
      </svg>
      <div class="portals" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="impact-beam" aria-hidden="true"></div>
      <div class="visual-labels" aria-hidden="true">
        <div><strong>01</strong><span>Ambiguity</span></div>
        <div><strong>02</strong><span>Structure</span></div>
        <div><strong>03</strong><span>Impact</span></div>
      </div>
    </div>
  `;
}

function metrics() {
  const items = [
    [icon.chart, "11k &rarr; 14k", "cases supported globally since 2022"],
    [icon.clock, "&lt; 4 months", "Special 510(k) cleared with zero FDA questions"],
    [icon.globe, "5+ Global", "FDA, EU MDR, APAC releases"],
  ];
  return `
    <section id="metrics" class="metrics">
      <div class="container metrics__grid">
        ${items.map(([symbol, stat, copy], index) => `
          <article class="metric" data-agent-anchor="${["metrics-usage", "metrics-510k", "metrics-global"][index]}">
            <div class="metric__icon">${symbol}</div>
            <div><strong>${stat}</strong><span>${copy}</span></div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function caseStudy() {
  const blocks = [
    ["Problem", "Surgeons needed a reliable, accurate, and efficient planning workflow across different patient anatomy and global markets."],
    ["Role", "Systems Architect and cross-functional Product Lead acting as Product Owner proxy."],
    ["Approach", "Defined stakeholder workflows and product requirements, aligned engineering, quality, regulatory, and stakeholder teams, and led execution across multiple release paths."],
    ["Outcome", "Special 510(k) cleared in under 4 months with zero FDA questions."],
    ["Impact", "Scaled usage from 11k to 14k cases worldwide since 2023 and improved planning confidence and operational clarity."],
  ];

  return `
    <section id="case-study" class="section case">
      <div class="case__frame">
        <div class="case__intro">
          <p class="eyebrow"><span>02</span> Featured work</p>
          <h2>Zimmer Biomet Surgical Planning Software</h2>
          <p>Stakeholder workflow software used by surgeons and planning teams globally to plan shoulder procedures with confidence.</p>
          <a href="https://www.zimmerbiomet.com/en/products-and-solutions/specialties/shoulder/signature-one-surgical-planning.html" class="text-link" target="_blank" rel="noreferrer">View case study ${icon.arrow}</a>
        </div>
        ${medicalMockup()}
        <div class="case__content">
          ${blocks.map(([title, copy], index) => `
            <article data-agent-message="${index < 2 ? "case-workflow" : index < 4 ? "case-requirements" : "case-impact"}">
              <div class="case__glyph">${icon.node}</div>
              <div><h3>${title}</h3><p>${copy}</p></div>
            </article>
          `).join("")}
        </div>
        <div class="case__meta">
          <span><b>Global releases</b> FDA &middot; EU MDR &middot; APAC</span>
          <span><b>Team</b> Eng, QA/RA, Stakeholder, Marketing, DS</span>
          <span><b>My focus</b> Workflows, Requirements, Validation, Releases</span>
          <span><b>Timeline</b> 2022 &ndash; Present</span>
        </div>
      </div>
    </section>
  `;
}

function medicalMockup() {
  return `
    <figure class="medical-figure">
      <div class="medical-ui" aria-label="Stylized shoulder surgical planning interface">
        <div class="medical-ui__top">
          <div><strong>Implant system</strong></div>
          <div><strong>Stem</strong></div>
          <div><strong>Head</strong></div>
          <div><strong>Orientation</strong></div>
        </div>
        <div class="medical-ui__tools medical-ui__tools--left">
          <span>Show</span><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="medical-ui__tools medical-ui__tools--right">
          <span>Tool</span><i></i><i></i><i></i>
        </div>
        <div class="medical-ui__stage">
          <div class="planning-wire planning-wire--white"></div>
          <div class="planning-wire planning-wire--green"></div>
          <div class="planning-wire planning-wire--axis"></div>
          <div class="planning-wire planning-wire--red"></div>
          <div class="bone scapula"></div>
          <div class="bone humerus"></div>
          <div class="implant implant--cap"></div>
        </div>
        <div class="medical-ui__measure medical-ui__measure--angle"><span>Implant inclination</span><strong>135.0&deg;</strong></div>
        <div class="medical-ui__measure medical-ui__measure--offset"><span>Version offset</span><strong>0.0&deg;</strong></div>
        <div class="medical-ui__view"><span>LAT</span><span>MED</span><span>POST</span><span>ANT</span><span>SUP</span><span>INF</span></div>
        <div class="medical-ui__zoom"><i></i><i></i></div>
      </div>
      <figcaption>Mockup Image Only</figcaption>
    </figure>
  `;
}

function projects() {
  const list = [
    {
      kicker: "Workflow",
      name: "RetroAI",
      desc: "AI-powered retrospective tool for Scrum Masters and agile teams.",
      image: "./src/assets/retro-ai.png",
      messageId: "retroai",
      cta: "Open Product",
      href: "https://retroai-kappa.vercel.app/",
    },
    {
      kicker: "AI / Computer Vision",
      name: "Valorant AI Coach",
      desc: "Real-time computer vision coach that analyzes crosshair placement and gives targeted feedback.",
      image: "./src/assets/valorant-ai.png",
      messageId: "valorant",
    },
    {
      kicker: "Product / Gaming",
      name: "Demon Keying",
      desc: "Impossible typing game with multiple modes and global leaderboards.",
      image: "./src/assets/demon-keying.png",
      messageId: "keyboard",
      cta: "Launch Game",
      href: "https://www.demonkeying.com/",
    },
  ];

  return `
    <section id="projects" class="section projects">
      <div class="container projects__grid">
        <div class="projects__intro">
          <p class="eyebrow"><span>03</span> Experiments</p>
          <h2>Ideas into impact.</h2>
          <p>A collection of products and prototypes where I explore, build, and learn in public.</p>
          <a class="text-link" href="${LINKS.github}" target="_blank" rel="noreferrer">View all projects ${icon.arrow}</a>
        </div>
        ${list.map((project) => `
          <article class="project-card" data-agent-message="${project.messageId}">
            <div class="project-card__image">
              <img src="${project.image}" alt="${project.name} product screenshot" loading="lazy" />
            </div>
            <p class="project-card__kicker">${project.kicker}</p>
            <h3>${project.name}</h3>
            <p>${project.desc}</p>
            ${project.href ? `<a href="${project.href}" target="_blank" rel="noreferrer">${project.cta} ${icon.arrow}</a>` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function thinking() {
  const steps = [
    ["Understand the real problem", "I dig deep to uncover the true user, stakeholder, and business needs."],
    ["Structure clarity from chaos", "I translate ambiguity into requirements, flows, and clear decisions."],
    ["Align and build with the right team", "I collaborate across functions to build the right thing."],
    ["Ship and learn relentlessly", "I measure impact, learn fast, and continuously improve."],
  ];

  return `
    <section id="thinking" class="section thinking">
      <div class="container thinking__layout">
        <div class="thinking__heading">
          <p class="eyebrow"><span>04</span> How I think</p>
          <h2>Products are systems that <em>serve people.</em></h2>
        </div>
        <div class="framework">
          ${steps.map(([title, copy], index) => `
            <article>
              <div class="step-icon">${icon.node}</div>
              <div class="step-line"></div>
              <h3>${title}</h3>
              <p>${copy}</p>
            </article>
          `).join("")}
        </div>
        <blockquote data-agent-message="quote">"The best products reduce uncertainty and guide decisions."</blockquote>
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section id="contact" class="section contact">
      <div class="contact__earth" aria-hidden="true"></div>
      <div class="container contact__content">
        <p class="eyebrow"><span>05</span> Let's build something meaningful</p>
        <h2>Open to product opportunities where I can create <span>real impact.</span></h2>
        <div class="hero__actions">
          <a class="button button--primary" href="${LINKS.email}">Email me ${icon.mail}</a>
          <a class="button button--secondary" href="${LINKS.linkedin}">LinkedIn ${icon.linkedin}</a>
          <a class="button button--secondary" href="${LINKS.github}">GitHub ${icon.github}</a>
          <a class="button button--secondary" href="${LINKS.resume}" download>Download resume ${icon.download}</a>
        </div>
        <p class="location" data-agent-message="closing">AI &middot; Workflow automation &middot; Product roles</p>
      </div>
      <footer class="footer">
        <span class="mark">MA</span>
        <span>Curiosity drives me. Impact defines me.</span>
        <span>&copy; 2026 Mohammed Al-Rawi</span>
      </footer>
    </section>
  `;
}

let tourActive = false;
let tourTimer = null;
let tourStepIndex = 0;
let tourRunId = 0;
let tourPaused = false;
let tourAwaitingAdvance = false;
let tourStepToken = 0;
let tourStepInProgress = false;
let tourInterruptedStep = false;
let tourAutoScrolling = false;
let tourAutoScrollTimer = null;
let voiceEnabled = false;
let muted = false;
let isSpeaking = false;
let selectedVoice = null;
let speechUnlocked = false;
let captionTimer = null;
let speechFallbackTimer = null;
let activeCaption = null;
let activeSpeech = null;
let mutedVisualResume = null;
let lastMessageId = "";
let lastSpokenSection = "";
let guidePaused = false;
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const synth = "speechSynthesis" in window ? window.speechSynthesis : null;
const guidePositions = {
  intro: "is-at-home",
  hero: "is-at-hero",
  metrics: "is-at-metrics",
  "case-study": "is-at-case",
  projects: "is-at-projects",
  thinking: "is-at-thinking",
  contact: "is-at-contact",
};
const guideMessagePositions = {
  "tour-start": "is-at-hero",
  hero: "is-at-hero",
  "hero-context": "is-at-hero-context",
  metrics: "is-at-metric-overview",
  "metrics-usage": "is-at-metric-usage",
  "metrics-510k": "is-at-metric-510k",
  "metrics-global": "is-at-metric-global",
  "case-study": "is-at-case-title",
  "case-workflow": "is-at-case-workflow",
  "case-requirements": "is-at-case-requirements",
  "case-impact": "is-at-case-impact",
  projects: "is-at-projects",
  retroai: "is-at-project-retro",
  valorant: "is-at-project-valorant",
  "project-wrap": "is-at-project-wrap",
  thinking: "is-at-thinking",
  "thinking-flow": "is-at-thinking-flow",
  quote: "is-at-thinking-quote",
  contact: "is-at-contact",
  closing: "is-at-contact",
};
const guideAnchors = {
  "hero-context": { selector: ".hero-visual", x: .78, y: .18, offsetX: 18, offsetY: -70 },
  metrics: { selector: "#metrics", x: .92, y: .92, offsetX: -88, offsetY: 18 },
  "metrics-usage": { selector: '[data-agent-anchor="metrics-usage"]', x: 0, y: .25, offsetX: -190, offsetY: 0 },
  "metrics-510k": { selector: '[data-agent-anchor="metrics-510k"]', x: .5, y: 1, offsetX: -88, offsetY: 20 },
  "metrics-global": { selector: '[data-agent-anchor="metrics-global"]', x: 1, y: .25, offsetX: 36, offsetY: 0 },
  "case-study": { selector: ".case__frame", x: 0, y: .2, offsetX: -196, offsetY: -28 },
  "case-workflow": { selector: ".case__frame", x: 1, y: .2, offsetX: 32, offsetY: -28 },
  "case-requirements": { selector: ".case__frame", x: 0, y: .52, offsetX: -196, offsetY: -28 },
  "case-impact": { selector: ".case__frame", x: 1, y: .62, offsetX: 32, offsetY: -28 },
  projects: { selector: ".projects__intro", x: 0, y: .36, offsetX: -260, offsetY: -10 },
  retroai: { selector: '[data-agent-message="retroai"]', x: 1, y: 1, offsetX: -210, offsetY: -128 },
  valorant: { selector: '[data-agent-message="valorant"]', x: 1, y: 1, offsetX: -210, offsetY: -128 },
  "project-wrap": { selector: "#projects .project-card:last-child", x: 1, y: 1, offsetX: -210, offsetY: -128 },
  thinking: { selector: ".thinking__layout", x: 0, y: .42, offsetX: -210, offsetY: -18 },
  "thinking-flow": { selector: ".framework", x: .5, y: 1, offsetX: -115, offsetY: 26 },
  quote: { selector: ".thinking__layout", x: 1, y: .42, offsetX: 44, offsetY: -18 },
  contact: { selector: ".contact__content", x: .9, y: .42, offsetX: -112, offsetY: -34 },
  closing: { selector: ".location", x: .92, y: .5, offsetX: -116, offsetY: -34 },
};
const tourSequence = [
  "tour-start",
  "hero",
  "hero-context",
  "metrics",
  "metrics-usage",
  "metrics-510k",
  "metrics-global",
  "case-study",
  "case-workflow",
  "case-requirements",
  "case-impact",
  "projects",
  "retroai",
  "valorant",
  "project-wrap",
  "thinking",
  "thinking-flow",
  "quote",
  "contact",
  "closing",
];

function closeIntro(startTour) {
  cancelSpeech();
  document.querySelector(".intro")?.remove();
  document.body.classList.remove("has-intro");
  localStorage.setItem("mohammed-portfolio-intro-seen", "yes");
  showGuide();
  if (startTour) {
    voiceEnabled = Boolean(synth);
    muted = false;
    unlockSpeechForGesture();
    window.setTimeout(startTourMode, 420);
  } else {
    voiceEnabled = false;
    muted = false;
    guidePaused = true;
    resetGuideIdle();
  }
  updateAgentControls();
}

function showGuide() {
  document.querySelector(".guide")?.removeAttribute("hidden");
}

function hideGuide() {
  cancelSpeech();
  window.clearInterval(captionTimer);
  activeCaption = null;
  document.querySelector(".guide")?.setAttribute("hidden", "");
}

function resetGuideIdle() {
  window.clearTimeout(tourTimer);
  window.clearTimeout(speechFallbackTimer);
  activeCaption = null;
  mutedVisualResume = null;
  lastMessageId = "";
  lastSpokenSection = "";
  spotlight(null);
  setActivePill("");
  moveGuide("intro");
  document.querySelector(".guide")?.classList.add("is-idle");
  const textNode = document.querySelector("[data-guide-message]");
  if (textNode) {
    textNode.textContent = "";
    textNode.classList.remove("is-typing");
  }
}

function replayIntro() {
  stopTourMode();
  cancelSpeech();
  localStorage.removeItem("mohammed-portfolio-intro-seen");
  document.querySelector(".intro")?.remove();
  document.body.insertAdjacentHTML("afterbegin", intro(false));
  document.body.classList.add("has-intro");
  startIntroNarration();
}

function pickVoice() {
  if (!synth) return null;
  const voices = synth.getVoices();
  const englishVoices = voices.filter((voice) => /^en[-_]/i.test(voice.lang));
  selectedVoice =
    englishVoices.find((voice) => /natural|online|premium|neural/i.test(voice.name)) ||
    englishVoices.find((voice) => /aria|jenny|guy|ava|samantha|daniel|google/i.test(voice.name)) ||
    englishVoices.find((voice) => /female|male/i.test(voice.name)) ||
    englishVoices[0] ||
    voices[0] ||
    null;
  return selectedVoice;
}

function voiceSettings() {
  return { rate: 0.9, pitch: 0.88, volume: 0.86 };
}

function applyVoiceSettings(utterance) {
  const settings = voiceSettings();
  utterance.voice = pickVoice();
  utterance.rate = settings.rate;
  utterance.pitch = settings.pitch;
  utterance.volume = settings.volume;
}

function unlockSpeechForGesture() {
  if (!synth || speechUnlocked) return;
  try {
    const utterance = new SpeechSynthesisUtterance("ready");
    utterance.volume = 0;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.voice = pickVoice();
    synth.speak(utterance);
    speechUnlocked = true;
  } catch {
    speechUnlocked = false;
  }
}

function cancelSpeech() {
  window.clearTimeout(speechFallbackTimer);
  mutedVisualResume = null;
  activeSpeech = null;
  if (synth) {
    if (synth.paused) synth.resume();
    synth.cancel();
  }
  isSpeaking = false;
  document.querySelector(".guide")?.classList.remove("is-speaking");
}

function waitForReadableDuration(duration) {
  if (!duration) return Promise.resolve();
  return new Promise((resolve) => {
    let elapsed = 0;
    let lastTick = Date.now();
    let readableTimer = null;
    const tick = () => {
      const now = Date.now();
      if (!tourPaused) elapsed += now - lastTick;
      lastTick = now;
      if (elapsed >= duration) {
        resolve();
        return;
      }
      readableTimer = window.setTimeout(tick, Math.min(250, duration - elapsed));
    };
    tick();
  });
}

function estimateMessageDuration(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const sentenceCount = Math.max(1, (text.match(/[.!?]/g) || []).length);
  return Math.max(2800, Math.min(18000, words * 330 + sentenceCount * 650 + 900));
}

function scrollToMessageTarget(message) {
  if (!message?.scrollTarget) return Promise.resolve();
  const target = document.getElementById(message.scrollTarget);
  if (!target) return Promise.resolve();

  window.clearTimeout(tourAutoScrollTimer);
  tourAutoScrolling = true;
  if (message.scrollTarget === "metrics") {
    const y = target.getBoundingClientRect().top + window.scrollY - Math.min(180, window.innerHeight * 0.22);
    window.scrollTo({
      top: Math.max(0, y),
      behavior: prefersReduced ? "auto" : "smooth",
    });
  } else {
    target.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  }
  return new Promise((resolve) => {
    window.setTimeout(() => {
      positionGuideAtAnchor(message.id);
      tourAutoScrollTimer = window.setTimeout(() => {
        tourAutoScrolling = false;
      }, prefersReduced ? 0 : 260);
      resolve();
    }, prefersReduced ? 0 : 680);
  });
}

function updateHeaderVisibility() {
  document.querySelector(".site-header")?.classList.toggle("is-hidden", window.scrollY > 110);
  if (lastMessageId) window.requestAnimationFrame(() => positionGuideAtAnchor(lastMessageId));
}

function pauseTourForManualScroll() {
  if (!tourActive || tourPaused || document.querySelector(".intro")) return;
  pauseTourMode();
}

function handleWindowScroll() {
  updateHeaderVisibility();
  if (!tourAutoScrolling) pauseTourForManualScroll();
}

function handleManualScrollIntent(event) {
  const scrollKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];
  if (event?.type === "keydown" && !scrollKeys.includes(event.key)) return;
  pauseTourForManualScroll();
}

function speakAgentMessage(message, options = {}) {
  const fallbackDuration = estimateMessageDuration(message?.text || "");
  if (!message) return;
  const shouldSpeak = (voiceEnabled || options.forceVoice) && !muted && synth;
  if (shouldSpeak) cancelSpeech();
  setGuideText(message, { autoAdvance: true, duration: fallbackDuration, speechSynced: shouldSpeak });
  if (!shouldSpeak) {
    updateAgentControls();
    return options.waitForText ? waitForReadableDuration(fallbackDuration) : Promise.resolve();
  }

  return new Promise((resolve) => {
    let settled = false;
    let speechStarted = false;
    let mutedFallbackStarted = false;
    const finishMutedSpeechVisually = () => {
      if (mutedFallbackStarted) return;
      mutedFallbackStarted = true;
      isSpeaking = false;
      document.querySelector(".guide")?.classList.remove("is-speaking");
      const remainingDuration = getCaptionRemainingDuration(fallbackDuration);
      mutedVisualResume = { done };
      startCaptionAutoAdvance(remainingDuration);
      waitForReadableDuration(remainingDuration).then(() => {
        mutedVisualResume = null;
        done();
      });
    };
    const done = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(speechFallbackTimer);
      activeSpeech = null;
      isSpeaking = false;
      document.querySelector(".guide")?.classList.remove("is-speaking");
      updateAgentControls();
      resolve();
    };

    const utterance = new SpeechSynthesisUtterance(message.text);
    applyVoiceSettings(utterance);
    utterance.onstart = () => {
      speechStarted = true;
      activeSpeech = {
        messageId: message.id,
        text: message.text,
        startChar: 0,
        lastChar: 0,
        startedAt: Date.now(),
        duration: fallbackDuration,
      };
      isSpeaking = true;
      document.querySelector(".guide")?.classList.add("is-speaking");
      updateAgentControls();
    };
    utterance.onboundary = (event) => {
      if (event.name && event.name !== "word") return;
      const charIndex = event.charIndex || 0;
      if (activeSpeech) activeSpeech.lastChar = Math.max(activeSpeech.lastChar || 0, charIndex);
      syncCaptionToChar(charIndex, { fromBoundary: true });
    };
    utterance.onend = () => {
      if (muted && speechStarted) {
        finishMutedSpeechVisually();
        return;
      }
      done();
    };
    utterance.onerror = () => {
      if (muted && speechStarted) {
        finishMutedSpeechVisually();
        return;
      }
      if (speechStarted) {
        done();
        return;
      }
      setGuideText(message, { autoAdvance: true, duration: fallbackDuration, speechSynced: false });
      waitForReadableDuration(fallbackDuration).then(done);
    };
    synth.speak(utterance);
    const checkForMissedEnd = () => {
      if (muted || synth.paused || synth.speaking || synth.pending) {
        speechFallbackTimer = window.setTimeout(checkForMissedEnd, 1000);
        return;
      }
      done();
    };
    speechFallbackTimer = window.setTimeout(checkForMissedEnd, fallbackDuration + 4000);
  });
}

function setGuideText(message, options = {}) {
  document.querySelector(".guide")?.classList.remove("is-idle");
  const textNode = document.querySelector("[data-guide-message]");
  if (textNode) animateGuideCaption(textNode, message.text, { ...options, messageId: message.id });
  const introTextNode = document.querySelector("[data-intro-message]");
  if (introTextNode && message.section === "intro") {
    introTextNode.textContent = message.text;
    introTextNode.classList.remove("is-typing");
    window.requestAnimationFrame(() => introTextNode.classList.add("is-typing"));
  }

  lastMessageId = message.id;
  setActivePill(message.section);
  moveGuide(message);
  if (message.highlightTarget) spotlight(message.highlightTarget);
}

function prepareGuideForMessage(message) {
  document.querySelector(".guide")?.classList.remove("is-idle");
  lastMessageId = message.id;
  setActivePill(message.section);
  moveGuide(message);
  if (message.highlightTarget) spotlight(message.highlightTarget);
}

function animateGuideCaption(node, text, options = {}) {
  window.clearInterval(captionTimer);
  activeCaption = null;
  const segments = createCaptionSegments(text);
  if (!segments.length) {
    node.textContent = "";
    return;
  }

  activeCaption = {
    node,
    messageId: options.messageId,
    text,
    segments,
    index: 0,
    captionChar: segments[0].start,
    spokenChar: segments[0].start,
    speechSynced: Boolean(options.speechSynced),
    startedAt: Date.now(),
    segmentShownAt: Date.now(),
    hasBoundary: false,
    autoAdvance: options.autoAdvance !== false,
  };
  node.textContent = segments[0].text;

  if (options.autoAdvance === false) return;

  startCaptionAutoAdvance(options.duration || estimateMessageDuration(text));
}

function getCaptionRemainingDuration(totalDuration) {
  if (!activeCaption?.segments?.length) return totalDuration;
  const textLength = Math.max(1, activeCaption.text?.length || 1);
  const currentChar = getCaptionResumeChar();
  const remainingRatio = Math.max(0.08, 1 - currentChar / textLength);
  return Math.max(650, totalDuration * remainingRatio);
}

function startCaptionAutoAdvance(duration) {
  window.clearInterval(captionTimer);
  if (!activeCaption) return;
  activeCaption.autoAdvance = true;
  const remainingSegments = Math.max(1, activeCaption.segments.length - activeCaption.index);
  const intervalScale = activeCaption.speechSynced ? 1.28 : 1.08;
  const interval = Math.max(680, Math.min(1850, (duration / remainingSegments) * intervalScale));
  captionTimer = window.setInterval(() => {
    if (!activeCaption) return;
    if (tourPaused) return;
    if (activeCaption.speechSynced) {
      if (activeCaption.hasBoundary) return;
      if (!activeSpeech) return;
      const elapsed = Date.now() - (activeSpeech.startedAt || Date.now());
      if (elapsed < 900) return;
      const estimatedChar = estimateSpeechChar();
      if (estimatedChar > getCaptionResumeChar()) syncCaptionToChar(estimatedChar, { fromBoundary: false });
      return;
    }
    const nextIndex = Math.min(activeCaption.index + 1, activeCaption.segments.length - 1);
    showCaptionSegment(nextIndex);
    if (nextIndex >= activeCaption.segments.length - 1) window.clearInterval(captionTimer);
  }, interval);
}

function createCaptionSegments(text) {
  const matches = [...text.matchAll(/\S+/g)];
  const segments = [];
  let words = [];
  let start = 0;
  let length = 0;

  matches.forEach((match) => {
    const word = match[0];
    const wouldBeLong = length + word.length + (words.length ? 1 : 0) > 34;
    const sentenceBreak = words.length >= 2 && /[.!?:]$/.test(words[words.length - 1]);
    if (words.length && (words.length >= 4 || wouldBeLong || sentenceBreak)) {
      segments.push({ text: words.join(" "), start });
      words = [];
      length = 0;
    }
    if (!words.length) start = match.index;
    words.push(word);
    length += word.length + (words.length > 1 ? 1 : 0);
  });

  if (words.length) segments.push({ text: words.join(" "), start });
  return segments;
}

function syncCaptionToChar(charIndex, options = {}) {
  if (!activeCaption) return;
  const safeChar = Math.max(0, Math.min(charIndex, activeCaption.text?.length || charIndex));
  if (options.fromBoundary !== false) activeCaption.hasBoundary = true;
  activeCaption.spokenChar = Math.max(activeCaption.spokenChar || 0, safeChar);
  let nextIndex = activeCaption.index;
  activeCaption.segments.forEach((segment, index) => {
    if (segment.start <= safeChar) nextIndex = index;
  });
  showCaptionSegment(nextIndex, { allowBack: true, updateCaptionChar: false });
}

function showCaptionSegment(index, options = {}) {
  if (!activeCaption || index === activeCaption.index) return;
  if (!options.allowBack && index < activeCaption.index) return;
  activeCaption.index = index;
  activeCaption.segmentShownAt = Date.now();
  if (options.updateCaptionChar !== false) {
    activeCaption.captionChar = Math.max(activeCaption.captionChar || 0, activeCaption.segments[index].start);
  }
  activeCaption.node.textContent = activeCaption.segments[index].text;
}

function getCaptionResumeChar() {
  if (!activeCaption) return 0;
  return activeCaption.hasBoundary ? activeCaption.spokenChar || 0 : activeCaption.captionChar || 0;
}

function estimateSpeechChar() {
  if (!activeSpeech?.text || !activeSpeech.startedAt || !activeSpeech.duration) return 0;
  const elapsed = Math.max(0, Date.now() - activeSpeech.startedAt);
  const progress = Math.max(0, Math.min(0.98, elapsed / activeSpeech.duration));
  const target = activeSpeech.startChar + Math.floor((activeSpeech.text.length - activeSpeech.startChar) * progress);
  return wordResumeStart(activeSpeech.text, target);
}

function capturePauseProgress() {
  if (!activeCaption) return;
  const sameMessage = activeSpeech?.messageId && activeSpeech.messageId === activeCaption.messageId;
  const boundaryChar = sameMessage ? activeSpeech.lastChar || 0 : 0;
  const timedChar = sameMessage ? estimateSpeechChar() : 0;
  const currentChar = Math.max(getCaptionResumeChar(), boundaryChar, timedChar);
  const resumeChar = wordResumeStart(activeCaption.text || "", currentChar);
  activeCaption.spokenChar = Math.max(activeCaption.spokenChar || 0, resumeChar);
  activeCaption.captionChar = Math.max(activeCaption.captionChar || 0, resumeChar);
  activeCaption.hasBoundary = activeCaption.hasBoundary || Boolean(boundaryChar || timedChar);
  syncCaptionToChar(resumeChar, { fromBoundary: false });
}

function wordResumeStart(text, charIndex) {
  let safeChar = Math.max(0, Math.min(charIndex, text.length));
  while (safeChar < text.length && /\s/.test(text[safeChar])) safeChar += 1;
  if (!safeChar || safeChar >= text.length) return safeChar;
  if (/\S/.test(text[safeChar]) && /\S/.test(text[safeChar - 1] || "")) {
    while (safeChar > 0 && /\S/.test(text[safeChar - 1])) safeChar -= 1;
  }
  return safeChar;
}

function speakFromCurrentCaption() {
  if (!synth || !activeCaption?.segments?.length) return false;
  const message = messageById[activeCaption.messageId || lastMessageId];
  if (!message?.text) return false;
  const start = wordResumeStart(message.text, getCaptionResumeChar());
  const text = message.text.slice(start).trim();
  if (!text) return false;
  syncCaptionToChar(start, { fromBoundary: false });

  window.clearTimeout(speechFallbackTimer);

  if (synth.speaking || synth.pending || synth.paused) {
    if (synth.paused) synth.resume();
    synth.cancel();
  }

  return new Promise((resolve) => {
    let catchupSettled = false;
    let catchupTimer = null;
    const finishCatchup = () => {
      if (catchupSettled) return;
      catchupSettled = true;
      window.clearTimeout(catchupTimer);
      activeSpeech = null;
      isSpeaking = false;
      document.querySelector(".guide")?.classList.remove("is-speaking");
      const resume = mutedVisualResume;
      mutedVisualResume = null;
      resume?.done?.();
      updateAgentControls();
      resolve();
    };

    const utterance = new SpeechSynthesisUtterance(text);
    applyVoiceSettings(utterance);
    utterance.onstart = () => {
      activeSpeech = {
        messageId: message.id,
        text: message.text,
        startChar: start,
        lastChar: start,
        startedAt: Date.now(),
        duration: estimateMessageDuration(text),
      };
      isSpeaking = true;
      document.querySelector(".guide")?.classList.add("is-speaking");
      updateAgentControls();
    };
    utterance.onboundary = (event) => {
      if (event.name && event.name !== "word") return;
      const charIndex = start + (event.charIndex || 0);
      if (activeSpeech) activeSpeech.lastChar = Math.max(activeSpeech.lastChar || 0, charIndex);
      syncCaptionToChar(charIndex, { fromBoundary: true });
    };
    utterance.onend = finishCatchup;
    utterance.onerror = finishCatchup;
    isSpeaking = true;
    document.querySelector(".guide")?.classList.add("is-speaking");
    updateAgentControls();
    synth.speak(utterance);
    catchupTimer = window.setTimeout(finishCatchup, estimateMessageDuration(text) + 1200);
  });
}

function enableVoice() {
  unlockSpeechForGesture();
  voiceEnabled = Boolean(synth);
  guidePaused = false;
  muted = false;
  speakAgentMessage(messageById[lastMessageId] || messageById.hero, { forceVoice: true });
  updateAgentControls();
}

function toggleMute() {
  const wasMuted = muted;
  muted = !muted;
  if (muted) {
    if (synth && (synth.speaking || synth.pending)) synth.cancel();
    isSpeaking = false;
    document.querySelector(".guide")?.classList.remove("is-speaking");
  } else {
    voiceEnabled = Boolean(synth);
    guidePaused = false;
    if (wasMuted && (tourActive || tourPaused) && speakFromCurrentCaption()) {
      updateAgentControls();
      return;
    }
    if (!tourActive && !tourPaused && !synth?.speaking && !synth?.pending) {
      const currentMessage = messageById[lastMessageId] || messageById.hero;
      speakAgentMessage(currentMessage, { forceVoice: true });
    }
  }
  updateAgentControls();
}

function startIntroNarration() {
  if (!document.querySelector(".intro")) return;
  voiceEnabled = Boolean(synth);
  muted = false;
  updateAgentControls();
  window.setTimeout(() => {
    speakAgentMessage(messageById.intro, { forceVoice: voiceEnabled && !muted, waitForText: true })
      .then(() => {
        if (!document.querySelector(".intro")) return;
        speakAgentMessage(messageById["intro-outcome"], { forceVoice: voiceEnabled && !muted });
      });
  }, 900);
}

function setActivePill(sectionId) {
  document.querySelectorAll("[data-guide-pill]").forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.guidePill === sectionId);
  });
}

function moveGuide(messageOrSection) {
  const guide = document.querySelector(".guide");
  if (!guide) return;
  const id = typeof messageOrSection === "string" ? "" : messageOrSection?.id;
  const sectionId = typeof messageOrSection === "string" ? messageOrSection : messageOrSection?.section;
  const position = guideMessagePositions[id] || guidePositions[sectionId] || guidePositions.intro;
  [...Object.values(guidePositions), ...Object.values(guideMessagePositions)].forEach((className) => guide.classList.remove(className));
  guide.style.removeProperty("--guide-right");
  guide.style.removeProperty("--guide-bottom");
  guide.classList.remove("is-anchor-flipped");
  guide.classList.add(position);
  if (id) {
    window.requestAnimationFrame(() => positionGuideAtAnchor(id));
  }
}

function positionGuideAtAnchor(messageId) {
  const guide = document.querySelector(".guide");
  const anchor = guideAnchors[messageId];
  if (!guide || !anchor || window.innerWidth <= 820) return;
  const target = document.querySelector(anchor.selector);
  if (!target) return;

  const targetRect = target.getBoundingClientRect();
  const guideRect = guide.getBoundingClientRect();
  const margin = 18;
  const desiredLeft = targetRect.left + targetRect.width * anchor.x + anchor.offsetX;
  const desiredTop = targetRect.top + targetRect.height * anchor.y + anchor.offsetY;
  const left = Math.min(Math.max(margin, desiredLeft), window.innerWidth - guideRect.width - margin);
  const top = Math.min(Math.max(margin, desiredTop), window.innerHeight - guideRect.height - margin);

  guide.style.setProperty("--guide-right", `${Math.max(margin, window.innerWidth - left - guideRect.width)}px`);
  guide.style.setProperty("--guide-bottom", `${Math.max(margin, window.innerHeight - top - guideRect.height)}px`);
  guide.classList.toggle("is-anchor-flipped", Boolean(anchor.flipped));
}

function setActiveSection(id, options = {}) {
  if (document.querySelector(".intro")) return;
  const current = sections.find(([sectionId]) => sectionId === id) || sections[0];
  const message = messageById[current[2]];
  setActivePill(id);
  if (!message) return;
  if (guidePaused && options.speak !== false) return;

  const shouldSpeak = options.speak ?? (!guidePaused && voiceEnabled && !muted && lastSpokenSection !== id);
  speakAgentMessage(message, { forceVoice: shouldSpeak });
  if (shouldSpeak) lastSpokenSection = id;
}

function spotlight(id) {
  document.querySelectorAll(".is-spotlit").forEach((node) => node.classList.remove("is-spotlit"));
  if (id) document.getElementById(id)?.classList.add("is-spotlit");
}

function startTourMode() {
  window.clearTimeout(tourTimer);
  window.clearTimeout(tourAutoScrollTimer);
  guidePaused = false;
  tourActive = true;
  tourPaused = false;
  tourAwaitingAdvance = false;
  tourStepInProgress = false;
  tourInterruptedStep = false;
  tourAutoScrolling = false;
  tourRunId += 1;
  tourStepIndex = 0;
  showGuide();
  moveGuide("hero");
  updateAgentControls();
  runTourStep(tourRunId);
}

function runTourStep(runId) {
  if (!tourActive || tourPaused || runId !== tourRunId) return;
  const message = messageById[tourSequence[tourStepIndex]];
  if (!message) {
    stopTourMode(true);
    return;
  }

  tourAwaitingAdvance = false;
  tourStepInProgress = true;
  const stepToken = ++tourStepToken;
  if (message.scrollTarget) prepareGuideForMessage(message);

  scrollToMessageTarget(message).then(() => {
    if (!tourActive || runId !== tourRunId || stepToken !== tourStepToken) return;
    if (tourPaused) {
      tourStepInProgress = false;
      return;
    }
    const spoken = speakAgentMessage(message, {
      forceVoice: voiceEnabled && !muted,
      waitForText: true,
    });

    Promise.resolve(spoken).then(() => {
      if (!tourActive || runId !== tourRunId || stepToken !== tourStepToken) return;
      tourStepInProgress = false;
      if (tourPaused) {
        tourAwaitingAdvance = true;
        return;
      }
      spotlight(null);
      queueNextTourStep(runId, prefersReduced ? 100 : 300, stepToken);
    });
  });
}

function queueNextTourStep(runId, delay = 300, stepToken = tourStepToken) {
  tourAwaitingAdvance = true;
  window.clearTimeout(tourTimer);
  tourTimer = window.setTimeout(() => {
    if (!tourActive || tourPaused || runId !== tourRunId || stepToken !== tourStepToken) return;
    tourAwaitingAdvance = false;
    tourStepInProgress = false;
    tourStepIndex += 1;
    runTourStep(runId);
  }, delay);
}

function pauseTourMode() {
  window.clearTimeout(tourTimer);
  window.clearInterval(captionTimer);
  capturePauseProgress();
  if (tourStepInProgress || activeCaption?.autoAdvance) {
    tourInterruptedStep = true;
    tourStepInProgress = false;
    tourStepToken += 1;
  }
  guidePaused = true;
  tourPaused = true;
  isSpeaking = false;
  document.querySelector(".guide")?.classList.remove("is-speaking");
  spotlight(null);
  window.clearTimeout(speechFallbackTimer);
  if (synth && (synth.speaking || synth.pending)) {
    if (synth.paused) synth.resume();
    synth.cancel();
  }
  activeSpeech = null;
  updateAgentControls();
}

function resumeTourMode() {
  window.clearTimeout(tourTimer);
  guidePaused = false;
  tourPaused = false;
  tourActive = true;
  showGuide();
  const currentTourMessageId = tourSequence[tourStepIndex];
  const canResumeCaption = activeCaption?.autoAdvance && activeCaption.messageId === currentTourMessageId;
  const captionInProgress = canResumeCaption && activeCaption.index < activeCaption.segments.length - 1;
  if (captionInProgress) {
    startCaptionAutoAdvance(getCaptionRemainingDuration(estimateMessageDuration(messageById[lastMessageId]?.text || "")));
  }
  if (tourAwaitingAdvance) {
    queueNextTourStep(tourRunId, prefersReduced ? 100 : 300, tourStepToken);
  } else if (tourInterruptedStep && canResumeCaption) {
    const resumeToken = ++tourStepToken;
    tourInterruptedStep = false;
    tourStepInProgress = true;
    const resumedSpeech = !muted && voiceEnabled ? speakFromCurrentCaption() : false;
    const remaining = getCaptionRemainingDuration(estimateMessageDuration(messageById[lastMessageId]?.text || ""));
    Promise.resolve(resumedSpeech || waitForReadableDuration(remaining)).then(() => {
      if (!tourActive || tourPaused || resumeToken !== tourStepToken) return;
      tourStepInProgress = false;
      queueNextTourStep(tourRunId, prefersReduced ? 100 : 300, resumeToken);
    });
  } else if (tourInterruptedStep) {
    tourInterruptedStep = false;
    tourStepInProgress = false;
    runTourStep(tourRunId);
  } else if (!captionInProgress && !tourStepInProgress) {
    runTourStep(tourRunId);
  }
  updateAgentControls();
}

function stopTourMode(resetStep = false) {
  window.clearTimeout(tourTimer);
  window.clearTimeout(tourAutoScrollTimer);
  window.clearInterval(captionTimer);
  activeCaption = null;
  guidePaused = true;
  tourAwaitingAdvance = false;
  tourStepInProgress = false;
  tourInterruptedStep = false;
  tourAutoScrolling = false;
  tourStepToken += 1;
  tourRunId += 1;
  tourActive = false;
  tourPaused = false;
  if (resetStep) tourStepIndex = 0;
  spotlight(null);
  cancelSpeech();
  resetGuideIdle();
  updateAgentControls();
}

function updateAgentControls() {
  const tourButton = document.querySelector("[data-tour]");
  const voiceButton = document.querySelector("[data-voice]");
  const muteButton = document.querySelector("[data-mute]");
  const stopButton = document.querySelector("[data-stop-tour]");
  const introMuteButton = document.querySelector("[data-intro-mute]");

  if (tourButton) {
    const tourLabel = tourPaused ? "Resume tour" : tourActive ? "Pause tour" : "Guide me";
    const tourIcon = tourPaused ? icon.play : tourActive ? icon.pause : icon.spark;
    tourButton.innerHTML = `${tourIcon}<span>${tourLabel}</span>`;
    tourButton.setAttribute("aria-label", tourPaused ? "Resume guided tour" : tourActive ? "Pause guided tour" : "Start guided tour");
    tourButton.setAttribute("title", tourPaused ? "Resume guided tour" : tourActive ? "Pause guided tour" : "Start guided tour");
    tourButton.removeAttribute("disabled");
  }

  if (voiceButton) {
    voiceButton.hidden = voiceEnabled || !synth;
  }

  if (muteButton) {
    muteButton.hidden = !voiceEnabled || !synth;
    muteButton.innerHTML = `${muted ? icon.unmute : icon.volume}<span>${muted ? "Unmute" : "Mute"}</span>`;
    muteButton.setAttribute("aria-label", muted ? "Unmute voice narration" : "Mute voice narration");
    muteButton.setAttribute("title", muted ? "Unmute voice narration" : "Mute voice narration");
  }

  if (stopButton) {
    stopButton.hidden = !tourActive && !tourPaused;
  }

  if (introMuteButton) {
    introMuteButton.innerHTML = `${muted ? icon.unmute : icon.pause} ${muted ? "Unmute" : "Mute"}`;
    introMuteButton.setAttribute("aria-label", muted ? "Unmute intro narration" : "Mute intro narration");
  }

  document.querySelector(".guide")?.classList.toggle("is-speaking", isSpeaking);
}

document.addEventListener("click", (event) => {
  const begin = event.target.closest("[data-begin]");
  const skip = event.target.closest("[data-skip]");
  const dismiss = event.target.closest("[data-dismiss]");
  const restore = event.target.closest("[data-restore]");
  const tour = event.target.closest("[data-tour]");
  const voice = event.target.closest("[data-voice]");
  const muteControl = event.target.closest("[data-mute]");
  const introMuteControl = event.target.closest("[data-intro-mute]");
  const stopControl = event.target.closest("[data-stop-tour]");
  const replay = event.target.closest("[data-replay-intro]");

  if (begin) closeIntro(true);
  if (skip) closeIntro(false);
  if (dismiss) hideGuide();
  if (restore) showGuide();
  if (tour) {
    if (tourPaused) {
      resumeTourMode();
    } else if (tourActive) {
      pauseTourMode();
    } else {
      guidePaused = false;
      voiceEnabled = Boolean(synth);
      muted = false;
      unlockSpeechForGesture();
      startTourMode();
    }
  }
  if (voice) enableVoice();
  if (muteControl || introMuteControl) toggleMute();
  if (stopControl) stopTourMode(true);
  if (replay) replayIntro();
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    if (tourActive || document.querySelector(".intro")) return;
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) setActiveSection(visible.target.id);
  },
  { threshold: [0.28, 0.45, 0.65], rootMargin: "-12% 0px -38% 0px" }
);

const detailObserver = new IntersectionObserver(
  (entries) => {
    if (tourActive || guidePaused || document.querySelector(".intro")) return;
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    const messageId = visible?.target?.dataset?.agentMessage;
    if (!messageId || messageId === lastMessageId) return;
    speakAgentMessage(messageById[messageId], { forceVoice: !guidePaused && voiceEnabled && !muted });
  },
  { threshold: 0.72, rootMargin: "-10% 0px -18% 0px" }
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

sections.forEach(([id]) => {
  const node = document.getElementById(id);
  if (node) sectionObserver.observe(node);
});

document.querySelectorAll("[data-agent-message]").forEach((node) => {
  detailObserver.observe(node);
});

document.querySelectorAll(".reveal, .metric, .case__frame, .project-card, .framework article").forEach((node) => {
  revealObserver.observe(node);
});

if (synth) {
  synth.addEventListener?.("voiceschanged", pickVoice);
  pickVoice();
}

window.addEventListener("pagehide", () => {
  window.clearTimeout(tourTimer);
  cancelSpeech();
});

window.addEventListener("scroll", handleWindowScroll, { passive: true });
window.addEventListener("wheel", handleManualScrollIntent, { passive: true });
window.addEventListener("touchmove", handleManualScrollIntent, { passive: true });
window.addEventListener("keydown", handleManualScrollIntent);
window.addEventListener("resize", () => {
  if (lastMessageId) positionGuideAtAnchor(lastMessageId);
});

startIntroNarration();

if (!document.querySelector(".intro")) {
  setActiveSection("hero", { speak: false });
}

updateAgentControls();
updateHeaderVisibility();
