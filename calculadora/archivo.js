var pantalla = 0;
var residuo = 0;
var accion = "";
var esResultado = false;

function numero(n) {
  if (pantalla == 0 || esResultado) {
    pantalla = n;
  } else {
    pantalla = parseInt(pantalla + "" + n);
  }
  esResultado = false;

  imprimirValores();
}

function suma() {
  if (residuo != 0) {
    residuo = residuo + pantalla;
  } else {
    residuo = pantalla;
  }
  pantalla = 0;
  accion = "suma";
  imprimirValores();
}

function resta() {
  if (residuo != 0) {
    residuo = residuo - pantalla;
  } else {
    residuo = pantalla;
  }
  pantalla = 0;
  accion = "resta";
  imprimirValores();
}

function multiplicacion() {
  if (residuo != 0) {
    residuo = residuo * pantalla;
  } else {
    residuo = pantalla;
  }
  pantalla = 0;
  accion = "multiplica";
  imprimirValores();
}

function dividir() {
  if (residuo != 0) {
    residuo = residuo / pantalla;
  } else {
    residuo = pantalla;
  }
  pantalla = 0;
  accion = "divide";
  imprimirValores();
}
function comma() {
  var hasDecimals = Math.abs(screenValue - Math.floor(screenValue)) > 0;

  if (!hasDecimals) {
    hasComma = true;
  }
}

function igual() {
  if (accion == "suma") {
    pantalla = residuo + pantalla;
  }
  if (accion == "resta") {
    pantalla = residuo - pantalla;
  }
  if (accion == "multiplica") {
    pantalla = residuo * pantalla;
  }
  if (accion == "divide") {
    pantalla = residuo / pantalla;
  }

  residuo = 0;
  accion = "";
  esResultado = true;
  imprimirValores();
}

function resetear() {
  pantalla = 0;
  residuo = 0;
  accion = "";
  esResultado = false;
  imprimirValores();
}
function imprimirValores() {
  document.getElementById("resultado").innerHTML = pantalla;
}
