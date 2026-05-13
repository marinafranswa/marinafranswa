"use client";
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  ArrowDown,
  Sparkles,
  GitFork,
  Link2,
  Sparkle,
} from "lucide-react";


const stars = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: 2 + Math.random() * 3,
}));

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => setMounted(true), []);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const colors = ["#FF6EB4", "#8B5CF6", "#38BDF8", "#FBBF24"];
    const particles = Array.from({ length: 70 }, () => ({
      x: 1,
      y: 1,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.15,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", setSize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-14 px-6"
    >
   
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60 pointer-events-none"
      />


      <div
        className="blob w-96 h-96 md:w-125 md:h-125 animate-blobFloat -top-24 -left-32 opacity-20"
        style={{ background: "#FF6EB4" }}
      />
      <div
        className="blob w-80 h-80 md:w-105 md:h-105 animate-blobFloatReverse -bottom-20 -right-20 opacity-20"
        style={{ background: "#8B5CF6" }}
      />
      <div
        className="blob w-64 h-64 md:w-80 md:h-80 animate-blobFloat top-1/3 right-1/4 opacity-15"
        style={{ background: "#38BDF8" }}
      />

      
    {mounted &&   stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle pointer-events-none"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        ></div>
      ))}

   
      <div className="relative z-10 text-center max-w-3xl mx-auto py-8">
   
        <div className="inline-flex items-center gap-2 bg-pink/10 border border-pink/25 rounded-full px-4 py-1.5 mb-8 text-pink-light text-xs font-medium ">
          <Sparkles size={13} />
          Available for new opportunities
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
        </div>

   
        <p className="text-sm tracking-[0.25em] uppercase text-muted font-light mb-3">
          Hello, I&apos;m
        </p>

        <h1
          className="font-display font-black leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
        >
          <span className="text-gradient block">Marina</span>
          <span className="text-white italic">Franswa</span>
        </h1>

        {/* Roles */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <span className="text-white font-semibold text-lg">
            Frontend Developer
          </span>
          <Sparkle className="size-3 text-pink fill-pink" />
          <span className="text-muted">React.js</span>
          <Sparkle className="size-3 text-pink fill-pink" />
          <span className="text-muted">Next.js</span>
        </div>

        <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light">
          Crafting <span className="text-pink font-medium">pixel-perfect</span>,
          responsive web experiences with modern tools — turning ideas into
          interfaces that{" "}
          <span className="text-yellow font-medium">captivate & perform</span>.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a href="#projects" className="btn-primary">
            View My Work <Sparkles className="text-yellow size-4 "/>
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

  
        <div className="flex gap-3 justify-center">
          {[
            {
              icon: GitFork,
              href: "https://github.com/marinafranswa",
              label: "GitHub",
            },
            {
              icon: Link2,
              href: "https://linkedin.com/in/marinafranswa",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:marinaafranswa@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full flex items-center justify-center text-muted transition-all duration-200 hover:text-pink hover:-translate-y-1 no-underline"
              style={{
                background: "rgba(196,181,253,0.08)",
                border: "1px solid rgba(196,181,253,0.15)",
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted text-[11px] tracking-widest no-underline animate-float z-10"
      >
        <span>SCROLL</span>
        <ArrowDown size={15} className="text-pink" />
      </a>
    </section>
  );
}
