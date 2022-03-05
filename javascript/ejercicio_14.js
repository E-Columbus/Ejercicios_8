/*
  pasar este objeto user a clase y agregar una funcion llamada 
  show(), en donde retorne el nombre del user
*/

let user = {
   name:"max",
   email:"max@max.com",
   alias:"m5x"
};


class User {
  constructor (name ,email, alias){
    this.name = name;
    this.email = email;
    this.alias = alias;
  }
  show() {
    return "max"
  }
}

const Perfil = new User ("max" , "max@max.com", "m5x" )

console.log (Perfil)
console.log (Perfil.show())