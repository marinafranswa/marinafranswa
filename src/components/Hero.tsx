import Image from 'next/image';
import React from 'react'
import bg from '@/assets/01.webp'
import me from "@/assets/me.png"
import img6 from "@/assets/6.png"
import Link from 'next/link';


export default function Hero() {
  return (
    <section id='hero' className="h-dvh relative mt-12 flex items-center px-4 lg:px-12 overflow-hidden ">
      <Image
        src={bg}
        fill
        alt="bg"
        className="hidden lg:block object-cover z-10 pointer-events-none"
      />
      <div className="border-teal-400 border-8 rounded-tr-full rounded-tl-full h-screen my-12 w-full overflow-hidden border-b-0 bg-slate-800 flex items-center justify-center flex-wrap">
        <Image
          src={img6}
          width={120}
          height={100}
          alt="star"
          className="object-contain absolute top-8 right-3/4 lg:right-2/3 animate-float"
        />
        <Image
          src={img6}
          width={120}
          height={100}
          alt="star"
          className="object-contain absolute top-8 left-3/4 lg:left-2/3 -scale-x-100 animate-float"
        />

        <div className="relative z-20 mt-24 flex flex-col items-center justify-between gap-y-12">
          <h1 className="text-slate-100 text-center lg:w-1/2 text-2xl lg:text-4xl mt-8 px-8">
            A{" "}
            <span className="font-display text-amber-400 font-extrabold uppercase">
              memes
            </span>{" "}
            lover girl who also happened to be a{" "}
            <span className="text-teal-400 font-display font-extrabold uppercase">
              programmer
            </span>{" "}
            !!
          </h1>
          <div className="flex flex-col lg:flex-row gap-3 cursor-pointer">
            {" "}
            <Link
              href={"#about"}
              className="bg-pink-500 font-display shadow-[4px_4px_0px_0px_black] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4"
            >
              Know more
            </Link>
            <Link
              href={"#contact"}
              className="bg-amber-400 font-display shadow-[4px_4px_0px_0px_black] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 border-2 border-black py-3 px-4"
            >
              Get in touch
            </Link>
          </div>

          <div className="relative w-64 h-90">
            <Image src={me} fill alt="me" className="object-cover mt-0 lg:mt-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
