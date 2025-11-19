import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q12StrategiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q12: Everyday Strategies"
        description="Practical, research-backed strategies for embedding self-improvement into daily life for sustainable growth and lasting transformation."
        path="/q12-strategies"
      />
      <HeroSection title="What strategies can be applied to everyday life to ensure long-term improvement?" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q12: Strategies" }]} />

          <ContentCard className="mt-8">
            <p>
              Effectively implementing self-improvement techniques to daily life requires a mix of structure, consistency, and personal criticism. Research shows that habit formation can only be useful when changes you make are small, specific, and repetitive, as opposed to intense or unconventional. James Clear highlights the concept of "atomic habits" — small, progressive changes that stack together over time to create remarkable results. Something basic as devoting 5 minutes of your day to reading or 2 minutes to a short meditation is more achievable than attempting to greatly change your life, though coherence over weeks and months leads to enduring growth.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Practical Strategies for Daily Implementation</h3>

            <div className="my-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">The Two-Minute Rule</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  While building a new habit, scale it down to a point where it takes less than two minutes to complete. Rather than "read for 20 minutes," begin with "read one page." Rather than "do yoga," begin with "roll out yoga mat." The aim is to minimize the initial effort until doing that habit requires almost effortless. After you start, sustaining it becomes simple.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Examples: Put on running shoes (leads to running), write one sentence (leads to writing), meditate for one breath (leads to meditation session).
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Implementation Intentions</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Specify when and where you'll perform your habit. Use the formula mentioned preciously: "I will [BEHAVIOR] at [TIME] in [LOCATION]."  This provides a clear goal and increases the likelihood of you following through with it. Research shows that people who use this strategy are 2-3 times more likely to perform their habits.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Examples: "I will journal at 9pm in my bedroom," "I will exercise at 7am in the living room," "I will practice Spanish at lunch in the library."
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Environment Design</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Arrange your environment in a way that blocks the cues to bad habits and influences the cues to good habits. Place a book after you tidy up your bed so when you come back to rest and sleep, there'll be a cue to read it. Don't expect self-control to be your savior, make your environment adapt to support your goals. It's easier to make the right choices in an environment filled with positive cues.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Examples: Prepare workout clothes the night before, keep healthy snacks visible and junk food out of sight.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Temptation Bundling</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Link an habit you need to with an habit you want to do. Only listen to your favorite podcast while running on the treadmill. Only get a cheat meal after you follow your weekly diet plan. This technique makes habits more attractive by pairing them with things that provide you pleasure.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Examples: Listen to audiobooks only while commuting, drink coffee only after morning meditation, watch Netflix only while folding laundry.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Never Miss Twice</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Skipping a habit once is just a momentary setback. Skipping it twice can become a negative pattern. If you skip out on your habit today, try to prioritize getting back where you left off quickly. Failing once doesn't have to mean that your efforts need to go to waste — as long as you prevent it from becoming a repeated behavior. Progress isn't perfection, it's about being consistent despite failing.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Remember: A habit must be established before it can be improved. Focus on consistency first, optimization second.
                </p>
              </div>
            </div>

            <p className="mt-6">
              Goal setting is another key technique. Studies conducted on the Self-Determination Theory indicate that individuals become more motivated and likely to succeed when their goals are parallel to their personal values. Therefore, improvements you make should make should begin with achievable goals that you personally care for.
            </p>
            <p>
              Accountability is evenly significant. Bandura's study on self-efficacy implies that observing others, receiving feedback, and tracking one's progress increases the probability of continuing a habit. Tools you can leverage like habit trackers (a template can be found on James Clear's website if you want one for yourself), keeping a organized journal, or applications that record users's progress on their path to growth help stay on top of your goals.
            </p>
            <p>
              Mindset shifts are also crucial. Higgins' self-discrepancy theory indicates that progress is supported when individuals recognize the gap between their actual self and ideal self without harsh self-criticism. Daily reflection on small wins, gratitude, and reframing challenges as opportunities helps maintain motivation.
            </p>
            <p>
              Mindset shifts are also important. Higgins's work on the self-discrepancy theory shows that progression is supported when individuals acknowledge the differences between their current self and ideal self without negative self-criticism. Reflect on small wins, write things you're grateful for, and recognize challenges as chances to improve yourself.
            </p>
            <p>
              Combining physical, mental, and social habits together makes growth natural and steady. Even pairing a shirt exercise session with a few minutes of mindfulness, reading, or skill building can lift your mood and confidence. By taking small, realistic steps and regularly reflecting, self-improvement becomes further enticing — ultimately, rewarding.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Sustainable self-improvement combines small atomic habits, intrinsic goals, accountability, mindset shifts, and holistic integration across life domains." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Survey Results", path: "/q11-survey" }}
              next={{ label: "Recommended Reading", path: "/recommended-reading" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
