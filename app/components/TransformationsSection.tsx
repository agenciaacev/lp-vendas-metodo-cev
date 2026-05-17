'use client';

const turns = [
  { micro: 'Do invisível ao encontrado', headline: 'Você para de ser ignorado nas redes.' },
  { micro: 'Do anônimo ao protagonista', headline: 'Você para de competir e vira a escolha óbvia.' },
  { micro: 'Do conteúdo aleatório ao conteúdo estratégico', headline: 'Cada post passa a trabalhar por você.' },
  { micro: 'Da oferta ignorada à oferta desejada', headline: 'O que você vende passa a ser irresistível.' },
  { micro: 'Do engajamento ao faturamento', headline: 'Suas curtidas viram vendas de verdade.' },
  { micro: 'Do dinheiro desperdiçado ao investimento que retorna', headline: 'Você para de queimar verba e começa a escalar resultados.' },
  { micro: 'Do esforço constante à venda automatizada', headline: 'A IA passa a trabalhar enquanto você descansa.' },
];

export default function TransformationsSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#050505' }}>
      <div className="absolute left-0 top-0 w-px h-full" style={{ background: 'linear-gradient(180deg, transparent, #D6A354, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Coluna sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start" data-aos="fade-right">
            <span className="section-label block mb-6">As viradas do método</span>
            <h2 className="font-bebas leading-tight mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', color: '#FFFFFF' }}>
              Sete viradas que vão mudar a forma como você vende{' '}
              <span className="gold-gradient">para sempre.</span>
            </h2>
            <p className="text-base" style={{ color: '#777777' }}>
              Cada módulo do CEV foi desenhado para gerar uma transformação específica no seu negócio digital.
            </p>

            <div className="mt-12 p-6 rounded-sm" style={{ background: '#111111', border: '1px solid #1F1F1F' }}>
              <div className="font-bebas text-6xl gold-text mb-2">7</div>
              <div className="text-sm" style={{ color: '#B3B3B3' }}>módulos de transformação</div>
            </div>

            <button className="btn-gold mt-8 px-8 py-4 rounded-sm text-sm font-bold tracking-wide uppercase">
              Quero começar essa jornada
            </button>
          </div>

          {/* Lista de viradas */}
          <div className="space-y-2">
            {turns.map((turn, i) => (
              <div
                key={i}
                data-aos="fade-left"
                data-aos-delay={i * 80}
                className="relative p-7 rounded-sm group transition-all duration-300 hover:border-opacity-100 cursor-default"
                style={{ background: '#0B0B0D', border: '1px solid #1F1F1F' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(180deg, #D6A354, #9A6A2F)' }} />

                <div className="flex items-start gap-5">
                  <div className="shrink-0 font-bebas text-4xl leading-none" style={{ color: 'rgba(214,163,84,0.2)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#D6A354' }}>
                      {turn.micro}
                    </div>
                    <div className="text-lg font-bold text-white leading-snug group-hover:text-[#F1C87A] transition-colors duration-300">
                      {turn.headline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="glow-line mt-28" />
    </section>
  );
}
