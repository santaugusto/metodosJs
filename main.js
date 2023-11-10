//importando meu arquivo json
const listaDeCapitacao = require('./novo.json');
//criadn
const dadosValidos = []
const dominiosValidos = ['hotmail.com', 'gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com'];
const jovens = [];
const adultos = [];


// function verificarDominios(listaDeCapitacao, dominiosValidos) {
//     for (const pessoa of listaDeCapitacao) {
//         const dominio = pessoa.email.split('@')[1];
//         if (!dominiosValidos.includes(dominio)) {
//             console.log(`E-mail incorreto para ${pessoa.name}: ${pessoa.email}`);
//         }
//     }
// }

//função para validação de email e telefone
listaDeCapitacao.map((pessoa)=> {
    const dominio = pessoa.email.split('@')[1];
    const telefone = pessoa.telefone.trim()
    if(dominiosValidos.includes(dominio) && telefone.length === 12){
        dadosValidos.push(pessoa)
    } 
})


// function separarPessoasPorIdade(pessoas) {
//     pessoas.forEach((pessoa) => {
//         if (pessoa.idade <= 25) {
//             jovens.push(pessoa);
//         } else {
//             adultos.push(pessoa);
//         }
//     });
// }

// function ordenarPessoasPorNome(pessoas) {
//     pessoas.sort((a, b) => a.name.localeCompare(b.name));
// }

// verificarDominios(listaDeCapitacao, dominiosValidos);
// separarPessoasPorIdade(dadosValidos);
// ordenarPessoasPorNome(jovens);
// ordenarPessoasPorNome(adultos);

console.log(dadosValidos.length)
