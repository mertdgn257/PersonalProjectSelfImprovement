import { PrevNextNav } from '../PrevNextNav';

export default function PrevNextNavExample() {
  return (
    <PrevNextNav
      prev={{ label: "Learning Goal", path: "/learning-goal" }}
      next={{ label: "What motivates individuals?", path: "/q2-motivation" }}
    />
  );
}
