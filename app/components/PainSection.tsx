const pains = [
  'Você posta todo dia, segue tendências, usa as hashtags certas... e no fim do mês a conta bancária não reflete nenhum esforço.',
  'Você já investiu em outros cursos de "marketing digital" e saiu com a cabeça cheia de teoria e o bolso igual.',
  'Seu negócio tem qualidade, tem produto, tem serviço — mas as pessoas que chegam até você não compram.',
  'Você sente que seus concorrentes vendem mais mesmo tendo menos seguidores e menos conteúdo que você.',
  'Você não sabe onde está o erro: no conteúdo? Na oferta? No preço? Na abordagem?',
];

export default function PainSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0B0B0D', paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #D6A354 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-16" data-aos="fade-up">
          <span className="section-label block mb-6">O diagnóstico honesto</span>
          <h2 className="font-bebas leading-tight" style={{ fontSize: 'clamp(2.11rem, 4.93vw, 4.93rem)', color: '#FFFFFF' }}>
            Seu produto não é o problema.
            A forma como você comunica 
            <span className="gold-gradient"> e vende, sim.</span>
          </h2>
        </div>

        <div className="grid gap-4 mb-16">
          {pains.map((pain, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="flex items-start gap-5 p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:border-opacity-50"
              style={{
                background: '#111111',
                border: '1px solid #1F1F1F',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, rgba(214,163,84,0.04), transparent)' }} />

              <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold relative z-10"
                style={{ background: 'rgba(214,163,84,0.1)', color: '#D6A354', border: '1px solid rgba(214,163,84,0.2)' }}>
                {i + 1}
              </div>
              <p className="text-base leading-relaxed relative z-10" style={{ color: '#B3B3B3' }}>
                {pain}
              </p>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="relative p-8 sm:p-10 rounded-xl"
          style={{ border: '1px solid rgba(214,163,84,0.3)', background: 'rgba(214,163,84,0.03)' }}>
          <div className="absolute -top-3 left-10 text-6xl font-bebas" style={{ color: 'rgba(214,163,84,0.15)' }}>&quot;</div>
          <blockquote className="text-xl sm:text-2xl leading-relaxed font-light text-center" style={{ color: '#FFFFFF' }}>
            Conteúdo sem estratégia é <span className="gold-text font-semibold">entretenimento</span>.<br />
            Estratégia sem venda é <span className="gold-text font-semibold">hobby</span>.<br />
            O CEV une os três — e transforma isso em <span className="gold-text font-semibold">negócio</span>.
          </blockquote>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mt-16 flex flex-col items-center">
          <button className="btn-gold text-base sm:text-lg px-10 py-5 rounded-xl font-bold tracking-wide uppercase">
            Quero o Método CEV agora
          </button>
        </div>

      </div>
    </section>
  );
}
