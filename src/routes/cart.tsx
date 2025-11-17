import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Section } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { QuantitySelector } from "@/components/cart/quantity-selector";
import { getCart, updateCartItemQuantity, removeFromCart, getCartTotal } from "@/lib/cart";
import { allProducts } from "@/data/products";
import { Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CartPage() {
  const [cart, setCart] = useState(getCart());

  useEffect(() => {
    const currentCart = getCart();
    setCart(currentCart);
  }, []);

  const handleQuantityChange = (productId: string, quantity: number) => {
    updateCartItemQuantity(productId, quantity);
    const updatedCart = getCart();
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    const updatedCart = getCart();
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const cartItems = cart.items.map((item) => {
    const product = allProducts.find((p) => p.id === item.productId);
    return { ...item, product };
  }).filter((item) => item.product);

  const subtotal = getCartTotal(allProducts);
  const shipping = subtotal > 0 ? 100 : 0; // Example shipping
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  if (cartItems.length === 0) {
    return (
      <Section>
        <div className="text-center py-8 md:py-12 space-y-3 md:space-y-4">
          <h1 className="text-xl md:text-2xl font-semibold">Your cart is empty</h1>
          <p className="text-sm md:text-base text-muted-foreground px-4">
            Add some beautiful pieces to your cart to get started.
          </p>
          <Link to="/jewellery">
            <Button className="text-sm md:text-base">Shop Jewellery</Button>
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section title="Your Cart" className="max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-3 md:space-y-4">
          {cartItems.map((item) => {
            const product = item.product!;
            const cartItem = cart.items.find((i) => i.productId === product.id);
            return (
              <Card key={product.id}>
                <CardContent className="p-3 md:p-4">
                  <div className="flex gap-3 md:gap-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                      <img
                        src={product.images[0] || "/placeholder.jpg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/150?text=Suchaye";
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 md:gap-4">
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/${product.category}/${product.slug}`}
                            className="text-sm md:text-base font-medium hover:underline line-clamp-2"
                          >
                            {product.name}
                          </Link>
                          <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemove(product.id)}
                          className="shrink-0 h-8 w-8 md:h-10 md:w-10"
                        >
                          <Trash2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-3 md:mt-4">
                        <QuantitySelector
                          value={cartItem?.quantity || 1}
                          onChange={(qty) =>
                            handleQuantityChange(product.id, qty)
                          }
                        />
                        <p className="text-sm md:text-base font-semibold">
                          {formatPrice(product.price * (cartItem?.quantity || 1))}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
              <h2 className="text-base md:text-lg font-semibold">Order Summary</h2>
              <Separator />
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping > 0 ? formatPrice(shipping) : "Free"}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm md:text-base font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <Link to="/checkout" className="block w-full">
                <Button className="w-full text-sm md:text-base" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
              <Link to="/jewellery" className="block">
                <Button variant="outline" className="w-full text-sm md:text-base">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

