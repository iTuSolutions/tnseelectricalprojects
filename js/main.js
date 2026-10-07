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

// 9. Exclusive Mobile Navigation Accordion Toggle
window.toggleAccordion = function(id, button) {
  const content = document.getElementById(id);
  const isHidden = content.classList.contains('hidden');

  const mobileNav = document.getElementById('mobileNav');
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


// ==========================================
// 10. Hero Background Carousel Script
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    let imageArray = [
        "/tnseelectricalprojects/images/hero/tnse (1).jpg",
        "/tnseelectricalprojects/images/hero/tnse (2).jpg",
        "/tnseelectricalprojects/images/hero/tnse (3).jpg",
        "/tnseelectricalprojects/images/hero/tnse (4).jpg",
        "/tnseelectricalprojects/images/hero/tnse (5).jpg",
        "/tnseelectricalprojects/images/hero/tnse (6).jpg",
        "/tnseelectricalprojects/images/hero/tnse (7).jpg",
        "/tnseelectricalprojects/images/hero/tnse (8).jpg",
        "/tnseelectricalprojects/images/hero/tnse (9).jpg",
        "/tnseelectricalprojects/images/hero/tnse (10).jpg",
        "/tnseelectricalprojects/images/hero/tnse (11).jpg",
        "/tnseelectricalprojects/images/hero/tnse (12).jpg",
        "/tnseelectricalprojects/images/hero/tnse (13).jpg",
        "/tnseelectricalprojects/images/hero/tnse (14).jpg",
        "/tnseelectricalprojects/images/hero/tnse (15).jpg",
        "/tnseelectricalprojects/images/hero/tnse (16).jpg",
        "/tnseelectricalprojects/images/hero/tnse (17).jpg",
        "/tnseelectricalprojects/images/hero/tnse (18).jpg",
        "/tnseelectricalprojects/images/hero/tnse (19).jpg",
        "/tnseelectricalprojects/images/hero/tnse (20).jpg",
        "/tnseelectricalprojects/images/hero/tnse (21).jpg",
        "/tnseelectricalprojects/images/hero/tnse (22).jpg",
        "/tnseelectricalprojects/images/hero/tnse (23).jpg",
        "/tnseelectricalprojects/images/hero/tnse (24).jpg",
        "/tnseelectricalprojects/images/hero/tnse (25).jpg",
        "/tnseelectricalprojects/images/hero/tnse (26).jpg",
        "/tnseelectricalprojects/images/hero/tnse (27).jpg",
        "/tnseelectricalprojects/images/hero/tnse (28).jpg",
        "/tnseelectricalprojects/images/hero/tnse (29).jpg",
        "/tnseelectricalprojects/images/hero/tnse (30).jpg"
    ];

    // Shuffle array randomly
    for (let i = imageArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
    }

    const carouselContainer = document.getElementById("heroCarousel");
    if (!carouselContainer) return;

    imageArray.forEach((src, index) => {
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


/tnseelectricalprojects/images/drawer/



// ==========================================
// Parallax Background Fixed Scroll Script
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    let parallaxImages = [
        "/tnseelectricalprojects/images/parallax/tnse (1).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (2).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (3).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (4).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (5).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (6).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (7).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (8).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (9).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (10).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (11).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (12).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (13).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (14).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (15).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (16).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (17).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (18).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (19).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (20).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (21).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (22).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (23).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (24).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (25).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (26).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (27).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (28).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (29).jpg",
        "/tnseelectricalprojects/images/parallax/tnse (30).jpg"
    ];

    // Randomly shuffle the array on load
    for (let i = parallaxImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [parallaxImages[i], parallaxImages[j]] = [parallaxImages[j], parallaxImages[i]];
    }

    const parallaxContainer = document.getElementById("parallaxBg");
    if (!parallaxContainer) return;

    // Inject image elements into the container
    parallaxImages.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `TNSE Parallax Background ${index + 1}`;
        img.className = `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        parallaxContainer.appendChild(img);
    });

    let currentIndex = 0;
    const slides = parallaxContainer.querySelectorAll("img");
    if (slides.length === 0) return;

    // Crossfade images every 5 seconds
    setInterval(() => {
        slides[currentIndex].classList.remove("opacity-100");
        slides[currentIndex].classList.add("opacity-0");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.remove("opacity-0");
        slides[currentIndex].classList.add("opacity-100");
    }, 5000);
});

