import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <Card className={`p-8 md:p-12 shadow-lg ${className}`} data-testid="content-card">
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground">
        {children}
      </div>
    </Card>
  );
}
