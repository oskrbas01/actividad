import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import '../styles/book-card.css';

const BookCard = ({ book, onClick, onAddToCart }) => {
  return (
    <div className="book-card">
      <div className="book-card__info" onClick={() => onClick(book)}>
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">Autor: {book.author}</p>
        <p className="book-card__price">${book.price}</p>
      </div>
      <ButtonPrimary onClick={() => onAddToCart(book)}>
        Agregar al carrito
      </ButtonPrimary>
    </div>
  );
};

export default BookCard;

