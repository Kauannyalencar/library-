const bookList = document.querySelector(".book-list");
const newBookBtn = document.querySelector(".open-modal")
const submitBook = document.querySelector(".book-submit")
const cancelarBtn = document.querySelector(".cancelar")
const bookForm = document.querySelector(".add-book")
const inputs = document.querySelectorAll("input")


class Book {
    constructor(title, author, pages, score, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.score = score;
        this.read = read;
    }


}

class Library {
    constructor() {
        this.livros = []
        console.log(this.livros);
    }

    deleteBook(index) {
        this.index = index
        this.livros.splice(index, 1)
        this.displayBook()
    }

    addBook(livro) {
        // Add na livraria
        this.livros.push(livro)
    }

    displayBook() {
        //Mostrar na tela
        bookList.innerHTML = ''
        bookList.innerHTML += this.livros.map((book, index) => `
             <div class="book-container" data-index="${index}">
                 <img src='img/book-open-svgrepo-com.svg' class="material-symbols-outlined" alt="book icon">
                 <h3 class="title">${book.title}</h3>
                 <p>by ${book.author}</p>
                 <p>${book.pages}</p>
                 <span>${book.score}</span>
               <div class="btn-container">
                   <button class="read-book" onclick="readStatus(this)">${book.read}</button>
                   <button class="delete-btn" data-index=${index} onclick="deleteBook(${index})" >Delete</button>
               </div>
             </div>
             `).join("")
    }

    changeReadStatus(toggle) {

    }
}

let book = new Book("Girls of paper and fire", "Natasha ngan", 309, 9.5, "Read", 0)

let biblioteca = new Library()
biblioteca.addBook(book)
biblioteca.displayBook()

const createBook = () => {
    let title = document.getElementById("title")
    let author = document.getElementById("author")
    let pages = document.getElementById("pages")
    let score = document.getElementById("score")
    let read = document.getElementById("read-status")
    let book = new Book(title.value, author.value, pages.value, score.value, read.value);
    biblioteca.addBook(book)
    biblioteca.displayBook()
    inputs.forEach(input => { input.value = '' });

}

const deleteBook = (index) => { biblioteca.deleteBook(index) }

const readStatus = (status) => {
    if (status.innerText === "Read") {
        status.innerText = "Not read"
        status.style.backgroundColor = '#9c1c1c'
    } else {
        status.innerText = "Read"
        status.style.backgroundColor = '#097b09'
    }

}

newBookBtn.onclick = function () {
    bookForm.showModal()
}

submitBook.onclick = function (e) {
    e.preventDefault()
    inputs.forEach(input => {
        if (input.value !== "") {
            bookForm.close()
            createBook()
        }
    })
}

cancelarBtn.onclick = function (e) {
    e.preventDefault()
    inputs.forEach(input => { input.value = '' });
    bookForm.close()
}