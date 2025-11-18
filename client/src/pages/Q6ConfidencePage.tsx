import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q6ConfidencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q6: Building Confidence"
        description="Exploring how building competence and achieving small wins transforms self-doubt into lasting confidence and resilience."
        path="/q6-confidence"
      />
      <HeroSection title="In what ways can self-improvement reduce insecurities and build confidence?" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q6: Confidence" }]} />

          <ContentCard className="mt-8">
            <p>
              Self-improvement targets and suppresses insecurities by making you gain competence and self-awareness. Setting small and realistic goals and hitting them consistently shows you that you can succeed, boosting confidence naturally. Tracking progress (small wins included) helps you prove that growth is taking place, and consequently you'll continue to follow through with your habits.
            </p>
            <p>
              Working on areas where you feel weak allows you to overcome fears step by step. Social support, like ones from peers, role models, and family members can influence and act as your compass and further boost confidence. Over time, the wins accumulate and lay a steady foundation to transform self-doubt into a stronger belief in your capabilities.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Small, achievable goals and consistent progress tracking transform insecurities into confidence and resilience." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Physical & Mental Health", path: "/q5-health" }}
              next={{ label: "Habits of Successful People", path: "/q7-habits" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
