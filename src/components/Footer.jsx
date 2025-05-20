import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;

