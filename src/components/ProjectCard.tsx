import { Project } from "@/Projects/Projects";
import { GitFork } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export function ProjectCard({
  project,
  idx,
}: {
  project: Project;
  idx: number;
}) {
  const isOdd = idx % 2 !== 0;

  return (
    <div className="card p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Visual */}
        <div className={isOdd ? "md:order-2" : ""}>
          <div
            className={`rounded-2xl bg-linear-to-br ${project.gridBg} border flex items-center justify-center h-52 md:h-64 relative overflow-hidden`}
            style={{ borderColor: project.gridLine.replace("0.1", "0.3") }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `linear-gradient(${project.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${project.gridLine} 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative text-center z-10">
              <Link href={project.liveLink}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={150}
                  priority={idx === 0}
                />
              </Link>
              <span
                className={`px-4 py-1 rounded-full text-xs font-semibold tracking-wider border ${project.tagColor}`}
              >
                {project.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={isOdd ? "md:order-1" : ""}>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
            {project.title}
          </h3>
          <p
            className={`text-sm font-semibold tracking-wide mb-4 ${project.accent}`}
          >
            {project.subtitle}
          </p>
          <p className="text-muted text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          <ul className="flex flex-col gap-2 mb-5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted">
                <span className={`mt-0.5 flex-shrink-0 ${project.accent}`}>
                  ✦
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${project.tagColor}`}
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !px-5 !py-2 !text-sm"
          >
            <GitFork size={14} /> Code
          </Link>
        </div>
      </div>
    </div>
  );
}
