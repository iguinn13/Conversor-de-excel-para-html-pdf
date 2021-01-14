const Leitor = require('./Leitor');
const Processador = require('./Processador');

var arquivo = './dados.csv';
var leitor = new Leitor();

async function main(){
    var dados = await leitor.Ler(arquivo);
    var dadosProcessados = Processador.Processar(dados);
    
}

main();