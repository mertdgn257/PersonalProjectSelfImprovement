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
              People lean towards improving themselves for a variety of reasons, the most common one is feeling discontent and having a notion like something is missing in their lives. It includes different variables such as anxiety, stress, or a general dissatisfaction with ongoing events. People often realize they want to better their mental health, have more confidence, or a pleasing sense of life satisfaction. Inspiration generally comes from watching others succeed, those most likely being friends who've accomplished their goals, celebrities you follow and admire, or mentors and guides — ultimately showing us how motivational (and important) social factors are.
            </p>
            <p>
              Psychology indicates that motivation sticks when it comes from a place of personal interest. Meaning our goals should be in correlation to our curiosities. External and temporary goals or social cues can momentarily lead to direct change, yet they don't really support long-term development. Things that make self-improvement successful include setting realistic goals, having confidence, planning properly, keeping a positive attitude, and forming your environment according to your needs.
            </p>
            <p>
              On the other hand, lack of purposeful planning, setting out-of-reach expectations, or being harsh towards yourself can slow progress. Successful self-improvement is a combination of intrinsic motivation, consistency between habits, and accepting the small wins along your journey.
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
