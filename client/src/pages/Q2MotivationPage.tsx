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
              Individuals tend to begin improving themselves for bunch of reasons, most often it's because they feel like something is missing or not quite right in their lives. It involves aspects such as anxiety, stress, or an overall dissatisfaction with the trajectory of things going on. Frequently, people realize they desire better mental health, more confidence, or a much profound sense of life satisfaction. On certain occasions inspiration comes from seeing others succeed — friends who have achieved their goals, celebrities, mentors — which goes to show how much social factors can inspire motivation.
            </p>
            <p>
              Psychology indirectly states that motivation becomes inseparable when it comes from within the individual, meaning the goals we set should be of our personal interest(s). External rewards or social incentives can temporarily lead to instantaneous distinctions, but they don't often guarantee or sustain long-term change in any shape or form. Things that prove self-improvement successful consist of setting rational/realistic goals, believing in yourself, planning properly, maintaining a positive mindset, and surrounding yourself with a supportive environment. Conversely, lack of structural planning, setting expectations beyond your boundaries, or being overly critical towards yourself can seize progress. Successful self-improvement combines innate motivation, consistent habits, and taking into consideration the small wins along the way.
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
