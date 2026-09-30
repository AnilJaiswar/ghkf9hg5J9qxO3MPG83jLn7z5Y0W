// Theme D: Biophilic Flow Renderer (Organic Nature Waves & Story)
// 100% genuine user content with warm organic flowing curves

export function renderThemeD(data, container, utils) {
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
                <img src="assets/images/theme_d_landscape.jpg" alt="Illustrated portrait of Anilkumar Jaiswar developing mobile apps">
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
