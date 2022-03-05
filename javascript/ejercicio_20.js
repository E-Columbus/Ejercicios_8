/*

debes transformar las letras "a" en "@"

hol@ mundo desde j@v@script

*/

let str = "hola mundo desde javascript"; 
 

// 1 - SOLUCION MANUAL
var Array1 = str.split('')

Array1.splice(3,1,"@")
Array1.splice(18,1,"@")
Array1.splice(20,1,"@")

console.log (Array1.join(""))


// 2 - SOLUCIONES AUTOMATIZADAS
var buscarA = str.search(/\a/g) - 1

var result = str.substring(0, buscarA) + str.slice(buscarA).replace(/\a/g, '@'); 

console.log(result);

// 3
let result2 = str.replaceAll("a", "@");
console.log (result2)


// 4
function letterChanges(string){
  
var reemplazar = 'a';
var result3 = '';
    
for(var i=0; i<string.length; i++){
  if (reemplazar.indexOf(string[i]) >= 0 ){
    result3 += string[i].replace(/\a/g, '@');
} else {
    result3 += string[i]
 }
}
return result3;
}
  
console.log(letterChanges('hola mundo desde javascript'))