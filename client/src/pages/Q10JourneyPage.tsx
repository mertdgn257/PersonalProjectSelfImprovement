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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q10: 4-Week Journey" }]} />

          <ContentCard className="mt-8">
            <h2>Week 1: Awareness and Understanding Myself</h2>
            <p>
              I started by documenting my daily habits and thoughts with a journal. Every morning and evening, I wrote down how I felt, wins throughout the day, and parts where I struggled. With this, I concluded that I procrastinate often and excessively use social media, specifically after school when I feel tired. This inevitably lead me to postpone school work and notice a reappearing pattern of self-doubt whenever I faced challenges with my personal project and school.
            </p>
            <p>I set three goals to focus on:</p>
            <ol>
              <li>Reducing overall anxiety and stress</li>
              <li>Improving productivity and focus</li>
              <li>Building confidence in academic situations</li>
            </ol>
            <p>
              Through tracking sleep, study, and exercise habits, I reached a general conclusion. For instance, I found that my productivity and focus was at their highest in the evening, but I frequently wasted it by doomscrolling on instagram. I also thought about previous achievements — like finishing the last school year with a high average — and noticed that organized routines are what helped me succeed initially. This small reflection was a source of motivation and helped me regain momentum.
            </p>

            <h2>Week 2: Starting Small Habits</h2>
            <p>I chose to integrate manageable changes instead of trying to reinvent my life overnight. I focused on one habit per area:</p>
            <ul>
              <li>Meditation for 5 minutes every morning after brushing my teeth</li>
              <li>Reading 20 pages daily to improve focus and knowledge (Self-improvement books)</li>
              <li>Daily reflection in my journal to track emotions and progress</li>
            </ul>
            <p>
              At first, meditation seemed challenging. My mind was constantly thinking about other things — consequently, I couldn't focus. But by the fifth day, I observed a calmer mindset during lessons, and my journaling helped me see my stress triggers. Additionally, I started using habit stacking. I read right after breakfast and journaled before bed. During this week, I saw the value of consistency over intensity. Small changes, too, began to feel joyful. I could already see a couple improvements in focus and felt accomplished each time I performed a habit.
            </p>

            <h2>Week 3: Reflection, Adjustment, and Support</h2>
            <p>
              By the third week, I determined things that worked out and things that didn't. Meditation became normal, so I increased it to 10 minutes. Reading was consistent, but I was unknowingly rushing through it. I decided to slow down. Journaling uncovered that my biggest stress triggers were procrastination and anxiety. In addition, I sought feedback from close friends and family members. Their insights helped me solidify progress and motivated me.
            </p>
            <p>
              I began visualizing mid-term goals, like finishing homework without getting distracted and feeling confident during speaking exams. Moreover, I started reflecting on my mood shift; I was content with myself after I performed a habit and found myself curiously planning what to do next. I could almost see my confidence stacking up like Lego bricks as I completed tasks I previously avoided.
            </p>

            <h2>Week 4: Integration and Deep Reflection</h2>
            <p>
              During the final week, I channeled my focus on fully implementing these habits into my daily routine. Meditation, journaling, and reading has since become a part of my day to day schedule, and I felt more in control of my life. I also added an exercise routine I used to previously follow to complement mental clarity.
            </p>
            <p>Reflecting on the entire month, the changes were remarkable:</p>
            <ul>
              <li>Anxiety and stress were more manageable, especially in high-pressure situations</li>
              <li>My focus improved and I could complete tasks without wasting much time</li>
              <li>My confidence grew as I noticed progress in areas I previously neglected</li>
            </ul>
            <p>
              Daily journaling allowed me to track small wins alongside my personal growth. For example, I managed a stressful assignment instead of getting overwhelmed by it. This reflection helped me realize how tiny and consistent actions truly build up into impactful, long-term improvement.
            </p>
            <p>
              Towards the end of the four weeks, I gained a deeper appreciation and understanding of self-improvement. I learned that growth meant showing up when it mattered, not pursuing perfection. The process reinforced my discipline, improved my daily routine, and gave a practical guide I can use to continue improving myself beyond these four weeks.
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
