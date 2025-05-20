import React from 'react';
import '../styles/button-secondary.css';

const ButtonSecondary = ({ onClick, children }) => {
  return (
    <button className="button-secondary" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
