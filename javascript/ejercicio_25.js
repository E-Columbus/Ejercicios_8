/*
  generar numeros y letras aleatorias, con la siguiente formula:
  x = Math.random() * (max - min) + min;
  
  donde el punto a crear es un captcha de 7 letras

ejemplo => dcdwf5t // se debe generar de forma aleatoria/random
  
adicional vas a tener 2 funciones 

1 generarCaptcha donde creas las 7 letras + numeros aleatorios
  
2 validarCaptcha en la cual recibe un string como parametros, 
en donde debes validar si el string ingresado, es igual al captcha generado

*/

let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let n = [0,1,2,3,4,5,6,7,8,9];

// 1 - VERIFICACION ALEATORIA (RANDOM RESULT)

// GENERACION DE CAPTCHA
function generarCaptcha(x){

  var x = "";
  
  while (x.length < 7) {
    x += abc[Math.floor(Math.random() * (26 - 0))] + n[Math.floor(Math.random() * (10 - 0))];
  } 
  return x
  }
  
  let result1 = generarCaptcha()
  console.log ("Captcha generado:" , result1)
  
  
  // VALIDACION DE CAPTCHA
  function validarCaptcha(str){
  
  var str = "a0a0a0a0";
  
  if (str == result1){
    return `${str} Es igual al ingresado ${result1}`
   }else{
     return `${str} No es igual al ingresado ${result1}`
   }
  }
  
  var RandomResult = validarCaptcha ()
  console.log (RandomResult)

console.log ("-------------------------------------")

// 2 - VERIFICACION CON 100% DE PROBABILIDAD DE COINCIDENCIA (RIGGED RESULT)

// GENERACION DE CAPTCHA 2
function generarCaptcha2(x){

  var x = "";
  
  while (x.length < 7) {
    x += abc[Math.floor(Math.random() * (1 - 0))] + n[Math.floor(Math.random() * (1 - 0))];
  } 
  return x
  }
  
  let result2 = generarCaptcha2()
  console.log ("Captcha generado:" , result2)
  
  
// VALIDACION DE CAPTCHA 2
function validarCaptcha2(str){
  
var str = "a0a0a0a0";
  
  if (str == result2){
    return `${str} Es igual al ingresado ${result2}`
   }else{
     return `${str} No es igual al ingresado ${result2}`
   }
  }
  
var RiggedResult = validarCaptcha2()
console.log (RiggedResult)