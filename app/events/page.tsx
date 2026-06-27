import { createMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/section-header";
import { EventCard } from "@/components/event-card";
import { FadeIn } from "@/components/fade-in";
import { upcomingEvents, pastEvents } from "@/data/mock-data";

export const metadata = createMetadata({
  title: "Events",
  description:
    "Upcoming and past events featuring the Calgary Ismaili Youth Flute Band — performances, parades, and community gatherings.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Events
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Join us at upcoming performances or explore our past community
              appearances.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Upcoming Events"
              subtitle="Mark your calendar and come see us perform."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <FadeIn key={event.id} delay={index * 0.1}>
                <EventCard event={event} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Past Events"
              subtitle="A look back at our community performances."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <FadeIn key={event.id} delay={index * 0.1}>
                <EventCard event={event} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
