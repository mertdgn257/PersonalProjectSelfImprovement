import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";
import achievementImage from "@assets/generated_images/Achievement_and_goals_visual_82990107.png";

export default function Q7HabitsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title="Habits of Successful People" backgroundImage={achievementImage} />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "Q7: Habits" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Analyzing the common routines, characteristics, and mindsets shared by high achievers, entrepreneurs, and successful individuals.
            </p>
          </div>

          <ContentCard>
            <p>
              Research shows that high achievers tend to live highly structured, intentional lives. They have disciplined routines, often starting their days with exercise, meditation, or journaling. Continuous learning is key – many read daily or pursue new skills regularly.
            </p>
            <p>
              Goal setting and time management are also common traits. Successful people break big goals into smaller steps and track progress along the way. They embrace a growth mindset, seeing challenges as opportunities rather than threats. Social support, mentorship, and the company of other motivated people play a big role too. Finally, they take care of their physical and mental health, knowing that energy and focus are essential to sustain productivity and performance.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Successful people combine disciplined routines, continuous learning, goal-setting, and a growth mindset with strong social support." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Building Confidence", path: "/q6-confidence" }}
              next={{ label: "Long-term Investment", path: "/q8-long-term-investment" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
