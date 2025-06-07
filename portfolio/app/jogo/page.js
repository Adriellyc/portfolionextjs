"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function gerarSenha() {
  const digitos = [];
  while (digitos.length < 4) {
    const d = Math.floor(Math.random() * 10).toString();
    if (!digitos.includes(d)) digitos.push(d);
  }
  return digitos.join("");
}

function verificarTentativa(senha, tentativa) {
  let touros = 0;
  let vacas = 0;

  for (let i = 0; i < 4; i++) {
    if (tentativa[i] === senha[i]) {
      touros++;
    } else if (senha.includes(tentativa[i])) {
      vacas++;
    }
  }
  return `${touros} Touro(s), ${vacas} Vaca(s)`;
}

export default function JogoDaSenha() {
  const [senha, setSenha] = useState(() => gerarSenha());
  const [tentativa, setTentativa] = useState("");
  const [tentativas, setTentativas] = useState([]);
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState("");

  useEffect(() => {
    if (tentativas.length >= 10 && !fimDeJogo) {
      setFimDeJogo(true);
      setMensagemFinal(`Fim de jogo! A senha era ${senha}`);
    }
  }, [tentativas, senha, fimDeJogo]);

  function lidarComTentativa() {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4 || !/^\d{4}$/.test(tentativa)) {
      alert("Digite uma senha válida com 4 dígitos únicos.");
      return;
    }

    const resultado = verificarTentativa(senha, tentativa);
    const novaEntrada = { valor: tentativa, resultado };
    setTentativas((prev) => [novaEntrada, ...prev]);
    setTentativa("");

    if (tentativa === senha) {
      setFimDeJogo(true);
      setMensagemFinal("Parabéns! Você acertou a senha!");
    }
  }

  function novoJogo() {
    setSenha(gerarSenha());
    setTentativa("");
    setTentativas([]);
    setFimDeJogo(false);
    setMensagemFinal("");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-black text-xl tracking-wide">Maria Eduarda</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-black font-medium">
            <li><Link href="/" className="hover:underline hover:text-indigo-400">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-indigo-400">Sobre</Link></li>
            <li><Link href="/academica" className="hover:underline hover:text-indigo-400">Acadêmica</Link></li>
            <li><Link href="/profissional" className="hover:underline hover:text-indigo-400">Profissional</Link></li>
            <li><Link href="/projetos" className="hover:underline hover:text-indigo-400">Projetos</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-indigo-400">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <div className="p-6 sm:p-20 font-sans max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-left text-blue-600 mb-4">
          Jogo da Senha
        </h1>

        <div className="bg-gray-100 text-black rounded p-4 mb-6 text-sm sm:text-base leading-relaxed shadow">
          <p className="font-semibold mb-2">Como jogar:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>O objetivo é adivinhar a senha de 4 dígitos únicos.</li>
            <li>A cada tentativa, você receberá dicas:</li>
            <li><strong>1 Touro</strong>: dígito certo no lugar certo.</li>
            <li><strong>1 Vaca</strong>: dígito certo no lugar errado.</li>
            <li>Você tem no máximo 10 tentativas.</li>
            <li>Boa sorte!</li>
          </ul>
        </div>

        <button
          onClick={() => alert(`Senha atual: ${senha}`)}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.443 1.358-1.203 2.591-2.204 3.58" />
          </svg>
          Mostrar Senha (debug)
        </button>

        {!fimDeJogo && (
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={tentativa}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d*$/.test(val)) {
                  setTentativa(val);
                }
              }}
              maxLength={4}
              className="border border-gray-400 p-2 rounded w-full font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Digite 4 dígitos únicos"
              disabled={fimDeJogo}
            />
            <button
              onClick={lidarComTentativa}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              disabled={fimDeJogo}
            >
              Tentar
            </button>
          </div>
        )}

        {mensagemFinal && (
          <div className={`mb-4 text-center font-medium text-lg ${fimDeJogo ? "text-green-500" : "text-red-500"}`}>
            {mensagemFinal}
          </div>
        )}

        {fimDeJogo && (
          <div className="text-center mb-6">
            <button
              onClick={novoJogo}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Novo Jogo
            </button>
          </div>
        )}

        <ul className="space-y-2">
          {tentativas.map((t, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-100 text-black p-3 rounded shadow-sm"
            >
              <span className="font-mono text-lg">{t.valor}</span>
              <span className="text-gray-700">{t.resultado}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}