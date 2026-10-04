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
    let imageArray = [
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

    // Shuffle array randomly
    for (let i = imageArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
    }

    const carouselContainer = document.getElementById("heroCarousel");
    if (!carouselContainer) return;

    // Build slide elements filling the section background
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

    // Rotate background slides every 4.5 seconds
    setInterval(() => {
      slides[currentIndex].classList.remove("opacity-100");
      slides[currentIndex].classList.add("opacity-0");

      currentIndex = (currentIndex + 1) % slides.length;

      slides[currentIndex].classList.remove("opacity-0");
      slides[currentIndex].classList.add("opacity-100");
    }, 4500);
});














/* =========================================================
   IMAGE DRAWER / LIGHTBOX CONTROLLER
   ========================================================= */
let galleryItems = [];
let currentIndex = 0;

// Initialize gallery items automatically from elements carrying data attributes
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('[onclick*="openImageDrawer"]');
  galleryItems = Array.from(triggers).map(el => ({
    src: el.getAttribute('data-image-src'),
    title: el.getAttribute('data-image-title') || 'TNSE Project Image',
    caption: el.getAttribute('data-image-caption') || 'Professional electrical and energy solutions execution.'
  }));

  // If no triggers found in DOM, fallback sample set (e.g. tnse 1 to 30 parallax/projects)
  if (galleryItems.length === 0) {
    for (let i = 1; i <= 10; i++) {
      galleryItems.push({
        src: `/tnseelectricalprojects/images/parallax/tnse (${i}).jpg`,
        title: `TNSE Project & Parallax View ${i}`,
        caption: 'High-grade workmanship delivered across Polokwane and Limpopo.'
      });
    }
  }

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
    document.body.classList.add('overflow-hidden'); // Background scroll lock
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
  
  // Update active thumbnail highlight state
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
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextImage(); // Swiped Left -> Next
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevImage(); // Swiped Right -> Previous
    }
  }
}


















    /* Left-to-Right Hamburger Menu Drawer Toggle */
    function toggleLeftDrawer() {
      const drawer = document.getElementById('leftHamburgerDrawer');
      const panel = document.getElementById('drawerPanel');
      const backdrop = document.getElementById('drawerBackdrop');

      if (panel.classList.contains('-translate-x-full')) {
        drawer.classList.remove('pointer-events-none');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
        panel.classList.remove('-translate-x-full');
        document.body.classList.add('overflow-hidden');
      } else {
        panel.classList.add('-translate-x-full');
        backdrop.classList.add('opacity-0', 'pointer-events-none');
        drawer.classList.add('pointer-events-none');
        document.body.classList.remove('overflow-hidden');
      }
    }

    /* Image Drawer / Lightbox Controller */
    let galleryItems = [];
    let currentIndex = 0;

    document.addEventListener('DOMContentLoaded', () => {
      // Build comprehensive gallery pool mapping to /tnseelectricalprojects/images/ structure
      galleryItems = [
        // Electrical Projects (tnse 1 to 5 sample pool)
        { src: "/tnseelectricalprojects/images/projects/electrical/tnse (1).jpg", title: "Commercial DB Installation", caption: "Three-phase distribution board wiring and rigorous labeling." },
        { src: "/tnseelectricalprojects/images/projects/electrical/tnse (2).jpg", title: "Fault Finding & Diagnostics", caption: "Advanced multimeter and insulation testing procedures." },
        { src: "/tnseelectricalprojects/images/projects/electrical/tnse (3).jpg", title: "Industrial Maintenance", caption: "Scheduled electrical upkeep for commercial complexes." },
        { src: "/tnseelectricalprojects/images/projects/electrical/tnse (4).jpg", title: "Sub-circuit Protection", caption: "High-grade circuit breaker setup." },
        { src: "/tnseelectricalprojects/images/projects/electrical/tnse (5).jpg", title: "Lighting Integration", caption: "Energy efficient lighting layout execution." },

        // Solar Projects (tnse 1 to 5 sample pool)
        { src: "/tnseelectricalprojects/images/projects/solar/tnse (1).jpg", title: "Hybrid Inverter Setup", caption: "Clean backup power integration with automated changeover." },
        { src: "/tnseelectricalprojects/images/projects/solar/tnse (2).jpg", title: "Lithium Battery Bank", caption: "High-capacity energy storage installation." },
        { src: "/tnseelectricalprojects/images/projects/solar/tnse (3).jpg", title: "Rooftop PV Solar Array", caption: "Secure mounting and DC wiring implementation." },
        { src: "/tnseelectricalprojects/images/projects/solar/tnse (4).jpg", title: "MPPT Charge Controller", caption: "Optimized solar panel voltage regulation." },
        { src: "/tnseelectricalprojects/images/projects/solar/tnse (5).jpg", title: "Off-Grid Configuration", caption: "Reliable power backup system setup." }
      ];

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
        thumb.innerHTML = `<img src="${item.src}" alt="Thumb ${idx + 1}" class="h-full w-full object-cover">`;
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

    /* Keyboard & Touch Event Listeners */
    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('imageDrawerModal');
      if (modal && !modal.classList.contains('hidden')) {
        if (e.key === 'Escape') closeImageDrawer();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    });

    function setupTouchGestures() {
      const modal = document.getElementById('imageDrawerModal');
      if (!modal) return;
      let touchStartX = 0;
      let touchEndX = 0;

      modal.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
      modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) nextImage();
        if (touchEndX > touchStartX + 50) prevImage();
      }, { passive: true });
    }













    /* =========================================================
   PROJECT DIRECTORIES & DRAWER CONTROLLER
   ========================================================= */

// Dataset mappings based on directory structures
const projectArchives = {
  electrical: {
    title: "Electrical Installations",
    subtitle: "/images/projects/electrical/",
    icon: "electrical_services",
    items: Array.from({ length: 15 }, (_, i) => ({
      src: `/tnseelectricalprojects/images/projects/electrical/tnse (${i + 1}).jpg`,
      title: `Electrical Project ${i + 1}`,
      caption: `High-standard commercial and residential electrical execution #${i + 1}`
    }))
  },
  solar: {
    title: "Solar & Energy Solutions",
    subtitle: "/images/projects/solar/",
    icon: "solar_power",
    items: Array.from({ length: 15 }, (_, i) => ({
      src: `/tnseelectricalprojects/images/projects/solar/tnse (${i + 1}).jpg`,
      title: `Solar Installation ${i + 1}`,
      caption: `Turnkey hybrid inverter & lithium battery system setup #${i + 1}`
    }))
  }
};

let activeArchiveCategory = 'electrical';

// Open Left-to-Right Archive Drawer
function openLeftDrawer(category) {
  activeArchiveCategory = category;
  const archive = projectArchives[category] || projectArchives.electrical;

  // Populate Header info
  document.getElementById('leftDrawerTitle').textContent = archive.title;
  document.getElementById('leftDrawerSubtitle').textContent = archive.subtitle;
  document.getElementById('leftDrawerIcon').textContent = archive.icon;

  // Populate Grid items
  const gridContainer = document.getElementById('leftDrawerGrid');
  gridContainer.innerHTML = '';

  archive.items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = "group relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800 cursor-pointer aspect-video shadow-md hover:border-amber-400 transition-all";
    card.onclick = () => {
      // Close left drawer and open main high-res image lightbox at index
      closeLeftDrawer();
      // Set global gallery items to this archive so next/prev works seamlessly across category
      galleryItems = archive.items;
      openImageDrawer(index);
    };
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}" class="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy">
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-2">
        <p class="text-[10px] font-bold text-white truncate">${item.title}</p>
      </div>
    `;
    gridContainer.appendChild(card);
  });

  // Display drawer with left-to-right slide animation
  const drawer = document.getElementById('leftArchiveDrawer');
  const panel = document.getElementById('leftDrawerPanel');
  const backdrop = document.getElementById('leftDrawerBackdrop');

  drawer.classList.remove('pointer-events-none');
  backdrop.classList.remove('pointer-events-none', 'opacity-0');
  backdrop.classList.add('opacity-100');
  panel.classList.remove('-translate-x-full');
  document.body.classList.add('overflow-hidden');
}

// Close Left-to-Right Archive Drawer
function closeLeftDrawer() {
  const drawer = document.getElementById('leftArchiveDrawer');
  const panel = document.getElementById('leftDrawerPanel');
  const backdrop = document.getElementById('leftDrawerBackdrop');

  panel.classList.add('-translate-x-full');
  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');

  setTimeout(() => {
    drawer.classList.add('pointer-events-none');
    backdrop.classList.add('pointer-events-none');
    if (!document.getElementById('imageDrawerModal').classList.contains('hidden')) return;
    document.body.classList.remove('overflow-hidden');
  }, 300);
}
