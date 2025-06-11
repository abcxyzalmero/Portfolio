import { useState, useEffect } from 'react';

export const useScrollEffect = (sectionId: string) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = rect.height;
        
        // Calculate how far we've scrolled into the section
        const progress = Math.min(
          Math.max((scrollPosition - sectionTop + window.innerHeight) / sectionHeight, 0),
          1
        );
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  return scrollProgress;
}; 