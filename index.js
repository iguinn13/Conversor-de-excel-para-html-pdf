const Leitor = require('./Leitor');
const Processador = require('./Processador');
const Tabela = require('./Tabela');
const HTMLParser = require('./HTMLParser');
const Escritor = require('./Escritor');
const EscritorPDF = require('./EscritorPDF');

var arquivo = './dados.csv';
var leitor = new Leitor();
var escritor = new Escritor();

async function main(){
    var dados = await leitor.Ler(arquivo);
    var dadosProcessados = Processador.Processar(dados);

    var pessoas = new Tabela(dadosProcessados);

    var html = await HTMLParser.Parse(pessoas);

    escritor.Escrever(Date.now() + '.html', html);
    EscritorPDF.EscreverPDF(Date.now() + '.pdf', html);
}

main();