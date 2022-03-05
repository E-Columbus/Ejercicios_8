/*
  Iterar el array mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteración con cada 1 de ellos
*/ 

let arr = [10,20,30,40,50,60,70];

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
arr.forEach(function(result) {
  console.log(result);
});