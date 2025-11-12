export function Footer() {
  const lastUpdated = new Date().toISOString().split('T')[0];
  
  return (
    <footer className="w-full border-t bg-muted/30 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p data-testid="text-footer">
            Project by Mert — Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
}
