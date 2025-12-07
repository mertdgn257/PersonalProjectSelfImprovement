import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: Array<{ label: string; path?: string }>;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      className="flex items-center gap-2 text-sm text-muted-foreground py-4 flex-wrap" 
      aria-label="Breadcrumb" 
      data-testid="breadcrumbs"
    >
      <Link href="/">
        <span 
          className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-200 cursor-pointer" 
          data-testid="breadcrumb-home"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only md:not-sr-only">Home</span>
        </span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
          {item.path ? (
            <Link href={item.path}>
              <span 
                className="hover:text-primary transition-colors duration-200 cursor-pointer" 
                data-testid={`breadcrumb-${index}`}
              >
                {item.label}
              </span>
            </Link>
          ) : (
            <span 
              className="text-foreground font-medium" 
              data-testid={`breadcrumb-${index}`}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
