import ProjectCard from './ProjectCard';
import ScrambleHeading from './ScrambleHeading';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-10 sm:py-16">
      <div className="section-shell">
        <div className="section-heading mb-10">
          <p className="eyebrow">Projects</p>
          <ScrambleHeading text="Selected builds." className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl" />
          <p className="text-lg leading-8 text-slate-600">Full-stack apps, mobile projects, and software for real organizations.</p>
        </div>

        <div className="flex flex-col gap-8">
          <ProjectCard
            image="/clchc-logo.svg"
            title="Celebrating Life Community Health Center"
            description="Built dashboards and appointment management tools for a nonprofit serving 22k+ patients. The work included a responsive React + TypeScript interface with full CRUD workflows, plus secure Node/Express APIs backed by PostgreSQL and Firebase-authenticated requests."
            tech={['React', 'TypeScript', 'Chakra UI', 'Node.js', 'Express', 'PostgreSQL', 'Firebase']}
            link="https://github.com/ctc-uci/clchc"
            github="https://github.com/ctc-uci/clchc"
            date="November 2025 - Present"
          />
          <ProjectCard
            image="/fabflix.png"
            title="FabFlix"
            description="Full-stack movie database web app deployed on AWS with Docker and Kubernetes. Built with Java Servlets, JDBC, and MySQL, with search, filtering, pagination, authentication, and payments. Performance tuning around pooling and load balancing improved query speed significantly."
            tech={['Java', 'JDBC', 'MySQL', 'Docker', 'Kubernetes', 'AWS']}
            link="https://github.com/bowenwang0815/2025-spring-cs-122b-team-super-idol"
            github="https://github.com/bowenwang0815/2025-spring-cs-122b-team-super-idol"
            date="March 2025 - June 2025"
          />
          <ProjectCard
            image="/cse.png"
            title="Attendance Tracking System for Center Stage"
            description="Web and mobile platform for a nonprofit dance organization to manage classes, RSVPs, and attendance in one place. It replaces a manual WeChat-based workflow with a centralized portal that reduces admin overhead and lowers the chance of human error."
            tech={['React', 'Chakra UI', 'Node.js', 'PostgreSQL']}
            link="https://github.com/ctc-uci/Center-Stage"
            github="https://github.com/ctc-uci/Center-Stage"
            date="November 2024 - June 2025"
          />
          <ProjectCard
            image="/touchinggrass.png"
            title="Touching Grass"
            description="Mobile app that encourages people to spend more time outdoors by identifying plants in real time and turning curiosity into an easy, playful interaction."
            tech={['Swift', 'Gemini AI']}
            link="https://devpost.com/software/touching-grass-dc259j"
            github="https://github.com/bowenwang0815/TouchingGrass"
            date="April 2024"
          />
          <ProjectCard
            image="/petrpage.png"
            title="PetrPage"
            description="Social platform built to connect people through shared communities, supporting both casual hangouts and more productivity-focused collaboration. The concept centered on making campus social interaction feel more intentional."
            tech={['React', 'Node.js', 'Python', 'SQLite3']}
            link="https://devpost.com/software/petrpage"
            github="https://github.com/theNatePi/PetrPages"
            date="February 2024"
          />
        </div>
      </div>
    </section>
  );
}
