let objetojson = '{"nome:Felipe", "idade":30}';

try{
    let pessoa = JSON.parse(objetojson);
    console.log(pessoa.nome);
} catch (err){
    console.error(err.name);
}finally{
    console.log('sempre executa');
}
console.log("Fim!");