'use client';
import { MapPin, GraduationCap, Calendar, Star, Zap, Mail } from 'lucide-react';
import Image from 'next/image';
import meImage from "@/assets/F523BEC3-0A1E-4DF8-9281-F3B320B66B78.jpeg";
const stats = [
  { value: '2+', label: 'Years Experience', color: 'text-pink' },
  { value: '10+', label: 'Technologies', color: 'text-purple' },
  { value: '2', label: 'Projects Shipped', color: 'text-sky' },
  { value: '3.16', label: 'GPA / 4.0', color: 'text-yellow' },
];

const info = [
  { icon: MapPin, text: 'Alexandria, Egypt', color: 'text-pink' },
  { icon: Calendar, text: '2 Years Experience', color: 'text-purple' },
  { icon: GraduationCap, text: 'B.Sc. Computers & IT', color: 'text-sky' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative center line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #8B5CF6, transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">About Me</p>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            The girl behind the{" "}
            <span className="text-gradient-pink italic">code</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Orbit ring */}
              <div className="absolute -inset-6 border border-dashed border-pink/30 rounded-full animate-spinSlow" />
              {/* Orbit dot */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink shadow-[0_0_12px_#FF6EB4]" />

              {/* Avatar circle */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-8xl relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,110,180,0.2), rgba(139,92,246,0.3), rgba(56,189,248,0.2))",
                  border: "3px solid rgba(255,110,180,0.3)",
                  boxShadow:
                    "0 0 60px rgba(255,110,180,0.2), inset 0 0 60px rgba(139,92,246,0.1)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,110,180,0.1), transparent)",
                  }}
                />
                <Image src={meImage} alt="me" height={150} width={150} />
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-2 -right-10 bg-dark-card border border-pink/20 rounded-xl px-3 py-2 flex items-center gap-1.5 shadow-xl animate-float">
                <Star size={12} className="text-yellow fill-yellow" />
                <span className="text-yellow text-xs font-medium">
                  React Pro
                </span>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-2 -left-12 bg-dark-card border border-sky/20 rounded-xl px-3 py-2 flex items-center gap-1.5 shadow-xl animate-floatSlow">
                <Zap size={12} className="text-yellow fill-yellow" />
                <span className="text-sky text-xs font-medium"> Next.js</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-muted leading-relaxed mb-5 font-light">
              I&apos;m a{" "}
              <span className="text-pink font-semibold">
                Frontend Developer
              </span>{" "}
              from Alexandria, Egypt with 2 years of professional experience
              building beautiful, scalable web applications. I thrive at the
              intersection of design and code — turning Figma mockups into
              pixel-perfect, responsive interfaces.
            </p>
            <p className="text-muted leading-relaxed mb-8 font-light">
              My stack revolves around{" "}
              <span className="text-purple font-semibold">
                React.js & Next.js
              </span>
              , and I love working with TypeScript, Tailwind CSS, and modern
              state management. I believe great UX comes from both technical
              precision and creative vision.
            </p>

            {/* Info pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {info.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-dark-card rounded-full px-4 py-1.5 text-sm text-muted"
                  style={{ border: "1px solid rgba(196,181,253,0.1)" }}
                >
                  <Icon size={13} className={color} />
                  {text}
                </div>
              ))}
            </div>

            <a href="mailto:marinaafranswa@gmail.com" className="btn-primary">
              Let&apos;s Connect{" "}
              <Mail size={14} className="text-purple-300" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats?.map(({ value, label, color }) => (
            <div key={label} className="card p-6 md:p-8 text-center">
              <div
                className={`font-display text-4xl md:text-5xl font-black mb-1 ${color}`}
              >
                {value}
              </div>
              <div className="text-muted text-xs md:text-sm font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
