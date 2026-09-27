// ==========================================
// TNSE Electrical Projects - Main Site Script
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuButton && mobileNav) {
    mobileMenuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
      if (mobileNav.classList.contains('hidden')) {
        menuIcon.textContent = 'menu';
      } else {
        menuIcon.textContent = 'close';
      }
    });
  }

  // 2. Theme Toggle (Syncs both #themeToggle & #mobileThemeToggle & [data-theme])
  const root = document.documentElement;
  const saved = localStorage.getItem('tnse-theme');

  // Set initial state based on storage
  if (saved === 'light') {
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
  }

  const handleThemeToggle = () => {
    root.classList.toggle('dark');
    localStorage.setItem('tnse-theme', root.classList.contains('dark') ? 'dark' : 'light');
  };

  // Bind to explicit data-theme buttons, #themeToggle, and #mobileThemeToggle
  document.querySelectorAll('[data-theme]').forEach(b => b.addEventListener('click', handleThemeToggle));
  const desktopThemeBtn = document.getElementById('themeToggle');
  const mobileThemeBtn = document.getElementById('mobileThemeToggle');
  if (desktopThemeBtn) desktopThemeBtn.addEventListener('click', handleThemeToggle);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', handleThemeToggle);

  // 3. Custom Mobile Toggles
  document.querySelectorAll('[data-mobile-toggle]').forEach(b => 
    b.addEventListener('click', () => {
      document.getElementById(b.dataset.mobileToggle)?.classList.toggle('open');
    })
  );

  // 4. FAQ Accordions
  document.querySelectorAll('[data-faq]').forEach(b => 
    b.addEventListener('click', () => {
      const a = b.nextElementSibling;
      if (a) {
        a.classList.toggle('hidden');
        b.querySelector('[data-icon]')?.classList.toggle('rotate-45');
      }
    })
  );

  // 5. Scroll Reveal Animation
  const obs = new IntersectionObserver(es => 
    es.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }), 
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(e => obs.observe(e));

  // 6. Back to Top Button
  const topBtn = document.querySelector('#backTop');
  window.addEventListener('scroll', () => {
    if (topBtn) {
      topBtn.classList.toggle('hidden', window.scrollY < 500);
    }
  });
  topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 7. Dynamic Year Updater
  document.querySelectorAll('[data-year]').forEach(e => e.textContent = new Date().getFullYear());

  // 8. Contact / Quote Form Handler
  document.querySelectorAll('form[data-contact]').forEach(f => 
    f.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(f);
      const subject = encodeURIComponent('TNSE Website Quote Request');
      const body = encodeURIComponent([...d.entries()].map(x => `${x[0]}: ${x[1]}`).join('\n'));
      location.href = `mailto:tnse.electricalprojects@gmail.com?subject=${subject}&body=${body}`;
    })
  );

});

// 9. Mobile Navigation Accordion Toggle (Global Scope for inline onclick)
window.toggleAccordion = function(id, button) {
  const content = document.getElementById(id);
  const icon = button.querySelector('.material-symbols-outlined:last-child');
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
};
