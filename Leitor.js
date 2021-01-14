const fs = require('fs');
const util = require('util');

class Leitor {
    constructor(){
        this.leitor = util.promisify(fs.readFile);
    }

    async Ler(arquivo){
        try {
            return await this.leitor(arquivo, 'utf-8');
        } catch(erro){
            return undefined;
        }
    }
}

module.exports = Leitor;