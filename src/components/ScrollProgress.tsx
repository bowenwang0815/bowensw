'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight <= 0 ? 0 : window.scrollY / scrollableHeight;

      setProgress(Math.min(Math.max(nextProgress, 0), 1));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left bg-[var(--accent)] shadow-[0_0_22px_rgba(197,106,61,0.55)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
