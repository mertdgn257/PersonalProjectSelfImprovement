import { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div className={`${className}`} data-testid="content-card">
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3 prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground">
        {children}
      </div>
    </div>
  );
}
