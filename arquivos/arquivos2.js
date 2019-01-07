const arquivos = require('fs');

const call = function(erro, dados){
    if(erro){
        console.log(erro.message);
    }else{
        console.log(dados);
    };
};
arquivos.readFile('dados.txt','utf8',call);
console.log('Pensando na vida...');