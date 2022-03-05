/*
  se tiene la api de  https://rickandmortyapi.com/

  crear una funcion llamada buscarPersonaje() 
  donde retorne los datos de dicho personaje

  utilizar la libreria de axios: https://github.com/axios/axios 

 */

  const axios = require ("axios")

  async function buscarPersonaje (){
      try{
          const r =await axios.get("https://rickandmortyapi.com/api/character/753")
          console.log (r.data)
      }
      catch (error){
          console.log ("error")
      }
  }
  
  buscarPersonaje()