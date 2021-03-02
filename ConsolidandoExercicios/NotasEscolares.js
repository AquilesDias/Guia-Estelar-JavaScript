/*
   ### Transformar notas escolares

   Crie um algoritmo que transforme as notas do sistema
   númerico para sistemas de notas em caracteres tipo A B C.


   * de 90 para cima - A
   * entre 80 - 89   - B
   * entre 70 - 79   - C
   * entre 60 - 69   - D
   * menor que 60    - F
   
*/

   function notasEscolares (nota){

    let a = nota >=90 && nota <=100;
    let b = nota >= 80 && nota <= 89;
    let c = nota >= 70 && nota <= 79
    let d = nota >= 60 && nota <= 69;
    let f = nota <= 60 && nota >= 0
 
    let final;

    if(a){
           final = "A";
         }
           else if(b){
                final = "B";
         }
           else if(c){
                final = "C";
         }
           else if(d){
                final = "D";
         }
           else if (f) {
                final = "F";
        }

    else {
        final = "Invalido"
    }

    return final
 }

console.log(notasEscolares(100))
  