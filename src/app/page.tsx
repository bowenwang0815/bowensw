'use client';

import { useEffect } from 'react';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ExperiencesSection from '../components/ExperiencesSection';
import ProjectsSection from '../components/ProjectsSection';
import GitHubCalendarSection from '../components/GitHubCalendarSection';

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

  return (
    <main className="min-h-screen">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="text-xl font-bold">Bowen Wang</a>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#home" className="text-gray-900 hover:text-gray-600 px-3 py-2">Home</a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 px-3 py-2">About</a>
              <a href="#experiences" className="text-gray-900 hover:text-gray-600 px-3 py-2">Experiences</a>

              <a href="#projects" className="text-gray-900 hover:text-gray-600 px-3 py-2">Projects</a>
              <a
                href="/BowenWangResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 px-3 py-2"
              >
                Resume
              </a>

            </div>
          </div>
        </div>
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

        
      </div>
    </main>
  );
}
