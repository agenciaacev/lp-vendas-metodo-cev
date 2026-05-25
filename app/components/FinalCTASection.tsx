export default function FinalCTASection() {
  return (
    <section className="relative py-32 overflow-hidden mesh-bg">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(214,163,84,0.08) 0%, transparent 70%)' }} />

      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="absolute bottom-0 left-0 right-0 glow-line" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">

        <span className="section-label block mb-8" data-aos="fade-up">Última chamada</span>

        <h2 className="font-bebas leading-none mb-10" style={{ fontSize: 'clamp(2.46rem, 7.04vw, 7.04rem)' }} data-aos="fade-up" data-aos-delay="100">
          <span className="block text-white">O conteúdo que você</span>
          <span className="block gold-gradient">cria amanhã pode</span>
          <span className="block text-white" style={{ color: '#FFFFFF' }}>
            vender ou só ocupar espaço.
          </span>
        </h2>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#B3B3B3' }} data-aos="fade-up" data-aos-delay="200">
          A diferença entre os dois não é talento, não é quantidade de seguidores e não é sorte.{' '}
          <span className="text-white font-semibold">É método. E o método está aqui.</span>
        </p>

        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-gold px-12 py-5 rounded-xl text-base font-bold tracking-wide uppercase">
            Quero o Método CEV agora
          </button>
          <div className="text-sm" style={{ color: '#777777' }}>
            ↓ A partir de 12x de R$ 16,42
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8" data-aos="fade-up" data-aos-delay="400">
          {['Acesso imediato', 'Garantia de 7 dias', 'Suporte dedicado'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm" style={{ color: '#777777' }}>
              <span style={{ color: '#D6A354' }}>✓</span>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
