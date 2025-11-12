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
    <nav className="flex items-center justify-between gap-4 pt-8 border-t" data-testid="prev-next-nav">
      <div className="flex-1">
        {prev && (
          <Link href={prev.path}>
            <Button variant="outline" className="group" data-testid="button-prev">
              <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium">{prev.label}</div>
              </div>
            </Button>
          </Link>
        )}
      </div>
      <div className="flex-1 flex justify-end">
        {next && (
          <Link href={next.path}>
            <Button variant="outline" className="group" data-testid="button-next">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium">{next.label}</div>
              </div>
              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
