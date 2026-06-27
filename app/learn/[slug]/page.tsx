import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { InstrumentPageContent } from "@/components/instrument-page-content";
import { instruments } from "@/data/mock-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return instruments.map((instrument) => ({
    slug: instrument.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const instrument = instruments.find((i) => i.slug === slug);
  if (!instrument) return {};

  return createMetadata({
    title: `Learn ${instrument.name}`,
    description: instrument.shortDescription,
    path: `/learn/${slug}`,
  });
}

export default async function InstrumentPage({ params }: PageProps) {
  const { slug } = await params;
  const instrument = instruments.find((i) => i.slug === slug);

  if (!instrument) {
    notFound();
  }

  return <InstrumentPageContent instrument={instrument} />;
}
