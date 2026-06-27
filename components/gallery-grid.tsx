"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import type { GalleryImage } from "@/types";

const categories = [
  { id: "all", label: "All" },
  { id: "performances", label: "Performances" },
  { id: "training", label: "Training" },
  { id: "community-events", label: "Community Events" },
  { id: "youth-programs", label: "Youth Programs" },
] as const;

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Gallery categories"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filteredImages.map((image, index) => (
          <FadeIn key={image.id} delay={index * 0.05}>
            <button
              onClick={() => setSelectedImage(image)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`View ${image.alt}`}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400 + (index % 3) * 100}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors hover:bg-primary/20" />
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {selectedImage && (
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full rounded-lg object-contain"
              />
              <div className="mt-3 flex items-center justify-between px-2">
                <p className="text-white">{selectedImage.alt}</p>
                <Badge variant="secondary" className="capitalize">
                  {selectedImage.category.replace("-", " ")}
                </Badge>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
