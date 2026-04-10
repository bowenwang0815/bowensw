'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');

    if (mediaQuery.matches || coarsePointerQuery.matches) {
      return;
    }

    let animationFrame = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    const animate = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      document.documentElement.style.setProperty('--cursor-glow-x', `${currentX}px`);
      document.documentElement.style.setProperty('--cursor-glow-y', `${currentY}px`);

      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setVisible(true);
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    animate();

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
    };
  }, []);

  return <div className={`cursor-glow ${visible ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />;
}
