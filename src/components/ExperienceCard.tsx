'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowUpRightFromSquare, FaChevronDown } from 'react-icons/fa6';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      data-aos="fade-up"
      className="panel overflow-hidden rounded-[2rem] border border-transparent transition-all duration-300 hover:border-[var(--accent-soft)] hover:shadow-[0_26px_70px_rgba(20,54,66,0.16)]"
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
        aria-expanded={isOpen}
      >
        <div className="flex min-w-0 items-center gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-white/90 p-3">
            <Image
              src={logo}
              alt={`${name} logo`}
              width={52}
              height={52}
              className={`h-13 w-13 object-contain ${rounded ? 'rounded-full' : 'rounded-xl'}`}
            />
          </div>

          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-dark)]">{timeframe}</p>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{role}</h3>
            <p className="truncate text-sm text-slate-600 sm:text-base">{name}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden rounded-full border border-[var(--border)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 sm:inline-flex">
            {isOpen ? 'Close' : 'Open'}
          </span>
          <FaChevronDown
            className={`text-sm text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="grid gap-6 border-t border-[var(--border)] px-6 py-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="max-w-2xl text-base leading-8 text-slate-700">{description}</p>
            </div>

            <div className="mt-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 hover:-translate-y-0.5 hover:bg-white"
              >
                Visit organization
                <FaArrowUpRightFromSquare className="text-sm" />
              </a>
            </div>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-[220px] overflow-hidden rounded-[1.5rem]"
            aria-label={`Visit ${name}`}
          >
            <Image
              src={image}
              alt={`${name} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,54,66,0.45)] via-transparent to-transparent" />
          </a>
        </div>
      )}
    </article>
  );
};

export default ExperienceCard;
