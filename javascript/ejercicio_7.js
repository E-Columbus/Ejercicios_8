/*
  hacer una función, que busque un número dentro del array
  y retornarlo, en caso contrario, retornar null sino lo encuentra

  ejemplo: let r = buscarNumero(n);
*/

let arr = [10,20,30,40,50,60,70];

let r  = function (){
  if (arr[5] == 60){
    return arr[5]
}else{
  return null
  }
}

console.log (r())