import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/fade-in";
import { TutorialCard } from "@/components/tutorial-card";
import { Button } from "@/components/ui/button";
import { tutorials } from "@/data/mock-data";

export function TrainingVideosSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeader
            title="Training Videos"
            subtitle="Watch volunteer-led lessons to support your practice at home."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tutorials.map((tutorial, index) => (
            <FadeIn key={tutorial.id} delay={index * 0.1}>
              <TutorialCard tutorial={tutorial} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/tutorials">View All Tutorials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
