interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <h2
        className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-secondary ${
          centered ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
