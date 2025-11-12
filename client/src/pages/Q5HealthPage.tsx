import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q5HealthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title="How does self-improvement affect physical and mental health?" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "Q5: Health" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Understanding the interconnected relationship between self-improvement practices and overall physical and mental wellbeing.
            </p>
          </div>

          <ContentCard>
            <p>
              Working on yourself doesn't just change your mindset – it changes your body too. Mentally, practices like goal-setting, mindfulness, and journaling can reduce stress, lower anxiety, and lift your mood. When you see progress in your habits or goals, your self-esteem grows, and you become more resilient.
            </p>
            <p>
              Physically, habits like exercising regularly, eating better, and sleeping consistently improve your overall well-being. What's cool is that improvements in one area often help the other: when your mind feels calmer and more in control, sticking to healthy habits becomes easier. Essentially, small, consistent self-improvement creates a positive cycle where mental and physical health reinforce each other, improving overall quality of life.
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
