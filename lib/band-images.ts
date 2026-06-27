/** Calgary Ismaili Youth Flute Band photos — served from /public/images/band */
export const bandImages = {
  hero: "/images/band/marching-band-group.png",
  volunteers: "/images/band/volunteers.png",
  performanceRecorders: "/images/band/performance-recorders.png",
  marchingBandGroup: "/images/band/marching-band-group.png",
  youthTriangleFormation: "/images/band/youth-triangle-formation.png",
  youthEnsemble: "/images/band/youth-ensemble.png",
} as const;

export type BandImageKey = keyof typeof bandImages;
