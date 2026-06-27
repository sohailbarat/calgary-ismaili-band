import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { StatCounter } from "@/components/stat-counter";
import { InstrumentCard } from "@/components/instrument-card";
import { VideoCard } from "@/components/video-card";
import { EventCardLink } from "@/components/event-card";
import { CTASection } from "@/components/cta-section";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { bandImages } from "@/lib/band-images";
import {
  stats,
  instruments,
  featuredVideos,
  upcomingEvents,
} from "@/data/mock-data";

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Preserving Tradition. Inspiring Youth. Serving Community."
        subheadline="The Calgary Ismaili Youth Flute Band is a volunteer-led musical organization dedicated to teaching youth and performing for the community."
        primaryCta={{ label: "Learn More", href: "/about" }}
        secondaryCta={{ label: "Book the Band", href: "/book-the-band" }}
      />

      <section className="bg-primary py-20" aria-labelledby="impact-heading">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Our Impact"
              subtitle="Making a difference in Calgary through music, education, and community service."
              light
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                displayText={stat.displayText}
                light
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="about-preview-heading">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={bandImages.marchingBandGroup}
                  alt="Calgary Ismaili Youth Flute Band group photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeader
                title="About the Band"
                subtitle="For over 15 years, our volunteer musicians have been preserving cultural traditions while inspiring the next generation of performers in Calgary."
                centered={false}
              />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The Calgary Ismaili Youth Flute Band brings together passionate
                volunteers who share a love of music and community service. From
                weekly training sessions for youth and adults to performances at
                festivals, ceremonies, and cultural celebrations — we are proud
                to serve our community.
              </p>
              <Button asChild className="mt-8">
                <Link href="/about">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20" aria-labelledby="instruments-heading">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Our Instruments"
              subtitle="Learn flute, snare drum, bass drum, or triangle with our experienced volunteer instructors."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {instruments.map((instrument, index) => (
              <FadeIn key={instrument.slug} delay={index * 0.1}>
                <InstrumentCard instrument={instrument} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="videos-heading">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Featured Videos"
              subtitle="Watch our performances and training highlights."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((video, index) => (
              <FadeIn key={video.id} delay={index * 0.1}>
                <VideoCard video={video} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/videos">View All Videos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20" aria-labelledby="events-heading">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Upcoming Events"
              subtitle="Join us at our next performance or community gathering."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <FadeIn key={event.id} delay={index * 0.1}>
                <EventCardLink event={event} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
