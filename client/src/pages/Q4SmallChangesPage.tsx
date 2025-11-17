import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";
import compoundGrowthImg from "@assets/generated_images/1%_compound_growth_diagram_2a896ec0.png";
import plateauImg from "@assets/generated_images/Plateau_of_latent_potential_93343ef1.png";
import habitLoopImg from "@assets/generated_images/The_Habit_Loop_cycle_32e5474d.png";

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

            <div className="my-8">
              <img src={compoundGrowthImg} alt="The power of 1% improvement compounding over time" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Getting 1% better each day compounds to remarkable results over a year
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">The Mathematics of Small Improvements</h3>
            <p>
              The power of tiny gains becomes clear when you understand compound growth. If you improve by just 1% each day for a year, you don't end up 365% better—you end up nearly 37 times better. Conversely, declining by 1% daily results in dropping to nearly zero. This demonstrates why small choices matter: they don't just add up, they multiply. Daily routines function like financial investments—modest but consistent deposits yield exponential returns over time.
            </p>

            <div className="my-8">
              <img src={plateauImg} alt="The plateau of latent potential showing delayed visible results" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Progress often feels slow before breaking through the plateau of latent potential
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">The Valley of Disappointment</h3>
            <p>
              One of the most frustrating aspects of building better habits is experiencing what feels like a "valley of disappointment." You put in weeks or even months of effort, yet visible results remain elusive. This is actually normal. Habits often appear to make no difference until you cross a critical threshold—a plateau of latent potential. Early work isn't wasted; it's being stored. Like ice melting from 25°F to 32°F, the change seems invisible until suddenly the ice transforms into water. Breakthroughs require patience and persistence through this valley.
            </p>

            <div className="my-8">
              <img src={habitLoopImg} alt="The habit loop showing cue, craving, response, and reward cycle" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Every habit follows a four-stage feedback loop
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Understanding the Habit Loop</h3>
            <p>
              Every habit follows a four-stage cycle: a trigger (cue) sparks a desire (craving), leading to an action (response), which produces an outcome (reward). The outcome satisfies the initial desire and reinforces the connection to the original trigger. This cyclical pattern operates automatically, constantly evaluating your surroundings, anticipating what comes next, testing various reactions, and adapting based on outcomes. Recognizing this cyclical nature is fundamental to modifying any behavior—whether establishing positive habits or eliminating negative ones.
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
