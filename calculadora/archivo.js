var pantalla = 0;
var residuo = 0;

var valorResultadoAnterio = 0;
var hasComma = false;

var accion = "";
var esResultado = false;

function numero(n) {
  if (pantalla == 0 || esResultado) {
    pantalla = n;
  } else {
    if (hasComma) {
      pantalla = parseFloat(pantalla + "." + n, 4);
    } else {
      pantalla = parseFloat(pantalla + "" + n);
    }
  }

  hasComma = false;
  Result = false;
  imprimirValores();
}

function absoluto() {
  pantalla = pantalla * -1;
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

function multiplica() {
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

function percentage() {
  valorResultadoAnterior = pantalla;

  if (accion == "divide") {
    pantalla = residuo / ((residuo * pantalla) / 100);
  }
  if (accion == "multiplica") {
    pantalla = (residuo * pantalla) / 100;
  }
  if (accion == "suma") {
    pantalla = residuo + (residuo * pantalla) / 100;
  }
  if (accion == "resta") {
    pantalla = residuo - (residuo * pantalla) / 100;
  }

  hasComma = false;
  residuo = 0;
  imprimirValores();
}
function comma() {
  var hasDecimals = Math.abs(pantalla - Math.floor(pantalla)) > 0;

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
