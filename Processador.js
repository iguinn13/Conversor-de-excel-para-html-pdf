class ProcessadorDeDados {
    static Processar(dados){
        var processadorDeLinhas = dados.split('\r\n');
        var linhas = [];

        processadorDeLinhas.forEach(linha => {
            var arrayDeLinhas = linha.split(';');
            linhas.push(arrayDeLinhas);
        });

        return linhas;
    }
}

module.exports = ProcessadorDeDados;