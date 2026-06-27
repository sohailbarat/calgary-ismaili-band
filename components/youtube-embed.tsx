interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YoutubeEmbed({ videoId, title, className }: YoutubeEmbedProps) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={className ?? "aspect-video w-full rounded-lg"}
      loading="lazy"
    />
  );
}
