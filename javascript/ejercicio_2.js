/*
  Iterar el array de forma opuesta, mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteracción con cada 1 de ellos, de manera reversa
*/ 

let arr = [10,20,30,40,50,60,70];

// MODIFICADOS GENERAL (los revierte todos con la sintaxis del ejercicio anterior, solo con esta linea)

arr.reverse()

// 1 - MAP
arr.map(function(result){
  console.log (result)
})

// 2 - FOR
for (var arrPos = 0 ; arrPos <= 6 ; arrPos++){
  console.log (arr[arrPos])
}

// 3 - WHILE
let i = 0;
let len = arr.length;

while(i < len){
   console.log(arr[i]);
   i++;
}

// 4 - FOREACH
arr.forEach(function(arr) {
  console.log(arr);
});

// MODIFICADOS INDIVIDUALMENTE (comentar los demas al ejecutar c/u)

/*

// 1 - MAP
arr.reverse().map(function(result){
  console.log (result)
})


// 2 - FOR
for (var arrPos = arr.length-1 ; arrPos >= 0; arrPos--){
  console.log (arr[arrPos])
}

// 3 - WHILE
let i = 0;
let len = arr.reverse().length;

while(i < len){
   console.log(arr[i]);
   i++;
}

// 4 - FOREACH
arr.reverse().forEach(function(arr) {
  console.log (arr);
});

*/