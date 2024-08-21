const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Alternativa 2",
                    afirmacao: "Afirmação 2"
            }
        ]

    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Alternativa 2",
                    afirmacao: "Afirmação 2"
            }
        ]

    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Alternativa 2",
                    afirmacao: "Afirmação 2"
            }
        ]

    },
]

let atual = 0;
let perguntaAtual;

function mostraPerguntas (){
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";

}

mostraPerguntas();

