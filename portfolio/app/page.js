import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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

      <div className="flex-1 grid place-items-center px-6 sm:px-12 py-16 sm:py-24">
        <main className="max-w-5xl w-full flex flex-col-reverse sm:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text dark:from-blue-400 dark:to-blue-300">
              Olá, eu sou Adrielly Campos Soares <br />
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Olá, bem-vindo(a) ao meu portfólio! Sou Adrielly Campos Soares, estudante de Sistemas para Internet pela UNICAP.  
              Tenho habilidades em HTML, CSS, JavaScript, Python e SQL. Estou sempre buscando aprender mais e desenvolver soluções criativas e eficientes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {[
                { name: "GitHub", url: "https://github.com/seu-usuario" },
                { name: "LinkedIn", url: "https://linkedin.com/in/seu-perfil" },
                { name: "Outro", url: "https://seulinkextra.com" },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-primary text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors font-semibold text-sm sm:text-base shadow-md"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              className="rounded-full shadow-lg border-4 border-primary"
              src="/perfil.jpeg"
              alt="Foto de Adrielly Campos Soares"
              width={250}
              height={250}
              priority
            />
          </div>
        </main>
      </div>
    </div>
  );
}

