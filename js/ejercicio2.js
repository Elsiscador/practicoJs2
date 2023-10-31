// Solicitar la nota al usuario
let nota = prompt("Ingrese una nota (0-10):");

// Convertir la nota a un número entero
nota = parseInt(nota);

// Verificar si la nota está dentro del rango válido
if (nota >= 0 && nota <= 10) {
  // Calcular la calificación según la nota ingresada
  let calificacion;
  switch (nota) {
    case 0:
    case 1:
    case 2:
      calificacion = "Muy deficiente";
      break;
    case 3:
    case 4:
      calificacion = "Insuficiente";
      break;
    case 5:
    case 6:
      calificacion = "Suficiente";
      break;
    case 7:
      calificacion = "Bien";
      break;
    case 8:
    case 9:
      calificacion = "Notable";
      break;
    case 10:
      calificacion = "Sobresaliente";
      break;
  }

  // Mstrar la calificación en un alert
  alert("La calificación es: " + calificacion);
} else {
  // Mostrar un mensaje de error si la nota no es válida
  alert("Introduce un número válido (0-10)");
}
