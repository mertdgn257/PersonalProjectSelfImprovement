import { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div 
      className={`bg-card rounded-lg border border-card-border p-6 md:p-8 shadow-sm transition-shadow duration-300 ${className}`} 
      data-testid="content-card"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-foreground">
        {children}
      </div>
    </div>
  );
}
