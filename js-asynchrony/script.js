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

// 2) Utilizando setTimeout, crear una funcion que
// actue como un temporizador, haciendo una cuenta
// regresiva desde el numero de segundos que se pase
// como argumentos hasta llegar a 0. Para ese ejercicio
// no se puede utilizar ningun tipo de loop (for, while, etc)
//PISTA: Para resolver el ejerciio, pueden investigar un
// poco sobre funciones recursivas.

const cuentatras = (n) => {
  if (n < 0) return;
  console.log(n);
  setTimeout(() => {
    cuentatras(n - 1);
  }, 1000);
};

cuentatras(8);

//3) Utilizando la API de GITHUB (https://api.github.com)
//realizar las siguientes tareas

// a) Obtener una lista de los repositorios publicos
// (Documentacion de la API: https://docs.github.com/es/rest/reference/repos#list-public-repositories)

const obtenerRepositorios = async () => {
  resultado = await fetch("https://api.github.com/repositories");
  resultadojs = await resultado.json();
  return resultadojs;
};

obtenerRepositorios();

// b) Generar una funcion que a partir de la respuesta
// del punto anterior, retorne un array de los nombres
// de usuario de los owners de los repositorios listados

const obtenerNombres = async () => {
  const repositorios = await obtenerRepositorios();
  const nombres = repositorios.map((x) => x.owner.login);
  console.log(nombres);
};

obtenerNombres();

//c) Tomar de la respuesta al primer respositorio, y
// listar todos los repositorios del owner.
// PISTA: Para ver el endpoint al cual deberas pegarle
// para traer los repositorios del owner, deberas
// inspeccionar la informacion que recibes dentro del
// primer request.

const obtenerRepositoriosOwner = async () => {
  const repositorios = await obtenerRepositorios();
  const endpoint = repositorios[0].owner.repos_url;
  const request = await fetch(endpoint);
  const requestjs = await request.json();
  console.log(requestjs);
};

obtenerRepositoriosOwner();
