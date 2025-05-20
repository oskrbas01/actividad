import React from 'react';
import { useParams } from 'react-router-dom';
import CartDropdown from '../components/CartDropdown';
import ButtonPrimary from '../components/ButtonPrimary';
import { books } from '../data/books';
import { useCart } from '../hooks/useCart';
import '../styles/book-detail.css';

const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Busca el libro por id
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <div className="book-detail">
        <CartDropdown />
        <p className="book-detail__notfound">Libro no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="book-detail">
      <CartDropdown /> 
      <div className="book-detail__content">
        <h2 className="book-detail__title">{book.title}</h2>
        <p className="book-detail__author">Autor: {book.author}</p>
        <p className="book-detail__description">{book.description}</p>
        <p className="book-detail__price">Precio: ${book.price}</p>

        <ButtonPrimary onClick={() => addToCart(book)}>
          Añadir al carrito
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default BookDetail;
