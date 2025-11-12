import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function LearningGoalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title="Learning Goal" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Learning Goal" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Understanding the psychology of self-improvement and its impact on overcoming anxiety and building confidence through research and personal application.
            </p>
          </div>

          <ContentCard>
            <p>
              Ever since I was young, I was fascinated by what it really meant to sense personal fulfillment. I frequently found myself absorbed in deep thought, "What would it take to live fulfilled life as those I look up to?" From that moment forward, that question stood with me and became a mental compass in my mind, ultimately igniting my compelling passion in the psychological idea of self-improvement. As years passed by and slowly moved into early my teenage years, I was faced with the bitter yet eye-opening truth of self-awareness. Insecurities once absent started to show themselves, consequently leading to a considerable decline in my self confidence. This, sequentially became the source of my anxiety that would stay with me in the years to come. Doubting my own thoughts and questioning my mind nearly became second nature. It's been five years since anxiety found its way into my life. The mental toll it took on me caused my wellbeing to steadily deteriorate. Recently, I have decided that I no longer wanted to live under its weight, and I made a resolution to start taking steps towards overcoming it.
            </p>
            <p>
              With those being said, my learning goal is to grasp the diversified nature of self-improvement by investigating how small, consistent changes in daily habits and mindset can lead to long-term positive outcomes in both physical and mental health. I aim to understand how self-improvement can help reduce insecurities, increase confidence, and improve overall life quality. I will research the intricacies of self-improvement and the general principles of it, which I'll be mostly focused on, research the habits and characteristics of successful individuals, such as millionaires and entrepreneurs, to analyze what contributes/contributed to their success. I also plan to seek perspectives from people around me and evaluate how different self-improvement strategies affect personal growth. Through this process, I hope to develop a deeper understanding of how I can apply these insights to my own life and share them with others who face similar challenges.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Self-improvement research aims to transform personal struggles with anxiety into practical strategies for growth and fulfillment." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              next={{ label: "Product Goal", path: "/product-goal" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
