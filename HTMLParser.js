const ejs = require('ejs');

class HTMLParser {
    static async Parse(tabela){
        return await ejs.renderFile('./tabela.ejs', {
            cabecalho: tabela.cabecalho,
            linhas: tabela.linhas
        });
    }
}

module.exports = HTMLParser;