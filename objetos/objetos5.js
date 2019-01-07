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

class PessoaFisica extends Pessoa{
    constructor(nome, idade, cpf){
        super(nome, idade);
        this.cpf = cpf;
    }

    toString(){
        return `Nome: ${this.nome}, Idade: ${this.idade}, CPF: ${this.cpf}`
    }

    toStringII(){
        return super.toString() +`[CPF: ${this.cpf}]`
    }
}

let p1 = new Pessoa('Felipe', 30);

let p2 = new PessoaFisica('lipe', 18, 654);

console.log(p2.cpf);

console.log(p2.toString());
console.log(p2.toStringII());
console.log(p1.toString());

console.log(JSON.stringify(p2));

let objjson = '{"nome":"Meu Nome", "Idade":30, "CPF":1234568987}';

let p3 = JSON.parse(objjson);
console.log(p3.nome);