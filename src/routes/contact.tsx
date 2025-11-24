import { Section } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export function ContactPage() {
  const whatsappNumber = "+919876543210"; // Replace with actual number
  const email = "hello@suchaye.in"; // Replace with actual email
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const userEmail = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = `Contact from ${name} via Suchaye Website`;
    const body = `Name: ${name}\nEmail: ${userEmail}\n\nMessage:\n${message}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section title="We'd Love to Hear From You" className="max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-serif">Get in touch</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Have a question about sizing, scents, or an existing order? Need help
              choosing a gift? Reach out — we're happy to help.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a
                  href={`mailto:${email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">WhatsApp</h4>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors block mb-2"
                >
                  Chat with us on WhatsApp
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full font-medium border-2 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  Open Chat
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Studio</h4>
                <p className="text-muted-foreground">
                  Handcrafted in India
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              We usually respond within 24–48 hours on working days.
            </p>
          </div>
        </div>

        <Card className="h-fit">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-serif text-xl mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required className="bg-muted/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required className="bg-muted/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  className="min-h-[150px] bg-muted/30"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group bg-[#4A3B32] text-white hover:bg-[#4A3B32]/90 border border-[#4A3B32]"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

