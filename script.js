const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está dirigindo seu trator por um campo verdejante. De repente, você vê um obstáculo à frente. O que você faz?",
        alternativas: [
            {
                texto: "Desviar do obstáculo.",
                afirmacao: "Você desviou com sucesso e continuou sua jornada."
            },
            {
                texto: "Parar e inspecionar o obstáculo.",
                afirmacao: "Você encontrou um tesouro escondido no obstáculo!"
            }
        ]
    },
    {
        enunciado: "Enquanto dirige, você vê um rio bloqueando seu caminho. Qual é sua escolha?",
        alternativas: [
            {
                texto: "Tentar atravessar o rio com o trator.",
                afirmacao: "O trator conseguiu atravessar o rio com dificuldade."
            },
            {
                texto: "Procurar uma ponte nas proximidades.",
                afirmacao: "Você encontrou uma ponte segura e atravessou o rio."
            }
        ]
    },
    {
        enunciado: "Ao continuar sua jornada, você encontra um campo de flores raras. O que você faz?",
        alternativas: [
            {
                texto: "Parar para admirar as flores.",
                afirmacao: "Você tirou belas fotos das flores raras."
            },
            {
                texto: "Seguir em frente sem parar.",
                afirmacao: "Você decidiu não parar e continuar sua jornada."
            }
        ]
    },
    {
        enunciado: "Você avista uma tempestade se aproximando. Qual é sua ação?",
        alternativas: [
            {
                texto: "Acelerar para evitar a tempestade.",
                afirmacao: "Você conseguiu evitar a tempestade a tempo."
            },
            {
                texto: "Parar e procurar abrigo.",
                afirmacao: "Você encontrou um abrigo seguro e esperou a tempestade passar."
            }
        ]
    },
    {
        enunciado: "Ao fim do dia, você precisa decidir onde passar a noite. O que você faz?",
        alternativas: [
            {
                texto: "Montar uma barraca ao ar livre.",
                afirmacao: "Você teve uma noite tranquila sob as estrelas."
            },
            {
                texto: "Procurar uma pousada nas proximidades.",
                afirmacao: "Você encontrou uma pousada aconchegante para passar a noite."
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
    caixaPerguntas.textContent = "Fim da história!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
