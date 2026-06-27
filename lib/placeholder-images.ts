import { bandImages } from "./band-images";

const galleryPhotos = [
  bandImages.marchingBandGroup,
  bandImages.performanceRecorders,
  bandImages.youthEnsemble,
  bandImages.youthTriangleFormation,
  bandImages.volunteers,
] as const;

/** @deprecated Use bandImages directly for new code */
export function placeholderImage(
  seed: string,
  width = 800,
  height = 600
): string {
  const index =
    Math.abs(seed.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)) %
    galleryPhotos.length;
  return galleryPhotos[index];
}

export const images = {
  hero: bandImages.hero,
  flute: bandImages.performanceRecorders,
  snare: bandImages.marchingBandGroup,
  bass: bandImages.marchingBandGroup,
  triangle: bandImages.youthTriangleFormation,
  gallery: (n: number) => galleryPhotos[(n - 1) % galleryPhotos.length],
  event: (n: number) => galleryPhotos[(n - 1) % galleryPhotos.length],
};

export { bandImages };
