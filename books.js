const dialog = document.querySelector("dialog ")
const openMdal = document.querySelector(".open-modal")
const closeModal = document.querySelector(".book-submit");
const cancelar = document.querySelector(".cancelar")

const ul = document.querySelector(".book-list")
const myLibrary = [{
    title: "Girls of storm and shandows",
    author: "Natasha Ngan",
    pages: 416,
    score: 8.5,
    read: "Read",
}]

function Book(title, author, pages, score, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.score = score;
    this.read = read;
    this.index = index
}

function addBookToLibrary() {
    event.preventDefault()
    let title = document.querySelector("#title");
    let author = document.querySelector("#author")
    let pages = document.querySelector("#pages")
    let score = document.querySelector("#score")
    let read = document.querySelector("#read-status");

    const book = new Book(title.value, author.value, pages.value, score.value, read.value, myLibrary.length)
    myLibrary.push(book)

    title.value = '';
    author.value = '';
    pages.value = '';
    score.value = '';
}

function createBookCard() {

    ul.innerText = ''
    myLibrary.forEach((book, index) => {
        
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.classList.add("book-container")
        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("btn-container")

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
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn")
        deleteBtn.setAttribute('data-index', `${index}`)
        deleteBtn.textContent = "Delete"

        isRead.setAttribute('data-index', `${index}`)
        isRead.addEventListener('click', () => {
            if (isRead.textContent == 'Read') {
                isRead.textContent = "Not read"
                isRead.style.backgroundColor = " #ea4242"
            } else if (isRead.textContent == 'Not read') {
                isRead.textContent = 'Reading'
                isRead.style.backgroundColor = " #efe96e"
            } else {
                isRead.textContent = 'Read'
                isRead.style.backgroundColor = "#228b22"
            }

        })

        li.dataset.index = index

        div.appendChild(bookIcon)
        div.appendChild(h3)
        div.appendChild(pAutor)
        div.appendChild(pPages)
        div.appendChild(scoreSpan)
        
        buttonContainer.appendChild(isRead)
        buttonContainer.appendChild(deleteBtn)
        div.appendChild(buttonContainer)
        li.appendChild(div)
        ul.appendChild(li)


        deleteBtn.addEventListener("click", deleteBook)

    })
}

function deleteBook(e) {
    const currentBook = e.currentTarget
    const index = currentBook.dataset.index

    myLibrary.splice(index, 1)
    createBookCard()
}

openMdal.onclick = function () {
    dialog.showModal()
}

closeModal.onclick = function () {
    addBookToLibrary()
    createBookCard()
    dialog.close()
}

cancelar.onclick = function () {
    dialog.close()
}
createBookCard()