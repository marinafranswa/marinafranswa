'use client';
import { ArrowRight } from 'lucide-react';

const timeline = [
  {
    emoji: '🏆',
    title: 'Frontend Development Diploma',
    org: 'Route Academy — Route IT Training Center',
    period: 'Sep 2025 – Apr 2026',
    desc: 'Intensive frontend development program covering modern React, Next.js, TypeScript, and industry best practices.',
    accent: 'text-yellow',
    border: 'border-yellow/25',
    bg: 'bg-yellow/8',
    dot: 'bg-yellow shadow-[0_0_12px_#FBBF24]',
  },
  {
    emoji: '💼',
    title: 'Frontend Developer',
    org: 'Storia · Alexandria, Egypt',
    period: 'Feb 2024 – Jul 2025',
    desc: 'Built responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and Bootstrap based on Figma designs. Collaborated with designers and backend developers in an Agile environment.',
    bullets: [
      'Integrated RESTful APIs using Fetch API, managing dynamic data & UI states',
      'Improved performance by optimizing code and reducing load times',
      'Ensured cross-browser compatibility and full mobile responsiveness',
      'Used Git/GitLab for version control, feature branching & code reviews',
    ],
    accent: 'text-pink',
    border: 'border-pink/25',
    bg: 'bg-pink/5',
    dot: 'bg-pink shadow-[0_0_12px_#FF6EB4]',
  },
  {
    emoji: '🎓',
    title: 'B.Sc. Computers and Information Technology',
    org: 'Alexandria University & Egyptian E-Learning University',
    period: 'Graduated Jul 2023 · GPA: 3.16 / 4.0',
    desc: 'Joint program combining computer science fundamentals with practical information technology skills.',
    accent: 'text-purple',
    border: 'border-purple/25',
    bg: 'bg-purple/5',
    dot: 'bg-purple shadow-[0_0_12px_#8B5CF6]',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-80 h-80 bg-purple/10 animate-blobFloat top-1/4 -right-10 opacity-60" />

      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Journey</p>
          <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Experience &{' '}
            <span className="text-gradient-pink italic">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" />

          <div className="flex flex-col gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                {/* Node */}
                <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xl ${item.bg} border ${item.border} relative z-10`}>
                  {item.emoji}
                </div>

                {/* Card */}
                <div className={`card flex-1 p-5 md:p-7 ${item.bg}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-white text-base md:text-lg leading-snug mb-0.5">
                        {item.title}
                      </h3>
                      <p className={`text-sm font-semibold ${item.accent}`}>{item.org}</p>
                    </div>
                    <span className={`self-start text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap ${item.accent} ${item.border} ${item.bg}`}>
                      {item.period}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">{item.desc}</p>

                  {item.bullets && (
                    <ul className="flex flex-col gap-2">
                      {item.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted">
                          <ArrowRight size={13} className={`mt-0.5 flex-shrink-0 ${item.accent}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
