import { Breadcrumbs } from '../Breadcrumbs';

export default function BreadcrumbsExample() {
  return (
    <Breadcrumbs
      items={[
        { label: "Questions", path: "/" },
        { label: "What is self-improvement?" }
      ]}
    />
  );
}
