import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function EndNotesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="End Notes & References"
        description="Bibliography and references for the IB Personal Project on self-improvement, including research sources and cited works."
        path="/end-notes"
      />
      <HeroSection title="End Notes & References" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "End Notes" }]} />

          <ContentCard className="mt-8">
            <h2>Bibliography</h2>
            <p className="text-muted-foreground mb-6">
              The following sources provided the theoretical foundation, research data, and practical insights for this self-improvement project.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Books</h3>
                <div className="space-y-2 text-sm">
                  {/* Add your book citations here */}
                  <p className="text-muted-foreground italic">Citations to be added</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Academic Articles & Journals</h3>
                <div className="space-y-2 text-sm">
                  {/* Add your academic citations here */}
                  <p className="text-muted-foreground italic">Citations to be added</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Online Resources & Websites</h3>
                <div className="space-y-2 text-sm">
                  {/* Add your online resource citations here */}
                  <p className="text-muted-foreground italic">Citations to be added</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Primary Research</h3>
                <div className="space-y-2 text-sm">
                  {/* Add your primary research citations here (surveys, interviews, etc.) */}
                  <p className="text-muted-foreground italic">Citations to be added</p>
                </div>
              </div>
            </div>
          </ContentCard>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Everyday Strategies", path: "/q12-strategies" }}
              next={{ label: "About", path: "/about" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
