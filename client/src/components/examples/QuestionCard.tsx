import { QuestionCard } from '../QuestionCard';

export default function QuestionCardExample() {
  return (
    <div className="max-w-sm">
      <QuestionCard
        number="Q1"
        title="What is self-improvement?"
        preview="Striving for a purposeful and worthwhile life starts most often with motivation-fueled devotion to self-improvement..."
        path="/what-is-self-improvement"
      />
    </div>
  );
}
