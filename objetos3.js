function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.fazAniversario = function() {this.idade = this.idade +1};
}

let p1 = new Pessoa('Felipe', 30);
let p2 = new Pessoa('Martins', 23);

console.log(p1);
console.log(Pessoa.prototype);

console.log(p1 instanceof Pessoa);
console.log(p1 instanceof String);
console.log(p1 instanceof Object);