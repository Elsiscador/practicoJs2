let cadenas = []

while (cadenas) {
  let cadena = prompt("Introduce una cadena de texto (pulsa 'cancelar' para salir):");

  if (cadena === null) {
    break;
  }

  cadenas += cadena + "---";
}

confirm  ("Cadenas concatenadas: " + cadenas);
