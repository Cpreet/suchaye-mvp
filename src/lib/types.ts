// Type definitions for Suchaye MVP

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export type Region = "india" | "gulf" | "america" | "europe";
export type Currency = "INR" | "AED" | "USD" | "EUR";
export type Language = "en" | "hi" | "bn" | "te" | "ta" | "ar" | "fr" | "de";

export const REGION_CURRENCY_MAP: Record<Region, Currency> = {
  india: "INR",
  gulf: "AED",
  america: "USD",
  europe: "EUR",
};

export const CURRENCY_RATES: Record<Currency, number> = {
  INR: 1,
  AED: 0.043, // 1 INR = 0.043 AED (approx)
  USD: 0.012, // 1 INR = 0.012 USD
  EUR: 0.011, // 1 INR = 0.011 EUR
};
