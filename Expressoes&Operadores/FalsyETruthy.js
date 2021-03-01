/*
   FALSY

   Quando um valor é considerado false em contextos onde
   um booleano é obrigatorio (condicionais e loops)

   false
   0
   -0
   ""
   null
   undefined
   NaN
*/

console.log(NaN ?  "verdadeiro" : "false")// Na tela: false

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um
    booleano é obrigatario (condicionais e loops)

    true 
    {}
    []
    1
    3.34
    "0"
    "false"
    -1
    Infinity
    _Infinity
*/

console.log("1"?  "verdadeiro" : "false")// Na tela: verdadeiro