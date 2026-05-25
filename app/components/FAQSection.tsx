'use client';
import { useState } from 'react';

const faqs = [
  { q: 'Para quem é o Método CEV?', a: 'O CEV é para empreendedores, criadores de conteúdo, profissionais liberais e donos de negócio que já produzem conteúdo mas não estão convertendo em vendas. Se você posta mas não vende, o método foi feito para você.' },
  { q: 'Preciso ter muitos seguidores?', a: 'Não. O CEV funciona independentemente do tamanho da sua audiência. O método foca em qualidade de estratégia, não em quantidade de seguidores. Temos alunos que vendem muito com audiências menores de 5 mil pessoas.' },
  { q: 'Em quanto tempo vou ver resultados?', a: 'Os primeiros resultados acontecem nas primeiras semanas de aplicação. Mas o impacto mais significativo é cumulativo: quanto mais você aplica o método, mais consistentes ficam os resultados.' },
  { q: 'O que é o AI CEV?', a: 'O AI CEV é um assistente de inteligência artificial treinado no método para ajudá-lo a criar conteúdo, estruturar ofertas e planejar estratégias em tempo real. Está disponível no plano Completo + AI CEV.' },
  { q: 'Como funciona o acesso?', a: 'Após a confirmação do pagamento, você recebe acesso imediato à plataforma por e-mail. O conteúdo é liberado por módulos sequenciais para garantir a melhor absorção.' },
  { q: 'Posso parcelar?', a: 'Sim. O pagamento pode ser parcelado em até 12x no cartão de crédito. Também aceitamos Pix com desconto especial à vista.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#0B0B0D' }}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-label block mb-6">Perguntas frequentes</span>
          <h2 className="font-bebas leading-tight" style={{ fontSize: 'clamp(1.76rem, 4.22vw, 4.22rem)', color: '#FFFFFF' }}>
            Suas dúvidas,{' '}
            <span className="gold-gradient">respondidas.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{ border: `1px solid ${open === i ? 'rgba(214,163,84,0.3)' : '#1F1F1F'}`, background: '#111111' }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-base font-semibold text-white">{faq.q}</span>
                <span className="ml-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: open === i ? 'rgba(214,163,84,0.15)' : 'transparent',
                    color: open === i ? '#D6A354' : '#777777',
                    border: `1px solid ${open === i ? 'rgba(214,163,84,0.3)' : '#333333'}`,
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}>
                  +
                </span>
              </button>

              <div style={{
                maxHeight: open === i ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}>
                <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: '#B3B3B3' }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mt-16 flex flex-col items-center">
          <a href="#planos" className="btn-gold text-base sm:text-lg px-10 py-5 rounded-xl font-bold tracking-wide uppercase inline-block">
            Quero o Método CEV agora
          </a>
        </div>

      </div>
    </section>
  );
}
