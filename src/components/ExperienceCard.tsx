import React from 'react';
import Image from 'next/image';

export type ExperienceCardProps = {
  logo: string;
  image: string;
  role: string;
  name: string;
  description: string;
  timeframe: string;
  link: string;
  rounded: boolean;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  image,
  role,
  name,
  description,
  timeframe,
  link,
  rounded,
}) => {
  return (
    <div className="w-full xl:w-4/5 mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
      {/* Left: Info */}
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={56}
              height={56}
              className={`rounded-full border-2 border-gray-200 bg-white object-contain ${rounded ? 'shadow-lg' : ''}`}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 leading-tight">{role}</h3>
            <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full tracking-wide border border-gray-200">
              {name}
            </span>
          </div>
        </div>
        <div className="text-gray-700 text-base mb-4">
          {description}
        </div>
        <div className="text-gray-400 text-sm mb-6">
          {timeframe}
        </div>
      </div>
      {/* Right: Image with overlay, clickable */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex-1 min-h-[220px] lg:min-h-0 lg:w-[350px] xl:w-[400px] 2xl:w-[450px] flex items-center justify-center group"
        tabIndex={0}
        aria-label={`Visit ${name}`}
      >
        <Image
          src={image}
          alt="Experience visual"
          fill
          className="object-cover rounded-br-2xl rounded-tr-2xl z-0 group-hover:scale-105 transition-transform"
          style={{ objectPosition: 'center' }}
        />
      </a>
    </div>
  );
};

export default ExperienceCard; 