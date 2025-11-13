import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q2MotivationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q2: Motivation & Success Factors"
        description="Understanding the internal and external factors that drive individuals to pursue self-improvement and what determines their success or failure."
        path="/q2-motivation"
      />
      <HeroSection title="What motivates individuals to begin a self-improvement journey?" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q2: Motivation" }]} />

          <ContentCard className="mt-8">
            <p>
              People start improving themselves for all sorts of reasons, usually because they feel something is missing or not quite right in their lives. It could be anxiety, stress, or a general dissatisfaction with how things are going. Often, people notice they want better mental health, more confidence, or a greater sense of life satisfaction. Sometimes inspiration comes from seeing others succeed – mentors, celebrities, or friends who have achieved their goals – which shows how much social examples can influence motivation.
            </p>
            <p>
              Psychology tells us that motivation sticks when it comes from within, meaning the goals we set should truly matter to us personally. External rewards or social recognition can kick things off, but they don't usually sustain long-term change. Things that make self-improvement successful include having realistic goals, believing in yourself, planning properly, keeping a positive mindset, and having a supportive environment. On the flip side, lack of planning, setting unrealistic expectations, or being overly critical of yourself can make progress much harder. Successful self-improvement usually combines intrinsic motivation, consistent habits, and noticing the small wins along the way.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Intrinsic motivation combined with realistic goals and consistent habits leads to sustainable self-improvement success." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "What is self-improvement?", path: "/what-is-self-improvement" }}
              next={{ label: "Factors Provoking Desire", path: "/q3-factors" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
