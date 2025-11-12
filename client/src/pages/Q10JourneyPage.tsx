import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q10JourneyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q10: My 4-Week Journey"
        description="A personal documentation of implementing self-improvement strategies over four weeks, tracking real progress, insights, and transformative changes."
        path="/q10-4week-journey"
      />
      <HeroSection title="My 4-Week Self-Improvement Journey" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "Q10: 4-Week Journey" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A personal documentation of implementing self-improvement strategies over four weeks, tracking real progress and insights.
            </p>
          </div>

          <ContentCard>
            <h2>Week 1: Awareness and Understanding Myself</h2>
            <p>
              I began by observing my daily habits, thoughts, and emotions. I kept a journal every morning and evening, noting how I felt, what I achieved, and where I struggled. Through this, I realized that I often procrastinate, especially after checking my phone or social media after school at home. I also noticed a recurring pattern of self-doubt whenever I faced challenges at school or with my personal project.
            </p>
            <p>I set three areas to focus on:</p>
            <ol>
              <li>Reducing anxiety and stress</li>
              <li>Improving productivity and focus</li>
              <li>Building confidence in social and academic situations</li>
            </ol>
            <p>
              By tracking habits like sleep, study periods, and exercise, I established a baseline. For example, I found that my energy was highest in the morning, but I often wasted it scrolling through social media after school. I also reflected on past successes—like finishing a challenging project last year—and realized that structured routines helped me succeed before. This reflection made me feel motivated to start small and build momentum.
            </p>

            <h2>Week 2: Starting Small Habits</h2>
            <p>I decided to implement small, manageable changes instead of trying to overhaul my life overnight. I focused on one habit per area:</p>
            <ul>
              <li>Meditation for 5 minutes every morning after brushing my teeth</li>
              <li>Reading 10 minutes daily to improve focus and knowledge</li>
              <li>Daily reflection in my journal to track emotions and progress</li>
            </ul>
            <p>
              At first, meditation felt difficult; my mind wandered constantly. But by the third day, I noticed a calmer mindset during classes, and my journaling helped me see patterns in my stress triggers. I also started using habit stacking: reading right after breakfast and journaling before bed.
            </p>
            <p>
              This week taught me the value of consistency over intensity. Even small changes began to feel rewarding. I could already see minor improvements in focus, and I felt a sense of accomplishment each time I completed a habit.
            </p>

            <h2>Week 3: Reflection, Adjustment, and Support</h2>
            <p>
              By the third week, I evaluated what worked and what didn't. Meditation became more natural, so I increased it to 10 minutes. Reading was easy to maintain, but I realized I was rushing through it. I slowed down, choosing quality over quantity. Journaling revealed that my biggest stress triggers were procrastination and negative self-talk.
            </p>
            <p>
              I also sought feedback from teachers and close friends. Their observations helped reinforce my progress and motivated me to continue.
            </p>
            <p>
              I started visualizing mid-term goals, such as completing homework efficiently without procrastination and feeling confident during presentations. I also began reflecting on the mental shift: I was less self-critical and more aware of small achievements. I could see my confidence slowly growing as I completed tasks I previously avoided.
            </p>

            <h2>Week 4: Integration and Deep Reflection</h2>
            <p>
              In the final week, I focused on integrating these habits fully into my routine. Meditation, journaling, and reading became part of my daily schedule, and I felt more in control of my thoughts and emotions. I also added a short exercise routine to complement mental growth with physical energy.
            </p>
            <p>Reflecting on the entire month, the changes were significant:</p>
            <ul>
              <li>Anxiety and stress were more manageable, especially in high-pressure situations</li>
              <li>My focus improved, and I could complete tasks more efficiently</li>
              <li>Confidence grew as I noticed real progress in areas I previously doubted</li>
            </ul>
            <p>
              Daily journaling allowed me to track small wins and recognize growth. For example, I could handle a stressful assignment calmly instead of panicking. This reflection helped me see that small, consistent actions truly compound into meaningful personal development.
            </p>
            <p>
              By the end of the four weeks, I felt a deeper understanding of self-improvement. I learned that growth isn't about perfection but persistence. The process strengthened my resilience, improved my daily habits, and gave me a practical roadmap for continuing self-improvement beyond these four weeks.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Small, consistent actions over four weeks demonstrated that growth comes from persistence, not perfection." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Challenges & Misconceptions", path: "/q9-challenges" }}
              next={{ label: "Survey Results", path: "/q11-survey" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
