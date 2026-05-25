import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col mesh-bg"
      style={{ paddingTop: '80px', overflow: 'visible' }}
    >
      {/* Grid decorativo */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(#D6A354 1px, transparent 1px), linear-gradient(90deg, #D6A354 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      {/* Glow central */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D6A354, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-0 w-full text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6" data-aos="fade-down" data-aos-duration="600">
          <div className="h-px w-8" style={{ background: '#D6A354' }} />
          <span className="section-label">Método CEV — Cleane Fontenele</span>
          <div className="h-px w-8" style={{ background: '#D6A354' }} />
        </div>

        {/* Headline */}
        <div className="mb-6" data-aos="fade-up" data-aos-duration="700">
          <h1
            className="font-bebas leading-none w-full text-center"
            style={{ fontSize: 'clamp(2.4rem, 3.5vw, 4.4rem)' }}
          >
            <span className="text-white">Você produz </span>
            <span className="gold-gradient">conteúdo</span>
            <span className="text-white"> todo dia </span>
            <span style={{ color: '#FFFFFF' }}>e não vende nada.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#B3B3B3' }}>
            O problema não é a quantidade de conteúdo que você faz.
            É que você nunca teve um método para transformar audiência em faturamento.
            <span className="text-white font-semibold"> Isso muda agora.</span>
          </p>
        </div>

        {/* Provas sociais */}
        <div className="flex flex-wrap justify-center gap-6 mb-10" data-aos="fade-up" data-aos-delay="500">
          {[
            { num: '+ de 6M', label: 'seguidores impactados' },
            { num: '+ de 1B', label: 'visualizações' },
            { num: 'Empresária', label: 'CEO da ACEV' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-sm font-bold" style={{ color: '#D6A354' }}>{item.num}</div>
              <div className="h-4 w-px" style={{ background: '#2A2A2A' }} />
              <div className="text-sm" style={{ color: '#777777' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Print da plataforma */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="900"
          className="relative mb-12"
        >
          {/* Barra estilo browser */}
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-t-xl"
            style={{
              background: '#161616',
              border: '1px solid #2A2A2A',
              borderBottom: 'none',
            }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
            <div className="ml-3 flex-1 h-5 rounded-xl" style={{ background: '#1F1F1F', maxWidth: '300px' }} />
          </div>

          {/* Imagem otimizada */}
          <div
            className="relative overflow-hidden rounded-b-xl"
            style={{
              border: '1px solid #2A2A2A',
              borderTop: 'none',
              boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(214,163,84,0.07)',
            }}
          >
            <Image
              src="/plataforma1.png"
              alt="Plataforma CEV"
              width={1200}
              height={800}
              priority
              className="w-full h-auto block"
            />
          </div>

          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(214,163,84,0.08)' }}
          />
        </div>

        {/* Aprenda com quem vive o mercado */}
        <div className="max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="700">
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#B3B3B3' }}>
            Aprenda com quem vive o mercado de comunicação a mais de 17 anos{' '}
            <span className="text-white font-semibold">NA PRÁTICA</span>, e não na teoria.
          </p>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="800" className="mb-24 flex flex-col items-center">
          <a href="#planos" className="btn-gold text-base sm:text-lg px-10 py-5 rounded-xl font-bold tracking-wide uppercase inline-block">
            Quero o Método CEV agora
          </a>
          <p className="mt-4 text-sm" style={{ color: '#777777' }}>
            ↓ A partir de 12x de R$ 16,42 — acesso imediato
          </p>
        </div>

      </div>
    </section>
  );
}
