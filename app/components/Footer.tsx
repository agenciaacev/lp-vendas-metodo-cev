'use client';

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden" style={{ background: '#050505', borderTop: '1px solid #1F1F1F' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="font-bebas text-2xl gold-text mb-1">Método CEV</div>
            <div className="text-xs" style={{ color: '#777777' }}>por Cleane Fontenele</div>
          </div>

          <div className="flex gap-6 text-sm" style={{ color: '#777777' }}>
            {['Política de Privacidade', 'Termos de Uso', 'Contato'].map((link, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors duration-200">{link}</a>
            ))}
          </div>

        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid #1F1F1F' }}>
          <p className="text-xs leading-relaxed" style={{ color: '#333333' }}>
            Este produto é comercializado com base nos resultados que o método entrega. Os resultados apresentados são baseados em casos reais de alunos. Resultados individuais podem variar conforme dedicação e contexto de cada pessoa.
          </p>
          <p className="text-xs mt-3" style={{ color: '#333333' }}>
            © {new Date().getFullYear()} Método CEV — Todos os direitos reservados. Cleane Fontenele.
          </p>
        </div>

      </div>
    </footer>
  );
}
