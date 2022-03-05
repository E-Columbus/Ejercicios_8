/*
  Utilizando el ciclo for crear un cubo 

 ******* 
 *******
 *******
 *******

 NOTA evitar esta practica, porque se desea hacer esto de forma 
 inteligente mediante ciclos no de forma manual:

 1_
 console.log(´
 ******* 
 *******
 *******
 *******
 ´)

 2_
 console.log("*******"); 
 console.log("*******"); 
 console.log("*******"); 
 console.log("*******");

*/

var A = "*"

var Cubo = [
// 1 2 3 4 5 6 7
  [A,A,A,A,A,A,A],// 1
  [A,A,A,A,A,A,A],// 2
  [A,A,A,A,A,A,A],// 3
  [A,A,A,A,A,A,A],// 4
]

for(let fila = 0 ; fila < Cubo.length ; fila++){
  let col = 0;

  for(; col < 6; col++){
     if(Cubo[fila][col] == "*"){
        Cubo[fila][col] = A;  
      }
    }
  }

for(let fila = 0 ; fila < Cubo.length ; fila++){
    console.log(Cubo[fila][0], Cubo[fila][1], Cubo[fila][2], Cubo[fila][3], Cubo[fila][4], Cubo[fila][5], Cubo[fila][6]);
} 