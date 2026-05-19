'use client';
import { useEffect, useState } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        background: 'rgba(5,5,5,0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(214,163,84,0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <div className="text-sm font-bold text-white">Método CEV</div>
          <div className="text-xs" style={{ color: '#777777' }}>A partir de 12x de R$ 16,42 — acesso imediato</div>
        </div>
        <button className="btn-gold px-8 py-3 rounded-xl text-sm font-bold tracking-wide uppercase whitespace-nowrap">
          Quero o Método CEV agora
        </button>
      </div>
    </div>
  );
}
