import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import TypewriterText from './TypewriterText';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const quickStats = [
  { label: 'Based in', value: 'Southern California' },
  { label: 'Focus', value: 'Full-stack products' },
  { label: 'Strength', value: 'Building useful software' },
];

export default function HomeSection() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div data-aos="fade-right" className="flex flex-col justify-center">
          <div className="panel inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <span className="muted">Open to software engineering opportunities</span>
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="eyebrow mb-4">Software Engineer · UC Irvine</p>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Building practical digital products with a calm eye for detail.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              I&apos;m Bowen Wang, a developer who enjoys turning messy workflows and ambitious ideas into polished,
              useful experiences for real people.
            </p>
          </div>

          <div className="mt-8">
            <TypewriterText
              texts={[
                'Full-stack developer',
                'Systems-minded builder',
                'Community-driven teammate',
              ]}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--deep)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(20,54,66,0.22)] hover:-translate-y-0.5 hover:bg-[#102c36]"
            >
              View projects
              <FaArrowRight />
            </a>
            <a
              href="/BowenWangResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 hover:-translate-y-0.5 hover:bg-white"
            >
              Open resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/bowenwang0815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/75 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white"
              aria-label="GitHub"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/bowenwang0815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/75 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-base" />
              LinkedIn
            </a>
            <a
              href="mailto:bowenwang0815@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/75 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white"
              aria-label="Email"
            >
              <FaEnvelope className="text-base" />
              Email
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="panel rounded-[1.75rem] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-dark)]">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-left" className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute right-6 top-8 hidden h-28 w-28 rounded-full bg-[rgba(197,106,61,0.14)] blur-2xl md:block" />
          <div className="absolute bottom-10 left-4 hidden h-36 w-36 rounded-full bg-[rgba(20,54,66,0.14)] blur-3xl md:block" />

          <div className="panel relative flex w-full max-w-[28rem] flex-col gap-4 rounded-[2rem] p-4 sm:p-6">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--sand)] px-4 py-3 shadow-lg sm:absolute sm:-left-8 sm:top-6 sm:z-10 sm:max-w-[15rem]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-dark)]">Now building</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Community tools, dashboards, and web apps</p>
            </div>

            <div className="order-3 rounded-2xl border border-[var(--border)] bg-white/95 px-4 py-3 shadow-lg sm:absolute sm:-right-8 sm:bottom-8 sm:z-10 sm:max-w-[14rem]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-dark)]">Approach</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Fast iteration with strong fundamentals</p>
            </div>

            <div className="relative order-2 overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.45),rgba(234,219,196,0.65))] p-3">
              <Image
                src="/me.jpg"
                alt="Professional portrait of Bowen Wang"
                width={600}
                height={760}
                className="h-auto w-full rounded-[1.3rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
