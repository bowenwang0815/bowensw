import dynamic from 'next/dynamic';
import React from 'react';

const GitHubCalendar = dynamic(() => import('react-github-calendar'), { ssr: false });

export default function GitHubCalendarSection() {
  return (
    <section id="github-calendar" className="min-h-[350px] flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">GitHub Activity</h2>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[350px] max-w-full mx-auto">
            <GitHubCalendar
              username="bowenwang0815"
              blockSize={12}
              blockMargin={4}
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 