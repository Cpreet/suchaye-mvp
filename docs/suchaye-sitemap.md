# Suchaye — Sitemap & URL Specification

## 1. Top-Level Structure

- `/`                → Home
- `/jewellery`       → Jewellery Listing
- `/jewellery/[slug]`→ Jewellery Product Detail
- `/candles`         → Candle Listing
- `/candles/[slug]`  → Candle Product Detail
- `/bags`            → Bag Listing
- `/bags/[slug]`     → Bag Product Detail
- `/cart`            → Cart
- `/checkout`        → Checkout
- `/about`           → About
- `/contact`         → Contact
- `/policies`        → Policies (Shipping, Returns, Terms, Privacy)

---

## 2. Home (`/`)

**Purpose:**  
Introduce Suchaye, clearly split users into three paths (Jewellery / Candles / Bags), and showcase a few bestsellers.

**URL:** `/`

**Sections:**
1. Hero (brand + main CTA buttons)
2. Category tiles (Jewellery, Candles, Bags)
3. Bestsellers (mixed or split)
4. Brand story snippet
5. Footer

**SEO:**
- Title: `Suchaye — Handcrafted Jewellery, Scented Candles & Bags by Vibhuti`
- Meta description:  
  `Discover handmade jewellery, scented candles, and bags by Suchaye. Thoughtful designs, small-batch craft, and warm, slow-made pieces for you and your home.`

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

## 7. Bag Listing (`/bags`)

**Purpose:**  
Allow users to browse all bags with basic filtering.

**URL:** `/bags`

**Sections:**
1. Page hero (title + short intro)
2. Filters (Type, Material)
3. Product grid
4. Pagination or "Load more"

**SEO:**
- Title: `Handmade Bags — Suchaye`
- Meta description:  
  `Shop handmade bags by Suchaye. Thoughtfully crafted totes, crossbody bags, clutches and more, made with care and attention to detail.`

---

## 8. Bag Product Detail (`/bags/[slug]`)

**Purpose:**  
Deep-dive into a single bag and convert.

**URL pattern:**  
`/bags/[slug]`  
Example: `/bags/linen-tote-bag`

**Content blocks:**
- Image gallery
- Title, price
- Description
- Key specs (material, dimensions, closure, strap length, lining)
- Care instructions
- Dispatch info
- Add to Cart / Buy Now

**SEO:**
- Title: `[Product Name] — Handmade Bag by Suchaye`
- Meta description pattern:  
  `[Product Name] by Suchaye. Handmade [type] bag crafted in [material], perfect for [usage]. Shop handmade bags online.`

---

## 9. Cart (`/cart`)

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
  `Review your handmade jewellery, candles, and bags from Suchaye before checkout.`

---

## 10. Checkout (`/checkout`)

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
  `Complete your purchase of handmade jewellery, candles, and bags from Suchaye.`

---

## 11. About (`/about`)

**Purpose:**  
Share brand story, values, and the person behind Suchaye.

**URL:** `/about`

**SEO:**
- Title: `About Suchaye — Handcrafted by Vibhuti`
- Meta description:  
  `Learn about Suchaye, a handcrafted jewellery, candle, and bag studio by Vibhuti. Small-batch creations, made with care and intention.`

---

## 12. Contact (`/contact`)

**Purpose:**  
Provide simple channels to reach out.

**URL:** `/contact`

**SEO:**
- Title: `Contact — Suchaye`
- Meta description:  
  `Have a question about our handmade jewellery, candles, or bags? Contact the Suchaye team.`

---

## 13. Policies (`/policies`)

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
  `Read about shipping, returns, and policies for Suchaye's handmade jewellery, candles, and bags.`

