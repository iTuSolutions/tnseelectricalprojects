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


// ==========================================
// 11. Image Drawer / Lightbox Controller & 30-Item Archives
// ==========================================
let galleryItems = [];
let currentIndex = 0;

// Full 30-item mapping for both Electrical & Solar project catalogs
const projectArchives = {
  electrical: {
    title: "Electrical Installations",
    subtitle: "/images/projects/electrical/",
    icon: "electrical_services",
    items: Array.from({ length: 30 }, (_, i) => ({
      src: `/tnseelectricalprojects/images/projects/electrical/tnse (${i + 1}).jpg`,
      title: `Electrical Project ${i + 1}`,
      caption: `High-standard commercial and residential electrical execution #${i + 1} across Polokwane.`
    }))
  },
  solar: {
    title: "Solar & Energy Solutions",
    subtitle: "/images/projects/solar/",
    icon: "solar_power",
    items: Array.from({ length: 30 }, (_, i) => ({
      src: `/tnseelectricalprojects/images/projects/solar/tnse (${i + 1}).jpg`,
      title: `Solar Installation ${i + 1}`,
      caption: `Turnkey hybrid inverter & lithium battery system setup #${i + 1}.`
    }))
  }
};

let activeArchiveCategory = 'electrical';

document.addEventListener('DOMContentLoaded', () => {
  galleryItems = projectArchives.electrical.items;
  buildThumbnails();
  setupTouchGestures();
});

function buildThumbnails() {
  const container = document.getElementById('drawerThumbnailsContainer');
  if (!container) return;
  container.innerHTML = '';

  galleryItems.forEach((item, idx) => {
    const thumb = document.createElement('button');
    thumb.className = `relative h-14 w-20 rounded-lg overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-amber-400 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'}`;
    thumb.onclick = () => goToImage(idx);
    thumb.innerHTML = `<img src="${item.src}" alt="Thumbnail ${idx + 1}" class="h-full w-full object-cover">`;
    container.appendChild(thumb);
  });
}

function openImageDrawer(index) {
  currentIndex = index >= 0 && index < galleryItems.length ? index : 0;
  updateDrawerContent();

  const modal = document.getElementById('imageDrawerModal');
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
    document.body.classList.add('overflow-hidden');
  }
}

function closeImageDrawer() {
  const modal = document.getElementById('imageDrawerModal');
  if (modal) {
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 300);
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateDrawerContent();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateDrawerContent();
}

function goToImage(index) {
  currentIndex = index;
  updateDrawerContent();
}

function updateDrawerContent() {
  const item = galleryItems[currentIndex];
  document.getElementById('drawerMainImage').src = item.src;
  document.getElementById('drawerImageTitle').textContent = item.title;
  document.getElementById('drawerImageCaption').textContent = item.caption;
  document.getElementById('drawerImageCounter').textContent = `${currentIndex + 1} / ${galleryItems.length}`;
  
  const container = document.getElementById('drawerThumbnailsContainer');
  if (container) {
    Array.from(container.children).forEach((child, idx) => {
      if (idx === currentIndex) {
        child.className = "relative h-14 w-20 rounded-lg overflow-hidden border-2 border-amber-400 scale-105 transition-all";
        child.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      } else {
        child.className = "relative h-14 w-20 rounded-lg overflow-hidden border-2 border-slate-800 opacity-60 hover:opacity-100 transition-all";
      }
    });
  }
}

// Keyboard Navigation Support (ESC, Left & Right Arrows)
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('imageDrawerModal');
  if (!modal || modal.classList.contains('hidden')) return;

  if (e.key === 'Escape') closeImageDrawer();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});

// Touch / Swipe Support for Mobile Devices
function setupTouchGestures() {
  const modal = document.getElementById('imageDrawerModal');
  if (!modal) return;

  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) nextImage();
    if (touchEndX > touchStartX + 50) prevImage();
  }, { passive: true });
}


// ==========================================
// 12. Right-to-Left Modern Archive Drawer Controller (92% Width)
// ==========================================
function openLeftDrawer(category) {
  activeArchiveCategory = category;
  const archive = projectArchives[category] || projectArchives.electrical;

  document.getElementById('leftDrawerTitle').textContent = archive.title;
  document.getElementById('leftDrawerSubtitle').textContent = archive.subtitle;
  document.getElementById('leftDrawerIcon').textContent = archive.icon;

  const gridContainer = document.getElementById('leftDrawerGrid');
  gridContainer.innerHTML = '';

  archive.items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = "group relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800 cursor-pointer aspect-video shadow-md hover:border-amber-400 transition-all duration-300";
    card.onclick = () => {
      closeLeftDrawer();
      galleryItems = archive.items;
      buildThumbnails();
      openImageDrawer(index);
    };
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}" class="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy">
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-2.5">
        <p class="text-[11px] font-semibold text-white tracking-wide truncate">${item.title}</p>
      </div>
    `;
    gridContainer.appendChild(card);
  });

  const drawer = document.getElementById('leftArchiveDrawer');
  const panel = document.getElementById('leftDrawerPanel');
  const backdrop = document.getElementById('leftDrawerBackdrop');

  // Ensure panel has modern styling and 92% width with right-to-left alignment
  panel.className = "absolute right-0 top-0 h-full w-[92%] max-w-6xl bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 shadow-2xl transition-transform duration-500 ease-out flex flex-col translate-x-0";

  drawer.classList.remove('pointer-events-none');
  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('opacity-100');
  document.body.classList.add('overflow-hidden');
}

function closeLeftDrawer() {
  const drawer = document.getElementById('leftArchiveDrawer');
  const panel = document.getElementById('leftDrawerPanel');
  const backdrop = document.getElementById('leftDrawerBackdrop');

  // Slide panel back to the right
  panel.classList.add('translate-x-full');
  panel.classList.remove('translate-x-0');
  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');

  setTimeout(() => {
    drawer.classList.add('pointer-events-none');
    backdrop.classList.add('pointer-events-none');
    if (!document.getElementById('imageDrawerModal').classList.contains('hidden')) return;
    document.body.classList.remove('overflow-hidden');
  }, 400);
}



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

