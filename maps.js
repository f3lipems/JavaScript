let estados = new Map();

estados.set('RS','Rio Grande do Sul');
estados.set('SC','Santa Catarina');
estados.set('SP','São Paulo');
estados.set('RJ','Rio de Janeiro');

console.log(estados.get('RS'));
console.log(estados.has('SP'));
console.log(estados.keys());
console.log(estados.values());
console.log(estados.size);