// EJERCICIOS - ASYNCHRONY

// 1) Vamos a simular una carrera entre 3 personas, Juan,
// Mario y Martin. El orden de largada sera siempre el
//siguiente:

// console.log("Juan");
// console.log("Mario");
// console.log("Martin");

// El orden de llegada se determina conforme el
// nombre de cada uno vaya apareciendo en la consola,
// de modo que el ganador sera aquel cuyo nombre sea
//el primero en aparecer.

// ACTIVIDAD: Utilizando solamente setTimeout y sin
// alterar el orden de lagrada, escribir el codigo
// necesario para obtener los siguientes resultados:

// Vuelta 1:
// Mario
// Martin
// Juan

console.log("Vuelta 1");
setTimeout(() => {
  console.log("Juan");
}, 0);
console.log("Mario");
console.log("Martin");

//Vuelta 2:
// Juan
// Martin
// Mario

console.log("Vuelta 2");
console.log("Juan");
setTimeout(() => {
  console.log("Mario");
}, 0);
console.log("Martin");

//Vuelta 3
// Martin
// Juan
// Mario

console.log("Vuelta 3");
setTimeout(() => {
  console.log("Juan");
}, 0);
setTimeout(() => {
  console.log("Mario");
}, 1);
console.log("Martin");

// Vuelta 4
// Mario
// Juan
// Martin

console.log("Vuelta 4");
setTimeout(() => {
  console.log("Juan");
}, 0);
console.log("Mario");
setTimeout(() => {
  console.log("Martin");
}, 1);
