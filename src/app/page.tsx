'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ExperiencesSection from '../components/ExperiencesSection';
import ProjectsSection from '../components/ProjectsSection';
import GitHubCalendarSection from '../components/GitHubCalendarSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial hash check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#projects', label: 'Projects' },
    { href: '/BowenWangResume.pdf', label: 'Resume', external: true },
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="text-xl font-bold">Bowen Wang</a>
            </div>
            {/* Desktop Nav */}
            <div className="hidden sm:flex sm:space-x-8">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-600 px-3 py-2"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-900 hover:text-gray-600 px-3 py-2"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
            {/* Hamburger Icon for Mobile */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setMenuOpen((open) => !open)}
                className="text-2xl text-gray-900 focus:outline-none"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white/95 shadow-md px-4 py-4 space-y-2 flex flex-col items-center animate-fade-in-down">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-gray-900 hover:text-gray-600 px-3 py-2 text-lg text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="block w-full text-gray-900 hover:text-gray-600 px-3 py-2 text-lg text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Main Content Sections */}
      <div>
        <HomeSection />

        {/* About Section */}
        <AboutSection />

        {/* Experiences Section */}
        <ExperiencesSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* GitHub Calendar Section */}
        <GitHubCalendarSection />

        <ContactSection />
      </div>
    </main>
  );
}
