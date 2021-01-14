const Leitor = require('./Leitor');
const Processador = require('./Processador');
const Tabela = require('./Tabela');

var arquivo = './dados.csv';
var leitor = new Leitor();

async function main(){
    var dados = await leitor.Ler(arquivo);
    var dadosProcessados = Processador.Processar(dados);

    var pessoas = new Tabela(dadosProcessados);

    console.log(pessoas.linhas);
}

main();