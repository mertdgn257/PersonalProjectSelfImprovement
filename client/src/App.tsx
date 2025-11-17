import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import HomePage from "@/pages/HomePage";
import LearningGoalPage from "@/pages/LearningGoalPage";
import ProductGoalPage from "@/pages/ProductGoalPage";
import WhatIsSelfImprovementPage from "@/pages/WhatIsSelfImprovementPage";
import Q2MotivationPage from "@/pages/Q2MotivationPage";
import Q3FactorsPage from "@/pages/Q3FactorsPage";
import Q4SmallChangesPage from "@/pages/Q4SmallChangesPage";
import Q5HealthPage from "@/pages/Q5HealthPage";
import Q6ConfidencePage from "@/pages/Q6ConfidencePage";
import Q7HabitsPage from "@/pages/Q7HabitsPage";
import Q8InvestmentPage from "@/pages/Q8InvestmentPage";
import Q9ChallengesPage from "@/pages/Q9ChallengesPage";
import Q10JourneyPage from "@/pages/Q10JourneyPage";
import Q11SurveyPage from "@/pages/Q11SurveyPage";
import Q12StrategiesPage from "@/pages/Q12StrategiesPage";
import EndNotesPage from "@/pages/EndNotesPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/learning-goal" component={LearningGoalPage} />
      <Route path="/product-goal" component={ProductGoalPage} />
      <Route path="/what-is-self-improvement" component={WhatIsSelfImprovementPage} />
      <Route path="/q2-motivation" component={Q2MotivationPage} />
      <Route path="/q3-factors" component={Q3FactorsPage} />
      <Route path="/q4-small-changes" component={Q4SmallChangesPage} />
      <Route path="/q5-health" component={Q5HealthPage} />
      <Route path="/q6-confidence" component={Q6ConfidencePage} />
      <Route path="/q7-habits" component={Q7HabitsPage} />
      <Route path="/q8-long-term-investment" component={Q8InvestmentPage} />
      <Route path="/q9-challenges" component={Q9ChallengesPage} />
      <Route path="/q10-4week-journey" component={Q10JourneyPage} />
      <Route path="/q11-survey" component={Q11SurveyPage} />
      <Route path="/q12-strategies" component={Q12StrategiesPage} />
      <Route path="/end-notes" component={EndNotesPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <PageLayout>
            <Router />
          </PageLayout>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
