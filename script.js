const list = document.getElementById('bookList');
const btn = document.querySelector(".newBook");
const span = document.querySelector(".close");
const form = document.querySelector(".addForm");
const inputForm = document.querySelector(".addBookForm");
const submit = document.querySelector(".submit");

let bookList = [
    {
        title: 'How I met your mother',
        author: 'deeznuts',
        pages: 84,
        read: 16
    },
    {
        title: 'The Night Hawks',
        author: 'Elly Griffiths',
        pages: 450,
        read: 4
    }
];

class Book {
    constructor(
        title = '',
        author = '',
        pages = '0',
        read = false
    ){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

class Library {
    constructor(){
        this.books = []        
    }

}

function addBookToLibrary(){
    for (i in list.books){
        newBookCard(i);
    }
}

const newBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('div');
    const btnSection = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    
    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = 'Remove'

    if (book.read){
        readBtn.textContent = 'Read'
        readBtn.classList.add('btn-light-green')
    } else {
        readBtn.textContent = 'Not read'
        readBtn.classList.add('btn-light-red')
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    btnSection.appendChild(readBtn);
    btnSection.appendChild(removeBtn);
    bookCard.appendChild(btnSection)
    list.appendChild(bookCard);
}

const library = new Library();

btn.addEventListener("click", () => {
    form.style.display = "block"; 
 })
 
 span.addEventListener("click", () => {
     form.style.display = "none";
 })
 
 window.addEventListener("click", (e)=> {
     if(e.target == form){ /* if user clicks anywhere outside of form, close it*/
         inputForm.reset()
         form.style.display = "none"
     }
 })
 
 document.querySelector(".submit").addEventListener("click", (event)=> {
     event.preventDefault()
   });



// Local Storage
//Thank you MDN window.localStorage docs 

const localStorage = () =>{
    localStorage.setItem('library', JSON.stringify(library.books));
}