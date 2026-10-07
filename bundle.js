// ==========================================================================
// STANDALONE APPLICATION BUNDLE FOR ANILKUMAR R. JAISWAR PORTFOLIO
// Compatible with both file:/// (local double-click) and http:// (web server)
// 100% Genuine User Content â€¢ 3 Active Themes â€¢ Compact Top-Right Hub
// ==========================================================================

(function() {
  'use strict';

// Complete portfolio data for Anilkumar R. Jaiswar
// 100% Genuine User Resume Data — Zero Embellishments or Hallucinations

const portfolioData = {
  basics: {
    name: "Anilkumar R. Jaiswar",
    shortName: "Anil Jaiswar",
    label: "Sr. Android Developer | 8+ Years | Banking & Fintech Specialist",
    role: "Sr. Android Developer",
    company: "Snapwork Technologies Pvt. Ltd.",
    experienceYears: "8+",
    experienceSpan: "2016 – 2026",
    email: "anil.rjx8@gmail.com",
    phone: "+91 91375 10191",
    url: "https://aniljaiswar.com",
    urlDisplay: "aniljaiswar.com",
    location: {
      city: "Mumbai",
      region: "",
      country: "India",
      display: "Mumbai, India"
    },
    summary: "Results-driven Senior Android Developer with 8+ years of experience (2016–2026) in developing, securing, and scaling enterprise-level Android applications. Currently working at Snapwork Technologies Pvt. Ltd. as a Senior Android Developer, handling projects for top banking clients like HDFC Bank, IndusInd Bank, IDBI Bank, Kotak Mahindra Bank, Bajaj Finserv, ICICI Bank, and others. Strong experience in technical decision-making, designing complex system architectures, and leading cross-functional teams to deliver high-quality banking solutions. Skilled in security (VAPT remediation), Cordova hybrid plugin development, and complete SDK integrations. Also experienced in using AI tools like GitHub Copilot, Cursor, and others to improve development speed and code quality.",
    stats: [
      { label: "Years Experience", value: "8+", detail: "2016 – 2026 Enterprise Android" },
      { label: "Top Banking Clients", value: "10+", detail: "HDFC, IndusInd, IDBI, Kotak, Bajaj & ICICI" },
      { label: "Career Roles", value: "4", detail: "Snapwork, RSalesArm, Clear Secured, Startup" },
      { label: "Technical Skills", value: "28", detail: "Android, Security, VAPT, SDKs & AI Tools" }
    ],
    social: [
      { name: "Email", url: "mailto:anil.rjx8@gmail.com", icon: "email", text: "anil.rjx8@gmail.com" },
      { name: "Phone", url: "tel:+919137510191", icon: "phone", text: "+91 91375 10191" }
    ]
  },

  work: [
    {
      id: "xzkss181c3xw",
      company: "Snapwork Technologies Pvt. Ltd.",
      position: "Sr. Android Developer — Snapwork Technologies Pvt. Ltd.",
      location: "Chembur, Mumbai",
      url: "https://www.snapwork.com/home",
      startDate: "2021-04",
      endDate: "",
      period: "Apr 2021 – Present",
      isCurrent: true,
      summary: "Strategic Lead Android Engineer managing high-stakes banking applications for India's premier financial institutions. Responsible for critical technical decision-making, defining secure app architectures, and mentoring junior developers. Specialized in vulnerability remediation (VAPT), performance-first engineering, and complex SDK orchestrations. Managing 10+ major banking client deliveries simultaneously with a focus on security-first development and high-performance delivery.",
      highlights: [],
      clientPills: []
    },
    {
      id: "65vnl5ttuyeh",
      company: "RSalesArm IT Services Pvt. Ltd.",
      position: "Mobile Application Developer — RSalesArm IT Services Pvt. Ltd.",
      location: "Ghatkopar, Mumbai",
      url: "https://rsalesarm.com/",
      startDate: "2018-11",
      endDate: "2019-08",
      period: "Nov 2018 – Aug 2019",
      isCurrent: false,
      summary: "",
      highlights: [
        "Developed in-house apps (Royce, Tuneem Pro) featuring multimedia streaming (audio/video/image capture and playback), social interactions (comments, likes), event tracking, interactive quizzes, and an automated attendance system.",
        "Alkem Laboratories — Alkepedia (10K+ Downloads): Feature development and maintenance.",
        "Reckitt Benckiser — RBF3 (Internal Training App): Feature development and maintenance."
      ],
      clientPills: []
    },
    {
      id: "ofs6eukon8ez",
      company: "Clear Secured Services Pvt. Ltd.",
      position: "Software Developer — Clear Secured Services Pvt. Ltd.",
      location: "Sion, Mumbai",
      url: "https://comforttechno.com/",
      startDate: "2016-02",
      endDate: "2017-11",
      period: "Feb 2016 – Nov 2017",
      isCurrent: false,
      summary: "",
      highlights: [
        "Contributed to the development and delivery of enterprise Android applications, including Fencer Audit (auditing mobile app), Fencer Telecom (internal enterprise mobile app), and Cleartask (home services mobile app).",
        "Collaborated with cross-functional teams throughout the development lifecycle, contributing to requirement understanding, implementation, testing, and Play Store deployment."
      ],
      clientPills: []
    },
    {
      id: "uvczm0b8ksm8",
      company: "Independent / Startup work",
      position: "Independent / Startup work — Built 5+ applications across multiple domains",
      location: "References available on request.",
      url: "",
      startDate: "2017",
      endDate: "2018",
      period: "2017 – 2018",
      isCurrent: false,
      summary: "",
      highlights: [],
      clientPills: []
    }
  ],

  projects: [
    {
      id: "y3e7e72qeq2d",
      title: "HDFC Smart Account Opening",
      name: "HDFC Bank (Mobile App)",
      client: "HDFC Bank (Mobile App)",
      scope: "Bank Employee Only",
      description: "HDFC Smart Account Opening : (Bank Employee Only)",
      tagline: "HDFC Smart Account Opening : (Bank Employee Only)",
      period: "2023 – Present",
      metrics: "Bank Employee Only",
      category: "Banking Core",
      color: "#004c8f",
      url: "",
      highlights: [
        "Remediated critical VAPT vulnerabilities across multiple full audit cycles; resolved SQLite VAPT and code tampering (hash + Play Store verification) issues",
        "Led multiple target SDK migrations; updated deprecated platform APIs and resolved dependency conflicts to maintain Google Play compliance.",
        "Built Firebase Barcode Scanner plugin and FCM HTTP V1 notification with hybrid data passing",
        "Integrated Novopay SDK, PMSBY/JJBY SDK, Intune MDM, Morpho L0/L1 fingerprint SDK",
        "Implemented Aadhaar QR data parsing, OTP QR plugin, eKYC multi-scenario handling, and liveness detection",
        "Created dynamic + persistent Logger plugin; fixed camera (crop, black screen, selfie, A4 flow), dual signature capture, ANR/crash issues",
        "Managed MDM changes, remote config handling (including Firebase downtime), and base64 image/PDF processing"
      ],
      tags: ["VAPT Remediation", "Play Store Compliance", "Morpho L0/L1", "Intune MDM", "Aadhaar eKYC", "Cordova Plugins", "FCM HTTP V1", "SQLite VAPT"]
    },
    {
      id: "aur8u8i60svx",
      title: "IDBI Bank GO Mobile+",
      name: "IDBI Bank (Mobile App)",
      client: "IDBI Bank (Mobile App)",
      scope: "1Cr+ Downloads",
      description: "IDBI Bank GO Mobile+ : (1Cr+ Downloads)",
      tagline: "IDBI Bank GO Mobile+ : (1Cr+ Downloads)",
      url: "https://play.google.com/store/apps/details?id=com.snapwork.IDBI",
      period: "2023 – Present",
      metrics: "1Cr+ Downloads",
      category: "Retail Banking",
      color: "#007749",
      highlights: [
        "Full VAPT + AppSec remediation; integrated Play Integrity and device binding security",
        "Created TextToSpeech, Voice Input, Firebase token, and Network Check custom Cordova plugins",
        "Integrated ProtecttAI, Sarvatra, Appice, Dynatrace SDKs; updated Cordova version, SMS auto-read, multi-theme handling",
        "Resolved Play Store policy issues; optimized app startup time, security, and overall performance."
      ],
      tags: ["1Cr+ Downloads", "Play Integrity", "Device Binding", "ProtecttAI", "Dynatrace", "Custom Cordova Plugins", "VAPT"]
    },
    {
      id: "4gmp05mf705e",
      title: "Bajaj Finance : UPI & Loan App",
      name: "Bajaj Finance Limited (Mobile App)",
      client: "Bajaj Finance Limited (Mobile App)",
      scope: "10Cr+ Downloads",
      description: "Bajaj Finance : UPI & Loan App : (10Cr+ Downloads)",
      tagline: "Bajaj Finance : UPI & Loan App : (10Cr+ Downloads)",
      url: "https://play.google.com/store/apps/details?id=org.altruist.BajajExperia",
      period: "2021-04 – 2023-04",
      metrics: "10Cr+ Downloads",
      category: "Fintech & Lending",
      color: "#00629b",
      highlights: [
        "Architected core app infrastructure: Maintenance API engine, Native C++ module (Security-Hardened), Deep-Link router, KPI event logger — driving architectural decisions for the entire ecosystem.",
        "Led the On-Boarding module end-to-end — optimizing for fast performance and zero-latency user journeys.",
        "Implemented AEM caching with high-efficiency background processing; reduced app load time by 30%.",
        "Integrated 12+ SDKs in a single release cycle.",
        "Remediated critical VAPT vulnerabilities; made executive decisions on security protocols and data encryption strategies.",
        "Implemented AI-driven code analysis to optimize Gradle builds and reduce binary size."
      ],
      tags: ["10Cr+ Downloads", "Native C++", "Deep-Link Router", "AEM Caching", "12+ SDKs", "VAPT Remediation", "Gradle AI Optimization"]
    },
    {
      id: "ad9hh00fvfup",
      title: "Bajaj Housing Finance",
      name: "Bajaj Housing Finance Limited (Mobile App)",
      client: "Bajaj Housing Finance Limited (Mobile App)",
      scope: "1L+ Downloads",
      description: "Bajaj Housing Finance : (1L+ Downloads)",
      tagline: "Bajaj Housing Finance : (1L+ Downloads)",
      url: "https://play.google.com/store/apps/details?id=com.bhfl",
      period: "2023 – Present",
      metrics: "1L+ Downloads",
      category: "Fintech & Housing",
      color: "#004b87",
      highlights: [
        "Built multi-module PDF viewer using BundleTool (App Bundle); integrated BillDesk V2 (UPI payment)",
        "Implemented Firebase Performance Monitor; fixed launch delay, app stuck on start, app size optimization",
        "Created device detail and network detection (5G/4G) plugins; fixed Play Store policy issues and loader bugs"
      ],
      tags: ["1L+ Downloads", "BundleTool", "BillDesk V2", "Firebase Perf Monitor", "5G/4G Plugins", "Multi-Module"]
    },
    {
      id: "3ubkpjaixjxm",
      title: "IndusInd Merchant Solutions (IMS)",
      name: "IndusInd Bank Ltd.(Mobile App)",
      client: "IndusInd Bank Ltd. (Mobile App)",
      scope: "5L+ Downloads • Rebranded to INDIE for Business, Jul 2025",
      description: "IndusInd Merchant Solutions (IMS) — (rebranded to INDIE for Business, Jul 2025) : (5L+ Downloads)",
      tagline: "IndusInd Merchant Solutions (IMS) — (rebranded to INDIE for Business, Jul 2025) : (5L+ Downloads)",
      url: "https://play.google.com/store/apps/details?id=com.indusind.indiebiz",
      period: "2023 – 2025-01",
      metrics: "5L+ Downloads",
      category: "Merchant & Business Banking",
      color: "#7b1113",
      highlights: [
        "Led API version migrations; resolved deep-link issues (shielded/non-shielded)",
        "Integrated OneSpan, MoEngage, AppsFlyer, Signzy VKYC, Lookout SDK",
        "Built Custom Tab with callback handling, malicious app detection (foreground + background), QR on lock screen",
        "Developed TextToSpeech with notification, device details plugin, location plugin, contact picker",
        "Fixed biometric/fingerprint issues, splash freeze, login prevention on malicious detection, ANR/crash issues"
      ],
      tags: ["5L+ Downloads", "OneSpan", "Signzy VKYC", "Lookout SDK", "Custom Tab", "Malicious App Detection", "Biometric"]
    },
    {
      id: "xxcmpvoi8sst",
      title: "Kotak fyn: Business Banking App",
      name: "Kotak Mahindra Bank Ltd. (Mobile App)",
      client: "Kotak Mahindra Bank Ltd. (Mobile App)",
      scope: "1L+ Downloads",
      description: "Kotak fyn: Business Banking App : (1L+ Downloads)",
      tagline: "Kotak fyn: Business Banking App : (1L+ Downloads)",
      url: "https://play.google.com/store/apps/details?id=com.snapwork.kotak",
      period: "2023 – 2025-01",
      metrics: "1L+ Downloads",
      category: "Corporate & Business Banking",
      color: "#ed1c24",
      highlights: [
        "Full VAPT cycle + Play Store warning resolution; integrated BioCatch SDK with API responses/callbacks",
        "Fixed SSL pinning, certificate exceptions, Play Store crashes",
        "Built SMS reading via Consent API, SIM availability checks, Logger; fixed branch locator, barcode scanner, token, and native C class build issues"
      ],
      tags: ["1L+ Downloads", "BioCatch SDK", "SSL Pinning", "Consent API SMS", "SIM Checks", "Native C Build", "VAPT"]
    },
    {
      id: "x2y02grtl6d3",
      title: "HDFC Securities InvestRight",
      name: "HDFC SEC: Share Market Trading & Demat Account App (Mobile App)",
      client: "HDFC SEC: Share Market Trading & Demat Account App (Mobile App)",
      scope: "10L+ Downloads",
      description: "HDFC Securities InvestRight : (10L+ Downloads)",
      tagline: "HDFC Securities InvestRight : (10L+ Downloads)",
      url: "https://play.google.com/store/apps/details?id=com.hsl.investright",
      period: "Ended 2023",
      metrics: "10L+ Downloads",
      category: "Trading & Demat",
      color: "#004c8f",
      highlights: [
        "Full VAPT + SSL certificate integration; API migration; fixed Gainer/Loser API inconsistencies",
        "Resolved HSL Streamer connectivity, FNO date null values, device IP duplicate, and font license issues"
      ],
      tags: ["10L+ Downloads", "HSL Streamer", "Full VAPT", "SSL Certificate", "API Migration"]
    }
  ],

  // 28 Genuine Keywords from User Resume
  skillKeywords: [
    "Kotlin",
    "Java",
    "Security",
    "VAPT remediation",
    "Play Integrity",
    "Cryptography",
    "MVVM",
    "Clean Architecture",
    "SOLID",
    "Jetpack Compose",
    "Coroutines",
    "Concurrency",
    "Firebase",
    "Gradle",
    "Git",
    "Multi-module architecture",
    "SDK integration",
    "SDK",
    "Deep link",
    "Biometric",
    "Camera",
    "Hardware integration",
    "SonarQube",
    "Cordova",
    "Cordova plugins",
    "Animation",
    "Prompt engineering",
    "AI tools"
  ],

  skillCategories: [
    {
      category: "Core Android & Architecture",
      icon: "android",
      skills: ["Kotlin", "Java", "MVVM", "Clean Architecture", "SOLID", "Jetpack Compose", "Coroutines", "Concurrency", "Multi-module architecture"]
    },
    {
      category: "Security & VAPT",
      icon: "shield",
      skills: ["Security", "VAPT remediation", "Play Integrity", "Cryptography"]
    },
    {
      category: "SDKs, Hardware & Hybrid",
      icon: "cpu",
      skills: ["SDK integration", "SDK", "Cordova", "Cordova plugins", "Biometric", "Camera", "Hardware integration", "Deep link"]
    },
    {
      category: "Tooling & AI Workflows",
      icon: "zap",
      skills: ["Firebase", "Gradle", "Git", "SonarQube", "Animation", "Prompt engineering", "AI tools"]
    }
  ],

  education: [
    {
      institution: "Mumbai University",
      degree: "B.Sc. Information Technology",
      area: "Information Technology",
      location: "Mumbai, Maharashtra, India",
      year: "2015",
      period: "Graduated 2015",
      summary: ""
    }
  ],

  themes: [
    {
      id: "theme-a",
      name: "Editorial Storybook",
      label: "Storybook",
      concept: "Editorial Illustrated Journal",
      description: "Warm papyrus palette, chapter spreads, hand-drawn annotations & literary editorial typography.",
      reference: "theme_a.webp",
      badgeColor: "#1e56a0",
      key: "1"
    },
    {
      id: "theme-d",
      name: "Biophilic Flow",
      label: "Biophilic",
      concept: "Warm Human-Centric Story",
      description: "Earthy sage & olive tones, layered wavy SVG curves, gentle speech bubbles & friendly icons.",
      reference: "theme_d.webp",
      badgeColor: "#769f72",
      key: "2"
    },
    {
      id: "theme-e",
      name: "Swiss Grid",
      label: "Swiss",
      concept: "Rigid Swiss Grid & System Dossier",
      description: "Stark monochrome, mint tint blocks, 1px blueprint rules, monospace index & architectural specs.",
      reference: "theme_e.webp",
      badgeColor: "#ffffff",
      key: "3"
    }
  ]
};


  // 2. STATE MANAGEMENT (Supports localStorage and URL query params ?theme= & ?mode= & ?modal=)
  const urlParams = (typeof window !== 'undefined' && window.location) ? new URLSearchParams(window.location.search) : null;
  const paramTheme = urlParams ? urlParams.get('theme') : null;
  const paramMode = urlParams ? urlParams.get('mode') : null;
  const paramModal = urlParams ? urlParams.get('modal') : null;

  let activeThemeId = paramTheme || localStorage.getItem('anil_portfolio_theme') || 'theme-a';
  if (!['theme-a', 'theme-d', 'theme-e'].includes(activeThemeId)) {
    activeThemeId = 'theme-a';
  }
  let activeThemeMode = paramMode || localStorage.getItem('anil_portfolio_mode') || 'light';
  if (!['light', 'dark'].includes(activeThemeMode)) activeThemeMode = 'light';
  let isSoundEnabled = localStorage.getItem('anil_portfolio_sound') === 'true';

  document.documentElement.setAttribute('data-theme-mode', activeThemeMode);
  document.body.setAttribute('data-theme-mode', activeThemeMode);

  // 3. SOUND SYNTHESIZER
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playSound(type) {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(750, now);
        osc.frequency.exponentialRampToValueAtTime(350, now + 0.04);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'switch') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.1);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'mode') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(activeThemeMode === 'dark' ? 300 : 700, now);
        osc.frequency.exponentialRampToValueAtTime(activeThemeMode === 'dark' ? 550 : 400, now + 0.08);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'pop') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.exponentialRampToValueAtTime(960, now + 0.07);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.07);
      }
    } catch (e) {}
  }

  // 4. SHARED UTILITIES
  function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('is-visible');
    playSound('pop');
    setTimeout(() => { toast.classList.remove('is-visible'); }, 3000);
  }

  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || 'Copied to clipboard!');
      }).catch(() => { fallbackCopy(text, successMsg); });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(successMsg || 'Copied to clipboard!');
    } catch (e) {
      showToast('Press Ctrl+C to copy: ' + text);
    }
    document.body.removeChild(tempInput);
  }

  function openProjectModal(project) {
    const backdrop = document.getElementById('project-modal');
    const content = document.getElementById('modal-body-content');
    if (!backdrop || !content) return;

    // Apply active theme class to modal so it follows current theme style
    backdrop.classList.remove('modal-theme-a', 'modal-theme-d', 'modal-theme-e');
    backdrop.classList.add(`modal-${activeThemeId}`);

    content.innerHTML = `
      <div class="modal-badge-row">
        <span class="modal-badge category">${project.category}</span>
        <span class="modal-badge metrics">${project.metrics}</span>
        <span class="modal-badge period">${project.period}</span>
      </div>

      <h2 class="modal-title">${project.title}</h2>
      <div class="modal-client">${project.client}</div>
      <div class="modal-tagline">${project.tagline}</div>

      <div class="modal-section-title">
        <span>Highlights & Technical Delivery</span>
      </div>
      <ul class="modal-highlights-list">
        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>

      <div class="modal-section-title">
        <span>Skills & Technologies Used</span>
      </div>
      <div class="modal-tags-container">
        ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
      </div>

      <div class="modal-action-row">
        ${project.url ? `
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="modal-link-btn">
            <span>View on Google Play</span> â†—
          </a>
        ` : `
          <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Enterprise Bank Internal Application</span>
        `}
        <button class="modal-close-btn" style="position:static; width:auto; height:auto; padding:0.6rem 1.25rem; border-radius:10px; font-size:0.85rem;" onclick="window.appUtils.closeProjectModal()">
          Close
        </button>
      </div>
    `;

    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    const backdrop = document.getElementById('project-modal');
    if (backdrop) {
      backdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  // Curriculum Vitae Print/Export Trigger - Downloads genuine PDF
  function triggerDownloadCV() {
    showToast('Downloading Anilkumar Jaiswar Resume (PDF)...');
    const link = document.createElement('a');
    link.href = 'assets/Anilkumar_Jaiswar_Resume.pdf';
    link.download = 'Anilkumar_R_Jaiswar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Form Submission Handler - Dispatches mailto to anil.rjx8@gmail.com
  function handleContactSubmit(form) {
    const nameInput = form.querySelector('input[name="name"], input[placeholder*="Name"], input[type="text"]');
    const emailInput = form.querySelector('input[name="email"], input[type="email"]');
    const subjectInput = form.querySelector('input[name="subject"]');
    const messageInput = form.querySelector('textarea');

    const senderName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Website Visitor';
    const senderEmail = emailInput && emailInput.value.trim() ? emailInput.value.trim() : '';
    const subjectText = subjectInput && subjectInput.value.trim() ? subjectInput.value.trim() : `Inquiry from ${senderName} via Portfolio`;
    const messageText = messageInput && messageInput.value.trim() ? messageInput.value.trim() : '';

    const mailBody = `Hello Anil,\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${messageText}\n\nSent from aniljaiswar.com`;
    const mailtoUrl = `mailto:anil.rjx8@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(mailBody)}`;

    showToast('Opening your email client to send message to anil.rjx8@gmail.com...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 350);

    form.reset();
  }

  window.appUtils = {
    openProjectModal,
    closeProjectModal,
    copyToClipboard,
    triggerDownloadCV,
    handleContactSubmit,
    playSound,
    showToast
  };

// Theme A: Editorial Storybook Renderer (Artistic Illustrated Chapter Spreads)
// Inspired by Reference Image 1 (Editorial papyrus layout with 100% genuine content)

function renderThemeA(data, container, utils) {
  const { basics, work, projects, skillCategories, education } = data;

  container.innerHTML = `
    <div class="theme-a-container" data-mode="${document.documentElement.getAttribute('data-theme-mode') || 'light'}">
      <!-- Editorial Top Masthead -->
      <header class="maly-masthead">
        <div class="maly-logo-group">
          <span class="maly-logo-title">${basics.name.toUpperCase()}</span>
          <span class="maly-logo-sub">${basics.label}</span>
        </div>
        <nav>
          <ul class="maly-nav-chapters">
            <li><a href="#part-01" class="maly-nav-link">SUMMARY</a></li>
            <li><a href="#part-02" class="maly-nav-link">BANKING APPS</a></li>
            <li><a href="#part-03" class="maly-nav-link">SKILLS & SECURITY</a></li>
            <li><a href="#part-04" class="maly-nav-link">EXPERIENCE</a></li>
            <li><a href="#part-05" class="maly-nav-link">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <!-- Master Hero Spread -->
      <main>
        <section id="spread-hero" class="maly-hero-spread">
          <div class="maly-spread-frame">
            <div class="maly-hero-grid">
              <!-- Left Column: Primary Non-Redundant Overview & Specs -->
              <div class="maly-hero-content">
                <div class="maly-hero-eyebrow">
                  <span class="maly-pill-tag">PORTFOLIO & ARCHIVE</span>
                  <span class="maly-period-badge">2016 – 2026</span>
                </div>

                <h1 class="maly-hero-title">${basics.name.toUpperCase()}</h1>

                <div class="maly-hero-subtitle">
                  Senior Android Developer • Banking & Fintech Specialist
                </div>

                <p class="maly-hero-summary">
                  8+ years developing, securing, and scaling enterprise-level Android applications. Currently at <strong>Snapwork Technologies</strong>, architecting solutions for premier banking clients including HDFC Bank, IndusInd Bank, Kotak Mahindra Bank, IDBI Bank, and Bajaj Finserv with proven expertise in VAPT security remediation and SDK orchestrations.
                </p>

                <div class="maly-hero-specs">
                  <div class="maly-spec-item">
                    <span class="maly-spec-label">Current Role:</span>
                    <span class="maly-spec-val">Senior Android Developer @ Snapwork Technologies (Mumbai)</span>
                  </div>
                  <div class="maly-spec-item">
                    <span class="maly-spec-label">Core Expertise:</span>
                    <span class="maly-spec-val">Banking & Fintech • VAPT Remediation • Hybrid Plugins • Architecture</span>
                  </div>
                </div>

                <div class="maly-action-row">
                  <a href="#part-02" class="maly-btn-ink">Explore Banking Apps ↓</a>
                  <button id="maly-cv-btn" class="maly-btn-outline">Download Resume 📄</button>
                  <button id="maly-copy-email" class="maly-btn-outline">Copy Email ✉️</button>
                </div>
              </div>

              <!-- Right Column: Illustrated Portrait with 5 Floating Badges in Star Formation -->
              <div class="maly-hero-media">
                <div class="maly-portrait-wrapper">
                  <img src="assets/images/theme_a_portrait.webp" 
                       alt="Illustrated Portrait of Anilkumar Jaiswar" 
                       class="maly-portrait-img"
                       width="640"
                       height="640"
                       fetchpriority="high"
                       decoding="async">
                  <!-- 5 Floating Badges in Star-Like Adjustment Around Image -->
                  <div class="maly-floating-badge star-point-top">🛡️ VAPT & Security</div>
                  <div class="maly-floating-badge star-point-upper-left">⚡ 8+ Years Exp</div>
                  <div class="maly-floating-badge star-point-lower-left">✦ Banking & Fintech</div>
                  <div class="maly-floating-badge star-point-upper-right">🏛️ Clean & MVVM</div>
                  <div class="maly-floating-badge star-point-lower-right">📱 Millions of Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Chapter 01: Summary & Foundations -->
        <section id="part-01" class="maly-chapter-section">
          <div class="maly-chapter-header">
            <div>
              <h2 class="maly-chapter-title">Executive Summary & Scale</h2>
              <span style="font-size:0.8rem; color:var(--maly-blue); font-weight:700;">PROVEN TRACK RECORD (2016–2026)</span>
            </div>
            <div class="maly-chapter-desc">
              Designing complex system architectures and leading cross-functional teams to deliver high-quality banking solutions.
            </div>
          </div>

          <div class="maly-bio-grid">
            <div class="maly-bio-content">
              <p>${basics.summary}</p>
              <div class="maly-quote-box">
                "Strong experience in technical decision-making, designing complex system architectures, and leading cross-functional teams to deliver high-quality banking solutions."
              </div>
            </div>

            <div class="maly-stats-grid">
              ${basics.stats.map(stat => `
                <div class="maly-stat-card">
                  <div class="maly-stat-num">${stat.value}</div>
                  <div class="maly-stat-label">${stat.label}</div>
                  <div class="maly-stat-detail">${stat.detail}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Chapter 02: High-Stakes Banking Projects -->
        <section id="part-02" class="maly-chapter-section">
          <div class="maly-chapter-header">
            <div>
              <h2 class="maly-chapter-title">High-Stakes Banking Projects</h2>
              <span style="font-size:0.8rem; color:var(--maly-blue); font-weight:700;">ENTERPRISE CLIENT DELIVERIES</span>
            </div>
            <div class="maly-chapter-desc">
              Click any project to inspect technical achievements, VAPT remediation details, and integrated SDKs.
            </div>
          </div>

          <div class="maly-projects-grid">
            ${projects.map((proj, idx) => `
              <article class="maly-project-card" data-project-id="${proj.id}">
                <span class="maly-card-part-num">0${idx + 1}</span>
                <span class="maly-project-client">${proj.client}</span>
                <h3 class="maly-project-title">${proj.title}</h3>
                <div>
                  <span class="maly-project-metrics">${proj.metrics}</span>
                </div>
                <p class="maly-project-tagline">${proj.tagline}</p>
                <div class="maly-project-tags">
                  ${proj.tags.slice(0, 5).map(tag => `<span class="maly-tag">${tag}</span>`).join('')}
                </div>
                <div class="maly-card-action">
                  <span>View Project Details</span> →
                </div>
              </article>
            `).join('')}
          </div>
        </section>

        <!-- Chapter 03: Security & Skills -->
        <section id="part-03" class="maly-chapter-section">
          <div class="maly-chapter-header">
            <div>
              <h2 class="maly-chapter-title">Technical Skills & Security</h2>
              <span style="font-size:0.8rem; color:var(--maly-blue); font-weight:700;">CORE COMPETENCIES</span>
            </div>
            <div class="maly-chapter-desc">
              Security-first development, VAPT remediation, Clean Architecture, and AI tools integration.
            </div>
          </div>

          <div class="maly-skills-grid">
            ${skillCategories.map(cat => `
              <div class="maly-skill-cluster">
                <h3 class="maly-cluster-title">
                  <span>${cat.category}</span>
                  <span style="font-size:0.8rem; color:var(--maly-blue);">●</span>
                </h3>
                <ul class="maly-skill-items">
                  ${cat.skills.map(s => `
                    <li class="maly-skill-row">
                      <span class="maly-skill-name">${typeof s === 'string' ? s : s.name}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Chapter 04: The Chronicle -->
        <section id="part-04" class="maly-chapter-section">
          <div class="maly-chapter-header">
            <div>
              <h2 class="maly-chapter-title">Work Experience Chronicle</h2>
              <span style="font-size:0.8rem; color:var(--maly-blue); font-weight:700;">CAREER TIMELINE (2016–2026)</span>
            </div>
            <div class="maly-chapter-desc">
              8+ years of enterprise Android development across premier financial institutions and technology firms.
            </div>
          </div>

          <div class="maly-timeline">
            ${work.map(job => `
              <div class="maly-timeline-item">
                <div class="maly-timeline-meta">
                  <div class="maly-timeline-date">${job.period}</div>
                  <div class="maly-timeline-loc">${job.location}</div>
                </div>
                <div class="maly-timeline-body">
                  <h4>${job.company}</h4>
                  <h5>${job.position}</h5>
                  ${job.summary ? `<p>${job.summary}</p>` : ''}
                  ${job.highlights && job.highlights.length > 0 ? `
                    <ul style="margin-top:1rem; padding-left:1.2rem; font-size:0.85rem; line-height:1.7;">
                      ${job.highlights.map(h => `<li style="margin-bottom:0.5rem;">${h}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              </div>
            `).join('')}

            <div class="maly-timeline-item" style="border-left: 6px solid var(--maly-yellow);">
              <div class="maly-timeline-meta">
                <div class="maly-timeline-date">Graduated 2015</div>
                <div class="maly-timeline-loc">${education[0].location}</div>
              </div>
              <div class="maly-timeline-body">
                <h4>${education[0].institution}</h4>
                <h5>${education[0].degree}</h5>
                <p>${education[0].summary}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Chapter 05: Direct Contact -->
        <section id="part-05" class="maly-chapter-section">
          <div class="maly-chapter-header">
            <div>
              <h2 class="maly-chapter-title">Direct Inquiries & Contact</h2>
              <span style="font-size:0.8rem; color:var(--maly-blue); font-weight:700;">CONNECT DIRECTLY</span>
            </div>
            <div class="maly-chapter-desc">
              Available for enterprise Android engineering, VAPT security audits, and banking mobile application development.
            </div>
          </div>

          <div class="maly-contact-spread">
            <div class="maly-contact-info">
              <h3>Let's discuss your banking application needs.</h3>
              <p style="font-size:0.95rem; line-height:1.7; color:var(--maly-ink-muted);">
                Managing 10+ major banking client deliveries simultaneously with a focus on security-first development and high-performance delivery.
              </p>

              <div class="maly-contact-detail-row">
                <a href="mailto:${basics.email}" class="maly-contact-pill">
                  <span>✉️ ${basics.email}</span>
                  <span>SEND EMAIL ↗</span>
                </a>
                <a href="tel:${basics.phone.replace(/[^0-9+]/g, '')}" class="maly-contact-pill">
                  <span>📞 ${basics.phone}</span>
                  <span>CALL DIRECT ↗</span>
                </a>
                <div class="maly-contact-pill" style="cursor:default;">
                  <span>📍 Mumbai</span>
                  <span style="font-weight:700; letter-spacing:0.05em;">MAHARASHTRA, INDIA</span>
                </div>
              </div>
            </div>

            <div class="maly-contact-form-col">
              <form id="maly-contact-form" onsubmit="event.preventDefault(); window.appUtils.handleContactSubmit(this);">
                <div class="maly-form-group">
                  <label for="maly-name">Your Name</label>
                  <input type="text" id="maly-name" class="maly-input" required placeholder="Full Name">
                </div>
                <div class="maly-form-group">
                  <label for="maly-email">Email Address</label>
                  <input type="email" id="maly-email" class="maly-input" required placeholder="name@company.com">
                </div>
                <div class="maly-form-group">
                  <label for="maly-message">Message / Project Scope</label>
                  <textarea id="maly-message" rows="4" class="maly-textarea" required placeholder="Your message..."></textarea>
                </div>
                <button type="submit" class="maly-btn-ink" style="width:100%;">Send Message 📨</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;

  // Attach theme-specific event listeners
  container.querySelectorAll('.maly-project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      const project = projects.find(p => p.id === projId);
      if (project && utils.openProjectModal) {
        utils.playSound('click');
        utils.openProjectModal(project);
      }
    });
  });

  const cvBtn = container.querySelector('#maly-cv-btn');
  if (cvBtn) cvBtn.addEventListener('click', () => { utils.playSound('pop'); utils.triggerDownloadCV(); });

  const copyEmailBtn = container.querySelector('#maly-copy-email');
  if (copyEmailBtn) copyEmailBtn.addEventListener('click', () => { utils.copyToClipboard(basics.email, 'Email copied to clipboard!'); });

  const copyPhoneBtn = container.querySelector('#maly-copy-phone');
  if (copyPhoneBtn) copyPhoneBtn.addEventListener('click', () => { utils.copyToClipboard(basics.phone, 'Phone number copied to clipboard!'); });
}

// Theme D: Biophilic Flow Renderer (Organic Nature Waves & Story)
// 100% genuine user content with warm organic flowing curves

function renderThemeD(data, container, utils) {
  const { basics, work, projects, skillCategories, education } = data;

  const projectIconMap = {
    "y3e7e72qeq2d": "🏦",
    "aur8u8i60svx": "📱",
    "4gmp05mf705e": "💳",
    "ad9hh00fvfup": "🏠",
    "3ubkpjaixjxm": "🛍️",
    "xxcmpvoi8sst": "🏢",
    "x2y02grtl6d3": "📈"
  };

  container.innerHTML = `
    <div class="theme-d-container" data-mode="${document.documentElement.getAttribute('data-theme-mode') || 'light'}">
      <!-- Organic Top Navbar -->
      <header class="bio-navbar">
        <a href="#bio-hero" class="bio-brand">
          <span class="bio-brand-icon">🌱</span>
          <div>
            <div class="bio-brand-title">${basics.name}</div>
            <div class="bio-brand-sub">${basics.label}</div>
          </div>
        </a>

        <nav>
          <ul class="bio-nav-links">
            <li><a href="#bio-hero" class="bio-nav-link">Overview</a></li>
            <li><a href="#bio-about" class="bio-nav-link">Summary</a></li>
            <li><a href="#bio-services" class="bio-nav-link">Competencies</a></li>
            <li><a href="#bio-reviews" class="bio-nav-link">Banking Projects</a></li>
            <li><a href="#bio-timeline" class="bio-nav-link">Experience</a></li>
            <li><a href="#bio-contact" class="bio-nav-link">Contact</a></li>
          </ul>
        </nav>

        <div>
          <a href="#bio-contact" class="bio-btn-leaf" style="padding:0.45rem 1.15rem; font-size:0.82rem;">
            <span>Get in Touch</span>
          </a>
        </div>
      </header>

      <main>
        <!-- Hero Section with Meadow Art -->
        <section id="bio-hero" class="bio-hero-section">
          <div class="bio-hero-container">
            <div class="bio-hero-content">
              <div class="bio-hero-badge">
                <span>🌱</span>
                <span>${basics.label}</span>
              </div>
              <h1 class="bio-hero-headline">
                ${basics.name}
              </h1>
              <p class="bio-hero-sub">
                ${work[0].position}
              </p>
              <p class="bio-hero-lead">
                ${basics.summary}
              </p>
              <div class="bio-hero-actions">
                <a href="#bio-reviews" class="bio-btn-leaf">View Banking Projects</a>
                <button id="bio-cv-btn" class="bio-btn-outline">Download Resume 📄</button>
              </div>
            </div>

            <div class="bio-hero-illustration-wrapper">
              <div class="bio-hero-illustration">
                <img src="assets/images/theme_d_landscape.webp" 
                     alt="Illustrated portrait of Anilkumar Jaiswar developing mobile apps"
                     width="800"
                     height="800"
                     loading="lazy"
                     decoding="async">
              </div>
            </div>
          </div>
        </section>

        <!-- Sage Section: Summary & Competencies -->
        <section id="bio-about" class="bio-section-sage">
          <div class="bio-content-container">
            <div class="bio-section-header">
              <span class="bio-kicker">✦ PROFESSIONAL SUMMARY & EXPERTISE</span>
              <h2 class="bio-section-title">Summary & Key Competencies</h2>
              <!-- <p class="bio-section-text"> -->
              <!-- ${basics.summary} -->
              <!-- </p> -->
            </div>

            <!-- Tier 1: 4 Verified Metric Cards from User Resume -->
            <div class="bio-metrics-grid">
              ${basics.stats.map(s => `
                <div class="bio-metric-card">
                  <div class="bio-metric-top">
                    <span class="bio-metric-num">${s.value}</span>
                    <span class="bio-metric-pill">${s.label}</span>
                  </div>
                  <div class="bio-metric-title">${s.label}</div>
                  <p class="bio-metric-detail">${s.detail}</p>
                </div>
              `).join('')}
            </div>

            <!-- Tier 2: 4 Technical Pillars from Exact Resume Keywords -->
            <div id="bio-services" class="bio-pillars-grid">
              <div class="bio-pillar-card">
                <div class="bio-pillar-icon-row">
                  <div class="bio-pillar-icon">🛡️</div>
                  <span class="bio-pillar-badge">Security & VAPT</span>
                </div>
                <h3 class="bio-pillar-title">Security & VAPT Remediation</h3>
                <p class="bio-pillar-desc">
                  Skilled in security (VAPT remediation), defining secure app architectures, Play Integrity, and Cryptography.
                </p>
                <div class="bio-pillar-tags">
                  <span>Security</span>
                  <span>VAPT remediation</span>
                  <span>Play Integrity</span>
                  <span>Cryptography</span>
                  <span>SonarQube</span>
                </div>
              </div>

              <div class="bio-pillar-card">
                <div class="bio-pillar-icon-row">
                  <div class="bio-pillar-icon">🏛️</div>
                  <span class="bio-pillar-badge">Architecture</span>
                </div>
                <h3 class="bio-pillar-title">Architecture & Clean Code</h3>
                <p class="bio-pillar-desc">
                  Strong experience in technical decision-making, designing complex system architectures, and leading cross-functional teams.
                </p>
                <div class="bio-pillar-tags">
                  <span>Kotlin</span>
                  <span>Java</span>
                  <span>MVVM</span>
                  <span>Clean Architecture</span>
                  <span>SOLID</span>
                  <span>Jetpack Compose</span>
                  <span>Coroutines</span>
                  <span>Concurrency</span>
                  <span>Multi-module architecture</span>
                </div>
              </div>

              <div class="bio-pillar-card">
                <div class="bio-pillar-icon-row">
                  <div class="bio-pillar-icon">🔌</div>
                  <span class="bio-pillar-badge">Plugins & SDKs</span>
                </div>
                <h3 class="bio-pillar-title">Cordova & SDK Integrations</h3>
                <p class="bio-pillar-desc">
                  Skilled in Cordova hybrid plugin development, complex SDK orchestrations, and complete hardware integrations.
                </p>
                <div class="bio-pillar-tags">
                  <span>Cordova</span>
                  <span>Cordova plugins</span>
                  <span>SDK integration</span>
                  <span>SDK</span>
                  <span>Biometric</span>
                  <span>Camera</span>
                  <span>Hardware integration</span>
                  <span>Deep link</span>
                </div>
              </div>

              <div class="bio-pillar-card">
                <div class="bio-pillar-icon-row">
                  <div class="bio-pillar-icon">⚡</div>
                  <span class="bio-pillar-badge">Tools & AI</span>
                </div>
                <h3 class="bio-pillar-title">Developer Tools & AI</h3>
                <p class="bio-pillar-desc">
                  Experienced in using AI tools like GitHub Copilot, Cursor, and others to improve development speed and code quality.
                </p>
                <div class="bio-pillar-tags">
                  <span>AI tools</span>
                  <span>Prompt engineering</span>
                  <span>Firebase</span>
                  <span>Gradle</span>
                  <span>Git</span>
                  <span>Animation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Deep Green Section: Banking Projects -->
        <section id="bio-reviews" class="bio-section-deep">
          <div class="bio-content-container">
            <div class="bio-section-header">
              <span class="bio-kicker bio-kicker-light">✦ CLIENT DEPLOYMENTS</span>
              <h2 class="bio-section-title">Banking & Fintech Deployments</h2>
              <p class="bio-section-sub">
                Handling projects for top banking clients like HDFC Bank, IndusInd Bank, IDBI Bank, Kotak Mahindra Bank, Bajaj Finserv, ICICI Bank, and others.
              </p>
            </div>

            <!-- Client Trust Strip uses exact names from user's projects -->
            <div class="bio-trust-strip">
              ${projects.map(proj => `
                <span class="bio-trust-pill">${projectIconMap[proj.id] || "📱"} ${proj.client.replace(/ \(Mobile App\)/g, '')}</span>
              `).join('')}
            </div>

            <div class="bio-bubbles-grid">
              ${projects.map(proj => `
                <div class="bio-speech-card" data-project-id="${proj.id}">
                  <div class="bio-bubble-box">
                    <span class="bio-bubble-badge">${proj.metrics}</span>
                    <h3 class="bio-bubble-title">${proj.title}</h3>
                    <p class="bio-bubble-desc">${proj.tagline}</p>
                    <div style="font-size:0.8rem; font-weight:700; color:var(--bio-forest); display:flex; align-items:center; gap:0.4rem; margin-top:0.75rem;">
                      <span>View Project Details</span> →
                    </div>
                  </div>
                  
                  <div class="bio-bubble-author">
                    <div class="bio-author-avatar">${projectIconMap[proj.id] || "📱"}</div>
                    <div>
                      <div class="bio-author-name">${proj.client}</div>
                      <div class="bio-author-sub">${proj.period}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Work Experience Timeline -->
        <section id="bio-timeline" class="bio-contact-section" style="padding-bottom:2rem;">
          <div class="bio-content-container">
            <h2 class="bio-section-title" style="margin-bottom:2.5rem;">Work Experience (2016–2026)</h2>

            <div style="display:flex; flex-direction:column; gap:2rem;">
              ${work.map(job => `
                <div class="bio-timeline-card">
                  <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
                    <div>
                      <h3 style="font-family:var(--bio-font-serif); font-size:1.4rem; font-weight:700; color:var(--bio-forest);">${job.position}</h3>
                      <div style="font-size:0.95rem; color:var(--bio-ink-muted); font-weight:600;">${job.company} • ${job.location}</div>
                    </div>
                    <span style="background:var(--bio-sage-light); color:var(--bio-forest); font-weight:700; padding:0.35rem 0.85rem; border-radius:999px; height:fit-content; font-size:0.85rem;">${job.period}</span>
                  </div>
                  ${job.summary ? `<p style="font-size:0.95rem; line-height:1.7; color:var(--bio-ink); margin-bottom:1rem;">${job.summary}</p>` : ''}
                  ${job.highlights && job.highlights.length > 0 ? `
                    <ul style="padding-left:1.25rem; font-size:0.9rem; line-height:1.7; color:var(--bio-ink-muted); margin-bottom:1rem;">
                      ${job.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              `).join('')}

              <div class="bio-timeline-card" style="padding:2rem;">
                <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
                  <div>
                    <h3 style="font-family:var(--bio-font-serif); font-size:1.3rem; font-weight:700; color:var(--bio-forest);">${education[0].institution}</h3>
                    <div style="font-size:0.95rem; color:var(--bio-ink-muted); font-weight:600;">${education[0].degree} • ${education[0].location}</div>
                  </div>
                  <span style="background:var(--bio-sage-light); color:var(--bio-forest); font-weight:700; padding:0.35rem 0.85rem; border-radius:999px; height:fit-content; font-size:0.85rem;">Graduated 2015</span>
                </div>
                <p style="font-size:0.9rem; line-height:1.7; color:var(--bio-ink-muted); margin-top:0.75rem;">${education[0].summary}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="bio-contact" class="bio-contact-section">
          <div class="bio-contact-card">
            <div class="bio-contact-info-col">
              <span style="font-size:0.85rem; font-weight:700; color:var(--bio-sage-dark); text-transform:uppercase;">GET IN TOUCH</span>
              <h2 style="font-family:var(--bio-font-serif); font-size:2.5rem; font-weight:600; color:var(--bio-forest); margin:0.5rem 0 1.25rem 0;">
                Connect with Anilkumar Jaiswar
              </h2>
              <p style="font-size:1rem; line-height:1.7; color:var(--bio-ink-muted); margin-bottom:2rem;">
                Looking for a Senior Android Developer with 8+ years of banking and fintech expertise? Reach out directly.
              </p>

              <div style="display:flex; flex-direction:column; gap:1rem;">
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.95rem; font-weight:700;">
                  <span>✉️</span>
                  <a href="mailto:${basics.email}" style="color:var(--bio-forest); text-decoration:none;">${basics.email}</a>
                </div>
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.95rem; font-weight:700;">
                  <span>📞</span>
                  <a href="tel:${basics.phone.replace(/[^0-9+]/g, '')}" style="color:var(--bio-forest); text-decoration:none;">${basics.phone}</a>
                </div>
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.95rem; color:var(--bio-ink-muted);">
                  <span>📍</span>
                  <span>${basics.location.display}</span>
                </div>
              </div>
            </div>

            <div class="bio-contact-form-col">
              <form onsubmit="event.preventDefault(); window.appUtils.handleContactSubmit(this);">
                <div style="margin-bottom:1rem;">
                  <input type="text" style="width:100%; padding:0.85rem 1.25rem; border:2px solid var(--bio-border); border-radius:16px; font-family:var(--bio-font-sans);" required placeholder="Your Name">
                </div>
                <div style="margin-bottom:1rem;">
                  <input type="email" style="width:100%; padding:0.85rem 1.25rem; border:2px solid var(--bio-border); border-radius:16px; font-family:var(--bio-font-sans);" required placeholder="Your Email">
                </div>
                <div style="margin-bottom:1.25rem;">
                  <textarea rows="4" style="width:100%; padding:0.85rem 1.25rem; border:2px solid var(--bio-border); border-radius:16px; font-family:var(--bio-font-sans);" required placeholder="Your message..."></textarea>
                </div>
                <button type="submit" class="bio-btn-leaf" style="width:100%; justify-content:center;">
                  <span>Send Message</span> 🌱
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;

  // Attach theme-specific event listeners
  container.querySelectorAll('.bio-speech-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      const project = projects.find(p => p.id === projId);
      if (project && utils.openProjectModal) {
        utils.playSound('click');
        utils.openProjectModal(project);
      }
    });
  });

  const cvBtn = container.querySelector('#bio-cv-btn');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      utils.playSound('pop');
      utils.triggerDownloadCV();
    });
  }
}

// Theme E: Swiss Architectural Renderer (Minimalist Monograph & Blueprint Grid)
// 100% genuine user content with strict Swiss modernist grid aesthetics

function renderThemeE(data, container, utils) {
  const { basics, work, projects, skillCategories, education } = data;

  container.innerHTML = `
    <div class="theme-e-container" data-mode="${document.documentElement.getAttribute('data-theme-mode') || 'light'}">
      <!-- Monograph Top Index Rail -->
      <header class="swiss-top-rail">
        <div class="swiss-brand-mark">
          <span class="swiss-logo-text">${basics.name.toUpperCase()}</span>
          <span class="swiss-index-code">[EXPERIENCE: 2016–2026]</span>
          <span style="font-size:0.85rem; font-weight:700;">${basics.label}</span>
        </div>

        <nav>
          <ul class="swiss-nav-coords">
            <li class="swiss-nav-item"><a href="#swiss-overview">[01 / SUMMARY]</a></li>
            <li class="swiss-nav-item"><a href="#swiss-blueprints">[02 / BANKING]</a></li>
            <li class="swiss-nav-item"><a href="#swiss-taxonomy">[03 / SKILLS]</a></li>
            <li class="swiss-nav-item"><a href="#swiss-chronology">[04 / EXPERIENCE]</a></li>
            <li class="swiss-nav-item"><a href="#swiss-dispatch">[05 / CONTACT]</a></li>
          </ul>
        </nav>

        <div>
          <button id="swiss-cv-btn" class="swiss-btn-dispatch" style="padding:0.4rem 1rem; font-size:0.75rem;">
            DOWNLOAD RESUME ↓
          </button>
        </div>
      </header>

      <main>
        <!-- Master Architectural Hero Spread -->
        <section id="swiss-overview" class="swiss-hero-spread">
          <div class="swiss-hero-left">
            <div>
              <span class="swiss-dossier-tag">SR. ANDROID DEVELOPER • 8+ YEARS (2016–2026)</span>
              <h1 class="swiss-display-headline">
                ANILKUMAR<br>
                R. JAISWAR
              </h1>
              <div style="font-family:var(--swiss-font-mono); font-size:1.05rem; font-weight:700; color:var(--swiss-text-dark); margin:-0.5rem 0 1.5rem 0; letter-spacing:0.02em;">
                ${basics.label}
              </div>
              <p class="swiss-lead-paragraph">
                ${basics.summary}
              </p>
            </div>

            <!-- Architectural Specs Table -->
            <div class="swiss-specs-table">
              <div class="swiss-spec-row">
                <span class="swiss-spec-label">DEVELOPER</span>
                <span class="swiss-spec-value">${basics.name}</span>
              </div>
              <div class="swiss-spec-row">
                <span class="swiss-spec-label">TITLE</span>
                <span class="swiss-spec-value">Sr. Android Developer</span>
              </div>
              <div class="swiss-spec-row">
                <span class="swiss-spec-label">ACTIVE BASE</span>
                <span class="swiss-spec-value">${basics.location.city}, India</span>
              </div>
              <div class="swiss-spec-row">
                <span class="swiss-spec-label">CURRENT FIRM</span>
                <span class="swiss-spec-value">${basics.company}</span>
              </div>
              <div class="swiss-spec-row">
                <span class="swiss-spec-label">TOP CLIENTS</span>
                <span class="swiss-spec-value">HDFC Bank, IDBI Bank, Kotak Mahindra Bank, IndusInd Bank, Bajaj Finserv</span>
              </div>
              <div class="swiss-spec-row">
                <span class="swiss-spec-label">CORE FOCUS</span>
                <span class="swiss-spec-value">VAPT REMEDIATION & BANKING APPS</span>
              </div>
            </div>
          </div>

          <!-- Hero Right: Photo with Sage Tint Block -->
          <div class="swiss-hero-right">
            <div class="swiss-photo-container">
              <img src="assets/images/theme_e_architecture.webp" 
                   alt="Minimalist Architectural Facade" 
                   class="swiss-architecture-img"
                   width="1000"
                   height="746"
                   loading="lazy"
                   decoding="async">
              
              <div class="swiss-mint-overlay-box">
                <div class="swiss-mint-title">TECHNICAL FOUNDATIONS</div>
                <div class="swiss-mint-desc">
                  Kotlin, Java, Security & VAPT remediation, Play Integrity, MVVM, Clean Architecture, SDK integration, and AI tools.
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 02: Blueprint Systems -->
        <section id="swiss-blueprints" class="swiss-section">
          <div class="swiss-section-header">
            <div>
              <span class="swiss-section-number">[02]</span>
              <h2 class="swiss-section-title">BANKING APPLICATIONS / CASE STUDIES</h2>
            </div>
            <div class="swiss-section-meta">
              07 ENTERPRISE CLIENT DELIVERIES
            </div>
          </div>

          <div class="swiss-projects-blueprint">
            ${projects.map((proj, idx) => `
              <article class="swiss-blueprint-item" data-project-id="${proj.id}">
                <div>
                  <span class="swiss-blueprint-ref">[REF-0${idx + 1} // ${proj.client.toUpperCase()}]</span>
                  <h3 class="swiss-blueprint-title">${proj.title}</h3>
                  <div class="swiss-blueprint-client">${proj.metrics} • ${proj.period}</div>
                  <p class="swiss-blueprint-desc">${proj.tagline}</p>
                </div>

                <div class="swiss-blueprint-footer">
                  <span>CATEGORY: ${proj.category.toUpperCase()}</span>
                  <span>VIEW DETAILS ↗</span>
                </div>
              </article>
            `).join('')}
          </div>
        </section>

        <!-- Section 03: Capability Taxonomy -->
        <section id="swiss-taxonomy" class="swiss-section">
          <div class="swiss-section-header">
            <div>
              <span class="swiss-section-number">[03]</span>
              <h2 class="swiss-section-title">TECHNICAL SKILLS TAXONOMY</h2>
            </div>
            <div class="swiss-section-meta">
              CORE DISCIPLINES
            </div>
          </div>

          <div class="swiss-skills-taxonomy">
            ${skillCategories.map(cat => `
              <div class="swiss-tax-col">
                <h3 class="swiss-tax-header">${cat.category}</h3>
                <ul class="swiss-tax-list">
                  ${cat.skills.map(s => `
                    <li style="border-bottom:1px solid rgba(128,128,128,0.2); padding:0.45rem 0;">
                      <span>${typeof s === 'string' ? s : s.name}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Section 04: Engineering Chronology -->
        <section id="swiss-chronology" class="swiss-section">
          <div class="swiss-section-header">
            <div>
              <span class="swiss-section-number">[04]</span>
              <h2 class="swiss-section-title">WORK EXPERIENCE (2016–2026)</h2>
            </div>
            <div class="swiss-section-meta">
              CHRONOLOGY LOG
            </div>
          </div>

          <div style="padding:3.5rem;">
            ${work.map(job => `
              <div style="border-bottom:1px solid var(--swiss-border); padding:2rem 0; display:grid; grid-template-columns:250px 1fr; gap:2.5rem;">
                <div style="font-family:var(--swiss-font-mono);">
                  <div style="font-size:1.1rem; font-weight:700;">${job.period}</div>
                  <div style="font-size:0.8rem; color:var(--swiss-text-muted);">${job.location}</div>
                </div>
                <div>
                  <h3 style="font-size:1.35rem; font-weight:800; margin-bottom:0.35rem;">${job.company}</h3>
                  <div style="font-family:var(--swiss-font-mono); font-size:0.9rem; margin-bottom:1rem; opacity:0.8;">${job.position}</div>
                  ${job.summary ? `<p style="font-size:0.95rem; line-height:1.7; color:var(--swiss-text-muted); margin-bottom:1rem;">${job.summary}</p>` : ''}
                  ${job.highlights && job.highlights.length > 0 ? `
                    <ul style="padding-left:1.25rem; font-size:0.9rem; line-height:1.7; color:var(--swiss-text-muted); margin-bottom:1rem;">
                      ${job.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              </div>
            `).join('')}

            <!-- Education Entry -->
            <div style="padding:2rem 0; display:grid; grid-template-columns:250px 1fr; gap:2.5rem;">
              <div style="font-family:var(--swiss-font-mono);">
                <div style="font-size:1.1rem; font-weight:700;">Graduated 2015</div>
                <div style="font-size:0.8rem; color:var(--swiss-text-muted);">${education[0].location}</div>
              </div>
              <div>
                <h3 style="font-size:1.35rem; font-weight:800; margin-bottom:0.35rem;">${education[0].institution}</h3>
                <div style="font-family:var(--swiss-font-mono); font-size:0.9rem; margin-bottom:0.5rem; opacity:0.8;">${education[0].degree}</div>
                <p style="font-size:0.95rem; line-height:1.7; color:var(--swiss-text-muted);">${education[0].summary}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 05: Architectural Dispatch -->
        <section id="swiss-dispatch" class="swiss-section" style="border-bottom:none;">
          <div class="swiss-section-header">
            <div>
              <span class="swiss-section-number">[05]</span>
              <h2 class="swiss-section-title">DIRECT INQUIRY & CONTACT</h2>
            </div>
            <div class="swiss-section-meta">
              COMMUNICATION CHANNEL
            </div>
          </div>

          <div class="swiss-contact-grid">
            <div class="swiss-contact-left">
              <h3 style="font-size:2rem; font-weight:800; line-height:1.2; margin-bottom:1.5rem;">
                CONNECT WITH ANILKUMAR JAISWAR
              </h3>
              <p style="font-size:1rem; line-height:1.7; color:var(--swiss-text-muted); margin-bottom:2.5rem;">
                Senior Android Developer with 8+ years of experience in developing, securing, and scaling enterprise-level banking applications.
              </p>

              <div style="font-family:var(--swiss-font-mono); font-size:0.85rem; display:flex; flex-direction:column; gap:1.25rem;">
                <div>
                  <span style="opacity:0.6;">EMAIL:</span>
                  <a href="mailto:${basics.email}" style="color:inherit; font-weight:700; text-decoration:none; margin-left:0.5rem;">${basics.email}</a>
                </div>
                <div>
                  <span style="opacity:0.6;">TELEPHONE:</span>
                  <a href="tel:${basics.phone.replace(/[^0-9+]/g, '')}" style="color:inherit; font-weight:700; text-decoration:none; margin-left:0.5rem;">${basics.phone}</a>
                </div>
                <div>
                  <span style="opacity:0.6;">LOCATION:</span>
                  <span style="margin-left:0.5rem; font-weight:700;">${basics.location.display}</span>
                </div>
              </div>
            </div>

            <div class="swiss-contact-right">
              <form onsubmit="event.preventDefault(); window.appUtils.handleContactSubmit(this);">
                <div>
                  <input type="text" class="swiss-input" required placeholder="NAME // TITLE">
                </div>
                <div>
                  <input type="email" class="swiss-input" required placeholder="EMAIL ADDRESS">
                </div>
                <div>
                  <textarea rows="4" class="swiss-textarea" required placeholder="MESSAGE // PROJECT REQUIREMENTS"></textarea>
                </div>
                <button type="submit" class="swiss-btn-dispatch" style="width:100%;">
                  TRANSMIT MESSAGE →
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;

  // Attach theme-specific event listeners
  container.querySelectorAll('.swiss-blueprint-item').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      const project = projects.find(p => p.id === projId);
      if (project && utils.openProjectModal) {
        utils.playSound('click');
        utils.openProjectModal(project);
      }
    });
  });

  const cvBtn = container.querySelector('#swiss-cv-btn');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      utils.playSound('pop');
      utils.triggerDownloadCV();
    });
  }
}


  // 6. RENDERERS & STYLESHEET REGISTRY (Only 3 Active Themes: Storybook, Biophilic, Swiss)
  const renderers = {
    'theme-a': renderThemeA,
    'theme-d': renderThemeD,
    'theme-e': renderThemeE
  };

  const stylesheets = {
    'theme-a': 'styles/theme-a-maly.css',
    'theme-d': 'styles/theme-d-biophilic.css',
    'theme-e': 'styles/theme-e-swiss.css'
  };

  // 7. THEME & MODE SWITCHING ENGINE
  let isSwitchingTheme = false;

  function updateThemeUI(themeId) {
    const activeThemeObj = portfolioData.themes.find(t => t.id === themeId);
    const labelEl = document.getElementById('theme-active-label');
    const dotEl = document.getElementById('theme-active-dot');
    if (labelEl && activeThemeObj) {
      labelEl.textContent = activeThemeObj.label;
    }
    if (dotEl && activeThemeObj) {
      dotEl.style.background = activeThemeObj.color;
    }

    // Update dropdown selection states
    document.querySelectorAll('.theme-menu-item').forEach(item => {
      const isCurrent = item.getAttribute('data-theme') === themeId;
      item.classList.toggle('is-selected', isCurrent);
    });

    // Close menu if open
    const hub = document.getElementById('theme-compact-hub');
    if (hub) hub.classList.remove('menu-open');
  }

  function switchTheme(newThemeId, isInitial = false) {
    if (!renderers[newThemeId]) return;
    if (!isInitial && (newThemeId === activeThemeId || isSwitchingTheme)) return;

    const curtain = document.getElementById('theme-curtain');
    const appContainer = document.getElementById('theme-app-root');
    const activeThemeObj = portfolioData.themes.find(t => t.id === newThemeId);

    // Initial mount: render immediately without curtain
    if (isInitial) {
      if (newThemeId === 'theme-a' && appContainer && appContainer.querySelector('.theme-a-container')) {
        // Fast hydration: Theme A is already rendered in static HTML for instant FCP/LCP!
        const projects = portfolioData.projects;
        const basics = portfolioData.basics;
        appContainer.querySelectorAll('.maly-project-card').forEach(card => {
          card.addEventListener('click', () => {
            const projId = card.getAttribute('data-project-id');
            const project = projects.find(p => p.id === projId);
            if (project && window.appUtils.openProjectModal) {
              window.appUtils.playSound('click');
              window.appUtils.openProjectModal(project);
            }
          });
        });
        const cvBtn = appContainer.querySelector('#maly-cv-btn');
        if (cvBtn) cvBtn.addEventListener('click', () => { window.appUtils.playSound('pop'); window.appUtils.triggerDownloadCV(); });
        const copyEmailBtn = appContainer.querySelector('#maly-copy-email');
        if (copyEmailBtn) copyEmailBtn.addEventListener('click', () => { window.appUtils.copyToClipboard(basics.email, 'Email copied to clipboard!'); });
        const copyPhoneBtn = appContainer.querySelector('#maly-copy-phone');
        if (copyPhoneBtn) copyPhoneBtn.addEventListener('click', () => { window.appUtils.copyToClipboard(basics.phone, 'Phone number copied to clipboard!'); });
        updateThemeUI(newThemeId);
        return;
      }
      appContainer.innerHTML = '';
      const renderer = renderers[newThemeId];
      renderer(portfolioData, appContainer, window.appUtils);
      updateThemeUI(newThemeId);
      return;
    }

    isSwitchingTheme = true;

    // Update loader text & theme accent color
    const titleEl = document.getElementById('curtain-theme-title');
    const descEl = document.getElementById('curtain-theme-desc');
    const spinnerEl = document.getElementById('curtain-spinner');
    if (titleEl && activeThemeObj) {
      titleEl.textContent = `Loading ${activeThemeObj.label}...`;
    }
    if (descEl && activeThemeObj) {
      descEl.textContent = `${activeThemeObj.name} Spread`;
    }
    if (spinnerEl && activeThemeObj) {
      spinnerEl.style.borderTopColor = activeThemeObj.color;
    }

    // Hide text/html content immediately and display loading curtain
    if (appContainer) appContainer.classList.add('is-switching');
    if (curtain) curtain.classList.add('is-active');

    setTimeout(() => {
      // Clear and render new theme into the hidden container
      appContainer.innerHTML = '';
      const renderer = renderers[newThemeId];
      renderer(portfolioData, appContainer, window.appUtils);

      updateThemeUI(newThemeId);
      activeThemeId = newThemeId;
      localStorage.setItem('anil_portfolio_theme', newThemeId);

      playSound('switch');
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Guarantee browser computes styles and paints before lifting curtain
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            if (appContainer) appContainer.classList.remove('is-switching');
            if (curtain) curtain.classList.remove('is-active');
            setTimeout(() => {
              isSwitchingTheme = false;
            }, 180);
          }, 90);
        });
      });
    }, 130);
  }

  function toggleThemeMode() {
    activeThemeMode = activeThemeMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('anil_portfolio_mode', activeThemeMode);

    document.documentElement.setAttribute('data-theme-mode', activeThemeMode);
    document.body.setAttribute('data-theme-mode', activeThemeMode);

    const container = document.querySelector('[data-mode]');
    if (container) {
      container.setAttribute('data-mode', activeThemeMode);
    }

    updateModeButtonUI();
    playSound('mode');
    showToast(`${activeThemeMode === 'dark' ? 'ðŸŒ™ Dark Mode' : 'â˜€ï¸ Light Mode'} Activated`);
  }

  function updateModeButtonUI() {
    const btn = document.getElementById('mode-toggle-btn');
    if (!btn) return;
    if (activeThemeMode === 'dark') {
      btn.innerHTML = String.fromCodePoint(0x2600);
      btn.title = "Switch to Light Mode (Key: D)";
    } else {
      btn.innerHTML = String.fromCodePoint(0x1F319);
      btn.title = "Switch to Dark Mode (Key: D)";
    }
  }

  // 8. BOOTSTRAP APP
  function initApp() {
    const modalBackdrop = document.getElementById('project-modal');
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeProjectModal();
      });
    }

    // Dropdown toggle
    const hub = document.getElementById('theme-compact-hub');
    const trigger = document.getElementById('theme-dropdown-trigger');
    if (trigger && hub) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        hub.classList.toggle('menu-open');
      });
    }

    // Dropdown item selection
    document.querySelectorAll('.theme-menu-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = item.getAttribute('data-theme');
        if (target && target !== activeThemeId) {
          switchTheme(target);
        } else if (hub) {
          hub.classList.remove('menu-open');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (hub && !hub.contains(e.target)) {
        hub.classList.remove('menu-open');
      }
    });

    // Mode Toggle
    const modeBtn = document.getElementById('mode-toggle-btn');
    if (modeBtn) {
      modeBtn.addEventListener('click', toggleThemeMode);
      updateModeButtonUI();
    }

    // Sound Toggle
    const soundBtn = document.getElementById('hud-sound-toggle');
    if (soundBtn) {
      soundBtn.classList.toggle('active', isSoundEnabled);
      soundBtn.addEventListener('click', () => {
        isSoundEnabled = !isSoundEnabled;
        localStorage.setItem('anil_portfolio_sound', isSoundEnabled.toString());
        soundBtn.classList.toggle('active', isSoundEnabled);
        showToast(isSoundEnabled ? 'ðŸ”Š Sound effects on' : 'ðŸ”‡ Sound effects muted');
        if (isSoundEnabled) playSound('pop');
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'Escape') {
        closeProjectModal();
        if (hub) hub.classList.remove('menu-open');
        return;
      }
      if (['1', '2', '3'].includes(e.key)) {
        const themeKeys = ['theme-a', 'theme-d', 'theme-e'];
        const targetIdx = parseInt(e.key, 10) - 1;
        if (themeKeys[targetIdx]) switchTheme(themeKeys[targetIdx]);
      }
      if (e.key.toLowerCase() === 't') {
        const themeKeys = ['theme-a', 'theme-d', 'theme-e'];
        const currentIdx = themeKeys.indexOf(activeThemeId);
        const nextIdx = (currentIdx + 1) % themeKeys.length;
        switchTheme(themeKeys[nextIdx]);
      }
      if (e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'm') {
        toggleThemeMode();
      }
    });

    // Initial Mount
    switchTheme(activeThemeId, true);

    if (paramModal) {
      const targetProj = portfolioData.projects.find(p => p.id === paramModal);
      if (targetProj) {
        setTimeout(() => { openProjectModal(targetProj); }, 220);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();