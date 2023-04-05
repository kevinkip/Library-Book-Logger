const list = document.getElementById('bookList');

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

for (i in bookList){
    list.appendChild(bookList[i])
}

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
    
}

