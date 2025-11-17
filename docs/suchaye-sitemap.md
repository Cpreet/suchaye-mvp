# Suchaye — Sitemap & URL Specification

## 1. Top-Level Structure

- `/`                → Home
- `/jewellery`       → Jewellery Listing
- `/jewellery/[slug]`→ Jewellery Product Detail
- `/candles`         → Candle Listing
- `/candles/[slug]`  → Candle Product Detail
- `/cart`            → Cart
- `/checkout`        → Checkout
- `/about`           → About
- `/contact`         → Contact
- `/policies`        → Policies (Shipping, Returns, Terms, Privacy)

---

## 2. Home (`/`)

**Purpose:**  
Introduce Suchaye, clearly split users into two paths (Jewellery / Candles), and showcase a few bestsellers.

**URL:** `/`

**Sections:**
1. Hero (brand + main CTA buttons)
2. Category tiles (Jewellery, Candles)
3. Bestsellers (mixed or split)
4. Brand story snippet
5. Footer

**SEO:**
- Title: `Suchaye — Handcrafted Jewellery & Scented Candles by Vibhuti`
- Meta description:  
  `Discover handmade jewellery and scented candles by Suchaye. Thoughtful designs, small-batch craft, and warm, slow-made pieces for you and your home.`

---

## 3. Jewellery Listing (`/jewellery`)

**Purpose:**  
Allow users to browse all jewellery products with basic filtering.

**URL:** `/jewellery`

**Sections:**
1. Page hero (title + short intro)
2. Filters (Type, Price)
3. Product grid
4. Pagination or “Load more”

**SEO:**
- Title: `Handmade Jewellery — Suchaye`
- Meta description:  
  `Explore handmade earrings, necklaces, bracelets and more from Suchaye. Lightweight, everyday-friendly jewellery crafted with care.`

---

## 4. Jewellery Product Detail (`/jewellery/[slug]`)

**Purpose:**  
Deep-dive into a single jewellery piece and convert.

**URL pattern:**  
`/jewellery/[slug]`  
Example: `/jewellery/gold-brass-hoop-earrings`

**Content blocks:**
- Image gallery
- Title, price
- Key specs (material, finish, closure, weight)
- Description
- Care instructions
- Dispatch info
- Add to Cart / Buy Now

**SEO:**
- Title: `[Product Name] — Handmade Jewellery by Suchaye`
- Meta description pattern:  
  `[Product Name] by Suchaye. Handmade [type] crafted in [material/finish], perfect for [occasion/usage]. Shop online from Suchaye.`

---

## 5. Candle Listing (`/candles`)

**Purpose:**  
Allow users to browse all candles with basic filtering.

**URL:** `/candles`

**Sections:**
1. Page hero (title + short intro)
2. Filters (Scent family, Size)
3. Product grid
4. Pagination or “Load more”

**SEO:**
- Title: `Handmade Scented Candles — Suchaye`
- Meta description:  
  `Shop handmade scented candles by Suchaye. Small-batch, slow-burning candles with cozy scents for every corner of your home.`

---

## 6. Candle Product Detail (`/candles/[slug]`)

**Purpose:**  
Deep-dive into a single candle and convert.

**URL pattern:**  
`/candles/[slug]`  
Example: `/candles/lavender-fields-soy-candle`

**Content blocks:**
- Image gallery
- Title, price
- Scent notes (top/heart/base)
- Wax type, wick type
- Net weight, burn time
- Usage & safety
- Dispatch info
- Add to Cart / Buy Now

**SEO:**
- Title: `[Product Name] — Handmade Candle by Suchaye`
- Meta description pattern:  
  `[Product Name] by Suchaye. Hand-poured [wax type] candle with [scent notes], slow-burning and cozy. Shop handmade candles online.`

---

## 7. Cart (`/cart`)

**Purpose:**  
Review and adjust order before checkout.

**URL:** `/cart`

**Content blocks:**
- Cart items list
- Quantities and remove actions
- Order summary (subtotal, shipping estimate)
- CTA: Proceed to Checkout

**SEO:**
- Title: `Your Cart — Suchaye`
- Meta description:  
  `Review your handmade jewellery and candles from Suchaye before checkout.`

---

## 8. Checkout (`/checkout`)

**Purpose:**  
Collect address and payment details and confirm order.

**URL:** `/checkout`

**Content blocks:**
- Customer details
- Shipping address
- Order summary
- Payment (Razorpay / etc.)
- Order confirmation message after success

**SEO:**
- Title: `Checkout — Suchaye`
- Meta description:  
  `Complete your purchase of handmade jewellery and candles from Suchaye.`

---

## 9. About (`/about`)

**Purpose:**  
Share brand story, values, and the person behind Suchaye.

**URL:** `/about`

**SEO:**
- Title: `About Suchaye — Handcrafted by Vibhuti`
- Meta description:  
  `Learn about Suchaye, a handcrafted jewellery and candle studio by Vibhuti. Small-batch creations, made with care and intention.`

---

## 10. Contact (`/contact`)

**Purpose:**  
Provide simple channels to reach out.

**URL:** `/contact`

**SEO:**
- Title: `Contact — Suchaye`
- Meta description:  
  `Have a question about our handmade jewellery or candles? Contact the Suchaye team.`

---

## 11. Policies (`/policies`)

**Purpose:**  
Centralized legal and policy information.

**URL:** `/policies`

**Included sections:**
- Shipping Policy
- Returns & Refunds
- Terms & Conditions
- Privacy Policy

**SEO:**
- Title: `Shipping, Returns & Policies — Suchaye`
- Meta description:  
  `Read about shipping, returns, and policies for Suchaye’s handmade jewellery and candles.`

