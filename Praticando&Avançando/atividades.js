// 1. Declare uma variável de nome weight.

// 3 formas para declarar 

   var weight;
   // let weight
   // const weight

// 2. Que tipo de dados é a variável acima?
       
        console.log(typeof weight);

/*
   3. Declare uma variável e atribua valores para cada um dos dados:
     * name: String
     * age: Number (integer)
     * stars: Number (float)
     * isSubscribed: Boolean
 */
            var name = "Mortadela";
            var age = 5;
            var stars = 6;
            var inSubscribed = true;

 /*
    4. A variável student abaixo é de que tipo de dados?
  
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3

    4.2 Mostre no console a seguinte mensagem:
      <name> de idade <age> pesa <weight> kg.

      Atenção, substitua <name> <age> e <weight> pelos valores
      de cada propriedade do objeto
  */
    
      let student = {}; // Object

         let student = {
             name: 'Hermione',
             age: 26,
             isSubscribed: true,
             weight: 65.32
    };

        console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`);

        console.log(student.name + " de idade " +student.age+ " pesa " +student.weight);


  /*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
   */

            let students = [];

  /*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criando e inserir ele no Array)
  */
            let students = [
                student,
                student1
            ]
            console.log(students)

  /**
    7. Coloque no console o valor da posição zero do Array acima
   */
            console.log(students[0])

     /*
    8. Crie um novo student e coloque na posição 1 d    Array students. 
     */
                 
        let student1 = {
            name: 'Harry',
            age: 29,
            isSubscribed: true,
            weight: 78.95
       };

        let students = [
            student,
            student1
       ];      
           console.log(students[1]);
   /*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

           console.log(a)
           var a = 1

           R: Undefined
    */

        