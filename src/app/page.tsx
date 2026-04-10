'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ExperiencesSection from '../components/ExperiencesSection';
import ProjectsSection from '../components/ProjectsSection';
import GitHubCalendarSection from '../components/GitHubCalendarSection';
import ContactSection from '../components/ContactSection';
import CursorGlow from '../components/CursorGlow';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experiences', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
    { href: '/BowenWangResume.pdf', label: 'Resume', external: true },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip pb-8">
      <ScrollProgress />
      <CursorGlow />

      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="section-shell pt-4">
          <div className="panel flex h-16 items-center justify-between rounded-full px-4 sm:px-6">
            <a href="#home" className="text-sm font-semibold tracking-[0.24em] text-[var(--deep)] uppercase">
              Bowen Wang
            </a>

            <div className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white/70 hover:text-[var(--deep)]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white/70 hover:text-[var(--deep)]"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 text-lg text-[var(--deep)] md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {menuOpen && (
            <div className="panel mt-3 flex flex-col gap-2 rounded-[2rem] p-4 md:hidden">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl px-4 py-3 text-center text-base font-medium text-slate-700 hover:bg-white/80 hover:text-[var(--deep)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-center text-base font-medium text-slate-700 hover:bg-white/80 hover:text-[var(--deep)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10">
        <HomeSection />
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection />
        <GitHubCalendarSection />
        <ContactSection />
      </div>
    </main>
  );
}
