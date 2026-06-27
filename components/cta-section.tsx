import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title = "Join Our Community",
  description = "Whether you want to learn an instrument, volunteer your time, or book us for your next event — we'd love to hear from you.",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-20" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2
            id="cta-heading"
            className="font-serif text-3xl font-bold text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {description}
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-8">
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
