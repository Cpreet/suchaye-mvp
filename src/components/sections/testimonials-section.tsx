import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The candle smells exactly like rain on dry earth. So calming.",
    author: "Ananya S.",
  },
  {
    quote: "These earrings are so light, I forget I'm wearing them. Beautiful work.",
    author: "Meera K.",
  },
  {
    quote: "The tote bag is my daily driver now. Sturdy and stylish.",
    author: "Priya R.",
  },
  {
    quote: "Packaging was eco-friendly and so cute. Felt like a gift to myself.",
    author: "Sneha M.",
  },
  {
    quote: "Love the attention to detail. You can tell it's made with love.",
    author: "Rahul D.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full overflow-hidden py-12 bg-secondary/30">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-2">
          Words of Warmth
        </h2>
        <p className="text-muted-foreground font-light">
          Stories from our community
        </p>
      </div>
      
      <div className="flex w-full overflow-hidden group">
        <div className="flex animate-marquee-ltr min-w-full shrink-0 items-center justify-around gap-6 px-3 group-hover:[animation-play-state:paused]">
           {testimonials.map((t, i) => (
             <TestimonialCard key={`a-${i}`} {...t} />
           ))}
        </div>
        <div className="flex animate-marquee-ltr min-w-full shrink-0 items-center justify-around gap-6 px-3 group-hover:[animation-play-state:paused]">
           {testimonials.map((t, i) => (
             <TestimonialCard key={`b-${i}`} {...t} />
           ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <Card className="w-[300px] md:w-[400px] shrink-0 bg-card/50 backdrop-blur-sm border-none shadow-sm">
      <CardContent className="p-6 flex flex-col gap-4">
        <p className="text-base md:text-lg font-serif italic text-muted-foreground leading-relaxed whitespace-normal">
          "{quote}"
        </p>
        <p className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
          — {author}
        </p>
      </CardContent>
    </Card>
  );
}
