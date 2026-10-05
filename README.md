TNSE Electrical Projects — Modern Corporate Website
A responsive multi-page static website for TNSE Electrical Projects, designed around a premium electrical, solar, and energy-solutions identity.
Website Overview
Name: TNSE Electrical Projects Official Corporate Site
Type: Multi-page responsive static web application built with HTML5, Tailwind CSS, and vanilla JavaScript.
Core Purpose: Showcase electrical and renewable energy services, display execution galleries, and capture project quote requests across residential, commercial, and industrial markets.
Company Information
Established: 2017
Registration Number: 2017/417275/07
BEE Status: Level 1 Contributor
Physical Address: Stand no 914, Crv Street, Kwena Moloto 2, Moletjie, Polokwane, Limpopo, South Africa, 0751
Contact Information
Johannes: +27 81 827 6288
Frans: +27 81 550 7926
Email: tnse.electricalprojects@gmail.com
Folder Structure



Plaintext
/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
├── projects/
│   └── index.html
├── contact/
│   └── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── hero/
│       ├── projects/
│       │   ├── electrical/
│       │   └── solar/
│       └── logo/
└── README.md


Page Structure
Home (index.html): Features the dynamic hero carousel, company introduction, service environments overview, visual showcases, and interactive elements.
About (about/index.html): Company history, mission, vision, BEE credentials, and core competencies.
Services (services/index.html): Detailed breakdown of residential, commercial, and industrial electrical solutions.
Projects (projects/index.html): Archive grid layout showcasing completed installations and project galleries.
Contact (contact/index.html): Direct contact info, interactive form, business hours, and location map.
Navigation Structure
Desktop Header: Fixed navbar featuring logo branding, top-level navigation links, anchored mega menu dropdowns, and a primary call-to-action button.
Mobile Header: Compact header bar with a hamburger menu trigger icon that toggles the slide-down mobile navigation panel.
Mega Menu Structure
Services Dropdown: Categorized pop-down layout grouping links by Electrical Installations, Backup Power Systems, Solar & Inverter Solutions, and Maintenance & Fault Finding.
Projects Dropdown: Quick links leading directly to categorized galleries and case studies.
TAILWIND CSS
Tailwind CSS CDN: Loaded via official script distribution for rapid styling and utility integration.
Tailwind Configuration: Custom color extensions (slate and amber palette variants), font pairings, and animation timings.
Responsive Breakpoints: Mobile-first design adapting seamlessly across small screens (sm), medium tablets (md), and large widescreen monitors (lg, xl).
Typography: Heavy font-weights (font-black, font-bold) paired with clean sans-serif body styles for maximum corporate legibility.
Spacing: Consistent padding (px-5, py-20, py-28) and grid gaps (gap-4, gap-6, gap-14) to preserve whitespace and clean layouts.
Colours: Deep slate dark backgrounds (bg-slate-950, bg-slate-900) paired with vibrant corporate amber accents (text-amber-400, bg-amber-500).
Components: Encapsulated button variants, interactive cards with hover states, badges, and responsive containers.
Utility Classes: Custom utility styling for transitions, backdrop blurring, object-fit covers, and visibility toggling.
MATERIAL SYMBOLS
Icon Setup: Integrated Google Material Symbols via Google Fonts CDN for lightweight, scalable UI icons across buttons, lists, and accordions.
HERO CAROUSEL
30 Hero Images: Randomized array injection mapping through /tnseelectricalprojects/images/hero/tnse (1).jpg to tnse (30).jpg.
Autoplay: Automated crossfade transition interval timer set to 4.5 seconds.
Navigation: Smooth CSS opacity transitions (transition-opacity duration-1000 ease-in-out).
Touch Controls: Full responsive scaling across mobile and desktop viewports.
PARALLAX SYSTEM
30 Parallax Images: Integrated background asset layers configured for depth and visual appeal.
Section Mapping: Dynamic layout integration matching section cards to high-resolution asset paths.
IMAGE DRAWER
Gallery Images: Multi-item archive arrays mapping detailed titles and descriptive captions.
Full-Size Viewer: Modal overlay displaying high-resolution selected project imagery.
Thumbnail Navigation: Scrollable thumbnail selector bar at the base of the drawer.
Previous / Next: Manual navigation controls for cycling through gallery items.
Image Counter: Live index tracking display (1 / 30).
Zoom: Smooth scaling and transition-enabled preview elements.
Swipe Support: Touch gesture listeners for mobile swipe navigation (touchstart and touchend).
Keyboard Controls: Left and right arrow key listeners for fast desktop browsing.
ESC Close: Instant modal dismissal triggered by the escape key.
Accessibility: ARIA labels, semantic markup, and focus management.
ELECTRICAL IMAGES
Storage directory: /tnseelectricalprojects/images/projects/electrical/ containing 30 high-definition project captures (tnse (1).jpg through tnse (30).jpg).
SOLAR IMAGES
Storage directory: /tnseelectricalprojects/images/projects/solar/ containing specialized renewable and hybrid energy installation captures.
PROJECT IMAGES
Comprehensive asset classification linking project records to designated installation categories.
LOGO SYSTEM
Corporate branding assets deployed across headers, footers, and meta tags.
DARK/LIGHT MODE
Client-side theme persistence script leveraging localStorage and Tailwind's .dark class toggle.
CONTACT FORM
Form submission handler capturing field entries, formatting message bodies, and utilizing a mailto: fallback or secure endpoint configuration.
WHATSAPP
Floating direct-connect chat widget linking clients instantly to support lines.
GOOGLE MAPS
Location embed iframe mapping the physical office address in Moletjie, Polokwane.
GOOGLE REVIEWS
Integration framework for displaying client testimonials and ratings.
LEGAL PAGES
Dedicated documentation for company terms, compliance, and conditions of service.
POPIA
Protection of Personal Information Act (POPIA) compliance statements and data privacy terms.
COOKIE CONSENT
User notification banner managing cookie preferences and tracking opt-ins.
SEO
Optimized meta tags, Open Graph tags, descriptive titles, and JSON-LD schema markup for search engines.
SITEMAP
XML sitemap structure indexing all primary pages and archive links for search crawlers.
DEPLOYMENT
Static site hosting configured for GitHub Pages, Netlify, or custom cPanel web servers.
FUTURE IMPROVEMENTS
Integration of a backend API for contact form submissions, expanded client portal features, and multi-language support (English and Sepedi).
