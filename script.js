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
                afirmacao: "Onde foi instalado câmeras pela cidade inteira e caso precise é tudo filmado."
            },
            {
                texto: "Sensor e de segurança"
                afirmacao: "Quando alguém tenta invadir algum comércio ou algum lugar que temha este sensor ele é disparado e é direcionado o sinal para a delegacia."
            }
        ]
    },
    {
        enunciado: "Quais são os fatores sociais que contribuem para o ocorrência de crimes, como roubo, violência e corrupção?  ",
        alternativas: [
            {
                texto: "Fome",
                afirmacao: "É um dos principais fatores da ocorrência do roubo a fome leva o indivíduo a roubar para se alimentar."
            },
            {
                texto: "Desemprego"
                afirmacao: "E outro dos principais fatores para o crime,eles roubam para conseguir dinheiro e se sustentarem."
            }
        ]
        
    },
    {
        enunciado: "Quais ão os crimes mais ocorrentes na sua cidade?",
        alternativas: [
            {
                texto: "Tráfico de drogas",
                afirmacao: "É a atividade criminosa que envolve a produção,distribuição e venda ilegal de substâncias entorpecentes"
            },
            {
                texto: "Roubo"
                afirmacao: "È um crime contra o patrimônio que envolve a apropriação indebita de bens ou recursos de outra pessoa por meio de ameaças,violência ou intimidação,pode ocorrer em diversos contextos,como assaltos a mão armada,furtos em residências,roubos a estabelecimentos comerciais,etc. "
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