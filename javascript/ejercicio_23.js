/*
  Este ejercicio se trata de buscar un patrón,  
  de paréntesis abiertos a la derecha "(" existen 
  en el string

   si tienes estos casos de paréntesis inválidos: 
   
   ")"
   ")("
   "()"
     
   el paréntesis se omite, solo se deben contar los paréntesis 
   validos los cuales son:
   
   "(" paréntesis valido
   "((" 2 paréntesis validos
   ")((" solo 1 paréntesis es valido y es el último
   "(()" 1 paréntesis es valido, pero los 2 ultimos no
   "()))(" solo 1 paréntesis es valido y es el último 
   "(())((" el primer paréntesis y los 2 últimos son validos 
   ")((" el último paréntesis es valido

   NOTA: debes contar cuantos paréntesis, validos existen en el string de
        paréntesis y el total de validos. Adicional la validación se 
        produce en pares y sin par en caso de que no exista.

   )(((()))((()))))

*/

//            1     2 --------------> 2 pares de patrones validos de 2 (( c/u
let str = ")(((()))((()))))";

// TOTAL DE (
function contarParentesisDerechos(str){
return str.split("(").length - 1
}
  
console.log ("Total de (:" , contarParentesisDerechos (str))

// TOTAL DE ( INDIVIDUALES VALIDOS
function contarIndividualesValidos(str){
  return str.split("((").length // sintaxis estandar
}

console.log ("Total de ( individuales validos:" , contarIndividualesValidos (str))

// TOTAL DE PATRONES (( VALIDOS
function contarPatronValido(str){
  return str.split("((").length - 2 // sintaxis alterada, debido a que no se cuentan los ( individuales y la validacion es requerida en pares, tuve que restar en 2 el conteo con el fin de evitar contar los patrones invalidos.
  }
  
console.log ("Total de pares de patrones validos:" , contarPatronValido(str))