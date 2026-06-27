"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/learn", label: "Learn" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/events", label: "Events" },
  { href: "/book-the-band", label: "Book the Band" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-lg font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          <Music2 className="h-6 w-6 text-secondary" aria-hidden="true" />
          <span className="hidden sm:inline">Calgary Ismaili Youth Flute Band</span>
          <span className="sm:hidden">CIYFB</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/book-the-band">Book the Band</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border lg:hidden"
        >
          <ul className="container mx-auto space-y-1 px-4 py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground"
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link href="/book-the-band" onClick={() => setIsOpen(false)}>
                  Book the Band
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
