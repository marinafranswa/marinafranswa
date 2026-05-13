'use client';

const categories = [
  {
    emoji: '💻',
    title: 'Languages',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
    accent: 'border-pink/20 bg-pink/5',
    pillBg: 'bg-pink/10 border-pink/25 text-pink-light',
  },
  {
    emoji: '⚛️',
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'React Query', 'Tailwind CSS', 'Bootstrap', 'Shadcn UI', 'Hero UI'],
    accent: 'border-purple/20 bg-purple/5',
    pillBg: 'bg-purple/10 border-purple/25 text-purple-light',
  },
  {
    emoji: '🔌',
    title: 'API & Data',
    skills: ['RESTful APIs', 'Axios', 'Fetch API', 'JSON'],
    accent: 'border-sky/20 bg-sky/5',
    pillBg: 'bg-sky/10 border-sky/25 text-sky',
  },
  {
    emoji: '🛠️',
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'GitLab', 'Vite', 'npm'],
    accent: 'border-yellow/20 bg-yellow/5',
    pillBg: 'bg-yellow/10 border-yellow/25 text-yellow-light',
  },
  {
    emoji: '🧠',
    title: 'Core Concepts',
    skills: ['Responsive Design', 'Mobile-First', 'SSR/CSR', 'Dynamic Routing', 'Component Architecture', 'Performance Optimization', 'Agile/Scrum'],
    accent: 'border-pink/20 bg-pink/5',
    pillBg: 'bg-pink/10 border-pink/25 text-pink-light',
  },
  {
    emoji: '✨',
    title: 'AI Tools',
    skills: ['Claude (claude.ai)', 'Claude Code'],
    accent: 'border-purple/20 bg-purple/5',
    pillBg: 'bg-purple/10 border-purple/25 text-purple-light',
  },
];

const marqueeSkills = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'React Query', 'Axios', 'REST APIs', 'Git', 'Shadcn UI',
  'Bootstrap', 'Vite', 'SSR', 'CSR', 'Figma', 'Agile', 'Hero UI', 'npm',
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'React Query', 'Axios', 'REST APIs', 'Git', 'Shadcn UI',
  'Bootstrap', 'Vite', 'SSR', 'CSR', 'Figma', 'Agile', 'Hero UI', 'npm',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-80 h-80 bg-sky/10 animate-blobFloat top-10 -right-10 opacity-60" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Technical Skills</p>
          <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            My <span className="text-gradient-blue italic">toolkit</span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden mb-16"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}>
          <div className="marquee-track">
            {marqueeSkills.map((skill, i) => (
              <span key={i} className="skill-pill mx-2">{skill}</span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ emoji, title, skills, accent, pillBg }) => (
            <div key={title} className={`card p-6 ${accent}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${accent}`}
                  style={{ border: '1px solid rgba(196,181,253,0.15)' }}>
                  {emoji}
                </div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${pillBg} transition-all duration-200 hover:-translate-y-0.5 cursor-default`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
