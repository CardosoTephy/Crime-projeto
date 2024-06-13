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
            "Sensor de segurança",
        ]
    },
    {   
        enunciado: " quais são os fatores sociais que contribuem para a ocorrência de crimes,como roubo,violência e corrupção?",
        alternativas: [
            "Fome",
            "desenprego"
        ]
    },
    {
        enunciado: "Quias são os crimes mais ocorrents em sua cidade?",
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
}

mostraPergunta();
