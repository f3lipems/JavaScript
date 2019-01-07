let arr = [1,1,2,5,4,8,5,1,4,6,5,7,8,7,2,6,7,5,4,7,8,9,6,5,2,3,8,7,9,4,2,3,3,3,5,4,4];

let freq = new Map();

for(let numero of arr){
    if(freq.has(numero)){
        freq.set(numero, freq.get(numero)+1)
    } else{
        freq.set(numero,1);
    }
} 

for(let[chave,valor] of freq){
    console.log(chave + ": " + valor);
}
