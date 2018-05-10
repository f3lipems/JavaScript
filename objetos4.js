class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    fazAniversario(){
        this.idade = this.idade +1;
    }

    toString(){
        return `[nome=${this.nome}, idade=${this.idade}]`
    }
}

let p1 = new Pessoa('Felipe', 30);

console.log(p1.idade);
console.log(p1);
p1.fazAniversario();
console.log(p1.idade);
console.log(p1 instanceof Pessoa);
console.log(p1 instanceof Object);
console.log(p1.toString());