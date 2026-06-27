import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/fade-in";
import { TutorialCard } from "@/components/tutorial-card";
import { CTASection } from "@/components/cta-section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTutorialsForInstrument } from "@/data/mock-data";
import type { Instrument } from "@/types";

interface InstrumentPageContentProps {
  instrument: Instrument;
}

export function InstrumentPageContent({ instrument }: InstrumentPageContentProps) {
  const instrumentTutorials = getTutorialsForInstrument(instrument.slug);

  return (
    <>
      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              {instrument.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              {instrument.shortDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={instrument.image}
                  alt={instrument.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeader title="Overview" centered={false} />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {instrument.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Beginner Information"
              subtitle="Everything you need to know to get started."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
              {instrument.beginnerInfo}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Tutorial Videos"
              subtitle="Training lessons to help you get started."
            />
          </FadeIn>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6">
            {instrumentTutorials.map((tutorial, index) => (
              <FadeIn key={tutorial.id} delay={index * 0.1}>
                <TutorialCard tutorial={tutorial} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader title="Photo Gallery" />
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {instrument.galleryImages.map((src, index) => (
              <FadeIn key={src} delay={index * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`${instrument.name} gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Common questions about learning the instrument."
            />
          </FadeIn>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {instrument.faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Learn?"
        description="Contact us to learn more about training programs and upcoming intake periods."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
