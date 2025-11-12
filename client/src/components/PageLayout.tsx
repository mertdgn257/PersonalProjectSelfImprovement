import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <AnimatePresence mode="wait">
        <PageTransition key={location}>
          {children}
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
