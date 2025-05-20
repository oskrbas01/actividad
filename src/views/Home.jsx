import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import CartDropdown from '../components/CartDropdown';
import BookList from '../components/BookList'; // nuevo import
import { useCart } from '../hooks/useCart';
import { books } from '../data/books';
import '../styles/home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectBook = (book) => {
    navigate(`/book/${book.id}`);
  };

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  return (
    <div className="home">
      <CartDropdown />
      <div className="home__content">
        <h1 className="home__title">Catálogo de Libros</h1>
        <SearchBar value={search} onChange={setSearch} />
        <BookList
          books={filteredBooks}
          onSelectBook={handleSelectBook}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default Home;
