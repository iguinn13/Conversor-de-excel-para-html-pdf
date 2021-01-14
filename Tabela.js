class Tabela {
    constructor(array){
        this.cabecalho = array[0];
        array.shift();
        this.linhas = array;
    }
}

module.exports = Tabela;