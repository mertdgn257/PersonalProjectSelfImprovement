import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q3FactorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title="Which factors provoke the desire for self-improvement?" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "Q3: Factors" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Examining the psychological triggers and external influences that spark the motivation to pursue personal growth and development.
            </p>
          </div>

          <ContentCard>
            <p>
              The urge to improve yourself usually starts when you notice a gap between who you are and who you want to be. Maybe your habits, skills, or mindset aren't where you'd like them to be, or you experience a setback that makes you realize change is needed. Higgins' self-discrepancy theory explains this: realizing your actual self isn't matching your ideal self creates an uncomfortable feeling that motivates you to act.
            </p>
            <p>
              Other triggers include seeing others succeed, societal expectations, or the basic human needs of competence, autonomy, and connection (from Self-Determination Theory). Reading about someone else's transformational journey, reflecting on your own experiences, or noticing what you want for your life can push you to start improving. Daily stress, academic or career challenges, or just a desire to live a more fulfilled life can all spark the motivation to grow. Basically, self-awareness, social influences, and emotional nudges all come together to make the desire for self-improvement stronger.
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
