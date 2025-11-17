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
              Applying self-improvement strategies to everyday life requires a combination of structure, consistency, and mindful reflection. Research shows that habit formation is most effective when changes are small, specific, and repeatable, rather than overwhelming or vague. James Clear emphasizes the concept of "atomic habits"—tiny, incremental changes that compound over time to produce significant long-term results. For example, committing to just 5 minutes of reading or 2 minutes of meditation daily is more sustainable than attempting a radical overhaul, yet consistency over weeks leads to lasting improvement.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Practical Strategies for Daily Implementation</h3>

            <div className="my-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">The Two-Minute Rule</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  When starting a new habit, scale it down until it takes less than two minutes to complete. Instead of "read for 30 minutes," start with "read one page." Instead of "do yoga," begin with "roll out my yoga mat." The objective is to reduce the initial barrier until beginning requires virtually no effort. Once you start, continuing becomes natural.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Examples: Put on running shoes (leads to running), write one sentence (leads to writing), meditate for one breath (leads to meditation session).
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Implementation Intentions</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Be specific about when and where you'll perform your habit. Use the formula: "I will [BEHAVIOR] at [TIME] in [LOCATION]." This removes ambiguity and creates a clear commitment. Research shows people who use implementation intentions are 2-3 times more likely to follow through.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Examples: "I will journal at 9pm in my bedroom," "I will exercise at 7am in the living room," "I will practice Spanish at lunch in the library."
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Environment Design</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Design your environment to make good habits obvious and bad habits invisible. Place your guitar in the living room if you want to practice more. Put your phone in another room if you want to focus. Don't rely on willpower alone—change the environment to support your goals. Making better choices is easier when you're surrounded by better options.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Examples: Leave a book on your pillow, prep workout clothes the night before, keep healthy snacks visible and junk food out of sight.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Temptation Bundling</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Pair an action you need to do with an action you want to do. Only watch your favorite show while exercising. Only get a massage after completing a week of workouts. This strategy makes habits more attractive by linking them with immediate pleasure.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Examples: Listen to audiobooks only while commuting, drink coffee only after morning meditation, watch Netflix only while folding laundry.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Never Miss Twice</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Skipping a habit once represents a temporary setback. Skipping it twice risks establishing a pattern of avoidance. If you skip your habit today, make it a priority to get back on track tomorrow. This principle prevents one slip from spiraling into a broken streak. Progress isn't about perfection—it's about showing up consistently, even if imperfectly.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Remember: A habit must be established before it can be improved. Focus on consistency first, optimization second.
                </p>
              </div>
            </div>

            <p className="mt-6">
              Goal setting is another vital strategy. Studies on Self-Determination Theory show that individuals are more motivated and likely to succeed when goals are intrinsically meaningful—aligned with personal values rather than external rewards. Therefore, everyday improvements should begin with small goals that matter personally, such as improving concentration, managing stress, or developing a healthier routine.
            </p>
            <p>
              Accountability is equally important. Bandura's work on self-efficacy suggests that observing others, receiving feedback, and monitoring one's progress enhances the likelihood of sticking with a habit. Tools like habit trackers, journaling, or apps that record progress help users reflect on their growth and reinforce self-discipline.
            </p>
            <p>
              Mindset shifts are also crucial. Higgins' self-discrepancy theory indicates that progress is supported when individuals recognize the gap between their actual self and ideal self without harsh self-criticism. Daily reflection on small wins, gratitude, and reframing challenges as opportunities helps maintain motivation.
            </p>
            <p>
              Finally, integrating multiple domains of improvement—physical, mental, and social—is recommended for sustainable growth. For example, pairing short exercise sessions with mindfulness, reading, or skill-building creates a holistic improvement routine that positively influences mood, confidence, and overall life satisfaction. By planning small, realistic actions, reflecting on progress, and reinforcing habits, individuals can embed self-improvement into daily life in a way that is both practical and rewarding.
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
