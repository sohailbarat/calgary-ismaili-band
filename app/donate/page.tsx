import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { ContactEmail, ContactPhone } from "@/components/contact-info";
import { Heart, Mail, Phone } from "lucide-react";

export const metadata = createMetadata({
  title: "Donate",
  description:
    "Support the Calgary Ismaili Pipe Band. Our donation platform is coming soon.",
  path: "/donate",
});

export default function DonatePage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Donate
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-lg rounded-xl border border-border bg-muted/50 p-12 text-center">
              <Heart
                className="mx-auto h-16 w-16 text-secondary"
                aria-hidden="true"
              />
              <h2 className="mt-6 font-serif text-3xl font-semibold">
                Coming Soon
              </h2>
              <p className="mt-4 text-muted-foreground">
                We are currently working on our donation platform. In the
                meantime, please reach out through our contact form.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  <ContactPhone />
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  <ContactEmail />
                </div>
              </div>

              <Button asChild variant="outline" className="mt-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
