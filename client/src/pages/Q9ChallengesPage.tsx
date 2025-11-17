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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q9: Challenges" }]} />

          <ContentCard className="mt-8">
            <p>
              Many people encounter challenges when pursuing self-improvement, including unrealistic expectations, inconsistency, and the temptation to compare themselves to others. Common misconceptions include believing that change requires drastic, immediate action or that self-improvement is primarily about external achievements like wealth or status. In reality, effective improvement involves incremental progress, internal reflection, and long-term commitment. Psychological barriers, such as fear of failure, low self-efficacy, or perfectionism, can hinder progress. Additionally, individuals may underestimate the importance of environment and social support in sustaining new habits. Understanding these challenges allows learners to plan more realistic goals, implement gradual changes, and maintain a compassionate, patient mindset toward themselves, ultimately increasing the likelihood of meaningful and lasting improvement.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Common Misconceptions About Self-Improvement</h3>

            <div className="my-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Misconception: "I can completely break a bad habit"</h4>
                <p className="text-sm text-muted-foreground">
                  Truth: Once mental grooves of habit are carved into your brain, they're nearly impossible to remove entirely—even if unused for a long time. You can't truly "delete" a bad habit; you can only make it unattractive, difficult, and invisible. Instead of trying to eliminate bad habits completely, focus on making them harder to do and replacing them with better alternatives. The neural pathways remain, but you can choose not to activate them.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Misconception: "It takes exactly 21 days to form a habit"</h4>
                <p className="text-sm text-muted-foreground">
                  Truth: Research shows habits take an average of 66 days to form, but this varies widely depending on the habit—from three weeks to over eight months. More importantly, what matters isn't how long but how many repetitions you perform. You could do something twice in 30 days or 200 times. It's the frequency that makes the difference. Building a habit isn't crossing a finish line; it's a lifestyle to be lived.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Misconception: "I need more willpower and self-control"</h4>
                <p className="text-sm text-muted-foreground">
                  Truth: Self-control is a short-term strategy, not a long-term one. You might resist temptation once or twice, but it's unlikely you can muster the willpower to override your desires every time. Instead of summoning new doses of willpower, spend your energy optimizing your environment. Make good choices easier by designing surroundings that support your goals. Rather than passively accepting your current environment, actively shape it to align with your objectives.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Misconception: "Change should be immediate and dramatic"</h4>
                <p className="text-sm text-muted-foreground">
                  Truth: Most people expect linear progress and want to see results quickly. In reality, the effects of habits are often delayed. You might put in weeks or months of hard work without visible results, experiencing a "valley of disappointment." This is normal. Your work isn't wasted—it's being stored. Like ice warming from 25°F to 32°F, change seems invisible until you cross a critical threshold. Patience and persistence through this valley are essential for breakthrough.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Challenge: "I know I should do it, but I still don't start"</h4>
                <p className="text-sm text-muted-foreground">
                  Solution: Even when you think you're starting small, you're often starting too big. A truly tiny behavior is something like "put on running shoes" rather than "run for 15 minutes." Make your habits so easy to start that the first two minutes require almost no effort. The actions that follow can be challenging, but the initial step should feel effortless. This removes the mental barrier to getting started.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Challenge: "I know I shouldn't do it, but I can't stop"</h4>
                <p className="text-sm text-muted-foreground">
                  Solution: Create commitment devices—choices you make now that control your future actions. Set an early morning meeting if you sleep in too late. Buy food in individual packages rather than bulk to reduce overeating. Add yourself to casino banned lists to prevent gambling. These devices lock you into good behavior before temptation strikes, letting you take advantage of good intentions before falling victim to cravings.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Overcoming the Biggest Obstacles</h3>
            <p>
              The path to self-improvement is rarely smooth. Understanding that plateaus are normal, that environment matters more than willpower, and that habits can't truly be broken (only replaced) helps set realistic expectations. Rather than seeking perfection or dramatic transformation, focus on showing up consistently with tiny improvements. Progress isn't about never failing—it's about never missing twice. When you slip, get back on track immediately. This compassionate, patient approach to yourself, combined with smart environment design and commitment devices, creates the foundation for sustainable, lasting change.
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
