import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export function HeroSection({ title, backgroundImage, children }: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(135deg, rgba(37, 99, 235, 0.88) 0%, rgba(30, 41, 59, 0.82) 100%), url(${backgroundImage})`
          : 'linear-gradient(135deg, hsl(221, 83%, 53%) 0%, hsl(220, 13%, 18%) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-testid="hero-section"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="hero-title">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
