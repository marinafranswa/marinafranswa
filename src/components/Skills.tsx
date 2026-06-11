import img7 from "@/assets/7.png";
import img8 from "@/assets/8.png";
import { skills } from "@/Projects/skills";
import Image from "next/image";

const Tag = ({ label, color }: { label: string; color: string }) => (
  <span
    className={`mx-2 text-sm px-3 py-3 border-4 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:translate-x-1 hover:-translate-y-1 transition-all whitespace-nowrap ${color}`}
  >
    {label}
  </span>
);

export default function Skills() {
  return (
    <section className="border-4 border-black py-8 px-4">
      <div className="relative flex items-center justify-center mb-8 w-fit mx-auto gap-4">
        <Image
          className="object-contain animate-bounce"
          src={img8}
          width={60}
          height={60}
          alt="image1"
        />

        <div className="px-3 py-2 bg-teal-400 border-4 shadow-[4px_4px_0px_0px_black] rounded-md border-black hover:-rotate-3 w-30">
          <h2 className="text-center text-zinc-800">My Skills</h2>
        </div>

        <Image
          className="object-contain animate-bounce"
          src={img7}
          width={60}
          height={60}
          alt="image1"
        />
      </div>
      {/* Row 1 — pink, left to right */}
      <div className="overflow-hidden bg-pink-500 py-3 mb-2">
        <div className="animate-marquee flex items-center w-max">
          {[...skills, ...skills].map((s, i) => (
            <Tag key={i} label={s} color="bg-white" />
          ))}
        </div>
      </div>

      {/* Row 2 — amber, right to left */}
      <div className="overflow-hidden bg-amber-400 py-3 mb-2">
        <div className="animate-marqueeReverse flex items-center w-max">
          {[...skills, ...skills].map((s, i) => (
            <Tag key={i} label={s} color="bg-white" />
          ))}
        </div>
      </div>

      {/* Row 3 — teal, left to right */}
      <div className="overflow-hidden bg-teal-400 py-3">
        <div className="animate-marquee flex items-center w-max">
          {[...skills, ...skills].map((s, i) => (
            <Tag key={i} label={s} color="bg-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
