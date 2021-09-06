// onclick function for button handel

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
    // remove prev value

    searchField.value = '';

    // ApI convert into JSON

    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())

        .then(data => {
            console.log(data)
            const totalResultField = document.getElementById('totalResult');
            // Dynamic data for search
            totalResultField.innerHTML = `  
            <div class="alert alert-success" role="alert">
            <h1>Total Search Result :  ${data.numFound}</h1>
            </div>
            `;

            
    const searchResult = document.getElementById('search-result');

            // unxpected keyword check

            if (data.numFound === 0) {

                // string template for unxpected keyword

                totalResultField.innerHTML = `
                
                
                <div class="alert alert-danger" role="alert">
                <h1>No Books Found
                Try With Valid Name !!</h1>
                </div>
                `
                searchResult.innerHTML=''
                
            }
            else {
                displayResult(data.docs)
               
            }

        })
   
}

        // function for display output

const displayResult = books => {
    
    const searchResult = document.getElementById('search-result');
    
    searchResult.textContent = ' ';

    // loop for induditual book

    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');

    //    string template for dynamic data

        div.innerHTML = `
       <div class="card h-100">
    
       <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top book-img" width="200" height="200" alt="images/books.jpg">
       <div class="card-body">
         <h5 class="card-title">${book.title}</h5>
         <p class="card-text">${book.author_name}</p>
         <p class="card-text">${book.publisher}</p>
         <p class="card-text">${book.publish_year}</p>
       </div>
     </div>
       
       `;
        searchResult.appendChild(div);

    });
}







