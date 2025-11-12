import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";

export default function Q11SurveyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Q11: Survey Results"
        description="Insights from people's experiences with self-improvement, revealing common practices, effectiveness ratings, and challenges they face."
        path="/q11-survey"
      />
      <HeroSection title="Survey Results" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Questions", path: "/" }, { label: "Q11: Survey" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Insights from people's experiences with self-improvement, revealing common practices, effectiveness, and challenges.
            </p>
          </div>

          <ContentCard>
            <p>
              The survey results show that most people see self-improvement as something deeply personal — a journey that helps them feel more in control, happier, and more confident in their everyday lives. Many described it not as a race to success, but as a slow, steady process of becoming a better version of themselves.
            </p>
            <p>
              When asked what self-improvement meant to them, most participants said it was about finding balance, overcoming anxiety, and learning discipline. A few said it was simply about feeling proud of small wins — like reading a few pages every day or staying calm under stress.
            </p>

            <h3>How people view progress</h3>
            <p>
              Nearly everyone who took the survey had tried at least one self-improvement activity. The most common ones were journaling, exercising, reading, and mindfulness. Most said these practices helped them think more clearly, manage stress, and feel better about themselves.
            </p>
            <p>When asked how effective self-improvement was in their daily life, participants rated it on average:</p>
            <ul>
              <li>3.9 / 5 for improving happiness and life satisfaction</li>
              <li>3.8 / 5 for reducing stress and anxiety</li>
              <li>3.7 / 5 for increasing productivity</li>
            </ul>
            <p>In other words, most people genuinely felt that even small habits made a noticeable difference.</p>

            <h3>What people struggle with</h3>
            <p>
              Even though the majority felt positive about their journey, keeping habits consistent was one of the biggest challenges. Some said they "start strong but lose motivation," while others mentioned time management and distraction as obstacles. Still, most respondents agreed that starting small and tracking progress helped them stay on track.
            </p>

            <h3>Overall takeaway</h3>
            <p>
              The survey showed that people don't view self-improvement as a quick fix — it's more like building a long-term relationship with yourself. Simple, repeated actions such as journaling or mindful breaks made them calmer, more disciplined, and more focused over time.
            </p>
            <p>
              In short, self-improvement helped participants think clearer, feel better, and live with more intention.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Survey participants confirm that simple, repeated self-improvement actions lead to noticeable improvements in happiness, stress management, and productivity." />
          </div>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "4-Week Journey", path: "/q10-4week-journey" }}
              next={{ label: "Everyday Strategies", path: "/q12-strategies" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
