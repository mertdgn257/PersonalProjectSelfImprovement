import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";
import growthImg from "@assets/generated_images/long-term_growth_investment_diagram.png";

export default function Q8InvestmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q8: Long-term Investment"
        description="Understanding how sustained personal development creates compounding benefits that lead to sustainable success over time."
        path="/q8-long-term-investment"
      />
      <HeroSection title="How can long-term investment into oneself lead to success?" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Q8: Investment" }]} />

          <ContentCard className="mt-8">
            <p>
              Investing in personal development over a prolonged period builds skills, confidence, and resilience, laying the basis for long-term success. Investments of this sort may include tuition, professional training, physical and mental health practices, and various self-improvement strategies — preferably backed by scientific evidence. Ongoing learning and the development of new skills broadens one's opportunities. Simultaneously, self-awareness and emotional intellect strengthen core decision-making and relationships. Long-term investment additionally promotes patience and discipline; rather than pursuing instant results, individuals pick up on the compounding benefits from steady effort. Psychology, believing in one's ability to improve — a concept embedded in self-efficacy theory — increases resolve when confronted with obstacles. By setting aside enough time and resources to self-growth, people prepare themselves to seize opportunities, adapt to change, and achieve meaningful accomplishments over time.
            </p>
            <figure className="my-8">
              <img 
                src={growthImg} 
                alt="Long-term growth investment diagram showing a seed growing into a flourishing tree over time" 
                className="w-full rounded-lg"
                data-testid="img-growth-investment"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2">
                Long-Term Investment: Growth Compounds Over Time
              </figcaption>
            </figure>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Long-term personal investment creates compounding benefits in skills, confidence, and resilience that lead to sustainable success." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Habits of Successful People", path: "/q7-habits" }}
              next={{ label: "Challenges & Misconceptions", path: "/q9-challenges" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
