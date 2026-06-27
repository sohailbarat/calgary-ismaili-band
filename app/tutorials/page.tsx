import { createMetadata } from "@/lib/metadata";
import { TutorialsContent } from "@/components/tutorials-content";

export const metadata = createMetadata({
  title: "Tutorials",
  description:
    "Free video tutorials for beginner, intermediate, and advanced youth flute band musicians. Learn flute, drums, and more.",
  path: "/tutorials",
});

export default function TutorialsPage() {
  return <TutorialsContent />;
}
