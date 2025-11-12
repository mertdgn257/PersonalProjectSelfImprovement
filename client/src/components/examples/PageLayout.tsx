import { PageLayout } from '../PageLayout';

export default function PageLayoutExample() {
  return (
    <PageLayout>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Page Content</h1>
          <p className="text-muted-foreground">
            This is where page content would appear, wrapped with navigation and footer.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
