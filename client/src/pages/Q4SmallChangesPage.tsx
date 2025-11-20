import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";
import compoundGrowthImg from "@assets/generated_images/1percent_compound_growth_diagram_2a896ec0.png";
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
              Small changes are where actual improvement takes place. Author James Clear calls these "atomic habits" — tiny, repeated actions that slowly build up into big, remarkable results. Reading a few pages, doing meditation, or cardio each day might seem minor at first sight, but over a certain period of time they can create powerful improvements toward your mental and physical health. These small steps work because they're easy to implement and not too demanding. Every time you enforce a habit and follow through with it, it settles the habit in your mind and makes it practically automatic. Additionally, consistency is what makes them so efficient — doing something perceived as tiny on a day to day basis often surpasses attempts at big, impractical changes that prove hard to keep up with. Throughout a period of time, these small improvements stack up, eventually creating noteworthy results, increasing self-esteem, and showing you that structured, gradual change beats hasty, short-term efforts.
            </p>

            <div className="my-8">
              <img src={compoundGrowthImg} alt="The power of 1% improvement compounding over time" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Getting 1% better each day compounds to remarkable results over a year
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">The Mathematics of Small Improvements</h3>
            <p>
              Improving by 1 percent isn't always visible, some times it's hardly even noticeable, but it can have underlying importance in the long run. The true value of small wins becomes more meaning once you comprehend the concept of compound growth. For example, if you improve by 1% each day, you'll turn out 37 times better after one year. Inversely, doing the same 1% error and falling off by 1% daily ends in dropping close to zero. This, essentially, exemplifies why small choices matter. As well as that, they stack up in the same way that currency stacks up through compound interest. In other words, a correlation can be made between how financial investments relate to the foundations of improving 1% daily.
            </p>

            <div className="my-8">
              <img src={plateauImg} alt="The plateau of latent potential showing delayed visible results" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Progress often feels slow before breaking through the plateau of latent potential
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">The Valley of Disappointment</h3>
            <p>
              One of, if not the most discouraging parts of building better habits is experiencing what James Clear calls the "Valley of Disappointment." Even after putting in numerous hours of effort just to make minimal amount of progress, it can feel extremely demoralizing when nothing seems to change. Nevertheless, it's a completely normal occurrence. Habits usually seem to have no effect until you cross a threshold — the Plateau of Latent Potential. According to this explanation, early work isn't wasted or squandered; it's being deposited (stored, compounded). Like the analogy of ice cube melting at temperatures 25 degrees to 32 degrees, change seems insignificant until instantly ice cube transforms into water. Habit development needs patience and persistence through this frustrating valley.
            </p>

            <div className="my-8">
              <img src={habitLoopImg} alt="The habit loop showing cue, craving, response, and reward cycle" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Every habit follows a four-stage feedback loop
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Understanding the Habit Loop</h3>
            <p>
              Every habit consists of a four-stage cycle: a trigger (cue) sparks enticement (craving), leading to an action (response), which creates an outcome (reward). The outcome satisfies the initial craving and strengthens the association to the original trigger. This cycle operates automatically — whereby your subconscious takes charge as it's something humans do instinctively — constantly checking our surroundings for potential cues, predicting the next reward, testing various scenarios, and adapting based on the results of those actions.
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
