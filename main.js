const listaDeCapitacao = require('./data-t9HOLk9AWi1fq4Z5pTvLS.json');
const dadosValidos = []
const dominiosValidos = ['hotmail.com', 'gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com'];
const jovens = [];
const adultos = [];


function verificarDominios(listaDeCapitacao, dominiosValidos) {
    for (const pessoa of listaDeCapitacao) {
        const dominio = pessoa.email.split('@')[1];
        if (!dominiosValidos.includes(dominio)) {
            console.log(`E-mail incorreto para ${pessoa.name}: ${pessoa.email}`);
        }
    }
}


listaDeCapitacao.map((pessoa)=> {
    const dominio = pessoa.email.split('@')[1];
    // const telefone = pessoa.phone.trim()
    if(dominiosValidos.includes(dominio) ){
        dadosValidos.push(pessoa)
    } 
})


function separarPessoasPorIdade(pessoas) {
    pessoas.forEach((pessoa) => {
        if (pessoa.idade <= 25) {
            jovens.push(pessoa);
        } else {
            adultos.push(pessoa);
        }
    });
}

function ordenarPessoasPorNome(pessoas) {
    pessoas.sort((a, b) => a.name.localeCompare(b.name));
}

verificarDominios(listaDeCapitacao, dominiosValidos);
separarPessoasPorIdade(listaDeCapitacao);
ordenarPessoasPorNome(jovens);
ordenarPessoasPorNome(adultos);
