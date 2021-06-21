document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks(){
  return fetch("https://anapioficeandfire.com/api/books")
   .then(resp=> resp.json())
   .then(resp=> renderBooks(resp))

  
}
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

