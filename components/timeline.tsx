import { FadeIn } from "@/components/fade-in";
import type { TimelineMilestone } from "@/types";

interface TimelineProps {
  milestones: TimelineMilestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <FadeIn key={milestone.year} delay={index * 0.1}>
            <div
              className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div
                className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-secondary md:left-1/2"
                aria-hidden="true"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                  {milestone.year}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
