const plans = [
  {
    name: 'Essencial',
    price: '16,42',
    installments: '12x de',
    total: 'R$ 197,00',
    originalPrice: null,
    discount: null,
    subtitle: null,
    badge: null,
    badgeColor: null,
    features: [
      'Aulas de conteúdo, estratégia e vendas',
      'Acesso imediato e direto ao ponto',
      'Estratégias práticas para vender todos os dias',
      '25 módulos com aulas direto ao ponto',
      'Conteúdo, estratégia e vendas na prática',
      'Acesso imediato após a compra',
      'Suporte e comunidade de alunos',
    ],
  },
  {
    name: 'Completo',
    price: '41,42',
    installments: '12x de',
    total: 'R$ 497,00',
    originalPrice: 'R$ 997',
    discount: '-50% OFF',
    subtitle: null,
    badge: '🔥 Mais vendido',
    badgeColor: { background: 'rgba(255,120,0,0.15)', color: '#FF7800', border: '1px solid rgba(255,120,0,0.4)' },
    features: [
      'Todas as aulas + participantes especiais',
      'Cases de sucesso e conteúdos exclusivos',
      'Estratégias práticas para vender todos os dias',
      '27 módulos com aulas direto ao ponto',
      'Conteúdo, estratégia e vendas na prática',
      'Acesso imediato após a compra',
      'Suporte e comunidade de alunos',
      'Livro digital Método CEV Completo *BONUS*',
    ],
  },
  {
    name: 'Completo + AI CEV',
    price: '133,08',
    installments: '12x de',
    total: 'R$ 1.597,00',
    originalPrice: null,
    discount: null,
    subtitle: 'Agente de Marketing 24h incluso',
    badge: 'Melhor custo-benefício',
    badgeColor: { background: 'rgba(0,180,80,0.15)', color: '#00B450', border: '1px solid rgba(0,180,80,0.4)' },
    features: [
      'Tudo do Completo incluso',
      'Agente de Marketing IA disponível 24h',
      'Gera prompt, textos e scripts de conteúdo validados',
      'Templates já validados e autorais',
      'Cria narrações e áudios em vários formatos',
      'Gera fotos incríveis',
      'Cria vídeo de forma automática',
      'Gera PDFs prontos e profissionais',
      'Livro digital Método CEV Completo *BONUS*',
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="planos" className="relative py-28 overflow-hidden" style={{ background: '#050505' }}>
      <div className="absolute inset-0 opacity-5"
        style={{ background: 'radial-gradient(ellipse at center bottom, rgba(214,163,84,0.15), transparent 60%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center mb-20" data-aos="fade-up">
          <span className="section-label block mb-6">Planos</span>
          <h2 className="font-bebas leading-tight text-balance" style={{ fontSize: 'clamp(2.11rem, 4.93vw, 4.93rem)', color: '#FFFFFF' }}>
            Três formas de entrar.<br />
            <span className="gold-gradient">Uma única decisão certa.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative rounded-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #111111, #0f0f0f)',
                border: '1px solid rgba(214,163,84,0.5)',
                boxShadow: '0 0 40px rgba(214,163,84,0.1)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D6A354, transparent)' }} />

              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{
                    background: '#0d0d0d',
                    color: plan.badgeColor?.color,
                    border: plan.badgeColor?.border,
                  }}>
                  {plan.badge}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="font-bebas text-2xl mb-0.5" style={{ color: '#FFFFFF' }}>{plan.name}</div>
                  {plan.subtitle && (
                    <div className="text-xs mb-2" style={{ color: '#777777' }}>{plan.subtitle}</div>
                  )}
                  <div className="text-xs font-semibold tracking-widest uppercase mt-2" style={{ color: '#777777' }}>
                    {plan.installments}
                  </div>
                  <div className="font-bebas text-6xl" style={{ color: '#F1C87A' }}>
                    R$ {plan.price}
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-xs" style={{ color: '#777777' }}>ou à vista {plan.total}</span>
                    {plan.originalPrice && (
                      <span className="text-xs line-through" style={{ color: '#555555' }}>{plan.originalPrice}</span>
                    )}
                    {plan.discount && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(0,180,80,0.15)', color: '#00B450' }}>
                        {plan.discount}
                      </span>
                    )}
                  </div>
                </div>

                <div className="h-px mb-4" style={{ background: '#1F1F1F' }} />

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 shrink-0" style={{ color: '#D6A354' }}>•</span>
                      <span style={{ color: '#B3B3B3' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn-gold w-full py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300">
                  Garantir minha vaga →
                </button>
              </div>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
}
