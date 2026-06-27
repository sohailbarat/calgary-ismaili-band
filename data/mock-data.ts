import type {
  Event,
  GalleryImage,
  Instrument,
  Stat,
  TimelineMilestone,
  Tutorial,
  Video,
} from "@/types";
import { images, bandImages } from "@/lib/placeholder-images";
import { bandVideos } from "@/lib/band-videos";

export const stats: Stat[] = [
  { value: 100, suffix: "+", label: "Students Trained" },
  { value: 15, suffix: "+", label: "Years of Service" },
  { value: 200, suffix: "+", label: "Performances" },
  { displayText: "Always", label: "Volunteer Driven" },
];

export const instruments: Instrument[] = [
  {
    slug: "flute",
    name: "Flute",
    shortDescription:
      "Learn the melodic heart of the youth flute band with traditional and contemporary flute techniques.",
    description:
      "The flute section carries the melodic voice of the Calgary Ismaili Youth Flute Band. Students learn breath control, finger technique, and the rich repertoire of traditional and contemporary pieces that bring our performances to life.",
    image: images.flute,
    beginnerInfo:
      "No prior musical experience is required. Beginners start with basic scales, posture, and simple melodies. Our volunteer instructors provide one-on-one and group instruction tailored to each student's pace.",
    faqs: [
      {
        question: "Do I need to own a flute before joining?",
        answer:
          "No. The band provides instruments for practice sessions. We recommend purchasing your own instrument once you have committed to regular training.",
      },
      {
        question: "What age can students start?",
        answer:
          "We welcome youth from age 8 and up, as well as adult learners. Our programs are designed to accommodate all ages and skill levels.",
      },
      {
        question: "How often are flute lessons?",
        answer:
          "Flute students typically attend weekly group sessions plus optional individual practice times on weekends.",
      },
    ],
    galleryImages: [
      bandImages.performanceRecorders,
      bandImages.youthEnsemble,
      bandImages.marchingBandGroup,
    ],
  },
  {
    slug: "snare-drum",
    name: "Snare Drum",
    shortDescription:
      "Master precision drumming with traditional Scottish snare techniques and marching rhythms.",
    description:
      "The snare drum provides the crisp, driving rhythm that powers every band performance. Students develop stick technique, rudiments, and the discipline required for synchronized marching.",
    image: images.snare,
    beginnerInfo:
      "Beginners learn basic grip, stick control, and fundamental rudiments. Progression includes marching patterns and ensemble coordination with the full band.",
    faqs: [
      {
        question: "Is snare drum physically demanding?",
        answer:
          "Snare drumming requires good hand coordination and stamina. Our instructors build strength gradually through structured practice routines.",
      },
      {
        question: "Can I switch from another instrument?",
        answer:
          "Yes. Many of our drummers started on other instruments. Musical experience is helpful but not required.",
      },
      {
        question: "Do drummers march with the band?",
        answer:
          "Yes. Snare drummers are integral to our marching performances and parade appearances throughout Calgary.",
      },
    ],
    galleryImages: [
      bandImages.marchingBandGroup,
      bandImages.performanceRecorders,
      bandImages.youthEnsemble,
    ],
  },
  {
    slug: "bass-drum",
    name: "Bass Drum",
    shortDescription:
      "Provide the powerful foundation that anchors the band's rhythm and marching precision.",
    description:
      "The bass drum is the heartbeat of the band, delivering deep, resonant tones that unify the ensemble. Bass drummers learn timing, power control, and the art of supporting the entire band's sound.",
    image: images.bass,
    beginnerInfo:
      "Bass drum students focus on timing, mallet technique, and reading drum scores. Physical strength and steady rhythm are developed through progressive exercises.",
    faqs: [
      {
        question: "How large is the bass drum?",
        answer:
          "Our bass drums range from 28 to 32 inches. We provide all equipment for training and performances.",
      },
      {
        question: "Is bass drum suitable for younger students?",
        answer:
          "Bass drummers are typically age 12 and up due to the size of the instrument, though exceptions are made based on individual capability.",
      },
      {
        question: "How many bass drummers are in the band?",
        answer:
          "We typically field one to two bass drummers per performance, making it a focused and important role.",
      },
    ],
    galleryImages: [
      bandImages.marchingBandGroup,
      bandImages.performanceRecorders,
      bandImages.youthEnsemble,
    ],
  },
  {
    slug: "triangle",
    name: "Triangle",
    shortDescription:
      "Add delicate accents and texture to our ensemble with this unique percussion role.",
    description:
      "The triangle may be small, but its role in our ensemble adds sparkle and accent to performances. Triangle players learn timing, dynamics, and how to complement the broader percussion section.",
    image: images.triangle,
    beginnerInfo:
      "Triangle is often an excellent entry point for younger students. Basic rhythm, timing, and ensemble awareness are taught in a supportive group setting.",
    faqs: [
      {
        question: "Is triangle a good starting instrument?",
        answer:
          "Absolutely. The triangle teaches fundamental rhythm and timing skills that transfer to any percussion instrument.",
      },
      {
        question: "What age is appropriate for triangle?",
        answer:
          "Students as young as 6 can begin learning triangle, making it ideal for our youth development programs.",
      },
      {
        question: "Does triangle perform at all events?",
        answer:
          "Triangle players participate in select performances where their accents enhance the overall sound of the ensemble.",
      },
    ],
    galleryImages: [
      bandImages.youthTriangleFormation,
      bandImages.youthEnsemble,
      bandImages.marchingBandGroup,
    ],
  },
];

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Community Summer Festival",
    date: "2026-07-15",
    location: "Calgary City Centre",
    description:
      "Join us for a vibrant community celebration featuring traditional and contemporary performances.",
    type: "upcoming",
    image: bandImages.marchingBandGroup,
  },
  {
    id: "2",
    title: "Youth Training Showcase",
    date: "2026-08-22",
    location: "Ismaili Centre Calgary",
    description:
      "Our students demonstrate their progress in an inspiring evening of music and celebration.",
    type: "upcoming",
    image: bandImages.youthEnsemble,
  },
  {
    id: "3",
    title: "Canada Day Parade",
    date: "2026-07-01",
    location: "Downtown Calgary",
    description:
      "Marching with pride as we celebrate Canada Day with the Calgary community.",
    type: "upcoming",
    image: bandImages.performanceRecorders,
  },
];

export const pastEvents: Event[] = [
  {
    id: "4",
    title: "New Year Cultural Celebration",
    date: "2026-01-01",
    location: "Ismaili Centre Calgary",
    description:
      "A memorable performance welcoming the new year with traditional melodies.",
    type: "past",
    image: bandImages.youthTriangleFormation,
  },
  {
    id: "5",
    title: "Remembrance Day Ceremony",
    date: "2025-11-11",
    location: "Memorial Park, Calgary",
    description:
      "Honouring those who served with a solemn and respectful performance.",
    type: "past",
    image: bandImages.marchingBandGroup,
  },
  {
    id: "6",
    title: "Fall Community Gathering",
    date: "2025-10-18",
    location: "Calgary Community Hall",
    description:
      "An evening of music, fellowship, and community connection.",
    type: "past",
    image: bandImages.volunteers,
  },
];

export const featuredVideos: Video[] = [
  {
    id: "band-1",
    title: "Calgary Ismaili Youth Flute Band — Live Performance",
    description:
      "Performance footage from a recent Calgary Ismaili Youth Flute Band community event.",
    src: bandVideos.performance1,
    featured: true,
  },
  {
    id: "band-2",
    title: "Calgary Ismaili Youth Flute Band — Performance Highlights",
    description:
      "Highlights from our musicians performing for the community.",
    src: bandVideos.performance2,
    featured: true,
  },
  {
    id: "band-3",
    title: "Calgary Ismaili Youth Flute Band — Community Performance",
    description:
      "Additional footage from a recent band performance and community gathering.",
    src: bandVideos.performance3,
    featured: true,
    startTime: 10,
    muted: true,
  },
  {
    id: "gen-1",
    title: "Calgary Ismaili Youth Flute Band — Gen 1 Performance",
    description:
      "Performance footage from our Gen 1 musicians at a community event.",
    src: bandVideos.gen1,
    featured: true,
  },
  {
    id: "gen-2",
    title: "Calgary Ismaili Youth Flute Band — Gen 2 Performance",
    description:
      "Performance footage from our Gen 2 musicians showcasing their progress.",
    src: bandVideos.gen2,
    featured: true,
  },
];

export const tutorials: Tutorial[] = [
  {
    id: "tut-1",
    title: "Flute Training — Tutorial 1",
    description: "Introductory flute training lesson for new students.",
    src: bandVideos.tut1,
    category: "beginner",
    instrument: "flute",
  },
  {
    id: "tut-2",
    title: "Snare Drum Training — Tutorial 2",
    description: "Foundational snare drum techniques and practice guidance.",
    src: bandVideos.tut2,
    category: "beginner",
    instrument: "snare-drum",
  },
  {
    id: "tut-3",
    title: "Bass Drum Training — Tutorial 3",
    description: "Intermediate bass drum training and ensemble timing.",
    src: bandVideos.tut3,
    category: "intermediate",
    instrument: "bass-drum",
  },
  {
    id: "tut-4",
    title: "Triangle Training — Tutorial 4",
    description: "Triangle techniques, rhythm, and performance basics.",
    src: bandVideos.tut4,
    category: "beginner",
    instrument: "triangle",
  },
  {
    id: "tut-6",
    title: "Band Training — Tutorial 6",
    description: "Additional training lesson covering ensemble skills and practice techniques.",
    src: bandVideos.tut6,
    category: "intermediate",
  },
];

export function getTutorialsForInstrument(slug: string): Tutorial[] {
  const matched = tutorials.filter((tutorial) => tutorial.instrument === slug);
  return matched.length > 0 ? matched : tutorials;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: bandImages.marchingBandGroup,
    alt: "Calgary Ismaili Youth Flute Band group photo with drums and percussion",
    category: "performances",
  },
  {
    id: "2",
    src: bandImages.performanceRecorders,
    alt: "Youth musicians performing with recorders and snare drums",
    category: "performances",
  },
  {
    id: "3",
    src: bandImages.youthEnsemble,
    alt: "Youth ensemble playing recorders during a rehearsal",
    category: "training",
  },
  {
    id: "4",
    src: bandImages.youthTriangleFormation,
    alt: "Junior band members in formation with triangles and recorders",
    category: "youth-programs",
  },
  {
    id: "5",
    src: bandImages.volunteers,
    alt: "Volunteer instructors and leaders of the Calgary Ismaili Youth Flute Band",
    category: "community-events",
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2010",
    title: "Band Founded",
    description:
      "A group of passionate volunteers established the Calgary Ismaili Youth Flute Band to preserve musical tradition and serve the community.",
  },
  {
    year: "2013",
    title: "Youth Program Launch",
    description:
      "Formal youth training programs began, welcoming students of all ages to learn flute, drums, and percussion.",
  },
  {
    year: "2016",
    title: "First Major Performance",
    description:
      "The band performed at the Calgary community festival, marking their debut at a major public event.",
  },
  {
    year: "2019",
    title: "100 Students Milestone",
    description:
      "Over 100 students had been trained through our volunteer-led education programs.",
  },
  {
    year: "2022",
    title: "Community Partnership",
    description:
      "Established ongoing partnerships with local cultural organizations and community centres.",
  },
  {
    year: "2025",
    title: "200+ Performances",
    description:
      "Celebrating over 200 community performances and continuing to inspire the next generation.",
  },
];

export const values = [
  {
    title: "Leadership",
    description:
      "Empowering youth to lead through music, discipline, and community service.",
  },
  {
    title: "Service",
    description:
      "Dedicated to giving back to the Calgary community through volunteer performances.",
  },
  {
    title: "Discipline",
    description:
      "Building character through consistent practice, teamwork, and commitment.",
  },
  {
    title: "Community",
    description:
      "Fostering connections across cultures and generations through shared musical experiences.",
  },
  {
    title: "Excellence",
    description:
      "Striving for the highest standards in performance, education, and cultural preservation.",
  },
];

export const eventTypes = [
  "Community Events",
  "Celebrations",
  "Cultural Programs",
  "Ceremonies",
  "Special Gatherings",
];

export const bookReasons = [
  {
    title: "Professional Performances",
    description:
      "Experienced musicians delivering polished, memorable performances for any occasion.",
  },
  {
    title: "Cultural Authenticity",
    description:
      "Authentic traditional and contemporary repertoire rooted in rich cultural heritage.",
  },
  {
    title: "Youth Energy",
    description:
      "Inspiring performances featuring talented young musicians trained by dedicated volunteers.",
  },
  {
    title: "Community Spirit",
    description:
      "A volunteer-led organization committed to enriching Calgary's cultural landscape.",
  },
];
