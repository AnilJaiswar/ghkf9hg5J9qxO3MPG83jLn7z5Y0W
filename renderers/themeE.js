// Theme E: Swiss Architectural Renderer (Minimalist Monograph & Blueprint Grid)
// 100% genuine user content with strict Swiss modernist grid aesthetics

export function renderThemeE(data, container, utils) {
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
              <img src="assets/images/theme_e_architecture.jpg" alt="Minimalist Architectural Facade" class="swiss-architecture-img">
              
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
