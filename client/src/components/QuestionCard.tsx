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
      <div className="h-full p-6 border rounded-md cursor-pointer hover-elevate group transition-all" data-testid={`card-question-${number.toLowerCase()}`}>
        <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{number}</div>
        <h3 className="font-sans text-lg font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{preview}</p>
        <div className="flex items-center text-foreground text-sm font-medium group-hover:translate-x-1 transition-transform">
          Read more <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
