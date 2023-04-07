const list = document.getElementById('bookList');
const btn = document.querySelector(".newBook");
const span = document.querySelector(".close");
const form = document.querySelector(".addForm");

btn.addEventListener("click", () => {
   form.style.display = "block"; 
})

span.addEventListener("click", () => {
    form.style.display = "none";
})

window.addEventListener("click", (e)=> {
    if(e.target == form){ /* if user clicks anywhere outside of form, close it*/
        form.style.display = "none"
    }
})

document.querySelector(".submit").addEventListener("click", (event)=> {
    event.preventDefault()
  });

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

const library = new Library();

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return ('The ' + this.title + ' by ' + this.author + ', ' + this.pages + ' pages, not read yet');
    }
}

function addBookToLibrary(){
    for (i in bookList){
    list.appendChild(bookList[i])
}
}

// Local Storage
//Thank you MDN window.localStorage docs 

const localStorage = () =>{
    localStorage.setItem('library', JSON.stringify(library.books));
}