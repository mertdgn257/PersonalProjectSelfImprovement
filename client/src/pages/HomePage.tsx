import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuestionCard } from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const questions = [
  {
    number: "Q1",
    title: "What is self-improvement?",
    preview: "Striving for a purposeful and worthwhile life starts with motivation-fueled devotion to self-improvement...",
    path: "/what-is-self-improvement",
  },
  {
    number: "Q2",
    title: "Motivation & Success Factors",
    preview: "What motivates individuals to begin a self-improvement journey, and what factors influence their success or failure?",
    path: "/q2-motivation",
  },
  {
    number: "Q3",
    title: "Factors Provoking Desire",
    preview: "The urge to improve yourself usually starts when you notice a gap between who you are and who you want to be...",
    path: "/q3-factors",
  },
  {
    number: "Q4",
    title: "Small Changes & Long-term Growth",
    preview: "Small changes are where the real magic happens. James Clear calls these 'atomic habits'...",
    path: "/q4-small-changes",
  },
  {
    number: "Q5",
    title: "Physical & Mental Health",
    preview: "Working on yourself doesn't just change your mindset – it changes your body too...",
    path: "/q5-health",
  },
  {
    number: "Q6",
    title: "Building Confidence",
    preview: "Self-improvement directly targets insecurities by helping you gain competence and self-awareness...",
    path: "/q6-confidence",
  },
  {
    number: "Q7",
    title: "Habits of Successful People",
    preview: "Research shows that high achievers tend to live highly structured, intentional lives...",
    path: "/q7-habits",
  },
  {
    number: "Q8",
    title: "Long-term Investment",
    preview: "Investing in personal development over the long term builds skills, confidence, and resilience...",
    path: "/q8-long-term-investment",
  },
  {
    number: "Q9",
    title: "Challenges & Misconceptions",
    preview: "Many people encounter challenges when pursuing self-improvement, including unrealistic expectations...",
    path: "/q9-challenges",
  },
  {
    number: "Q10",
    title: "4-Week Journey",
    preview: "My personal 4-week self-improvement journey documenting real progress and insights...",
    path: "/q10-4week-journey",
  },
  {
    number: "Q11",
    title: "Survey Results",
    preview: "The survey results show that most people see self-improvement as something deeply personal...",
    path: "/q11-survey",
  },
  {
    number: "Q12",
    title: "Everyday Strategies",
    preview: "Applying self-improvement strategies to everyday life requires structure, consistency, and reflection...",
    path: "/q12-strategies",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Home - Small Steps. Real Growth"
        description="Discover how consistent, intentional changes can transform your life. Explore comprehensive research on self-improvement through 12 focused investigations."
        path="/"
      />
      <HeroSection title="IB Personal Project — Self-Improvement">
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subhead">
          Small steps. Real growth. Exploring how consistent, intentional changes can transform your life.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/what-is-self-improvement">
            <Button size="lg" className="group shadow-md hover:shadow-lg transition-shadow duration-200" data-testid="button-get-started">
              Start Reading
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
          <Link href="/recommended-reading">
            <Button variant="outline" size="lg" className="group" data-testid="button-books">
              <BookOpen className="mr-2 h-4 w-4" />
              Book Recommendations
            </Button>
          </Link>
        </div>
      </HeroSection>

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              12 Research Questions
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore evidence-based insights on personal growth, habits, and sustainable change.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {questions.map((q) => (
              <QuestionCard key={q.number} {...q} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
