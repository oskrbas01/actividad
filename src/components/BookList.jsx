import React from 'react';
import BookCard from './BookCard';
import '../styles/book-list.css';

const BookList = ({ books, onSelectBook, onAddToCart }) => {
  if (books.length === 0) {
    return <p className="home__empty">No se encontraron libros con ese título.</p>;
  }

  return (
    <div className="home__list">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          onClick={onSelectBook}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default BookList;
