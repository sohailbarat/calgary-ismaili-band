import { Card, CardContent } from "@/components/ui/card";
import { VideoPlayer } from "@/components/video-player";
import type { Tutorial } from "@/types";

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Card className="overflow-hidden">
      <VideoPlayer
        src={tutorial.src}
        youtubeId={tutorial.youtubeId}
        title={tutorial.title}
        startTime={tutorial.startTime}
        muted={tutorial.muted}
        className="aspect-video w-full bg-black object-cover"
      />
      <CardContent className="p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium capitalize text-primary">
            {tutorial.category}
          </span>
          {tutorial.instrument && (
            <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium capitalize text-secondary-foreground">
              {tutorial.instrument.replace("-", " ")}
            </span>
          )}
        </div>
        <h3 className="font-serif text-lg font-semibold">{tutorial.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {tutorial.description}
        </p>
      </CardContent>
    </Card>
  );
}
