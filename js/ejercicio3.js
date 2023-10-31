let cadenas = [];

while (cadenas) {
  let cadena = prompt("Ingresa una frase  y pulsa cancelar para salir");
  
  if (cadena === null) {
    break;
  }
  
  cadenas.push(cadena);
}

let resultado = cadenas.join("---");

confirm("Las cadenas concatenadas son: " + resultado);
