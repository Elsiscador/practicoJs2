/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.


*/
let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  document.write("Usted tiene " + edad + " años y puede conducir.");
} else {
  document.write("Usted tiene " + edad + " años y dice romero que tiene aca en la cabeza no va conducir.");
}
