import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export function HeroSection({ title, backgroundImage, children }: HeroSectionProps) {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 dark:from-secondary/20 dark:via-background dark:to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight" 
          data-testid="hero-title"
        >
          {title}
        </h1>
        {children && (
          <div className="mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
