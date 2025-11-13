import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q4SmallChangesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q4: Small Changes & Long-term Growth"
        description="Discovering how atomic habits and incremental changes compound over time to create significant transformation and lasting results."
        path="/q4-small-changes"
      />
      <HeroSection title="What role do small, consistent changes play in long-term growth?" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q4: Small Changes" }]} />

          <ContentCard className="mt-8">
            <p>
              Small changes are where the real magic happens. James Clear calls these "atomic habits" – tiny, repeated actions that slowly build up into big results. Doing a few minutes of meditation, reading, or exercise each day may seem minor at first, but over time, it can make a huge difference in your mental and physical health.
            </p>
            <p>
              These little steps work because they're easy to start and don't feel overwhelming. Every time you follow through, it reinforces your brain's habits and makes the action more automatic. And consistency matters – doing something small every day often beats trying a big, sporadic change that's too hard to maintain. Over time, these small improvements stack up, creating measurable growth, boosting confidence, and showing you that steady, incremental change beats dramatic, short-term efforts.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Consistent, small changes compound over time, making them more effective than dramatic, short-term efforts." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Factors Provoking Desire", path: "/q3-factors" }}
              next={{ label: "Physical & Mental Health", path: "/q5-health" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
