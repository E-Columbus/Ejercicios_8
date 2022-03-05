/*
  Agregar al final del array "arr" los números de los items 
  del array "data"

  1 hacerlo de 2 formas 1 mediante un loop de tú gusto sea: for, while
  2 emplear el spread operator

  [10,20,30,40,50,60,70,80,90,100];

  NOTA: https://anamartinezaguilar.medium.com/spread-operator-1e6667da2830
*/ 


let arr = [10,20,30,40,50,60,70];

let data = [80, 90, 100];

// FORMA 1 - ciclo con push
for (var arrPos = 0 ; arrPos <= 9 ; arrPos++){
  arr.push(data[0], data[1], data[2])
  console.log (arr[arrPos])
}

// FORMA 2 - ciclo con operador spread
for (var arrdataPos = 0 ; arrdataPos <= 9 ; arrdataPos++){
  const arrdata = [...arr, ...data]
    console.log (arrdata[arrdataPos])
  }
  
