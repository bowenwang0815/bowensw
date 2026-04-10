'use client';

import { ReactNode, useEffect, useRef } from 'react';

type MagneticItemProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function MagneticItem({ children, className = '', strength = 0.35 }: MagneticItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');

    if (mediaQuery.matches || coarsePointerQuery.matches) {
      return;
    }

    const item = itemRef.current;
    if (!item) {
      return;
    }

    let animationFrame = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;

      item.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = item.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      const distance = Math.hypot(offsetX, offsetY);
      const influenceRadius = Math.max(bounds.width, bounds.height) * 1.2;

      if (distance > influenceRadius) {
        targetX = 0;
        targetY = 0;
        return;
      }

      targetX = offsetX * strength;
      targetY = offsetY * strength;
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
    };

    animate();
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset);
      item.style.transform = 'translate3d(0, 0, 0)';
    };
  }, [strength]);

  return (
    <div ref={itemRef} className={`magnetic-item ${className}`}>
      {children}
    </div>
  );
}
