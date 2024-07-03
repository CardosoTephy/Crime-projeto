const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais os métodos utilizados na sua cidade para combater o crime?",
        alternativas: [
            {
                texto: "Câmera de segurança",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sensor e de segurança"
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Quais são os fatores sociais que contribuem para o ocorrência de crimes, como roubo, violência e corrupção?  ",
        alternativas: [
            {
                texto: "Fome",
                afirmacao: "afirmacao"
            },
            {
                texto: "Desemprego"
                afirmacao: "afirmacao"
            }
        ]
        
    },
    {
        enunciado: "Quais ão os crimes mais ocorrentes na sua cidade?",
        alternativas: [
            {
                texto: "Tráfico de drogas",
                afirmacao: "afirmacao"
            },
            {
                texto: "Roubo"
                afirmacao: "afirmacao"
            }enunciado
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