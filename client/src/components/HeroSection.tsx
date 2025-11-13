import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export function HeroSection({ title, backgroundImage, children }: HeroSectionProps) {
  return (
    <section
      className="relative w-full py-16 md:py-20 border-b"
      data-testid="hero-section"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="hero-title">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
