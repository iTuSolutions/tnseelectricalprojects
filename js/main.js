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

// 9. Exclusive Mobile Navigation Accordion Toggle (Ensures only one is open at a time)
window.toggleAccordion = function(id, button) {
  const content = document.getElementById(id);
  const isHidden = content.classList.contains('hidden');

  // Close all other accordions and reset their icons
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

  // Toggle the clicked accordion
  const icon = button.querySelector('.material-symbols-outlined:last-child');
  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
};







document.addEventListener("DOMContentLoaded", function () {
    // Explicit array containing all 30 parallax project image URLs
    let imageArray = [
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(1).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(2).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(3).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(4).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(5).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(6).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(7).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(8).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(9).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(10).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(11).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(12).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(13).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(14).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(15).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(16).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(17).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(18).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(19).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(20).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(21).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(22).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(23).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(24).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(25).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(26).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(27).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(28).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(29).jpg",
      "https://github.com/iTuSolutions/tnseel/raw/main/tnseelectricalprojects/images/parallax/tnse%20(30).jpg"
    ];

    // Shuffle the array randomly using Fisher-Yates shuffle
    for (let i = imageArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
    }

    const carouselContainer = document.getElementById("heroCarousel");
    if (!carouselContainer) return;

    // Build slide elements
    imageArray.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `TNSE Electrical Project ${index + 1}`;
      img.className = `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
      img.dataset.index = index;
      carouselContainer.appendChild(img);
    });

    let currentIndex = 0;
    const slides = carouselContainer.querySelectorAll("img");

    // Rotate slides every 4.5 seconds
    setInterval(() => {
      slides[currentIndex].classList.remove("opacity-100");
      slides[currentIndex].classList.add("opacity-0");

      currentIndex = (currentIndex + 1) % slides.length;

      slides[currentIndex].classList.remove("opacity-0");
      slides[currentIndex].classList.add("opacity-100");
    }, 4500);
});







