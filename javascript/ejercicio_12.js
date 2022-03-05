/*
  Crear un triangulo mediante iteracciones con el ciclo for   

     *
    ***
   *****
  *******  

 NOTA evitar esta practica, porque se desea hacer esto de forma 
 inteligente mediante ciclos no de forma manual:

 1_ 
 console.log(`
     *
    ***
   *****
  *******  
 `);

 2_
  console.log("  *");
  console.log(" ***");
  console.log("*****");
  console.log("*******");  

*/ 


var A = "*"
var B = " "

var Cubo = [
// 1 2 3 4 5 6 7
  [B,B,B,A,B,B,B],// 1
  [B,B,A,A,A,B,B],// 2
  [B,A,A,A,A,A,B],// 3
  [A,A,A,A,A,A,A],// 4
]

for(let fila = 0 ; fila < Cubo.length ; fila++){
  let col = 0;

  for(; col < 6; col++){
     if(Cubo[fila][col] == "*"){
        Cubo[fila][col] = A; 
      }
      if(Cubo[fila][col] == " "){
        Cubo[fila][col] = B;  
      }
    }
  }

for(let fila = 0 ; fila < Cubo.length ; fila++){
    console.log(Cubo[fila][0], Cubo[fila][1], Cubo[fila][2], Cubo[fila][3], Cubo[fila][4], Cubo[fila][5], Cubo[fila][6]);
} 