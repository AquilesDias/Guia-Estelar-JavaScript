/*
    ### Sistema de gastos familiar


    Crie um objeto que possuirá 2 propriedades, 
    ambas do tipo array:
    * receitas: []
    * despesas: []
    
   Agora, crie uma função que irá calcular o 
   total de receitas e despesas e irá mostrar 
   uma mensagem se a familia está com saldo
   positivo ou negativo, seguido do valor do saldo.
*/

  const contas = {

     receitas :[12.59, 89.65, 100.45],
 
     despesas : [100]
}

function sum (arrays){

    let total= 0;
    for(let value of arrays){
        total += value
    }
    return total
   }

function calcularSaldo(){
    
    let saldoTotal = sum(contas.receitas) - sum(contas.despesas)
   
    let situacao = saldoTotal >=0

    let saldoN = "negativo"

    if(situacao){
        saldoN = "positivo"
    }

    console.log(`Seu saldo é de R$ ${saldoTotal}, e sua situação é de ${saldoN}`)
}

calcularSaldo()

//   console.log(calcularSaldo())
//   console.log(sum(contas.receitas))

   


