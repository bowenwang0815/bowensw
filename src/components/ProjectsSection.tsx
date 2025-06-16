import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
        <div className="flex flex-col gap-8 w-full">
          <ProjectCard
            image="/fabflix.png"
            title="FabFlix"
            description="Full-stack movie database web app deployed on AWS with Docker and Kubernetes. Built with Java Servlets, JDBC, and MySQL, supporting search, filtering, pagination, authentication, and payments. Optimized with connection pooling and load balancing, improving query performance by over 150%."
            tech={["Java", "JDBC", "MySQL", "Docker", "Kubernetes", "AWS"]}
            link="https://github.com/bowenwang0815/2025-spring-cs-122b-team-super-idol"
            github="https://github.com/bowenwang0815/2025-spring-cs-122b-team-super-idol"
            date="March 2025 - June 2025"
          />
          <ProjectCard
            image="/cse.png"
            title="Attendance Tracking System for NonProfit Organization"
            description="Web and mobile platform built for a nonprofit Chinese dance organization Center Stage to improve how they manage classes, RSVPs, and attendance. This project replaces a manual, WeChat-based system with a centralized portal that saves time and reduces error."
            tech={["React","Chakra UI", "Node.js", "PostgreSQL"]}
            link="https://github.com/ctc-uci/Center-Stage"
            github="https://github.com/ctc-uci/Center-Stage"
            date="March 2025 - June 2025"
          />
           <ProjectCard
            image="/touchinggrass.png"
            title="Touching Grass"
            description="Touching Grass is a mobile app that encourages users to explore the outdoors by letting them identify plants in real time.￼"
            tech={["Swift", "Gemini AI"]}
            link="https://devpost.com/software/touching-grass-dc259j"
            github="https://github.com/bowenwang0815/TouchingGrass"
            date="April 2024"
          />
          <ProjectCard
            image="/petrpage.png"
            title="PetrPage"
            description="PetrPage is a social media app designed to connect users within shared communities. It supports both casual hangouts and productivity-focused interactions, making it versatile for chat, collaboration, and social engagement.￼"
            tech={["React", "Node.js", "Python", "SQLite3"]}
            link="https://devpost.com/software/petrpage"
            github="https://github.com/theNatePi/PetrPages"
            date="February 2024"
          />
        </div>
      </div>
    </section>
  );
} 