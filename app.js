/**
 * CONVERT IA — Core Scripts
 * Minimalist, high performance, zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initNavSpy();
  initFaqAccordion();
  initMethodologyAnimation();
  initHeroChatSimulation();
});

/* ==========================================================================
   01. HEADER SCROLL STATE
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   02. MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-nav');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!btn || !menu) return;

  const toggle = () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
  };

  btn.addEventListener('click', toggle);

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ==========================================================================
   03. SCROLL REVEAL (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   04. ACTIVE NAV SPY
   ========================================================================== */
function initNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: '-80px 0px -50% 0px'
    }
  );

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   05. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';

      // Close all other items for a clean single-open behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherQ = otherItem.querySelector('.faq-question');
          const otherA = otherItem.querySelector('.faq-answer');
          if (otherQ && otherA) {
            otherQ.setAttribute('aria-expanded', 'false');
            otherA.classList.remove('open');
            otherItem.classList.remove('open');
          }
        }
      });

      // Toggle current item
      question.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('open', !isExpanded);
      item.classList.toggle('open', !isExpanded);
    });
  });
}

/* ==========================================================================
   06. METHODOLOGY TRACK ANIMATION
   ========================================================================== */
function initMethodologyAnimation() {
  const track = document.querySelector('.steps-track');
  if (!track) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          track.classList.add('animated');
          observer.unobserve(track);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(track);
}

/* ==========================================================================
   07. HERO CHAT SIMULATION (Subtle periodic typing loop)
   ========================================================================== */
function initHeroChatSimulation() {
  const chatMock = document.querySelector('.chat-mock');
  if (!chatMock) return;

  const msgs = chatMock.querySelectorAll('.chat-msg');
  const chip = chatMock.querySelector('.chat-status-chip');
  if (!msgs.length) return;

  let step = 0;
  function cycleSimulation() {
    msgs.forEach((m, idx) => {
      m.style.opacity = '1';
      m.style.transform = 'translateY(0)';
    });

    if (chip) {
      chip.style.opacity = '1';
    }
  }

  cycleSimulation();
}
