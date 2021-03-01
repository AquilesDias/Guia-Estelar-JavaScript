/*
  Separe um texto que contem espaços, em um novo array
  onde ada texto é uma posição do array. Depois disso, 
  transforme o array em um texto e onde eram espaços, 
  coloque o " _ "
*/

let phrase = "No meio da dificuldade encontra a oportunidade."
console.log(phrase.split(" ")); // tela: ["No", "meio", "da", "dificuldade", "encontra", "a", "oportunidade."]

let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore); // tela: No_meio_da_dificuldade_encontra_a_oportunidade.