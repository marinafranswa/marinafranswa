import Image from "next/image";
import Link from "next/link";
import meWaving from "@/assets/meWaving.png"
import { contacts } from "@/Projects/contact";

export default function ContactMe() {
 

  return (
    <section id="contact" className="border-4 border-black py-16 px-8 bg-[#f5f5f0]">
      <div className="text-center mb-16">
        <div className="px-3 py-2 bg-teal-400 border-4 shadow-[4px_4px_0px_0px_black] rounded-md border-black mx-auto hover:rotate-3 w-42 inline-block">
          <h2 className="text-zinc-800">Contact Me</h2>
        </div>
      
      </div>

      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* LEFT */}
        <div>
          <h3 className="text-2xl font-extrabold mb-5">
            Let&apos;s build something <span className="font-display text-pink-500">together</span>
          </h3>
          <div className="border-2 w-64 border-black shadow-[4px_4px_0px_0px_black] rounded-full bg-white p-4 font-display mb-5">
            <Image src={meWaving} alt="me" className="object-cover  block" />
          </div>
          <div className="border-l-4 border-amber-400 pl-4">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
              Available for
            </p>
            <ul className="space-y-2">
              {[
                "Freelance & contract work",
                "Full-time frontend roles",
                "Open source collaboration",
              ].map((item) => (
                <li key={item} className="text-sm flex gap-2">
                  <span className="text-pink-500">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-extrabold uppercase tracking-wider">
            Reach me on
          </p>
          {contacts.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border-2 border-black shadow-[4px_4px_0px_0px_black] rounded-md bg-white p-4 font-display hover:-translate-y-1 hover:shadow-[4px_6px_0px_0px_black] transition-all duration-200"
            >
              <div
                className={`w-12 h-12 rounded-full border-4 border-black flex items-center justify-center text-xl shrink-0 ${c.iconBg}`}
              >
                <c.icon aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                  {c.label}
                </p>
                <p className="text-sm font-extrabold">{c.value}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}