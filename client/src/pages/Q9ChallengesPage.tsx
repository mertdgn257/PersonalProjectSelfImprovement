import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q9ChallengesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q9: Challenges & Misconceptions"
        description="Identifying common obstacles and misunderstandings that hinder self-improvement progress and how to overcome them effectively."
        path="/q9-challenges"
      />
      <HeroSection title="What are the challenges and misconceptions about self-improvement?" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "Q9: Challenges" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Identifying common obstacles and misunderstandings that hinder self-improvement progress and how to overcome them.
            </p>
          </div>

          <ContentCard>
            <p>
              Many people encounter challenges when pursuing self-improvement, including unrealistic expectations, inconsistency, and the temptation to compare themselves to others. Common misconceptions include believing that change requires drastic, immediate action or that self-improvement is primarily about external achievements like wealth or status. In reality, effective improvement involves incremental progress, internal reflection, and long-term commitment. Psychological barriers, such as fear of failure, low self-efficacy, or perfectionism, can hinder progress. Additionally, individuals may underestimate the importance of environment and social support in sustaining new habits. Understanding these challenges allows learners to plan more realistic goals, implement gradual changes, and maintain a compassionate, patient mindset toward themselves, ultimately increasing the likelihood of meaningful and lasting improvement.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Understanding common challenges and misconceptions helps create realistic expectations and sustainable self-improvement strategies." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Long-term Investment", path: "/q8-long-term-investment" }}
              next={{ label: "4-Week Journey", path: "/q10-4week-journey" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
