import Link from "next/link";
import { Music2 } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/metadata";
import { ContactEmail, ContactPhone } from "@/components/contact-info";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/learn", label: "Learn" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/book-the-band", label: "Book the Band" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", icon: FacebookIcon },
  { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: siteConfig.social.youtube, label: "YouTube", icon: YoutubeIcon },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Music2 className="h-6 w-6 text-secondary" aria-hidden="true" />
              <span className="font-serif text-lg font-bold">
                Calgary Ismaili Pipe Band
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Volunteer-led musical organization dedicated to teaching youth and
              performing for the community.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-secondary">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70" role="list">
              <li>
                <span className="text-white/50">Phone: </span>
                <ContactPhone
                  linkClassName="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
                />
              </li>
              <li>
                <span className="text-white/50">Email: </span>
                <ContactEmail
                  linkClassName="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
                />
              </li>
              <li>{siteConfig.practiceLocation}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-secondary">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="rounded-full bg-white/10 p-2 transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {currentYear} Calgary Ismaili Pipe Band. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
