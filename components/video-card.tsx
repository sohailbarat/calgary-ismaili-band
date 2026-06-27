import { Card, CardContent } from "@/components/ui/card";
import { VideoPlayer } from "@/components/video-player";
import type { Video } from "@/types";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-black">
        <VideoPlayer
          src={video.src}
          youtubeId={video.youtubeId}
          title={video.title}
          className="h-full w-full object-cover"
          startTime={video.startTime}
          muted={video.muted}
        />
      </div>
      <CardContent className="p-5">
        <h3 className="font-serif text-lg font-semibold">{video.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{video.description}</p>
      </CardContent>
    </Card>
  );
}
