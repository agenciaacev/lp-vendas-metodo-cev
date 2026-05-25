import Image from 'next/image';

const stats = [
  { num: '697K', label: 'seguidores no Instagram' },
  { num: '500M+', label: 'views no TikTok' },
  { num: '25', label: 'marcas parceiras' },
  { num: '7+', label: 'anos no digital' },
];

export default function ExpertSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#050505' }}>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{ background: 'radial-gradient(ellipse at right, #D6A354, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Foto placeholder */}
          <div data-aos="fade-right" data-aos-duration="800" className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden"
              style={{ border: '1px solid #1F1F1F' }}>
              <div className="relative w-full h-full" style={{ background: 'linear-gradient(135deg, #111111, #0B0B0D)' }}>
                <Image
                  src="/identidade.png"
                  alt="Imagem de identidade"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 border-t border-r" style={{ borderColor: '#D6A354' }} />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l" style={{ borderColor: '#D6A354' }} />
            </div>

            <div className="absolute -bottom-6 -right-6 sm:right-0 p-4 rounded-xl hidden sm:block"
              style={{ background: '#111111', border: '1px solid rgba(214,163,84,0.3)' }}>
              <div className="font-bebas text-3xl gold-text">22K</div>
              <div className="text-xs" style={{ color: '#B3B3B3' }}>publicações</div>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <div data-aos="fade-up">
              <span className="section-label block mb-6 text-center lg:text-left">Quem está por trás do método</span>
              <h2 className="font-bebas leading-tight mb-8 text-center lg:text-left text-balance" style={{ fontSize: 'clamp(1.76rem, 3.52vw, 3.52rem)', color: '#FFFFFF' }}>
                Uma especialista que construiu o método{' '}
                <span className="gold-gradient">vivendo o mercado</span>,<br />
                não estudando ele.
              </h2>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-base leading-relaxed mb-6 text-center lg:text-left" style={{ color: '#B3B3B3' }}>
                Cleane Fontenele não criou o CEV em uma sala de aula. Ela criou testando, errando, ajustando e vendendo — durante anos, em nichos diferentes, para públicos diferentes, em plataformas diferentes.
              </p>
              <p className="text-base leading-relaxed mb-10 text-center lg:text-left" style={{ color: '#B3B3B3' }}>
                O resultado são 22 mil publicações, 25 marcas parceiras nacionais, uma agência de marketing, um programa de TV e um método que já transformou negócios em todo o Brasil.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
              {stats.map((s, i) => (
                <div key={i} className="p-5 rounded-xl"
                  style={{ background: '#111111', border: '1px solid #1F1F1F' }}>
                  <div className="font-bebas text-4xl mb-1 gold-gradient">{s.num}</div>
                  <div className="text-xs" style={{ color: '#777777' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
