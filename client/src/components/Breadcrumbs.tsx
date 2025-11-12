import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: Array<{ label: string; path?: string }>;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground py-4" aria-label="Breadcrumb" data-testid="breadcrumbs">
      <Link href="/">
        <span className="hover:text-foreground transition-colors cursor-pointer" data-testid="breadcrumb-home">
          Home
        </span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {item.path ? (
            <Link href={item.path}>
              <span className="hover:text-foreground transition-colors cursor-pointer" data-testid={`breadcrumb-${index}`}>
                {item.label}
              </span>
            </Link>
          ) : (
            <span className="text-foreground" data-testid={`breadcrumb-${index}`}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
