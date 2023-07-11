class BookCollection {
    getStoredBooks = () => {
      if (!localStorage.getItem('Added books')) {
        localStorage.setItem('Added books', JSON.stringify([]));
      }
      return JSON.parse(localStorage.getItem('Added books'));
    };

    updateStoredBooks = (books) => {
      localStorage.setItem('Added books', JSON.stringify(books));
    };

    addNewBook = (bookTitle, bookAuthor) => {
      const storedBooks = this.getStoredBooks();
      const newBook = {
        title: bookTitle,
        author: bookAuthor,
      };
      storedBooks.push(newBook);
      this.updateStoredBooks(storedBooks);
      this.displayBooks(storedBooks);

      // Clear input fields
      const titleInput = document.querySelector('.title');
      const authorInput = document.querySelector('.author');
      titleInput.value = '';
      authorInput.value = '';
    };

    removeBook = (i) => {
      const storedBooks = this.getStoredBooks();
      storedBooks.splice(i, 1);
      this.updateStoredBooks(storedBooks);
      this.displayBooks();
    };

    createBookListHTML = (books) => {
      let bookListHTML = '';
      for (let i = 0; i < books.length; i += 1) {
        const { title, author } = books[i];
        bookListHTML += `
        <div class= "booklist">
        <p>"${title}" by "${author}"</p>
        <button class="remove-button" data-index="${i}">Remove</button>
        </div>
        `;
      }
      return bookListHTML;
    };

    displayBooks = () => {
      const listOfBooks = document.querySelector('.container');
      const storedBooks = this.getStoredBooks();
      const bookListHTML = this.createBookListHTML(storedBooks);
      listOfBooks.innerHTML = `
        <ul class="book-ul">${bookListHTML}</ul>
      `;

      const removeButtons = document.querySelectorAll('.remove-button');
      removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const index = parseInt(button.dataset.index, 10);
          this.removeBook(index);
        });
      });
    };
}
export default BookCollection;