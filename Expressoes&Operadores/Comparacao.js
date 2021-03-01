let one = 1;
let two = 2;

//  == igual
console.log("== igual")
console.log(one == 1)//true  
console.log(one == "1")//true  

//  != diferente
console.log("!= diferente")
console.log(one != two)//true
console.log(one != 1)//false
console.log(one != "1")//false

//  === estritamente igual
console.log("=== estritamente igual")
console.log(one === 1)//true
console.log(one === "1")//false

// !== estritamente diferente
console.log("!== estritamente diferente")
console.log(two === "2") //false 
console.log(two === 2)//true

//  > Maior
console.log("> Maior")
console.log(one > two)//false

//  >= Maior ou igual
console.log(">= Maior ou igual")
console.log(one >= two)//false

//  < Menor
console.log("< Menor")
console.log(one < two)//true

//  <= Menor ou igual
console.log("<= Menor ou igual")
console.log(one <= two)//true

