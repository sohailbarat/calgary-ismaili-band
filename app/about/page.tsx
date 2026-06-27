import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/fade-in";
import { Timeline } from "@/components/timeline";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bandImages } from "@/lib/band-images";
import { timelineMilestones, values } from "@/data/mock-data";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about the Calgary Ismaili Pipe Band — our story, mission, vision, and values serving the Calgary community through music.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              About Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Discover our story, mission, and the values that drive our
              volunteer-led organization.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeader title="Our Story" centered={false} />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Founded in 2010 by a group of dedicated volunteers, the Calgary
                Ismaili Pipe Band was born from a shared passion for musical
                tradition and community service. What began as a small gathering
                of musicians has grown into a vibrant organization that has
                trained over 100 students and performed at more than 200
                community events.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our band represents the rich cultural heritage of the Ismaili
                community while embracing the spirit of Calgary — a city built on
                diversity, volunteerism, and community connection. Every
                performance and training session is powered by the dedication
                of our volunteer instructors, parents, and supporters.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={bandImages.volunteers}
                  alt="Volunteer instructors and leaders of the Calgary Ismaili Pipe Band"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Our Members"
              subtitle="Youth and volunteers who make our band a vibrant part of the Calgary community."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={bandImages.marchingBandGroup}
                  alt="Full Calgary Ismaili Marching Band group photo with drums"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={bandImages.youthEnsemble}
                  alt="Youth musicians performing with recorders and drums"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn>
              <SectionHeader title="Our Mission" centered={false} />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To preserve and promote musical traditions while providing
                accessible music education to youth and adults. We serve the
                Calgary community through volunteer performances at cultural
                events, celebrations, and ceremonies — enriching the lives of
                those we reach.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeader title="Our Vision" centered={false} />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To inspire the next generation of musicians and community
                leaders through the discipline, teamwork, and joy of pipe band
                music. We envision a future where every young person in our
                community has the opportunity to discover their musical
                potential.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Our Values"
              subtitle="The principles that guide everything we do."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Our Timeline"
              subtitle="Key milestones in our journey."
            />
          </FadeIn>
          <div className="mt-16">
            <Timeline milestones={timelineMilestones} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
