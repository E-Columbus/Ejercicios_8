/*
  consumir este endpoint /api/character de la 
  api de https://rickandmortyapi.com/api/character

  con axios y mostrar el recurso(es decir los datos)

   utilizar la libreria de axios: https://github.com/axios/axios 
  */

//---- PARTE 1 (PROMESAS) ------------ 

const axios1 = require ("axios")

function getUsers () {
  axios1.get("https://rickandmortyapi.com/api/character")
        .then(function(RespuestaExitosa){
console.log ("PROMESAS", "\n",RespuestaExitosa)
  }).catch(function(error1){
console.log(error1)
  })
}

getUsers ()

//----- PARTE 2 (ASYNC/AWAIT) ---------------

const axios2 = require ("axios")

  async function getPost (){
      try{
          const r =await axios2.get("https://rickandmortyapi.com/api/character")
          console.log ("ASYNC", "\n", r.data)
      }
      catch (error){
          console.log ("error")
      }
  }
  
getPost()