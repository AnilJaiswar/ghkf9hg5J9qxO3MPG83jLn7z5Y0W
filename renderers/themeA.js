// Theme A: Editorial Storybook Renderer (Artistic Illustrated Chapter Spreads)
// Inspired by Reference Image 1 (Editorial papyrus layout with 100% genuine content)

export function renderThemeA(data, container, utils) {
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
                       srcset="assets/images/theme_a_portrait_380.webp 380w, assets/images/theme_a_portrait_534.webp 534w, assets/images/theme_a_portrait.webp 640w"
                       sizes="(max-width: 768px) 280px, 310px"
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
                  <h3>${job.company}</h3>
                  <h4>${job.position}</h4>
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
                <h3>${education[0].institution}</h3>
                <h4>${education[0].degree}</h4>
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
