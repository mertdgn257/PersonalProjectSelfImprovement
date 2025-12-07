import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface QuestionCardProps {
  number: string;
  title: string;
  preview: string;
  path: string;
}

export function QuestionCard({ number, title, preview, path }: QuestionCardProps) {
  return (
    <Link href={path}>
      <div 
        className="h-full p-6 bg-card border border-card-border rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 group" 
        data-testid={`card-question-${number.toLowerCase()}`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold">
            {number}
          </span>
          <h3 className="font-sans text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed pl-[52px]">
          {preview}
        </p>
        <div className="flex items-center text-primary text-sm font-medium pl-[52px] group-hover:translate-x-1 transition-transform duration-200">
          Read more <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
