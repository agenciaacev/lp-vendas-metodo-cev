const bonuses = [
  { title: 'Calendário Editorial 90 dias', value: 'R$ 97', desc: 'Template pronto para planejar seu conteúdo com intenção estratégica por 3 meses.' },
  { title: 'Scripts de Stories que Vendem', value: 'R$ 67', desc: '30 roteiros prontos para transformar seus Stories em uma sequência de conversão.' },
  { title: 'Kit de Hashtags por Nicho', value: 'R$ 47', desc: 'Pesquisa completa com as melhores hashtags para 15 nichos diferentes.' },
  { title: 'Planilha de Análise de Métricas', value: 'R$ 79', desc: 'Dashboard para acompanhar os indicadores que realmente importam no seu crescimento.' },
];

export default function BonusSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#0B0B0D' }}>
      <div className="absolute inset-0 opacity-3"
        style={{ background: 'radial-gradient(ellipse at top, rgba(214,163,84,0.06), transparent 60%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center mb-6" data-aos="fade-up">
          <span className="section-label block mb-6">Bônus exclusivos</span>
          <h2 className="font-bebas leading-tight mb-4" style={{ fontSize: 'clamp(1.76rem, 4.22vw, 4.22rem)', color: '#FFFFFF' }}>
            Espera. Antes de fechar,<br />
            veja o que ainda vem<br />
            <span className="gold-gradient">junto com o curso.</span>
          </h2>
        </div>

        <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
          <p className="text-base max-w-xl mx-auto" style={{ color: '#B3B3B3' }}>
            Esses bônus não estão aqui para inflar o preço. Estão aqui porque sem eles o aprendizado demora mais para virar resultado.
          </p>
        </div>

        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="150">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-xl"
            style={{ background: 'rgba(214,163,84,0.05)', border: '1px solid rgba(214,163,84,0.2)' }}>
            <span className="text-sm" style={{ color: '#B3B3B3' }}>Valor total dos bônus:</span>
            <span className="font-bebas text-3xl gold-text">R$ 290</span>
            <span className="text-sm px-3 py-1 rounded-full font-bold" style={{ background: 'rgba(214,163,84,0.15)', color: '#D6A354' }}>
              GRÁTIS
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {bonuses.map((b, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative p-7 rounded-xl group transition-all duration-300 hover:border-opacity-100"
              style={{ background: '#111111', border: '1px solid #1F1F1F' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, #D6A354, transparent)' }} />

              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(214,163,84,0.1)', color: '#D6A354' }}>+</div>
                  <h3 className="font-bold text-white">{b.title}</h3>
                </div>
                <div className="text-sm font-bold" style={{ color: '#D6A354', textDecoration: 'line-through', opacity: 0.7 }}>{b.value}</div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#777777' }}>{b.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center pt-16 pb-28">
        <a href="#planos" className="btn-gold text-base sm:text-lg px-10 py-5 rounded-xl font-bold tracking-wide uppercase inline-block">
          Quero o Método CEV agora
        </a>
      </div>
    </section>
  );
}
