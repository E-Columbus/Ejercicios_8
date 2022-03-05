/*
  Los números pares sustituir por la palabra par
  resultado esperado:

  [10,"par",30,"par",50,"par",70];
  
  emplear el uso de loops y evitar hacer la siguiente practica:
  arr[1] = "par";
  arr[3] = "par";
  arr[5] = "par";

  haga esto de forma inteligente usando un loop de su gusto, al momento
  de iterar cada elemento y detectar que es par, sustituir el valor número 
  por el string "par"
*/

let arr = [10,20,30,40,50,60,70];

function PosImpares(arr) {
 
  let str = "";
  for (let i = 0; i < arr.length; i++) { 

      if (i % 2 !== 0) {
          str += " par ";
      } else { 
          str += arr[i];
      }

  }
  return str;
}

console.log(PosImpares(arr))