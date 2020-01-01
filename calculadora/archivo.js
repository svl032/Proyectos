var pantalla = 0;
var residuo = 0;
var accion = "";

function uno() {
  if (pantalla == 0) {
    pantalla = 1;
  } else {
    pantalla = parseInt(pantalla + "1");
  }

  console.log(pantalla, residuo);
}

function suma() {
  if (residuo != 0) {
    residuo = pantalla + residuo;
  } else {
    residuo = pantalla;
  }

  pantalla = 0;
  accion = "suma";

  console.log(pantalla, residuo);
}

function igual() {
  if (accion == "suma") {
    pantalla = pantalla + residuo;
    residuo = 0;
    accion = "";
  }
  console.log(pantalla, residuo);
}
