"use client";

import { useRef } from "react";

interface VideoPlayerProps {
  title: string;
  src?: string;
  youtubeId?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  startTime?: number;
}

export function VideoPlayer({
  title,
  src,
  youtubeId,
  className,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  playsInline = true,
  startTime,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function applyStartTime() {
    if (startTime && videoRef.current) {
      videoRef.current.currentTime = startTime;
    }
  }

  if (src) {
    return (
      <video
        ref={videoRef}
        src={src}
        title={title}
        className={
          className ?? "aspect-video w-full rounded-lg bg-black object-cover"
        }
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline={playsInline}
        preload="metadata"
        onLoadedMetadata={applyStartTime}
      />
    );
  }

  if (youtubeId) {
    const params = new URLSearchParams();
    if (muted) params.set("mute", "1");
    if (startTime) params.set("start", String(startTime));
    const query = params.toString();

    return (
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}${query ? `?${query}` : ""}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={className ?? "aspect-video w-full rounded-lg"}
        loading="lazy"
      />
    );
  }

  return null;
}
