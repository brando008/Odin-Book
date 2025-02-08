const myLibrary = [];

function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.read = false;
}

Book.prototype.hasRead = function () {
  if (this.read == true) {
    this.read = false;
  } else if (this.read == false) {
    this.read = true;
  }
};

function addBookToLibrary(title, author, pages, year) {
  let book = new Book(title, author, pages, year);
  myLibrary.push(book);
}

addBookToLibrary("Narnia", "C.S. Lewis", 232, 1996);
addBookToLibrary("Lord of The Rings", "JRR Tok", 312, 1995);
addBookToLibrary("Hobbit", "JRR Tok", 160, 2000);

console.log(myLibrary);

function displayBooks() {
  const container = document.querySelector(".container");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  myLibrary.forEach((book, index) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("book-container");

    let title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;

    let author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    let pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    let year = document.createElement("p");
    year.textContent = `Year: ${book.year}`;

    let read = document.createElement("p");
    read.textContent = `Read: ${book.read}`;

    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(year);
    newDiv.appendChild(read);

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.textContent = "Delete";

    newDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      deleteBtn.style.color = "red";
      myLibrary.splice(index, 1);
      displayBooks();
    });

    const readBtn = document.createElement("button");
    readBtn.id = "readBtn";
    readBtn.textContent = "Read";

    newDiv.appendChild(readBtn);

    readBtn.addEventListener("click", () => {
      myLibrary[index].hasRead();
      displayBooks();
    });

    container.appendChild(newDiv);
  });
}

//Submit Button
const dialog = document.getElementById("myDialog");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const form = document.querySelector("form");

openBtn.addEventListener("click", () => {
  dialog.showModal(); // Opens the dialog as a modal
});

document.getElementById("myDialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    event.target.close(); // Close when clicking outside
  }
});

closeBtn.addEventListener("click", () => {
  dialog.close(); // Closes the dialog
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let year = document.getElementById("year").value;

  addBookToLibrary(title, author, pages, year);
  displayBooks();

  form.reset();
});
