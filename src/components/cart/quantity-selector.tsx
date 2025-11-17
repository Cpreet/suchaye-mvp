import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
}

export function QuantitySelector({
  value,
  min = 1,
  max,
  onChange,
  className,
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (!max || value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className={cn("flex items-center gap-1.5 md:gap-2", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={value <= min}
        className="h-7 w-7 md:h-8 md:w-8 touch-manipulation"
      >
        <Minus className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </Button>
      <span className="w-7 md:w-8 text-center text-sm md:text-base font-medium">{value}</span>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        disabled={max !== undefined && value >= max}
        className="h-7 w-7 md:h-8 md:w-8 touch-manipulation"
      >
        <Plus className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </Button>
    </div>
  );
}

