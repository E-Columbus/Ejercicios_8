/*
  pasar el objeto auto y el objeto deportivo a clases, donde el 
  objecto deportivo herede del objeto auto
*/

let auto = {
   nombre:"",
   modelo:"",
   origen:"",
};

let deportivo = {
   motor:"" ,
};

class Auto {
   constructor (nombre,modelo,origen){
      this.nombre = nombre;
      this.modelo = modelo;
      this.origen = origen;
   }
}

class Deportivo extends Auto {
   constructor (nombre,modelo,origen,motor){
super (nombre,modelo,origen)
   this.motor = motor;
 }
}

let AutoFinal = new Deportivo ("F50", "Ferrari" , "Italia" , "V12")

console.log ("Nombre:", AutoFinal.nombre)
console.log ("modelo:", AutoFinal.modelo)
console.log ("origen:", AutoFinal.origen)
console.log ("motor:", AutoFinal.motor)