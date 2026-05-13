'use client';
import { Mail, GitFork, Link2, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'marinaafranswa@gmail.com', href: 'mailto:marinaafranswa@gmail.com', accent: 'text-pink', bg: 'bg-pink/10 border-pink/25' },
  { icon: Phone, label: 'Phone', value: '+201556014667', href: 'tel:+201556014667', accent: 'text-purple', bg: 'bg-purple/10 border-purple/25' },
  { icon: MapPin, label: 'Location', value: 'Alexandria, Egypt', href: '#', accent: 'text-sky', bg: 'bg-sky/10 border-sky/25' },
  { icon: GitFork, label: 'GitHub', value: 'github.com/marinafranswa', href: 'https://github.com/marinafranswa', accent: 'text-yellow', bg: 'bg-yellow/10 border-yellow/25' },
  { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/marinafranswa', href: 'https://linkedin.com/in/marinafranswa', accent: 'text-pink', bg: 'bg-pink/10 border-pink/25' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:marinaafranswa@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 pb-16 overflow-hidden">
      <div
        className="blob w-112.5 h-112.5 -bottom-24 left-1/2 -translate-x-1/2 opacity-15"
        style={{ background: "radial-gradient(circle, #FF6EB4, #8B5CF6)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Get In Touch</p>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Let&apos;s <span className="text-gradient italic">create</span>{" "}
            together
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto leading-relaxed font-light text-sm md:text-base">
            I&apos;m actively seeking new opportunities. Whether you have a
            project in mind or just want to say hello — my inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info cards */}
          <div className="flex flex-col gap-3">
            {contactInfo.map(
              ({ icon: Icon, label, value, href, accent, bg }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 p-4 no-underline group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${bg} ${accent} transition-transform duration-200 group-hover:scale-110`}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-muted text-[10px] font-semibold tracking-widest uppercase">
                      {label}
                    </p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </Link>
              ),
            )}
          </div>

          {/* Form */}
          <div className="card p-6 md:p-8">
            <div className="flex gap-1 items-center mb-6">
              <p className="font-display text-xl md:text-2xl font-bold ">
                Send a message!
              </p>
              <MessageCircle />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                required
                className="input-field"
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                required
                className="input-field"
              />
              <textarea
                placeholder="Your message..."
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                required
                rows={5}
                className="input-field resize-y"
              />
              <button
                type="submit"
                className="btn-primary justify-center w-full"
              >
                {sent ? (
                  "✅ Message sent!"
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
      </div>
    </section>
  );
}
