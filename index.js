const myLibrary = [];

function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
}

function addBookToLibrary(title, author, pages, year) {
  title = new Book(title, author, pages, year);
}
