import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/section-header";
import { InstrumentCard } from "@/components/instrument-card";
import { FadeIn } from "@/components/fade-in";
import { CTASection } from "@/components/cta-section";
import { TrainingVideosSection } from "@/components/training-videos-section";
import { Button } from "@/components/ui/button";
import { instruments } from "@/data/mock-data";

export const metadata = createMetadata({
  title: "Learn",
  description:
    "Explore our training programs for flute, snare drum, bass drum, and triangle. Music education for youth and adults in Calgary.",
  path: "/learn",
});

export default function LearnPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Learn With Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Our volunteer-led training programs welcome youth and adults of
              all skill levels. Choose an instrument and start your musical
              journey.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Training Programs"
              subtitle="Weekly group sessions, experienced volunteer instructors, and a supportive community environment."
            />
          </FadeIn>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether you are picking up an instrument for the first time or
              looking to refine your skills, our programs are designed to meet
              you where you are. Students learn technique, ensemble playing,
              and the discipline that comes with being part of the youth flute band.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {instruments.map((instrument, index) => (
              <FadeIn key={instrument.slug} delay={index * 0.1}>
                <InstrumentCard instrument={instrument} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TrainingVideosSection />

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <SectionHeader
              title="Ready to Register?"
              subtitle="Registration opens periodically throughout the year."
            />
            <Button asChild className="mt-8">
              <Link href="/registration">Check Registration Status</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Have Questions?"
        description="Reach out to learn more about our programs, schedules, and how to get involved."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
