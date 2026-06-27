import { createMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/section-header";
import { GalleryGrid } from "@/components/gallery-grid";
import { FadeIn } from "@/components/fade-in";
import { galleryImages } from "@/data/mock-data";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Browse photos from Calgary Ismaili Pipe Band performances, training sessions, community events, and youth programs.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Moments from our performances, training, and community events.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Photo Gallery"
              subtitle="Filter by category to explore our collection."
            />
          </FadeIn>
          <div className="mt-12">
            <GalleryGrid images={galleryImages} />
          </div>
        </div>
      </section>
    </>
  );
}
