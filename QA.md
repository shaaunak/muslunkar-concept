# Quality Assurance & Verification Record

Updated 26 October 2026.

## 1. Requirements Verification Matrix

| Requirement | Implementation Details | Status |
|---|---|---|
| **Cinematic Hero Centrepiece** | `hero_emerald_jewellery.webp` implemented as full-viewport background with directional velvet scrim. Typography positioned on negative space left; gold jewellery prominent on right. Key provenance row (Estd. 1949, Bespoke Bridal, Relcon House) included. | **PASSED** |
| **Asymmetrical Editorial Layouts** | Chapter I: The Curated Repository features 7-col dominant card (`saaj-mangalsutra`), 5-col companion card (`peshwai-toda`), and two 6-col horizontal feature cards (`temple-suite`, `twist-hoops`) with category pills. | **PASSED** |
| **In-Store Showroom Selection** | 4-card showcase section highlighting creations with multi-angle badges, persistent save buttons, and direct detail links. | **PASSED** |
| **Heritage & Lineage Storytelling** | Chapter II: Deep bottle green container (`#051a16`), lead quotation, 3 gold trust pillars (Ritual Purity, Karigar Guilds, Personal Consultation), and showroom interior photo. | **PASSED** |
| **Craftsmanship Interactive Experience** | Chapter III: Micro-Architecture of the Karigar with pulsing interactive pins (Rawa Granulation, Finial Terminals, Antique Herbal Patina) and synchronized craft cards. | **PASSED** |
| **Customer Experiences** | Words from our customers: verbatim excerpts from Garrgi Doshii, shrushti nhivekar, and Nitin Sawant, with gold divider and Google Maps review link. | **PASSED** |
| **Showroom & Atelier Details** | Chapter IV: Real storefront exterior and showroom interior, verified address (Shop 4, Relcon House, M.G. Road, Vile Parle East; Below Maharashtra Co-operative Bank), telephone `022 2615 3055`, and Google Maps search link. | **PASSED** |
| **4-Angle Product Gallery** | Interactive thumbnail gallery supporting 4 angles for flagship pieces (`suite_angle_1` through `suite_angle_4`, `bangle_angle_1` through `bangle_angle_4`), smooth transitions, and full-screen lightbox zoom. | **PASSED** |
| **Live Price-Estimate Calculator** | Dynamic calculation updating in real time with purity (22KT vs 18KT) and size weight multipliers. Transparent breakdown of Gold Value, Gemstones, Making Charges (14-15%), and Statutory GST (3.0%), with explicit disclaimer. | **PASSED** |
| **Size Selector & Visual Guide** | Size buttons with weight recalculation and "View Size Guide 📏" modal covering Bangles (2.4, 2.6, 2.8), Rings (10-18), and Necklaces (16", 18", 20", 24"). | **PASSED** |
| **Reservations & Enquiries** | "Reserve for In-Store Viewing" modal with prefilled specs, WhatsApp demo preview, and click-to-call landline (`022 2615 3055`). | **PASSED** |
| **Persistent Saved Selection** | LocalStorage persistence, header counter badge, and slide-over drawer with item removal and export. | **PASSED** |

---

## 2. Technical Quality Checks

1. **JavaScript Syntax**:
   - `node -c dist/app.js`: Clean exit (Code 0, zero warnings or errors).
2. **HTML Validation**:
   - Custom parser check on `dist/index.html`: Zero mismatched tags, zero unclosed tags.
3. **CSS Formatting & Brace Balance**:
   - `dist/style.css`: 399 open braces, 399 close braces. Exact balance confirmed.
4. **Asset Integrity**:
   - All 19 referenced media assets and fonts in `app.js` and `style.css` confirmed present on disk in `dist/assets/`.
5. **Headless Route Simulation**:
   - Automated test rendered `#` (Home), `#/collections`, `#/saved`, `#/piece/temple-suite`, `#/piece/peshwai-toda`, `#/story`, and `#/visit` with zero runtime exceptions.
6. **Price Formula Accuracy**:
   - Temple Suite 22KT (18-inch): 66.50g @ ₹7,250/g = ₹4,82,125 + ₹28,000 stones + ₹69,908 making + ₹17,401 GST = ₹5,97,434 total.
   - Peshwai Toda 22KT (Size 2.6): 54.00g @ ₹7,250/g = ₹3,91,500 + ₹50,895 making + ₹13,272 GST = ₹4,55,667 total.

---

## 3. Image Scaling & Fit Optimization (Refinement Pass)

1. **Our Story Page (`#/story`)**:
   - Resolved unstyled image expansion where large archival photos (such as `showroom_showcase.webp` at 1192x1696) were previously blowing up to full raw dimensions.
   - Enforced `.story-photo-wrap` at `height: 380px; max-height: 380px;` with `object-fit: cover;` and smooth subtle hover zoom.
   - Constrained layout via `.story-split` to a clean 1fr : 1.15fr editorial grid with max-width 1080px.

2. **Product Detail View (`#/piece/:id`)**:
   - Addressed oversized 1:1 image container that previously stretched over 630px tall and pushed the calculator below the fold while cutting off landscape pieces.
   - Fixed `.detail-split` gallery column to `max-width: 460px` and `.gallery-main-viewport` to `height: 390px`.
   - Applied `object-fit: contain` with dynamic background canvases (`dark-canvas` for velvet suite/bridal pieces, `light-canvas` for toda/ivory pieces) so every piece fits 100% within the frame with zero cut-off edges.
   - Streamlined thumbnail height to 68px (56px on mobile).

3. **Macro Zoom & Showcase Cards**:
   - Capped `.showcase-img-wrap` at 240px and `dialog.image-dialog img` at `70vh` to eliminate oversized dialog views.
