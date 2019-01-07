class Moeda{
    constructor(v,n){
        this.valor = v;
        this.nome = n;
    }
}

class Cofrinho{
    constructor(){
        this.moedas = [];
    }
    adicionar(m){
        this.moedas.push(m);
    }
    calcularTotal(){
        let t = 0.0;
        for(i = 0; i < this.moedas.length; i++){
            
            t += this.moedas[i].valor;
        }
        return t;
    }
}

cofre = new Cofrinho()
m = new Moeda(0,"")
for(i = 0; i < 10; i++){
    m.nome = String(i);
    m.valor = i;
    cofre.adicionar(m);
    console.log(i);
}

console.log(cofre.calcularTotal());
