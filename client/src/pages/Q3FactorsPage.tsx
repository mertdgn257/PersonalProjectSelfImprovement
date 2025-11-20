import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q3FactorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q3: Factors Provoking Desire"
        description="Examining the psychological triggers and external influences that spark the motivation to pursue personal growth and development."
        path="/q3-factors"
      />
      <HeroSection title="Which factors provoke the desire for self-improvement?" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q3: Factors" }]} />

          <ContentCard className="mt-8">
            <p>
              The desire to improve yourself generally occurs when you notice a blockade between your current self and who you want to become. Your habits, mindset, or skills may not be up to the level you want them to be, or you can come across obstacles that lead you to address the changes you need to make. Higgins' self-discrepancy theory describes this as: realizing your actual self isn't in check with your the ideal version of yourself creates a feeling of discomfort that guides you to take action.
            </p>
            <p>
              Further examples of triggers are social norms, or human qualities of autonomy and competence. These triggers direct your behaviors, and eventually become the puzzle pieces that form your habits. Reflecting on your experiences, addressing your future goals, or hearing about someone else's development journey can foster the influence you need to start improving. Daily stress, academic, and emotionally related issues can spark the motivation to grow. Basically, self-awareness, emotional, and social cues collaborate to form the desire and appeal for self-improvement — altogether making it inevitable.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="The gap between our actual and ideal self, combined with social influences and basic human needs, drives the desire for self-improvement." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Motivation & Success", path: "/q2-motivation" }}
              next={{ label: "Small Changes", path: "/q4-small-changes" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
