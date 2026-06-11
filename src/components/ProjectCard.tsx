import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import img9 from "@/assets/9.png";
import img10 from "@/assets/10.png";
import { Project } from "@/Projects/Projects";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="px-4 py-3 " href={project.liveLink} target="_blank">
      <Card className="relative w-full flex-1 font-display shadow-[4px_4px_0px_0px_black] rounded-md hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black  overflow-visible">
        <Image
          className="object-contain absolute -top-6 -right-8 z-10 animate-spinSlow"
          src={img10}
          width={70}
          height={70}
          alt="image1"
        />
        <CardContent>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <div className="text-start w-full lg:w-1/2">
              <h3 className="text-2xl text-teal-500 my-3 font-extrabold">
                {project.title}
              </h3>

              <p>{project.subtitle}</p>
              <p className=" lg:text-lg font-bold pe-4">
                {project.description}
              </p>
              <ul>
                {project.highlights.map((h, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    <Star size={14} className="fill-amber-400" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="text-center flex my-3 justify-center lg:justify-start flex-col lg:flex-row gap-3 cursor-pointer">
                <div className="bg-pink-500 font-display shadow-[4px_4px_0px_0px_black] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4">
                  {project.tech[0]}
                </div>
                <div className="bg-amber-400 font-display shadow-[4px_4px_0px_0px_black] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4">
                  {project.tech[1]}
                </div>
                <div className="bg-teal-400 font-display shadow-[4px_4px_0px_0px_black] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4">
                  {project.tech[2]}
                </div>
              </div>
            </div>
            <div className="relative border-black mt-4 border-4 shadow-[4px_4px_0px_0px_black] rounded-md w-1/2">
              <span className="absolute -top-3 -left-2 z-10 bg-amber-500 border-2 border-black  px-2 py-0.5 text-xs font-display font-bold shadow-[2px_2px_0px_0px_black] -rotate-6 hover:rotate-10 transition-all duration-300">
                {project.tag}
              </span>
              <Image
                className="object-contain block"
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        </CardContent>
        <Image
          className="object-contain absolute -bottom-6 -left-6 z-10 animate-spinSlow"
          src={img9}
          width={70}
          height={70}
          alt="image1"
        />
      </Card>
    </Link>
  );
}
