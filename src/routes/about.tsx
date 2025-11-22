import { Section } from "@/components/sections/section";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero / Brand Story */}
      <Section className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-foreground">
              The Story Behind Suchaye
            </h1>
            <div className="prose prose-stone prose-lg text-muted-foreground">
              <p>
                Suchaye is a small, homegrown studio built around the idea that the
                objects we live with should feel personal. It started with a single
                worktable, a handful of tools, and the urge to make things slowly —
                by hand, in small quantities, and with attention to the tiniest
                details.
              </p>
              <p>
                Every earring, pendant and candle is designed by Vibhuti and crafted
                in small batches. No mass production, no rush. Just honest materials,
                considered forms, and scents that feel familiar in the best way.
              </p>
              <p>
                When you choose Suchaye, you're supporting a slower way of making:
                one that honours time, touch and the quiet joy of a well-made object.
              </p>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-4/5 bg-muted rounded-2xl overflow-hidden">
             {/* Placeholder for Brand Image */}
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 bg-stone-100">
                <span className="text-sm uppercase tracking-widest">Brand Image</span>
             </div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Meet Vibhuti */}
      <Section title="Meet Vibhuti" className="py-16 md:py-24 bg-stone-50/50">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
           <div className="order-2 lg:order-1 relative aspect-square bg-muted rounded-full overflow-hidden max-w-md mx-auto lg:mx-0 w-full">
             {/* Placeholder for Portrait */}
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 bg-stone-200">
                <span className="text-sm uppercase tracking-widest">Vibhuti's Portrait</span>
             </div>
          </div>
          <div className="order-1 lg:order-2 prose prose-stone prose-lg text-muted-foreground">
            <p>
              Hi, I'm Vibhuti — the hands behind Suchaye. This whole journey began
              in my home studio, where I found myself drawn to the quiet rhythm of
              making things by hand. There's something deeply satisfying about
              watching a piece of metal take shape under your fingers, or mixing
              scents until they feel just right.
            </p>
            <p>
              Before Suchaye, I was exploring different creative paths, but nothing
              quite clicked until I started working with my hands. The first pair
              of earrings I made felt different — they had a story, a small
              imperfection that made them mine. That's when I knew this was what I
              wanted to do.
            </p>
            <p>
              Today, every piece that leaves my worktable carries a little bit of
              that same intention. I design each collection thinking about the
              person who might wear it or light it — someone looking for something
              gentle, honest, and made with care. It's not about perfection; it's
              about creating objects that feel like they belong in your everyday
              life.
            </p>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Our Journey */}
      <Section title="Our Journey" className="py-16 md:py-24 max-w-4xl mx-auto text-center">
        <div className="prose prose-stone prose-lg text-muted-foreground mx-auto">
          <p>
            Suchaye started as a small experiment — a way to see if I could
            build something meaningful from scratch. The first few months were
            filled with trial and error, learning how to work with different
            materials, understanding what scents work together, and figuring out
            how to make pieces that felt both special and wearable.
          </p>
          <p>
            What began as weekend projects at my kitchen table slowly grew into
            something more. Friends started asking for custom pieces, and then
            friends of friends. Each order felt like a small vote of confidence,
            a reminder that there were people out there who valued the same
            things I did — quality over quantity, intention over speed.
          </p>
          <p>
            Today, Suchaye is still small, and I hope it stays that way. We're
            not trying to scale up or rush into mass production. Instead, we're
            focused on growing thoughtfully — making sure every piece we create
            meets our standards, and that every customer feels heard and valued.
            It's a slower path, but it's the one that feels right.
          </p>
        </div>
      </Section>

      <Separator />

      {/* Our Practices */}
      <Section title="Our Practices" subtitle="How we make things matters as much as what we make." className="py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PracticeCard 
            title="Small-Batch Crafting"
            description="Every piece is made in small batches, never more than a handful at a time. This allows us to pay attention to each item, catch imperfections early, and ensure consistency without sacrificing the handmade quality."
          />
          <PracticeCard 
            title="Honest Materials"
            description="We choose materials carefully — brass that ages beautifully, soy wax that burns cleanly, wicks that don't smoke. We're transparent about what goes into each piece because you should know what you're bringing into your home."
          />
          <PracticeCard 
            title="Slow-Made Philosophy"
            description="There's no rush here. Each piece takes the time it needs — whether that's hours spent perfecting a curve or days letting a candle cure properly. We'd rather wait a little longer and get it right."
          />
          <PracticeCard 
            title="Sustainable Choices"
            description="We're mindful of our impact. Our packaging is minimal and reusable where possible. We source materials locally when we can, and we're always looking for ways to reduce waste in our process."
          />
          <PracticeCard 
            title="Personal Touch"
            description="Every order is packed by hand, often with a small note. We remember repeat customers, and we're always happy to answer questions. This isn't just a business — it's a relationship."
          />
        </div>
      </Section>
    </div>
  );
}

function PracticeCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="border-none shadow-none bg-stone-50/50 hover:bg-stone-100/50 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-stone-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
