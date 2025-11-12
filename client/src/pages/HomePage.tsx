import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuestionCard } from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Self-improvement_journey_hero_image_07a0257b.png";

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
      <HeroSection title="Small Steps. Real Growth." backgroundImage={heroImage}>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8" data-testid="text-hero-subhead">
          Discover how consistent, intentional changes can transform your life through research, reflection, and practical application.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/what-is-self-improvement">
            <Button size="lg" data-testid="button-cta-start">
              What is self-improvement?
            </Button>
          </Link>
          <Link href="/q10-4week-journey">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" data-testid="button-cta-journey">
              4-Week Journey
            </Button>
          </Link>
        </div>
      </HeroSection>

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="heading-questions">
              Research Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore comprehensive research on self-improvement through 12 focused investigations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {questions.map((q) => (
              <QuestionCard key={q.number} {...q} />
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 text-center border border-primary/20">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4" data-testid="heading-cta">
              Start Your Journey Today
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Try one tiny habit today: choose it, do it daily, and reflect on your progress.
            </p>
            <Link href="/q12-strategies">
              <Button size="lg" data-testid="button-cta-strategies">
                Explore Strategies
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
