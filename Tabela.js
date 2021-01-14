class Tabela {
    constructor(array){
        this.cabecalho = array[0];
        array.shift();
        this.linhas = array;
    }

    get ContadorDeLinhas(){
        return this.linhas.length;
    }

    get ContadorDeColunas(){
        return this.cabecalho.length;
    }
}

module.exports = Tabela;