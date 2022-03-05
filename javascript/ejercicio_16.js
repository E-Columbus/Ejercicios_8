/*
  agregar 2 propiedades al siguiente objeto auto con el uso 
  de prototipos

  1 la propiedad motor:""
  2 la propiedad origen:"" 

  NOTA: en el caso de objeto literal usar: __proto__
*/

let auto = {
    nombre:"",
    modelo:"",
    __proto__:{
    motor:"V8",
    origen:"Alemania", 
    }
  };

console.log (auto.__proto__)