function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return ('The ' + this.title + ' by ' + this.author + ', ' + this.pages + ' pages, not read yet');
    }
}