//EJERCICIOS - CONTROL FLOW

/* 1) Triangulo de #. Para este ejercicio, construir un programa 
que una vez concluido nos permita ver en consola un triangulo
formado con #, de la siguiente manera:

#
##
###
####
#####
 
(PISTA: Recuerden que yo puedo agarrar una variable, tomar su valor y 
    concatenarla con otra cosa asi
=> miVariable = miVariable + 'algoMas")

*/

for (var n = 1; n < 6; n++) {
  console.log("#".repeat(n));
}

/*2) Numeros pares e impares. Hacer un programa que itere por los 
numeros del 0 al 10 y, por cada uno de ellos, imprima el numero y
nos diga si es par o impar. 
Ejemplo:

0 es par
1 es impar
2 es par
...
*/

for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) console.log(`${i} es par`);
  else console.log(`${i} es impar`);
}

/*3) FizzBuzz. Generar un programa que itere del 1 al 15. Por cada 
iteracion, mostrar por consola lo siguiente:

1- Si el numero es multimo de 3, mostrar la palabra "Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
3- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
4- En los demas casos, mostrar el numero
*/

for (i = 0; i <= 15; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

//CODING CHALLENGE

/*1) REGISTRO.

  Vamos a construir un programa que permita al usuario registrarse en nuestra aplicacion. Para ello, en primer lugar vamos a
  mostrar un mensaje que le de la bienvenida al usuario y le pregunte si desea registrarse (PISTA: recuerden que habia un metodo del 
  navegador que permitia hacer este tipo de consultas al usuario, devolviendo true o false segun el caso).
  En caso de que el usuario acepte registrarse, le vamos a pedir que ingrese su nombre de usuario en primer lugar. El nombre de usuario
  tiene que tener por lo menos 3 caracteres y no va a ser case sensitive, por lo que lo vamos a almacenar en minusculas, independientemente
  de como lo ingrese el usuario. Agregar la validacion necesaria para que en caso de que el usuario no cumpla con las concidiones, 
  se muestre un mensaje de error.
  Si el nombre de usuario es ingresado correctamente, le vamos a pedir al usuario que ingrese una contrasena, la que tiene que tener
  por lo menos 6 caracteres. La contrasena tiene que ser case sensitive, por lo que se respetan las mayusculas y minusculas segun lo ingrese
  el usuario.
  En caso de que la contrasena no cumpla con el requisito anterior, se debe mostrar un mensaje de error. De lo contrario, se debe mostrar un
  mensaje de exito informando al usuario que se completo el registro. (OTRA PISTA: Para ver como validar la longitud de un string, pueden ver el siguiente
    enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length )

*/

let newregistre = confirm("Hola nuevo usuario, deseas registrarte?");

if (newregistre) {
  var username = prompt("Ingresa tu nombre de usuario").toLowerCase();
  while (username.length < 3) {
    username = prompt(
      "El nombre de usuario debe tener al menos 3 caracteres, intenta otro nombre de usuario"
    ).toLowerCase();
  }
  var password = prompt("Ingresa una contraseña");
  while (password.length < 6) {
    password = prompt(
      "La contraseña debe tener al menos 6 caracteres, intenta otra contraseña"
    );
  }
  var status_registro = true;
  alert("Tu registro fue exitoso :)");
} else {
  alert("Gracias, inicia registro cuando gustes");
}

/*2) LOGIN

  Partiendo de la base del punto anterior, en caso de que se complete el registro, vamos a mostrarle un mensaje al usuario preguntandole
  si desea iniciar sesion. En caso de que el usuario haga click en aceptar, vamos a pedirle que ingrese su nombre de usuario y luego su contrasena
  Si alguno de los datos ingresados no coinciden con los informados al momento del registro, le vamos a mostrar un mensaje de error al usuario.
  Caso contrario, le mostraremos un mensaje que diga que el login fue exitoso. Recordar el tema de normalizar los inputs en caso de que sea necesario,
  para poder hacer la comparacion contra los valores almacenados.

  */
if (status_registro) {
  let login = confirm("Deseas iniciar sesión?");
  if (login) {
    var username1 = prompt("Ingresa tu nombre de usuario").toLowerCase();
    var password1 = prompt("Ingresa tu contraseña");
    while (!(username1 == username && password1 == password)) {
      alert("Nombre de usuario o contraseña incorrecta");
      username1 = prompt("Ingresa tu nombre de usuario").toLowerCase();
      password1 = prompt("Ingresa tu contraseña");
    }
    alert("Tu login fue exitoso :)");
  } else {
    alert("Gracias, inicia sesión cuando gustes");
  }
}

/*3) EXTRA
  Tomando los ejercicios anteriores, los vamos a modificar para que, en el caso de que cualquiera de las validaciones anteriores arroje un error
  el programa vuelva a pedir al usuario la informacion solicitada en ese punto. Tener en cuenta que el usuario podra dar por terminado el programa
  tocando el boton de cancelar al momento en que se le pide ingresar un dato o se le consulta si desea registrarse o iniciar sesion.
*/

// Sol: en los scripts anteriores se usó while para implementar esa funcionalidad
