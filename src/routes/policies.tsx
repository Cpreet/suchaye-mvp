import { Section } from "@/components/sections/section";
import { Separator } from "@/components/ui/separator";

export function PoliciesPage() {
  return (
    <Section title="Shipping, Returns & Policies" className="max-w-3xl">
      <div className="space-y-8">
        {/* Shipping Policy */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              We currently ship within India. Orders are typically dispatched
              within <strong>3–5 working days</strong> of confirmation. Once your
              order is shipped, you'll receive a tracking link via email or
              WhatsApp.
            </p>
            <p>
              Delivery timelines may vary based on your location and courier
              service.
            </p>
          </div>
        </div>

        <Separator />

        {/* Returns & Refunds */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Returns & Refunds</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              Because our pieces are handmade in small batches, we currently
              offer returns or exchanges only in cases of damage or manufacturing
              defects reported within <strong>48 hours</strong> of delivery.
            </p>
            <p>
              If your order arrives damaged, please email us with clear photos
              of the product and packaging, and we'll help you with the next
              steps.
            </p>
          </div>
        </div>

        <Separator />

        {/* Terms & Conditions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              By placing an order on Suchaye, you agree to provide accurate
              contact and delivery information, and to use our products as
              intended and described. Prices, policies, and product availability
              are subject to change without prior notice.
            </p>
          </div>
        </div>

        <Separator />

        {/* Privacy Policy */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              We only collect the information needed to process your order and
              communicate with you (such as your name, contact details, and
              address). We do not sell or share your personal information with
              third parties for marketing purposes.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

