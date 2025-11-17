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
              The temptation to improve yourself generally arises when you notice a blockade between your current self and who you desire to become. Your habits, mindset, or skills may not be up to the level you want them to be, or you can encounter obstacles that lead you to address the changes you need to make. Higgins' self-discrepancy theory describes this as: realizing your actual self isn't in line with your ideal self creates a sensation of discomfort that pushes you to take action.
            </p>
            <p>
              Further triggers include seeing other people's success, societal norms and expectations, or the intrinsic human qualities of competence, autonomy, and connection (from Self-Determination Theory). Reflecting on your own unique experiences, reading about someone else's transformative journey, or noticing your aspirations for what you want for your life can foster the incentive to start improving. Daily stress, academic or career-related challenges, or just the attraction towards living a much content life can all spark the motivation to improve. Essentially, self-awareness, social influences, and emotional cues combine to make the appeal for self-improvement stronger.
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
