import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";
import habitStackingImg from "@assets/generated_images/Habit_stacking_diagram_0cdf4e3a.png";

export default function Q7HabitsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q7: Habits of Successful People"
        description="Analyzing the common routines, characteristics, and mindsets shared by high achievers, entrepreneurs, and successful individuals."
        path="/q7-habits"
      />
      <HeroSection title="Habits of Successful People" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q7: Habits" }]} />

          <ContentCard className="mt-8">
            <p>
              Research shows that high achievers tend to live highly structured, intentional lives. They have disciplined routines, often starting their days with exercise, meditation, or journaling. Continuous learning is key – many read daily or pursue new skills regularly.
            </p>
            <p>
              Goal setting and time management are also common traits. Successful people break big goals into smaller steps and track progress along the way. They embrace a growth mindset, seeing challenges as opportunities rather than threats. Social support, mentorship, and the company of other motivated people play a big role too. Finally, they take care of their physical and mental health, knowing that energy and focus are essential to sustain productivity and performance.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">The Four Laws of Behavior Change</h3>
            <p>
              Successful habit formation follows four fundamental principles. These laws apply whether you're trying to build good habits or break bad ones, and they form the foundation of lasting behavioral change.
            </p>

            <div className="my-6 space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">1st Law: Make It Obvious</h4>
                <p className="text-sm text-muted-foreground">
                  Design your environment so cues for good habits are visible. Use implementation intentions ("I will exercise at 7am in the living room") and habit stacking to create clear triggers. To break bad habits, reduce exposure to negative cues.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">2nd Law: Make It Attractive</h4>
                <p className="text-sm text-muted-foreground">
                  Pair actions you need to do with actions you want to do through temptation bundling. Join communities where your desired behavior is normal. To break bad habits, reframe them to highlight their downsides.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">3rd Law: Make It Easy</h4>
                <p className="text-sm text-muted-foreground">
                  Reduce friction between you and good habits. Use the Two-Minute Rule: scale down habits until they take less than two minutes to start. Prime your environment for success. To break bad habits, increase friction and make them more difficult.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">4th Law: Make It Satisfying</h4>
                <p className="text-sm text-muted-foreground">
                  Give yourself immediate rewards when completing habits. Track your progress and maintain your streak. Never miss twice—if you skip a day, get back on track immediately. To break bad habits, make the costs visible and painful.
                </p>
              </div>
            </div>

            <div className="my-8">
              <img src={habitStackingImg} alt="Habit stacking: building new habits on existing ones" className="w-full max-w-md mx-auto rounded-md" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Stack new habits on top of existing routines for better consistency
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Habit Stacking: The Power of Existing Routines</h3>
            <p>
              One of the most effective strategies for building new habits is habit stacking. The formula is simple: "After [CURRENT HABIT], I will [NEW HABIT]." By linking a new behavior to an established routine, you create a clear trigger that makes the new habit more likely to stick. For example: "After I pour my morning coffee, I will meditate for five minutes," or "After I close my laptop for the day, I will write down three things I'm grateful for." This approach leverages the neural pathways you've already built, making it easier to integrate new positive behaviors into your life without relying solely on motivation or willpower.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Successful people combine disciplined routines, continuous learning, goal-setting, and a growth mindset with strong social support." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Building Confidence", path: "/q6-confidence" }}
              next={{ label: "Long-term Investment", path: "/q8-long-term-investment" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
