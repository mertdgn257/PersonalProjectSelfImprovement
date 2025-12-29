import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About"
        description="About this IB Personal Project exploring self-improvement, habits, and personal growth through research and practical application."
        path="/about"
      />
      <HeroSection title="About This Project" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "About" }]} />

          <ContentCard className="mt-8">
            <h2>What This Project Is About</h2>
            <p>
              This IB Middle Years Programme Personal Project explores self-improvement through 12 research questions that combine theoretical understanding with practical application. The goal is simple: to understand how consistent, intentional changes can transform your life, and to share what I've learned with others struggling with anxiety and self-doubt.
            </p>

            <h2>Why Self-Improvement?</h2>
            <p>
              Self-improvement isn't about perfection or becoming someone you're not. It's about growth—small, measurable progress toward becoming the best version of yourself. For me, this journey started with anxiety and a desire to understand why some people seem to build confidence effortlessly while others struggle. The answer, I discovered, lies in understanding how habits work and how small changes compound over time.
            </p>

            <h2>The Foundation: Atomic Habits</h2>
            <p>
              Much of this project is inspired by James Clear's <em>Atomic Habits</em>, a book that fundamentally changed how I think about personal development. Clear's research shows that success isn't about massive action or willpower—it's about tiny changes applied consistently. This insight shaped every part of this project, from the research questions to the practical strategies presented here.
            </p>

            <h2>Research Process</h2>
            <p>
              I've drawn from 100 sources including peer-reviewed research from organizations like the CDC, WHO, and NIH; academic papers on motivation and self-efficacy; and insights from leading experts in psychology and personal development. The survey component involved 36 respondents sharing their real experiences with self-improvement, providing authentic data about what works and what doesn't.
            </p>

            <h2>My 4-Week Journey</h2>
            <p>
              To practice what this project preaches, I documented my own 4-week self-improvement journey, testing the strategies and frameworks I researched. This wasn't about achieving perfection—it was about learning what actually works when you put in the effort, fail sometimes, and keep going anyway.
            </p>

            <h2>Final Thoughts</h2>
            <p>
              If you're reading this, there's a good chance you're thinking about change. Maybe you want to build a habit, overcome anxiety, or simply become a better version of yourself. My message is this: you don't need a perfect plan or unlimited willpower. You need clarity about what matters, small sustainable changes, and consistency. Everything else follows.
            </p>
            <p>
              The path forward is made one small step at a time. Start small. Stay consistent. Trust the process.
            </p>
          </ContentCard>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Sources", path: "/sources" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
