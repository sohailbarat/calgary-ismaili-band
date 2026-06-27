import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Instrument } from "@/types";

interface InstrumentCardProps {
  instrument: Instrument;
}

export function InstrumentCard({ instrument }: InstrumentCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={instrument.image}
          alt={instrument.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 font-serif text-2xl font-bold text-white">
          {instrument.name}
        </h3>
      </div>
      <CardContent className="p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {instrument.shortDescription}
        </p>
        <Button asChild variant="link" className="mt-3 h-auto p-0">
          <Link href={`/learn/${instrument.slug}`}>
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
