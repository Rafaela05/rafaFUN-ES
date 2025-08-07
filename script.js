const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você chegou no colégio no primeiro dia de aula, qual foi seu pensamento?",
        alternativas: [
            {
                texto: "Isso é horrível",
                afirmacao: "Tem inseguranças sobre uma nova jornada de estudos em um lugar diferente."
            },
            {
                texto: "Estou empolgado (a)!.",
                afirmacao: "Tem curiosinade e força de vontade de buscar coisas diferentes, novas, sem medos."
            }
        ]
    },
    {
        enunciado: "Qual sua opinião sobre a merenda da escola?",
        alternativas: [
            {
                texto: "Alimento de boa qualidade, bem preparado, com capricho.",
                afirmacao: "Gosta do alimento oferecido pelo colégio."
            },
            {
                texto: "Ruim, sem qualidade, não tem um preparo de qualidade.",
                afirmacao: "Não gosta da maneira que o alimento é preparado."
            }
        ]
    },
    {
        enunciado: "Sobre a etrutura do colégio, qual sua opinião?",
        alternativas: [
            {
                texto: "Boa, salas de aula grandes, confortáveis, paredes, chão e teto em bom estado.",
                afirmacao: "Acha a estrutura boa e segura para a educação dos alunos."
            },
            {
                texto: "Ruim, paredes descascadas, pintura mal feita, falta de carteiras, mesas para alimentação.",
                afirmacao: "Acha a estrutura não está agradando os alunos, podendo afetar a qualidade de aprendizado, e a segurança."
            }
        ]
    },
    {
        enunciado: "Em relação à limpeza do colégio, banheiros, cozinha e salas?",
        alternativas: [
            {
                texto: "Tudo organizado, limpo e cheiroso.",
                afirmacao: "Acha que os funcionarios(as) estão fazendo um bom trabalho, bem higiênico."
            },
            {
                texto: "Muita sujeira, pó, e banheiros com mal cheiro.",
                afirmacao: "Isso pode ser preocupande, deve-se dar mais atenção a limpeza e qualidade do serviço prestado ao colégio."
            }
        ]
    },
    {
        enunciado: "Quando você busca um meterial no colégio, cartolina, xerox, etc. e descobre que deve pagar por ele, qual sua opinião? ",
        alternativas: [
            {
                texto: "Isso é correto.",
                afirmacao: "Devemos ajudar nas despesas do colégio, para termos retorno em melhorias."
            },
            {
                texto: "Não acho correto.",
                afirmacao: "Não concorda com a cobrança de materiais que os alunos necessitam para os estudos, trabalhos, etc. "
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
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();