const Leitor = require('./Leitor');

var arquivo = './dados.csv';
var leitor = new Leitor();

async function main(){
    var dados = await leitor.Ler(arquivo);
    console.log(dados);
}

main();