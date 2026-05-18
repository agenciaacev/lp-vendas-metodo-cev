const cards = [
  {
    letter: 'C',
    title: 'Conteúdo',
    desc: 'Você aprende a criar conteúdo com intenção — cada post com um papel específico dentro da jornada do cliente. Fim do conteúdo aleatório que não leva a lugar nenhum.',
    icon: '✦',
  },
  {
    letter: 'E',
    title: 'Estratégia',
    desc: 'Posicionamento, calendário editorial, análise de mercado e construção de autoridade. Você passa a entender o jogo inteiro, não apenas o próximo post.',
    icon: '◆',
  },
  {
    letter: 'V',
    title: 'Vendas',
    desc: 'Técnicas de conversão, estrutura de oferta, gatilhos e CTAs que funcionam. Porque conteúdo sem venda não paga conta.',
    icon: '▲',
  },
];

export default function FrameworkSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#0B0B0D' }}>
      <div className="absolute inset-0 opacity-3"
        style={{ background: 'radial-gradient(ellipse at center, rgba(214,163,84,0.05), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center mb-20">
          <span className="section-label block mb-6" data-aos="fade-up">O framework</span>
          <h2 className="font-bebas leading-none mb-6" style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }} data-aos="fade-up" data-aos-delay="100">
            <span className="gold-gradient">Três letras.</span><br />
            <span className="text-white">Um sistema completo</span><br />
            <span className="text-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>de crescimento.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg" style={{ color: '#B3B3B3' }} data-aos="fade-up" data-aos-delay="200">
            O CEV não é mais um curso de &quot;como crescer no Instagram&quot;. É um framework operacional que cobre todo o ciclo de um negócio digital: da produção à conversão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="relative p-8 rounded-sm group transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ background: '#111111', border: '1px solid #1F1F1F' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(214,163,84,0.07), transparent)' }} />

              <div className="absolute -right-4 -bottom-8 font-bebas text-9xl select-none transition-all duration-500 group-hover:opacity-20"
                style={{ color: 'rgba(214,163,84,0.08)', fontSize: '10rem', lineHeight: 1 }}>
                {card.letter}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-sm flex items-center justify-center font-bebas text-3xl"
                    style={{ background: 'rgba(214,163,84,0.1)', color: '#D6A354', border: '1px solid rgba(214,163,84,0.2)' }}>
                    {card.letter}
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#D6A354' }}>
                      {card.icon} {card.letter} — 
                    </div>
                    <div className="text-xl font-bold text-white">{card.title}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#B3B3B3' }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
