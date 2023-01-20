// EJERCICIOS - ARRAYS

/*
Dada la siguiente lista de invitados en ese orden:

Lucas,
Matias,
Jose,
Pedro,
Martina, 
Marcelo, 
Esteban, 
Marcela, 
Martin


 1) Informar por consola el numero de invitados 
*/

let invitados = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martin",
];

console.log(invitados.length);

/*
2) Imprimir por consola el nombre del ultimo invitado
*/

console.log(invitados[invitados.length - 1]);

/*
3) A ultimo momento, se invito a Pedro a la fiesta, por lo que
   hay que agregarlo al final de la lista.
*/

invitados.push("Pedro");
console.log(invitados);

/*
4) Media hora antes de empezar Marcela confirmo que no podia asistir.
   Generar una nueva lista que contenga los invitados que confirmaron su
   presencia.
*/

invitados.splice(invitados.indexOf("Marcela"), 1);

console.log(invitados);

/*
5) Por cada invitado, asignarle un numero de orden conforme
  su posicion en la lista. Mostrar este numero de orden en un nuevo
  array de la siguiente manera: "Juan. Orden: 1".
*/

invitados2 = invitados.map((element, i) => `${element}. Orden: ${i + 1}`);
console.log(invitados2);

/*
6) Suponiendo que los invitados consumieron la siguente cantidad de platos
  
      Lucas: 3 platos
      Esteban: 1 platos
      Jose: 1 plato
      Los restantes: 4 platos
  
Calular el numero total de platos consumidos al final de la fiesta
*/

let totalPlatos = invitados.reduce((totalPlatos, element) => {
  if (element === "Lucas") totalPlatos += 3;
  else if (element === "Esteban" || element === "Jose") totalPlatos += 1;
  else totalPlatos += 4;
  return totalPlatos;
}, 0);

console.log(totalPlatos);

/*  
7) Acomodar los invitados por orden alfabetico.
*/
invitados.sort();
console.log(invitados);
