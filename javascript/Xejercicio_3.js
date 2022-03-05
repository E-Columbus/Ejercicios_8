/*
  Iterar el array mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteración con cada 1 de ellos,
  mostrar solo los elementos pares, para determinar un elemento par/even

  n % 2 == 0;

  el n"numero" debe ser igual a 0 al momento de dividir
*/

// PARES SEGUN POSICION EN ARRAY

let arr = [10,20,30,40,50,60,70];

let ArrayFor = arr.slice(1)

function pares(a) {
  var x = []
for (var n = 0; n < a.length; n++) {
  if(n % 2 == 0) {
      x.push(a[n]);
  }
}
return x;
}

console.log (pares(ArrayFor));

// PARES SEGUN NUMERO PER SE

let arr2 = [1,2,3,4,5,6,7];

// 1 - FOR
let evenNumbers = [] 

for (let i = 0; i < arr2.length; i++) { 
  if(arr2[i] % 2 == 0) {evenNumbers.push(arr2[i]); 
  }
} 

console.log(evenNumbers);

// 2 - FILTER
var filtered = arr2.filter(function(index) {
  return (index % 2 == 0);
});

console.log (filtered)

// 3 - WHILE
let number = 0;
let len = arr2.length;

while (number < len){
    if (number % 2 == 0)
        console.log(number);
    number ++;
}