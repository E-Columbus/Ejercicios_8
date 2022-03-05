/*
  crear una función para pasar a mayúscula / upper, 
  las primeras letras vocales que encuentres en el string, 
  solo la primera si por ejemplo la letra a se repite 3 veces
  en el string solo la primera letra a debe estar en mayúsculas 
  las otras no.

"hOlA mUndo dEsde javascrIpt"

function pasarMayuscula(str){
  //...
}
*/

let str = "hola mundo desde javascript"; 

// SOLUCION MANUAL
function pasarMayuscula(str){
return `h${str[1].toUpperCase()}l${str[3].toUpperCase()} m${str[6].toUpperCase()}ndo d${str[12].toUpperCase()}sde javascr${str[24].toUpperCase()}pt`
}

console.log (pasarMayuscula (str))

// SOLUCION AUTOMATIZADA
var a = "A";
var e = "E";
var i = "I";
var o = "O";
var u = "U";

var found = {};

var Result = str.split("").map(function (character) {
  if (!found[character]) {
    found[character] = true;
    switch (character) {
      case "a": return a;
      case "e": return e;
      case "i": return i;
      case "o": return o;
      case "u": return u;
    }
  }
  return character;
}).join("");

console.log(Result);