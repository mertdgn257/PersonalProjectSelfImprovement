import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q8InvestmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title="How can long-term investment into oneself lead to success?" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "Q8: Investment" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Understanding how sustained personal development creates compounding benefits that lead to sustainable success.
            </p>
          </div>

          <ContentCard>
            <p>
              Investing in personal development over the long term builds skills, confidence, and resilience, laying the foundation for sustainable success. This investment may include education, professional training, physical and mental health practices, and reflective self-improvement strategies. Continuous learning and skill acquisition expand opportunities, while self-awareness and emotional intelligence enhance decision-making and relationships. Long-term investment also encourages patience and discipline: instead of seeking immediate results, individuals focus on compounding benefits from steady effort. Psychologically, believing in one's ability to improve, a concept rooted in self-efficacy theory, increases persistence in the face of obstacles. By dedicating consistent time and resources to self-growth, people prepare themselves to seize opportunities, adapt to change, and achieve meaningful accomplishments over time.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Long-term personal investment creates compounding benefits in skills, confidence, and resilience that lead to sustainable success." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Habits of Successful People", path: "/q7-habits" }}
              next={{ label: "Challenges & Misconceptions", path: "/q9-challenges" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
