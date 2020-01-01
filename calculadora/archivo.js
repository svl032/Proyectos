var pantalla = 0;
var residuo = 0;
var accion = "";
var esResultado = false;

function uno() {
  if (pantalla == 0 || esResultado) {
    pantalla = 1;
  } else {
    pantalla = parseInt(pantalla + "1");
  }

  esResultado = false;
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
  esResultado = true;
  console.log(pantalla, residuo);
}
