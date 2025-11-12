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
          ? `linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(31, 41, 55, 0.75) 100%), url(${backgroundImage})`
          : 'linear-gradient(135deg, hsl(222, 47%, 11%) 0%, hsl(217, 19%, 17%) 100%)',
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
