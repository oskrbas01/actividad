import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import '../styles/landing.css';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/home'), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing">
      <div className="landing__content">
        <h1 className="landing__title">Bienvenido a Relatos de Papel</h1>
        <p className="landing__text">
          Explora un universo de libros desde cualquier lugar.
        </p>
        <p className="landing__redirect">
          Redireccionando a la página principal en 5 segundos...
        </p>
        <ButtonPrimary onClick={() => navigate('/home')}>
          Ir ahora
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Landing;
