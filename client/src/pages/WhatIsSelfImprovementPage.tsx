import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";
import continuousImage from "@assets/generated_images/Continuous_improvement_pattern_blue_01260808.png";

export default function WhatIsSelfImprovementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q1: What is self-improvement?"
        description="Exploring the fundamental concept of self-improvement as a journey of personal development through continuous, intentional change and internal psychological growth."
        path="/what-is-self-improvement"
      />
      <HeroSection title="What is self-improvement?" backgroundImage={continuousImage} />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "What is self-improvement?" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Exploring the fundamental concept of self-improvement as a journey of personal development through continuous, intentional change.
            </p>
          </div>

          <ContentCard>
            <p>
              Striving for a purposeful and worthwhile life starts most often with motivation-fueled devotion to self-improvement, showcasing humanity's intrinsic desire to pursue progression and perpetual development. Whether you're looking to augment your personality, acquire new skills, refine existing skills, overcome obstacles you face on a daily basis, improve overall wellbeing and satisfaction or satiate your appetite for success, self-improvement can act as your way-finder in your personal journey to become your best self.
            </p>
            <p>
              Self-improvement can be defined as the entirety of constant yet stable changes aimed towards developing one's personal qualities —namely intrapersonal (about the self), interpersonal (relations with others), professional, and practical qualities— purely by a one's own efforts. It incorporates many ideologies, tactics and practices targeted towards betterment. Self-improvement boils down to a practice that requires continuity, critical reflection, uncompromising honesty to identify aspects that are in need of growth, and conscious action to address them. Self improvement can have diverse benefits that change the way we perceive ourselves and engage with our surroundings.
            </p>
            <p>
              Furthermore, when people talk about self-improvement, they usually talk about procuring some degree of achievement (status, money, etc.). Such improvement concern a person's life situation —resources of conditions that make daily living better, but do not fundamentally alter who the person really is. Which is not to be considered the same as self-improvement, as self-improvement delves into an individual's psychology and does not possess materialistic attributes.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Self-improvement is about internal psychological growth through continuous self-reflection and action, not external achievements." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Product Goal", path: "/product-goal" }}
              next={{ label: "Motivation & Success Factors", path: "/q2-motivation" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
