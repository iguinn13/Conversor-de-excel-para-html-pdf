const fs = require('fs');

class Leitor {
    Ler(arquivo){
        fs.readFile(arquivo, {encoding: 'utf-8'}, (erro, dados) => {
            if(!erro){
                console.log(dados);
            } else {
                console.log(erro);
            }
        });
    }
}

module.exports = Leitor;