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
              Research indicates that high achieves tend to live highly planned and structured lives. They follow a specific routine without fail, often start their days off with exercise, reading, or journaling. Steady learning is crucial, many read on a daily basis or try to learn new skills. As mentioned in the previous pages, goal setting and effective time management are also common traits often associated with success. Accomplished individuals divide big goals into manageable chunks and track progress along the way. They wire themselves to embrace a growth mindset, looking at challenges as learning steps rather than threats. Social interactions with others who share the same growth fixated mindset is another major factor. Lastly, they acknowledge the importance of health; by resolving to feed, maintain and sustain their bodies and minds, they improve productivity alongside life quality.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">The Four Laws of Behavior Change</h3>
            <p>
              Successful habit formation follows four fundamental principles. These laws apply regardless of whether you're trying to build good habits or break bad ones, and they lay the foundation of lasting behavioral change.
            </p>

            <div className="my-6 space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">1st Law: Make It Obvious</h4>
                <p className="text-sm text-muted-foreground">
                  Design your environment to make cues for good habits much transparent. Use implementation intensions (to demonstrate — "I will do journaling for 15 minutes at 8am in my bedroom") and habit stacking to generate clear triggers. To break bad habits, reduce exposure to negative cues.
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
                  Reduce disruption between you and good habits. Use the Two-Minute Rule: scale down habits until they take less than two minutes to start. Prime your environment for success. To break bad habits, increase friction and make them more difficult.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-1">4th Law: Make It Satisfying</h4>
                <p className="text-sm text-muted-foreground">
                  Give yourself immediate rewards when completing habits. Track your progress and maintain your streak. Never miss twice. If you skip a day, get back on track immediately. To break bad habits, make the costs apparent and painful.
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
              One of the most effective strategies for building new habits is habit stacking. The formula is as follows: "After [CURRENT HABIT], I will [NEW HABIT]." By linking a new behavior to an established routine, you create a visible cue that makes the new habit more magnetic. Such as: "After I pour my morning cup of coffee, I will meditate for sixty seconds", then "After I meditate for sixty seconds, I will write my to-do list for the day." This approach uses the neural pathways you've built before, which provides ease when integrating new positive behaviors into your life without only relying on sheer willpower.
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
