const myLibrary = [];

function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
}

function addBookToLibrary(title, author, pages, year) {
  title = new Book(title, author, pages, year);
  myLibrary.push(title);
}

addBookToLibrary("Narnia", "C.S. Lewis", 232, 1996);
addBookToLibrary("Lord of The Rings", "JRR Tok", 312, 1995);
addBookToLibrary("Hobbit", "JRR Tok", 160, 2000);
console.log(myLibrary);

function displayBooks() {
  const container = document.querySelector(".container");

  myLibrary.forEach((book) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("book-container");

    let title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;

    let author = document.createElement("p");
    author.textContent = `Title: ${book.author}`;

    let pages = document.createElement("p");
    pages.textContent = `Title: ${book.pages}`;

    let year = document.createElement("p");
    year.textContent = `Title: ${book.year}`;

    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(year);

    container.appendChild(newDiv);
  });
}

displayBooks();
