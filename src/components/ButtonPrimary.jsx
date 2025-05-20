import React from 'react';
import '../styles/button-primary.css';

const ButtonPrimary = ({ onClick, children }) => {
  return (
    <button className="button-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
