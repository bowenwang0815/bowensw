'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterText({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000 
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentFullText = texts[currentTextIndex];
    
    if (isDeleting) {
      // Deleting text
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deleteSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Typing text
      if (currentText === currentFullText) {
        // Finished typing, pause then start deleting
        const timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
        
        return () => clearTimeout(timeout);
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="text-xl text-gray-600">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
} 