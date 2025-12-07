import { Lightbulb } from "lucide-react";

interface KeyTakeawayProps {
  text: string;
}

export function KeyTakeaway({ text }: KeyTakeawayProps) {
  return (
    <div
      className="relative border-l-4 border-primary bg-primary/5 dark:bg-primary/10 p-6 rounded-r-lg shadow-sm transition-all duration-300 hover:shadow-md"
      data-testid="key-takeaway"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
            Key Takeaway
          </span>
          <p className="font-sans text-base md:text-lg font-medium text-foreground leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
