import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

const questions = [
  { id: "q1", title: "What is self-improvement?", path: "/what-is-self-improvement" },
  { id: "q2", title: "Motivation & Success Factors", path: "/q2-motivation" },
  { id: "q3", title: "Factors Provoking Desire", path: "/q3-factors" },
  { id: "q4", title: "Small Changes & Long-term Growth", path: "/q4-small-changes" },
  { id: "q5", title: "Physical & Mental Health", path: "/q5-health" },
  { id: "q6", title: "Building Confidence", path: "/q6-confidence" },
  { id: "q7", title: "Habits of Successful People", path: "/q7-habits" },
  { id: "q8", title: "Long-term Investment", path: "/q8-long-term-investment" },
  { id: "q9", title: "Challenges & Misconceptions", path: "/q9-challenges" },
  { id: "q10", title: "4-Week Journey", path: "/q10-4week-journey" },
  { id: "q11", title: "Survey Results", path: "/q11-survey" },
  { id: "q12", title: "Everyday Strategies", path: "/q12-strategies" },
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <span className="font-sans text-lg font-semibold text-foreground hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-home">
              Self-Improvement
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            <Link href="/">
              <Button variant="ghost" data-testid="link-nav-home" className={location === "/" ? "bg-accent" : ""}>
                Home
              </Button>
            </Link>
            <Link href="/learning-goal">
              <Button variant="ghost" data-testid="link-nav-learning" className={location === "/learning-goal" ? "bg-accent" : ""}>
                Learning Goal
              </Button>
            </Link>
            <Link href="/product-goal">
              <Button variant="ghost" data-testid="link-nav-product" className={location === "/product-goal" ? "bg-accent" : ""}>
                Product Goal
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" data-testid="button-nav-questions">
                  Questions <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 max-h-96 overflow-y-auto">
                <div className="grid gap-1 p-2">
                  {questions.map((q) => (
                    <Link key={q.id} href={q.path}>
                      <DropdownMenuItem data-testid={`link-question-${q.id}`} className="cursor-pointer">
                        <span className="font-medium">{q.id.toUpperCase()}:</span>
                        <span className="ml-2 text-sm">{q.title}</span>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about">
              <Button variant="ghost" data-testid="link-nav-about" className={location === "/about" ? "bg-accent" : ""}>
                About
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Button>
            </Link>
            <Link href="/learning-goal">
              <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                Learning Goal
              </Button>
            </Link>
            <Link href="/product-goal">
              <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                Product Goal
              </Button>
            </Link>
            <div className="pl-4 space-y-1">
              <div className="font-medium text-sm text-muted-foreground py-2">Questions</div>
              {questions.map((q) => (
                <Link key={q.id} href={q.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {q.id.toUpperCase()}: {q.title}
                  </Button>
                </Link>
              ))}
            </div>
            <Link href="/about">
              <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                About
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
