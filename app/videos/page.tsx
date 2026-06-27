import { createMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/section-header";
import { VideoCard } from "@/components/video-card";
import { FadeIn } from "@/components/fade-in";
import { VideoPlayer } from "@/components/video-player";
import { featuredVideos } from "@/data/mock-data";

export const metadata = createMetadata({
  title: "Videos",
  description:
    "Watch Calgary Ismaili Pipe Band performances, training highlights, and community event videos.",
  path: "/videos",
});

export default function VideosPage() {
  const featured = featuredVideos.filter((v) => v.featured);

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Videos
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Performance highlights, training sessions, and community event
              recordings.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Featured Performances"
              subtitle="Our most memorable moments on stage and in the community."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((video, index) => (
              <FadeIn key={video.id} delay={index * 0.1}>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <VideoPlayer
                    src={video.src}
                    youtubeId={video.youtubeId}
                    title={video.title}
                    className="aspect-video w-full bg-black object-cover"
                    startTime={video.startTime}
                    muted={video.muted}
                  />
                  <div className="bg-muted p-6">
                    <h3 className="font-serif text-xl font-semibold">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader title="All Videos" />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((video, index) => (
              <FadeIn key={video.id} delay={index * 0.05}>
                <VideoCard video={video} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
