"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  categories,
  tags,
  type Category,
  type Project,
  type Tag,
} from "@/app/projects/data";

export default function ProjectsGallery({
  projects,
}: {
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    "all"
  );
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;
      const matchesTag = !activeTag || project.tags.includes(activeTag);
      return matchesCategory && matchesTag;
    });
  }, [projects, activeCategory, activeTag]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`border px-5 py-2.5 text-xs uppercase tracking-widest transition-colors duration-300 ease-premium ${
            activeCategory === "all"
              ? "border-accent-500 bg-accent-500 text-charcoal-950"
              : "border-white/20 text-cream-200 hover:border-accent-500/60"
          }`}
        >
          All Projects
        </button>
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActiveCategory(category.key)}
            className={`border px-5 py-2.5 text-xs uppercase tracking-widest transition-colors duration-300 ease-premium ${
              activeCategory === category.key
                ? "border-accent-500 bg-accent-500 text-charcoal-950"
                : "border-white/20 text-cream-200 hover:border-accent-500/60"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-xs uppercase tracking-widest text-cream-400">
          Filter by material system:
        </span>
        {tags.map((tag) => (
          <button
            key={tag.key}
            type="button"
            onClick={() =>
              setActiveTag((current) => (current === tag.key ? null : tag.key))
            }
            className={`px-3 py-1.5 text-xs transition-colors duration-300 ease-premium ${
              activeTag === tag.key
                ? "bg-accent-500 text-charcoal-950"
                : "bg-white/5 text-cream-400 hover:text-cream-200"
            }`}
          >
            {tag.label}
          </button>
        ))}
        {activeTag && (
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className="text-xs uppercase tracking-widest text-accent-400 underline underline-offset-4"
          >
            Clear
          </button>
        )}
      </div>

      <p className="mt-6 text-sm text-cream-400">
        Showing {filtered.length} of {projects.length} projects
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="border border-white/10 bg-bronze-900/20"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-bronze-900">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center text-xs uppercase tracking-widest text-cream-400/60">
                  Add project photo:
                  <br />
                  {project.name}
                </div>
              )}
              <span className="absolute left-4 top-4 bg-charcoal-950/70 px-3 py-1.5 text-xs uppercase tracking-widest text-accent-400">
                {categories.find((c) => c.key === project.category)?.label}
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-xl text-white">{project.name}</h3>
              <p className="mt-1 text-sm text-cream-400">
                {project.location}
              </p>
              <p className="mt-1 text-sm text-cream-400">
                {project.contractorLabel}: {project.contractor}
              </p>

              <p className="mt-5 leading-relaxed text-cream-200">
                {project.overview}
              </p>

              {project.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tagKey) => (
                    <span
                      key={tagKey}
                      className="bg-white/5 px-3 py-1 text-xs text-cream-400"
                    >
                      {tags.find((t) => t.key === tagKey)?.label}
                    </span>
                  ))}
                </div>
              )}

              <details className="mt-6 group">
                <summary className="cursor-pointer text-xs uppercase tracking-widest text-accent-400 transition-colors duration-300 ease-premium hover:text-accent-500">
                  Technical Scope &amp; Materials
                </summary>
                <ul className="mt-4 space-y-3">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="border-l border-accent-500/40 pl-4 text-sm leading-relaxed text-cream-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
