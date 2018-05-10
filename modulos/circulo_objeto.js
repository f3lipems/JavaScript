module.exports = class Circulo{
    constructor(r){
        this.raio = r;
    }

    area(){
        return Math.PI * this.raio**2;
    }

    circumferencia(){
        return 2* Math.PI * this.raio;
    }
}