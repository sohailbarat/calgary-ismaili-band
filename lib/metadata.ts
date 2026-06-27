import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://calgary-ismaili-band.vercel.app";

export const siteConfig = {
  name: "Calgary Ismaili Youth Flute Band",
  description:
    "Volunteer-led youth flute band dedicated to music education, cultural preservation, and community service in Calgary.",
  url: siteUrl,
  phone: null as string | null,
  email: null as string | null,
  contactComingSoon: "Coming soon",
  practiceLocation: "Calgary, Alberta, Canada",
  social: {
    facebook: "https://facebook.com/calgaryismailiband",
    instagram: "https://instagram.com/calgaryismailiband",
    youtube: "https://youtube.com/@calgaryismailiband",
  },
};

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}
