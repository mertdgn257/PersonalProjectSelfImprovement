interface KeyTakeawayProps {
  text: string;
}

export function KeyTakeaway({ text }: KeyTakeawayProps) {
  return (
    <div
      className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg"
      data-testid="key-takeaway"
    >
      <p className="font-serif text-lg md:text-xl font-semibold text-foreground">
        {text}
      </p>
    </div>
  );
}
