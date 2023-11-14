//importando meu arquivo json
const listaDeCapitacao = require('./metodosJs-main/novo.json');
//lista que auxilia na verificação de emails validos
const dominiosValidos = ['hotmail.com', 'gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com'];
// lista que contem os emails e telefones validados além das rendas em formato de numero
const verificacoes = []
//listas de divisão por idade apos todas as validações
const jovens = []
const adultos = [];



//função para validação de email e telefone e transformar a renda de string para float
//map
listaDeCapitacao.map((pessoa) => {
    const dominio = pessoa.email.split('@')[1];
    const telefone = pessoa.telefone.trim()
    const rendaSTR = pessoa.renda;
    const renda = parseFloat(rendaSTR.replace(',', '').replace('R$', ''));
    if (dominiosValidos.includes(dominio) && telefone.length === 12) {
        pessoa.renda = renda
        verificacoes.push(pessoa)
    }
})

// console.log(verificacoes)

//                          SETP 2


// Calcular a média da soma das rendas dos estudantes
//reduce
const media = verificacoes.reduce((acumulador, renda) => {
    const valor = renda.renda
    return (acumulador + valor) / verificacoes.length;
}, 0);
// console.log(media)




//                            SETP 3

// Divisão de alunos por idade
//forEach
verificacoes.forEach(estudante => {
    if (estudante.idade < 25) {
        jovens.push(estudante);
    } else {
        adultos.push(estudante);
    }
});
// console.log(adultos)
// console.log(jovens)


//                            SETP 4

//filtrar os alunos que tem renda inferior a 3mil
//filter

const rendaInferiorA3mil = verificacoes.filter(renda => {
    const valor = renda.renda
    return valor < 3.000
});
console.log(rendaInferiorA3mil)

//                            SETP 5

//ordenar os alunos em ordem alfabetiba
//localeCompare

const ordemAlfabetica = verificacoes.sort((a,b) => {
    return a.nome.localeCompare(b.nome)
})
console.log(ordemAlfabetica)