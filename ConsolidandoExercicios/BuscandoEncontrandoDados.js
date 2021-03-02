/*
     Buscando e encontrando dados em arrays.

     Baseado no Array de livros por 
     Categoria abaixo, faça os seguintes desafios.

     
     * Contar o número de categorias e o 
       número de livros em cada categoria.
     * Contar o número de autores.
     * Mostrar livros do autor Augusto Cury.
     * Transformar a função acima em uma função 
       que irá receber o nome do autor e devolver 
       os livros desse autor.

*/

const booksByCategory = [

    {
        category: "Aventure",
        books: [
            {
               title: "Os segredos da mente milionaria",
               author: "T. Harv Eker"
            },
            {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason"
            },
            {
               title: "Pai rico, pai pobre",
               author: "Robert T"
            },
        ],
    },
    
    {
       category: "Inteligência Emocional",
       books: [
           {
               title: "Você é insubstituível",
               author: "Augusto Cury",
           },
           {
               title: "Ansiedade - Como enfrentar o mal do século",
               author: "Augusto Cury",
           },
           {
               title: "Os 7 hábitos das pessoas altamente eficazes",
               author: "Sthepen R. Covey"
           },
       ],
    },
];

// Contar o número de categorias e o número de livros em cada categoria.
const totalCategorias = booksByCategory.length;

console.log(`Número de categorias : ${totalCategorias}`);

 for(let category of booksByCategory){
     console.log(`Total de livros da categoria ${category.category}: ${category.books.length}`)    
 }

// Contar o número de autores.
function countAuthors(){
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
     console.log(`Número de autores: ${authors.length}`)
}
countAuthors();

// Mostrar livros do autor Augusto Cury.
function booksAugusto(){
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }
     console.log(`Livros do Augusto: ${books.length}, que são: ${books.join(", ")}`)
}
booksAugusto();

// Transformar a função acima em uma função 
//        que irá receber o nome do autor e devolver 
//        os livros desse autor

function booksAuthor(author){
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
     console.log(`Livros do Autor: ${books.length}, que são: ${books.join(", ")}`)
}
booksAuthor('Sthepen R. Covey');