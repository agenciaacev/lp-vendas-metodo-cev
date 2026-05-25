export default function GuaranteeSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#050505' }}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center" data-aos="fade-up">

        <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-full mb-10"
          style={{ background: 'rgba(214,163,84,0.08)', border: '2px solid rgba(214,163,84,0.3)' }}>
          <div className="absolute inset-2 rounded-full"
            style={{ border: '1px solid rgba(214,163,84,0.15)' }} />
          <span className="text-4xl">🛡️</span>
        </div>

        <span className="section-label block mb-6">Garantia incondicional</span>

        <h2 className="font-bebas leading-tight mb-8" style={{ fontSize: 'clamp(1.76rem, 4.22vw, 4.22rem)', color: '#FFFFFF' }}>
          <span className="block">Se não for para você,</span>
          <span className="block gold-gradient" style={{ whiteSpace: 'nowrap' }}>devolvemos tudo.</span>
          <span className="block">Sem perguntas.</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { num: '7', label: 'dias de garantia', icon: '📅' },
            { num: '100%', label: 'reembolso garantido', icon: '💰' },
            { num: '0', label: 'perguntas feitas', icon: '🤝' },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl" style={{ background: '#111111', border: '1px solid #1F1F1F' }}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-bebas text-5xl gold-text mb-1">{item.num}</div>
              <div className="text-sm" style={{ color: '#B3B3B3' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base max-w-xl mx-auto" style={{ color: '#777777' }}>
          Você tem 7 dias para testar o método, aplicar o que aprendeu e avaliar se vale o investimento. Se não tiver satisfeito por qualquer razão, devolvemos cada centavo.
        </p>
        <div data-aos="fade-up" data-aos-delay="100" className="mt-16 flex flex-col items-center">
          <a href="#planos" className="btn-gold text-base sm:text-lg px-10 py-5 rounded-xl font-bold tracking-wide uppercase inline-block">
            Quero o Método CEV agora
          </a>
        </div>

      </div>
    </section>
  );
}
