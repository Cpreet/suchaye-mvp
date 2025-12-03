// Dummy product data for Suchaye MVP
import type { Region } from '@/lib/types';
import jew001 from '@/assets/images/products/jew-001.png';
import jew002 from '@/assets/images/products/jew-002.png';
import jew003 from '@/assets/images/products/jew-003.png';
import jew004 from '@/assets/images/products/jew-004.png';
import jew005 from '@/assets/images/products/jew-005.png';
import jew006 from '@/assets/images/products/jew-006.png';
import jew007 from '@/assets/images/products/jew-007.png';
import jew008 from '@/assets/images/products/jew-008.png';
import jew009 from '@/assets/images/products/jew-009.png';
import jew010 from '@/assets/images/products/jew-010.png';
import jew011 from '@/assets/images/products/jew-011.png';
import jew012 from '@/assets/images/products/jew-012.png';

import can001 from '@/assets/images/products/can-001.png';
import can002 from '@/assets/images/products/can-002.png';
import can003 from '@/assets/images/products/can-003.png';
import can004 from '@/assets/images/products/can-004.png';
import can005 from '@/assets/images/products/can-005.png';
import can006 from '@/assets/images/products/can-006.png';
import can007 from '@/assets/images/products/can-007.png';
import can008 from '@/assets/images/products/can-008.png';
import can009 from '@/assets/images/products/can-009.png';
import can010 from '@/assets/images/products/can-010.png';

import bag001 from '@/assets/images/products/bag-001.png';
import bag002 from '@/assets/images/products/bag-002.png';
import bag003 from '@/assets/images/products/bag-003.png';
import bag004 from '@/assets/images/products/bag-004.png';

// Variety images for jewellery
import jew001Variety from '@/assets/images/products/jewellery/jew-001-variety.png';
import jew002Variety from '@/assets/images/products/jewellery/jew-002-variety.png';
import jew003Variety from '@/assets/images/products/jewellery/jew-003-variety.png';
import jew004Variety from '@/assets/images/products/jewellery/jew-004-variety.png';
import jew005Variety from '@/assets/images/products/jewellery/jew-005-variety.png';
import jew006Variety from '@/assets/images/products/jewellery/jew-006-variety.png';
import jew007Variety from '@/assets/images/products/jewellery/jew-007-variety.png';
import jew008Variety from '@/assets/images/products/jewellery/jew-008-variety.png';
import jew009Variety from '@/assets/images/products/jewellery/jew-009-variety.png';
import jew010Variety from '@/assets/images/products/jewellery/jew-010-variety.png';
import jew011Variety from '@/assets/images/products/jewellery/jew-011-variety.png';
import jew012Variety from '@/assets/images/products/jewellery/jew-012-variety.png';

// Variety images for candles
import can001Variety from '@/assets/images/products/candles/can-001-variety.png';
import can002Variety from '@/assets/images/products/candles/can-002-variety.png';
import can003Variety from '@/assets/images/products/candles/can-003-variety.png';
import can004Variety from '@/assets/images/products/candles/can-004-variety.png';
import can005Variety from '@/assets/images/products/candles/can-005-variety.png';
import can006Variety from '@/assets/images/products/candles/can-006-variety.png';
import can007Variety from '@/assets/images/products/candles/can-007-variety.png';
import can008Variety from '@/assets/images/products/candles/can-008-variety.png';
import can009Variety from '@/assets/images/products/candles/can-009-variety.png';
import can010Variety from '@/assets/images/products/candles/can-010-variety.png';

// Variety images for bags
import bag001Variety from '@/assets/images/products/bags/bag-001-variety.png';
import bag002Variety from '@/assets/images/products/bags/bag-002-variety.png';
import bag003Variety from '@/assets/images/products/bags/bag-003-variety.png';
import bag004Variety from '@/assets/images/products/bags/bag-004-variety.png';

export type ProductCategory = "jewellery" | "candle" | "bag";

export type JewelleryType = "earrings" | "necklaces" | "bracelets" | "rings";

export type ScentFamily = "floral" | "fresh" | "woody" | "sweet";

export type CandleSize = "S" | "M" | "L";

export type BagType = "tote" | "crossbody" | "clutch" | "backpack";

export type BagMaterial = "cotton" | "linen" | "leather" | "canvas";

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
  colors?: string[]; // Added for variant indicator
  regions?: Region[];
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

export interface BagProduct extends BaseProduct {
  category: "bag";
  type: BagType;
  material: BagMaterial;
  dimensions: string; // e.g., "35cm x 40cm x 15cm"
  closure: string; // e.g., "Zipper", "Magnetic snap", "Drawstring"
  strapLength?: string; // e.g., "Adjustable 50-60cm"
  lining: string; // e.g., "Cotton lining"
  careInstructions: string;
}

export type Product = JewelleryProduct | CandleProduct | BagProduct;

// Dummy jewellery products
export const jewelleryProducts: JewelleryProduct[] = [
  {
    id: "jew-001",
    name: "Gold Brass Hoop Earrings",
    slug: "gold-brass-hoop-earrings",
    price: 1299,
    images: [jew001, jew001Variety],
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
    colors: ["Gold", "Silver", "Rose Gold"],
  },
  {
    id: "jew-002",
    name: "Delicate Pendant Necklace",
    slug: "delicate-pendant-necklace",
    price: 1899,
    images: [jew002, jew002Variety],
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
    regions: ["america"],
  },
  {
    id: "jew-003",
    name: "Stackable Minimal Rings",
    slug: "stackable-minimal-rings",
    price: 899,
    images: [jew003, jew003Variety],
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
    colors: ["Gold", "Silver"],
  },
  {
    id: "jew-004",
    name: "Textured Bangle Bracelet",
    slug: "textured-bangle-bracelet",
    price: 1499,
    images: [jew004, jew004Variety],
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
    images: [jew005, jew005Variety],
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
    images: [jew006, jew006Variety],
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
    images: [jew007, jew007Variety],
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
    images: [jew008, jew008Variety],
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
    images: [jew009, jew009Variety],
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
    images: [jew010, jew010Variety],
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
    images: [jew011, jew011Variety],
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
    images: [jew012, jew012Variety],
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
    inStock: false,
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
    images: [can001, can001Variety],
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
    regions: ["europe"],
  },
  {
    id: "can-002",
    name: "Vanilla & Sandalwood Candle",
    slug: "vanilla-sandalwood-candle",
    price: 999,
    images: [can002, can002Variety],
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
    images: [can003, can003Variety],
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
    images: [can004, can004Variety],
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
    images: [can005, can005Variety],
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
    images: [can006, can006Variety],
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
    images: [can007, can007Variety],
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
    images: [can008, can008Variety],
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
    images: [can009, can009Variety],
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
    images: [can010, can010Variety],
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

// Dummy bag products
export const bagProducts: BagProduct[] = [
  {
    id: "bag-001",
    name: "Natural Linen Tote Bag",
    slug: "natural-linen-tote-bag",
    price: 2499,
    images: [bag001, bag001Variety],
    description:
      "A roomy tote bag crafted in natural linen with leather straps. Designed to be both practical and beautiful, it's the kind of bag that becomes a daily companion — sturdy enough for your essentials, light enough to carry all day. Perfect for weekend markets, work commutes, or day trips.",
    category: "bag",
    type: "tote",
    material: "linen",
    dimensions: "35cm x 40cm x 15cm",
    closure: "Open top with magnetic snap",
    strapLength: "Adjustable 50-60cm",
    lining: "Cotton lining",
    careInstructions:
      "Spot clean with a damp cloth, air dry. For deeper cleaning, hand wash gently in cold water and lay flat to dry. Avoid machine washing and direct heat.",
    inStock: true,
    dispatchDays: 5,
    isBestseller: true,
    colors: ["Natural", "Grey", "Black"],
    regions: ["gulf"],
  },
  {
    id: "bag-002",
    name: "Canvas Crossbody Bag",
    slug: "canvas-crossbody-bag",
    price: 1899,
    images: [bag002, bag002Variety],
    description:
      "A compact crossbody bag in durable canvas with a soft leather strap. Just the right size for your essentials — phone, wallet, keys, and a small notebook. The adjustable strap makes it comfortable to wear, and the zippered closure keeps everything secure.",
    category: "bag",
    type: "crossbody",
    material: "canvas",
    dimensions: "20cm x 15cm x 5cm",
    closure: "Zipper",
    strapLength: "Adjustable 90-110cm",
    lining: "Cotton lining",
    careInstructions:
      "Spot clean with a damp cloth, air dry. For deeper cleaning, hand wash gently in cold water and lay flat to dry. Avoid machine washing and direct heat.",
    inStock: true,
    dispatchDays: 5,
    isNew: true,
    colors: ["Olive", "Beige", "Navy"],
  },
  {
    id: "bag-003",
    name: "Cotton Clutch Bag",
    slug: "cotton-clutch-bag",
    price: 1299,
    images: [bag003, bag003Variety],
    description:
      "A simple, elegant clutch bag in soft cotton. Perfect for evenings out or when you want to travel light. The magnetic snap closure keeps everything secure, and the compact size fits comfortably in your hand or under your arm.",
    category: "bag",
    type: "clutch",
    material: "cotton",
    dimensions: "25cm x 18cm x 3cm",
    closure: "Magnetic snap",
    lining: "Cotton lining",
    careInstructions:
      "Spot clean with a damp cloth, air dry. For deeper cleaning, hand wash gently in cold water and lay flat to dry. Avoid machine washing and direct heat.",
    inStock: true,
    dispatchDays: 5,
  },
  {
    id: "bag-004",
    name: "Leather Backpack",
    slug: "leather-backpack",
    price: 3499,
    images: [bag004, bag004Variety],
    description:
      "A beautifully crafted leather backpack that combines style with functionality. Perfect for daily commutes, weekend trips, or when you need to carry a bit more. The adjustable straps ensure a comfortable fit, and the multiple compartments help keep everything organized.",
    category: "bag",
    type: "backpack",
    material: "leather",
    dimensions: "30cm x 40cm x 15cm",
    closure: "Zipper",
    strapLength: "Adjustable 50-70cm",
    lining: "Cotton lining",
    careInstructions:
      "Clean with a soft, damp cloth. Apply leather conditioner occasionally to maintain suppleness. Avoid excessive water and direct sunlight. Store in a cool, dry place when not in use.",
    inStock: true,
    dispatchDays: 5,
    isBestseller: true,
    colors: ["Tan", "Black"],
  },
];

// Combined products array
export const allProducts: Product[] = [
  ...jewelleryProducts,
  ...candleProducts,
  ...bagProducts,
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: ProductCategory,
  region?: Region
): Product[] {
  const products = allProducts.filter((p) => p.category === category);
  if (region) {
    return products.filter((p) => !p.regions || p.regions.includes(region));
  }
  return products;
}

export function getBestsellers(region?: Region): Product[] {
  const products = allProducts.filter((p) => p.isBestseller);
  if (region) {
    return products.filter((p) => !p.regions || p.regions.includes(region));
  }
  return products;
}

export function getNewProducts(region?: Region): Product[] {
  const products = allProducts.filter((p) => p.isNew);
  if (region) {
    return products.filter((p) => !p.regions || p.regions.includes(region));
  }
  return products;
}
