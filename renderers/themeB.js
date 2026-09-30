// Theme B: Spatial Glass Renderer (Futuristic Liquid Glassmorphism UI)
// 100% genuine user content with spatial frosted glass aesthetics

export function renderThemeB(data, container, utils) {
  const { basics, work, projects, skillCategories, education } = data;

  container.innerHTML = `
    <div class="theme-b-container" data-mode="${document.documentElement.getAttribute('data-theme-mode') || 'light'}">
      <!-- Ambient Glowing Orbs -->
      <div class="glass-ambient-bubble" style="top:10%; left:5%; width:450px; height:450px; background:rgba(99,102,241,0.18);"></div>
      <div class="glass-ambient-bubble" style="top:40%; right:5%; width:500px; height:500px; background:rgba(217,70,239,0.15); animation-duration:16s;"></div>
      <div class="glass-ambient-bubble" style="bottom:15%; left:15%; width:400px; height:400px; background:rgba(56,189,248,0.14); animation-duration:14s;"></div>

      <!-- Floating Glass Top Navigation Bar -->
      <header class="glass-header-nav">
        <nav class="glass-nav-pill">
          <div class="glass-nav-brand">
            <div class="glass-brand-badge">AJ</div>
            <div>
              <span class="glass-brand-text">${basics.shortName}</span>
              <span class="glass-brand-role">Sr. Android Developer</span>
            </div>
          </div>

          <ul class="glass-nav-links">
            <li class="glass-nav-item active"><a href="#glass-hero">Overview</a></li>
            <li class="glass-nav-item"><a href="#glass-about">Summary</a></li>
            <li class="glass-nav-item"><a href="#glass-services">Expertise</a></li>
            <li class="glass-nav-item"><a href="#glass-work">Banking Projects</a></li>
            <li class="glass-nav-item"><a href="#glass-timeline">Experience</a></li>
            <li class="glass-nav-item"><a href="#glass-contact">Contact</a></li>
          </ul>

          <a href="#glass-contact" class="glass-nav-cta">
            <span>Get in Touch</span> ↗
          </a>
        </nav>
      </header>

      <!-- Spatial Hero Section -->
      <main>
        <section id="glass-hero" class="glass-hero-section">
          <div class="glass-hero-grid">
            <div class="glass-hero-copy">
              <div class="glass-hero-badge">
                <span>✦ SENIOR ANDROID DEVELOPER</span>
              </div>
              <h1 class="glass-hero-name">${basics.name}</h1>
              <h2 class="glass-hero-subtitle">8+ Years | Banking & Fintech Specialist</h2>
              <p class="glass-hero-desc">
                ${basics.summary}
              </p>

              <div class="glass-hero-actions">
                <a href="#glass-work" class="glass-btn-primary">
                  <span>View Banking Projects</span> ↗
                </a>
                <button id="glass-cv-btn" class="glass-btn-secondary">
                  <span>Download Resume</span> ↓
                </button>
              </div>

              <!-- Trusted Banks Strip -->
              <div class="glass-trusted-bar">
                <span class="glass-trusted-label">Top Banking Clients Handled</span>
                <div class="glass-bank-badges">
                  <span class="glass-bank-pill">HDFC Bank</span>
                  <span class="glass-bank-pill">IndusInd Bank</span>
                  <span class="glass-bank-pill">IDBI Bank</span>
                  <span class="glass-bank-pill">Kotak Mahindra Bank</span>
                  <span class="glass-bank-pill">Bajaj Finserv</span>
                  <span class="glass-bank-pill">Snapwork Technologies</span>
                </div>
              </div>
            </div>

            <!-- Spatial 3D Hero Visual Card -->
            <div class="glass-hero-visual">
              <div class="glass-visual-frame">
                <img src="assets/images/theme_b_portrait.jpg" alt="${basics.name}" class="glass-portrait-img">
                
                <div class="glass-satellite-card top-right">
                  <div>
                    <div class="glass-satellite-value">8+</div>
                    <div class="glass-satellite-label">Years (2016–2026)</div>
                  </div>
                </div>

                <div class="glass-satellite-card bottom-left">
                  <span style="font-size:1.5rem;">⚡</span>
                  <div>
                    <div class="glass-satellite-value">100M+</div>
                    <div class="glass-satellite-label">Installs Touched</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Summary & Scale Metrics -->
        <section id="glass-about" class="glass-section">
          <div class="glass-card-container">
            <div class="glass-section-header">
              <span class="glass-section-subtitle">BACKGROUND & SCALE</span>
              <h2 class="glass-section-title">Technical Decision-Making & Banking Engineering</h2>
            </div>
            
            <p style="font-size:1.05rem; line-height:1.8; color:var(--glass-text-muted); margin-bottom:2.5rem; max-width:920px;">
              Currently working at Snapwork Technologies Pvt. Ltd. as a Senior Android Developer, handling projects for top banking clients like HDFC Bank, IndusInd Bank, IDBI Bank, Kotak Mahindra Bank, Bajaj Finserv, ICICI Bank, and others. Strong experience in technical decision-making, designing complex system architectures, and leading cross-functional teams to deliver high-quality banking solutions.
            </p>

            <div class="glass-metrics-grid">
              ${basics.stats.map(s => `
                <div class="glass-metric-cell">
                  <div class="glass-metric-num">${s.value}</div>
                  <div class="glass-metric-label">${s.label}</div>
                  <div class="glass-metric-detail">${s.detail}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Core Competencies -->
        <section id="glass-services" class="glass-section">
          <div class="glass-section-header">
            <span class="glass-section-subtitle">CORE COMPETENCIES</span>
            <h2 class="glass-section-title">Technical Domains & Specialized Capabilities</h2>
          </div>

          <div class="glass-services-grid">
            ${skillCategories.map(cat => `
              <div class="glass-service-card">
                <div>
                  <div class="glass-service-icon">
                    ${cat.icon === 'shield' ? '🛡️' : cat.icon === 'android' ? '📱' : cat.icon === 'cpu' ? '🔌' : '⚡'}
                  </div>
                  <h3 class="glass-service-title">${cat.category}</h3>
                  <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.75rem;">
                    ${cat.skills.map(s => `
                      <span class="glass-tag" style="font-size:0.75rem;">${s.name}</span>
                    `).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Selected Work Glass Showcase -->
        <section id="glass-work" class="glass-section">
          <div class="glass-section-header">
            <span class="glass-section-subtitle">BANKING APPLICATIONS</span>
            <h2 class="glass-section-title">Enterprise Projects & Client Deliveries</h2>
          </div>

          <div class="glass-projects-grid">
            ${projects.map(proj => `
              <article class="glass-project-card" data-project-id="${proj.id}">
                <div class="glass-project-header">
                  <span class="glass-project-client">${proj.client}</span>
                  <span class="glass-project-badge">${proj.metrics}</span>
                </div>
                <h3 class="glass-project-title">${proj.title}</h3>
                <p class="glass-project-desc">${proj.tagline}</p>
                <div class="glass-project-tags">
                  ${proj.tags.slice(0, 4).map(t => `<span class="glass-tag">${t}</span>`).join('')}
                </div>
                <div class="glass-project-footer">
                  <span>View Project Details</span>
                  <span>↗</span>
                </div>
              </article>
            `).join('')}
          </div>
        </section>

        <!-- Professional Timeline -->
        <section id="glass-timeline" class="glass-section">
          <div class="glass-section-header">
            <span class="glass-section-subtitle">CAREER MILESTONES</span>
            <h2 class="glass-section-title">Work Experience (2016–2026)</h2>
          </div>

          <div class="glass-timeline">
            ${work.map(job => `
              <div class="glass-timeline-card">
                <div class="glass-timeline-header">
                  <div>
                    <h3 class="glass-timeline-company">${job.company}</h3>
                    <div class="glass-timeline-role">${job.position} • ${job.location}</div>
                  </div>
                  <span class="glass-timeline-date">${job.period}</span>
                </div>
                ${job.summary ? `
                  <p style="font-size:0.95rem; line-height:1.7; color:var(--glass-text-muted); margin-bottom:1rem;">
                    ${job.summary}
                  </p>
                ` : ''}
                ${job.highlights && job.highlights.length > 0 ? `
                  <ul style="padding-left:1.25rem; font-size:0.88rem; line-height:1.7; color:var(--glass-text-muted); margin-bottom:1rem;">
                    ${job.highlights.map(h => `<li>${h}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}

            <div class="glass-timeline-card">
              <div class="glass-timeline-header">
                <div>
                  <h3 class="glass-timeline-company">${education[0].institution}</h3>
                  <div class="glass-timeline-role">${education[0].degree} • ${education[0].location}</div>
                </div>
                <span class="glass-timeline-date">Graduated 2015</span>
              </div>
              <p style="font-size:0.95rem; line-height:1.7; color:var(--glass-text-muted);">
                ${education[0].summary}
              </p>
            </div>
          </div>
        </section>

        <!-- Spatial Connect Glass Card -->
        <section id="glass-contact" class="glass-section">
          <div class="glass-contact-box">
            <div>
              <span class="glass-section-subtitle">LET'S CONNECT</span>
              <h2 style="font-size:2.5rem; font-weight:800; line-height:1.2; margin-bottom:1.5rem; color:var(--glass-text-dark);">
                Get in Touch with Anilkumar Jaiswar
              </h2>
              <p style="font-size:1.05rem; line-height:1.7; color:var(--glass-text-muted); margin-bottom:2rem;">
                Senior Android Developer with 8+ years of experience in developing, securing, and scaling enterprise-level Android applications.
              </p>

              <div style="display:flex; flex-direction:column; gap:1rem;">
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:1rem; font-weight:700;">
                  <span>✉️</span>
                  <a href="mailto:${basics.email}" style="color:var(--glass-accent-primary); text-decoration:none;">${basics.email}</a>
                </div>
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:1rem; font-weight:700;">
                  <span>📞</span>
                  <a href="tel:${basics.phone.replace(/[^0-9+]/g, '')}" style="color:inherit; text-decoration:none;">${basics.phone}</a>
                </div>
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:1rem; color:var(--glass-text-muted);">
                  <span>📍</span>
                  <span>${basics.location.display}</span>
                </div>
              </div>
            </div>

            <div>
              <form id="glass-contact-form" onsubmit="event.preventDefault(); window.appUtils.handleContactSubmit(this);">
                <div style="margin-bottom:1.25rem;">
                  <input type="text" class="glass-input" required placeholder="Your Name">
                </div>
                <div style="margin-bottom:1.25rem;">
                  <input type="email" class="glass-input" required placeholder="Work Email">
                </div>
                <div style="margin-bottom:1.25rem;">
                  <input type="text" class="glass-input" placeholder="Organization / Institution">
                </div>
                <div style="margin-bottom:1.5rem;">
                  <textarea rows="4" class="glass-textarea" required placeholder="Your message..."></textarea>
                </div>
                <button type="submit" class="glass-btn-primary" style="width:100%; justify-content:center;">
                  <span>Send Message</span> 📨
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;

  // Attach theme-specific event listeners
  container.querySelectorAll('.glass-project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      const project = projects.find(p => p.id === projId);
      if (project && utils.openProjectModal) {
        utils.playSound('click');
        utils.openProjectModal(project);
      }
    });
  });

  const cvBtn = container.querySelector('#glass-cv-btn');
  if (cvBtn) cvBtn.addEventListener('click', () => { utils.playSound('pop'); utils.triggerDownloadCV(); });
}
