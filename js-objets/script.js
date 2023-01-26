//EJERCICIOS - OBJECTS

/*
1) Crear una clase Deportes, que reciba el atributo nombre
y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es
individual o por equipos.

Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, 
el numero de integrantes que deben formar parte de ese equipo. 
Crear un metodo para
mostrar el siguiente mensaje: 
"Para jugar al futbol necesitas 11 jugadores por equipo".
 Tener en cuenta que 'futbol' y 11 son valores que 
 pueden variar dependiedo
 del deporte (por ejemplo, si fuese basket, seria 5 jugadores)

 Futbol
 Basket
 Tenis
*/

// creamos la clase
class Deportes {
  constructor(nombre, equipo) {
    this.nombre = nombre;
    this.equipo = equipo;
  }

  tipoDeporte() {
    const tipo = this.equipo ? "Equipo" : "Individual";
    return console.log(tipo);
  }
}

// creamos la subclase
class DeportesDeEquipo extends Deportes {
  constructor(nombre, equipo, integrantes) {
    super(nombre, equipo);
    this.integrantes = integrantes;
  }

  indicacion() {
    return console.log(
      `Para jugar al ${this.nombre} necesitas ${this.integrantes} jugadores por equipo.`
    );
  }
}

const Futbol = new DeportesDeEquipo("Futbol", true, 11);
const Basket = new DeportesDeEquipo("Basket", true, 5);
const Tenis = new DeportesDeEquipo("Tenis", true, 2);

console.log(Futbol.indicacion());

/*2) Andrea y Martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa
de papas fritas. Por su parte, Martin lleva 1 porcion de torta, una gaseosa
y 1 paquete de galletitas dulces.

CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS,
DONDE CADA PRODUCTO TENGA LA CANTIDAD QUE LLEVO CADA UNO.

REALIZAR LAS SIGUIENTES TAREAS:

a) Mostrar por consola los productos que llevo cada uno
(solo el nombre del producto)

b) En el camino al picnic, la bolsa de Andrea se rompio, 
por lo que tuvieron que poner todo en la bolsa de Martin.
Realizar el cambio correspondiente para que la bolsa de Martin
tenga el total de los productos del picnic.

c) Calcular el total de productos que llevaron al picnic
*/

// SOLUCIÓN

// DENFINIENDO LAS BOLSAS COMO OBJETOS
let Andrea = {
  cervezas: 2,
  sandwiches: 2,
  "papas fritas": 1,
};

let Martin = {
  "porcion de torta": 1,
  gaseosa: 1,
  "paquete de galletitas dulces": 1,
};

// TRASLADANDO LOS PRODUCTOS A LA BOLSA DE MARTIN
Object.assign(Martin, Andrea);
console.log(Martin);

// CONTABILIZAR PRODUCTOS

let productos = 0;
for (let key in Martin) {
  productos += Martin[key];
}

console.log(productos);
