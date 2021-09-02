const searchBooks = () => {
    const searchResultBooks = document.getElementById('search-book');
    const searchResultBooksText = searchResultBooks.value;
    searchResultBooks.value = '';

        const url = `https://openlibrary.org/search.json?q=${searchResultBooksText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                totalResults(data)

                displayResultBooks(data.docs)
            });
  
};
const totalResults = results =>{
    const totalResultsDiv = document.getElementById('total-results');
    totalResultsDiv.textContent = '';
    
        const resultFound = document.createElement('p');
        resultFound.classList.add('found-results');
        resultFound.innerText = `Total Results : ${results.numFound}`;
        totalResultsDiv.appendChild(resultFound);
    
    
};

const displayResultBooks = books => {
    const displaybooks = document.getElementById('display-books');
    // console.log(books);
    displaybooks.textContent = '';
    if (books.length != 0) {
        books.forEach(book => {
            // console.log(book);
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('col');
            resultDiv.innerHTML = `

        <div class="card book-detail">
        <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class = "text-dark">${book.title}</h4>
        <small>

        <p class = "text-dark">Writer Name: ${book.author_name}</p>
        <p class = "text-dark">First Published: ${book.first_publish_year}</p>
        <p class = "text-dark">First Publisher: ${book.publisher.slice(0, 50)}</p>
        </small>
        </div>
    </div>
           
        
        `;
            displaybooks.appendChild(resultDiv);
        });
    }else{
     
            // console.log(book);
            const error = document.createElement('h3');
            error.classList.add('error');
            error.innerText =`Result Not Found!!!`;
            displaybooks.appendChild(error);
    

        
    };

};


