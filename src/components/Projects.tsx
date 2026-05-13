"use client";

import { projects } from "@/Projects/Projects";
import { ProjectCard } from "./ProjectCard";



export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-96 h-96 bg-pink/8 animate-blobFloatReverse -bottom-20 -left-16 opacity-50" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Featured Projects</p>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Things I&apos;ve <span className="text-gradient italic">built</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
