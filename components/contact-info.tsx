import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";

interface ContactInfoProps {
  className?: string;
  linkClassName?: string;
}

export function ContactPhone({ className, linkClassName }: ContactInfoProps) {
  if (!siteConfig.phone) {
    return (
      <span className={cn("italic opacity-80", className)}>
        {siteConfig.contactComingSoon}
      </span>
    );
  }

  return (
    <a
      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
      className={linkClassName}
    >
      {siteConfig.phone}
    </a>
  );
}

export function ContactEmail({ className, linkClassName }: ContactInfoProps) {
  if (!siteConfig.email) {
    return (
      <span className={cn("italic opacity-80", className)}>
        {siteConfig.contactComingSoon}
      </span>
    );
  }

  return (
    <a href={`mailto:${siteConfig.email}`} className={linkClassName}>
      {siteConfig.email}
    </a>
  );
}
