import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { PrevNextNav } from "@/components/PrevNextNav";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const familiarityData = [
  { name: 'Extremely Familiar', value: 11, percentage: '31%' },
  { name: 'Quite Familiar', value: 15, percentage: '42%' },
  { name: 'Moderately Familiar', value: 9, percentage: '25%' },
  { name: 'Slightly Familiar', value: 1, percentage: '3%' },
];

const importanceData = [
  { name: 'Essential/Vital', value: 8 },
  { name: 'Very Important', value: 25 },
  { name: 'Moderately Important', value: 3 },
];

const topAreasData = [
  { area: 'Mental Health', count: 28 },
  { area: 'Confidence & Emotional Balance', count: 21 },
  { area: 'Productivity & Discipline', count: 17 },
  { area: 'Social Relationships', count: 14 },
  { area: 'Physical Health', count: 13 },
];

const effectivenessData = [
  { category: 'Mental Health', rating: 3.9 },
  { category: 'Self-Confidence', rating: 3.8 },
  { category: 'Daily Productivity', rating: 3.7 },
  { category: 'Stress Reduction', rating: 3.8 },
  { category: 'Life Satisfaction', rating: 3.9 },
];

const impactData = [
  { name: 'Significant Improvement', value: 22, percentage: '61%' },
  { name: 'Slight Improvement', value: 13, percentage: '36%' },
  { name: 'No Change', value: 1, percentage: '3%' },
];

const practiceAdoptionData = [
  { name: 'Yes, I Practice', value: 35, percentage: '97%' },
  { name: 'No', value: 1, percentage: '3%' },
];

const consistencyData = [
  { name: 'Lifestyle Integration', value: 2 },
  { name: 'Quite Consistent', value: 9 },
  { name: 'Moderately Consistent', value: 21 },
  { name: 'Occasionally Try', value: 4 },
];

const COLORS = ['#0EA5A4', '#0F172A', '#64748b', '#94a3b8'];

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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-survey-intro">
              Results from 36 respondents sharing their experiences with self-improvement practices, effectiveness ratings, and personal insights.
            </p>
          </div>

          <ContentCard>
            <h2>Survey Overview</h2>
            <p>
              The survey captured insights from individuals at various stages of their self-improvement journey, revealing common patterns in motivation, practice, and outcomes.
            </p>
          </ContentCard>

          <ContentCard>
            <h2>Familiarity with Self-Improvement</h2>
            <p className="mb-6">
              Most respondents were already well-acquainted with personal development concepts, with 73% reporting they were quite or extremely familiar with the topic.
            </p>
            <div data-testid="chart-familiarity">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={familiarityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name}: ${percentage}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {familiarityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ContentCard>

          <ContentCard>
            <h2>Perceived Importance</h2>
            <p className="mb-6">
              An overwhelming majority (92%) rated personal development as very important or essential to living a satisfying life.
            </p>
            <div data-testid="chart-importance">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={importanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0EA5A4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ContentCard>

          <ContentCard>
            <h2>Practice Adoption</h2>
            <p className="mb-6">
              Nearly all respondents (97%) actively practice self-improvement techniques in their daily lives, demonstrating widespread adoption of personal development habits.
            </p>
            <div data-testid="chart-adoption">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={practiceAdoptionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name}: ${percentage}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {practiceAdoptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ContentCard>

          <ContentCard>
            <h2>Consistency Levels</h2>
            <p className="mb-6">
              Most respondents (58%) maintain moderate consistency with their self-improvement practices, while 25% report being quite consistent, and 6% have fully integrated these habits into their lifestyle.
            </p>
            <div data-testid="chart-consistency">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={consistencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0F172A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ContentCard>

          <ContentCard>
            <h2>Most Important Development Areas</h2>
            <p className="mb-6">
              When asked to identify the most important areas for personal development, respondents prioritized mental wellbeing, emotional balance, and productivity.
            </p>
            <div data-testid="chart-areas">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={topAreasData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="area" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#0F172A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ContentCard>

          <ContentCard>
            <h2>Effectiveness Ratings</h2>
            <p className="mb-6">
              Participants rated how effective their self-improvement habits were across different life areas on a scale of 1-5. All categories scored highly, averaging between 3.7-3.9.
            </p>
            <div data-testid="chart-effectiveness">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={effectivenessData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rating" fill="#0EA5A4" name="Average Rating (out of 5)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ContentCard>

          <ContentCard>
            <h2>Impact on Confidence & Anxiety</h2>
            <p className="mb-6">
              97% of respondents reported noticeable improvements in confidence levels and reductions in anxiety after implementing self-improvement practices.
            </p>
            <div data-testid="chart-impact">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={impactData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name}: ${percentage}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ContentCard>

          <ContentCard>
            <h2>Common Challenges</h2>
            <p>
              While most participants found success with their self-improvement journey, they identified several recurring obstacles:
            </p>
            <ul>
              <li><strong>Time Management:</strong> Finding consistent time amidst work and daily responsibilities</li>
              <li><strong>Maintaining Consistency:</strong> Starting strong but struggling to maintain momentum</li>
              <li><strong>Motivation:</strong> Losing drive during difficult periods or when progress feels slow</li>
              <li><strong>Resistance to Change:</strong> Overcoming ingrained habits and comfort zones</li>
              <li><strong>Self-Doubt:</strong> Believing change isn't possible or won't be effective</li>
            </ul>
          </ContentCard>

          <ContentCard>
            <h2>Key Insights</h2>
            <h3>What Motivates People?</h3>
            <p>
              The most common motivations were: desire for a better quality of life, health concerns, managing stress, achieving future goals, and personal experiences that prompted reflection.
            </p>

            <h3>Most Popular Practices</h3>
            <p>
              Respondents most frequently engaged in: physical exercise, mindfulness/meditation, journaling, reading, stress management techniques, and social skill development.
            </p>

            <h3>Internal vs. External Focus</h3>
            <p>
              Interestingly, 75% of respondents valued both internal growth (self-awareness, mental health) and external success (career, finances) equally, showing a holistic approach to development.
            </p>

            <h3>Advice for Beginners</h3>
            <p>
              Common advice from experienced practitioners included: start small, be consistent, don't rush the process, focus on discipline over motivation, take the first step without fear, and remember that self-improvement is a journey, not a destination.
            </p>
          </ContentCard>

          <div className="mt-8">
            <KeyTakeaway text="Survey data confirms that self-improvement practices lead to measurable improvements in mental health (3.9/5), confidence (3.8/5), and life satisfaction (3.9/5), with 97% of participants reporting reduced anxiety and increased confidence." />
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
