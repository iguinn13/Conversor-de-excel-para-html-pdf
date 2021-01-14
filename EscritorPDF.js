const pdf = require('html-pdf');

class EscritorPDF {
    static EscreverPDF(arquivo, html){
        pdf.create(html, {}).toFile(arquivo, (erro => {
            console.log(erro);
        }));
    }
}

module.exports = EscritorPDF;