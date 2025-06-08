import Link from "next/link";

export default function ExperienciaProfissional() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gray-900 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-white text-xl tracking-wide">Adrielly Campos Soares</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 font-medium">
            <li><Link href="/" className="hover:underline hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-blue-400 transition-colors">Sobre</Link></li>
            <li><Link href="/academica" className="hover:underline hover:text-blue-400 transition-colors">Acadêmica</Link></li>
            <li><Link href="/profissional" className="hover:underline hover:text-blue-400 transition-colors">Profissional</Link></li>
            <li><Link href="/projetos" className="hover:underline hover:text-blue-400 transition-colors">Projetos</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-blue-400 transition-colors">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col items-center sm:items-start p-8 sm:p-20 gap-16 max-w-4xl mx-auto font-sans">
        <main className="flex flex-col gap-8 text-center sm:text-left w-full">
          <h1 className="text-3xl sm:text-5xl font-bold text-left text-white-400">
            Experiência Profissional
          </h1>

          <div className="space-y-10 text-base sm:text-lg leading-relaxed">
            {/* CARD 1 */}
            <section className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                Estagiária em Análise de Sistemas
              </h2>
              <p>
                Empresa XYZ | Recife, PE <br />
                <span className="text-sm text-gray-400">outubro 2024 – presente</span>
              </p>
              <p className="mt-2">
                Desenvolvimento e análise de sistemas internos, apoio no levantamento de requisitos e testes.
              </p>
            </section>

            {/* CARD 2 */}
            <section className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                Assistente de Suporte em TI
              </h2>
              <p>
                Connecta Soluções Digitais | Recife, PE <br />
                <span className="text-sm text-gray-400">março 2024 – setembro 2024</span>
              </p>
              <p className="mt-2">
                Atendimento a usuários internos, resolução de problemas técnicos, controle de chamados e organização de ativos de TI.
              </p>
            </section>

            {/* CARD 3 */}
            <section className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                Auxiliar de Processos Digitais
              </h2>
              <p>
                Instituto de Tecnologia Cidadã | Recife, PE <br />
                <span className="text-sm text-gray-400">fevereiro 2023 – fevereiro 2024</span>
              </p>
              <p className="mt-2">
                Digitalização de documentos, alimentação de bancos de dados, apoio na implantação de sistemas internos e testes básicos.
              </p>
            </section>

            {/* CARD 4 */}
            <section className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                Estagiária em Projetos de TI
              </h2>
              <p>
                Secretaria Municipal de Inovação | Recife, PE <br />
                <span className="text-sm text-gray-400">maio 2022 – fevereiro 2023</span>
              </p>
              <p className="mt-2">
                Organização de cronogramas de projetos, produção de relatórios técnicos e levantamento de requisitos com usuários.
              </p>
            </section>

            {/* CARD 5 */}
            <section className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                Estagiária em Análise de Dados
              </h2>
              <p>
                Trabalha com Power BI, SQL, Excel e Python. <br />
                <span className="text-sm text-gray-400">outubro 2021 – julho 2022</span>
              </p>
              <p className="mt-2">
                Suporte a plataformas educacionais, manutenção de laboratórios e organização de equipamentos de TI para professores e estudantes.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
