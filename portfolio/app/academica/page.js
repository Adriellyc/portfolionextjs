import Link from "next/link";

export default function academica() {
  return (
    <div className="min-h-screen">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-black text-xl tracking-wide">Adrielly Campos Soares</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-black font-medium">
            <li><Link href="/" className="hover:underline hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-white transition-colors">Sobre</Link></li>
            <li><Link href="/academica" className="hover:underline hover:text-white transition-colors">Acadêmica</Link></li>
            <li><Link href="/profissional" className="hover:underline hover:text-white transition-colors">Profissional</Link></li>
            <li><Link href="/projetos" className="hover:underline hover:text-white transition-colors">Projetos Desenvolvidos</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-white transition-colors">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <div className="px-6 py-12 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-blue-600">
          Experiência Acadêmica
        </h1>

        <div className="space-y-10 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Graduação - Sistemas para Internet
            </h2>
            <p>
              Universidade Católica de Pernambuco (UNICAP) <br />
              <span className="text-sm text-gray-600 dark:text-gray-400">2024 - em andamento</span>
            </p>
            <p className="mt-2">
              Estou cursando Sistemas para Internet, onde desenvolvo competências em programação web, banco de dados, UX/UI, segurança da informação e análise de dados. Participo de projetos integradores que estimulam o trabalho em equipe e a aplicação prática dos conteúdos aprendidos.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Cursos e Certificações
            </h2>
            <p>
              Participo de trilhas formativas em plataformas como Alura e Rocketseat. <br />
              <span className="text-sm text-gray-600 dark:text-gray-400">2024 - atual</span>
            </p>
            <p className="mt-2">
              Estou me especializando em Desenvolvimento Web com React, Next.js, e fundamentos de Análise de Dados utilizando Python, SQL e Power BI. Além disso, estudo automação de processos com Power Automate.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Participações e Projetos Acadêmicos
            </h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
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