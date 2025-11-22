import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24 lg:py-32", className)}>
      {(title || subtitle) && (
        <div className="mb-8 md:mb-12 lg:mb-16 space-y-3 md:space-y-4">
          {title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium">{title}</h2>
          )}
          {subtitle && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

