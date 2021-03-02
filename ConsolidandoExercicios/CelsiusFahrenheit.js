/*
  ### Celsius em Fahrenheit

  Crie uma função que receba uma string
  em celsius ou fahrenheit e faça a
  transformação de uma unidade para outra.

  C = (F-32) * 5/9

  F = C * 9/5 + 32

*/

function transformGrau(grau){
    const existeCelsius = grau.toUpperCase().includes('C');
    const existeFahrenheit = grau.toUpperCase().includes('F')


    //Fluxo de erro
    if(!existeCelsius && !existeFahrenheit){
        throw new Error('Grau não identificado');
    }

    // F -> C
    let updateGrau = Number(grau.toUpperCase().replace("F", ""));
    let formula = (fahreneit) => (fahreneit - 32) * 5/9;
    let degreeSign = 'C';

    // C -> F
    if(existeCelsius){
       updateGrau = Number(grau.toUpperCase().replace("C", ""));
       formula = celsius => celsius * 9/5 +32;
       degreeSign = 'F';
    }

    return formula(updateGrau) + degreeSign;
}

try{
    console.log(transformGrau('10C'))
    console.log(transformGrau('50F'))
    console.log(transformGrau('20Z'))
   // transformGrau('50D')
} catch(error){
    console.log(error.message)
} 