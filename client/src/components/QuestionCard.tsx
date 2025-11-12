import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer hover-elevate group" data-testid={`card-question-${number.toLowerCase()}`}>
        <CardHeader>
          <div className="text-sm font-semibold text-primary mb-2">{number}</div>
          <CardTitle className="font-serif text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{preview}</p>
          <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
