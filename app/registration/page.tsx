import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { ClipboardX } from "lucide-react";

export const metadata = createMetadata({
  title: "Student Registration",
  description:
    "Student registration information for the Calgary Ismaili Youth Flute Band training programs.",
  path: "/registration",
});

export default function RegistrationPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Student Registration
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-lg rounded-xl border border-border bg-muted/50 p-12 text-center">
              <ClipboardX
                className="mx-auto h-16 w-16 text-muted-foreground"
                aria-hidden="true"
              />
              <h2 className="mt-6 font-serif text-2xl font-semibold">
                Registration Currently Closed
              </h2>
              <p className="mt-4 text-muted-foreground">
                Registration is currently closed. Please check back for future
                intake announcements or contact us for additional information.
              </p>
              <Button asChild className="mt-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
