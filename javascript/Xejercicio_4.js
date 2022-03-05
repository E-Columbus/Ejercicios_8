/*
  Iterar el array mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteracción con cada 1 de ellos,
  mostrar solo los elementos impares, para determinar un elemento impar/odd

  n % 2 == 1;

  el n"numero" debe ser igual a 1 al momento de dividir
*/ 


// IMPARES SEGUN POSICION EN ARRAY
let arr = [10,20,30,40,50,60,70];

arr.unshift(0)

function impares(a) {
  var x = []
for (var n = 1; n < a.length; n++) {
  if(n % 2 == 1) {
      x.push(a[n]);
  }
}
return x;
}

console.log (impares(arr))

// IMPARES SEGUN NUMERO PER SE

let arr2 = [1,2,3,4,5,6,7];

// 1 - FOR
let evenNumbers = [] 

for (let i = 0; i < arr2.length; i++) { 
  if(arr2[i] % 2 == 1) {evenNumbers.push(arr2[i]); 
  }
} 

console.log(evenNumbers);

// 2 - FILTER
var filtered = arr2.filter(function(index) {
  return (index % 2 == 1);
});

console.log (filtered)

// 3 - WHILE
let number = 0;
let len = arr.length;

while (number < len){
    if (number % 2 == 1)
        console.log(number);
    number ++;
}