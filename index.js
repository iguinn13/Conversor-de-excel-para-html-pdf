const Leitor = require('./Leitor');
const Processador = require('./Processador');
const Tabela = require('./Tabela');
const HTMLParser = require('./HTMLParser');

var arquivo = './dados.csv';
var leitor = new Leitor();

async function main(){
    var dados = await leitor.Ler(arquivo);
    var dadosProcessados = Processador.Processar(dados);

    var pessoas = new Tabela(dadosProcessados);

    var html = await HTMLParser.Parse(pessoas);

    console.log(html);
}

main();