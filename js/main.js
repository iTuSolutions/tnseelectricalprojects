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
// 3. Drawer & Lightbox Script (with 30-Item Thumbnails Grid)
// ==========================================
let drawerGalleryItems = [];
let drawerCurrentIndex = 0;

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

    drawerGalleryItems = DrawerImages.map((src, i) => ({
        src: src,
        title: `Project ${i + 1}`,
        caption: `Field installation record #${i + 1} from all projects images.`
    }));

    // Populate Thumbnail Grid on Load
    const thumbGrid = document.getElementById('drawerThumbnailGrid');
    if (thumbGrid) {
        thumbGrid.innerHTML = '';
        drawerGalleryItems.forEach((item, index) => {
            const thumbBtn = document.createElement('button');
            thumbBtn.type = 'button';
            thumbBtn.className = `group relative aspect-square overflow-hidden rounded-xl border border-slate-800 bg-slate-950 transition hover:border-amber-400 focus:outline-none`;
            thumbBtn.onclick = () => openImageDrawer(index);
            thumbBtn.innerHTML = `
                <img src="${item.src}" alt="${item.title}" class="h-full w-full object-cover transition duration-300 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition"></div>
            `;
            thumbGrid.appendChild(thumbBtn);
        });
    }

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
        const modal = document.getElementById('imageDrawerModal');
        if (!modal || modal.classList.contains('hidden')) return;

        if (e.key === "ArrowRight") nextDrawerImage();
        else if (e.key === "ArrowLeft") prevDrawerImage();
        else if (e.key === "Escape") closeImageDrawer();
    });

    // Parallax background randomization
    const bgImg = document.getElementById("parallaxBg");
    if (bgImg) {
        const randomId = Math.floor(Math.random() * 90) + 10;
        bgImg.style.backgroundImage = `url('https://picsum.photos/id/${randomId}/1920/1080')`;
    }
});

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
    if (drawerGalleryItems.length === 0) return;
    drawerCurrentIndex = (drawerCurrentIndex + 1) % drawerGalleryItems.length;
    updateDrawerModalContent();
}

function prevDrawerImage() {
    if (drawerGalleryItems.length === 0) return;
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

    // Highlight active thumbnail
    const thumbGrid = document.getElementById('drawerThumbnailGrid');
    if (thumbGrid) {
        const buttons = thumbGrid.querySelectorAll('button');
        buttons.forEach((btn, idx) => {
            if (idx === drawerCurrentIndex) {
                btn.classList.add('border-amber-400', 'ring-2', 'ring-amber-400/50');
            } else {
                btn.classList.remove('border-amber-400', 'ring-2', 'ring-amber-400/50');
            }
        });
    }
}

function toggleDrawerFullScreen() {
    const container = document.getElementById('imageDrawerModalContent') || document.getElementById('imageDrawerModal');
    if (!container) return;
    
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
// Gallery carousel and image drawer
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const imageSources = Array.from(
        { length: 30 },
        (_, index) => `/tnseelectricalprojects/images/gallery/tnse (${index + 1}).jpg`
    );
    const galleryItems = imageSources.map((src, index) => ({
        src,
        title: `Gallery Project ${index + 1}`,
        caption: `High-standard electrical installation project capture #${index + 1}.`
    }));
    window.galleryItems = galleryItems;

    const track = document.querySelector("#gallery-track");
    const ground = track?.querySelector(".carousel-ground");
    const drawer = document.querySelector("#imageDrawerModal");
    const drawerContent = document.querySelector("#imageDrawerModalContent");
    const mainImage = document.querySelector("#drawerMainImage");
    const drawerTitle = document.querySelector("#drawerImageTitle");
    const drawerCaption = document.querySelector("#drawerImageCaption");
    const counter = document.querySelector("#drawerImageCounter");
    const thumbnailGrid = document.querySelector("#drawerThumbnailGrid");
    const closeButton = document.querySelector("#drawer-close");
    const backdrop = document.querySelector("#drawer-backdrop");
    const previousButton = document.querySelector("#drawer-previous");
    const nextButton = document.querySelector("#drawer-next");
    const fullscreenButton = document.querySelector("#drawer-fullscreen");
    const openButton = document.querySelector("#open-gallery");

    if (
        !(track instanceof HTMLUListElement) ||
        !(ground instanceof HTMLLIElement) ||
        !(drawer instanceof HTMLDivElement) ||
        !(drawerContent instanceof HTMLElement) ||
        !(mainImage instanceof HTMLImageElement) ||
        !(drawerTitle instanceof HTMLHeadingElement) ||
        !(drawerCaption instanceof HTMLParagraphElement) ||
        !(counter instanceof HTMLDivElement) ||
        !(thumbnailGrid instanceof HTMLDivElement) ||
        !(closeButton instanceof HTMLButtonElement) ||
        !(backdrop instanceof HTMLButtonElement) ||
        !(previousButton instanceof HTMLButtonElement) ||
        !(nextButton instanceof HTMLButtonElement) ||
        !(fullscreenButton instanceof HTMLButtonElement) ||
        !(openButton instanceof HTMLButtonElement)
    ) {
        throw new Error("Gallery carousel or image drawer markup is missing.");
    }

    track.replaceChildren(ground);
    track.style.setProperty("--_num-elements", String(galleryItems.length));

    const revealImage = (image, src) => {
        if (image.naturalWidth === 0) {
            console.error(`Gallery image failed to load: ${src}`);
            return;
        }

        image.style.opacity = "1";
        image.classList.remove("opacity-0");
        image.classList.add("opacity-100");
    };

    galleryItems.forEach((item, index) => {
        const card = document.createElement("li");
        const rotation = `${(360 * (index + 1)) / galleryItems.length}deg`;
        const transform = `rotateY(${rotation}) translateZ(var(--_radius))`;
        card.className = "group absolute";
        Object.assign(card.style, {
            left: "calc(var(--_radius) - var(--_item-width) / 2)",
            top: "calc(var(--_radius) - var(--_item-height) / 2)",
            width: "var(--_item-width)",
            height: "var(--_item-height)",
            transform,
            transformStyle: "preserve-3d",
            transition: "all 250ms ease-out",
            boxShadow: "0 0 var(--carousel-item-glow-size) transparent"
        });
        card.dataset.galleryIndex = String(index);

        const link = document.createElement("a");
        link.className = "select-none focus:outline-none";
        link.href = item.src;
        Object.assign(link.style, {
            position: "relative",
            display: "block",
            width: "100%",
            height: "100%",
            textIndent: "-9999px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backgroundImage: `url("${item.src}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        });
        link.setAttribute("aria-label", item.title);
        link.title = item.caption;
        link.textContent = item.title;

        const image = document.createElement("img");
        image.className = "opacity-0";
        Object.assign(image.style, {
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0",
            filter: "grayscale(1)",
            transition: "filter 250ms ease-out, opacity 500ms ease-out"
        });
        image.alt = item.title;
        image.decoding = "async";
        image.loading = "eager";
        image.addEventListener("load", () => revealImage(image, item.src), { once: true });
        image.addEventListener("error", () => revealImage(image, item.src), { once: true });
        image.src = item.src;
        if (image.complete) revealImage(image, item.src);

        card.addEventListener("mouseenter", () => {
            card.style.transform = `rotateY(${rotation}) translateZ(calc(var(--_radius) * var(--carousel-item-hover-effect)))`;
            card.style.boxShadow = "0 0 var(--carousel-item-glow-size) rgb(var(--carousel-item-glow-color-rgb))";
            image.style.filter = "grayscale(0)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = transform;
            card.style.boxShadow = "0 0 var(--carousel-item-glow-size) transparent";
            image.style.filter = "grayscale(1)";
        });

        link.append(image);
        card.append(link);
        track.insertBefore(card, ground);

        const thumbnail = document.createElement("button");
        thumbnail.type = "button";
        thumbnail.className =
            "aspect-square overflow-hidden rounded-lg border border-slate-700 transition hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400";
        thumbnail.dataset.galleryIndex = String(index);
        thumbnail.setAttribute("aria-label", `Show ${item.title}`);
        thumbnail.setAttribute("aria-pressed", "false");

        const thumbnailImage = document.createElement("img");
        thumbnailImage.className = "size-full object-cover";
        thumbnailImage.src = item.src;
        thumbnailImage.alt = "";
        thumbnailImage.loading = "lazy";
        thumbnailImage.decoding = "async";
        thumbnail.append(thumbnailImage);
        thumbnailGrid.append(thumbnail);
    });

    let activeIndex = 0;
    let lastFocusedElement = null;

    const showImage = (index) => {
        activeIndex = (index + galleryItems.length) % galleryItems.length;
        const item = galleryItems[activeIndex];
        mainImage.src = item.src;
        mainImage.alt = item.title;
        drawerTitle.textContent = item.title;
        drawerCaption.textContent = item.caption;
        counter.textContent = `${activeIndex + 1} / ${galleryItems.length}`;

        thumbnailGrid.querySelectorAll("button[data-gallery-index]").forEach((button) => {
            const isSelected = Number(button.dataset.galleryIndex) === activeIndex;
            button.setAttribute("aria-pressed", String(isSelected));
            button.classList.toggle("border-amber-400", isSelected);
            button.classList.toggle("ring-2", isSelected);
            button.classList.toggle("ring-amber-400", isSelected);
            if (isSelected) button.scrollIntoView({ block: "nearest", inline: "nearest" });
        });
    };

    const closeDrawer = () => {
        if (drawer.classList.contains("hidden")) return;
        drawer.classList.add("opacity-0", "pointer-events-none");
        drawerContent.classList.add("translate-x-full");
        drawer.setAttribute("aria-hidden", "true");
        document.body.classList.remove("overflow-hidden");
        if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
    };

    window.openImageDrawer = (index = 0) => {
        lastFocusedElement = document.activeElement;
        showImage(index);
        drawer.classList.remove("hidden", "pointer-events-none");
        drawer.setAttribute("aria-hidden", "false");
        document.body.classList.add("overflow-hidden");
        requestAnimationFrame(() => {
            drawer.classList.remove("opacity-0");
            drawerContent.classList.remove("translate-x-full");
            drawerContent.focus();
        });
    };

    drawer.addEventListener("transitionend", (event) => {
        if (event.target === drawer && drawer.classList.contains("opacity-0")) {
            drawer.classList.add("hidden");
        }
    });

    track.addEventListener("click", (event) => {
        const link = event.target instanceof Element ? event.target.closest("a") : null;
        const card = link?.closest("[data-gallery-index]");
        if (!card) return;
        event.preventDefault();
        window.openImageDrawer(Number(card.dataset.galleryIndex));
    });

    thumbnailGrid.addEventListener("click", (event) => {
        const button = event.target instanceof Element
            ? event.target.closest("button[data-gallery-index]")
            : null;
        if (button) showImage(Number(button.dataset.galleryIndex));
    });

    openButton.addEventListener("click", () => window.openImageDrawer(0));
    closeButton.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);
    previousButton.addEventListener("click", () => showImage(activeIndex - 1));
    nextButton.addEventListener("click", () => showImage(activeIndex + 1));

    fullscreenButton.addEventListener("click", () => {
        const fullscreenAction = document.fullscreenElement
            ? document.exitFullscreen()
            : drawerContent.requestFullscreen();
        fullscreenAction.catch((error) => {
            console.error("Unable to change gallery fullscreen mode.", error);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (drawer.classList.contains("hidden")) return;
        if (event.key === "Escape") closeDrawer();
        if (event.key === "ArrowLeft") showImage(activeIndex - 1);
        if (event.key === "ArrowRight") showImage(activeIndex + 1);
    });
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
