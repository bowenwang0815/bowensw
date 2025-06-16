import ExperienceCard from './ExperienceCard';

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experiences</h2>
        <div className="flex flex-col gap-8 w-full">
          {/* Example Experience Cards - replace with your own data/images */}
          <ExperienceCard
            
            logo="/ctc.svg"
            image="/ctc.svg"
            role="Full Stack Developer"
            name="Commit the Change"
            description="Worked on building scalable web applications for Non-profit organizations."
            timeframe="September 2024 - Present"
            link="https://ctc-uci.com"
            rounded={true}
          />
          <ExperienceCard
            logo="/uciics.jpg"
            image="/pa.jpeg"
            role="Peer Academic Advisors"
            name="Donald Bren School of ICS Undergraduate Student Affairs "
            description="Advised students on course planning, major requirements, and academic resources. Helped new and continuing students navigate the ICS curriculum through one-on-one meetings, workshops, and orientation events."
            timeframe="September 2024 - Present"
            link="https://academicadvising.uci.edu/paa/meet-paas/ics/"
            rounded={true}
          />
        </div>
      </div>
    </section>
  );
} 