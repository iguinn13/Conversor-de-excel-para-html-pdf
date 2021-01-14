const fs = require('fs');
const util = require('util');

class Escritor {
    constructor(){
        this.escritor = util.promisify(fs.writeFile);
    }

    async Escrever(arquivo, dados){
        try {
            await this.escritor(arquivo, dados);
            return true;
        } catch(erro){
            return false;
        }
    }
}

module.exports = Escritor; 