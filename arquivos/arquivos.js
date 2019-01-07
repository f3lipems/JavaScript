const arquivos = require('fs');

try{
    let dados = arquivos.readFileSync('dados.txt','utf8');
    console.log(dados);
}catch(err){
    console.error(err.message);
}