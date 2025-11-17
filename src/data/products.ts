// Dummy product data for Suchaye MVP

export type ProductCategory = "jewellery" | "candle";

export type JewelleryType = "earrings" | "necklaces" | "bracelets" | "rings";

export type ScentFamily = "floral" | "fresh" | "woody" | "sweet";

export type CandleSize = "S" | "M" | "L";

export interface BaseProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
  description: string;
  category: ProductCategory;
  inStock: boolean;
  dispatchDays: number;
  isBestseller?: boolean;
  isNew?: boolean;
}

export interface JewelleryProduct extends BaseProduct {
  category: "jewellery";
  type: JewelleryType;
  material: string;
  finish: string;
  closure?: string;
  weight?: string;
  careInstructions: string;
}

export interface CandleProduct extends BaseProduct {
  category: "candle";
  scentFamily: ScentFamily;
  size: CandleSize;
  scentNotes: {
    top: string;
    heart: string;
    base: string;
  };
  waxType: string;
  wickType: string;
  netWeight: string;
  burnTime: string;
  safetyInstructions: string;
}

export type Product = JewelleryProduct | CandleProduct;

// Dummy jewellery products
export const jewelleryProducts: JewelleryProduct[] = [
  {
    id: "jew-001",
    name: "Gold Brass Hoop Earrings",
    slug: "gold-brass-hoop-earrings",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1603561596112-0d44b4b8e0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1535632066927-ab6c9ae6f3c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Softly curved hoops crafted in brass with a warm gold finish. Light on the ears and gentle on the skin, they're designed to be the kind of piece you forget you're wearing — until someone compliments them. Pair them with a simple kurta, linen shirts, or your go-to black dress for an easy, everyday look.",
    category: "jewellery",
    type: "earrings",
    material: "Brass",
    finish: "Warm gold",
    closure: "Hook closure",
    weight: "8g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
    isBestseller: true,
  },
  {
    id: "jew-002",
    name: "Delicate Pendant Necklace",
    slug: "delicate-pendant-necklace",
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A minimal pendant necklace that sits perfectly at the collarbone. Crafted in brass with a matte finish, this piece adds a quiet sparkle to your day. Perfect for layering or wearing alone.",
    category: "jewellery",
    type: "necklaces",
    material: "Brass",
    finish: "Matte",
    closure: "Lobster clasp",
    weight: "12g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
    isNew: true,
  },
  {
    id: "jew-003",
    name: "Stackable Minimal Rings",
    slug: "stackable-minimal-rings",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A set of three thin, stackable rings in varying widths. Made in brass with a soft gold finish, these rings are designed to be mixed and matched or worn together for a layered look.",
    category: "jewellery",
    type: "rings",
    material: "Brass",
    finish: "Soft gold",
    weight: "6g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "jew-004",
    name: "Textured Bangle Bracelet",
    slug: "textured-bangle-bracelet",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A single bangle with subtle texture that catches the light beautifully. Crafted in brass, this piece is lightweight and comfortable for all-day wear.",
    category: "jewellery",
    type: "bracelets",
    material: "Brass",
    finish: "Textured gold",
    weight: "15g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
    isBestseller: true,
  },
  {
    id: "jew-005",
    name: "Drop Earrings with Stone",
    slug: "drop-earrings-with-stone",
    price: 1699,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab6c9ae6f3c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1603561596112-0d44b4b8e0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Elegant drop earrings featuring a small stone detail. The perfect balance of minimal and statement, these earrings work for both everyday and special occasions.",
    category: "jewellery",
    type: "earrings",
    material: "Brass with stone",
    finish: "Polished gold",
    closure: "Hook closure",
    weight: "10g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "jew-006",
    name: "Chain Link Necklace",
    slug: "chain-link-necklace",
    price: 1599,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A delicate chain necklace with subtle links that create movement and interest. Perfect for layering or wearing as a standalone piece.",
    category: "jewellery",
    type: "necklaces",
    material: "Brass",
    finish: "Gold",
    closure: "Lobster clasp",
    weight: "11g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "jew-007",
    name: "Minimalist Stud Earrings",
    slug: "minimalist-stud-earrings",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1603561596112-0d44b4b8e0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Tiny, perfect studs that add just a hint of shine. These minimal studs are perfect for everyday wear and work beautifully for sensitive ears. Simple, elegant, and always appropriate.",
    category: "jewellery",
    type: "earrings",
    material: "Brass",
    finish: "Polished gold",
    closure: "Push-back closure",
    weight: "4g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "jew-008",
    name: "Layered Chain Necklace Set",
    slug: "layered-chain-necklace-set",
    price: 2199,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A set of three delicate chains in varying lengths, designed to be worn together for a layered look. Each chain has a different texture, creating depth and movement. Perfect for adding dimension to simple outfits.",
    category: "jewellery",
    type: "necklaces",
    material: "Brass",
    finish: "Gold",
    closure: "Lobster clasp",
    weight: "18g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
    isBestseller: true,
  },
  {
    id: "jew-009",
    name: "Geometric Statement Ring",
    slug: "geometric-statement-ring",
    price: 1199,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A bold geometric ring with clean lines and modern appeal. This statement piece works beautifully on its own or paired with simpler bands. The angular design catches light beautifully throughout the day.",
    category: "jewellery",
    type: "rings",
    material: "Brass",
    finish: "Matte gold",
    weight: "8g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
    isNew: true,
  },
  {
    id: "jew-010",
    name: "Delicate Anklet",
    slug: "delicate-anklet",
    price: 699,
    images: [
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A thin, delicate anklet that moves gently with each step. Perfect for summer days and adding a subtle touch of elegance. Adjustable length ensures a perfect fit.",
    category: "jewellery",
    type: "bracelets",
    material: "Brass",
    finish: "Gold",
    weight: "5g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "jew-011",
    name: "Pearl Accent Drop Earrings",
    slug: "pearl-accent-drop-earrings",
    price: 1999,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab6c9ae6f3c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1603561596112-0d44b4b8e0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Elegant drop earrings featuring a small pearl detail suspended from a delicate chain. These earrings bring a touch of classic elegance to any outfit, perfect for both day and evening wear.",
    category: "jewellery",
    type: "earrings",
    material: "Brass with pearl",
    finish: "Gold",
    closure: "Hook closure",
    weight: "12g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "jew-012",
    name: "Charm Bracelet",
    slug: "charm-bracelet",
    price: 1799,
    images: [
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A dainty chain bracelet with small, meaningful charms. Each charm is carefully crafted and can be personalized. This piece tells a story and grows with you over time.",
    category: "jewellery",
    type: "bracelets",
    material: "Brass",
    finish: "Gold",
    closure: "Lobster clasp",
    weight: "10g",
    careInstructions:
      "Store in a dry pouch, avoid water and perfumes directly on the metal, and wipe gently with a soft cloth after wear.",
    inStock: true,
    dispatchDays: 3,
  },
];

// Dummy candle products
export const candleProducts: CandleProduct[] = [
  {
    id: "can-001",
    name: "Lavender Fields Soy Candle",
    slug: "lavender-fields-soy-candle",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
    ],
    description:
      "A hand-poured soy wax candle that smells like fresh sheets and a quiet Sunday afternoon. Light it when you want the room to feel softer, calmer, and just a little bit slower.",
    category: "candle",
    scentFamily: "floral",
    size: "M",
    scentNotes: {
      top: "Lavender",
      heart: "Lavender, Chamomile",
      base: "Vanilla, Musk",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
    isBestseller: true,
  },
  {
    id: "can-002",
    name: "Vanilla & Sandalwood Candle",
    slug: "vanilla-sandalwood-candle",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Warm and comforting, this candle combines the sweetness of vanilla with the earthy depth of sandalwood. Perfect for creating a cozy atmosphere in your reading corner or bedroom.",
    category: "candle",
    scentFamily: "woody",
    size: "M",
    scentNotes: {
      top: "Vanilla",
      heart: "Sandalwood, Cream",
      base: "Amber, Musk",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
    isBestseller: true,
  },
  {
    id: "can-003",
    name: "Fresh Citrus & Mint Candle",
    slug: "fresh-citrus-mint-candle",
    price: 849,
    images: [
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Energizing and fresh, this candle brings the brightness of citrus and the coolness of mint together. Ideal for mornings or when you need a little pick-me-up.",
    category: "candle",
    scentFamily: "fresh",
    size: "M",
    scentNotes: {
      top: "Lemon, Orange",
      heart: "Mint, Eucalyptus",
      base: "Green notes",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
    isNew: true,
  },
  {
    id: "can-004",
    name: "Rose & Jasmine Candle",
    slug: "rose-jasmine-candle",
    price: 949,
    images: [
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A romantic blend of rose and jasmine that fills the room with a gentle, floral fragrance. Perfect for evening rituals and creating a sense of calm.",
    category: "candle",
    scentFamily: "floral",
    size: "M",
    scentNotes: {
      top: "Rose petals",
      heart: "Jasmine, Geranium",
      base: "White musk, Vanilla",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "can-005",
    name: "Honey & Cinnamon Candle",
    slug: "honey-cinnamon-candle",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Sweet and warm, this candle evokes the comfort of home baking. The combination of honey and cinnamon creates an inviting atmosphere perfect for autumn evenings.",
    category: "candle",
    scentFamily: "sweet",
    size: "M",
    scentNotes: {
      top: "Cinnamon",
      heart: "Honey, Brown sugar",
      base: "Vanilla, Spice",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "can-006",
    name: "Eucalyptus & Sage Candle",
    slug: "eucalyptus-sage-candle",
    price: 879,
    images: [
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Clean and grounding, this candle combines eucalyptus and sage for a refreshing, spa-like atmosphere. Ideal for meditation spaces or when you need to clear the air.",
    category: "candle",
    scentFamily: "fresh",
    size: "M",
    scentNotes: {
      top: "Eucalyptus",
      heart: "Sage, Mint",
      base: "Woody notes, Earth",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "can-007",
    name: "Bergamot & Black Tea Candle",
    slug: "bergamot-black-tea-candle",
    price: 929,
    images: [
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Inspired by afternoon tea, this candle combines the bright citrus of bergamot with the comforting depth of black tea. Perfect for creating a calm, focused atmosphere for reading or working.",
    category: "candle",
    scentFamily: "fresh",
    size: "M",
    scentNotes: {
      top: "Bergamot, Lemon",
      heart: "Black tea, Jasmine",
      base: "Musk, Vanilla",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "can-008",
    name: "Pine & Cedarwood Candle",
    slug: "pine-cedarwood-candle",
    price: 949,
    images: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "A grounding, earthy scent that brings the forest indoors. The combination of pine and cedarwood creates a sense of calm and connection to nature. Ideal for meditation or creating a peaceful evening atmosphere.",
    category: "candle",
    scentFamily: "woody",
    size: "M",
    scentNotes: {
      top: "Pine needles",
      heart: "Cedarwood, Cypress",
      base: "Amber, Earth",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
  },
  {
    id: "can-009",
    name: "Coconut & Lime Candle",
    slug: "coconut-lime-candle",
    price: 879,
    images: [
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Tropical and refreshing, this candle combines creamy coconut with zesty lime. It's like a mini vacation in a jar, perfect for brightening up any space and bringing a sense of summer all year round.",
    category: "candle",
    scentFamily: "fresh",
    size: "M",
    scentNotes: {
      top: "Lime, Grapefruit",
      heart: "Coconut, White flowers",
      base: "Vanilla, Musk",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
    isNew: true,
  },
  {
    id: "can-010",
    name: "Amber & Oud Candle",
    slug: "amber-oud-candle",
    price: 1099,
    images: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      "https://images.unsplash.com/photo-1602874805491-50cf59591549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    ],
    description:
      "Luxurious and sophisticated, this candle blends warm amber with the rich, complex notes of oud. A scent that lingers beautifully and creates an atmosphere of elegance and comfort. Perfect for evening use.",
    category: "candle",
    scentFamily: "woody",
    size: "M",
    scentNotes: {
      top: "Bergamot, Saffron",
      heart: "Oud, Rose",
      base: "Amber, Sandalwood, Musk",
    },
    waxType: "Soy wax",
    wickType: "Cotton wick",
    netWeight: "200g",
    burnTime: "30-35 hours",
    safetyInstructions:
      "Let the first burn create a full melt pool edge-to-edge. Trim the wick to ~0.5 cm before each burn. Do not leave a burning candle unattended or near drafts/curtains. Keep away from children and pets.",
    inStock: true,
    dispatchDays: 3,
    isBestseller: true,
  },
];

// Combined products array
export const allProducts: Product[] = [
  ...jewelleryProducts,
  ...candleProducts,
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: ProductCategory
): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getBestsellers(): Product[] {
  return allProducts.filter((p) => p.isBestseller);
}

export function getNewProducts(): Product[] {
  return allProducts.filter((p) => p.isNew);
}

