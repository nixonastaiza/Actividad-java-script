console.log("hola mundo");

// Tipos primitivos
let texto = "Hola JavaScript";
let numero = 25;
let numeroGrande = 12345678901234567890n;
let verdadero = true;
let indefinido;
let nulo = null;
let simbolo = Symbol("id");

console.log(`String: ${texto}`);
console.log(`Number: ${numero}`);
console.log(`BigInt: ${numeroGrande}`);
console.log(`Boolean: ${verdadero}`);
console.log(`Undefined: ${indefinido}`);
console.log(`Null: ${nulo}`);
console.log(`Symbol: ${simbolo.toString()}`);

// Operaciones
let resultado1 = (3 - 2) * (10 / 2);
let resultado2 = 3 - 2 * 10 / 2;
let resultado3 = (3 - 2) * 10 / 2;

console.log(`resultado1 = ${(3 - 2) * (10 / 2)}`);
console.log(`resultado2 = ${3 - 2 * 10 / 2}`);
console.log(`resultado3 = ${(3 - 2) * 10 / 2}`);

// Incremento y decremento
console.log(`resultado1--: ${resultado1--}`);
console.log(`resultado2++: ${resultado2++}`);
resultado3++;
console.log(`resultado3++: ${resultado3}`);

// Manipulación de Strings
let frase = "El desarrollo web es lo máximo";

console.log(`Frase original: ${frase}`);
console.log(`¿Contiene "web"?: ${frase.includes("web")}`);
console.log(`Posición de "web": ${frase.indexOf("web")}`);
console.log(`¿Comienza con "El"?: ${frase.startsWith("El")}`);
console.log(`¿Termina con "máximo"?: ${frase.endsWith("máximo")}`);
console.log(`Reemplazo: ${frase.replace("web", "software")}`);
console.log(`Mayúsculas: ${frase.toUpperCase()}`);
console.log(`Minúsculas: ${frase.toLowerCase()}`);