"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function gerarCodigo() {
  const numeros = [];
  while (numeros.length < 4) {
    const digito = Math.floor(Math.random() * 10).toString();
    if (!numeros.includes(digito)) numeros.push(digito);
  }
  return numeros.join("");
}

function avaliarPalpite(codigo, palpite) {
  let certos = 0;
  let foraDeLugar = 0;

  for (let i = 0; i < 4; i++) {
    if (palpite[i] === codigo[i]) {
      certos++;
    } else if (codigo.includes(palpite[i])) {
      foraDeLugar++;
    }
  }
  return `${certos} Certo(s), ${foraDeLugar} Fora do lugar`;
}

export default function CodigoSecreto() {
  const [codigo, setCodigo] = useState(() => gerarCodigo());
  const [entrada, setEntrada] = useState("");
  const [historico, setHistorico] = useState([]);
  const [fim, setFim] = useState(false);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (historico.length >= 10 && !fim) {
      setFim(true);
      setMensagem(`☠️ Fim de jogo! O código era ${codigo}`);
    }
  }, [historico, codigo, fim]);

  function tentarCodigo() {
    if (entrada.length !== 4 || new Set(entrada).size !== 4 || !/^\d{4}$/.test(entrada)) {
      alert("Digite 4 números únicos.");
      return;
    }

    const resultado = avaliarPalpite(codigo, entrada);
    setHistorico((prev) => [{ valor: entrada, resultado }, ...prev]);
    setEntrada("");

    if (entrada === codigo) {
      setFim(true);
      setMensagem("🎉 Código descoberto com sucesso!");
    }
  }

  function reiniciar() {
    setCodigo(gerarCodigo());
    setEntrada("");
    setHistorico([]);
    setFim(false);
    setMensagem("");
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="bg-[#0a2540] p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-wide">Código Secreto</h1>
          <nav>
            <ul className="flex gap-6 text-sm text-blue-200 font-medium">
             <li><Link href="/" className="hover:underline hover:text-indigo-400">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-indigo-400">Sobre</Link></li>
            <li><Link href="/academica" className="hover:underline hover:text-indigo-400">Acadêmica</Link></li>
            <li><Link href="/profissional" className="hover:underline hover:text-indigo-400">Profissional</Link></li>
            <li><Link href="/projetos" className="hover:underline hover:text-indigo-400">Projetos</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-indigo-400">Jogo</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-6">Descubra o Código</h2>

        <p className="mb-4 text-blue-200 max-w-md">
          Tente adivinhar o código secreto de 4 dígitos únicos. Cada tentativa revela:
        </p>

        <ul className="mb-8 text-sm text-blue-300 space-y-1">
          <li> <strong>Certo</strong>: número e posição corretos</li>
          <li> <strong>Fora do lugar</strong>: número correto na posição errada</li>
          <li> 10 tentativas no total</li>
        </ul>

        {!fim && (
          <div className="flex gap-2 mb-6 w-full max-w-md">
            <input
              type="text"
              value={entrada}
              onChange={(e) => {
                const v = e.target.value;
                if (/^\d*$/.test(v)) setEntrada(v);
              }}
              maxLength={4}
              placeholder="Ex: 1234"
              className="flex-1 p-3 rounded bg-gray-900 border border-gray-600 text-lg tracking-widest text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={tentarCodigo}
              className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white transition"
            >
              Testar
            </button>
          </div>
        )}

        {mensagem && (
          <p className={`mb-6 text-lg font-semibold ${fim ? "text-green-400" : "text-red-400"}`}>
            {mensagem}
          </p>
        )}

        {fim && (
          <button
            onClick={reiniciar}
            className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded text-white mb-6"
          >
            Jogar Novamente
          </button>
        )}

        <ul className="w-full max-w-md space-y-2">
          {historico.map((h, i) => (
            <li key={i} className="flex justify-between bg-[#111827] px-4 py-2 rounded text-blue-200 border border-gray-700 shadow-sm">
              <span className="font-mono">{h.valor}</span>
              <span className="text-sm">{h.resultado}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
