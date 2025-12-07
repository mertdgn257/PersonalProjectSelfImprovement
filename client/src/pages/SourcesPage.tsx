import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { ExternalLink, Star } from "lucide-react";
import { PrevNextNav } from "@/components/PrevNextNav";

interface Source {
  id: number;
  citation: string;
  url: string;
  isMain?: boolean;
}

const sources: Source[] = [
  {
    id: 1,
    citation: 'Centers for Disease Control and Prevention. "Centers for Disease Control and Prevention." CDC',
    url: "https://www.cdc.gov",
    isMain: true,
  },
  {
    id: 2,
    citation: 'World Health Organization. "World Health Organization." WHO',
    url: "https://www.who.int",
    isMain: true,
  },
  {
    id: 3,
    citation: 'National Center for Biotechnology Information. "PubMed Central." National Library of Medicine',
    url: "https://pmc.ncbi.nlm.nih.gov",
    isMain: true,
  },
  {
    id: 4,
    citation: 'Clear, James. "James Clear." James Clear',
    url: "https://jamesclear.com",
    isMain: true,
  },
  {
    id: 5,
    citation: 'Medical News Today. "Medical News Today." Medical News Today',
    url: "https://www.medicalnewstoday.com",
    isMain: true,
  },
  {
    id: 6,
    citation: "ChatGPT. OpenAI",
    url: "https://chatgpt.com",
  },
  {
    id: 7,
    citation: '"The Difference Between Self-Improvement and Personal Development." Medium – The Orange Journal',
    url: "https://medium.com/the-orange-journal/the-difference-between-self-improvement-personal-development-the-definitive-answer-870860571ff5",
  },
  {
    id: 8,
    citation: 'Young, Scott H. "What Is Self-Improvement?" ScottHYoung.com',
    url: "https://www.scotthyoung.com/blog/2018/12/25/what-is-self-improvement/",
  },
  {
    id: 9,
    citation: 'Clear, James. "Self-Improvement." James Clear',
    url: "https://jamesclear.com/self-improvement",
  },
  {
    id: 10,
    citation: '"What Is Self-Improvement?" FocusKeeper',
    url: "https://focuskeeper.co/glossary/what-is-self-improvement",
  },
  {
    id: 11,
    citation: 'Thriveworks. "Self-Improvement Strategies." Thriveworks',
    url: "https://thriveworks.com/help-with/self-improvement/self-improvement-strategies/",
  },
  {
    id: 12,
    citation: '"Self-Improvement vs. Self-Development." Naluri',
    url: "https://www.naluri.life/community/articles/self-improvement-vs-self-development",
  },
  {
    id: 13,
    citation: '"Why Do Some People Become Obsessed with Self-Improvement?" Medium – Wholistique',
    url: "https://medium.com/wholistique/why-do-some-people-become-obsessed-with-self-improvement-e737fb11bab8",
  },
  {
    id: 14,
    citation: '"The Psychology of Self-Improvement." Achology',
    url: "https://achology.com/positive-psychology/the-psychology-of-self-improvement/",
  },
  {
    id: 15,
    citation: '"What Motivates People?" Tivazo',
    url: "https://tivazo.com/blogs/what-motivates-people/",
  },
  {
    id: 16,
    citation: '"What Motivates People for Self-Improvement?" Medium',
    url: "https://medium.com/@magical_watermelon_dolphin_275/what-motivates-people-for-self-improvement-e46836bbd39f",
  },
  {
    id: 17,
    citation: '"What Is Self-Determination Theory?" Verywell Mind',
    url: "https://www.verywellmind.com/what-is-self-determination-theory-2795387",
  },
  {
    id: 18,
    citation: 'Ryan, Richard M., and Edward L. Deci. "Intrinsic and Extrinsic Motivations: Classic Definitions and New Directions." Self-Determination Theory',
    url: "https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf",
  },
  {
    id: 19,
    citation: 'Bandura, Albert. "Self-Efficacy: Toward a Unifying Theory of Behavioral Change." Stanford University',
    url: "https://educational-innovation.sydney.edu.au/news/pdfs/Bandura%201977.pdf",
  },
  {
    id: 20,
    citation: 'Higgins, E. Tory. "Promotion and Prevention: Regulatory Focus as a Motivational Principle." Wabash College',
    url: "https://persweb.wabash.edu/facstaff/hortonr/articles%20for%20class/Higgins.pdf",
  },
  {
    id: 21,
    citation: '"Anxiety Disorders." StatPearls, National Center for Biotechnology Information',
    url: "https://www.ncbi.nlm.nih.gov/books/NBK556005/",
  },
  {
    id: 22,
    citation: '"Anxiety Disorders: Epidemiology, Pathophysiology, and Treatment." PubMed Central, National Library of Medicine',
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9340849/",
  },
  {
    id: 23,
    citation: 'Clear, James. "Atomic Habits Summary." James Clear',
    url: "https://jamesclear.com/atomic-habits-summary",
  },
  {
    id: 24,
    citation: '"Self-Determination Theory." Simply Psychology',
    url: "https://www.simplypsychology.org/self-determination-theory.html",
  },
  {
    id: 25,
    citation: '"Anxiety Disorders." Cleveland Clinic',
    url: "https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders",
  },
  {
    id: 26,
    citation: '"Anxiety Disorders." National Institute of Mental Health',
    url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
  },
  {
    id: 27,
    citation: '"Anxiety Disorders." National Alliance on Mental Illness',
    url: "https://www.nami.org/about-mental-illness/mental-health-conditions/anxiety-disorders/",
  },
  {
    id: 28,
    citation: '"11 Tips for Coping With an Anxiety Disorder." Mayo Clinic Health System',
    url: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/11-tips-for-coping-with-an-anxiety-disorder",
  },
  {
    id: 29,
    citation: '"Tips for Managing Anxiety." Anxiety & Depression Association of America',
    url: "https://adaa.org/tips",
  },
  {
    id: 30,
    citation: '"Overcoming Anxiety." AIA',
    url: "https://www.aia.com/en/health-wellness/healthy-living/healthy-mind/Overcoming-anxiety",
  },
  {
    id: 31,
    citation: '"Cyclic Sighing Can Help Breathe Away Anxiety." Stanford Medicine',
    url: "https://med.stanford.edu/news/insights/2023/02/cyclic-sighing-can-help-breathe-away-anxiety.html",
  },
  {
    id: 32,
    citation: '"The Power of Journaling for Managing Stress and Anxiety." The Supportive Care',
    url: "https://www.thesupportivecare.com/blog/the-power-of-journaling-for-managing-stress-and-anxiety",
  },
  {
    id: 33,
    citation: '"Caring for Your Mental Health." National Institute of Mental Health',
    url: "https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health",
  },
  {
    id: 34,
    citation: '"Write Your Anxieties Away." Harvard Health Publishing',
    url: "https://www.health.harvard.edu/blog/write-your-anxieties-away-2017101312551",
  },
  {
    id: 35,
    citation: '"Mental Wellness Apps." Bradley University Online',
    url: "https://onlinedegrees.bradley.edu/blog/mental-wellness-apps",
  },
  {
    id: 36,
    citation: '"COVID-19 Pandemic Triggers 25% Increase in Prevalence of Anxiety and Depression Worldwide." World Health Organization',
    url: "https://www.who.int/news/item/02-03-2022-covid-19-pandemic-triggers-25-increase-in-prevalence-of-anxiety-and-depression-worldwide",
  },
  {
    id: 37,
    citation: '"Anxiety and Panic Attacks: Self-Care." Mind',
    url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/self-care/",
  },
  {
    id: 38,
    citation: '"Anxiety and Panic Attacks: Anxiety Disorders." Mind',
    url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/anxiety-disorders/",
  },
  {
    id: 39,
    citation: '"Anxiety and Panic Attacks: Symptoms." Mind',
    url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/symptoms/",
  },
  {
    id: 40,
    citation: '"Social Anxiety Disorder: More Than Just Shyness." National Institute of Mental Health',
    url: "https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness",
  },
  {
    id: 41,
    citation: '"Anxiety." Medical News Today',
    url: "https://www.medicalnewstoday.com/search?q=anxiety%20diagnosis",
  },
  {
    id: 42,
    citation: '"Anxiety Exercises." Medical News Today',
    url: "https://www.medicalnewstoday.com/search?q=anxiety%20exercises",
  },
  {
    id: 43,
    citation: '"Anxiety Disorders." Medical News Today',
    url: "https://www.medicalnewstoday.com/search?q=Anxiety%20disorders",
  },
  {
    id: 44,
    citation: '"Journaling for Mental Health and Wellness." HelpGuide',
    url: "https://www.helpguide.org/mental-health/wellbeing/journaling-for-mental-health-and-wellness",
  },
  {
    id: 45,
    citation: '"Self-Care Tips to Prioritize Your Mental Health." HelpGuide',
    url: "https://www.helpguide.org/mental-health/wellbeing/self-care-tips-to-prioritize-your-mental-health",
  },
  {
    id: 46,
    citation: '"Self-Esteem." HelpGuide',
    url: "https://www.helpguide.org/mental-health/wellbeing/self-esteem",
  },
  {
    id: 47,
    citation: '"How to Build Confidence." HelpGuide',
    url: "https://www.helpguide.org/mental-health/wellbeing/how-to-build-confidence",
  },
  {
    id: 48,
    citation: '"Anxiety in Children and Teens." HelpGuide',
    url: "https://www.helpguide.org/mental-health/anxiety/anxiety-in-children-and-teens",
  },
  {
    id: 49,
    citation: '"Social Anxiety Disorder." HelpGuide',
    url: "https://www.helpguide.org/mental-health/anxiety/social-anxiety-disorder",
  },
  {
    id: 50,
    citation: 'Tracy, Brian. "How to Stay Motivated." Brian Tracy International',
    url: "https://www.briantracy.com/blog/personal-success/how-to-stay-motivated/",
  },
  {
    id: 51,
    citation: 'Tracy, Brian. "Positive Thinking." Brian Tracy International',
    url: "https://www.briantracy.com/blog/personal-success/positive-thinking/",
  },
  {
    id: 52,
    citation: 'Tracy, Brian. "Happy Life." Brian Tracy International',
    url: "https://www.briantracy.com/blog/personal-success/happy-life/",
  },
  {
    id: 53,
    citation: 'Tracy, Brian. "Goal Setting." Brian Tracy International',
    url: "https://www.briantracy.com/blog/personal-success/goal-setting/",
  },
  {
    id: 54,
    citation: '"Self-Care Strategies for Overall Stress Reduction." Verywell Mind',
    url: "https://www.verywellmind.com/self-care-strategies-overall-stress-reduction-3144729",
  },
  {
    id: 55,
    citation: '"What Is Motivation?" Verywell Mind',
    url: "https://www.verywellmind.com/what-is-motivation-2795378",
  },
  {
    id: 56,
    citation: '"Characteristics of Self-Actualized People." Verywell Mind',
    url: "https://www.verywellmind.com/characteristics-of-self-actualized-people-2795963",
  },
  {
    id: 57,
    citation: '"Self-Actualization." Simply Psychology',
    url: "https://www.simplypsychology.org/self-actualization.html",
  },
  {
    id: 58,
    citation: '"Self-Efficacy." Simply Psychology',
    url: "https://www.simplypsychology.org/self-efficacy.html",
  },
  {
    id: 59,
    citation: '"Habits of Successful People." Shopify',
    url: "https://www.shopify.com/blog/habits-of-successful-people",
  },
  {
    id: 60,
    citation: '"10 Habits of Self-Made Millionaires." Forbes',
    url: "https://www.forbes.com/sites/jackkelly/2023/12/15/10-habits-of-self-made-millionaires/",
  },
  {
    id: 61,
    citation: '"Habits of Millionaires and Billionaires." Ramsey Solutions',
    url: "https://www.ramseysolutions.com/retirement/habits-of-millionaires-and-billionaires",
  },
  {
    id: 62,
    citation: '"Stress." Centers for Disease Control and Prevention',
    url: "https://search.cdc.gov/search/?query=Stress%20How%20Right%20Now&dpage=1",
  },
  {
    id: 63,
    citation: '"How to Set Goals and Achieve Them." BetterUp',
    url: "https://www.betterup.com/blog/how-to-set-goals-and-achieve-them",
  },
  {
    id: 64,
    citation: '"Motivation and Goal Achievement." PubMed Central, National Library of Medicine',
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3444705/",
  },
  {
    id: 65,
    citation: '"Intrinsic Motivation and Psychological Well-Being." PubMed Central, National Library of Medicine',
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8157161/",
  },
  {
    id: 66,
    citation: '"Differences Between Extrinsic and Intrinsic Motivation." Verywell Mind',
    url: "https://www.verywellmind.com/differences-between-extrinsic-and-intrinsic-motivation-2795384",
  },
  {
    id: 67,
    citation: '"What Is Extrinsic Motivation?" Verywell Mind',
    url: "https://www.verywellmind.com/what-is-extrinsic-motivation-2795164",
  },
  {
    id: 68,
    citation: '"What Is Intrinsic Motivation?" Verywell Mind',
    url: "https://www.verywellmind.com/what-is-intrinsic-motivation-2795385",
  },
  {
    id: 69,
    citation: '"10 Daily Habits of Self-Made Millionaire Entrepreneurs." The Successful Founder',
    url: "https://thesuccessfulfounder.com/10-daily-habits-of-self-made-millionaire-entrepreneurs/",
  },
  {
    id: 70,
    citation: '"Understanding the Ideal Self." Psychology Today',
    url: "https://www.psychologytoday.com/us/blog/learning-to-lead/202412/understanding-the-ideal-self",
  },
  {
    id: 71,
    citation: '"Brain Food: January 1, 2023." Farnam Street',
    url: "https://fs.blog/brain-food/january-1-2023/",
  },
  {
    id: 72,
    citation: '"Habit Stacking." Farnam Street',
    url: "https://fs.blog/habit-stacking/",
  },
  {
    id: 73,
    citation: '"Everything You Need to Know About Habits." Farnam Street',
    url: "https://fs.blog/everything-you-need-to-know-about-habits-the-science-of-habit-formation-and-change/",
  },
  {
    id: 74,
    citation: '"An Attitude of Curiosity." Psychology Today',
    url: "https://www.psychologytoday.com/us/blog/the-edge-peak-performance-psychology/201411/an-attitude-of-curiosity",
  },
  {
    id: 75,
    citation: '"Knowledge Enthusiast." Knowledge Enthusiast',
    url: "https://knowledgeenthusiast.com",
  },
  {
    id: 76,
    citation: '"5 Tips to Manage Stress." Mayo Clinic Health System',
    url: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/5-tips-to-manage-stress",
  },
  {
    id: 77,
    citation: '"Anxiety Disorders." World Health Organization',
    url: "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
  },
  {
    id: 78,
    citation: '"Mental Disorders." World Health Organization',
    url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
  },
  {
    id: 79,
    citation: '"Over a Billion People Living with Mental Health Conditions." World Health Organization',
    url: "https://www.who.int/news/item/02-09-2025-over-a-billion-people-living-with-mental-health-conditions-services-require-urgent-scale-up",
  },
  {
    id: 80,
    citation: '"Facts & Statistics." Anxiety & Depression Association of America',
    url: "https://adaa.org/understanding-anxiety/facts-statistics",
  },
  {
    id: 81,
    citation: '"Stress in America: Mental Health Crisis." American Psychological Association',
    url: "https://www.apa.org/news/press/releases/stress/2020/sia-mental-health-crisis.pdf",
  },
  {
    id: 82,
    citation: '"Generalized Anxiety Disorder Statistics." National Institute of Mental Health',
    url: "https://www.nimh.nih.gov/health/statistics/generalized-anxiety-disorder",
  },
  {
    id: 83,
    citation: '"Social Anxiety Disorder Statistics." National Institute of Mental Health',
    url: "https://www.nimh.nih.gov/health/statistics/social-anxiety-disorder",
  },
  {
    id: 84,
    citation: '"Any Anxiety Disorder Statistics." National Institute of Mental Health',
    url: "https://www.nimh.nih.gov/health/statistics/any-anxiety-disorder",
  },
  {
    id: 85,
    citation: '"Anxiety and Depression: Global Prevalence." PubMed Central, National Library of Medicine',
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10612137/",
  },
  {
    id: 86,
    citation: '"Anxiety Disorders and Epidemiology." PubMed Central, National Library of Medicine',
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3184591/",
  },
  {
    id: 87,
    citation: '"Self-Esteem and Self-Confidence." University of Queensland',
    url: "https://my.uq.edu.au/information-and-services/student-support/health-and-wellbeing/self-help-resources/self-esteem-and-self-confidence",
  },
  {
    id: 88,
    citation: '"5 Life-Changing Benefits of Continuous Self-Improvement." Medium',
    url: "https://medium.com/@rgothlin/5-life-changing-benefits-of-continuous-self-improvement-dbc391eb74f2",
  },
  {
    id: 89,
    citation: '"Customer Confirmed." James Clear',
    url: "https://jamesclear.com/atomic-habits/customer-confirmed",
  },
];

export default function SourcesPage() {
  const mainSources = sources.filter((s) => s.isMain);
  const additionalSources = sources.filter((s) => !s.isMain);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Sources"
        description="Complete bibliography of sources used in this IB Personal Project on self-improvement, including academic papers, books, and authoritative health organizations."
        path="/sources"
      />
      <HeroSection title="Sources" />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Sources" }]} />

          <ContentCard className="mt-8">
            <p>
              This project draws from a wide range of authoritative sources including peer-reviewed research, government health organizations, and established experts in psychology and personal development. All citations follow MLA 8th edition format.
            </p>

            <h2 className="flex items-center gap-2 mt-8">
              <Star className="h-5 w-5 text-primary" />
              Main Sources
            </h2>
            <p className="text-muted-foreground mb-4">
              These five sources form the foundation of this research project.
            </p>

            <ol className="space-y-4 list-none pl-0" data-testid="main-sources-list">
              {mainSources.map((source) => (
                <li
                  key={source.id}
                  className="p-4 bg-primary/5 border border-primary/20 rounded-md"
                  data-testid={`source-main-${source.id}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="font-semibold text-primary mr-2">{source.id}.</span>
                      <span>{source.citation},</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline ml-1 inline-flex items-center gap-1"
                        data-testid={`link-source-${source.id}`}
                      >
                        {source.url}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-12">Additional Sources</h2>

            <ol className="space-y-3 list-none pl-0" start={6} data-testid="additional-sources-list">
              {additionalSources.map((source) => (
                <li
                  key={source.id}
                  className="py-2 border-b border-border last:border-0"
                  data-testid={`source-${source.id}`}
                >
                  <span className="font-medium text-muted-foreground mr-2">{source.id}.</span>
                  <span>{source.citation},</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-1 inline-flex items-center gap-1 break-all"
                    data-testid={`link-source-${source.id}`}
                  >
                    {source.url}
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ol>
          </ContentCard>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Recommended Reading", path: "/recommended-reading" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
