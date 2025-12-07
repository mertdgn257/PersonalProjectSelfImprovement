import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavItem {
  label: string;
  path: string;
}

interface PrevNextNavProps {
  prev?: NavItem;
  next?: NavItem;
}

export function PrevNextNav({ prev, next }: PrevNextNavProps) {
  return (
    <nav className="flex items-stretch justify-between gap-4 pt-8 border-t" data-testid="prev-next-nav">
      <div className="flex-1">
        {prev && (
          <Link href={prev.path}>
            <Button 
              variant="outline" 
              className="group h-auto py-3 px-4 w-full justify-start bg-card hover:bg-secondary/50 hover:border-primary/30 transition-all duration-200" 
              data-testid="button-prev"
            >
              <ChevronLeft className="h-5 w-5 mr-3 text-primary group-hover:-translate-x-1 transition-transform duration-200" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground font-normal">Previous</div>
                <div className="font-medium text-foreground">{prev.label}</div>
              </div>
            </Button>
          </Link>
        )}
      </div>
      <div className="flex-1 flex justify-end">
        {next && (
          <Link href={next.path}>
            <Button 
              variant="outline" 
              className="group h-auto py-3 px-4 w-full justify-end bg-card hover:bg-secondary/50 hover:border-primary/30 transition-all duration-200" 
              data-testid="button-next"
            >
              <div className="text-right">
                <div className="text-xs text-muted-foreground font-normal">Next</div>
                <div className="font-medium text-foreground">{next.label}</div>
              </div>
              <ChevronRight className="h-5 w-5 ml-3 text-primary group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
