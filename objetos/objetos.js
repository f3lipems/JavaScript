// Objeto Pessoas
let pessoa = {
    nome: "Felipe da Silva",
    idade: 20
};

console.log(pessoa.nome.length);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.peso = 72.00;

console.log(pessoa);

delete pessoa.peso;

console.log(pessoa);