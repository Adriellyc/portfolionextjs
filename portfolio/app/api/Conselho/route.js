export async function GET() {
  const frases = [
    "Acredite no seu potencial!",
    "Você é capaz de aprender qualquer coisa.",
    "Cada dia é uma nova chance de recomeçar.",
    "Não desista, as grandes conquistas levam tempo.",
    "O primeiro passo é acreditar em si mesmo."
  ];

  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

  return Response.json({ frase: fraseAleatoria });
}
