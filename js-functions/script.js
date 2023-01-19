// EJERCICIOS - FUNCTIONS

/* 
1) Crear un programa que pida al usuario que ingrese un numero
y le devuelva un mensaje indicando si el numero es positivo, 
negativo o si es 0.
*/

function isPositive() {
  let number = Number(prompt("Ingresa un número"));
  if (number == 0) {
    respuesta = "El número es cero";
  } else if (number < 0) {
    respuesta = "El número es negativo";
  } else if (number > 0) {
    respuesta = "El número es positivo";
  } else {
    respuesta = "El valor ingresado no es un número";
  }
  return alert(respuesta);
}
isPositive();

/*
2) Crear un programa que pida un numero al usuario y le devuelva
un mensaje diciendo si el numero es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
*/

function isPrime() {
  let mensaje = "";
  let n = +prompt("Ingresa un número");
  if (!n && n != 0) {
    mensaje = "El valor no es un número";
  } else {
    let count = 0;
    for (i = 1; i < n + 1; i++) {
      if (n % i == 0) {
        count = count + 1;
      }
    }
    if (count == 2) {
      mensaje = "Es primo";
    } else {
      mensaje = "No es primo";
    }
  }
  return alert(mensaje);
}
isPrime();

/*
3) Crear un programa que convierta la termperatura de grados Celsius a 
Faranheit y viceversa. El usuario deberia ingresar la temperatura y a que
unidad la quiere convertir.
*/

function convertTemperature() {
  let temperatura1 = +prompt("Ingrese la temperatura a convertir");
  let temperatura2;
  let unidad = prompt("Ingrese a que unidad desea convertir").toLowerCase();
  if (!temperatura1 && temperatura1 != 0) {
    return alert("La temperatura no es  válida");
  } else {
    if (unidad == "celsius") {
      temperatura2 = (temperatura1 - 32) / 1.8;
    } else if (unidad == "fahrenheit") {
      temperatura2 = temperatura1 * 1.8 + 32;
    } else {
      return alert("Unidad de conversión no valida");
    }
  }
  return alert(`La temperatura en ${unidad} es ${temperatura2}`);
}

convertTemperature();

/*
4) Crear un programa para calcular el total de una compra. Para ello, se le
tiene que pedir al usuario que ingrese el precio de cada producto y, cuando termine, 
que ingrese la palabra 'total'. Devolverle el total de la compra.
*/

function totalCompra() {
  let input = "0";
  let sum = 0;
  while (input != "total") {
    while (!+input && +input != 0) {
      input = prompt("No ingresó un valor válido. Intente nuevamente");
    }
    cost = +input;
    sum = sum + cost;
    input = prompt("ingresa valor del producto").toLowerCase();
  }

  return alert(`El total de la compra el ${sum}`);
}

totalCompra();
