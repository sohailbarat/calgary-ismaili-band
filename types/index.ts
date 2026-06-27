export interface Instrument {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  beginnerInfo: string;
  faqs: { question: string; answer: string }[];
  galleryImages: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "upcoming" | "past";
  image: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId?: string;
  src?: string;
  featured?: boolean;
  /** Start playback at this time in seconds */
  startTime?: number;
  muted?: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  youtubeId?: string;
  src?: string;
  category: "beginner" | "intermediate" | "advanced";
  instrument?: string;
  startTime?: number;
  muted?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "performances" | "training" | "community-events" | "youth-programs";
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  value?: number;
  suffix?: string;
  label: string;
  displayText?: string;
}
