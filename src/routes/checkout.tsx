import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCart, getCartTotal, clearCart } from "@/lib/cart";
import { allProducts } from "@/data/products";
import type { CheckoutFormData } from "@/lib/types";

export function CheckoutPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [cart, setCart] = useState(getCart());
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const currentCart = getCart();
    if (currentCart.items.length === 0) {
      navigate("/cart");
      return;
    }
    setCart(currentCart);
  }, [navigate]);

  const cartItems = cart.items.map((item) => {
    const product = allProducts.find((p) => p.id === item.productId);
    return { ...item, product };
  }).filter((item) => item.product);

  const subtotal = getCartTotal(allProducts);
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with Razorpay
    // For now, just simulate success
    setTimeout(() => {
      clearCart();
      window.dispatchEvent(new Event("cartUpdated"));
      navigate("/checkout/success", { state: { orderData: formData } });
    }, 1000);
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <Section title="Checkout" className="max-w-4xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Customer Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 pt-0">
                <div>
                  <Label htmlFor="name" className="text-sm">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 text-sm md:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 text-sm md:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 text-sm md:text-base"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 pt-0">
                <div>
                  <Label htmlFor="address" className="text-sm">Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 text-sm md:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <Label htmlFor="city" className="text-sm">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-sm">State *</Label>
                    <Input
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-1 text-sm md:text-base"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="pincode" className="text-sm">Pincode *</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="mt-1 text-sm md:text-base"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 pt-0">
                <div className="space-y-2 text-xs md:text-sm">
                  {cartItems.map((item) => {
                    const product = item.product!;
                    return (
                      <div key={product.id} className="flex justify-between gap-2">
                        <span className="text-muted-foreground line-clamp-1">
                          {product.name} × {item.quantity}
                        </span>
                        <span className="shrink-0">
                          {formatPrice(product.price * item.quantity)}
                        </span>
                      </div>
                    );
                  })}
                </div>
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
                <Button
                  type="submit"
                  className="w-full text-sm md:text-base"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
                <Link to="/cart" className="block">
                  <Button variant="outline" className="w-full text-sm md:text-base">
                    Back to Cart
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Section>
  );
}

