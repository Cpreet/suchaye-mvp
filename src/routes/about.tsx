import { Section } from "@/components/sections/section";
import { Separator } from "@/components/ui/separator";

export function AboutPage() {
  return (
    <div className="space-y-0">
      <Section title="The Story Behind Suchaye" className="max-w-3xl">
        <div className="prose prose-lg max-w-none">
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
      </Section>

      <Separator className="max-w-3xl mx-auto my-4" />

      <Section title="Meet Vibhuti" className="max-w-3xl">
        <div className="prose prose-lg max-w-none">
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
      </Section>

      <Separator className="max-w-3xl mx-auto my-4" />

      <Section title="Our Journey" className="max-w-3xl">
        <div className="prose prose-lg max-w-none">
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

      <Separator className="max-w-3xl mx-auto my-4" />

      <Section title="Our Practices" className="max-w-3xl">
        <div className="prose prose-lg max-w-none">
          <p>
            At Suchaye, how we make things matters as much as what we make. Here's
            what guides our work:
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Small-Batch Crafting</h3>
          <p>
            Every piece is made in small batches, never more than a handful at a
            time. This allows us to pay attention to each item, catch imperfections
            early, and ensure consistency without sacrificing the handmade quality
            that makes our pieces special.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Honest Materials</h3>
          <p>
            We choose materials carefully — brass that ages beautifully, soy wax
            that burns cleanly, wicks that don't smoke. We're transparent about
            what goes into each piece because we believe you should know exactly
            what you're bringing into your home.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Slow-Made Philosophy</h3>
          <p>
            There's no rush here. Each piece takes the time it needs — whether
            that's hours spent perfecting a curve or days letting a candle cure
            properly. We'd rather wait a little longer and get it right than
            compromise on quality for speed.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Sustainable Choices</h3>
          <p>
            We're mindful of our impact. Our packaging is minimal and reusable
            where possible. We source materials locally when we can, and we're
            always looking for ways to reduce waste in our process. It's not
            perfect, but it's a start, and we're committed to doing better.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Personal Touch</h3>
          <p>
            Every order is packed by hand, often with a small note. We remember
            repeat customers, and we're always happy to answer questions or help
            you find the right piece. This isn't just a business — it's a
            relationship, and we want it to feel that way.
          </p>
        </div>
      </Section>
    </div>
  );
}

