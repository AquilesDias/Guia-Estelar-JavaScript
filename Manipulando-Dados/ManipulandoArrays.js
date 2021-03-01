/*
   Manipulando Arrays.
*/

let techs = ["html", "css", "js"];

let index = techs.indexOf('html')
techs.splice(index, 2)
console.log(techs)

//Adicionar um item no fim
techs.push('nodeJs'); // Na tela: ["html", "css", "js", "nodeJs"]


//Adicionar no começo
techs.unshift("sql");


//Remover um item do fim
techs.pop();


//Remover no começo
techs.shift();


//Pegar somente alguns elementos do array
    // console.log(techs.slice(1,2)); //Na tela: "css"



//remover 1 ou mais item em qualquer posição do array
   //techs.splice(1,2)//Na tela: "html"



//encontrar a posição de um elemento no array
   //techs.indexOf('css');

// console.log(techs);

