import Link from "next/link";

export default function academica() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gray-900 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-white text-xl tracking-wide">Adrielly Campos Soares</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-gray-300 font-medium">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:underline hover:text-blue-400 transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/academica" className="hover:underline hover:text-blue-400 transition-colors">
                Acadêmica
              </Link>
            </li>
            <li>
              <Link href="/profissional" className="hover:underline hover:text-blue-400 transition-colors">
                Profissional
              </Link>
            </li>
            <li>
              <Link href="/projetos" className="hover:underline hover:text-blue-400 transition-colors">
                Projetos Desenvolvidos
              </Link>
            </li>
            <li>
              <Link href="/jogo" className="hover:underline hover:text-blue-400 transition-colors">
                Jogo
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="px-6 py-12 sm:px-20 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-white">
          Experiência Acadêmica
        </h1>

        <div className="space-y-10">
          <section className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Graduação - Sistemas para Internet
            </h2>
            <p className="text-gray-400">
              Universidade Católica de Pernambuco (UNICAP) <br />
              <span className="text-sm text-gray-500">2024 - em andamento</span>
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Estou cursando Sistemas para Internet, onde desenvolvo competências em programação web, banco de dados, UX/UI, segurança da informação e análise de dados. Participo de projetos integradores que estimulam o trabalho em equipe e a aplicação prática dos conteúdos aprendidos.
            </p>
          </section>

          <section className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Cursos e Certificações
            </h2>
            <p className="text-gray-400">
              Participo de trilhas formativas em plataformas como Alura e Rocketseat. <br />
              <span className="text-sm text-gray-500">2024 - atual</span>
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Estou me especializando em Desenvolvimento Web com React, Next.js, e fundamentos de Análise de Dados utilizando Python, SQL e Power BI. Além disso, estudo automação de processos com Power Automate.
            </p>
          </section>

          <section className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Participações e Projetos Acadêmicos
            </h2>
            <ul className="list-disc list-inside ml-5 space-y-2 text-gray-300">
              <li>Desenvolvimento de projetos web em equipe utilizando React e Tailwind CSS.</li>
              <li>Criação de dashboards interativos com Power BI em trabalhos acadêmicos.</li>
              <li>Participação em eventos e workshops sobre inovação, programação e análise de dados.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
