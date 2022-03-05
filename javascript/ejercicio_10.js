/*
  Iterar el array de forma opuesta, mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteracción con cada 1 de ellos, de manera reversa
*/ 



let users = [
    {
     id:1000,
     name:"max",
     age:30,
     country:"argentina"   
    },
    {
     id:1001,
     name:"charlie",
     age:20,
     country:"brasil"   
    },
    {
     id:1002,
     name:"maria",
     age:18,
     country:"colombia"   
    },
    {
     id:1004,
     name:"laura",
     age:30,
     country:"ecuador"   
    },
];

users.reverse()

// 1 - MAP
users.map(function(result){
  console.log (result)
})

console.log("=========================================")

// 2 - FOR
for (var arrPos = 0 ; arrPos <= 3 ; arrPos++){
  console.log (users[arrPos])
}

console.log("=========================================")

// 3 - WHILE
let i = 0;
let len = users.length;

while(i < len){
   console.log(users[i]);
   i++;
}

console.log("=========================================")

// 4 - FOREACH
users.forEach(function(users) {
  console.log(users);
});

// MODIFICADOS INDIVIDUALMENTE (comentar los demas al ejecutar c/u)

/*

// 1 - MAP
users.reverse().map(function(result){
  console.log (result)
})

// 2 - FOR
for (var arrPos = users.length-1 ; arrPos >= 0; arrPos--){
  console.log (users[arrPos])
}

// 3 - WHILE
let i = 0;
let len = users.reverse().length;

while(i < len){
   console.log(users[i]);
   i++;
}

// 4 - FOREACH
users.reverse().forEach(function(users) {
  console.log (users);
});

*/