import React from 'react';
import Image from 'next/image';

export type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  date: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tech,
  link,
  github,
  date,
}) => {
  return (
    <div data-aos="fade-up" className="w-full xl:w-4/5 mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
      {/* Left: Info */}
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-1">{title}</h3>
          <div className="text-xs text-gray-400 mb-3">{date}</div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span key={t} className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-full border border-gray-200">
                {t}
              </span>
            ))}
          </div>
        </div>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-blue-600 hover:underline"
          >
            View on GitHub
          </a>
        )}
      </div>
      {/* Right: Image, clickable, no gradient */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex-1 min-h-[180px] lg:min-h-0 lg:w-[300px] xl:w-[350px] 2xl:w-[400px] flex items-center justify-center group"
        tabIndex={0}
        aria-label={`Visit project: ${title}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-br-2xl rounded-tr-2xl z-0 group-hover:scale-105 transition-transform"
          style={{ objectPosition: 'center' }}
        />
      </a>
    </div>
  );
};

export default ProjectCard; 