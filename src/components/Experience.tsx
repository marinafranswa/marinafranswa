import { items } from "@/Projects/experience";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";


import img7 from "@/assets/12.png";
import img8 from "@/assets/11.png";


export default function Experience() {
  return (
    <section id="experience" className="border-4 border-black py-16 px-4">
      <div className="relative flex items-center justify-center mb-8 w-fit mx-auto gap-4">
        <Image
          className="object-contain animate-bounce"
          src={img8}
          width={60}
          height={60}
          alt="image1"
        />

        <div className="px-3 py-2 bg-amber-400 border-4 shadow-[4px_4px_0px_0px_black] rounded-md border-black hover:-rotate-3 w-46">
          <h2 className="text-center text-zinc-800">My Experience</h2>
        </div>

        <Image
          className="object-contain animate-bounce"
          src={img7}
          width={60}
          height={60}
          alt="image1"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-black" />

        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              className="relative block lg:flex lg:max-w-4xl items-center mb-12 last:mb-0"
            >
              <div
                className={`w-full lg:w-1/2 pr-0 lg:pr-10 ${isLeft ? "flex justify-end" : ""}`}
              >
                {isLeft && <ExperienceCard item={item} />}
              </div>

              <div
                className={`hidden lg:block  lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10 w-12 h-12 rounded-full border-4 border-black shrink-0 ${item.iconBg}`}
              />

              <div
                className={`w-full lg:w-1/2 pl-0 lg:pl-10 ${!isLeft ? "flex justify-start" : ""}`}
              >
                {!isLeft && <ExperienceCard item={item} />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
