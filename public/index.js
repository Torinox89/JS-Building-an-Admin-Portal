async function main() {

    //Making the Request:

    let response = await fetch('http://localhost:3001/listBooks/',{

    });        //http://localhost:3001/listBooks - This is the address of a server-side function we're invoking with our fetch request.
                                                                        //GET; the method of the fetch request
//Handling the Response:
    let books = await response.json()   //We parse the response from JSON to define 'books' (variable type; array -console.log(books)-)
    console.log(books)

    books.forEach(renderBook)               //Once the array of books is retrieved, we use '.forEach' to add 'cards' for each book to the DOM.
}

function renderBook(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                ${book.imageURL ? `
                    <img class="card-img-top" src="${book.imageURL}" />
                `
                : ``}
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Available: ${book.quantity}</h6>
                    <p class="card-text">${book.description}</p>
                </div>
            </div>
        </div>
    `
}

main()