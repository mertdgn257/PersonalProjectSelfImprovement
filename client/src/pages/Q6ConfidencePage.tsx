import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q6ConfidencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title="In what ways can self-improvement reduce insecurities and build confidence?" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "Q6: Confidence" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Exploring how building competence and achieving small wins transforms self-doubt into lasting confidence and resilience.
            </p>
          </div>

          <ContentCard>
            <p>
              Self-improvement directly targets insecurities by helping you gain competence and self-awareness. Setting small, achievable goals and hitting them shows you that you can succeed, which naturally boosts confidence. Tracking progress – even small wins – helps you see that growth is real, not just something you hope for.
            </p>
            <p>
              Practicing in areas where you feel weak allows you to overcome fears gradually. Social support also helps: mentors, peers, and role models can encourage and guide you, giving confidence a further boost. Over time, these successes build momentum, transforming self-doubt into resilience and a stronger belief in your abilities.
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
