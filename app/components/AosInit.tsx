'use client';

import { useEffect } from 'react';

export default function AosInit() {
  useEffect(() => {
    let cancelled = false;
    import('aos').then(({ default: AOS }) => {
      if (!cancelled) {
        AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: true,
          offset: 60,
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
