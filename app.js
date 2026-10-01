// Main Application Orchestrator & Theme Switcher Engine
// Complete independence for all 5 themes

import { portfolioData } from './data.js';
import { renderThemeA } from './renderers/themeA.js';
import { renderThemeD } from './renderers/themeD.js';
import { renderThemeE } from './renderers/themeE.js';

// Renderer Registry (Only 3 active themes: Storybook, Biophilic, Swiss)
const themeRenderers = {
  'theme-a': renderThemeA,
  'theme-d': renderThemeD,
  'theme-e': renderThemeE
};

// Theme Stylesheet Map
const themeStylesheets = {
  'theme-a': 'styles/theme-a-maly.css',
  'theme-d': 'styles/theme-d-biophilic.css',
  'theme-e': 'styles/theme-e-swiss.css'
};

// State
let activeThemeId = localStorage.getItem('anil_portfolio_theme') || 'theme-a';
let isSoundEnabled = localStorage.getItem('anil_portfolio_sound') === 'true';

// Web Audio API Synthesizer
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSynthesizedSound(type = 'click') {
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
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'switch') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.12);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(960, now + 0.08);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    console.warn('Audio playback error:', e);
  }
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('is-visible');

  playSynthesizedSound('pop');

  setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3200);
}

// Clipboard Helper
function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
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
    showToast(successMsg);
  } catch (e) {
    showToast('Press Ctrl+C to copy: ' + text);
  }
  document.body.removeChild(tempInput);
}

// Project Modal Controller
function openProjectModal(project) {
  const backdrop = document.getElementById('project-modal');
  const content = document.getElementById('modal-body-content');
  if (!backdrop || !content) return;

  // Apply active theme class to modal so it follows the current theme styling
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
      <span>🛡️ Highlights & Technical Delivery</span>
    </div>
    <ul class="modal-highlights-list">
      ${project.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>

    <div class="modal-section-title">
      <span>⚙️ Skills & Technologies Used</span>
    </div>
    <div class="modal-tags-container">
      ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
    </div>

    <div class="modal-action-row">
      ${project.url ? `
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="modal-link-btn">
          <span>View on Google Play</span> ↗
        </a>
      ` : `
        <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Enterprise Bank Staff App (Restricted Access)</span>
      `}
      <button class="modal-close-btn" style="position:static; width:auto; height:auto; padding:0.6rem 1.25rem; border-radius:10px; font-size:0.85rem;" onclick="window.appUtils.closeProjectModal()">
        Close Dossier
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

// Shared Utilities Object
const appUtils = {
  openProjectModal,
  closeProjectModal,
  copyToClipboard,
  triggerDownloadCV,
  handleContactSubmit,
  playSound: playSynthesizedSound,
  showToast
};
window.appUtils = appUtils;

// Theme Switcher Switch Function
let isSwitchingTheme = false;

function switchTheme(newThemeId, isInitial = false) {
  if (!themeRenderers[newThemeId]) return;
  if (!isInitial && (newThemeId === activeThemeId || isSwitchingTheme)) return;

  const curtain = document.getElementById('theme-curtain');
  const appContainer = document.getElementById('theme-app-root');
  const activeThemeObj = portfolioData.themes.find(t => t.id === newThemeId);

  // Initial mount: render immediately
  if (isInitial) {
    appContainer.innerHTML = '';
    const renderer = themeRenderers[newThemeId];
    renderer(portfolioData, appContainer, appUtils);
    return;
  }

  isSwitchingTheme = true;

  // Update loader text & spinner color
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

  // Instantly hide content and show loading curtain
  if (appContainer) appContainer.classList.add('is-switching');
  if (curtain) curtain.classList.add('is-active');

  setTimeout(() => {
    appContainer.innerHTML = '';
    const renderer = themeRenderers[newThemeId];
    renderer(portfolioData, appContainer, appUtils);

    activeThemeId = newThemeId;
    localStorage.setItem('anil_portfolio_theme', newThemeId);

    playSynthesizedSound('switch');
    window.scrollTo({ top: 0, behavior: 'instant' });

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

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Modal backdrop click to close
  const modalBackdrop = document.getElementById('project-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  // Keyboard shortcut listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      return;
    }
    // Number keys 1 - 3 to switch themes
    if (['1', '2', '3'].includes(e.key) && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      const themeKeys = ['theme-a', 'theme-d', 'theme-e'];
      const targetIndex = parseInt(e.key, 10) - 1;
      if (themeKeys[targetIndex]) {
        switchTheme(themeKeys[targetIndex]);
      }
    }
    // 't' key to cycle theme
    if (e.key.toLowerCase() === 't' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      const themeKeys = ['theme-a', 'theme-d', 'theme-e'];
      const currentIndex = themeKeys.indexOf(activeThemeId);
      const nextIndex = (currentIndex + 1) % themeKeys.length;
      switchTheme(themeKeys[nextIndex]);
    }
  });

  // Sound toggle button in HUD
  const soundBtn = document.getElementById('hud-sound-toggle');
  if (soundBtn) {
    soundBtn.classList.toggle('is-active', isSoundEnabled);
    soundBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem('anil_portfolio_sound', isSoundEnabled.toString());
      soundBtn.classList.toggle('is-active', isSoundEnabled);
      showToast(isSoundEnabled ? '🔊 Sound effects enabled' : '🔇 Sound effects muted');
      if (isSoundEnabled) {
        playSynthesizedSound('pop');
      }
    });
  }

  // Theme Pill Click Listeners
  document.querySelectorAll('.theme-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.getAttribute('data-theme');
      if (targetTheme && targetTheme !== activeThemeId) {
        switchTheme(targetTheme);
      }
    });
  });

  // Initial Mount
  switchTheme(activeThemeId, true);
});
