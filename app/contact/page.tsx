import { createMetadata, siteConfig } from "@/lib/metadata";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
import { ContactEmail, ContactPhone } from "@/components/contact-info";
import { FadeIn } from "@/components/fade-in";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with the Calgary Ismaili Pipe Band. Questions about training, bookings, or volunteering.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              We would love to hear from you. Send us a message and a volunteer
              will get back to you soon.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeader title="Send a Message" centered={false} />
              <div className="mt-8">
                <ContactForm />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <SectionHeader title="Get in Touch" centered={false} />
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <ContactPhone
                      linkClassName="text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <ContactEmail
                      linkClassName="text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Practice Location</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.practiceLocation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-xl border border-border">
                <div
                  className="flex h-64 items-center justify-center bg-muted"
                  role="img"
                  aria-label="Map placeholder showing Calgary, Alberta"
                >
                  <div className="text-center text-muted-foreground">
                    <MapPin className="mx-auto h-8 w-8" aria-hidden="true" />
                    <p className="mt-2 text-sm">Google Map Placeholder</p>
                    <p className="text-xs">Calgary, Alberta, Canada</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
