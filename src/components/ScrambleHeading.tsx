'use client';

import { useEffect, useRef, useState } from 'react';

const SCRAMBLE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&?';

type ScrambleHeadingProps = {
  text: string;
  className?: string;
};

export default function ScrambleHeading({ text, className }: ScrambleHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setDisplayText(text);
      return;
    }

    const heading = headingRef.current;
    if (!heading) {
      return;
    }

    let intervalId: number | null = null;

    const startAnimation = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;
      let iteration = 0;

      intervalId = window.setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((character, index) => {
              if (character === ' ') {
                return ' ';
              }

              if (index < iteration) {
                return text[index];
              }

              return SCRAMBLE_CHARACTERS[Math.floor(Math.random() * SCRAMBLE_CHARACTERS.length)];
            })
            .join('')
        );

        iteration += 0.45;

        if (iteration >= text.length) {
          if (intervalId) {
            window.clearInterval(intervalId);
          }

          setDisplayText(text);
        }
      }, 38);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.35,
      }
    );

    observer.observe(heading);

    return () => {
      observer.disconnect();

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [text]);

  return (
    <h2 ref={headingRef} aria-label={text} className={className}>
      {displayText}
    </h2>
  );
}
