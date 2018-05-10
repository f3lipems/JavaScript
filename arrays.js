let numeros = [1,2,3];

console.log(numeros[0]);
console.log(numeros);
console.log(numeros.length);

numeros.length = 7;
console.log(numeros.length);
console.log(numeros);

console.log(numeros[5]);
numeros[5] = "TEst";
console.log(numeros[5]);

console.log(numeros);

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
    numeros[i] = i;
};

console.log(numeros);

for (let elemento of numeros){
    console.log(elemento);
}

let indice = numeros.findIndex(e => e > 7);

console.log(indice);

let nomes = ['felipe', 'martins'];
let [nome1, nome2, ...info] = nomes;

console.log(nome1);
console.log(nome2);
console.log(nomes);

console.log(info);
console.log(info.length);

