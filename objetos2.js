let pessoa = {
    nome: "Felipe da Silva",
    idade: 20,
    toString : function() {return `nome=${this.nome}, idade${this.idade}`;},
    fazAniversario(){this.idade =this.idade + 1;}
};

console.log(pessoa.toString);
console.log(pessoa.toString());

pessoa.fazAniversario();
console.log(pessoa.toString());