import { Section } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export function ContactPage() {
  const whatsappNumber = "+919876543210"; // Replace with actual number
  const email = "hello@suchaye.in"; // Replace with actual email
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  return (
    <Section title="We'd Love to Hear From You" className="max-w-2xl">
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Have a question about sizing, scents, or an existing order? Need help
          choosing a gift? Reach out — we're happy to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-primary hover:underline block"
              >
                {email}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">WhatsApp</h3>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full">
                  Chat with us on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          We usually respond within 24–48 hours on working days.
        </p>
      </div>
    </Section>
  );
}

