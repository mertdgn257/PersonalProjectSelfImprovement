import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function ProductGoalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title="Product Goal" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Product Goal" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Creating a comprehensive website that combines theoretical research with practical self-improvement insights to help others overcome anxiety and build confidence.
            </p>
          </div>

          <ContentCard>
            <p>
              My product goal is to create an in-depth, well planned out website that delves into the concept of self-improvement. The website will consist of theoretical research, findings from books (ex. Atomic Habits by James Clear), websites, interviews, surveys, real-life implementations of self-improvement techniques, interviews with people who practice self-improvement on a daily basis. It will also include a reflection on my own personal journey of applying minor lifestyle changes—for instance lifelong habit formation, productivity techniques, mindset shifts—and analyzing their effects on my mental wellbeing, confidence and anxiety. The final product will not only present theoretical research but also practical insights gained through observation and experimentation.
            </p>
            <p>
              Other than presenting research, there is a greater motive behind my product. My website will be of service to raise awareness about anxiety and insecurities me and various other individuals tend to struggle with. My intent is to convey that self-improvement is beyond external achievement, but is mainly based on overcoming internal obstacles one might put on themselves, building self-esteem, and learning to accept their true selves. In order to make this possible, I will add pragmatic solutions, real-life demonstrations of self-improvement, and step-by-step guides that can be used in daily life.
            </p>
            <p>
              Ultimately, the finished version of my product have a much purposeful use other than being a source of information that people could refer to; it will be a resource designed to guide people and help them understand through small consistent changes that they can achieve growth and a sense of fulfillment. By sharing my own journey and research, I wish to empower others to address their insecurities, raise their self-confidence by minimizing self-doubt and take actionable steps towards achieving their own goals.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="This website serves as both a research platform and a practical guide to empower others through the journey of self-improvement." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Learning Goal", path: "/learning-goal" }}
              next={{ label: "What is self-improvement?", path: "/what-is-self-improvement" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
