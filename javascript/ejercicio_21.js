/*
 crear una función donde puedas cambiar el valor 
 de las letras impares por 1 debes omitir los espacios en blanco

*/

let str = "hola mundo desde javascript"; 

var str2 = str.split('')

function imparesAUno(str2) {
 
  let space = "";
  
  for (let i = 0; i < str2.length; i++) { 

      if (i % 2 !== 0) { 
        space += "1";
      } else { 
        space += str2[i];
      }

  }
  return space;
}
console.log(imparesAUno(str2))