import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import img4 from "@/assets/4.png"
import img3 from "@/assets/3.png"
import img2 from "@/assets/2.png"
import img1 from "@/assets/1.png"
import Image from 'next/image';
export default function About() {
  return (
    <section id='about' className="border-4 border-black py-8 px-4">
      <div className="px-3 py-2 bg-amber-400 border-4 shadow-[4px_4px_0px_0px_black] rounded-md border-black mx-auto hover:rotate-3 w-30 ">
        <h2 className="text-center text-zinc-800">About me</h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 py-8">
        <Card className="relative w-full  flex-1 font-display shadow-[4px_4px_0px_0px_black] rounded-md hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4 overflow-visible">
          <Image
            className="object-contain absolute -top-6 -right-6 z-10"
            src={img1}
            width={60}
            height={60}
            alt="image1"
          />
          <CardContent>
            <h3 className="text-2xl text-teal-500 my-3 font-extrabold">
              Who am I?
            </h3>
            <p className="mb-6 text-lg font-bold">
              I&apos;m a Frontend Developer from Alexandria, Egypt with 2 years
              of professional experience building beautiful, scalable web
              applications. I thrive at the intersection of design and code —
              turning Figma mockups into pixel-perfect, responsive interfaces.
            </p>
          </CardContent>
          <Image
            className="object-contain absolute -bottom-6 -left-6 z-10 animate-spinSlow"
            src={img2}
            width={60}
            height={60}
            alt="image1"
          />
        </Card>
        <Card className="relative w-full flex-1 font-display shadow-[4px_4px_0px_0px_black] rounded-md hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4 overflow-visible">
          <Image
            className="object-contain absolute -top-6 -right-6 z-10 animate-spinSlow"
            src={img3}
            width={60}
            height={60}
            alt="image1"
          />
          <CardContent>
            <p className="my-10 text-lg font-bold">
              Crafting pixel-perfect, responsive web experiences with modern
              tools — turning ideas into interfaces that captivate & perform
              using React.js & Next.js, TypeScript, Tailwind CSS, and modern
              state management. I believe great UX comes from both technical
              precision and creative vision.
            </p>
          </CardContent>
          <Image
            className="object-contain absolute -bottom-6 -left-6 z-10 "
            src={img4}
            width={60}
            height={60}
            alt="image1"
          />
        </Card>
      </div>
      <div className="flex  justify-center flex-col lg:flex-row gap-3 cursor-pointer">
        {" "}
        <div className="bg-pink-500 font-display shadow-[4px_4px_0px_0px_black] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4">
          Alexandria,Egypt
        </div>
        <div className="bg-amber-400 font-display shadow-[4px_4px_0px_0px_black] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4">
          Bs. in computers and IT
        </div>
        <div className="bg-teal-400 font-display shadow-[4px_4px_0px_0px_black] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4">
          2 Years Experience
        </div>
      </div>
    </section>
  );
}
