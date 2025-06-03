"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function criarCodigoSecreto() {
  const numeros = [];
  while (numeros.length < 4) {
    const n = Math.floor(Math.random() * 10).toString();
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros.join("");
}

function analisarPalpite(codigo, palpite) {
  let acertos = 0;
  let semiAcertos = 0;

  for (let i = 0; i < 4; i++) {
    if (palpite[i] === codigo[i]) {
      acertos++;
    } else if (codigo.includes(palpite[i])) {
      semiAcertos++;
    }
  }
  return `${acertos} Acertos, ${semiAcertos} Semi-acertos`;
}

export default function JogoDeAdivinhacao() {
  const [codigo, setCodigo] = useState(criarCodigoSecreto);
  const [entrada, setEntrada] = useState("");
  const [historico, setHistorico] = useState([]);
  const [encerrado, setEncerrado] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (historico.length >= 10 && !encerrado) {
      setEncerrado(true);
      setFeedback(`Você perdeu! O código era: ${codigo}`);
    }
  }, [historico, codigo, encerrado]);

  const processarPalpite = () => {
    if (entrada.length !== 4 || new Set(entrada).size !== 4 || !/^\d{4}$/.test(entrada)) {
      alert("Informe 4 dígitos únicos.");
      return;
    }

    const resultado = analisarPalpite(codigo, entrada);
    setHistorico([{ tentativa: entrada, resultado }, ...historico]);
    setEntrada("");

    if (entrada === codigo) {
      setEncerrado(true);
      setFeedback("Parabéns! Você acertou!");
    }
  };

  const reiniciar = () => {
    setCodigo(criarCodigoSecreto());
    setEntrada("");
    setHistorico([]);
    setEncerrado(false);
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <header className="mt-6 sticky top-0 z-50 w-full bg-gray-900 shadow">
        <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap justify-between items-center text-base">
          <div className="font-bold text-white text-2xl">Adrielly Campos</div>
          <ul className="flex gap-5 text-gray-300 font-semibold">
            <li>
              <Link href="/" className="hover:underline hover:text-indigo-400">Home</Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:underline hover:text-indigo-400">Sobre</Link>
            </li>
            <li>
              <Link href="/academica" className="hover:underline hover:text-indigo-400">Acadêmico</Link>
            </li>
            <li>
              <Link href="/profissional" className="hover:underline hover:text-indigo-400">Profissional</Link>
            </li>
            <li>
              <Link href="/projetos" className="hover:underline hover:text-indigo-400">Projetos</Link>
            </li>
            <li>
              <Link href="/jogo" className="hover:underline hover:text-indigo-400">Jogo</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-8 sm:p-16 max-w-lg mx-auto font-sans">
        <h1 className="text-4xl font-extrabold text-indigo-600 text-center mb-8">
          Desafio Numérico
        </h1>

        <button
          onClick={() => alert(`Código: ${codigo}`)}
          className="mb-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-gray-300"
        >
          Ver Código (debug)
        </button>

        {!encerrado && (
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              maxLength={4}
              className="border border-gray-700 p-2 rounded w-full bg-gray-900 text-gray-300 placeholder-gray-500"
              placeholder="Ex: 1234"
            />
            <button
              onClick={processarPalpite}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Enviar
            </button>
          </div>
        )}

        {feedback && (
          <div className="mb-4 text-center text-lg font-semibold text-green-500">
            {feedback}
          </div>
        )}

        {encerrado && (
          <div className="text-center mb-6">
            <button
              onClick={reiniciar}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Jogar Novamente
            </button>
          </div>
        )}

        <ul className="space-y-2">
          {historico.map((item, index) => (
            <li
              key={index}
              className="flex justify-between bg-gray-900 p-2 rounded text-gray-300 border border-gray-700"
            >
              <span className="font-mono">{item.tentativa}</span>
              <span>{item.resultado}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
