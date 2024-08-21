const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No ambito social, você prefere:",
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
        enunciado: "No ambito ambiental, você prefere:",
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
        enunciado: "No ambito tecnologico, você prefere:",
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

    
