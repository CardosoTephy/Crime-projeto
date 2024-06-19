const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais os métodos utilizados na sua cidade para combater o crime?",
        alternativas: [
            "Câmera de segurança",
            "Sensor e de segurança"
        ]
    },
    {
        enunciado: "Quais são os fatores sociais que contribuem para o ocorrência de crimes, como roubo, violência e corrupção?  ",
        alternativas: [
            "Fome",
            "Desemprego"
        ]
    },
    {
        enunciado: "Quais ão os crimes mai ocorrentes na sua cidade?",
        alternativas: [
            "Tráfico de drogas",
            "Roubo"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();