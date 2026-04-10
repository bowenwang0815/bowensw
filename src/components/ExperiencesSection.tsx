import ExperienceCard from './ExperienceCard';
import ScrambleHeading from './ScrambleHeading';

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-10 sm:py-16">
      <div className="section-shell">
        <div className="section-heading mb-10">
          <p className="eyebrow">Experience</p>
          <ScrambleHeading
            text="Real work. Real impact."
            className="text-5xl font-black tracking-[-0.04em] text-slate-900 sm:text-7xl"
          />
          <p className="text-lg leading-8 text-slate-600">
            Product, operations, and people-facing work across nonprofits and student support.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <ExperienceCard
            logo="/ctc.svg"
            image="/ctc.svg"
            role="Full Stack Developer"
            name="Commit the Change"
            description="Built software for nonprofit organizations with an emphasis on maintainability, scale, and clearer day-to-day operations. The work sharpened how I translate real stakeholder needs into practical product decisions."
            timeframe="September 2024 - Present"
            link="https://ctc-uci.com"
            rounded={true}
          />
          <ExperienceCard
            logo="/uciics.jpg"
            image="/pa.jpeg"
            role="Peer Academic Advisor"
            name="Donald Bren School of ICS Undergraduate Student Affairs"
            description="Advised students on course planning, degree requirements, and academic resources through one-on-one support, workshops, and orientation events. It strengthened my ability to communicate technical and procedural information with empathy."
            timeframe="September 2024 - Present"
            link="https://academicadvising.uci.edu/paa/meet-paas/ics/"
            rounded={true}
          />
        </div>
      </div>
    </section>
  );
}
