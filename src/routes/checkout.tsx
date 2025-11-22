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
  const tax = Math.round(subtotal * 0.18);
  const discount = 0;
  const total = subtotal + shipping + tax - discount;

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
                <div className="space-y-3 md:space-y-4">
                  {cartItems.map((item) => {
                    const product = item.product!;
                    return (
                      <div key={product.id} className="flex gap-3 md:gap-4">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border bg-muted">
                           <img
                            src={product.images[0] || "/placeholder.jpg"}
                            alt={product.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://via.placeholder.com/150?text=Suchaye";
                            }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                          <span className="text-sm font-medium line-clamp-2">
                            {product.name}
                          </span>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Qty: {item.quantity}</span>
                            <span>{formatPrice(product.price * item.quantity)}</span>
                          </div>
                        </div>
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
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-sm md:text-base font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-muted-foreground text-center">Secure Payments via</p>
                  <div className="flex justify-center gap-3 items-center grayscale opacity-80">
                    {/* Visa Logo */}
                    <svg className="h-6" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.333 2.933h-5.107c-1.08 0-1.933.773-2.333 1.787L7.8 18.227l-3.173-7.48a1.68 1.68 0 0 0-.107-.293L3.28 4.467C2.947 3.333 2.2 2.933 0 2.933v1.36h1.507c1.28 0 1.56.507 1.747 1.347L7.693 27.2h5.36l8.2-19.827h-1.92v-4.44zM28.84 12.027a10.933 10.933 0 0 0-4.133-.773c-4.547 0-7.747 2.413-7.773 5.867-.027 2.547 2.28 3.973 4.013 4.813 1.787.867 2.387 1.427 2.387 2.213 0 1.2-1.44 1.747-2.773 1.747-1.867 0-2.853-.28-4.373-.96l-.613-.28-.653 4.04c1.093.507 3.107.947 5.2.96 4.907 0 8.08-2.413 8.12-6.16.027-2.053-1.227-3.613-3.907-4.893-1.627-.813-2.627-1.36-2.627-2.2 0-.76.84-1.533 2.68-1.533 1.507 0 2.6.253 3.44.627l.413.2 1.6-3.667zM37.107 2.933h-4.147c-1.28 0-2.253.373-2.8 1.68l-8.92 21.213 1.36 1.373h5.6l1.067-2.96h6.853l.653 2.96h4.72L37.107 2.933zm-3.067 14.72l2.16-10.307 3.68 10.307h-5.84z" fill="#1434CB"/>
                    </svg>
                    
                    {/* Mastercard Logo */}
                    <svg className="h-8" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="50" height="32" rx="2" fill="white"/>
                      <circle cx="17" cy="16" r="10" fill="#EB001B" fillOpacity="0.9"/>
                      <circle cx="33" cy="16" r="10" fill="#F79E1B" fillOpacity="0.9"/>
                      <path d="M25 10.5A10 10 0 0 0 25 21.5A10 10 0 0 0 25 10.5Z" fill="#FF5F00"/>
                    </svg>
                    
                    {/* UPI Logo (Simplified Text/Icon) */}
                    <div className="flex items-center justify-center h-6 px-1 border border-slate-300 rounded bg-white">
                       <span className="text-[10px] font-bold text-slate-600">UPI</span>
                    </div>
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

