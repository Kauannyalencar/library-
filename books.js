const bookList = document.querySelector(".book-list");
const newBookBtn = document.querySelector(".open-modal")
const submitBook = document.querySelector(".book-submit")
const cancelarBtn = document.querySelector(".cancelar")
const bookForm = document.querySelector(".add-book")
const inputs = document.querySelectorAll("input")
let title = document.getElementById("title")
let author = document.getElementById("author")
let pages = document.getElementById("pages")
let score = document.getElementById("score")
let read = document.getElementById("read-status")

// const library = [
//     {
//         title: "Girls of storm and shadows",
//         author: "Natasha Ngan",
//         pages: 416,
//         score: 8.5,
//         read: "Read",
//     },
// ]


function createBookCard(library) {
    bookList.textContent = ''
    bookList.innerHTML +=  library.map((book, index) => `
    <div class="book-container" data-index="${index}">
        <img src='img/book-open-svgrepo-com.svg' class="material-symbols-outlined" alt="book icon">
        <h3 class="title">${book.title}</h3>
        <p>by ${book.author}</p>
        <p>${book.pages}</p>
        <span>${book.score}</span>
      <div class="btn-container">
          <button class="read-book">${book.read}</button>
          <button class="delete-btn" data-index="0">Delete</button>
      </div>
    </div>
    `).join("")
}
function addBookToLibrary() {


    // title.value = ''
    // author.value = ''
    // pages.value = ''
    // score.value = ''
}

function createBookCard() {
    bookList.textContent = ''
    library.forEach((book, index) => {

        const div = document.createElement("div")
        div.classList.add("book-container")
        div.dataset.index = index
        const bookIcon = document.createElement('img');
        bookIcon.src = 'img/book-open-svgrepo-com.svg'
        bookIcon.classList.add('material-symbols-outlined')
        bookIcon.alt = 'bookicon';

        const h3 = document.createElement("h3");
        h3.classList.add("title");
        h3.textContent = book.title;
        const pAutor = document.createElement("p")
        pAutor.textContent = `by ${book.author}`
        const pPages = document.createElement("p")
        pPages.textContent = `${book.pages} pages`
        const scoreSpan = document.createElement("span")
        scoreSpan.textContent = book.score
        let isRead = document.createElement("button")
        isRead.textContent = book.read
        isRead.classList.add("read-book")

        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("btn-container");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn")
        deleteBtn.textContent = "Delete"
        deleteBtn.dataset.index = index

        deleteBtn.addEventListener("click", deleteBook)

        isRead.addEventListener("click", changeReadStatus)

        div.appendChild(bookIcon)
        div.appendChild(h3)
        div.appendChild(pAutor)
        div.appendChild(pPages)
        div.appendChild(scoreSpan)

        buttonContainer.appendChild(isRead)
        buttonContainer.appendChild(deleteBtn)
        div.appendChild(buttonContainer)
        bookList.appendChild(div)
    })

}

function changeReadStatus(e) {
    const toggle = e.currentTarget.textContent
    if (toggle === "Read") {
        e.currentTarget.textContent = "Not Read"
        e.currentTarget.style.backgroundColor = "#9c1c1c"
    } else if (toggle === "Not Read") {
        e.currentTarget.textContent = "Plan to read"
        e.currentTarget.style.backgroundColor = "#71737c"
    } else {
        e.currentTarget.textContent = "Read"
        e.currentTarget.style.backgroundColor = "#097b09"
    }
}

function deleteBook(e) {
    const index = e.target.dataset.index;
    library.splice(index, 1)
    createBookCard()
}

newBookBtn.onclick = function () {
    bookForm.showModal()
}

submitBook.onclick = function () {
    event.preventDefault()
    let book = new Book(title.value, author.value, pages.value, score.value, read.value, library.length);
   
    //    bookForm.close()
}

cancelarBtn.onclick = function () {
    event.preventDefault()

    inputs.forEach(input => { input.value = '' });
    bookForm.close()
}

createBookCard(library)