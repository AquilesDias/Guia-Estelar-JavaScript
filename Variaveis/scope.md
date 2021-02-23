# Scope

 * Escopo determina a visibilidade de alguma variável no JS.

 # Block statement 
 ```
 {  // abre o bloco.

      // Estamos dentro do bloco, e podemos colocar
      // qualquer código.

 } // fecha o bloco.
 ```

 O bloco, também criará um novo escopo. Chamamos de 
 `block-scoped` . 


 ## var 
 ``` js
 //var é global e local, poderá funcionar fora de um escopo de bloco
 //hoisting : elevação
 console.log('existe x antes do bloco?', x) // TELA: undefined

 {
     var x=0;
 }

 console.log('existe x depois do bloco?', x) // TELA: 0
```

## let e const
```js
// const e let são locais e só funcionam no escopo onde foram
// criadas.

{
    let y = 0;
    console.log(y); // TELA: 0
}

console.log('existe y depois do bloco?', y)// TELA: y is not defined

// Utilizando const
const j = "joao";
{
    const j = "lucas"; 
}
console.log(j) // TELA: joao
```
