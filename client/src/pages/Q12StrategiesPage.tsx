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
            <p>
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
              next={{ label: "About", path: "/about" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
