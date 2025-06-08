"use client";

import Link from "next/link";

export default function SobreMim() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <header className="mt-6 sticky top-0 z-50 w-full bg-gray-900 shadow">
        <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap justify-between items-center text-base">
          <div className="font-bold text-white text-2xl">Adrielly Campos</div>
          <ul className="flex gap-5 text-gray-300 font-semibold">
            <li><Link href="/" className="hover:underline hover:text-indigo-400">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-indigo-400">Sobre</Link></li>
            <li><Link href="/academica" className="hover:underline hover:text-indigo-400">Acadêmica</Link></li>
            <li><Link href="/profissional" className="hover:underline hover:text-indigo-400">Profissional</Link></li>
            <li><Link href="/projetos" className="hover:underline hover:text-indigo-400">Projetos</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-indigo-400">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <main className="p-8 sm:p-16 max-w-4xl mx-auto font-sans space-y-8">
        <h1 className="text-4xl font-extrabold text-indigo-600 text-white mb-8">
          Sobre Mim
        </h1>

        <section className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-white">Quem sou eu?</h2>
          <p>
            Meu nome é Adrielly Campos Soares, tenho 21 anos e sou estudante de Sistemas para Internet na UNICAP. 
            Sou apaixonada pelo mundo da tecnologia e estou sempre em busca de aprender e me desenvolver, principalmente 
            na área de desenvolvimento web e análise de dados.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-white">Interesses</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Desenvolvimento Web com React e Next.js</li>
            <li>Análise e Visualização de Dados com Python e Power BI</li>
            <li>Participação em projetos integradores e hackathons</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
