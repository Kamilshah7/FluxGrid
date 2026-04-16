"use client";

import { useEffect, useState } from 'react';

export interface PerformanceLevel {
  lowMotion: boolean;
  saveData: boolean;
  isWeakDevice: boolean;
}

export function useAdaptiveLoading() {
  const [performance, setPerformance] = useState<PerformanceLevel>({
    lowMotion: false,
    saveData: false,
    isWeakDevice: false,
  });

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Using explicit casts as some of these are non-standard or newer
    const nav = navigator as any;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
    
    const checkPerformance = () => {
      const isWeak = 
        (nav.deviceMemory && nav.deviceMemory < 4) || 
        (nav.hardwareConcurrency && nav.hardwareConcurrency < 4) ||
        (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g'));

      setPerformance({
        lowMotion: motionQuery.matches,
        saveData: !!(connection && connection.saveData),
        isWeakDevice: !!isWeak,
      });
    };

    checkPerformance();
    motionQuery.addEventListener('change', checkPerformance);
    
    return () => motionQuery.removeEventListener('change', checkPerformance);
  }, []);

  return performance;
}
