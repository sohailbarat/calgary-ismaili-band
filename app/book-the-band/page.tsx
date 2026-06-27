import { createMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/section-header";
import { BookingForm } from "@/components/booking-form";
import { FadeIn } from "@/components/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bookReasons, eventTypes } from "@/data/mock-data";
import { Calendar, Users, MapPin, Music } from "lucide-react";

export const metadata = createMetadata({
  title: "Book the Band",
  description:
    "Request the Calgary Ismaili Pipe Band for your community event, celebration, ceremony, or cultural program.",
  path: "/book-the-band",
});

export default function BookTheBandPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Book the Band
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Bring the energy and tradition of the Calgary Ismaili Pipe Band
              to your next event.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Why Book Us?"
              subtitle="Professional performances powered by passionate volunteers."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bookReasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Music className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
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
              title="Event Types We Serve"
              subtitle="We perform at a wide range of community occasions."
            />
          </FadeIn>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {eventTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4 rounded-xl bg-background p-6">
                <Calendar className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Flexible Scheduling</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We work with your event timeline to deliver the perfect
                    performance.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-start gap-4 rounded-xl bg-background p-6">
                <MapPin className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Calgary & Surrounding Areas</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Available for events throughout Calgary and nearby
                    communities.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex items-start gap-4 rounded-xl bg-background p-6">
                <Users className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">All Audience Sizes</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    From intimate gatherings to large community festivals.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Booking Request Form"
              subtitle="Fill out the form below and a volunteer representative will contact you."
            />
          </FadeIn>
          <div className="mx-auto mt-12 max-w-2xl">
            <FadeIn delay={0.2}>
              <BookingForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
