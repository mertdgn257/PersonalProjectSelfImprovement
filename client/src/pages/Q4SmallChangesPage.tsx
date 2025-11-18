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
              Small changes are where real improvement takes place. Author James Clear calls these "atomic habits" — tiny, perpetual actions that slowly compound into big, remarkable results. Reading a couple pages, doing a few minutes of meditation, or doing cardio each day might seem minor and insignificant at first sight, yet over a certain period of time they can create powerful improvements toward your mental and physical health. These minuscule steps work because they're easy to implement and not too demanding. Every time you enforce a habit and follow through, it solidifies your mind's habits and makes it virtually autonomous. Moreover, consistency plays a crucial role — as doing something perceived as insignificant on a daily basis often overshadows attempting big, unpragmatic changes that prove hard to maintain. Over time, these small improvements stack up, ultimately creating remarkable results, boosting self-confidence, and showing you that stable, systematic change beats drastic, short-term changes.
            </p>

            <div className="my-8">
              <img src={compoundGrowthImg} alt="The power of 1% improvement compounding over time" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Getting 1% better each day compounds to remarkable results over a year
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">The Mathematics of Small Improvements</h3>
            <p>
              Improving by 1 percent isn't particularly memorable — sometimes it's barely even noticeable — but it can carry underlying importance, specifically in the long run. The power of tiny wins becomes clear when you grasp the concept compound growth. For instance, if you improve by 1% percent each day, you'll end up 37 times better after one year. Inversely, repeating 1% errors and declining by 1% daily results in dropping nearly to zero. This perfectly exemplifies why small choices really matter. Similarly, they multiply the same way that money multiplies through compound interest. Therefore, an assumption can be made regarding how financial investments are related to — in fundamental aspects — improving by 1% on a daily basis.
            </p>

            <div className="my-8">
              <img src={plateauImg} alt="The plateau of latent potential showing delayed visible results" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Progress often feels slow before breaking through the plateau of latent potential
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">The Valley of Disappointment</h3>
            <p>
              One of, if not the most discouraging parts of constructing better habits is experiencing what James Clear calls the "Valley of Disappointment." Even after putting in countless hours, days, weeks or even months of effort just to attain an ounce of progress, it can feel overwhelmingly demoralizing when nothing seems to change. Nevertheless, it's a completely normal phenomenon. Habits usually appear to have no effect until you cross a pivotal threshold — the Plateau of Latent Potential. According to this proposition, early work isn't wasted; it's being stored (compounding). Much like the analogy of ice melting from 25 degrees to 32 degrees, change seems microscopic until in an instant ice transforms into water. Habitual advancements require patience and perseverance through this valley.
            </p>

            <div className="my-8">
              <img src={habitLoopImg} alt="The habit loop showing cue, craving, response, and reward cycle" className="w-full rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Every habit follows a four-stage feedback loop
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Understanding the Habit Loop</h3>
            <p>
              Every habit consists of a four-stage cycle: a trigger (cue) sparks enticement (craving), leading to an action (response), which creates an outcome (reward). The outcome satisfies the initial craving and strengthens the association to the original trigger. This cycle operates automatically — whereby your subconscious takes charge as it's something humans do instinctively — constantly checking our surroundings for potential cues, predicting the next reward, testing various scenarios, and adapting based on outcomes.
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
