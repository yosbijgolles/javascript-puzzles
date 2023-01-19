//EJERCICIOS - BASIC CONCEPTS

/*
1) Pedir al usuario que ingrese su nombre. Guardar
ese nombre en una variable y utilizarlo para saludar al 
usuario (por ejemplo: "Hola Alexis").
*/

const nombre = prompt("Ingresa tu nombre");
alert(`Hola ${nombre}`);

/*2) Pedirle a un usuario que ingrese dos numeros
y devolverle la suma de dichos numeros
*/

const num1 = prompt("Ingresa un primer número");
const num2 = prompt("Ingresa un segundo número");

alert(`La suma de los números es ${+num1 + +num2}`);

/*3) Pedirle a un usuario que ingrese dos numeros
y devolverle el doble de la suma de dichos numeros
*/

const num3 = prompt("Ingresa un primer número");
const num4 = prompt("Ingresa un segundo número");

alert(`El doble de la suma de los números es ${2 * (+num3 + +num4)}`);

/*
4) Pedirle al usuario que ingrese el ancho y el alto 
de una habitacion y calcular la superficie.
*/

const ancho = prompt("Ingresa el ancho");
const alto = prompt("Ingresa el alto");

alert(`La superficie es ${+ancho * +alto}`);

/*
5) Pedirle al usuario que ingrese su nombre y devolverle
el nombre todo en minusculas
*/

const nombre1 = prompt("Ingresa tu nombre");
alert(nombre1.toLowerCase());

/*
6) Pedirle al usuario que ingrese su apellido y devolverle
el apellido todo en mayuscula.
*/

const nombre2 = prompt("Ingresa tu apellido");
alert(nombre2.toUpperCase());

/*
7) Pedirle al usuario el nombre, el apellido y la 
edad. Mostrar el siguiente mensaje:

Nombre: Juan
Apellido: Perez
Edad: 20
*/

const nombre3 = prompt("Ingresa tu nombre");
const apellido = prompt("Ingresa tu apellido");
const edad = prompt("Ingresa tu edad");

alert(`Nombre: ${nombre3}
Apellido: ${apellido}
Edad: ${edad}`);
