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
              Focusing and bettering yourself doesn't just shift your mindset, it also changes your physical wellbeing too. Mentally beneficial activities such as setting goals, mindfulness, and journaling can play an effective role in reducing stress, lowering anxiety, and enhancing your mood. When you observe considerable progress in your habits of goals, you receive a self-esteem boost, and therefore, you feel unstoppable.
            </p>
            <p>
              Physically beneficial habits namely exercising on the regular, eating healthier, and getting enough sleep every night continuously improves your wellbeing. What's surprising is that improvements in one area regularly help others — when your mind is clear, habits become easier to perform. Concisely, consistent and grounded self-improvement creates a cycle evoking growth, creating an environment where both mental and physical health support each other.
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
