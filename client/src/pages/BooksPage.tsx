import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import { PrevNextNav } from "@/components/PrevNextNav";
import atomicHabitsImg from "@assets/IMG_1849_1763374060516.jpeg";
import powerOfHabitImg from "@assets/IMG_1850_1763374060516.jpeg";
import thinkingFastSlowImg from "@assets/IMG_1851_1763374060516.jpeg";
import practicingMindImg from "@assets/IMG_1852_1763374060516.jpeg";
import compoundEffectImg from "@assets/IMG_1853_1763374060516.jpeg";
import influenceImg from "@assets/IMG_1854_1763374060516.jpeg";
import happinessAdvantageImg from "@assets/IMG_1856_1763375358303.jpeg";
import stumblingHappinessImg from "@assets/IMG_1857_1763375358303.jpeg";
import artOfPossibilityImg from "@assets/IMG_1858_1763375358303.jpeg";
import artOfLearningImg from "@assets/IMG_1860_1763375358303.jpeg";
import tenPercentHappierImg from "@assets/IMG_1861_1763375358303.jpeg";
import manualForLivingImg from "@assets/IMG_1862_1763375358303.jpeg";
import superhumanByHabitImg from "@assets/IMG_1863_1763375729790.jpeg";
import loveYourselfImg from "@assets/IMG_1864_1763375941511.jpeg";
import whatGotYouHereImg from "@assets/IMG_1865_1763375941511.jpeg";
import whoMovedCheeseImg from "@assets/IMG_1866_1763375941511.jpeg";
import miracleMorningImg from "@assets/IMG_1867_1763375941511.jpeg";
import richestManBabylonImg from "@assets/IMG_1868_1763375941511.jpeg";
import shortGuideHappyLifeImg from "@assets/IMG_1869_1763375941511.jpeg";

interface Book {
  title: string;
  author: string;
  link: string;
  description: string;
  image: string;
  featured?: boolean;
}

const books: Book[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    link: "https://jamesclear.com/atomic-habits",
    description: "The foundation of this project. Learn how tiny changes can lead to remarkable results through the power of atomic habits and the Four Laws of Behavior Change.",
    image: atomicHabitsImg,
    featured: true,
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    link: "https://jamesclear.com/book/the-power-of-habit",
    description: "Discover why habits exist and how they can be transformed. Essential reading for understanding the science behind habit formation.",
    image: powerOfHabitImg,
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    link: "https://jamesclear.com/book/thinking-fast-and-slow",
    description: "Nobel Prize winner Daniel Kahneman reveals the two systems that drive the way we think and make decisions.",
    image: thinkingFastSlowImg,
  },
  {
    title: "The Practicing Mind",
    author: "Thomas M. Sterner",
    link: "https://jamesclear.com/book/the-practicing-mind",
    description: "Develop focus and discipline by learning to appreciate the process rather than being fixated on the product.",
    image: practicingMindImg,
  },
  {
    title: "The Compound Effect",
    author: "Darren Hardy",
    link: "https://jamesclear.com/book/the-compound-effect",
    description: "Small, smart choices made consistently over time create radical differences in your life.",
    image: compoundEffectImg,
  },
  {
    title: "Influence: The Psychology of Persuasion",
    author: "Robert Cialdini",
    link: "https://jamesclear.com/book/influence",
    description: "Master the six universal principles of influence that guide human behavior and decision-making.",
    image: influenceImg,
  },
  {
    title: "The Happiness Advantage",
    author: "Shawn Achor",
    link: "https://jamesclear.com/book/the-happiness-advantage",
    description: "Seven principles of positive psychology that fuel success and performance at work and in life.",
    image: happinessAdvantageImg,
  },
  {
    title: "Stumbling on Happiness",
    author: "Dan Gilbert",
    link: "https://jamesclear.com/book/stumbling-on-happiness",
    description: "Why we make the choices we do and what we can do to make better predictions about our future happiness.",
    image: stumblingHappinessImg,
  },
  {
    title: "The Art of Possibility",
    author: "Rosamund Zander & Benjamin Zander",
    link: "https://jamesclear.com/book/the-art-of-possibility",
    description: "Transform professional and personal life by adopting twelve breakthrough practices for bringing creativity and passion into all your endeavors.",
    image: artOfPossibilityImg,
  },
  {
    title: "Superhuman by Habit",
    author: "Tynan",
    link: "https://jamesclear.com/book/superhuman-by-habit",
    description: "A practical guide to building habits that stick and transforming your life one habit at a time.",
    image: superhumanByHabitImg,
  },
  {
    title: "The Art of Learning",
    author: "Josh Waitzkin",
    link: "https://jamesclear.com/book/the-art-of-learning",
    description: "An inner journey to optimal performance by a chess prodigy and martial arts champion.",
    image: artOfLearningImg,
  },
  {
    title: "10% Happier",
    author: "Dan Harris",
    link: "https://jamesclear.com/book/10-percent-happier",
    description: "How a skeptical newscaster found meditation and became 10% happier, proving mindfulness works for anyone.",
    image: tenPercentHappierImg,
  },
  {
    title: "Manual for Living",
    author: "Epictetus",
    link: "https://jamesclear.com/book/manual-for-living",
    description: "Ancient Stoic wisdom offering practical guidance for living a good life through self-discipline and rational thinking.",
    image: manualForLivingImg,
  },
  {
    title: "Love Yourself Like Your Life Depends On It",
    author: "Kamal Ravikant",
    link: "https://jamesclear.com/book/love-yourself-like-your-life-depends-on-it",
    description: "A simple yet powerful practice of self-love that can transform your life from the inside out.",
    image: loveYourselfImg,
  },
  {
    title: "What Got You Here Won't Get You There",
    author: "Marshall Goldsmith",
    link: "https://jamesclear.com/book/what-got-you-here-wont-get-you-there",
    description: "Discover the 20 habits holding you back from the next level of success and how to overcome them.",
    image: whatGotYouHereImg,
  },
  {
    title: "Who Moved My Cheese?",
    author: "Spencer Johnson",
    link: "https://jamesclear.com/book/who-moved-my-cheese",
    description: "A simple parable that reveals profound truths about dealing with change in work and life.",
    image: whoMovedCheeseImg,
  },
  {
    title: "The Miracle Morning",
    author: "Hal Elrod",
    link: "https://jamesclear.com/book/the-miracle-morning",
    description: "Transform your life before 8AM with six simple practices that create extraordinary results.",
    image: miracleMorningImg,
  },
  {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    link: "https://jamesclear.com/book/the-richest-man-in-babylon",
    description: "Timeless financial wisdom told through parables set in ancient Babylon about saving and wealth building.",
    image: richestManBabylonImg,
  },
  {
    title: "A Short Guide to a Happy Life",
    author: "Anna Quindlen",
    link: "https://jamesclear.com/book/a-short-guide-to-a-happy-life",
    description: "Brief but powerful reflections on living a meaningful, joyful life by embracing what truly matters.",
    image: shortGuideHappyLifeImg,
  },
];

export default function BooksPage() {
  const featuredBook = books.find(book => book.featured);
  const otherBooks = books.filter(book => !book.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Recommended Reading for Self-Improvement"
        description="19 carefully curated book recommendations for personal growth, habit formation, and self-improvement based on James Clear's reading list."
        path="/recommended-reading"
      />

      <main className="flex-1">
        <HeroSection title="Recommended Reading">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            19 transformative books to guide your self-improvement journey
          </p>
        </HeroSection>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Recommended Reading" },
            ]}
          />

          <ContentCard className="mt-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Building Your Self-Improvement Library</h2>
            </div>

            <p className="text-muted-foreground mb-6">
              This curated collection features 19 essential books on habits, psychology, and personal development. 
              Each book has been carefully selected from <a href="https://jamesclear.com/best-books" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">James Clear's reading list</a> for 
              its practical wisdom and transformative insights. Whether you're just starting your self-improvement 
              journey or looking to deepen your understanding, these books provide evidence-based strategies and 
              timeless principles for sustainable growth.
            </p>
          </ContentCard>

          {/* Featured Book */}
          {featuredBook && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Foundation of This Project</h3>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-muted/30 flex items-center justify-center p-6">
                    <img
                      src={featuredBook.image}
                      alt={`${featuredBook.title} cover`}
                      className="w-full max-w-[200px] h-auto object-cover rounded-md shadow-lg"
                      data-testid={`img-book-cover-featured`}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl" data-testid="text-book-title-featured">
                        {featuredBook.title}
                      </CardTitle>
                      <CardDescription className="text-base" data-testid="text-book-author-featured">
                        by {featuredBook.author}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4" data-testid="text-book-description-featured">
                        {featuredBook.description}
                      </p>
                      <Button asChild data-testid="button-view-book-featured">
                        <a href={featuredBook.link} target="_blank" rel="noopener noreferrer">
                          View Book <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Other Books Grid */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Essential Reading List</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherBooks.map((book, index) => (
                <Card key={index} className="flex flex-col h-full hover-elevate" data-testid={`card-book-${index}`}>
                  <div className="bg-muted/30 flex items-center justify-center p-4 h-48">
                    <img
                      src={book.image}
                      alt={`${book.title} cover`}
                      className="h-full w-auto object-contain rounded"
                      data-testid={`img-book-cover-${index}`}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2" data-testid={`text-book-title-${index}`}>
                      {book.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-book-author-${index}`}>
                      by {book.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 flex-1" data-testid={`text-book-description-${index}`}>
                      {book.description}
                    </p>
                    <Button variant="outline" size="sm" asChild data-testid={`button-view-book-${index}`}>
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        View Book <ExternalLink className="ml-2 w-3 h-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <ContentCard className="mt-12 bg-muted/30">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">Continue Your Learning</h3>
              <p className="text-muted-foreground mb-4">
                For more book recommendations and summaries, visit James Clear's comprehensive reading list.
              </p>
              <Button asChild data-testid="button-explore-more">
                <a href="https://jamesclear.com/best-books" target="_blank" rel="noopener noreferrer">
                  Explore More Books <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </ContentCard>

          <div className="mt-12">
            <PrevNextNav
              prev={{ label: "Everyday Strategies", path: "/q12-strategies" }}
              next={{ label: "Sources", path: "/sources" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
