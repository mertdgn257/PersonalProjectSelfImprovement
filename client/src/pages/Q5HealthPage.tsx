import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q5HealthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q5: Physical & Mental Health"
        description="Understanding the interconnected relationship between self-improvement practices and overall physical and mental wellbeing."
        path="/q5-health"
      />
      <HeroSection title="How does self-improvement affect physical and mental health?" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q5: Health" }]} />

          <ContentCard className="mt-8">
            <p>
              Improving and working on yourself doesn't just change the way you think — it also changes your physical wellbeing. Simple habits such as setting goals, practicing mindfulness, or journaling can ease stress, reduce anxiety and enhance your mood. And when you begin seeing actual improvement, your confidence grows and you feel unstoppable.
            </p>
            <p>
              Physically supportive habits like regular exercise, healthy eating, and getting enough sleep each night can firmly improve your wellness. What's interesting — to me, personally — is how changes in one area frequently boosts others. When your mind is clear, habits are easier to perform without thinking. Shortly, grounded and consistent self-improvement creates a cycle of development, fostering an environment where mental and physical health exist in harmony.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Self-improvement creates a positive feedback loop where mental and physical health improvements reinforce each other." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Small Changes", path: "/q4-small-changes" }}
              next={{ label: "Building Confidence", path: "/q6-confidence" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
