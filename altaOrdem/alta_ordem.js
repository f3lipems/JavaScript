function multiplicar (fator) {
    return numero => numero * fator;
}

let dobrar = multiplicar(2);
console.log(dobrar(5));

console.log(multiplicar(2));

console.log(multiplicar(2)(5));

