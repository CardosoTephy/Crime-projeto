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
                afirmacao: "onde foi instalado câmeras pela cidade inteira, e caso precise é tudo filmado"
            },
            {
                texto: "Sensor e de segurança",
                afirmacao: "quando alguém tenta invadir algum comércio ou algum lugar que tenha este sensor ele é disparado e é direcionado o sinal para delegacia "
            }
        ]
    },
    {
        enunciado: "Quais são os fatores sociais que contribuem para o ocorrência de crimes, como roubo, violência e corrupção? ",
        alternativas: [
            {
                texto: "Fome",
                afirmacao: "é um dos principais fatores da ocorrência do roubo, a fome leva o indivíduo a roubar para se alimentar"
            },
            {
                texto: "Desemprego",
                afirmacao: "é outro dos principais fatores para o crime, eles roubam para conseguir dinheiro e se sustentarem"
            }
        ]
    },
    {
        enunciado: "Quais ão os crimes mais ocorrentes na sua cidade?",
        alternativas: [
            {
                texto: "Tráfico de drogas",
                afirmacao: "é a atividdade criminosa que envolve a produção e distribuição e venda ilegal de substâncias entorpecentes"
            },
            {
                texto: "Roubo",
                afirmacao: "é um crime contra o patrimônio que envolve a apropriação indébita de bens ou recursos de outra pessoa por meio de ameaça, violência, ou intimidação, pode ocorrer em diversos contextos, como assaltos a mão armada, furtos em residências, roubos a estabelcimentos comerciais, etc."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Nesta atualidade...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();