let alo = "Oi";
console.log(alo);

function aloMundo(nome) 
{
    console.log(`Alô ${nome}`);
}

aloMundo("S2B");

function potencia(base, expoente = 2) 
{
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) 
    {
        resultado *= base;
    }
    return resultado;
}
    console.log(potencia(4));
    console.log(potencia(2,6));

let alo2 = function(){
    return "Tchau";
}

console.log(alo2());

let alo3 = (nome) => `Alo ${nome}`;
let alo4 = (nome) => {`Alo 4 ${nome}`};

console.log("\n");
console.log(alo3("Teste 3"));

console.log("\n");
console.log(alo3("Teste 4"));