// Create a function called getAvailableBooks that returns an array of all available
// books.
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

const getAvailableBooks=books.filter(function (array) {
    return books.title
})
console.log(getAvailableBooks());

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

const getBooksByAuthor=books.filter(function(Homer){
return books.author.Homer
})
console.log(getBooksByAuthor());

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

const checkoutBook=books.filter(function(theodyssey){
    for (const b of books ) {
       if(b === books){
        console.log("isAvailable");
       } 
       else{
        console.log(false);
       }
    }
})

checkoutBook();

// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

const returnBook=books.filter(function(thegreatgatsby){
    for (let i = 0; i < books.length; i++) {
        if (i===books) {
          console.log("isAvailable");  
        }
        else{
            console.log(true);
        }
    }
});
let book="The Great Gatsby"
returnBook()
