const plans = [
  {
    name: 'Essencial',
    price: '16,42',
    installments: '12x de',
    total: 'R$ 197',
    highlight: false,
    features: [
      { label: 'Acesso aos módulos C e E', active: true },
      { label: 'Material de apoio', active: true },
      { label: 'Comunidade exclusiva', active: true },
      { label: 'Módulo de Vendas (V)', active: false },
      { label: 'AI CEV integrado', active: false },
      { label: 'Mentoria em grupo', active: false },
    ],
    cta: 'Quero o Essencial',
    badge: null,
  },
  {
    name: 'Completo',
    price: '29,90',
    installments: '12x de',
    total: 'R$ 359',
    highlight: true,
    features: [
      { label: 'Acesso a todos os módulos CEV', active: true },
      { label: 'Material de apoio', active: true },
      { label: 'Comunidade exclusiva', active: true },
      { label: 'Módulo de Vendas (V)', active: true },
      { label: 'AI CEV integrado', active: false },
      { label: 'Mentoria em grupo', active: false },
    ],
    cta: 'Quero o Completo',
    badge: 'Mais escolhido',
  },
  {
    name: 'Completo + AI CEV',
    price: '49,90',
    installments: '12x de',
    total: 'R$ 597',
    highlight: false,
    features: [
      { label: 'Acesso a todos os módulos CEV', active: true },
      { label: 'Material de apoio', active: true },
      { label: 'Comunidade exclusiva', active: true },
      { label: 'Módulo de Vendas (V)', active: true },
      { label: 'AI CEV integrado', active: true },
      { label: 'Mentoria em grupo', active: true },
    ],
    cta: 'Quero o Completo + AI',
    badge: 'Máximo resultado',
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
          <h2 className="font-bebas leading-tight" style={{ fontSize: 'clamp(2.11rem, 4.93vw, 4.93rem)', color: '#FFFFFF' }}>
            Três formas de entrar.<br />
            <span className="gold-gradient">Uma única decisão certa.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, #111111, #0f0f0f)',
                border: '1px solid rgba(214,163,84,0.5)',
                boxShadow: '0 0 40px rgba(214,163,84,0.1)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D6A354, transparent)' }} />

              {plan.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(214,163,84,0.15)', color: '#D6A354', border: '1px solid rgba(214,163,84,0.3)' }}>
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-3" style={{ color: '#777777' }}>{plan.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-xs" style={{ color: '#B3B3B3' }}>{plan.installments}</span>
                    <span className="font-bebas text-5xl" style={{ color: '#F1C87A' }}>
                      R$ {plan.price}
                    </span>
                  </div>
                  <div className="text-xs" style={{ color: '#777777' }}>ou {plan.total} à vista</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <span style={{ color: f.active ? '#D6A354' : '#333333' }}>
                        {f.active ? '✓' : '✕'}
                      </span>
                      <span style={{ color: f.active ? '#B3B3B3' : '#333333' }}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="btn-gold w-full py-4 rounded-xl text-sm font-bold tracking-wide uppercase transition-all duration-300"
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
