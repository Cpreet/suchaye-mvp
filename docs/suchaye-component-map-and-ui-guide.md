# Suchaye — Component Map & UI Guide

## 1. Component Map

### 1.1 High-Level Structure

```txt
src/
  main.tsx
  App.tsx
  routes/
    home/
    jewellery/
    candles/
    bags/
    cart/
    checkout/
    about/
    contact/
    policies/
  components/
    layout/
    navigation/
    product/
    cart/
    forms/
    feedback/
    sections/
  components/ui/   ← shadcn/ui primitives
  lib/
    cart/
    products/
    types/
```

---

### 1.2 Layout & Shell Components

#### `LayoutRoot`

* **Path:** `src/components/layout/layout-root.tsx`
* **Responsibility:**

  * Wraps the entire app with:

    * Header
    * Footer
    * Main content container
  * Provides consistent max-width and spacing.
* **Key children:**

  * `<SiteHeader />`
  * `<Outlet />` or `{children}`
  * `<SiteFooter />`

#### `SiteHeader`

* **Path:** `src/components/layout/site-header.tsx`
* **Responsibility:**

  * Top navigation bar.
  * Shows logo/brand, primary nav links, cart icon, mobile menu trigger.
* **Uses:**

  * `<BrandLogo />`
  * `<MainNav />`
  * `<CartIconButton />`
  * shadcn `<Sheet />` (mobile drawer)

#### `SiteFooter`

* **Path:** `src/components/layout/site-footer.tsx`
* **Responsibility:**

  * Footer links (Shop, About, Contact, Policies).
  * Social links (Instagram, WhatsApp).
* **Uses:**

  * `<FooterLinkGroup />`

#### `PageShell`

* **Path:** `src/components/layout/page-shell.tsx`
* **Responsibility:**

  * Wraps each route page with:

    * Page header (title + optional subtitle + breadcrumb)
    * Standard vertical spacing.
* **Props:**

  * `title: string`
  * `subtitle?: string`
  * `breadcrumbItems?: BreadcrumbItem[]`

---

### 1.3 Navigation Components

#### `BrandLogo`

* **Path:** `src/components/navigation/brand-logo.tsx`
* **Responsibility:**

  * Displays “Suchaye” logotype.
  * Click to navigate to `/`.

#### `MainNav`

* **Path:** `src/components/navigation/main-nav.tsx`
* **Responsibility:**

  * Renders top-level nav links:

    * Home, Jewellery, Candles, About, Contact.
* **Props:**

  * `orientation: "horizontal" | "vertical"` (desktop vs mobile)

#### `Breadcrumbs`

* **Path:** `src/components/navigation/breadcrumbs.tsx`
* **Responsibility:**

  * Optional breadcrumb navigation on listing and product pages.
* **Props:**

  * `items: { label: string; href?: string }[]`

---

### 1.4 Section / Layout Helpers

#### `Section`

* **Path:** `src/components/sections/section.tsx`
* **Responsibility:**

  * Generic wrapper for page sections with consistent padding and max-width.
* **Props:**

  * `title?: string`
  * `subtitle?: string`
  * `className?: string`

#### `HeroSection`

* **Path:** `src/components/sections/hero-section.tsx`
* **Responsibility:**

  * Home page hero: brand name, subheading, primary CTAs.
* **Props:**

  * `title: string`
  * `subtitle: string`
  * `primaryAction: ReactNode`
  * `secondaryAction?: ReactNode`

#### `CategoryTilesSection`

* **Path:** `src/components/sections/category-tiles-section.tsx`
* **Responsibility:**

  * Home section with jewellery + candles tiles.
* **Uses:**

  * `<CategoryTile />` (see below)

#### `BestsellersSection`

* **Path:** `src/components/sections/bestsellers-section.tsx`
* **Responsibility:**

  * Displays 3–6 best-selling products (mixed categories).
* **Uses:**

  * `<ProductCard />`

#### `BrandStorySection`

* **Path:** `src/components/sections/brand-story-section.tsx`
* **Responsibility:**

  * Short “About Suchaye” blurb on home page.

---

### 1.5 Category & Product Components

#### `CategoryTile`

* **Path:** `src/components/product/category-tile.tsx`
* **Responsibility:**

  * Prominent clickable card for “Handmade Jewellery” or “Handmade Candles”.
* **Props:**

  * `title: string`
  * `description: string`
  * `href: string`
  * `image?: string | ReactNode`

#### `ProductGrid`

* **Path:** `src/components/product/product-grid.tsx`
* **Responsibility:**

  * Layout grid for listing pages (jewellery/candles).
* **Props:**

  * `products: Product[]`
  * `variant?: "jewellery" | "candles"`

#### `ProductCard`

* **Path:** `src/components/product/product-card.tsx`
* **Responsibility:**

  * Card used on listing pages and bestsellers.
* **Props:**

  * `product: Product`
* **Displays:**

  * Thumbnail image
  * Name
  * Price
  * Tag (e.g., “New”, “Bestseller”)
  * Category label (if needed)

#### `ProductGallery`

* **Path:** `src/components/product/product-gallery.tsx`
* **Responsibility:**

  * Image gallery for product detail pages.
* **Props:**

  * `images: string[]`
* **Implementation:**

  * Main image + thumbnails.
  * Optional lightbox or dialog.

#### `ProductInfoBlock`

* **Path:** `src/components/product/product-info-block.tsx`
* **Responsibility:**

  * Name, price, short description, key specs.
* **Props:**

  * `product: Product`

#### `ProductSpecs`

* **Path:** `src/components/product/product-specs.tsx`
* **Responsibility:**

  * Detail/spec table, differs slightly for jewellery vs candles.
* **Props:**

  * `product: Product`
* **Behavior:**

  * If `product.category === "jewellery"`, show material, finish, closure, weight, care.
  * If `product.category === "candle"`, show wax, wick, weight, burn time, notes.

#### `ProductBadge`

* **Path:** `src/components/product/product-badge.tsx`
* **Responsibility:**

  * Visual badges like “New”, “Bestseller”, “Limited”.
* **Props:**

  * `variant: "new" | "bestseller" | "limited"`

---

### 1.6 Filtering & Sorting

#### `FilterBar`

* **Path:** `src/components/product/filter-bar.tsx`
* **Responsibility:**

  * Horizontal bar with basic filters per category.
* **Props:**

  * `filters: FilterDefinition[]`
  * `value: FilterState`
  * `onChange: (value: FilterState) => void`

#### `JewelleryFilterBar`

* **Path:** `src/components/product/jewellery-filter-bar.tsx`
* **Responsibility:**

  * Specialized filter bar for jewellery listing.
* **Filters:**

  * Type (Earrings, Necklaces, Bracelets, Rings)
  * Price range buckets

#### `CandleFilterBar`

* **Path:** `src/components/product/candle-filter-bar.tsx`
* **Responsibility:**

  * Specialized filter bar for candle listing.
* **Filters:**

  * Scent family
  * Size

---

### 1.7 Cart & Checkout Components

#### `CartIconButton`

* **Path:** `src/components/cart/cart-icon-button.tsx`
* **Responsibility:**

  * Icon in header showing cart count.
  * Optional click to open cart drawer.
* **Props:**

  * `itemCount: number`

#### `CartLineItem`

* **Path:** `src/components/cart/cart-line-item.tsx`
* **Responsibility:**

  * Single line item in cart page.
* **Props:**

  * `item: CartItem`
* **Displays:**

  * Thumbnail, name, category, price, quantity control, remove button.

#### `CartSummary`

* **Path:** `src/components/cart/cart-summary.tsx`
* **Responsibility:**

  * Subtotal, shipping estimate, total, checkout button.

#### `QuantitySelector`

* **Path:** `src/components/cart/quantity-selector.tsx`
* **Responsibility:**

  * Increment/decrement quantity control.
* **Props:**

  * `value: number`
  * `min?: number`
  * `max?: number`
  * `onChange: (value: number) => void`

#### `CheckoutForm`

* **Path:** `src/components/checkout/checkout-form.tsx`
* **Responsibility:**

  * Name, email, phone, address fields, submission.
* **Uses:**

  * shadcn `<Form />`, `<Input />`, `<Textarea />`, `<Button />`

#### `OrderSummary`

* **Path:** `src/components/checkout/order-summary.tsx`
* **Responsibility:**

  * Read-only summary of cart items + totals during checkout.

---

### 1.8 Content & Static Page Components

#### `AboutContent`

* **Path:** `src/components/content/about-content.tsx`
* **Responsibility:**

  * Static copy & structure for About page.

#### `ContactContent`

* **Path:** `src/components/content/contact-content.tsx`
* **Responsibility:**

  * Static copy, WhatsApp link button, email, optional form.

#### `PoliciesContent`

* **Path:** `src/components/content/policies-content.tsx`
* **Responsibility:**

  * Shipping, returns, privacy, terms sections.

---

### 1.9 Feedback & System Components

#### `ToastProvider` / `AppToaster`

* **Path:** `src/components/feedback/app-toaster.tsx`
* **Responsibility:**

  * Wraps shadcn toast system.
* **Usage:**

  * Show success for “Added to cart”.
  * Errors on payment issues.

#### `LoadingSpinner` / `Spinner`

* **Path:** `src/components/feedback/spinner.tsx`
* **Responsibility:**

  * Generic loading state.

#### `SkeletonProductCard`

* **Path:** `src/components/feedback/skeleton-product-card.tsx`
* **Responsibility:**

  * Placeholder UI while list is loading.

---

### 1.10 Route-Level Pages (Composition)

Each route primarily composes the components above:

* `HomePage`:

  * `<HeroSection />`
  * `<CategoryTilesSection />`
  * `<BestsellersSection />`
  * `<BrandStorySection />`

* `JewelleryListingPage`:

  * `<PageShell />`
  * `<JewelleryFilterBar />`
  * `<ProductGrid />`

* `JewelleryDetailPage`:

  * `<PageShell />`
  * `<ProductGallery />`
  * `<ProductInfoBlock />`
  * `<ProductSpecs />`
  * `<QuantitySelector />`
  * Add to Cart button

* `CandlesListingPage`:

  * similar to jewellery listing with `<CandleFilterBar />`

* `CandleDetailPage`:

  * `<ProductGallery />`
  * `<ProductInfoBlock />`
  * `<ProductSpecs />` with candle fields

* `BagsListingPage`:

  * `<PageShell />`
  * `<BagFilterBar />` (or similar filter component)
  * `<ProductGrid />`

* `BagDetailPage`:

  * `<ProductGallery />`
  * `<ProductInfoBlock />`
  * `<ProductSpecs />` with bag fields
  * `<QuantitySelector />`
  * Add to Cart button

* `CartPage`:

  * `<CartLineItem />` list
  * `<CartSummary />`

* `CheckoutPage`:

  * `<CheckoutForm />`
  * `<OrderSummary />`

* `AboutPage`:

  * `<AboutContent />`

* `ContactPage`:

  * `<ContactContent />`

* `PoliciesPage`:

  * `<PoliciesContent />`

---

## 2. UI Guide

### 2.1 Brand & Visual Direction

* **Keywords:** warm, calm, handcrafted, minimal, honest.
* **General feel:** light backgrounds, gentle contrast, ample whitespace, soft corners.
* **Avoid:** overly bright neons, harsh shadows, heavy borders.

---

### 2.2 Color System

Suggested Tailwind-style tokens (you can refine in `tailwind.config`):

```ts
// tailwind.config.ts (theme.extend.colors)
const colors = {
  // Backgrounds
  "bg-soft": "#faf5f0",      // base page background
  "bg-elevated": "#ffffff",  // cards, surfaces

  // Text
  "text-main": "#1f2933",    // primary text (charcoal)
  "text-muted": "#6b7280",   // secondary text
  "text-soft": "#9ca3af",    // captions

  // Brand accents
  "brand": "#b9805a",        // warm clay / gold-brown
  "brand-soft": "#f3e3d6",   // light tint
  "brand-dark": "#8c5c3b",   // darker accent

  // Supporting
  "accent": "#e9b8a5",       // soft blush accent
  "accent-green": "#9bb59b", // gentle sage

  // States
  "border-subtle": "#e5e7eb",
  "error": "#b91c1c",
  "success": "#15803d"
};
```

Usage guidelines:

* **Primary button background:** `brand`
* **Primary button hover:** `brand-dark`
* **Category tiles background:** `bg-elevated` with subtle `brand-soft` highlights.
* **Cards:** `bg-elevated` with `border-subtle` and very soft shadow.

---

### 2.3 Typography System

You can start with system fonts or plug in custom webfonts later.

#### Base

* **Body font:** Sans-serif, e.g. `system-ui`, `Inter`, `SF Pro`.
* **Accent / headings (optional):** Soft serif for H1/H2, e.g. `Playfair Display` or `Cormorant`.

#### Tailwind classes proposal:

```txt
Text scale:
- Display / Logo: text-4xl md:text-5xl, tracking-tight, font-semibold
- H1 (page titles): text-3xl md:text-4xl, font-semibold
- H2 (section titles): text-2xl md:text-3xl, font-semibold
- H3 (subsection): text-xl md:text-2xl, font-medium
- Body: text-base leading-relaxed
- Small / helper text: text-sm text-text-muted
- Caption: text-xs text-text-soft uppercase tracking-wide
```

Usage:

* Page titles / hero: `text-3xl md:text-4xl font-semibold text-text-main`
* Section headers: `text-2xl font-semibold`
* Product name: `text-lg font-medium`
* Price: `text-base font-semibold text-text-main`
* Secondary info (care, notes): `text-sm text-text-muted`

---

### 2.4 Spacing & Layout

General spacing scale (Tailwind):

* XS: `0.5rem` (2)
* S: `0.75rem` (3)
* M: `1rem` (4)
* L: `1.5rem` (6)
* XL: `2rem` (8)
* 2XL: `3rem` (12)

Guidelines:

* Vertical page padding: `py-8 md:py-12`
* Section vertical gaps: `space-y-6 md:space-y-8`
* Grid gaps: `gap-4 md:gap-6`
* Card padding: `p-4 md:p-5`
* Form fields vertical spacing: `space-y-4`

---

### 2.5 Radius & Elevation

* **Border radius:**

  * Buttons & cards: `rounded-xl`
  * Inputs: `rounded-lg`
* **Shadows:**

  * Cards: `shadow-[0_8px_30px_rgba(0,0,0,0.03)]`
  * Hover: slight increase or subtle translate-y.

Avoid heavy or dark shadows; keep it soft and diffused.

---

### 2.6 Buttons & Interactive Elements

Use shadcn `<Button />` as base.

#### Primary Button

* Use for main CTAs: “Shop Jewellery”, “Add to Cart”, “Proceed to Checkout”.
* Styles (Tailwind-ish):

  * `bg-brand text-white hover:bg-brand-dark`
  * `rounded-full md:rounded-full`
  * `px-6 py-2.5 text-sm md:text-base font-medium`

#### Secondary Button

* Use for secondary actions: “Continue Shopping”, “View Details”.
* Styles:

  * `bg-transparent border border-brand-soft text-text-main hover:bg-brand-soft/40`
  * `rounded-full`

#### Ghost / Icon Button

* Use for cart icon, close buttons:

  * Minimal background, `hover:bg-brand-soft/40`

States:

* **Hover:** Slight background change, maybe `scale-[1.01]`.
* **Focus:** Clear focus ring: `ring-2 ring-brand-soft ring-offset-2`.
* **Disabled:** Reduce opacity to `opacity-50`, remove hover.

---

### 2.7 Cards & Tiles

#### ProductCard

* Layout:

  * Top: image (aspect ratio ~4:5)
  * Middle: product name + price
  * Bottom: badge or short label
* Styling:

  * `bg-elevated border border-subtle rounded-2xl p-3 md:p-4`
  * Hover:

    * `shadow-md shadow-black/5 translate-y-[-1px]`

#### CategoryTile

* Larger card with:

  * Soft background
  * Icon / image
  * Title + 1-line description
  * CTA text (“Explore Jewellery”)
* Styling:

  * `bg-brand-soft/40 border border-brand-soft rounded-2xl p-5 md:p-6`
  * On hover, slight gradient or accent badge.

---

### 2.8 Forms & Inputs (Checkout, Contact)

Use shadcn `<Form>`, `<Input>`, `<Textarea>`, `<Select>`.

* Inputs:

  * `bg-elevated border border-subtle rounded-lg px-3 py-2`
  * On focus: `border-brand ring-1 ring-brand/40`
* Labels:

  * `text-sm font-medium text-text-main`
* Helper text:

  * `text-xs text-text-soft mt-1`

Error state:

* Border: `border-error`
* Text: `text-error text-xs mt-1`

---

### 2.9 Product Detail Layout Patterns

Desktop:

* 2-column layout:

  * Left: `<ProductGallery />`
  * Right: `<ProductInfoBlock />`, `<ProductSpecs />`, `<QuantitySelector />`, CTA buttons.
* Reasonable width: `max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12`

Mobile:

* Stack:

  * Gallery at top
  * Info + actions below
* Ensure “Add to Cart” is visible without excessive scroll (sticky bottom bar is optional improvement).

---

### 2.10 Feedback & States

* **Add to Cart success:**

  * Toast at bottom-right/top-center: “Added to cart” with “View cart” link.
* **Errors:**

  * Toast or inline message near action.
* **Loading:**

  * Skeletons on product grid while loading.
  * Disable primary buttons when submitting checkout.

---

### 2.11 shadcn/ui Components to Prefer

* `Button` — CTAs
* `Card` — product & content cards
* `Input`, `Textarea`, `Label`, `Form` — forms
* `Select` / `Popover` — filters and selects
* `Sheet` — mobile menu and/or cart drawer
* `Dialog` — confirm remove from cart, optional
* `Toast` — notifications
* `Skeleton` — loading states
* `Separator` — section dividers
* `Badge` — product badges (“New”, “Bestseller”)
