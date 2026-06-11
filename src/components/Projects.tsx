import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/Projects/Projects";

export default function Projects() {
  return (
    <section id="projects" className="border-4 border-black py-8 px-4">
      <div className="px-3 py-2 bg-pink-500 border-4 shadow-[4px_4px_0px_0px_black] rounded-md border-black mx-auto hover:rotate-3 w-30">
        <h2 className="text-center text-zinc-800">Projects</h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-12 py-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
