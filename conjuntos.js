let conjunto = new Set();
conjunto.add(1);
conjunto.add(1);
conjunto.add(2);
console.log(conjunto.size);

for(let elemento of conjunto) {
    console.log(elemento);
}