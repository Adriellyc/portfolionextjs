"use client";

import Link from "next/link";
import Image from "next/image";


export default function Projetos() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <header className="mt-6 sticky top-0 z-50 w-full bg-gray-900 shadow">
        <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap justify-between items-center text-base">
          <div className="font-bold text-white text-2xl">Adrielly Campos</div>
         <ul className="flex gap-6 text-sm  text-white-200 font-medium">
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
          Projetos Desenvolvidos
        </h1>

      
        <section className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/3">
            <Image
              src="/Lola.jpg"  
              alt="Lola e lia"
              width={1000}
              height={500}
              className="rounded-lg object-cover"
            />
            

            <Image
              src="/LLola.jpg"  
              alt="Lola e lia"
              width={1000}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-3 text-white">Lola e Lia</h2>
            <p>
             
Participei do Demoday do KickOff no Recife! Fiquei muito feliz em ver meu squad entre os dez melhores, selecionados dentre um total de 65 equipes, que apresentaram seus projetos no Cinema do Porto Digital.

O tema foi: "Clima em Foco: tecnologia contra a crise climática". Todas as equipes desenvolveram soluções criativas para enfrentar esse desafio, e nós conquistamos o 3º lugar!

Nosso projeto foi um jogo educativo voltado para crianças, com o objetivo de conscientizar, de forma lúdica e divertida, sobre a importância de cuidar do meio ambiente e adotar práticas sustentáveis.

Foi uma experiência incrível, cheia de aprendizado, networking e muita inovação!
            </p>
          </div>
        </section>

        {/* Projeto 2 */}
        <section className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/3">
            <Image
              src="/projeto.png"  
              alt="Projeto 2"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-3 text-white">Projeto 2</h2>
            <p>
              Neste projeto, desenvolvi um aplicativo voltado para combater a exclusão educacional que crianças em territórios periféricos enfrentam. O app tem como objetivo apoiar o processo de alfabetização e letramento de forma acessível e conectada com a realidade social e cultural dessas crianças.

Sabemos que o modelo educacional tradicional muitas vezes não atende às necessidades específicas desses estudantes, o que gera desmotivação, baixo desempenho e evasão escolar. Pensando nisso, meu aplicativo oferece atividades educativas interativas e personalizadas, que valorizam a diversidade cultural e incentivam o aprendizado de forma prática e envolvente.


            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
