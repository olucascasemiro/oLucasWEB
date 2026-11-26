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
  initRoiCalculator();
  initLeadForm();
  initPrivacyModal();
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
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
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
      threshold: 0.3,
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

      question.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('open', !isExpanded);
      item.classList.toggle('open', !isExpanded);
    });
  });
}

/* ==========================================================================
   06. ROI / LOST REVENUE CALCULATOR
   ========================================================================== */
function initRoiCalculator() {
  const leadsInput = document.getElementById('calc-leads');
  const ticketInput = document.getElementById('calc-ticket');
  const leadsVal = document.getElementById('calc-leads-val');
  const ticketVal = document.getElementById('calc-ticket-val');
  const lostPatientsEl = document.getElementById('calc-lost-patients');
  const lostMoneyEl = document.getElementById('calc-lost-money');

  if (!leadsInput || !ticketInput) return;

  const updateCalc = () => {
    const leads = parseInt(leadsInput.value, 10) || 200;
    const ticket = parseInt(ticketInput.value, 10) || 300;
    const lostPatients = Math.round(leads * 0.3);
    const lostRevenue = lostPatients * ticket;

    leadsVal.textContent = `${leads} contatos`;
    ticketVal.textContent = `R$ ${ticket.toLocaleString('pt-BR')}`;
    lostPatientsEl.textContent = `${lostPatients} pacientes/mês`;
    lostMoneyEl.innerHTML = `R$ ${lostRevenue.toLocaleString('pt-BR')}<span>/mês</span>`;
  };

  leadsInput.addEventListener('input', updateCalc);
  ticketInput.addEventListener('input', updateCalc);
  updateCalc();
}

/* ==========================================================================
   07. LEAD QUALIFICATION FORM -> WHATSAPP
   ========================================================================== */
function initLeadForm() {
  const form = document.getElementById('lead-qualify-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('lead-name').value.trim();
    const clinic = document.getElementById('lead-clinic').value.trim();
    const specialty = document.getElementById('lead-specialty').value;
    const volume = document.getElementById('lead-volume').value;

    const text = `Oi Lucas, vim pelo site da CONVERT IA e quero agendar meu diagnóstico gratuito de 20 min.\n\n*Nome:* ${name}\n*Clínica:* ${clinic}\n*Especialidade:* ${specialty}\n*Volume:* ${volume} mensagens/mês`;
    const url = `https://wa.me/5511915735039?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}

/* ==========================================================================
   08. PRIVACY & LGPD MODAL
   ========================================================================== */
function initPrivacyModal() {
  const modal = document.getElementById('privacy-modal');
  const openBtn = document.getElementById('open-privacy-modal');
  const closeBtn = document.getElementById('close-privacy-modal');
  const backdrop = document.getElementById('privacy-backdrop');

  if (!modal || !openBtn) return;

  const openModal = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
}
