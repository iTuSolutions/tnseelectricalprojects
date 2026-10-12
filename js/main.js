// ==========================================
// 1. TNSE Electrical Projects - Main Site Script
// ==========================================

// Global helper for mobile accordions (referenced in inline onclick attributes)
window.toggleAccordion = function (id, button) {
  const content = document.getElementById(id);
  if (!content) return;

  const isHidden = content.classList.contains('hidden');
  const mobileNav = document.getElementById('mobileNav');

  // Close other open accordions in the mobile menu
  if (mobileNav) {
    mobileNav.querySelectorAll('[id$="Accordion"]').forEach(el => {
      if (el.id !== id) {
        el.classList.add('hidden');
      }
    });
    mobileNav.querySelectorAll('button[onclick^="toggleAccordion"]').forEach(btn => {
      if (btn !== button) {
        const btnIcon = btn.querySelector('.material-symbols-outlined:last-child');
        if (btnIcon) btnIcon.style.transform = 'rotate(0deg)';
      }
    });
  }

  const icon = button.querySelector('.material-symbols-outlined:last-child');

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuButton && mobileNav && menuIcon) {
    mobileMenuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
      if (mobileNav.classList.contains('hidden')) {
        menuIcon.textContent = 'menu';
      } else {
        menuIcon.textContent = 'close';
      }
    });
  }

  // Theme Toggle (Syncs both #themeToggle & #mobileThemeToggle)
  const root = document.documentElement;
  const saved = localStorage.getItem('tnse-theme');

  if (saved === 'light') {
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
  }

  const handleThemeToggle = () => {
    root.classList.toggle('dark');
    localStorage.setItem('tnse-theme', root.classList.contains('dark') ? 'dark' : 'light');
  };

  document.querySelectorAll('[data-theme]').forEach(b => b.addEventListener('click', handleThemeToggle));
  const desktopThemeBtn = document.getElementById('themeToggle');
  const mobileThemeBtn = document.getElementById('mobileThemeToggle');
  if (desktopThemeBtn) desktopThemeBtn.addEventListener('click', handleThemeToggle);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', handleThemeToggle);

  // Custom Mobile Toggles
  document.querySelectorAll('[data-mobile-toggle]').forEach(b => 
    b.addEventListener('click', () => {
      const target = document.getElementById(b.dataset.mobileToggle);
      if (target) target.classList.toggle('open');
    })
  );

  // FAQ Accordions
  document.querySelectorAll('[data-faq]').forEach(b => 
    b.addEventListener('click', () => {
      const a = b.nextElementSibling;
      if (a) {
        a.classList.toggle('hidden');
        const icon = b.querySelector('[data-icon]');
        if (icon) icon.classList.toggle('rotate-45');
      }
    })
  );

  // Scroll Reveal Animation
  const obs = new IntersectionObserver(es => 
    es.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }), 
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(e => obs.observe(e));

  // Back to Top Button
  const topBtn = document.querySelector('#backTop');
  window.addEventListener('scroll', () => {
    if (topBtn) {
      topBtn.classList.toggle('hidden', window.scrollY < 500);
    }
  });
  topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Dynamic Year Updater
  document.querySelectorAll('[data-year]').forEach(e => e.textContent = new Date().getFullYear());

  // Contact / Quote Form Handler
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

// ==========================================
// 2. Image Carousel Script
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    let CarouselImages = [
    "https://www.tnse.co.za/images/hero/tnse (1).jpg",
    "https://www.tnse.co.za/images/hero/tnse (2).jpg",
    "https://www.tnse.co.za/images/hero/tnse (3).jpg",
    "https://www.tnse.co.za/images/hero/tnse (4).jpg",
    "https://www.tnse.co.za/images/hero/tnse (5).jpg",
    "https://www.tnse.co.za/images/hero/tnse (6).jpg",
    "https://www.tnse.co.za/images/hero/tnse (7).jpg",
    "https://www.tnse.co.za/images/hero/tnse (8).jpg",
    "https://www.tnse.co.za/images/hero/tnse (9).jpg",
    "https://www.tnse.co.za/images/hero/tnse (10).jpg",
    "https://www.tnse.co.za/images/hero/tnse (11).jpg",
    "https://www.tnse.co.za/images/hero/tnse (12).jpg",
    "https://www.tnse.co.za/images/hero/tnse (13).jpg",
    "https://www.tnse.co.za/images/hero/tnse (14).jpg",
    "https://www.tnse.co.za/images/hero/tnse (15).jpg",
    "https://www.tnse.co.za/images/hero/tnse (16).jpg",
    "https://www.tnse.co.za/images/hero/tnse (17).jpg",
    "https://www.tnse.co.za/images/hero/tnse (18).jpg",
    "https://www.tnse.co.za/images/hero/tnse (19).jpg",
    "https://www.tnse.co.za/images/hero/tnse (20).jpg",
    "https://www.tnse.co.za/images/hero/tnse (21).jpg",
    "https://www.tnse.co.za/images/hero/tnse (22).jpg",
    "https://www.tnse.co.za/images/hero/tnse (23).jpg",
    "https://www.tnse.co.za/images/hero/tnse (24).jpg",
    "https://www.tnse.co.za/images/hero/tnse (25).jpg",
    "https://www.tnse.co.za/images/hero/tnse (26).jpg",
    "https://www.tnse.co.za/images/hero/tnse (27).jpg",
    "https://www.tnse.co.za/images/hero/tnse (28).jpg",
    "https://www.tnse.co.za/images/hero/tnse (29).jpg",
    "https://www.tnse.co.za/images/hero/tnse (30).jpg"
];
    // Shuffle array randomly
    for (let i = CarouselImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [CarouselImages[i], CarouselImages[j]] = [CarouselImages[j], CarouselImages[i]];
    }

    const carouselContainer = document.getElementById("heroCarousel");
    if (!carouselContainer) return;

    CarouselImages.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `TNSE Electrical Project Background ${index + 1}`;
        img.className = `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        carouselContainer.appendChild(img);
    });

    let currentIndex = 0;
    const slides = carouselContainer.querySelectorAll("img");
    if (slides.length === 0) return;

    setInterval(() => {
        slides[currentIndex].classList.remove("opacity-100");
        slides[currentIndex].classList.add("opacity-0");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.remove("opacity-0");
        slides[currentIndex].classList.add("opacity-100");
    }, 4500);
});

















// ==========================================
// Section Parallax Background Script (Picsum)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const bgImg = document.getElementById("parallaxBg");
    if (bgImg) {
        // Generates a random Picsum ID between 10 and 100 on every page load
        const randomId = Math.floor(Math.random() * 90) + 10;
        bgImg.src = `https://picsum.photos/id/${randomId}/1920/1080`;
    }
});
