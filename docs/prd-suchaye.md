# **Product Requirements Document (PRD) — Suchaye E-Commerce MVP**

**Project:** Suchaye
**Version:** MVP
**Owner:** Charanpreet
**Brand:** Handmade Jewellery & Handmade Candles by Vibhuti

---

## **1. Product Summary**

Suchaye is a handcrafted lifestyle brand offering two product lines:

1. Handmade Jewellery
2. Handmade Scented Candles

The MVP delivers a clean, minimal storefront where users can browse products, view details, add to cart, and checkout via Razorpay.

---

## **2. Problem Statement**

The current online presence lacks:

* Clear separation of product categories
* Organized product listings
* A functional checkout flow
* A brand story that builds trust

The MVP solves these issues by providing a structured, user-friendly e-commerce experience.

---

## **3. Goals**

### **Primary Goals**

* Establish two clear product categories: Jewellery and Candles
* Provide listing pages + product detail pages
* Implement cart and checkout
* Ensure mobile-first responsive design
* Enable Vibhuti to manage products easily

### **Secondary Goals**

* Communicate minimal brand story
* Validate demand
* Create a foundation for future expansion

---

## **4. Non-Goals**

* No wishlist or user accounts
* No international shipping
* No review system
* No advanced search or filtering
* No custom backend for MVP

---

## **5. User Personas**

### **1. Gifter**

* Buys premium handmade items
* Wants quick checkout and clear pricing

### **2. Aesthetic Buyer**

* Cares about photography and vibe
* Browses across categories

### **3. Returning Customer**

* Prefers fast reorder
* Wants clear product info and transparency

---

## **6. Information Architecture**

### **Pages**

* `/` — Home
* `/jewellery` — Jewellery Listing
* `/jewellery/[slug]` — Jewellery Product Detail
* `/candles` — Candle Listing
* `/candles/[slug]` — Candle Product Detail
* `/cart` — Cart
* `/checkout` — Checkout
* `/about` — About
* `/contact` — Contact
* `/policies` — Combined Policies page

### **Header Navigation**

Home | Jewellery | Candles | About | Contact

---

## **7. Functional Requirements**

---

### **7.1 Home Page**

**Sections:**

* Hero (brand name + subheading)
* Category tiles (Jewellery, Candles)
* Bestsellers (3–6 items)
* Brand story teaser
* Footer

**User actions:**

* Navigate to categories
* View bestsellers

---

### **7.2 Jewellery Listing — `/jewellery`**

**Features:**

* Grid layout (2–3 per row)
* Basic filters:

  * Type: Earrings, Necklaces, Bracelets, Rings
  * Price range
* Product cards (image, name, price, tags)

---

### **7.3 Jewellery Product Detail — `/jewellery/[slug]`**

**Content Requirements:**

* Image gallery (3–5 images)
* Name + Price
* Short description
* Specs:

  * Material
  * Finish
  * Closure type
  * Weight (optional)
* Care instructions
* Dispatch time

**Actions:**

* Add to Cart
* Adjust quantity
* Buy Now

---

### **7.4 Candle Listing — `/candles`**

**Features:**

* Grid layout
* Filters:

  * Scent family (Floral, Fresh, Woody, Sweet)
  * Size (S/M/L)
* Product cards (image, name, price, scent family)

---

### **7.5 Candle Product Detail — `/candles/[slug]`**

**Content Requirements:**

* Image gallery
* Name + Price
* Scent description
* Notes (Top / Heart / Base)
* Wax type
* Wick type
* Weight
* Burn time
* Safety instructions

**Actions:**

* Add to Cart
* Adjust quantity

---

### **7.6 Cart — `/cart`**

**Features:**

* Product list with thumbnails
* Quantity editing
* Remove item
* Order summary
* CTA: Proceed to Checkout

---

### **7.7 Checkout — `/checkout`**

**Fields:**

* User details (name, email, phone)
* Shipping address
* Order summary
* Razorpay payment integration

**Post-Order:**

* Confirmation message
* Optional WhatsApp CTA

---

### **7.8 About Page — `/about`**

**Content:**

* Brand story
* Creator description
* Philosophy: handmade, small-batch, slow-made

---

### **7.9 Contact Page — `/contact`**

**Features:**

* WhatsApp link
* Email
* Optional contact form

---

### **7.10 Policies — `/policies`**

**Includes:**

* Shipping
* Returns & Refunds
* Privacy Policy
* Terms & Conditions

---

## **8. Content Requirements**

### **Minimum SKUs**

* Jewellery: 6–10
* Candles: 4–8

### **Photography**

* 1 clean product shot
* 1 close-up
* 1 lifestyle shot

### **Copywriting Style**

* Warm
* Simple
* Emotional but minimal
* Highlights “handmade”, “small batch”, “crafted intentionally”

---

## **9. Technical Requirements**

### **Platform**

* SmartBiz (existing)
* Future migration route: Vite + React + Tailwind + shadcn/ui

### **Integrations**

* Payment: Razorpay
* Communication: WhatsApp

### **Performance**

* Compressed images
* Lazy loading
* SEO-friendly metadata

---

## **10. Acceptance Criteria**

* Users can browse jewellery and candles independently
* Product detail pages show all required info
* Cart updates correctly
* Razorpay checkout completes successfully
* Mobile UX smooth and consistent
* Admin can add/edit products

---

## **11. Risks & Mitigations**

| Risk                        | Impact | Mitigation                           |
| --------------------------- | ------ | ------------------------------------ |
| Inconsistent product photos | High   | Provide clean photography guidelines |
| Checkout failures           | High   | Add WhatsApp order fallback          |
| Category confusion          | Medium | Strong category tiles on home page   |
| Slow mobile performance     | High   | Image compression + caching          |

---

## **12. Post-MVP Roadmap**

* Product bundles
* Customer reviews
* Wishlist
* Blog
* International shipping
* Candle refill subscription