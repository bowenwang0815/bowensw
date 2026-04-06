import dynamic from 'next/dynamic';
import React from 'react';

const GitHubCalendar = dynamic(() => import('react-github-calendar'), { ssr: false });

export default function GitHubCalendarSection() {
  return (
    <section id="github-calendar" className="py-10 sm:py-16">
      <div className="section-shell">
        <div className="panel rounded-[2rem] p-8 sm:p-10">
          <div className="section-heading mb-8">
            <p className="eyebrow">GitHub</p>
            <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">Recent activity.</h2>
            <p className="text-lg leading-8 text-slate-600">A quick snapshot of how I work and keep momentum.</p>
          </div>

          <div className="overflow-x-auto rounded-[1.5rem] border border-[var(--border)] bg-white/75 p-5 sm:p-6">
            <div className="min-w-[680px] text-slate-700">
              <GitHubCalendar
                username="bowenwang0815"
                blockSize={13}
                blockMargin={5}
                fontSize={14}
                colorScheme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
