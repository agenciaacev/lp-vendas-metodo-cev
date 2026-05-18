const testimonials = [
  { name: 'Ana Lima', role: 'Coach de carreira', text: 'Em 30 dias aplicando o método, minha taxa de conversão no Direct triplicou. Finalmente entendi que o problema não era o meu produto.', result: '+312% em conversões' },
  { name: 'Marcus Tavares', role: 'Personal Trainer', text: 'Eu tinha 8 mil seguidores e não vendia nada. Depois do CEV entendi exatamente onde estava o buraco na minha estratégia.', result: 'R$ 18K em um mês' },
  { name: 'Julia Mendes', role: 'Loja de roupa feminina', text: 'O módulo de vendas mudou completamente como eu fazia minhas offers. Meu Stories virou uma máquina de conversão.', result: '4x mais vendas pelo Instagram' },
  { name: 'Rafael Costa', role: 'Advogado digital', text: 'Profissional liberal que não entendia nada de redes sociais. O CEV me deu um sistema claro para montar minha presença online.', result: '5 novos clientes no primeiro mês' },
  { name: 'Priscila Rocha', role: 'Nutricionista', text: 'Parei de depender de indicações e criei uma audiência que realmente compra. O conteúdo estratégico faz toda a diferença.', result: 'Agenda lotada em 45 dias' },
  { name: 'Diego Ferreira', role: 'E-commerce de suplementos', text: 'Aplicamos o framework de conteúdo e o nosso ROI em tráfego orgânico subiu absurdamente. Resultado em semanas, não meses.', result: 'ROI 8x em orgânico' },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#0B0B0D' }}>
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D6A354 1px, transparent 0)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center mb-20" data-aos="fade-up">
          <span className="section-label block mb-6">Resultados reais</span>
          <h2 className="font-bebas leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', color: '#FFFFFF' }}>
            O método já está funcionando.<br />
            Para quem decidiu{' '}
            <span className="gold-gradient">parar de esperar.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="relative p-7 rounded-sm group hover:-translate-y-1 transition-all duration-300"
              style={{ background: '#111111', border: '1px solid #1F1F1F' }}
            >
              <div className="absolute top-4 right-5 font-bebas text-7xl leading-none select-none"
                style={{ color: 'rgba(214,163,84,0.08)' }}>&quot;</div>

              <div className="mb-5 p-3 rounded-sm inline-block"
                style={{ background: 'rgba(214,163,84,0.1)', border: '1px solid rgba(214,163,84,0.15)' }}>
                <span className="text-xs font-bold" style={{ color: '#D6A354' }}>{t.result}</span>
              </div>

              <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: '#B3B3B3' }}>
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid #1F1F1F' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: 'rgba(214,163,84,0.15)', color: '#D6A354' }}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: '#777777' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
