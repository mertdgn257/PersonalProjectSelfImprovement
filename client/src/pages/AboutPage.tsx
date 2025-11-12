import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection title="About This Project" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: "About" }]} />

          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              An IB Personal Project exploring self-improvement through research, personal experience, and practical application.
            </p>
          </div>

          <ContentCard>
            <h2>IB Personal Project — Self-Improvement</h2>
            <p>
              This website represents a comprehensive exploration of self-improvement, combining theoretical research with personal experience and practical strategies. Created as part of the IB Middle Years Programme (MYP) Personal Project, this work investigates how small, consistent changes in daily habits and mindset can lead to long-term positive outcomes in both physical and mental health.
            </p>

            <h3>Project Scope</h3>
            <p>
              The research encompasses 12 focused questions exploring various aspects of self-improvement, from foundational concepts to practical applications. Each question examines a specific facet of personal development, drawing from psychological research, published works like "Atomic Habits" by James Clear, survey data, and personal experimentation.
            </p>

            <h3>Key Areas of Investigation</h3>
            <ul>
              <li>The fundamental nature of self-improvement and its psychological basis</li>
              <li>Motivation, success factors, and common challenges</li>
              <li>The role of small, consistent changes in creating lasting transformation</li>
              <li>The relationship between self-improvement and physical/mental health</li>
              <li>Building confidence and reducing insecurities through intentional growth</li>
              <li>Habits and characteristics of successful individuals</li>
              <li>Practical strategies for everyday application</li>
            </ul>

            <h3>Personal Connection</h3>
            <p>
              This project emerged from a personal journey with anxiety and self-doubt. Over five years of struggling with these challenges, I discovered that self-improvement isn't about achieving perfection or external success—it's about internal growth, self-awareness, and building resilience through small, consistent actions.
            </p>

            <h3>Project Goals</h3>
            <p>
              Beyond fulfilling academic requirements, this website aims to serve as a practical resource for others facing similar challenges. By sharing research findings alongside personal experiences, the goal is to demonstrate that meaningful change is accessible through small, sustainable habits rather than dramatic transformations.
            </p>

            <p>
              This project embodies the IB learner profile attributes of being reflective, principled, and caring—using personal challenges as a foundation for helping others on their own self-improvement journeys.
            </p>
          </ContentCard>

          <div className="mt-12">
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <p className="text-muted-foreground">
                Created by Mert as an IB Middle Years Programme Personal Project
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
