// for ... of

let name = 'Aquiles';
let names = ['Banana','Uva','Manga'];

for(let char of name){
    console.log(char)
    //Na tela:
    // A
    // q
    // u
    // i
    // l
    // e
    // s
}

for(name of names){
    console.log(name)
    //Na tela:
    // Banana
    // Uva
    // Manga
}