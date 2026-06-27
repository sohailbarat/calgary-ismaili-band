import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { bandVideos } from "@/lib/band-videos";
import { images } from "@/lib/placeholder-images";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  backgroundVideo?: string;
}

export function Hero({
  headline,
  subheadline,
  primaryCta = { label: "Learn More", href: "/about" },
  secondaryCta = { label: "Book the Band", href: "/book-the-band" },
  backgroundImage = images.hero,
  backgroundVideo = bandVideos.hero,
}: HeroProps) {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {backgroundVideo ? (
        <video
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
      ) : (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
            Calgary Ismaili Youth Flute Band
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="secondary" size="lg">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
