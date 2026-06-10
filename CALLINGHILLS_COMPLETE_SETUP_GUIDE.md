# CallingHills — Complete Website Setup Guide
### For Antigravity AI Builder · Full Content + Structure Specification

> **Project:** CallingHills — Offbeat Himalayan Travel Agency  
> **Architecture:** Single `index.html` (all CSS + JS inline) — no build tools, no frameworks  
> **Status:** Hero Section ✅ DONE — Build Phases 3–9 from this guide  
> **File Location:** `e:\ACTUAL PROJECTS\calling hills\index.html`

---

## 🎨 DESIGN SYSTEM (MUST be followed in every section)

### Colour Palette (Updated — Client Approved)

```css
:root {
    /* Primary Palette — Client Specified */
    --ch-cream-light:  #FBF5DD;   /* Lightest background / warm white */
    --ch-cream-mid:    #E7E1B1;   /* Secondary background / muted sections */
    --ch-forest:       #306D29;   /* Primary green — buttons, accents, borders */
    --ch-forest-deep:  #0D530E;   /* Deep green — section backgrounds, CTAs */

    /* Supporting UI Colours (keep from Phase 2) */
    --ch-text-dark:    #1A2B19;   /* Near-black for body text on light bg */
    --ch-text-mid:     #3D5C3B;   /* Mid-tone text */
    --ch-gold:         #C8A96E;   /* Accent gold — kept for logo + highlights */
    --ch-mist:         #F4F2EE;   /* Light text on dark bg */
}
```

> **Tone shift note:** The new palette is warm, light, and nature-forward — creamy yellows + forest greens. Use `--ch-cream-light` as the page base background for all new sections. Reserve `--ch-forest-deep` for dark hero-like full-bleed CTA strips. Text on light backgrounds = `--ch-text-dark`. Text on dark backgrounds = `--ch-mist`.

### Typography (unchanged from Phase 2)

```css
--font-heading: 'DM Sans', sans-serif;
--font-script:  'Cormorant Garamond', serif;
--font-body:    'DM Sans', sans-serif;
```

### Design Principles

- Light sections: `--ch-cream-light` base, `--ch-forest` borders and accents
- Dark sections (CTA strips, enquiry bars): `--ch-forest-deep` background, `--ch-mist` text
- Card borders: `1px solid rgba(48, 109, 41, 0.18)`
- Button primary: bg `--ch-forest`, text white, hover bg `--ch-forest-deep`
- Button secondary (glass): `border: 1.5px solid --ch-forest`, transparent bg, green text
- Section tags: 11px, uppercase, letter-spacing 0.3em, colour `--ch-forest`
- GSAP ScrollTrigger entrance on every section (y:60→0, opacity:0→1)
- Responsive breakpoints: 900px (tablet), 480px (mobile)

---

## 📋 PAGE STRUCTURE — SECTION ORDER

```
[✅ DONE]   Section 1 — NAVBAR + HERO
[BUILD]     Section 2 — TRUST BAR (strip)
[BUILD]     Section 3 — WHO WE ARE (About)
[BUILD]     Section 4 — DESTINATIONS (4 cards)
[BUILD]     Section 5 — SIGNATURE PACKAGES (4 packages, full detail)
[BUILD]     Section 6 — PACKAGE DETAIL PAGES (per-destination itinerary, in-page expandable)
[BUILD]     Section 7 — OUR SERVICES
[BUILD]     Section 8 — GALLERY
[BUILD]     Section 9 — ENQUIRY / CONTACT + CTA
[BUILD]     Section 10 — FOOTER
```

---

## ✅ SECTION 1 — NAVBAR + HERO (ALREADY COMPLETE — DO NOT MODIFY)

- Navbar: Fixed, glassmorphism on scroll, logo, nav links, "Plan My Trip" CTA
- Hero: `hero-bg.png` background, Three.js particles, GSAP animations, "CALLING HILLS" title, dual CTAs
- Loading screen: Brand animation + gold progress bar
- Full details in existing `index.html` (Phase 2 complete)

---

## 🔲 SECTION 2 — TRUST BAR (Add right after Hero)

**Purpose:** Instant credibility strip below the fold.

**Layout:** Full-width horizontal strip, bg `--ch-forest`, text `--ch-mist`, padding 18px 0.

**Content — 5 items with icons, separated by thin vertical dividers:**

| Icon | Text |
|------|------|
| 🏛️ | Govt. of India & West Bengal Verified |
| 🏦 | Banking Partner: State Bank of India |
| ⭐ | Offbeat Travel Specialists |
| 🌿 | Eco-Conscious & Sustainable Travel |
| 📞 | 24×7 Travel Support |

**Behaviour:** On mobile (≤480px) → 2-column grid instead of single row.

---

## 🔲 SECTION 3 — WHO WE ARE

**Section ID:** `#about`  
**Background:** `--ch-cream-light`  
**Padding:** 100px top/bottom

**Section Tag:** `✦ OUR STORY`  
**Section Title:** "A Journey Born in the Hills"  
**Font:** DM Sans 600, clamp(32px, 4vw, 52px), colour `--ch-forest-deep`

**Layout:** Two columns — Left: text content | Right: image (generate: warm photo of hill village, misty Himalayan morning, 4:3)

**Left Column Content:**

**Who We Are para:**
> A nature-rooted travel platform based in North Bengal, offering soulful, offbeat, and emotionally engaging journeys across the Himalayas.

**What We Do para:**
> We curate eco-conscious tours through hidden villages, forest trails, and cultural landscapes across Darjeeling, Kalimpong, Dooars & Sikkim — connecting travellers to the places that most people never find on a map.

**Vision para:**
> To build a sustainable hill tourism model that honours nature, uplifts local lives, and helps travellers reconnect with their inner rhythm.

**Mission para:**
> Deliver meaningful travel that supports rural communities, promotes traditional skills, protects the environment, and creates lasting personal memories.

**Core Values strip (4 pill badges, green border):**
- 🌿 Slow Travel
- 🤝 Community Care
- 🎭 Cultural Sensitivity
- 🌍 Environmental Balance

**Why Choose Us (4-point grid, icon + text):**
1. Offbeat paths over crowded places
2. Stay with locals, not just in rooms
3. Feel more, rush less
4. Human-first, nature-friendly travel

**Speciality line (italic, Cormorant Garamond):**
> "Curated village stays, immersive journeys, locally guided routes, seasonal beauty trails — and a thoughtful approach to every step of your experience."

---

## 🔲 SECTION 4 — DESTINATIONS

**Section ID:** `#destinations`  
**Background:** `--ch-cream-mid`  
**Padding:** 100px top/bottom

**Section Tag:** `✦ WHERE WE TAKE YOU`  
**Section Title:** "Handpicked Destinations"  
**Section Subtitle:** "From misty tea gardens to ancient monasteries — explore the hidden soul of the Eastern Himalayas."

**Layout:** CSS Grid, 4 cards, `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`, gap 24px

### Card 1 — DARJEELING HILLS

**Image:** Generate — cinematic aerial photo of Darjeeling tea gardens, Kanchenjunga in background, golden morning light  
**Title:** Darjeeling Hills  
**Tagline:** "Queen of the Hills — but the offbeat side"  
**Blog para (show on card expand / hover reveal):**
> Darjeeling is not just Tiger Hill and the famous toy train. The real magic lives in its hidden corners — Dawaipani's pine-clad slopes, Rishihat's tea garden homestays, the suspension bridges of Jogighat, the misty trails of Lepchajagat. With CallingHills, you'll skip the tourist queues and walk into the living, breathing Darjeeling that locals know and love.

**Offbeat Spots listed:**
Dawaipani · Tinchuley · Lamahatta · Sittong · Chatakpur · Rangeet Majua · Lebong · Mineral Spring · Rangaroon · Tumling · Dhotrey · Rishihat · Tabbakoshi · Lepchajagat

**CTA Buttons on card:**
- `Enquire Now →` (opens enquiry modal/form — see Section 9)
- `🛒 Add to Cart` (add-to-cart button)

---

### Card 2 — KALIMPONG HILLS

**Image:** Generate — Kalimpong hillside monastery, blooming flower gardens, misty Teesta valley below  
**Title:** Kalimpong Hills  
**Tagline:** "Orchids, monks, and mountain roads"  
**Blog para:**
> Kalimpong is the quieter cousin of Darjeeling — and all the better for it. Its hillsides bloom with orchids, its lanes hum with a quieter kind of life. From the bird-watching forests of Kolakham and Rishop to the fog-draped meadows of Loleygaon and Sillery Gaon, Kalimpong rewards the traveller who slows down and looks closely. CallingHills takes you to the corners that even locals save for special days.

**Offbeat Spots listed:**
Pedong · Lava · Rishop · Kolakham · Ramdhura · Chuikhim · Loleygaon · Sillery Gaon · Ichha Gaon · Delo

**CTA Buttons on card:**
- `Enquire Now →`
- `🛒 Add to Cart`

---

### Card 3 — DOOARS

**Image:** Generate — Dooars jungle road, elephant silhouette, river, lush green forest canopy  
**Title:** Dooars  
**Tagline:** "The doorway to the Eastern Himalayas"  
**Blog para:**
> Dooars — literally "the doors" — is where the plains meet the mountains in a rush of green. Riverbed campsites, jungle jeep safaris, birdwatcher's paradises, and elephant corridors make this one of India's most underrated wilderness zones. CallingHills takes you to Jhalong's riverside camps, Bindu's borderland forests, Rocky Island's wildness, and the silence of Suntalekhola — far from the weekend crowd.

**Offbeat Spots listed:**
Jhalong · Bindu · Samsing · Rocky Island · Paren · Gajoldoba · Suntalekhola · Chilapata · Rajabhatkhawa

**CTA Buttons on card:**
- `Enquire Now →`
- `🛒 Add to Cart`

---

### Card 4 — SIKKIM

**Image:** Generate — Yuksom monastery courtyard with prayer flags, snow-capped Kanchenjunga visible, blue sky  
**Title:** All Over Sikkim  
**Tagline:** "Four directions, four kinds of wonder"  
**Blog para:**
> Sikkim is one state with four completely different souls. North Sikkim — Lachen, Lachung, Yumthang — offers high-altitude valleys and yak meadows. West Sikkim — Pelling, Uttarey, Hee-Bermiok — is all sacred forests and monastery trails. East Sikkim — Zuluk, Gnathang, Aritar — has the legendary Silk Route with its hairpin roads and old-world quiet. South Sikkim — Namchi, Ravangla, Temi — holds the tea estates and the gentler green. CallingHills builds your Sikkim story around the direction that calls to you.

**Zone Breakdown (display as 4 small pills/tags):**
- 🏔️ North: Lachen, Lachung, Yumthang, Dzongu
- 🌿 West: Pelling, Uttarey, Kaluk, Hee-Bermiok
- 🛣️ East: Zuluk, Rongli, Aritar, Gnathang
- ☀️ South: Namchi, Ravangla, Temi

**CTA Buttons on card:**
- `Enquire Now →`
- `🛒 Add to Cart`

---

## 🔲 SECTION 5 — SIGNATURE PACKAGES

**Section ID:** `#packages`  
**Background:** `--ch-cream-light`  
**Padding:** 100px top/bottom

**Section Tag:** `✦ CURATED JOURNEYS`  
**Section Title:** "Our Signature Packages"  
**Section Subtitle:** "Every itinerary is hand-crafted — not copy-pasted. Built for travellers who want real experiences."

**Layout:** 2×2 grid on desktop, stacked on mobile. Each card is large (full content visible).

---

### Package 1 — OFFBEAT DARJEELING RETREAT

**Badge:** FEATURED PACKAGE  
**Duration:** 5 Days / 4 Nights  
**Type:** Nature · Leisure · Culture · Offbeat  
**Best For:** Couples · Families · Friends · Nature Lovers · Photographers  
**Image:** Generate — misty Darjeeling hills at sunrise, tea gardens in foreground, Kanchenjunga peak in distance

**Route:**
`NJP → Kurseong → Jogighat → Dawaipani → Rishihat → Tabbakoshi → Mirik → NJP`

**Stay Destinations:**
Jogighat (Sittong) · Dawaipani · Rishihat · Tabbakoshi

**Short Teaser (shown on card):**
> An offbeat Himalayan loop through pine forests, riverside villages, heritage tea estates, and mist-wrapped hilltops — far from the tourist trail.

**Package Highlights (bullet pills):**
- Kurseong Heritage Circuit
- Sittong & Mongpoo Exploration
- Dawaipani Pine Forests
- Lepchajagat & Mini Pahalgam
- Gopaldhara Tea Estate
- Mirik Lake & Bokar Monastery

#### Full Day-by-Day Itinerary (expandable accordion below card):

**Day 1 — NJP/Bagdogra to Jogighat (Sittong)**
> Begin your journey to Darjeeling through the scenic hill town of Kurseong, passing through lush tea gardens, misty forests, and picturesque mountain roads. Enjoy the refreshing Himalayan landscapes and charming views en route before arriving in the soulful hills.

*Enroute Sightseeing (Kurseong — 5 Points):*
1. Kurseong View Point — Panoramic hill & valley views
2. Giddapahar View Point — Peaceful mountain viewpoint surrounded by greenery
3. Dow Hill Forest Area — Famous pine forest with misty hill roads
4. Chimney Heritage Village — Scenic colonial-style village atmosphere
5. Hanuman Tak View Point — Quiet spiritual viewpoint with mountain scenery

*Meals: Lunch · Evening Snacks · Dinner*

---

**Day 2 — Jogighat to Upper / Lower Dawaipani**
> Travel through the scenic hills of Sittong and Mongpoo, exploring serene monasteries, heritage sites, forest lakes, and breathtaking Himalayan viewpoints before reaching the peaceful pine-clad village of Dawaipani.

*Sightseeing:*
6. Ahaldara View Point — Panoramic views of the Teesta Valley and Kanchenjunga range
7. Sittong Monastery — Peaceful Buddhist monastery with beautiful mountain surroundings
8. Jogighat Bridge — Picturesque steel bridge over the Riyang River
9. Namthing Pokhri — Natural lake famous for the rare Himalayan Salamander
10. Rabindra Bhavan, Mongpoo — Historic residence of Rabindranath Tagore

*Meals: Breakfast · Lunch · Evening Snacks · Dinner*

---

**Day 3 — Dawaipani to Rishihat**
> Bid farewell to Dawaipani and proceed towards Rishihat — a hidden gem nestled amidst lush tea gardens and rolling Himalayan hills. Surrounded by tea estates, dense greenery, and panoramic views of the Kanchenjunga range, Rishihat is the perfect setting to relax and experience the authentic beauty of offbeat Darjeeling.

*Meals: Breakfast · Lunch · Evening Snacks · Dinner*

---

**Day 4 — Rishihat to Tabbakoshi**
> Travel through scenic pine forests, lush tea gardens, and breathtaking Himalayan viewpoints as you journey from Rishihat to the peaceful riverside village of Tabbakoshi.

*Sightseeing:*
11. Lepchajagat — Serene pine forest village with Kanchenjunga views
12. Majidhura (Mini Pahalgam) — Picturesque meadow surrounded by pine forests — "Mini Pahalgam of Darjeeling"
13. Simana View Point — Panoramic mountain and valley views on the Indo-Nepal border
14. Gopaldhara Tea Garden — Renowned Darjeeling tea estate with rolling green plantations

*Meals: Breakfast · Lunch · Evening Snacks · Dinner*

---

**Day 5 — Tabbakoshi to NJP**
> Bid farewell to peaceful Tabbakoshi and proceed towards NJP through tea gardens, forested hills, and charming Himalayan landscapes.

*Sightseeing:*
15. Mirik Lake — Scenic hill lake surrounded by pine forests, gardens, and walking trails
16. Mirik City Explore — Local markets, cafes, and peaceful hill-town atmosphere
17. Bokar Monastery — Serene Buddhist monastery with beautiful architecture
18. Tingling View Point — Panoramic views of tea gardens, valleys, and Himalayan landscapes

*Meals: Breakfast*

---

**Package Inclusions ✔**
- Premium Cozy Homestay / Hotel Stay
- Meals from 1st Day Lunch to Last Day Breakfast
- Evening Snacks at Offbeat Locations
- Private Personal Vehicle
- Expert Mountain Driver
- Sightseeing as per Itinerary
- Pickup & Drop Assistance
- Driver Allowance & Fuel
- CallingHills Travel Kit
- 24×7 Travel Support
- Invoice Copy & Booking Confirmation
- Tour Planning & Local Assistance

**Package Exclusions ✖**
- Train / Flight Tickets
- Entry Fees & Camera Charges
- Personal Expenses & Shopping
- Extra Meals & Beverages
- Additional Sightseeing or Extra Vehicle Usage
- Tiger Hill Sunrise Charges (if not mentioned)
- Room Heater Charges
- Medical & Emergency Expenses
- Expenses Due to Landslides / Natural Calamities
- GST & Other Applicable Taxes
- Anything Not Mentioned in Inclusions

**CTA Buttons (on package card):**
- `Enquire Now →` (opens enquiry modal — see Section 9)
- `🛒 Add to Cart`

---

### Package 2 — SILK ROUTE EXPLORER (Placeholder — Build with same structure)

**Duration:** 5 Nights / 6 Days  
**Destinations:** East Sikkim — Zuluk, Gnathang, Rongli, Aritar  
**Image:** Generate — Silk Route hairpin road, East Sikkim, mist and mountains  
**Short Teaser:** > An ancient mountain highway, hairpin bends into the clouds, quiet border villages, and sunrises over the old Tibetan trading route.
**Highlights:** Zuluk Loop · Gnathang Valley · Nathang Plateau · Old Silk Route · Kupup Lake · Tsomgo Lake

*Full itinerary: Placeholder — client to provide; use same day-by-day accordion format as Package 1*

**Same Inclusions/Exclusions as Package 1**

**CTAs:**
- `Enquire Now →`
- `🛒 Add to Cart`

---

### Package 3 — DOOARS WILDLIFE SAFARI (Placeholder)

**Duration:** 4 Nights / 5 Days  
**Destinations:** Jhalong, Bindu, Samsing, Rocky Island, Rajabhatkhawa  
**Image:** Generate — Dooars river camp at dusk, lanterns lit, jungle treeline  
**Short Teaser:** > Where the jungle meets the river and the mountains begin — camp beside wild rivers, spot elephants, and hear the forest come alive at night.
**Highlights:** Jhalong River Camp · Bindu Border Forest · Chilapata Jungle · Elephant Safari · Birdwatching at Rajabhatkhawa

*Full itinerary: Placeholder — client to provide; use same day-by-day accordion format*

**CTAs:**
- `Enquire Now →`
- `🛒 Add to Cart`

---

### Package 4 — SIKKIM MONASTERY CIRCUIT (Placeholder)

**Duration:** 6 Nights / 7 Days  
**Destinations:** West Sikkim — Pelling, Uttarey, Yuksom, Hee-Bermiok  
**Image:** Generate — Pelling monastery at sunset, Kanchenjunga golden glow  
**Short Teaser:** > A sacred loop through West Sikkim's most spiritual landscapes — ancient monasteries, waterfall trails, prayer flag valleys, and the shadow of Kanchenjunga.
**Highlights:** Pemayangtse Monastery · Yuksom · Barsey Rhododendron Sanctuary · Uttarey · Rabdentse Ruins

*Full itinerary: Placeholder — client to provide*

**CTAs:**
- `Enquire Now →`
- `🛒 Add to Cart`

---

## 🔲 SECTION 6 — TREKKING ROUTES

**Section ID:** `#experiences`  
**Background:** `--ch-forest-deep` (dark section for contrast)  
**Padding:** 100px top/bottom  
**Text colour:** `--ch-mist`

**Section Tag:** `✦ FOR THE BOLD ONES`  
**Section Title:** "Himalayan Treks"  
**Section Subtitle:** "We provide accessibility support for all our guests — easy, moderate, or difficult."

**Layout:** Masonry or 3-column card grid

**Trek List (8 cards, each with: Name, Difficulty badge, Region, Short description):**

| Trek Name | Difficulty | Region |
|-----------|------------|--------|
| Sandakphu–Phalut Trek | Moderate | Darjeeling |
| Dzongri–Goechala Trek | Difficult | West Sikkim |
| Kanchenjunga Base Camp | Difficult | North Sikkim |
| Singalila Ridge Trek | Moderate | Darjeeling |
| Barsey Rhododendron Trek | Easy–Moderate | West Sikkim |
| Yuksom–Dzongri Trek | Moderate | West Sikkim |
| Neora Valley Forest Trek | Easy–Moderate | Kalimpong |
| Zuluk–Gnathang Ridge Walk | Easy | East Sikkim |

**Each trek card CTA:**
- `Enquire Now →`
- `🛒 Add to Cart`

---

## 🔲 SECTION 7 — OUR SERVICES

**Section ID:** `#services` (or fold into About section as subsection)  
**Background:** `--ch-cream-mid`  
**Padding:** 80px top/bottom

**Section Tag:** `✦ WHAT WE OFFER`  
**Section Title:** "Everything You Need for the Perfect Hill Journey"

**Layout:** 3-column icon grid (desktop), 2-column (tablet), 1-column (mobile)

**12 Service Cards (icon + title + 1-line description):**

1. **Offbeat Travel Planning** — Custom itineraries to hidden gems
2. **Homestay / Hotel Booking** — Curated local stays, budget to premium
3. **All-Inclusive A-to-Z Packages** — Everything handled end to end
4. **Village Walks & Local Food Trails** — Taste the real hills
5. **Car Rental & Local Transport** — Expert mountain drivers
6. **Photography-Friendly Custom Routes** — Built for visual storytellers
7. **Birdwatching, Camping & Nature Trails** — Into the wild, safely
8. **Premium, Budget & Eco-Luxury Options** — Every wallet, every style
9. **Honeymoon & Family Tour Specialists** — Your moment, our craft
10. **Group Travel, Women Safety Assured** — Travel together, worry-free
11. **Trekking Routes (Singalila to Dzongri)** — Guided Himalayan trails
12. **B2B Travel Partnership & Custom Routes** — For travel agents & operators

**We Assure You (3-item horizontal strip below services):**
- 📋 Printed Tour Plan (Hardcopy)
- 🧾 Original Bills & Transparent Cost Breakup
- 🎒 Essentials Travel Kit (Individually packed)
- 🆓 Free Tour Consultation Services

---

## 🔲 SECTION 8 — GALLERY

**Section ID:** `#gallery`  
**Background:** `--ch-cream-light`  
**Padding:** 100px top/bottom

**Section Tag:** `✦ VISUAL STORIES`  
**Section Title:** "Through Our Lens"  
**Section Subtitle:** "Every frame is a memory from the hills."

**Layout:** Bento grid — mix of 1×1, 2×1, 1×2 cells. 10–12 images.

**Images to Generate (AI prompts):**
1. Cinematic sunrise over Kanchenjunga from Sandakphu ridge — wide 2:1
2. Darjeeling tea garden close-up, golden hour, tea plucker in frame
3. Misty pine forest road in Lepchajagat — tall 1:2
4. Kalimpong orchid nursery, vivid colours, soft bokeh
5. Dooars river camp at night, bonfire, starry sky — wide 2:1
6. Yumthang Valley in bloom, Sikkim, rhododendrons red and pink
7. Old Silk Route hairpin road at dawn, fog filling valleys
8. Sittong Monastery courtyard, monk, prayer flags
9. Mirik Lake reflection, rowing boat, pine trees — tall 1:2
10. Local homestay breakfast spread, wooden table, hills visible through window
11. Elephant crossing jungle road, Dooars
12. Dzongri trek camp, tents, Kanchenjunga at sunset — wide 2:1

**Hover behaviour:** Zoom 1.05 + overlay with location name  
**Click:** Lightbox fullscreen with prev/next  
**GSAP:** Stagger fade-in on scroll

---

## 🔲 SECTION 9 — ENQUIRY + CONTACT + CTA STRIP

**Section ID:** `#contact`  
**Background:** `--ch-forest-deep`  
**Text colour:** `--ch-mist`  
**Padding:** 100px top/bottom

### 9A — CTA Strip (full-width banner above contact form)

**Background:** `--ch-forest` (slightly lighter green than section bg)  
**Content:**

```
[Left: Cormorant Garamond italic]          [Right: Two buttons]
"Ready to Answer                           [Enquire Now →]
  the Call of the Hills?"                  [Plan My Custom Trip]
```

---

### 9B — Contact / Enquiry Form Section

**Layout:** Two columns — Left: info panel | Right: form

**Left Column — Contact Info:**

**Title:** "Let's Plan Your Journey"  
**Subtitle:** "Free consultation. No pressure. Just honest travel advice."

**Contact Details:**
- 📞 +91 62895 90603
- 📞 +91 91238 43327
- 💬 WhatsApp: +91 90519 66561
- 📧 hello@callinghills.com
- 🌐 www.callinghills.com

**Offices:**
> **Darjeeling Office:** Senchal Tiger Hill Road, Darjeeling – 734102, West Bengal  
> **Kolkata Office:** 35 Tarun Sen Pally Road, Kolkata – 700079, West Bengal

**Trust badge:**
> Govt. of India & Govt. of West Bengal Verified Travel Service  
> Business Banking Partner – State Bank of India (SBI)

---

**Right Column — Enquiry Form:**

Form fields:
- Name (text input)
- Email (email input)
- Phone / WhatsApp (tel input)
- Destination (dropdown): Darjeeling Hills / Kalimpong Hills / Dooars / Sikkim — North / Sikkim — West / Sikkim — East / Sikkim — South / Trekking / Custom / Not decided yet
- Number of Travellers (number input)
- Travel Month (dropdown: Jan–Dec + Flexible)
- Package Interest (dropdown): Offbeat Darjeeling Retreat / Silk Route Explorer / Dooars Safari / Sikkim Monastery Circuit / Custom Package / Not sure
- Your Message (textarea, 4 rows)
- Submit: `Send Enquiry →` button (bg `--ch-forest`, full-width on mobile)

**Form style:** Dark inputs `rgba(244,242,238,0.08)` bg, border `1px solid rgba(244,242,238,0.18)`, gold focus border, rounded 8px

---

### 9C — Enquiry Modal (triggered by all "Enquire Now" CTAs across the page)

The same form above should also appear as a **modal/overlay** when any `Enquire Now →` button is clicked anywhere on the page. The modal closes on backdrop click or ✕ button.

---

### 9D — Cart System (triggered by all "Add to Cart" buttons)

**Simple floating cart icon (top-right or sticky sidebar):**
- Cart icon with item count badge
- Click to expand cart drawer (slides in from right)
- Cart drawer shows: Item name, destination, price placeholder (TBD), remove button
- CTA inside cart: `Proceed to Enquiry →` (triggers enquiry form with cart items pre-filled in message field)

> **Note:** This is not a full e-commerce checkout. It's a "save for later / enquiry list" system. No payment gateway needed — cart items just populate the enquiry form.

---

## 🔲 SECTION 10 — FOOTER

**Background:** `--ch-forest-deep`  
**Border-top:** `1px solid rgba(251, 245, 221, 0.1)`  
**Text:** `--ch-mist`  
**Padding:** 60px top / 32px bottom

**Layout — 3 column rows:**

**Row 1 (top):**
- **Left:** Logo (SVG mountain + "CallingHills") + tagline: *"Discover Hidden Trails, Hill Villages & Nature's Soul"*
- **Centre:** Quick links in 2 columns: Destinations · Packages · Treks · Services · Gallery · Contact · About Us · B2B Partnership
- **Right:** Contact snapshot + Social icons (Instagram, Facebook, WhatsApp)

**Row 2 (bottom):**
- Left: `© 2026 CallingHills. All rights reserved.`
- Centre: `Crafted with ♥ in the Himalayas`
- Right: `Privacy Policy · Terms of Service`

**Extras:**
- Large faded watermark text "CallingHills" behind footer — font-size 120px, opacity 0.03
- Back-to-top floating button (circle, `--ch-forest` colour, ↑ arrow) — appears after scroll >400px

---

## ⚙️ TECHNICAL NOTES FOR ANTIGRAVITY

1. **Single file** — all CSS in `<style>`, all JS in `<script>`, inside `index.html`
2. **CDN libraries already loaded** — GSAP 3.12.5 + ScrollTrigger, Three.js r128
3. **Don't touch Phase 2 code** — only add new sections replacing `<section class="spacer">`
4. **New CSS** → inside existing `<style>` block (before `</style>`, around line 679)
5. **New HTML** → replace `<section class="spacer">` placeholder (around line 800–806)
6. **New JS** → inside existing `<script>` block (before `</script>`, around line 1075)
7. **Section anchor IDs** already in navbar: `#destinations` `#packages` `#experiences` `#gallery` `#contact`
8. **Images** → flat directory, same folder as `index.html` (no subfolders)
9. **Responsive** → 900px tablet breakpoint, 480px mobile breakpoint
10. **GSAP ScrollTrigger** → already registered; all new sections need entrance animations

---

## 🖼️ IMAGES TO GENERATE (Summary List)

| Section | Image Description |
|---------|------------------|
| Section 3 (About) | Misty Himalayan hill village, warm morning light, 4:3 |
| Section 4 — Darjeeling | Aerial tea gardens, Kanchenjunga, golden hour, 3:4 card |
| Section 4 — Kalimpong | Hillside monastery, orchid gardens, Teesta valley, 3:4 card |
| Section 4 — Dooars | Jungle road, elephant, river, green canopy, 3:4 card |
| Section 4 — Sikkim | Yuksom monastery, prayer flags, Kanchenjunga, 3:4 card |
| Section 5 — Darjeeling Package | Tea gardens + mist, Kanchenjunga, sunrise, 16:9 |
| Section 5 — Silk Route | Hairpin road East Sikkim, fog, mountains, 16:9 |
| Section 5 — Dooars Safari | River camp at dusk, lanterns, jungle, 16:9 |
| Section 5 — Sikkim Monastery | Pelling monastery sunset, Kanchenjunga glow, 16:9 |
| Gallery (12 images) | See Section 8 image list above |

> **AI Image Prompt Template:**  
> *"Cinematic travel photograph of [location/subject], Eastern Himalayas, moody atmospheric light, professional photography, [ratio] format, rich forest greens and warm golden tones, no text"*

---

## 📞 CLIENT CONTACT DETAILS (for footer + contact section)

| Channel | Detail |
|---------|--------|
| Phone / WhatsApp | +91 62895 90603 |
| Phone | +91 91238 43327 |
| Official WhatsApp | +91 90519 66561 |
| Email | hello@callinghills.com |
| Website | www.callinghills.com |
| Darjeeling Office | Senchal Tiger Hill Road, Darjeeling – 734102, West Bengal |
| Kolkata Office | 35 Tarun Sen Pally Road, Kolkata – 700079, West Bengal |
| Verification | Govt. of India & Govt. of West Bengal Verified |
| Banking Partner | State Bank of India (SBI) |

---

## ✅ BUILD CHECKLIST (Phases 3–9)

- [ ] Phase 3 — Trust Bar strip
- [ ] Phase 4 — Who We Are (about section)
- [ ] Phase 5 — Destinations (4 destination cards with blog para + Enquire Now + Add to Cart)
- [ ] Phase 6 — Signature Packages (4 packages with full itinerary accordion, incl/excl, CTAs)
- [ ] Phase 7 — Trekking Experiences (8 trek cards)
- [ ] Phase 8 — Our Services (12 service grid + We Assure You strip)
- [ ] Phase 9 — Gallery (bento grid + lightbox)
- [ ] Phase 10 — Enquiry Form + Contact + CTA Strip
- [ ] Phase 11 — Cart System (floating icon + drawer + enquiry link)
- [ ] Phase 12 — Footer (3-col, watermark, back-to-top)

---

*This document contains complete content mapping from client PDFs + design system for all remaining sections. Hero section (Phase 2) is complete and must not be modified.*
