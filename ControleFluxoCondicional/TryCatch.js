//

function sayName(name = ''){

    if(name === ''){
        throw 'nome é obrigatorio'
    }
    console.log(name)
}

//try catch
try {
    sayName('')
} catch (e) {
    console.log(e)
}

console.log('após try catch')