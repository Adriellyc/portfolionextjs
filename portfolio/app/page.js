import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-300">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gray-900 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-white text-xl tracking-wide">
            Adrielly Campos Soares
          </div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 font-medium">
<ul className="flex gap-5 text-gray-300 font-semibold">
            <li><Link href="/" className="hover:underline hover:text-indigo-400">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-indigo-400">Sobre</Link></li>
            <li><Link href="/academica" className="hover:underline hover:text-indigo-400">Acadêmica</Link></li>
            <li><Link href="/profissional" className="hover:underline hover:text-indigo-400">Profissional</Link></li>
            <li><Link href="/projetos" className="hover:underline hover:text-indigo-400">Projetos</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-indigo-400">Jogo</Link></li>
          </ul>
        
            {[
              { name: "Home", href: "/" },
              { name: "Sobre", href: "/sobre" },
              { name: "Acadêmica", href: "/academica" },
              { name: "Profissional", href: "/profissional" },
              { name: "Projetos", href: "/projetos" },
              { name: "Jogo", href: "/jogo" },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:underline hover:text-blue-400 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="flex-1 grid place-items-center px-6 sm:px-12 py-16 sm:py-24">
        <main className="max-w-5xl w-full flex flex-col-reverse sm:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Olá, eu sou Adrielly Campos Soares
            </h1>

          

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
                  className="px-5 py-2 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors font-semibold text-sm sm:text-base shadow-md"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              className="rounded-full shadow-lg border-4 border-gray-700"
              src="/adrielly.jpeg"
              alt="Retrato de Adrielly Campos Soares sorrindo"
              width={250}
              height={250}
              priority
            />
          </div>
        </main>
      </div>

      <section className="w-full max-w-6xl mx-auto px-6 sm:px-12 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Explore Meu Portfólio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Sobre Mim', description: 'Conheça um pouco sobre mim', link: '/sobre' },
            { title: 'Experiência Acadêmica', description: 'Minha formação educacional e cursos realizados', link: '/academica' },
            { title: 'Experiência Profissional', description: 'Histórico profissional e conquistas', link: '/profissional' },
            { title: 'Projetos', description: 'Portfólio de projetos desenvolvidos', link: '/projetos' },
            { title: 'Jogo da Senha', description: 'Divirta-se com o jogo Bulls and Cows', link: '/jogo' },
          ].map(({ title, description, link }) => (
            <div key={title} className="bg-gray-900 rounded-lg p-6 shadow-md hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-sm mb-4 text-gray-400">{description}</p>
              <Link href={link} className="text-blue-400 hover:underline">
                Explorar →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}