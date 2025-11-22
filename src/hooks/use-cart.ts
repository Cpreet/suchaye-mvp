import { useState, useEffect } from "react";
import { getCart } from "@/lib/cart";
import type { Cart } from "@/lib/types";

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [] });

  useEffect(() => {
    // Initial load
    setCart(getCart());

    // Listen for custom event
    const handleCartUpdate = () => {
      setCart(getCart());
    };

    window.addEventListener("cart-updated", handleCartUpdate);
    // Also listen to storage events for cross-tab sync (optional but good)
    window.addEventListener("storage", handleCartUpdate);

    return () => {
      window.removeEventListener("cart-updated", handleCartUpdate);
      window.removeEventListener("storage", handleCartUpdate);
    };
  }, []);

  return cart;
}

