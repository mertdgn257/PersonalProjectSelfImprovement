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
              Individuals frequently struggle with challenges while pursuing self-improvement, from irrational expectations to inconsistency and comparison with others. Misconceptions — like believing that change requires drastic, immediate action or that self-improvement is mainly based on external achievements like wealth or status. Realistically speaking, effective improvement consists of incremental progress, reflection, and long-term commitment. Common Mental barriers, such as perfectionism, fear of failure, or unstable self-efficacy, can slow down progress. Furthermore, people have a tendency to undermine the significance of environment and social support in continuing new habits. Understanding these setbacks helps learners plan achievable goals, systematically implement changes, and maintaining a positive outlook towards one's self, leading to an increase in the probability of lasting improvement.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Common Misconceptions About Self-Improvement</h3>

            <div className="my-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Misconception: "I can completely break a bad habit"</h4>
                <p className="text-sm text-muted-foreground">
                  Once certain psychological patterns are etched into your mind, they become almost impossible to get rid of — even if you don't repeat them for a while. You can't really eliminate a bad habit; you can only make it unappealing, difficult, and invisible. Rather than trying to eliminate bad habits entirely, try making them harder to perform and replace them with good habits. The pattern stays, but you can choose not to activate them.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Misconception: "It takes exactly 21 days to form a habit"</h4>
                <p className="text-sm text-muted-foreground">
                  Research proves that habits take an average of 66 days to construct, but this can vary widely based on the habit itself — from two weeks to over 4 months. Whats important isn't how long but how many repetitions you do. You could do something thrice in 30 days straight or 100 times. Frequency is what makes the difference. Building a habit is a transformative lifestyle form.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Misconception: "I need more willpower and self-control"</h4>
                <p className="text-sm text-muted-foreground">
                  Self-control isn't a stable strategy, it requires unrealistic levels of obedience — deeming it unpractical. You might resist temptation once or twice, but it's not sustainable to have the willpower to overcome it every time. Instead of looking for a burst of motivation, use your time to optimize your surroundings. Make the right choices easier by manipulating your environment to your advantage. As opposed to living in your current environment, actively take part in shaping it towards your objectives.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Misconception: "Change should be immediate and dramatic"</h4>
                <p className="text-sm text-muted-foreground">
                  Most people expect direct progress and desire to observe results as quick as possible. However, in reality, the effects of your habits are delayed. Hence, you might put in days and months worth of hard work without observable results, leading you to experience what is called a "Valley of Disappointment." This is quite normal, given the compounding aspect of habits. Your work doesn't just go to waste, it gets stored. Changes are only visible after you cross a critical threshold.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Challenge: "I know I should do it, but I still don't start"</h4>
                <p className="text-sm text-muted-foreground">
                  Even when you think you're starting off small, you're often starting too big. A truly "atomic" habit is something like "put on gym clothes" rather than "exercise for 30 minutes." Try to make your habits easy to initiate so that the first steps require barely any effort. The actions that follow can be problematic, but the initial step should be effortless. This gets rid of the mental barrier between you and your goals.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Challenge: "I know I shouldn't do it, but I can't stop"</h4>
                <p className="text-sm text-muted-foreground">
                  Use something called "Commitment devices" — choices you make now that drive your future actions. Schedule an early morning meeting if you have a tendency to sleep in late. Buy food in separate and individual packages rather than bulk to prevent binge eating. These devices force you into good behavior before temptation takes control, helping you take advantage of good intentions before falling under the influence of cravings.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Overcoming the Biggest Obstacles</h3>
            <p>
              The path to self-improvement is hardly perfect. Acknowledging that bumps are normal, that environment matters, and that bad habits can't truly be broken but replaced, acts as a reminder to be patient with yourself. Instead of searching for perfection or instant transformation, channel your focus into showing up — no matter the circumstances — with progressive improvements. Progress isn't about never failing, it's about not giving up. If you stumble, return to your routine right away. This thoughtful approach to yourself paired with environment optimization and commitment strategies creates the groundwork for remarkable changes.
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
