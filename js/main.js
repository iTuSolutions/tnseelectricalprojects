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
// 3. Drawer & Lightbox Script
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    let DrawerImages = [
        "/tnseelectricalprojects/images/drawer/tnse (1).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (2).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (3).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (4).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (5).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (6).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (7).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (8).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (9).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (10).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (11).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (12).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (13).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (14).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (15).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (16).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (17).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (18).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (19).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (20).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (21).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (22).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (23).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (24).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (25).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (26).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (27).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (28).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (29).jpg",
        "/tnseelectricalprojects/images/drawer/tnse (30).jpg"
    ];

    // Initialize Drawer items and touch/fullscreen capabilities
    drawerGalleryItems = DrawerImages.map((src, i) => ({
      src: src,
      title: `Drawer Project ${i + 1}`,
      caption: `Field installation record #${i + 1} from drawer archive.`
    }));
});

let drawerGalleryItems = [];
let drawerCurrentIndex = 0;

function openImageDrawer(index) {
  drawerCurrentIndex = index >= 0 && index < drawerGalleryItems.length ? index : 0;
  updateDrawerModalContent();

  const modal = document.getElementById('imageDrawerModal');
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
    document.body.classList.add('overflow-hidden');
  }
}

function closeImageDrawer() {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
  const modal = document.getElementById('imageDrawerModal');
  if (modal) {
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 300);
  }
}

function nextDrawerImage() {
  drawerCurrentIndex = (drawerCurrentIndex + 1) % drawerGalleryItems.length;
  updateDrawerModalContent();
}

function prevDrawerImage() {
  drawerCurrentIndex = (drawerCurrentIndex - 1 + drawerGalleryItems.length) % drawerGalleryItems.length;
  updateDrawerModalContent();
}

function updateDrawerModalContent() {
  if (drawerGalleryItems.length === 0) return;
  const item = drawerGalleryItems[drawerCurrentIndex];
  const mainImage = document.getElementById('drawerMainImage');
  if (mainImage) mainImage.src = item.src;
  
  const titleElem = document.getElementById('drawerImageTitle');
  if (titleElem) titleElem.textContent = item.title;
  
  const captionElem = document.getElementById('drawerImageCaption');
  if (captionElem) captionElem.textContent = item.caption;
  
  const counterElem = document.getElementById('drawerImageCounter');
  if (counterElem) counterElem.textContent = `${drawerCurrentIndex + 1} / ${drawerGalleryItems.length}`;
}

function toggleDrawerFullScreen() {
  const container = document.getElementById('imageDrawerModalContent') || document.getElementById('imageDrawerModal');
  if (!document.fullscreenElement) {
    container.requestFullscreen().catch(err => console.error(err));
  } else {
    document.exitFullscreen().catch(() => {});
  }
}


// ==========================================
// 4. Parallax Background Fixed Scroll Script
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

    const parallaxBg = document.getElementById('parallaxBg');
    if (parallaxBg && parallaxImages.length > 0) {
        parallaxBg.style.backgroundImage = `url('${parallaxImages[0]}')`;
        parallaxBg.style.backgroundAttachment = 'fixed';
        parallaxBg.style.backgroundSize = 'cover';
        parallaxBg.style.backgroundPosition = 'center';
    }
});


// ==========================================
// 5. Gallery Lightbox Controller
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    let GalleryImages = [
        "/tnseelectricalprojects/images/gallery/tnse (1).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (2).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (3).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (4).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (5).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (6).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (7).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (8).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (9).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (10).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (11).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (12).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (13).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (14).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (15).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (16).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (17).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (18).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (19).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (20).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (21).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (22).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (23).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (24).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (25).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (26).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (27).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (28).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (29).jpg",
        "/tnseelectricalprojects/images/gallery/tnse (30).jpg"
    ];

    window.galleryItems = GalleryImages.map((src, i) => ({
      src: src,
      title: `Gallery Project ${i + 1}`,
      caption: `High-standard electrical installation project capture #${i + 1}.`
    }));
});
