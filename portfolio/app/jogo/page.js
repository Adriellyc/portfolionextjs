"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function criarCodigo() {
  const numeros = [];
  while (numeros.length < 4) {
    const n = Math.floor(Math.random() * 10).toString();
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros.join("");
}

function avaliarChute(codigoSecreto, chute) {
  let acertosExatos = 0;
  let acertosTroca = 0;

  for (let i = 0; i < 4; i++) {
    if (chute[i] === codigoSecreto[i]) {
      acertosExatos++;
    } else if (codigoSecreto.includes(chute[i])) {
      acertosTroca++;
    }
  }
  return `${acertosExatos} Exato(s), ${acertosTroca} Troca(s)`;
}

export default function SenhaGame() {
  const [codigoSecreto, setCodigoSecreto] = useState(() => criarCodigo());
  const [chute, setChute] = useState("");
  const [historico, setHistorico] = useState([]);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (historico.length >= 10 && !jogoFinalizado) {
      setJogoFinalizado(true);
      setMensagem(`Acabou o jogo! O código era ${codigoSecreto}`);
    }
  }, [historico, codigoSecreto, jogoFinalizado]);

  function tentarChutar() {
    if (chute.length !== 4 || new Set(chute).size !== 4 || !/^\d{4}$/.test(chute)) {
      alert("Por favor, insira 4 números diferentes.");
      return;
    }

    const resultado = avaliarChute(codigoSecreto, chute);
    setHistorico((antigo) => [{ tentativa: chute, feedback: resultado }, ...antigo]);

    if (chute === codigoSecreto) {
      setJogoFinalizado(true);
      setMensagem("Você acertou! Parabéns!");
    }

    setChute("");
  }

  function reiniciarJogo() {
    setCodigoSecreto(criarCodigo());
    setChute("");
    setHistorico([]);
    setJogoFinalizado(false);
    setMensagem("");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-md">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between text-base">
          <div className="font-bold text-white text-xl tracking-wide">Maria Eduarda</div>
          <ul className="flex flex-wrap gap-5 text-white font-semibold">
            <li><Link href="/" className="hover:underline hover:text-indigo-400">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-indigo-400">Sobre</Link></li>
            <li><Link href="/academica" className="hover:underline hover:text-indigo-400">Acadêmica</Link></li>
            <li><Link href="/profissional" className="hover:underline hover:text-indigo-400">Profissional</Link></li>
            <li><Link href="/projetos" className="hover:underline hover:text-indigo-400">Projetos</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-indigo-400">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-lg mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-pink-400 mb-6">Desafio do Código</h1>

        <section className="bg-white text-gray-900 rounded-md p-5 mb-8 shadow">
          <h2 className="font-bold mb-3">Instruções</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Descubra o código secreto de 4 dígitos distintos.</li>
            <li>Para cada chute, receberá dicas:</li>
            <li><strong>Exatos</strong>: números corretos na posição correta.</li>
            <li><strong>Trocas</strong>: números certos na posição errada.</li>
            <li>Tem até 10 tentativas.</li>
          </ul>
        </section>

        {!jogoFinalizado && (
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={4}
              className="flex-1 border border-gray-400 rounded px-3 py-2 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Digite 4 dígitos únicos"
              value={chute}
              onChange={(e) => {
                const valor = e.target.value;
                if (/^\d*$/.test(valor)) setChute(valor);
              }}
              disabled={jogoFinalizado}
            />
            <button
              onClick={tentarChutar}
              className="bg-pink-500 hover:bg-pink-600 rounded px-4 py-2 font-semibold transition"
              disabled={jogoFinalizado}
            >
              Chutar
            </button>
          </div>
        )}

        {mensagem && (
          <div className={`text-center mb-5 font-semibold text-lg ${jogoFinalizado ? "text-green-400" : "text-red-400"}`}>
            {mensagem}
          </div>
        )}

        {jogoFinalizado && (
          <div className="text-center mb-8">
            <button
              onClick={reiniciarJogo}
              className="bg-green-500 hover:bg-green-600 rounded px-5 py-2 font-semibold transition"
            >
              Jogar Novamente
            </button>
          </div>
        )}

        <ul className="space-y-2">
          {historico.map(({ tentativa, feedback }, idx) => (
            <li key={idx} className="flex justify-between bg-white text-gray-900 rounded px-4 py-2 shadow-sm font-mono">
              <span>{tentativa}</span>
              <span>{feedback}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
