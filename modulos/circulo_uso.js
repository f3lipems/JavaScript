const circulo = require('./circulo');// Importa o módulo completo para a variável

const {area} = require('./circulo'); // Importa apenas a propriedade area

console.log(circulo.area(5));
console.log(circulo.circunferencia(3));
console.log(circulo.local);

console.log(area(1));