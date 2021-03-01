//Function scope

let subject;

function createThink(){
    subject = 'study';
    return subject;
}

console.log(subject) // NA TELA: UNDEFINED
console.log(createThink()) // NA TELA: STUDY
console.log(subject) // NA TELA? STUDY