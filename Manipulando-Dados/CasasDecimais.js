/** 
   //Transformar um número quebrado
   com 2 casas decimais e troar ponto
   por vírgula
 */

  let num = 348.4534;
  console.log(num.toFixed(2).replace(".", ",")) // Na tela: 348,45

  let a = 348.4534;
  console.log(Number(a.toFixed(2).replace(".", ","))); // Na tela: NaN (Virgula não faz parte do numero)