// Cart management utilities

import type { Cart } from "./types";
import type { Product } from "@/data/products";

const CART_STORAGE_KEY = "suchaye_cart";

export function getCart(): Cart {
  if (typeof window === "undefined") {
    return { items: [] };
  }

  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (!stored) {
    return { items: [] };
  }

  try {
    return JSON.parse(stored);
  } catch {
    return { items: [] };
  }
}

export function saveCart(cart: Cart): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(productId: string, quantity: number = 1): void {
  const cart = getCart();
  const existingItem = cart.items.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  saveCart(cart);
}

export function removeFromCart(productId: string): void {
  const cart = getCart();
  cart.items = cart.items.filter((item) => item.productId !== productId);
  saveCart(cart);
}

export function updateCartItemQuantity(
  productId: string,
  quantity: number
): void {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const cart = getCart();
  const item = cart.items.find((item) => item.productId === productId);

  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

export function getCartItemCount(): number {
  const cart = getCart();
  return cart.items.reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal(products: Product[]): number {
  const cart = getCart();
  return cart.items.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      return total + product.price * item.quantity;
    }
    return total;
  }, 0);
}

export function clearCart(): void {
  saveCart({ items: [] });
}

