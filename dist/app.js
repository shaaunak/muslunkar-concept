/* ==========================================================================
   VM JEWELLERS / V.M. MUSLUNKAR & SONS
   Independent Fine Jewellery Design Direction · Vile Parle East, Mumbai
   Application Engine — Upgraded Luxury Editorial Experience
   ========================================================================== */

const ASSET_DIR = 'assets/';

// Verified Business Data (Google Business Listing & Local Directories)
const BUSINESS_INFO = {
  signboardName: 'VM JEWELLERS',
  registeredName: 'VM Jewellers Pvt. Ltd.',
  heritageName: 'V.M. Muslunkar & Sons Jewellers',
  establishedYear: '1949',
  founder: 'Vasant Mahadev Muslunkar',
  address: {
    shop: 'Shop No. 4, Relcon House',
    street: 'Mahatma Gandhi Road, Navpada',
    locality: 'Vile Parle East',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400057',
    landmark: 'Below Maharashtra Co-operative Bank, Near Vile Parle East Station'
  },
  landline: '022 2615 3055',
  telLink: 'tel:+912226153055',
  hours: {
    regular: 'Tuesday to Sunday: 10:30 am – 8:30 pm',
    closed: 'Monday: Closed',
    summary: 'Tue – Sun: 10:30 am – 8:30 pm · Monday: Closed'
  },
  mapsQueryUrl: 'https://www.google.com/maps/search/?api=1&query=VM+Jewellers+Pvt+Ltd+Shop+4+Relcon+House+Mahatma+Gandhi+Road+Vile+Parle+East+Mumbai+400057'
};

// Daily Benchmark Bullion Reference Rates (Sample Illustrative Configuration)
const BULLION_RATES = {
  '22KT': 7250, // INR per gram
  '18KT': 5930  // INR per gram
};

// --- Comprehensive Curated Catalogue grounded in Real Showroom Offerings ---
const pieces = [
  {
    id: 'temple-suite',
    ref: 'VM-TS-01',
    name: 'The Royal Peshwai Temple Suite',
    category: 'Necklaces',
    collection: 'Temple Suites',
    image: 'hero_emerald_jewellery.webp',
    alt: 'Handcrafted 22-karat Maharashtrian gold temple choker suite on emerald green velvet',
    tagline: 'Lakshmi repoussé central pendant, basra pearls and tiered jhumkas.',
    description: 'A magnificent handcrafted 22-karat temple choker suite featuring an intricately chased Lakshmi repoussé pendant, woven basra pearl collars, and coordinating tiered floral jhumkas. Commissioned for traditional weddings and auspicious family milestones.',
    angles: [
      {
        file: 'suite_angle_1_full.webp',
        label: 'Angle 1: Full Frontal Suite',
        caption: 'Frontal composition of the temple choker and tiered jhumkas on emerald green velvet.'
      },
      {
        file: 'suite_angle_2_pendant.webp',
        label: 'Angle 2: Lakshmi Pendant Macro',
        caption: 'High-relief repoussé medallion of Goddess Lakshmi flanked by ruby cabochons.'
      },
      {
        file: 'suite_angle_3_jhumkas.webp',
        label: 'Angle 3: Matched Jhumkas Detail',
        caption: 'Handcrafted floral bell jhumkas with seed pearl fringe and ruby flower tops.'
      },
      {
        file: 'suite_angle_4_strands.webp',
        label: 'Angle 4: Basra Pearl Collar',
        caption: 'Triple strand basra seed pearls strung upon hand-forged 22K gold links.'
      }
    ],
    baseNetWeight: 66.5,
    grossWeight: 72.8,
    stoneWeight: '6.3 cts (Burma Rubies & Basra Pearls)',
    stonePrice: 28000,
    makingPercent: 14.5,
    purityOptions: ['22KT', '18KT'],
    sizes: [
      { label: '16\" Collar / Choker', weightMult: 0.95 },
      { label: '18\" Princess (Standard)', weightMult: 1.0 },
      { label: '20\" Royal Matinee', weightMult: 1.08 }
    ],
    craftsmanship: 'Hand Repoussé (Chitai), Rawa Granulation, Basra Pearl Stringing',
    hallmark: '100% BIS 916 Hallmark · Unique HUID Traceable'
  },
  {
    id: 'peshwai-toda',
    ref: 'VM-PT-02',
    name: 'Peshwai Toda & Floral Kangan Pair',
    category: 'Everyday',
    collection: 'Peshwai Toda',
    image: 'bangle_angle_1_pair.webp',
    alt: 'Matched pair of heavy-gauge 22K gold Peshwai Toda bangles',
    tagline: 'Heavy-gauge gold with rawa granulation and lion-head terminal finials.',
    description: 'Traditional Maharashtrian heavy-gauge toda bangles, forged in 22KT yellow gold. Characterized by hand-soldered rawa granulation beads and hand-chased floral repoussé relief, reflecting Maratha royal jewellery heritage.',
    angles: [
      {
        file: 'bangle_angle_1_pair.webp',
        label: 'Angle 1: Matched Pair Display',
        caption: 'Presentation view of the matched heavy-gauge toda pair.'
      },
      {
        file: 'bangle_angle_2_terminal.webp',
        label: 'Angle 2: Terminal Finials',
        caption: 'Chased lion-head terminal finials with screw pin closure.'
      },
      {
        file: 'bangle_angle_3_engraving.webp',
        label: 'Angle 3: Floral Repoussé Relief',
        caption: 'Continuous hand-chased floral repoussé relief along the curved bangle arch.'
      },
      {
        file: 'bangle_angle_4_beads.webp',
        label: 'Angle 4: Granulated Rawa Beads',
        caption: 'Microscopic gold rawa granulation beads soldered along the outer ridge.'
      }
    ],
    baseNetWeight: 54.0,
    grossWeight: 54.0,
    stoneWeight: 'Pure 22K Gold without stones',
    stonePrice: 0,
    makingPercent: 13.0,
    purityOptions: ['22KT', '18KT'],
    sizes: [
      { label: '2.4 (57.2 mm)', weightMult: 0.92 },
      { label: '2.6 (60.3 mm - Standard)', weightMult: 1.0 },
      { label: '2.8 (63.5 mm)', weightMult: 1.08 }
    ],
    craftsmanship: 'Hand-Soldered Rawa, Chased Terminals, Antique Herbal Patina',
    hallmark: '100% BIS 916 Hallmark · Unique HUID Traceable'
  },
  {
    id: 'saaj-mangalsutra',
    ref: 'VM-MS-03',
    name: 'Kolhapuri Saaj & Wati Mangalsutra',
    category: 'Mangalsutras',
    collection: 'Mangalsutras',
    image: 'ceremony.webp',
    alt: 'Traditional Kolhapuri Saaj and sacred wati mangalsutra',
    tagline: 'Sacred Maharashtrian charms and auspicious wati bowls.',
    description: 'Featuring traditional twenty-one auspicious panadi (leaf) motifs symbolising ten avatars of Vishnu, sacred celestial signs, and twin gold wati bowls filled with auspicious turmeric vermilion blessing.',
    angles: [
      {
        file: 'ceremony.webp',
        label: 'Angle 1: Ceremonial Suite',
        caption: 'Full Kolhapuri Saaj strung with traditional leaves and wati pendants.'
      },
      {
        file: 'bridal.webp',
        label: 'Angle 2: Bridal Composition',
        caption: 'Layered bridal view with coordinating necklace and sacred beads.'
      }
    ],
    baseNetWeight: 42.0,
    grossWeight: 44.5,
    stoneWeight: '2.5 cts (Ruby drops & sacred black beads)',
    stonePrice: 12500,
    makingPercent: 12.5,
    purityOptions: ['22KT', '18KT'],
    sizes: [
      { label: '24\" Standard Length', weightMult: 1.0 },
      { label: '28\" Traditional Long Haar', weightMult: 1.15 }
    ],
    craftsmanship: 'Sacred Panadi Die-Stamping, Hand-Strung Black Beads',
    hallmark: '100% BIS 916 Hallmark · Unique HUID Traceable'
  },
  {
    id: 'verdant-pendant',
    ref: 'VM-GP-04',
    name: 'Emerald-Tone Geometric Pendant',
    category: 'Gemstones',
    collection: 'Gemstones',
    image: '1599643477877-530eb83abc8e.webp',
    alt: 'Green geometric emerald-cut pendant on delicate gold chain',
    tagline: 'A vivid green centre framed by clean metallic lines.',
    description: 'A contemporary pendant necklace exploring vibrant coloured stones and refined chain proportions. Designed for versatile everyday and evening wear.',
    angles: [
      {
        file: '1599643477877-530eb83abc8e.webp',
        label: 'Angle 1: Studio Frontal',
        caption: 'Vivid green emerald-cut centre stone on delicate 18KT gold chain.'
      }
    ],
    baseNetWeight: 8.5,
    grossWeight: 11.7,
    stoneWeight: '3.20 cts (Natural Emerald cabochon)',
    stonePrice: 34000,
    makingPercent: 15.0,
    purityOptions: ['18KT', '22KT'],
    sizes: [
      { label: '16\" Choker Length', weightMult: 0.95 },
      { label: '18\" Everyday Chain', weightMult: 1.0 }
    ],
    craftsmanship: 'Bezel Collet Setting, Micro-Facet Polishing',
    hallmark: '100% BIS Hallmarked · Unique HUID Traceable'
  },
  {
    id: 'twist-hoops',
    ref: 'VM-ED-05',
    name: 'Sculptural Everyday Gold Hoops',
    category: 'Everyday',
    collection: 'Everyday Gold',
    image: '1617038260897-41a1f14a8ca0.webp',
    alt: 'Twisted gold hoop earrings resting on pale stone',
    tagline: 'Gentle curves that catch and reflect everyday light.',
    description: 'Sculptural twists with a comfortable daily profile. A modern styling concept for lightweight gold earrings suitable for daily wear.',
    angles: [
      {
        file: '1617038260897-41a1f14a8ca0.webp',
        label: 'Angle 1: Front Pair',
        caption: 'Hand-formed twisted gold hoop earrings resting on ivory stone.'
      }
    ],
    baseNetWeight: 9.8,
    grossWeight: 9.8,
    stoneWeight: 'Solid 22K Gold',
    stonePrice: 0,
    makingPercent: 12.0,
    purityOptions: ['22KT', '18KT'],
    sizes: [
      { label: '20mm Petite Hoop', weightMult: 0.85 },
      { label: '28mm Statement Hoop', weightMult: 1.0 }
    ],
    craftsmanship: 'Seamless Tube Forging, High Mirror Finish',
    hallmark: '100% BIS 916 Hallmark · Unique HUID Traceable'
  },
  {
    id: 'crescent-necklace',
    ref: 'VM-NK-06',
    name: 'Layered Chandrakor Crescent Necklace',
    category: 'Necklaces',
    collection: 'Necklaces',
    image: '1599643478518-a784e5dc4c8f.webp',
    alt: 'Layered necklaces with crescent and geometric pendants',
    tagline: 'An elegant crescent silhouette with cascading chains.',
    description: 'Inspired by traditional Maharashtrian Chandrakor (crescent) motifs, combining tiered chains with subtle geometric pendants for a balanced, contemporary silhouette.',
    angles: [
      {
        file: '1599643478518-a784e5dc4c8f.webp',
        label: 'Angle 1: Studio Tiered View',
        caption: 'Tiered chains with crescent motifs and delicate gold drops.'
      }
    ],
    baseNetWeight: 22.4,
    grossWeight: 24.2,
    stoneWeight: '1.8 cts (Fine accent stones)',
    stonePrice: 8500,
    makingPercent: 13.5,
    purityOptions: ['22KT', '18KT'],
    sizes: [
      { label: '16\"-18\" Adjustable Tier', weightMult: 1.0 },
      { label: '18\"-20\" Deep Tier', weightMult: 1.1 }
    ],
    craftsmanship: 'Laser Link Welding, Die-Cut Chandrakor Charms',
    hallmark: '100% BIS 916 Hallmark · Unique HUID Traceable'
  },
  {
    id: 'halo-solitaire',
    ref: 'VM-RG-07',
    name: 'Classic Solitaire Halo Ring',
    category: 'Gemstones',
    collection: 'Gemstones',
    image: '1605100804763-247f67b3557e.webp',
    alt: 'Solitaire ring with brilliant centre stone and micro-halo',
    tagline: 'A luminous centre stone framed by fine micro-settings.',
    description: 'A timeless ring design featuring a brilliant centre accent stone bordered by micro-settings. An illustrative direction for engagement and anniversary commissions.',
    angles: [
      {
        file: '1605100804763-247f67b3557e.webp',
        label: 'Angle 1: Macro Overhead',
        caption: 'Solitaire centre stone bordered by micro-pave halo setting.'
      }
    ],
    baseNetWeight: 4.8,
    grossWeight: 5.9,
    stoneWeight: '1.1 cts total gemstone weight',
    stonePrice: 22000,
    makingPercent: 16.0,
    purityOptions: ['18KT', '22KT'],
    sizes: [
      { label: 'Size 12 (16.5 mm)', weightMult: 0.95 },
      { label: 'Size 14 (17.2 mm)', weightMult: 1.0 },
      { label: 'Size 16 (17.8 mm)', weightMult: 1.05 },
      { label: 'Size 18 (18.5 mm)', weightMult: 1.1 }
    ],
    craftsmanship: 'Micro-Pave Prong Setting, Hand-Finished Shank',
    hallmark: '100% BIS Hallmarked · Unique HUID Traceable'
  },
  {
    id: 'sapphire-drop',
    ref: 'VM-ER-08',
    name: 'Royal Sapphire & Pearl Drops',
    category: 'Gemstones',
    collection: 'Gemstones',
    image: '1535632066927-ab7c9ab60908.webp',
    alt: 'Sapphire blue colour drop earrings with floral filigree',
    tagline: 'Royal blue centre accents with floral filigree framing.',
    description: 'Expressive drop earrings with deep blue colour accents and floral filigree framing. An inspiration image for coloured gemstone festive jewellery.',
    angles: [
      {
        file: '1535632066927-ab7c9ab60908.webp',
        label: 'Angle 1: Studio Composition',
        caption: 'Deep blue colour accents with floral filigree framing.'
      }
    ],
    baseNetWeight: 14.2,
    grossWeight: 18.8,
    stoneWeight: '4.60 cts (Sapphire-tone accents & natural pearls)',
    stonePrice: 26000,
    makingPercent: 14.0,
    purityOptions: ['22KT', '18KT'],
    sizes: [
      { label: 'Standard Drop (38 mm)', weightMult: 1.0 }
    ],
    craftsmanship: 'Filigree Wirework, Grain Setting',
    hallmark: '100% BIS 916 Hallmark · Unique HUID Traceable'
  },
  {
    id: 'celebration-bridal',
    ref: 'VM-BR-09',
    name: 'Grand Peshwai Bridal Choker Suite',
    category: 'Necklaces',
    collection: 'Temple Suites',
    image: 'bridal.webp',
    alt: 'Grand traditional bridal jewellery set in velvet presentation case',
    tagline: 'A grand assembly of ornamental forms for wedding celebrations.',
    description: 'A grand assembly of ornamental forms for wedding celebrations, featuring intricate chokers, necklaces, and coordinating earrings. Handcrafted for family wedding commissions.',
    angles: [
      {
        file: 'bridal.webp',
        label: 'Angle 1: Velvet Presentation Suite',
        caption: 'Grand traditional bridal jewellery set in velvet presentation case.'
      },
      {
        file: 'showroom_showcase.webp',
        label: 'Angle 2: Showroom Showcase Display',
        caption: 'Illuminated showcase display inside the Vile Parle atelier.'
      }
    ],
    baseNetWeight: 88.0,
    grossWeight: 96.5,
    stoneWeight: '8.5 cts (Kundan stones & Basra seed pearls)',
    stonePrice: 42000,
    makingPercent: 14.0,
    purityOptions: ['22KT', '18KT'],
    sizes: [
      { label: '16\" Traditional Bridal Choker', weightMult: 1.0 },
      { label: '18\" Extended Length', weightMult: 1.08 }
    ],
    craftsmanship: 'Traditional Kundan Jadau, Chased Nakashi, Pearl Fringe',
    hallmark: '100% BIS 916 Hallmark · Unique HUID Traceable'
  }
];

// Persistent Saved Pieces State
let saved = [];
try {
  saved = JSON.parse(localStorage.getItem('vm-saved') || '[]');
  if (!Array.isArray(saved)) saved = [];
  saved = saved.filter(id => pieces.some(p => p.id === id));
} catch {
  saved = [];
}

let filter = 'All';
let repoFilter = 'All';
let query = '';
let sort = 'curated';
let toastTimer;

// Active state for Detail Page Calculator & Gallery
let detailPurity = '22KT';
let detailSizeIndex = 0;
let detailActiveAngle = 0;

// DOM Elements
const main = document.querySelector('main');
const dialog = document.querySelector('dialog');
const drawer = document.querySelector('#drawer');
const drawerBackdrop = document.querySelector('#drawer-backdrop');
const header = document.querySelector('#site-header');

// Helper Utilities
const esc = s => String(s || '').replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[c]));

const img = (file, alt, extra = '') => `<img src="${ASSET_DIR + file}" alt="${esc(alt)}" ${extra}>`;

const formatInr = n => '₹' + Math.round(n).toLocaleString('en-IN');

// Dynamic Live Price Calculator Function
function calculatePrice(p, purity = detailPurity, sizeIndex = detailSizeIndex) {
  const sizeObj = (p.sizes && p.sizes[sizeIndex]) ? p.sizes[sizeIndex] : { weightMult: 1.0 };
  const netWeight = (p.baseNetWeight || 10) * sizeObj.weightMult;
  const rate = BULLION_RATES[purity] || BULLION_RATES['22KT'];
  const goldValue = netWeight * rate;
  const stoneValue = p.stonePrice || 0;
  const makingCharges = goldValue * ((p.makingPercent || 14) / 100);
  const subtotal = goldValue + stoneValue + makingCharges;
  const gst = subtotal * 0.03; // Statutory 3% GST on jewellery in India
  const total = subtotal + gst;

  return {
    purity,
    rate,
    netWeight: netWeight.toFixed(2),
    goldValue,
    stoneValue,
    makingCharges,
    subtotal,
    gst,
    total
  };
}

// Product Card
function card(p) {
  const isSaved = saved.includes(p.id);
  const angleCount = p.angles ? p.angles.length : 1;
  return `
    <article class="product">
      <div class="product-image-wrap">
        <a href="#/piece/${p.id}" aria-label="View details for ${p.name}">
          ${img(p.image, p.alt, 'loading="lazy"')}
        </a>
        <button class="save" data-save="${p.id}" aria-label="${isSaved ? 'Remove from' : 'Save to'} your selection" aria-pressed="${isSaved}">
          ${isSaved ? '♥' : '♡'}
        </button>
      </div>
      <div class="product-info">
        <div>
          <p class="product-type">${p.category} · ${p.ref}</p>
          <h3><a href="#/piece/${p.id}">${p.name}</a></h3>
          <p class="product-desc">${p.tagline}</p>
        </div>
        <div class="product-card-actions">
          <a class="product-view-btn" href="#/piece/${p.id}">
            <span>Inspect Details (${angleCount} ${angleCount === 1 ? 'Angle' : 'Angles'})</span>
            <span aria-hidden="true">↗</span>
          </a>
          <button class="text-link" data-enquire="${p.id}">
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

// ==========================================================================
// 1. CINEMATIC FULL-BLEED HERO SECTION (Centrepiece with Velvet & Gold)
// ==========================================================================
function heroSection() {
  return `
    <section class="cinematic-hero" id="hero">
      <div class="hero-backdrop">
        <img 
          src="assets/hero_emerald_jewellery.webp" 
          alt="Handcrafted 22-karat Maharashtrian gold temple choker suite resting upon deep emerald green velvet" 
          class="hero-bg-img" 
          fetchpriority="high"
        >
        <div class="hero-scrim"></div>
      </div>

      <div class="hero-content">
        <div class="hero-content-inner">
          <div class="hero-pill-badge">
            <span class="hero-crest-mini"><img src="assets/vm_emblem.png" alt="" width="16" height="8"></span>
            <span>VILE PARLE EAST · ESTABLISHED 1949</span>
          </div>

          <h1 class="hero-title">
            Some things become<br>
            <em>part of your story.</em>
          </h1>

          <p class="hero-subtitle">
            Continuous Maharashtrian gold craftsmanship, quietly refined for generations that carry memory forward. Traditional temple suites, auspicious mangalsutras and gemstone jewellery.
          </p>

          <div class="hero-cta-group">
            <a class="button button-gold" href="#/collections">
              <span>Explore Curated Collections</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a class="button button-outline-light" href="#vile-parle-showroom">
              <span>Visit Vile Parle Showroom</span>
            </a>
          </div>

          <div class="hero-provenance-row">
            <div class="prov-item">
              <strong>Estd. 1949</strong>
              <span>Founded by V.M. Muslunkar</span>
            </div>
            <div class="prov-divider"></div>
            <div class="prov-item">
              <strong>Bespoke Bridal</strong>
              <span>Custom Karigar Commissions</span>
            </div>
            <div class="prov-divider"></div>
            <div class="prov-item">
              <strong>Relcon House</strong>
              <span>Shop 4, M.G. Road, Vile Parle East</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll to Discover</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 2. CHAPTER I: THE CURATED REPOSITORY (Asymmetrical Editorial Layouts)
// ==========================================================================
function chapter1CuratedRepository() {
  const pSaaj = pieces.find(p => p.id === 'saaj-mangalsutra') || pieces[2];
  const pToda = pieces.find(p => p.id === 'peshwai-toda') || pieces[1];
  const pSuite = pieces.find(p => p.id === 'temple-suite') || pieces[0];
  const pEveryday = pieces.find(p => p.id === 'twist-hoops') || pieces[4];

  return `
    <section class="chapter-section" id="curated-repository">
      <div class="section-inner">
        <div class="chapter-head">
          <div class="chapter-badge-title">
            <span class="chapter-number">CHAPTER I</span>
          </div>
          <h2>The Curated Repository</h2>
          <p class="chapter-sub">
            Collections rooted in ancestral Maharashtrian provenance, auspicious ceremony, and everyday elegance.
          </p>
        </div>

        <!-- Filter Pills Bar -->
        <div class="repository-filters" role="group" aria-label="Filter Curated Repository">
          ${['All Masterpieces', 'Mangalsutras', 'Temple Suites', 'Peshwai Toda', 'Everyday Gold', 'Gemstones'].map(f => `
            <button class="repo-pill ${f === repoFilter ? 'active' : ''}" data-repofilter="${f}">
              ${f}
            </button>
          `).join('')}
        </div>

        <!-- Asymmetrical Editorial Row 1: Dominant 7-col + Companion 5-col -->
        <div class="asymmetric-grid">
          <!-- Card 1: Dominant Card (Kolhapuri Saaj & Mangalsutras) -->
          <article class="editorial-card card-dominant">
            <div class="card-media-wrap">
              <span class="card-tag-floating">AUSPICIOUS BRIDAL · 22KT</span>
              <button class="card-save-floating" data-save="${pSaaj.id}" aria-label="Save ${pSaaj.name}" aria-pressed="${saved.includes(pSaaj.id)}">
                ${saved.includes(pSaaj.id) ? '♥' : '♡'}
              </button>
              <a href="#/piece/${pSaaj.id}">
                ${img(pSaaj.image, pSaaj.alt, 'loading="lazy"')}
              </a>
            </div>
            <div class="card-editorial-body">
              <div>
                <div class="card-ref-row">
                  <span>${pSaaj.collection}</span>
                  <span>REF: ${pSaaj.ref}</span>
                </div>
                <h3><a href="#/piece/${pSaaj.id}">${pSaaj.name}</a></h3>
                <p>
                  Thirty-seven sacred Maharashtrian elements, hand-beaten gold charms, and auspicious black beads celebrating union and familial blessing.
                </p>
              </div>
              <div class="card-action-bar">
                <a class="product-view-btn" href="#/piece/${pSaaj.id}">
                  <span>Inspect Details &amp; Price Calculator</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <button class="text-link" data-enquire="${pSaaj.id}">Enquire</button>
              </div>
            </div>
          </article>

          <!-- Card 2: Companion Card (Peshwai Toda Bangles) -->
          <article class="editorial-card card-companion">
            <div class="card-media-wrap">
              <span class="card-tag-floating">HEIRLOOM TODA · 22KT</span>
              <button class="card-save-floating" data-save="${pToda.id}" aria-label="Save ${pToda.name}" aria-pressed="${saved.includes(pToda.id)}">
                ${saved.includes(pToda.id) ? '♥' : '♡'}
              </button>
              <a href="#/piece/${pToda.id}">
                ${img('bangle_angle_1_pair.webp', pToda.alt, 'loading="lazy"')}
              </a>
            </div>
            <div class="card-editorial-body">
              <div>
                <div class="card-ref-row">
                  <span>${pToda.collection}</span>
                  <span>REF: ${pToda.ref}</span>
                </div>
                <h3><a href="#/piece/${pToda.id}">${pToda.name}</a></h3>
                <p>
                  Heirloom heavy-gauge toda forged with hand-soldered rawa granulation beads and hand-chased lion finials.
                </p>
              </div>
              <div class="card-action-bar">
                <a class="product-view-btn" href="#/piece/${pToda.id}">
                  <span>View 4 Angles &amp; Sizing</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <button class="text-link" data-enquire="${pToda.id}">Enquire</button>
              </div>
            </div>
          </article>
        </div>

        <!-- Asymmetrical Editorial Row 2: 2 Wide Feature Cards -->
        <div class="asymmetric-grid-row-2">
          <!-- Card 3: The Royal Peshwai Temple Suite -->
          <article class="editorial-card card-wide">
            <div class="card-media-wrap">
              <span class="card-tag-floating">TEMPLE GOLD · 4 ANGLES</span>
              <button class="card-save-floating" data-save="${pSuite.id}" aria-label="Save ${pSuite.name}" aria-pressed="${saved.includes(pSuite.id)}">
                ${saved.includes(pSuite.id) ? '♥' : '♡'}
              </button>
              <a href="#/piece/${pSuite.id}">
                ${img('suite_angle_1_full.webp', pSuite.alt, 'loading="lazy"')}
              </a>
            </div>
            <div class="card-editorial-body">
              <div>
                <div class="card-ref-row">
                  <span>${pSuite.collection}</span>
                  <span>REF: ${pSuite.ref}</span>
                </div>
                <h3><a href="#/piece/${pSuite.id}">${pSuite.name}</a></h3>
                <p>
                  Lakshmi repoussé central medallion, triple basra pearl strands, and coordinating tiered floral jhumkas. Includes interactive 4-angle gallery and live calculator.
                </p>
              </div>
              <div class="card-action-bar">
                <a class="product-view-btn" href="#/piece/${pSuite.id}">
                  <span>Inspect 4 Angles &amp; Live Calculator</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <button class="text-link" data-enquire="${pSuite.id}">Enquire</button>
              </div>
            </div>
          </article>

          <!-- Card 4: Daily Minimalist Gold & Gemstones -->
          <article class="editorial-card card-wide">
            <div class="card-media-wrap">
              <span class="card-tag-floating">EVERYDAY GOLD · 22KT / 18KT</span>
              <button class="card-save-floating" data-save="${pEveryday.id}" aria-label="Save ${pEveryday.name}" aria-pressed="${saved.includes(pEveryday.id)}">
                ${saved.includes(pEveryday.id) ? '♥' : '♡'}
              </button>
              <a href="#/piece/${pEveryday.id}">
                ${img(pEveryday.image, pEveryday.alt, 'loading="lazy"')}
              </a>
            </div>
            <div class="card-editorial-body">
              <div>
                <div class="card-ref-row">
                  <span>${pEveryday.collection}</span>
                  <span>REF: ${pEveryday.ref}</span>
                </div>
                <h3><a href="#/piece/${pEveryday.id}">${pEveryday.name}</a></h3>
                <p>
                  Sculptural everyday hoops, emerald geometric pendants, and lightweight daily jewellery forged with comfortable profiles.
                </p>
              </div>
              <div class="card-action-bar">
                <a class="product-view-btn" href="#/piece/${pEveryday.id}">
                  <span>View Details &amp; Weight Guide</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <button class="text-link" data-enquire="${pEveryday.id}">Enquire</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 3. FEATURED IN-STORE SHOWCASE (4 Masterpieces Ready for Viewing)
// ==========================================================================
function showcaseSection() {
  const showcaseItems = [
    pieces.find(p => p.id === 'temple-suite') || pieces[0],
    pieces.find(p => p.id === 'peshwai-toda') || pieces[1],
    pieces.find(p => p.id === 'saaj-mangalsutra') || pieces[2],
    pieces.find(p => p.id === 'verdant-pendant') || pieces[3]
  ];

  return `
    <section class="showcase-section" id="featured-showcase">
      <div class="section-inner">
        <div class="section-head">
          <div>
            <p class="eyebrow">IN-STORE SHOWROOM SELECTION</p>
            <h2>Handcrafted Masterpieces Ready for Viewing</h2>
            <p style="font-size: 0.9375rem; color: var(--ink-600); margin-top: 6px; max-width: 620px;">
              Each piece is available to inspect in person at our Vile Parle showroom. Select any piece to view all 4 angles, calculate estimated prices, and prepare your enquiry.
            </p>
          </div>
          <button class="text-link" id="home-saved-view-btn">
            <span>Your Saved Pieces (<span id="home-saved-counter">${saved.length}</span>)</span>
            <span>♡</span>
          </button>
        </div>

        <div class="showcase-grid-4">
          ${showcaseItems.map(p => {
            const isSaved = saved.includes(p.id);
            const angleText = p.angles && p.angles.length > 1 ? `${p.angles.length} ANGLES` : 'IN STORE';
            return `
              <article class="showcase-card">
                <div class="showcase-img-wrap">
                  <span class="showcase-badge-top">${angleText}</span>
                  <button class="card-save-floating" data-save="${p.id}" aria-label="Save ${p.name}" aria-pressed="${isSaved}">
                    ${isSaved ? '♥' : '♡'}
                  </button>
                  <a href="#/piece/${p.id}">
                    ${img(p.image, p.alt, 'loading="lazy"')}
                  </a>
                </div>
                <div class="showcase-info">
                  <div>
                    <div class="showcase-category-ref">
                      <span>${p.category}</span>
                      <span>${p.ref}</span>
                    </div>
                    <h4><a href="#/piece/${p.id}">${p.name}</a></h4>
                    <p>${p.tagline}</p>
                  </div>
                  <div class="showcase-card-foot">
                    <a class="showcase-inspect-link" href="#/piece/${p.id}">
                      <span>Inspect 4 Angles &amp; Price</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <button class="text-link" data-enquire="${p.id}">Enquire</button>
                  </div>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 4. CHAPTER II: ROOTS, LINEAGE & CULTURAL PATRONAGE (Dark Heritage Module)
// ==========================================================================
function chapter2HeritageStory() {
  return `
    <section class="heritage-dark-section" id="heritage-lineage">
      <div class="section-inner">
        <div class="heritage-grid-split">
          <!-- Left Column: Story & Trust Pillars -->
          <div class="heritage-editorial-copy">
            <span class="chapter-number">CHAPTER II</span>
            <h2>Roots, Lineage &amp; Cultural Patronage</h2>
            
            <blockquote class="heritage-lead-quote">
              “In Maharashtra’s domestic life, gold never serves mere ornamentation; it is an irrevocable seal of divine protection, filial affection and sacred inheritance.”
            </blockquote>

            <p>
              Founded in 1949 by Vasant Mahadev Muslunkar, our atelier has remained anchored at Shop No. 4, Relcon House on Mahatma Gandhi Road. For three generations, families across Vile Parle and suburban Mumbai have entrusted us to mark weddings, sacred thread ceremonies, and newborn milestones.
            </p>

            <div class="dark-pillars-grid">
              <div class="dark-pillar-card">
                <span class="pillar-icon">✦</span>
                <div>
                  <h4 class="pillar-title">Purity of Ritual Guarantee</h4>
                  <p class="pillar-desc">
                    Every gram certified under strict BIS 916 hallmarking with traceable HUID. Uncompromising metal integrity passed from father to son.
                  </p>
                </div>
              </div>

              <div class="dark-pillar-card">
                <span class="pillar-icon">⚜</span>
                <div>
                  <h4 class="pillar-title">Ancestral Karigar Guilds</h4>
                  <p class="pillar-desc">
                    Preserving living techniques—repoussé (chitai), rawa granulation, and traditional kundan settings—that industrial stamping cannot match.
                  </p>
                </div>
              </div>

              <div class="dark-pillar-card">
                <span class="pillar-icon">🏛</span>
                <div>
                  <h4 class="pillar-title">Unhurried Personal Consultation</h4>
                  <p class="pillar-desc">
                    Sit comfortably in our Vile Parle showroom with staff who understand traditional customs and your family’s heirloom vision.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a class="button button-gold" href="#vile-parle-showroom">
                <span>Schedule Showroom Viewing</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Real Showroom Interior Photo -->
          <div class="heritage-photo-wrap">
            ${img('showroom_interior.webp', 'Inside the VM Jewellers showroom at Relcon House, Vile Parle East', 'loading="lazy"')}
            <div class="photo-caption-bar">
              <span>Shrine of Real Trust: The Vile Parle Jewellery Chamber</span>
              <a href="#vile-parle-showroom" style="color: var(--gold-300); font-size: 0.6875rem; text-decoration: underline;">Visit Atelier ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 5. CHAPTER III: THE MICRO-ARCHITECTURE OF THE KARIGAR (Interactive Hotspots)
// ==========================================================================
function chapter3MicroArchitecture() {
  return `
    <section class="karigar-section" id="karigar-architecture">
      <div class="section-inner">
        <div class="chapter-head">
          <div class="chapter-badge-title">
            <span class="chapter-number">CHAPTER III</span>
          </div>
          <h2>The Micro-Architecture of the Karigar</h2>
          <p class="chapter-sub">
            Explore the intricate engineering of our signature Peshwai Toda, fashioned in the same Maharashtrian traditions that graced royal Maratha households.
          </p>
        </div>

        <div class="karigar-interactive-split">
          <!-- Visual with Pulsing Hotspots -->
          <div class="karigar-visual-container">
            ${img('bangle_angle_1_pair.webp', 'Detail view of handcrafted 22K gold Peshwai Toda bangles', 'loading="lazy" id="karigar-main-img"')}
            
            <!-- Hotspot 1: Granulation -->
            <button 
              class="karigar-hotspot-pin active" 
              style="top: 76%; left: 19%;" 
              data-hotspot="1" 
              aria-label="Granulation Rawa Work Hotspot"
            >
              1
            </button>

            <!-- Hotspot 2: Terminals -->
            <button 
              class="karigar-hotspot-pin" 
              style="top: 14%; left: 39%;" 
              data-hotspot="2" 
              aria-label="Die-Stamped Finials Hotspot"
            >
              2
            </button>

            <!-- Hotspot 3: Patina Wash -->
            <button 
              class="karigar-hotspot-pin" 
              style="top: 84%; left: 45%;" 
              data-hotspot="3" 
              aria-label="Antique Herbal Patina Hotspot"
            >
              3
            </button>
          </div>

          <!-- Interactive Feature Cards with Macro Previews -->
          <div class="karigar-cards-list">
            <!-- Card 1 -->
            <div class="karigar-craft-card active" data-card="1">
              <div class="karigar-card-macro-thumb">
                <img src="assets/bangle_angle_4_beads.webp" alt="Hand-soldered 22K gold rawa granulation beads macro preview" width="76" height="76" loading="lazy">
              </div>
              <div class="karigar-card-content">
                <div class="karigar-card-head">
                  <span class="karigar-card-num">1</span>
                  <h4>Hand-Soldered Granulation (Rawa Work)</h4>
                </div>
                <p>
                  Microscopic spheres of pure 22K gold are hand-rolled and fused at precise flame temperatures without excess solder, creating the distinctive textured ridge of Peshwai jewellery.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="karigar-craft-card" data-card="2">
              <div class="karigar-card-macro-thumb">
                <img src="assets/bangle_angle_2_terminal.webp" alt="Die-stamped lion head terminal finials macro preview" width="76" height="76" loading="lazy">
              </div>
              <div class="karigar-card-content">
                <div class="karigar-card-head">
                  <span class="karigar-card-num">2</span>
                  <h4>Die-Stamped &amp; Hand-Chased Finials</h4>
                </div>
                <p>
                  Traditional lion-head and peacock terminal finials chased with single-point chisels to impart depth and royal character without weakening the structural gold integrity.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="karigar-craft-card" data-card="3">
              <div class="karigar-card-macro-thumb">
                <img src="assets/bangle_angle_3_engraving.webp" alt="Antique geru and herbal patina macro preview" width="76" height="76" loading="lazy">
              </div>
              <div class="karigar-card-content">
                <div class="karigar-card-head">
                  <span class="karigar-card-num">3</span>
                  <h4>Antique Geru &amp; Herbal Patina</h4>
                </div>
                <p>
                  An age-old herbal wash settles into recessed grooves, highlighting high relief polish while leaving deep ancestral shadows that resist daily tarnish.
                </p>
              </div>
            </div>

            <div style="margin-top: 10px;">
              <a class="button button-primary" href="#/piece/peshwai-toda" style="width: 100%;">
                <span>Inspect Toda Multi-Angle Macro &amp; Sizing ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 6. CUSTOMER EXPERIENCES ("Words from our customers")
// ==========================================================================
function customerExperiencesSection() {
  return `
    <section class="customer-words-section" id="words-from-customers">
      <div class="customer-words-head">
        <p class="eyebrow" style="justify-content: center;">WORDS FROM OUR CUSTOMERS</p>
        <h2>Generations of trust, in their own words.</h2>
        <div class="gold-divider-centered"></div>
        <p class="customer-words-note">
          Selected Google review excerpts supplied for this concept preview.
        </p>
      </div>

      <div class="customer-reviews-container">
        <!-- Garrgi Doshii -->
        <article class="customer-review-card">
          <div class="customer-quote-mark" aria-hidden="true">“</div>
          <blockquote class="customer-quote">
            “Lovely service and loads of options in jewellery”
          </blockquote>
          <div class="customer-author">
            <span class="customer-name">— Garrgi Doshii</span>
            <span class="customer-source">Verified Google review excerpt · Local Patron</span>
          </div>
        </article>

        <!-- shrushti nhivekar -->
        <article class="customer-review-card">
          <div class="customer-quote-mark" aria-hidden="true">“</div>
          <blockquote class="customer-quote">
            “Quality is top-notch, and the staff is super helpful.”
          </blockquote>
          <div class="customer-author">
            <span class="customer-name">— shrushti nhivekar</span>
            <span class="customer-source">Verified Google review excerpt · Local Patron</span>
          </div>
        </article>

        <!-- Nitin Sawant -->
        <article class="customer-review-card">
          <div class="customer-quote-mark" aria-hidden="true">“</div>
          <blockquote class="customer-quote">
            “They have lot of variety and designs to offer.”
          </blockquote>
          <div class="customer-author">
            <span class="customer-name">— Nitin Sawant</span>
            <span class="customer-source">Verified Google review excerpt · Local Patron</span>
          </div>
        </article>
      </div>

      <div class="customer-words-foot">
        <a class="text-link" href="${BUSINESS_INFO.mapsQueryUrl}" target="_blank" rel="noopener">
          <span>Read verified reviews on Google Maps</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  `;
}

// ==========================================================================
// 7. CHAPTER IV: THE VILE PARLE ATELIER (Showroom & Directions)
// ==========================================================================
function chapter4AtelierShowroom() {
  return `
    <section class="showroom-invitation-section" id="vile-parle-showroom">
      <div class="section-inner">
        <div class="showroom-grid">
          <!-- Real Storefront & Interior Photographs -->
          <div class="showroom-visual-col">
            <div class="showroom-photo-main">
              ${img('storefront_exterior.webp', 'VM Jewellers exterior storefront at Relcon House on M.G. Road, Vile Parle East', 'loading="lazy"')}
              <div class="showroom-photo-caption">
                Storefront: Shop No. 4, Relcon House, M.G. Road, Vile Parle East
              </div>
            </div>
            <div class="showroom-photo-sub">
              ${img('showroom_interior.webp', 'VM Jewellers showroom interior with jewellery consultation counters', 'loading="lazy"')}
            </div>
          </div>

          <!-- Verified Showroom Address and Contact Panel -->
          <div class="showroom-info-col">
            <p class="eyebrow">CHAPTER IV · SHOWROOM</p>
            <h2>The Vile Parle Atelier</h2>
            <p style="color: var(--ink-600); line-height: 1.7; margin-bottom: 20px;">
              View designs in person, examine craftsmanship under magnification, and discuss custom jewellery requirements with our experienced staff.
            </p>

            <div class="showroom-address-card">
              <strong>${BUSINESS_INFO.signboardName}</strong>
              <p>
                ${BUSINESS_INFO.address.shop}<br>
                ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.locality}<br>
                ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}
              </p>
              <p class="showroom-landmark-text">
                📍 Landmark: ${BUSINESS_INFO.address.landmark}
              </p>
            </div>

            <dl class="showroom-details-list">
              <div class="showroom-detail-item">
                <dt>Showroom Landline</dt>
                <dd>
                  <a href="${BUSINESS_INFO.telLink}" style="font-weight: 700; color: var(--green-950);">
                    ${BUSINESS_INFO.landline}
                  </a> (Direct Landline)
                </dd>
              </div>
              <div class="showroom-detail-item">
                <dt>Visiting Hours</dt>
                <dd>
                  <strong style="color: var(--green-950); font-weight: 600;">Tuesday to Sunday: 10:30 am – 8:30 pm</strong><br>
                  <span style="color: #991b1b; font-size: 0.8125rem; font-weight: 500;">Monday: Closed</span>
                </dd>
              </div>
              <div class="showroom-detail-item">
                <dt>Showroom Offerings</dt>
                <dd>22K Hallmarked Gold, Pure Silver, Necklaces, Traditional Mangalsutras &amp; Gemstones</dd>
              </div>
            </dl>

            <div class="showroom-welcome-callout">
              <span class="callout-icon">✦</span>
              <p>
                <strong>Showroom Consultations:</strong> Walk-ins are warmly welcomed during regular hours. For custom bridal trousseau planning, hallmark testing demonstrations or heirloom remodelling, private consultations with our senior goldsmiths are hosted at our Vile Parle counter.
              </p>
            </div>

            <div class="showroom-cta-row">
              <a class="button button-primary" href="${BUSINESS_INFO.mapsQueryUrl}" target="_blank" rel="noopener">
                <span>Get Directions on Google Maps</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a class="button button-outline" href="${BUSINESS_INFO.telLink}">
                <span>Call Showroom (022 2615 3055)</span>
                <span aria-hidden="true">☎</span>
              </a>
              <button class="button button-outline" data-enquire="general">
                <span>Enquire Online</span>
                <span aria-hidden="true">✦</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Homepage Composite
function home() {
  return `
    ${heroSection()}
    ${chapter1CuratedRepository()}
    ${showcaseSection()}
    ${chapter2HeritageStory()}
    ${chapter3MicroArchitecture()}
    ${customerExperiencesSection()}
    ${chapter4AtelierShowroom()}
  `;
}

// Catalogue / Collections View
function catalogue(isSaved = false) {
  return `
    <section class="page-top">
      <p class="eyebrow">${isSaved ? 'SAVED SELECTION' : 'JEWELLERY COLLECTIONS'}</p>
      <h1>${isSaved ? 'Your Saved Pieces' : 'Explore Collections'}</h1>
      <p class="page-top-lead">
        ${isSaved
          ? 'Pieces you have saved during this browsing session. You can review them here, inspect 4 angles and live estimates, or prepare an enquiry for your showroom visit.'
          : 'Browse illustrative jewellery designs across necklaces, mangalsutras, gemstone jewellery, and everyday gold. Specifications, weight, and pricing are confirmed at our Vile Parle showroom.'}
      </p>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="section-inner">
        ${!isSaved ? `
          <div class="toolbar">
            <div class="filters" role="group" aria-label="Filter by jewellery category">
              ${['All', 'Necklaces', 'Mangalsutras', 'Gemstones', 'Everyday'].map(cat => `
                <button class="filter ${cat === filter ? 'active' : ''}" data-filter="${cat}" aria-pressed="${cat === filter}">
                  ${cat}
                </button>
              `).join('')}
            </div>

            <div class="search-box">
              <span aria-hidden="true" style="color: var(--gold-600);">⌕</span>
              <input type="search" aria-label="Search jewellery pieces" placeholder="Search by name, ref or category..." value="${esc(query)}">
              ${query ? '<button id="clear-search-btn" style="color: var(--ink-400); font-size: 13px;" aria-label="Clear search">✕</button>' : ''}
            </div>
          </div>
        ` : ''}

        <div class="result-line">
          <span id="result-count" role="status" aria-live="polite"></span>
          ${!isSaved ? `
            <label>
              Sort:
              <select aria-label="Sort jewellery pieces" id="sort-select">
                <option value="curated" ${sort === 'curated' ? 'selected' : ''}>Curated</option>
                <option value="az" ${sort === 'az' ? 'selected' : ''}>Name: A to Z</option>
                <option value="za" ${sort === 'za' ? 'selected' : ''}>Name: Z to A</option>
              </select>
            </label>
          ` : `
            <div style="display: flex; gap: 14px; align-items: center;">
              <button class="button button-primary" id="export-saved-whatsapp" style="padding: 7px 16px; min-height: 38px; font-size: 0.6875rem;">
                <span>Enquire About Saved Pieces</span>
              </button>
              <button id="clear-all-saved" class="text-link" style="color: #ba1a1a; font-size: 0.6875rem;">
                Clear Selection
              </button>
            </div>
          `}
        </div>

        <div class="products" id="product-grid"></div>

        <p style="font-size: 0.75rem; color: var(--ink-400); margin-top: 30px; text-align: center;">
          Sample pieces are presented for concept illustration. Metal purity, stones, weight, and pricing are verified in person at our Vile Parle showroom.
        </p>
      </div>
    </section>
  `;
}

// Dynamic Grid Updater
function updateGrid() {
  const isSaved = location.hash.startsWith('#/saved');
  const countEl = document.querySelector('#result-count');
  const gridEl = document.querySelector('#product-grid');
  if (!gridEl) return;

  let shown = pieces.filter(p => {
    if (isSaved) return saved.includes(p.id);
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesQuery = `${p.name} ${p.category} ${p.ref} ${p.description}`.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  if (sort === 'az') shown.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'za') shown.sort((a, b) => b.name.localeCompare(a.name));

  if (countEl) {
    countEl.textContent = `${shown.length} ${shown.length === 1 ? 'piece' : 'pieces'} ${isSaved ? 'saved' : 'available'}`;
  }

  gridEl.innerHTML = shown.length
    ? shown.map(card).join('')
    : `
      <div class="empty">
        <p class="eyebrow" style="justify-content: center;">${isSaved ? 'NO SAVED PIECES' : 'NO RESULTS'}</p>
        <h2>${isSaved ? 'Your selection is currently empty.' : 'No matching pieces found.'}</h2>
        <p>
          ${isSaved
            ? 'Browse our collections and tap the heart icon on any piece to save it for your showroom visit.'
            : 'Try adjusting your search terms or view our complete jewellery collection.'}
        </p>
        ${isSaved ? '<a class="button button-primary" href="#/collections">Explore Collections ↗</a>' : '<button class="button button-primary" data-reset>View All Pieces ↗</button>'}
      </div>
    `;
}

// ==========================================================================
// 8. UPGRADED INDIVIDUAL PRODUCT DETAIL EXPERIENCE (4-Angle Gallery & Calculator)
// ==========================================================================
function detail(p) {
  const isSaved = saved.includes(p.id);
  const angles = p.angles && p.angles.length > 0 ? p.angles : [{ file: p.image, label: 'Front View', caption: p.tagline }];
  const currentAngle = angles[detailActiveAngle] || angles[0];
  const related = pieces.filter(x => x.id !== p.id && x.category === p.category).concat(pieces.filter(x => x.id !== p.id)).slice(0, 3);
  const calc = calculatePrice(p, detailPurity, detailSizeIndex);
  const bgTheme = (p.id === 'temple-suite' || p.id === 'celebration-bridal' || p.id === 'halo-solitaire') ? 'dark-canvas' : 'light-canvas';

  return `
    <div class="detail-wrap">
      <div class="breadcrumb">
        <a href="#/collections">Collections</a> / <a href="#/collections?category=${p.category}">${p.category}</a> / <span>${p.name}</span>
      </div>

      <div class="detail-split">
        <!-- Left Column: Interactive 4-Angle Gallery -->
        <div class="gallery-column">
          <div class="gallery-main-viewport ${bgTheme}">
            <span class="gallery-angle-tag" id="main-angle-tag">${currentAngle.label}</span>
            <button class="gallery-zoom-trigger" id="gallery-zoom-btn" data-zoom-img="${currentAngle.file}" aria-label="Enlarge and inspect macro photograph">
              <span>Enlarge ⤢</span>
            </button>
            <img 
              src="${ASSET_DIR + currentAngle.file}" 
              alt="${esc(currentAngle.caption || p.name)}" 
              id="gallery-main-img" 
              class="gallery-main-img" 
              fetchpriority="high"
            >
          </div>
          <div class="gallery-caption-strip" id="gallery-caption-strip">
            ${currentAngle.caption}
          </div>

          <!-- 4-Thumbnail Strip -->
          <div class="gallery-thumbs-row" role="group" aria-label="Product photography angles">
            ${angles.map((ang, idx) => `
              <button 
                class="gallery-thumb-btn ${idx === detailActiveAngle ? 'active' : ''}" 
                data-angle-index="${idx}" 
                aria-label="View ${ang.label}"
              >
                ${img(ang.file, ang.label)}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Right Column: Specifications & Interactive Live Calculator -->
        <div class="info-calculator-column">
          <div class="detail-header">
            <div class="detail-eyebrow-ref">
              <span>${p.category} · ${p.collection || ''}</span>
              <span>REF: ${p.ref}</span>
            </div>
            <h1>${p.name}</h1>
            <span class="sample-tag">CONCEPT DEMONSTRATION · 100% BIS HALLMARKED</span>
            <p class="detail-desc">${p.description}</p>
          </div>

          <!-- Option Panel 1: Metal Purity Selector -->
          <div class="option-panel">
            <div class="option-group-label">
              <span>Select Metal Purity</span>
              <span style="color: var(--gold-700); font-size: 0.6875rem;">Daily Rate: ${formatInr(BULLION_RATES[detailPurity])}/g</span>
            </div>
            <div class="purity-pills-row">
              ${(p.purityOptions || ['22KT', '18KT']).map(pur => `
                <button class="purity-pill ${pur === detailPurity ? 'active' : ''}" data-purity="${pur}">
                  ${pur === '22KT' ? '22KT Yellow Gold (91.6% Purity)' : '18KT Fine Gold (75.0% Purity)'}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Option Panel 2: Size Selector with Visual Size Guide Link -->
          <div class="option-panel">
            <div class="option-group-label">
              <span>Select Size / Length</span>
              <button class="size-guide-link" data-open-sizeguide="${p.category}">View Visual Size Guide 📏</button>
            </div>
            <div class="size-buttons-row">
              ${(p.sizes || [{ label: 'Standard', weightMult: 1.0 }]).map((sz, idx) => `
                <button class="size-btn ${idx === detailSizeIndex ? 'active' : ''}" data-size-idx="${idx}">
                  ${sz.label}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Interactive Price-Estimate Calculator Box -->
          <div class="price-calculator-card" id="price-calculator-box">
            <div class="calc-header">
              <span class="calc-title">Interactive Price Estimate Breakdown</span>
              <span class="calc-rate-badge">${calc.purity} Gold @ ${formatInr(calc.rate)}/g</span>
            </div>

            <table class="calc-table">
              <tbody>
                <tr>
                  <td>Net Gold Metal Value (${calc.netWeight}g)</td>
                  <td id="calc-gold-val">${formatInr(calc.goldValue)}</td>
                </tr>
                <tr>
                  <td>Gemstones &amp; Natural Pearls</td>
                  <td id="calc-stone-val">${calc.stoneValue ? formatInr(calc.stoneValue) : 'Included / Solid Gold'}</td>
                </tr>
                <tr>
                  <td>Handcrafted Karigar Making Charges (${p.makingPercent || 14}%)</td>
                  <td id="calc-making-val">${formatInr(calc.makingCharges)}</td>
                </tr>
                <tr>
                  <td>Statutory GST (3.0% on Fine Jewellery)</td>
                  <td id="calc-gst-val">${formatInr(calc.gst)}</td>
                </tr>
                <tr class="calc-total-row">
                  <td>Estimated In-Store Price</td>
                  <td>
                    <span class="calc-total-amount" id="calc-total-amount">${formatInr(calc.total)}</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="calc-disclaimer">
              ✦ <strong>Transparent Valuation Guarantee:</strong> All estimates are illustrative based on today's reference bullion rate. Exact gold weight, purity testing, and current daily market rate are confirmed in person at VM Jewellers, Vile Parle East.
            </div>
          </div>

          <!-- Primary Showroom CTAs -->
          <div class="detail-cta-row">
            <button class="button button-primary" data-reserve="${p.id}">
              <span>Reserve for In-Store Viewing ↗</span>
            </button>
            <button class="button button-outline" data-enquire="${p.id}">
              <span>Enquire on WhatsApp (Demo Preview)</span>
            </button>
            <a class="button button-outline" href="${BUSINESS_INFO.telLink}">
              <span>Call Showroom: ${BUSINESS_INFO.landline} ☎</span>
            </a>
            <button class="button button-outline" data-save="${p.id}" aria-pressed="${isSaved}">
              <span>${isSaved ? '♥ Saved in Your Selection' : '♡ Save This Piece'}</span>
            </button>
          </div>

          <!-- Technical Specifications Table -->
          <h3 style="font-size: 1.15rem; margin-bottom: 12px; color: var(--green-950);">Technical Specifications</h3>
          <table class="detail-specs-table">
            <tbody>
              <tr>
                <th>Hallmarking Certification</th>
                <td>${p.hallmark || '100% BIS 916 Hallmarked · Unique HUID Traceable'}</td>
              </tr>
              <tr>
                <th>Selected Gold Purity</th>
                <td id="spec-purity-cell">${calc.purity === '22KT' ? '22 Karat (91.6% Pure Gold)' : '18 Karat (75.0% Fine Gold)'}</td>
              </tr>
              <tr>
                <th>Approx. Net Gold Weight</th>
                <td id="spec-weight-cell">~${calc.netWeight} grams</td>
              </tr>
              <tr>
                <th>Gross Weight</th>
                <td>~${p.grossWeight || calc.netWeight} grams</td>
              </tr>
              <tr>
                <th>Gemstones &amp; Settings</th>
                <td>${p.stoneWeight || 'Solid Gold / No Gemstones'}</td>
              </tr>
              <tr>
                <th>Craftsmanship Guild</th>
                <td>${p.craftsmanship || 'Hand Repoussé, Chased Rawa Work'}</td>
              </tr>
              <tr>
                <th>Showroom Availability</th>
                <td>Available to inspect at Shop 4, Relcon House, Vile Parle East</td>
              </tr>
            </tbody>
          </table>

          <!-- Collapsible Information Accordions -->
          <div class="detail-accordions">
            <details open>
              <summary>Showroom Viewing &amp; Trial</summary>
              <p>
                Jewellery is best appreciated in person. Visit our Vile Parle East showroom to inspect designs, feel their weight and balance, and discuss customizations with our team.
              </p>
            </details>

            <details>
              <summary>Custom Bridal Orders &amp; Heirloom Remodelling</summary>
              <p>
                We welcome bespoke bridal commissions and heirloom gold remodelling. Gold purity, stone preferences, weight, and quotation details are confirmed directly at the store.
              </p>
            </details>

            <details>
              <summary>Purity Verification &amp; Hallmarking</summary>
              <p>
                Every piece is assayed under strict Bureau of Indian Standards (BIS) norms with mandatory HUID stamps, guaranteeing authentic gold purity.
              </p>
            </details>
          </div>
        </div>
      </div>

      <!-- Related Collections Section -->
      <section class="section" style="padding-top: 50px; border-top: 1px solid var(--line); margin-top: 50px;">
        <div class="section-head">
          <div>
            <p class="eyebrow">EXPLORE MORE</p>
            <h2>You may also like to view.</h2>
          </div>
          <a class="text-link" href="#/collections">All Collections <span>↗</span></a>
        </div>
        <div class="products">
          ${related.map(card).join('')}
        </div>
      </section>
    </div>
  `;
}

// Our Story View
function story() {
  return `
    <section class="page-top">
      <p class="eyebrow">OUR HERITAGE · VILE PARLE EAST</p>
      <h1>Established in 1949.<br>Serving family celebrations.</h1>
      <p class="page-top-lead">
        A neighbourhood jeweller rooted in Vile Parle East for over seven decades, built on trust, personal care and enduring relationships.
      </p>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="section-inner">
        <div class="story-split" style="margin-bottom: 60px;">
          <div class="story-photo-wrap">
            ${img('showroom_interior.webp', 'Inside the VM Jewellers showroom with long jewellery counters', 'fetchpriority="high"')}
            <div class="story-photo-caption">
              Photograph: Inside the VM Jewellers showroom at Relcon House, Vile Parle East
            </div>
          </div>
          <div class="story-copy">
            <p class="eyebrow">OUR BEGINNINGS</p>
            <h2>Founded by Vasant Mahadev Muslunkar</h2>
            <p>
              TownParle records and local business directories trace the founding of the business to 1949 by Vasant Mahadev Muslunkar. What began as a neighbourhood goldsmith practice has grown with Vile Parle East, serving three generations of families.
            </p>
            <p>
              Operating as VM Jewellers / V.M. Muslunkar &amp; Sons Jewellers at Shop 4, Relcon House on M.G. Road, the store offers gold, silver, necklaces, mangalsutras, and gemstone jewellery for weddings, festivals, and personal occasions.
            </p>
          </div>
        </div>

        <div class="story-split" style="margin-bottom: 60px;">
          <div class="story-copy">
            <p class="eyebrow">THE SHOWROOM EXPERIENCE</p>
            <h2>Unhurried consultation in Vile Parle</h2>
            <p>
              Selecting jewellery is an intimate family milestone. We invite you to sit comfortably at our Relcon House showroom, examine pieces at your own pace, and receive honest guidance from staff who have served the neighbourhood for years.
            </p>
            <div style="margin-top: 24px;">
              <a class="button button-primary" href="#/visit">Visit Showroom Details ↗</a>
            </div>
          </div>
          <div class="story-photo-wrap">
            ${img('showroom_showcase.webp', 'Jewellery display shelf at VM Jewellers showroom', 'loading="lazy"')}
            <div class="story-photo-caption">
              Photograph: Showcase displays at the Vile Parle showroom
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Showroom / Visit Page
function visit() {
  return `
    <section class="page-top">
      <p class="eyebrow">SHOWROOM &amp; DIRECTIONS</p>
      <h1>Visit our Vile Parle Showroom</h1>
      <p class="page-top-lead">
        We look forward to welcoming you in person at Relcon House on Mahatma Gandhi Road.
      </p>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="section-inner">
        <div class="showroom-grid">
          <div class="showroom-visual-col">
            <div class="showroom-photo-main">
              ${img('storefront_exterior.webp', 'VM Jewellers exterior storefront at Relcon House on M.G. Road', 'fetchpriority="high"')}
              <div class="showroom-photo-caption">
                Storefront: Shop No. 4, Relcon House, M.G. Road, Vile Parle East
              </div>
            </div>
            <div class="showroom-photo-sub">
              ${img('showroom_interior.webp', 'Showroom interior at VM Jewellers', 'loading="lazy"')}
            </div>
          </div>

          <div class="showroom-info-col">
            <div class="showroom-address-card">
              <strong>${BUSINESS_INFO.signboardName}</strong>
              <p style="font-size: 0.8125rem; color: var(--gold-700); margin-bottom: 8px;">
                ${BUSINESS_INFO.heritageName} (${BUSINESS_INFO.registeredName})
              </p>
              <p>
                ${BUSINESS_INFO.address.shop}<br>
                ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.locality}<br>
                ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pincode}
              </p>
              <p class="showroom-landmark-text">
                📍 Landmark: ${BUSINESS_INFO.address.landmark}
              </p>
            </div>

            <dl class="showroom-details-list">
              <div class="showroom-detail-item">
                <dt>Showroom Telephone</dt>
                <dd>
                  <a href="${BUSINESS_INFO.telLink}" style="font-weight: 700; color: var(--green-950);">
                    ${BUSINESS_INFO.landline}
                  </a> (Direct Landline)
                </dd>
              </div>
              <div class="showroom-detail-item">
                <dt>Opening Hours</dt>
                <dd>
                  <strong style="color: var(--green-950); font-weight: 600;">Tuesday to Sunday: 10:30 am – 8:30 pm</strong><br>
                  <span style="color: #991b1b; font-size: 0.8125rem; font-weight: 500;">Monday: Closed</span>
                </dd>
              </div>
              <div class="showroom-detail-item">
                <dt>Core Categories</dt>
                <dd>22K Hallmarked Gold, Pure Silver, Necklaces, Mangalsutras, Gemstones</dd>
              </div>
            </dl>

            <div class="showroom-welcome-callout">
              <span class="callout-icon">✦</span>
              <p>
                <strong>Visiting Information:</strong> Our team is at your disposal without the need for prior appointments during regular hours. For custom gold design consultations or valuation reviews, you are invited to visit our private advisory counter.
              </p>
            </div>

            <div class="showroom-cta-row">
              <a class="button button-primary" href="${BUSINESS_INFO.mapsQueryUrl}" target="_blank" rel="noopener">
                <span>Get Directions on Google Maps ↗</span>
              </a>
              <a class="button button-outline" href="${BUSINESS_INFO.telLink}">
                <span>Call: 022 2615 3055 ☎</span>
              </a>
              <button class="button button-outline" data-enquire="general">
                <span>Send an Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Drawer Updater
function updateDrawer() {
  const countEl = document.querySelector('#drawer-count');
  const bodyEl = document.querySelector('#drawer-body');
  const footEl = document.querySelector('#drawer-foot');
  if (!countEl || !bodyEl) return;

  const savedPieces = pieces.filter(p => saved.includes(p.id));
  countEl.textContent = savedPieces.length;

  if (savedPieces.length === 0) {
    bodyEl.innerHTML = `
      <div style="text-align: center; padding: 50px 10px;">
        <p style="font-size: 1.8rem; color: var(--gold-600); margin-bottom: 10px;">♡</p>
        <h4 style="font-size: 1.25rem; margin-bottom: 8px; color: var(--green-950);">No saved pieces yet</h4>
        <p style="font-size: 0.8125rem; color: var(--ink-600); line-height: 1.5; max-width: 260px; margin: 0 auto 20px;">
          Save pieces while exploring our collections to compile a list for your showroom visit.
        </p>
        <a class="button button-primary" href="#/collections" style="width: 100%; justify-content: center;" onclick="closeDrawer()">
          Explore Collections ↗
        </a>
      </div>
    `;
    if (footEl) footEl.style.display = 'none';
  } else {
    bodyEl.innerHTML = savedPieces.map(p => `
      <div class="drawer-item">
        <div class="drawer-item-img">
          <a href="#/piece/${p.id}" onclick="closeDrawer()">
            ${img(p.image, p.alt)}
          </a>
        </div>
        <div class="drawer-item-info">
          <p>${p.category}</p>
          <h4><a href="#/piece/${p.id}" onclick="closeDrawer()">${p.name}</a></h4>
          <span style="font-size: 0.6875rem; color: var(--ink-400);">${p.ref}</span>
        </div>
        <button class="drawer-remove-btn" data-save="${p.id}" aria-label="Remove ${p.name}">✕</button>
      </div>
    `).join('');
    if (footEl) footEl.style.display = 'flex';
  }
}

function openDrawer() {
  updateDrawer();
  drawer.classList.add('open');
  drawerBackdrop.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawerBackdrop.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lock');
}
window.closeDrawer = closeDrawer;
window.openDrawer = openDrawer;

// Universal Dialog Handler
function showDialog(html, cls = '') {
  dialog.className = cls;
  document.querySelector('#dialog-content').innerHTML = html;
  const heading = dialog.querySelector('h2');
  if (heading) heading.id = 'dialog-title';
  dialog.showModal();
  document.body.classList.add('lock');
}

// In-Store Enquiry Dialog
function enquiry(id) {
  const p = pieces.find(x => x.id === id);
  let prefill = '';

  if (p) {
    const calc = calculatePrice(p, detailPurity, detailSizeIndex);
  const bgTheme = (p.id === 'temple-suite' || p.id === 'celebration-bridal' || p.id === 'halo-solitaire') ? 'dark-canvas' : 'light-canvas';
    const sizeObj = (p.sizes && p.sizes[detailSizeIndex]) ? p.sizes[detailSizeIndex] : { label: 'Standard' };

    prefill = `[DESIGN CONCEPT PREVIEW — IN-STORE ENQUIRY]
Hello VM Jewellers,

I would like to enquire about viewing "${p.name}" (Ref: ${p.ref}) at your Vile Parle showroom:
- Purity: ${calc.purity} Gold
- Size/Length: ${sizeObj.label}
- Estimated Weight: ~${calc.netWeight}g
- Estimated Price: ${formatInr(calc.total)}

Could you please confirm visiting details and availability at Shop 4, Relcon House?`;
  } else {
    prefill = `[DESIGN CONCEPT PREVIEW — SHOWROOM ENQUIRY]
Hello VM Jewellers,

I would like to visit your Vile Parle East showroom (Shop No. 4, Relcon House, M.G. Road).
Could you please confirm your current opening hours and showroom details?`;
  }

  showDialog(`
    <p class="eyebrow">SHOWROOM ENQUIRY PREVIEW</p>
    <h2>A conversation starts here.</h2>

    ${p ? `
      <div style="display: flex; gap: 14px; padding: 12px; background: #fff; border: 1px solid var(--line); border-radius: 2px; margin: 16px 0; align-items: center;">
        <div style="width: 60px; height: 60px; overflow: hidden; flex-shrink: 0;">
          ${img(p.image, p.alt)}
        </div>
        <div>
          <span style="font-size: 0.6875rem; font-weight: 700; color: var(--gold-700); text-transform: uppercase;">${p.category}</span>
          <h4 style="font-size: 1.1rem; color: var(--green-950); margin: 2px 0;">${p.name}</h4>
          <span style="font-size: 0.75rem; color: var(--ink-400);">Ref: ${p.ref}</span>
        </div>
      </div>
    ` : ''}

    <div class="demo-number-box">
      <strong>Showroom Landline: 022 2615 3055</strong><br>
      <span>The store phone is a verified landline. WhatsApp messaging is shown as an editable demo preview until an owner-approved mobile number is connected.</span>
    </div>

    <label for="enquiry-message">Your Editable Message</label>
    <textarea id="enquiry-message" aria-label="Editable enquiry message">${esc(prefill)}</textarea>

    <div class="dialog-actions">
      <button class="button button-primary" data-copy>
        <span>Copy Message Text</span>
      </button>
      <a class="button button-outline" href="${BUSINESS_INFO.telLink}">
        <span>Call Landline (022 2615 3055) ☎</span>
      </a>
    </div>
  `);
}

// Visual Size Guide Modal
function showSizeGuide(category) {
  showDialog(`
    <p class="eyebrow">VISUAL SIZE &amp; MEASUREMENT GUIDE</p>
    <h2>Finding Your Perfect Proportion</h2>
    
    <div style="margin: 20px 0;">
      <h3 style="font-size: 1.15rem; color: var(--green-950); margin-bottom: 8px;">1. Bangles &amp; Kangan Sizing</h3>
      <table class="detail-specs-table" style="margin-bottom: 16px;">
        <thead>
          <tr>
            <th style="background: var(--paper-200); color: var(--green-950);">Indian Size</th>
            <th style="background: var(--paper-200); color: var(--green-950);">Inner Diameter</th>
            <th style="background: var(--paper-200); color: var(--green-950);">Circumference</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>2.4</td><td>57.2 mm (2.25 in)</td><td>179.6 mm (Small)</td></tr>
          <tr><td>2.6</td><td>60.3 mm (2.37 in)</td><td>189.4 mm (Medium - Most Common)</td></tr>
          <tr><td>2.8</td><td>63.5 mm (2.50 in)</td><td>199.5 mm (Large)</td></tr>
          <tr><td>2.10</td><td>66.7 mm (2.62 in)</td><td>209.5 mm (Extra Large)</td></tr>
        </tbody>
      </table>
      <p style="font-size: 0.8125rem; color: var(--ink-600); line-height: 1.5;">
        <strong>How to Measure for Bangles:</strong> Bring thumb and pinky finger together as if putting on a bangle. Measure the widest part of your hand using a soft measuring tape or string.
      </p>

      <h3 style="font-size: 1.15rem; color: var(--green-950); margin: 24px 0 8px;">2. Necklace Length Guidelines</h3>
      <table class="detail-specs-table">
        <tbody>
          <tr><th>14\" – 16\" (Collar / Choker)</th><td>Sits tightly against base of neck, highlighting high necklines and bridal haar.</td></tr>
          <tr><th>18\" (Princess Length)</th><td>Sits gracefully on the collarbone; the most versatile standard length.</td></tr>
          <tr><th>20\" – 24\" (Matinee)</th><td>Sits between collarbone and bosom; ideal for layered mangalsutra or statement pendants.</td></tr>
          <tr><th>28\" – 32\" (Rani Haar / Saaj)</th><td>Traditional ceremonial length falling at or below the navel for wedding celebrations.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="dialog-actions">
      <button class="button button-primary" onclick="dialog.close()">
        <span>Got It, Back to Piece</span>
      </button>
      <a class="button button-outline" href="${BUSINESS_INFO.telLink}">
        <span>Call for Fitting Advice (022 2615 3055)</span>
      </a>
    </div>
  `);
}

// Reference Notes Dialog
function notes() {
  showDialog(`
    <p class="eyebrow">INDEPENDENT REDESIGN PROPOSAL</p>
    <h2>Verified Details &amp; References</h2>
    <p>
      Created by <strong>Shaunak Pitale</strong> as a private freelance concept demonstration. This is not the official live website of VM Jewellers / V.M. Muslunkar &amp; Sons.
    </p>

    <ul style="padding-left: 18px; font-size: 0.8125rem; color: var(--ink-700); line-height: 1.8;">
      <li><strong>Business Name:</strong> Storefront signage displays <em>VM JEWELLERS</em>. Google listing title is <em>VM Jewellers Pvt. Ltd.</em>, with former business name cited as <em>VM Muslunkar &amp; Sons Jewellers</em>. Flagged for owner confirmation on preferred primary display name.</li>
      <li><strong>Verified Address:</strong> Shop No. 4, Relcon House, Mahatma Gandhi Road, Navpada, Vile Parle East, Mumbai 400057 (Below Maharashtra Co-operative Bank). Corroborated on Google Maps, Justdial, and Parle Bazaar.</li>
      <li><strong>Verified Telephone:</strong> 022 2615 3055 is a landline. Connected via <code>tel:+912226153055</code>.</li>
      <li><strong>Real Showroom Photographs:</strong> Reference photographs extracted from public business listing scan (storefront exterior, interior counters, and illuminated display showcases).</li>
      <li><strong>Customer Reviews:</strong> Three supplied review excerpts (Garrgi Doshii, shrushti nhivekar, Nitin Sawant) rendered verbatim from public listing with link to Google Maps reviews. No ratings, counts, or dates were invented.</li>
      <li><strong>Illustrative Sample Pieces:</strong> Product photographs are concept demonstrations representing store offerings. Metal purity, weights, and quotations are verified in person at the showroom.</li>
    </ul>
  `);
}

function toast(msg) {
  clearTimeout(toastTimer);
  const t = document.querySelector('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

// Sync Saved Pieces State
function syncSaved() {
  const count = saved.length;
  const countEl = document.querySelector('#saved-count');
  const mobCountEl = document.querySelector('#mobile-saved-count');
  const homeCountEl = document.querySelector('#home-saved-counter');
  if (countEl) countEl.textContent = count;
  if (mobCountEl) mobCountEl.textContent = count ? `(${count})` : '♡';
  if (homeCountEl) homeCountEl.textContent = count;

  document.querySelectorAll('[data-save]').forEach(b => {
    const id = b.dataset.save;
    const isSaved = saved.includes(id);
    b.setAttribute('aria-pressed', isSaved);

    if (b.classList.contains('save') || b.classList.contains('card-save-floating')) {
      b.textContent = isSaved ? '♥' : '♡';
      b.setAttribute('aria-label', `${isSaved ? 'Remove' : 'Save'} ${id}`);
    } else {
      b.innerHTML = `<span>${isSaved ? '♥ Saved in Your Selection' : '♡ Save This Piece'}</span>`;
    }
  });

  updateDrawer();
}

function closeMenu() {
  main.inert = false;
  document.querySelector('footer').inert = false;
  const nav = document.querySelector('#mobile-nav');
  if (nav) nav.hidden = true;
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
  }
  document.body.classList.remove('lock');
}

// Main View Router
function render() {
  closeMenu();
  closeDrawer();
  if (dialog.open) dialog.close();

  const raw = (location.hash || '#/').slice(1);
  const [path, qs] = raw.split('?');

  document.querySelectorAll('.desktop-nav a').forEach(a => {
    if (a.getAttribute('href') === '#' + path) {
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });

  let pageTitle = 'VM Jewellers | V.M. Muslunkar & Sons — Vile Parle East';

  if (path === '/collections') {
    filter = new URLSearchParams(qs).get('category') || 'All';
    if (!['All', 'Necklaces', 'Mangalsutras', 'Gemstones', 'Everyday'].includes(filter)) {
      filter = 'All';
    }
    main.innerHTML = catalogue();
    updateGrid();
    pageTitle = 'Collections';
  } else if (path === '/saved') {
    main.innerHTML = catalogue(true);
    updateGrid();
    pageTitle = 'Saved Pieces';
  } else if (path.startsWith('/piece/')) {
    const pieceId = path.split('/')[2];
    const p = pieces.find(x => x.id === pieceId);
    if (p) {
      detailPurity = (p.purityOptions && p.purityOptions[0]) || '22KT';
      detailSizeIndex = 0;
      detailActiveAngle = 0;
      main.innerHTML = detail(p);
      pageTitle = p.name;
    } else {
      main.innerHTML = `
        <section class="section empty">
          <p class="eyebrow" style="justify-content: center;">NOTICE</p>
          <h2>Piece not found.</h2>
          <p>The requested jewellery reference is not part of this concept preview.</p>
          <a class="button button-primary" href="#/collections">Explore Collections ↗</a>
        </section>
      `;
      pageTitle = 'Piece Not Found';
    }
  } else if (path === '/story') {
    main.innerHTML = story();
    pageTitle = 'Our Story';
  } else if (path === '/visit') {
    main.innerHTML = visit();
    pageTitle = 'Visit Showroom';
  } else if (path === '/' || path === '' || path.startsWith('vile-parle-showroom')) {
    main.innerHTML = home();
  } else {
    main.innerHTML = `
      <section class="section empty">
        <p class="eyebrow" style="justify-content: center;">404</p>
        <h2>Page not found.</h2>
        <p>This page is not part of the website concept.</p>
        <a class="button button-primary" href="#/">Return Home ↗</a>
      </section>
    `;
  }

  document.title = `${pageTitle} — VM Jewellers, Vile Parle East`;
  syncSaved();
  window.scrollTo(0, 0);
  initScrollReveals();
  main.focus({ preventScroll: true });
}

// Performant IntersectionObserver Scroll Reveals
function initScrollReveals() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  const targets = document.querySelectorAll(
    '.chapter-section, .showcase-section, .heritage-dark-section, .karigar-section, .customer-words-section, .showroom-invitation-section, .editorial-card, .showcase-card, .customer-review-card'
  );
  targets.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

// Live Calculator DOM Synchronizer
function updateDetailCalculatorDOM() {
  const path = (location.hash || '#/').slice(1);
  if (!path.startsWith('/piece/')) return;
  const pieceId = path.split('/')[2];
  const p = pieces.find(x => x.id === pieceId);
  if (!p) return;

  const calc = calculatePrice(p, detailPurity, detailSizeIndex);
  const bgTheme = (p.id === 'temple-suite' || p.id === 'celebration-bridal' || p.id === 'halo-solitaire') ? 'dark-canvas' : 'light-canvas';

  const goldValEl = document.querySelector('#calc-gold-val');
  const stoneValEl = document.querySelector('#calc-stone-val');
  const makingValEl = document.querySelector('#calc-making-val');
  const gstValEl = document.querySelector('#calc-gst-val');
  const totalEl = document.querySelector('#calc-total-amount');
  const specPurityCell = document.querySelector('#spec-purity-cell');
  const specWeightCell = document.querySelector('#spec-weight-cell');

  if (goldValEl) goldValEl.textContent = formatInr(calc.goldValue);
  if (stoneValEl) stoneValEl.textContent = calc.stoneValue ? formatInr(calc.stoneValue) : 'Included / Solid Gold';
  if (makingValEl) makingValEl.textContent = formatInr(calc.makingCharges);
  if (gstValEl) gstValEl.textContent = formatInr(calc.gst);
  if (specPurityCell) specPurityCell.textContent = calc.purity === '22KT' ? '22 Karat (91.6% Pure Gold)' : '18 Karat (75.0% Fine Gold)';
  if (specWeightCell) specWeightCell.textContent = `~${calc.netWeight} grams`;

  if (totalEl) {
    totalEl.textContent = formatInr(calc.total);
    totalEl.classList.add('recalculated');
    setTimeout(() => totalEl.classList.remove('recalculated'), 300);
  }
}

// Global Event Listeners
document.addEventListener('click', e => {
  if (e.target.closest('.skip')) {
    e.preventDefault();
    main.focus();
    main.scrollIntoView();
    return;
  }

  // Save / Bookmark Trigger
  const saveBtn = e.target.closest('[data-save]');
  if (saveBtn) {
    const id = saveBtn.dataset.save;
    const isSaved = saved.includes(id);
    saved = isSaved ? saved.filter(x => x !== id) : [...saved, id];
    try {
      localStorage.setItem('vm-saved', JSON.stringify(saved));
    } catch {
      toast('Saved for this session.');
    }
    syncSaved();
    if (location.hash.startsWith('#/saved')) updateGrid();
    toast(saved.includes(id) ? 'Added to your saved selection' : 'Removed from your selection');
    return;
  }

  // Gallery Thumbnail Click
  const thumbBtn = e.target.closest('.gallery-thumb-btn');
  if (thumbBtn) {
    const idx = parseInt(thumbBtn.dataset.angleIndex, 10);
    const path = (location.hash || '#/').slice(1);
    if (path.startsWith('/piece/')) {
      const p = pieces.find(x => x.id === path.split('/')[2]);
      if (p && p.angles && p.angles[idx]) {
        detailActiveAngle = idx;
        const ang = p.angles[idx];
        const mainImg = document.querySelector('#gallery-main-img');
        const tagEl = document.querySelector('#main-angle-tag');
        const capEl = document.querySelector('#gallery-caption-strip');
        const zoomBtn = document.querySelector('#gallery-zoom-btn');

        if (mainImg) {
          mainImg.style.opacity = '0.3';
          setTimeout(() => {
            mainImg.src = ASSET_DIR + ang.file;
            mainImg.alt = ang.caption || ang.label;
            mainImg.style.opacity = '1';
          }, 120);
        }
        if (tagEl) tagEl.textContent = ang.label;
        if (capEl) capEl.textContent = ang.caption;
        if (zoomBtn) zoomBtn.dataset.zoomImg = ang.file;

        document.querySelectorAll('.gallery-thumb-btn').forEach((b, i) => {
          b.classList.toggle('active', i === idx);
        });
      }
    }
    return;
  }

  // Lightbox Zoom Trigger
  const zoomBtn = e.target.closest('#gallery-zoom-btn') || e.target.closest('[data-zoom-img]');
  if (zoomBtn) {
    const file = zoomBtn.dataset.zoomImg;
    showDialog(`
      <div style="text-align: center;">
        <h2 id="dialog-title" style="font-size: 1.15rem; margin-bottom: 12px; color: var(--green-950);">Macro Inspection View</h2>
        <img src="${ASSET_DIR + file}" alt="High-resolution jewellery inspection view" style="max-height: 75vh; width: auto; max-width: 100%; border-radius: 2px;">
      </div>
    `, 'image-dialog');
    return;
  }

  // Purity Selector Click
  const purityBtn = e.target.closest('[data-purity]');
  if (purityBtn) {
    detailPurity = purityBtn.dataset.purity;
    document.querySelectorAll('.purity-pill').forEach(b => {
      b.classList.toggle('active', b.dataset.purity === detailPurity);
    });
    updateDetailCalculatorDOM();
    toast(`Purity set to ${detailPurity}`);
    return;
  }

  // Size Selector Click
  const sizeBtn = e.target.closest('[data-size-idx]');
  if (sizeBtn) {
    detailSizeIndex = parseInt(sizeBtn.dataset.sizeIdx, 10);
    document.querySelectorAll('.size-btn').forEach((b, i) => {
      b.classList.toggle('active', i === detailSizeIndex);
    });
    updateDetailCalculatorDOM();
    toast('Size selection updated');
    return;
  }

  // Size Guide Modal Trigger
  const sizeGuideBtn = e.target.closest('[data-open-sizeguide]');
  if (sizeGuideBtn) {
    showSizeGuide(sizeGuideBtn.dataset.openSizeguide);
    return;
  }

  // Hotspot Pin / Card Click in Karigar Section
  const pin = e.target.closest('[data-hotspot]');
  if (pin) {
    const hId = pin.dataset.hotspot;
    document.querySelectorAll('.karigar-hotspot-pin').forEach(p => p.classList.toggle('active', p.dataset.hotspot === hId));
    document.querySelectorAll('.karigar-craft-card').forEach(c => c.classList.toggle('active', c.dataset.card === hId));
    return;
  }

  const cardCraft = e.target.closest('.karigar-craft-card');
  if (cardCraft) {
    const cId = cardCraft.dataset.card;
    document.querySelectorAll('.karigar-hotspot-pin').forEach(p => p.classList.toggle('active', p.dataset.hotspot === cId));
    document.querySelectorAll('.karigar-craft-card').forEach(c => c.classList.toggle('active', c.dataset.card === cId));
    return;
  }

  // Repository Filter Click
  const repoFilterBtn = e.target.closest('[data-repofilter]');
  if (repoFilterBtn) {
    repoFilter = repoFilterBtn.dataset.repofilter;
    document.querySelectorAll('.repo-pill').forEach(b => {
      b.classList.toggle('active', b.dataset.repofilter === repoFilter);
    });
    if (repoFilter !== 'All Masterpieces') {
      location.hash = `#/collections?category=${repoFilter.includes('Mangal') ? 'Mangalsutras' : repoFilter.includes('Temple') ? 'Necklaces' : repoFilter.includes('Everyday') ? 'Everyday' : 'Gemstones'}`;
    }
    return;
  }

  // Open Saved Drawer
  if (e.target.closest('#saved-trigger') || e.target.closest('#home-saved-view-btn')) {
    openDrawer();
    return;
  }

  // Close Drawer
  if (e.target.closest('.drawer-close') || e.target === drawerBackdrop) {
    closeDrawer();
    return;
  }

  // Clear Saved
  if (e.target.closest('#clear-all-saved')) {
    saved = [];
    try {
      localStorage.setItem('vm-saved', JSON.stringify(saved));
    } catch {}
    syncSaved();
    updateGrid();
    toast('Saved selection cleared');
    return;
  }

  // Catalogue Category Filters
  const filterBtn = e.target.closest('[data-filter]');
  if (filterBtn) {
    filter = filterBtn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => {
      const active = b.dataset.filter === filter;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active);
    });
    history.replaceState(null, '', `#/collections${filter === 'All' ? '' : '?category=' + filter}`);
    updateGrid();
    return;
  }

  if (e.target.closest('[data-reset]')) {
    filter = 'All';
    query = '';
    location.hash = '#/collections';
    render();
    return;
  }

  if (e.target.closest('#clear-search-btn')) {
    query = '';
    const input = document.querySelector('.search-box input');
    if (input) input.value = '';
    updateGrid();
    return;
  }

  // In-Store Enquiry / Reserve Trigger
  const reserveBtn = e.target.closest('[data-reserve]');
  if (reserveBtn) {
    enquiry(reserveBtn.dataset.reserve);
    return;
  }

  const enquireBtn = e.target.closest('[data-enquire]');
  if (enquireBtn) {
    enquiry(enquireBtn.dataset.enquire);
    return;
  }

  // Reference Notes Dialog
  if (e.target.closest('[data-notes]')) {
    notes();
    return;
  }

  // Dialog Close Button
  if (e.target.closest('.dialog-close')) {
    dialog.close();
    return;
  }

  // Copy Enquiry Text
  if (e.target.closest('[data-copy]')) {
    const area = document.querySelector('#enquiry-message');
    if (area) {
      navigator.clipboard.writeText(area.value)
        .then(() => toast('Enquiry message copied to clipboard'))
        .catch(() => {
          area.select();
          toast('Select and copy the text from the box.');
        });
    }
    return;
  }

  // Export Saved Pieces
  if (e.target.closest('#export-saved-whatsapp') || e.target.closest('#drawer-export-btn')) {
    const savedPieces = pieces.filter(p => saved.includes(p.id));
    if (!savedPieces.length) {
      toast('Save at least one piece to compile an enquiry.');
      return;
    }
    const itemsList = savedPieces.map((p, i) => `${i + 1}. ${p.name} (Ref: ${p.ref}, ${p.category})`).join('\n');
    const msg = `[DESIGN CONCEPT PREVIEW — SAVED SELECTION]
Hello VM Jewellers,

I have saved the following pieces from your website concept and would like to enquire about viewing them at your Relcon House showroom:

${itemsList}

Could you please confirm available designs and showroom visiting hours?`;

    showDialog(`
      <p class="eyebrow">SAVED SELECTION ENQUIRY</p>
      <h2>Enquire About Saved Pieces</h2>
      <div class="demo-number-box">
        <strong>Showroom Landline: 022 2615 3055</strong><br>
        <span>Enquiring about ${savedPieces.length} saved ${savedPieces.length === 1 ? 'piece' : 'pieces'}. Note: Phone is a landline.</span>
      </div>
      <label for="enquiry-message">Your Editable Message</label>
      <textarea id="enquiry-message">${esc(msg)}</textarea>
      <div class="dialog-actions">
        <button class="button button-primary" data-copy>Copy Message Text ↗</button>
        <a class="button button-outline" href="${BUSINESS_INFO.telLink}">Call Landline: 022 2615 3055 ☎</a>
      </div>
    `);
    return;
  }

  // Mobile Menu Toggle
  if (e.target.closest('.menu-toggle')) {
    const nav = document.querySelector('#mobile-nav');
    const toggle = document.querySelector('.menu-toggle');
    const isHidden = !nav.hidden;
    nav.hidden = isHidden;
    toggle.setAttribute('aria-expanded', String(!isHidden));
    document.body.classList.toggle('lock', !isHidden);
    main.inert = !isHidden;
    document.querySelector('footer').inert = !isHidden;
    return;
  }

  if (e.target.closest('.mobile-nav-close') || e.target.closest('#mobile-nav a')) {
    closeMenu();
  }
});

main.addEventListener('input', e => {
  if (e.target.matches('input[type=search]')) {
    query = e.target.value;
    updateGrid();
  }
});

main.addEventListener('change', e => {
  if (e.target.matches('#sort-select')) {
    sort = e.target.value;
    updateGrid();
  }
});

dialog.addEventListener('close', () => document.body.classList.remove('lock'));
dialog.addEventListener('click', e => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      dialog.close();
    }
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMenu();
    closeDrawer();
  }
});

window.addEventListener('hashchange', render);

// Initial Load
render();
