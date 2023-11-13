                            //SETP 1 

//importando meu arquivo json
const listaDeCapitacao = require('./novo.json');
//lista que auxilia na verificação de emails validos
const dominiosValidos = ['hotmail.com', 'gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com'];
// lista que contem os emails e telefones validados além das rendas em formato de numero
const verificacoes = []



//função para validação de email e telefone e transformar a renda de string para float
listaDeCapitacao.map((pessoa)=> {
    const dominio = pessoa.email.split('@')[1];
    const telefone = pessoa.telefone.trim()
    const rendaSTR = pessoa.renda;
    const renda = parseFloat(rendaSTR.replace(',', '').replace('R$',''));
    if(dominiosValidos.includes(dominio) && telefone.length === 12){
       pessoa.renda= renda
        verificacoes.push(pessoa)
    } 
})

                            //SETP 2


// Calcular a média da soma das rendas dos estudantes
const media = verificacoes.reduce((acumulador, renda) => {
    const valor = renda.renda
    return (acumulador + valor)/verificacoes.length;
}, 0);
// console.log(media)



//calculo da variancia
const variancia =  verificacoes.reduce((acumulador,renda)=>{
    const valor = renda.renda 
    return acumulador + Math.pow(media - valor,2)},0)/verificacoes.length;
// console.log('calc de variancia: ',variancia)

//calculo do desvio padrão
const desvioPadrao = Math.sqrt(variancia)
// console.log('calc de desvio padrão: ',desvioPadrao)

const limiteDesvioPadrao = 1;

// Identifique com baixa renda
const baixaRenda = verificacoes.filter(renda =>{
    const valor = renda.renda
    return (valor - media) / desvioPadrao < limiteDesvioPadrao}
);
// console.log("Rendas a baixo da media:", baixaRenda);

// Identifique os destaques financeiros
const destaquesFinanceiros = verificacoes.filter(renda=> {
    const valor = renda.renda
    return (valor - media) / desvioPadrao > limiteDesvioPadrao
});
// console.log(baixaRenda)


//                                           SETP 3 


//lista de divisão por idade apos todas as validações
const jovens = []

const adultos = [];
