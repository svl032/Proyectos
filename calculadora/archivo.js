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
  console.log(pantalla, residuo);
}

function suma() {
  if (residuo != 0) {
    residuo = residuo + pantalla;
  } else {
    residuo = pantalla;
  }
  pantalla = 0;
  accion = "suma";
  console.log(pantalla, residuo);
}

function resta() {
  if (residuo != 0) {
    residuo = residuo - pantalla;
  } else {
    residuo = pantalla;
  }
  pantalla = 0;
  accion = "resta";
  console.log(pantalla, residuo);
}

function multiplicacion() {
  if (residuo != 0) {
    residuo = residuo * pantalla;
  } else {
    residuo = pantalla;
  }
  pantalla = 0;
  accion = "multiplica";
  console.log(pantalla, residuo);
}

function dividir() {
  if (residuo != 0) {
    residuo = residuo / pantalla;
  } else {
    residuo = pantalla;
  }
  pantalla = 0;
  accion = "divide";
  console.log(pantalla, residuo);
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
  console.log(pantalla, residuo);
}

function resetear() {
  pantalla = 0;
  residuo = 0;
  accion = "";
  esResultado = false;
  console.log(pantalla);
}
