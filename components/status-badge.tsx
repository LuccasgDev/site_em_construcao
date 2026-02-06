export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
      </span>
      <span className="text-sm text-muted-foreground font-medium tracking-wide">
        Em desenvolvimento
      </span>
    </div>
  );
}
