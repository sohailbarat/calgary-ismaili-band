"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/fade-in";
import { TutorialCard } from "@/components/tutorial-card";
import { Input } from "@/components/ui/input";
import { tutorials } from "@/data/mock-data";

const categories = [
  { id: "all", label: "All" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
] as const;

export function TutorialsContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filteredTutorials = useMemo(() => {
    return tutorials.filter((tutorial) => {
      const matchesSearch =
        search === "" ||
        tutorial.title.toLowerCase().includes(search.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "all" || tutorial.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Tutorials
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Browse our video learning library — from beginner basics to
              advanced techniques.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              title="Video Learning Library"
              subtitle="Free tutorials for all skill levels. No login required."
            />
          </FadeIn>

          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Search tutorials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                aria-label="Search tutorials"
              />
            </div>
          </div>

          <div
            className="mt-6 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Tutorial categories"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={category === cat.id}
                onClick={() => setCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  category === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredTutorials.length === 0 ? (
            <p className="mt-12 text-center text-muted-foreground">
              No tutorials found matching your search.
            </p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {filteredTutorials.map((tutorial, index) => (
                <FadeIn key={tutorial.id} delay={index * 0.05}>
                  <TutorialCard tutorial={tutorial} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
