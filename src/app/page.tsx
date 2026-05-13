'use client';
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';


export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
      }
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animate();
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor (desktop only) */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[99999] shadow-[0_0_10px_#FF6EB4]"
        style={{ background: "#FF6EB4", mixBlendMode: "screen" }}
      />
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[99998]"
        style={{
          border: "2px solid rgba(196,181,253,0.5)",
          mixBlendMode: "screen",
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="flex justify-center items-center gap-1 text-center mt-20 pt-8 border-t border-purple-light/10">
        <p className="font-display text-lg text-gradient-pink">
          Marina Franswa
        </p>
        <p className="text-muted text-sm ">
      @ 2026
        </p>
      </footer>
    </>
  );
}
