'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  prefix?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterText({
  texts,
  prefix = '',
  speed = 95,
  deleteSpeed = 55,
  pauseTime = 2200,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const finishedTyping = currentText === currentFullText;
    const finishedDeleting = currentText === '';

    if (finishedTyping && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (finishedDeleting && isDeleting) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? currentText.length - 1 : currentText.length + 1;
      setCurrentText(currentFullText.slice(0, nextLength));
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, deleteSpeed, isDeleting, pauseTime, speed, texts]);

  return (
    <div className="inline-flex min-h-[3.5rem] items-center rounded-full border border-[var(--border)] bg-white/70 px-5 py-3 shadow-[0_10px_35px_rgba(20,54,66,0.08)] backdrop-blur">
      <span className="text-xl font-semibold tracking-tight text-[var(--deep)] sm:text-2xl">
        {prefix ? <span>{prefix} </span> : null}
        <span className="border-b-2 border-[var(--accent)] pb-0.5 text-[var(--accent-dark)]">{currentText}</span>
        <span className="ml-1 inline-block animate-pulse text-[var(--accent)]">|</span>
      </span>
    </div>
  );
}
