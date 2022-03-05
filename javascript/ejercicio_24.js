/*
  buscar la palabra javascript y cambiarla por js

  "hola mundo desde js, porque js es un lenguaje dinamico"; 
*/

let str = "hola mundo desde javascript, porque javascript es un lenguaje dinamico"; 

// 1 - SOLUCION MANUAL
var ArrayJS = str.split(" ")

function CambiarPalabras(ArrayJS){

ArrayJS.splice(3,1,"JS,")
ArrayJS.splice(5,1,"JS")

return ArrayJS.join(" ")
}

console.log (CambiarPalabras (ArrayJS))

// 2 - SOLUCION AUTOMATIZADA
let result = str.replaceAll("javascript", "JS");
console.log (result)