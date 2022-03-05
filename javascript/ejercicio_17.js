/*
  agregar 2 propiedades al siguiente objeto auto con el uso 
  de prototipos

  1 la propiedad motor:""
  2 la función mostrarOrigen()
*/

let auto = {
    nombre:"",
    modelo:"",
  __proto__:{
    motor:"V8",
      mostrarOrigen(){
        return "Francia";
      }
    }
  };

console.log (auto.__proto__.motor)
console.log (auto.__proto__.mostrarOrigen())