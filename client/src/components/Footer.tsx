export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-secondary/30 mt-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer">
            Made by IB Middle Years Programme Student Mert Doğan
          </p>
          <p className="text-xs text-muted-foreground/70">
            IB Personal Project {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
