/* eslint-disable no-unused-vars */
import React from 'react';

// Componente Button genérico
const Button = ({ onClick, children, ...props }) => {
  return (
    <button onClick={onClick}
      style={{
      backgroundColor: '#8a2be2', // lila
      color: 'white',
      fontWeight: 'bold',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    }}
    {...props}>
      {children}
    </button>
  );
};

// Componente SubmitButton
const SubmitButton = ({ onClick, children, ...props }) => {
  return (
    <Button type="submit" onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

// Componente RegisterButton
const RegisterButton = ({ onClick, children, ...props }) => {
  return (
    <Button onClick={onClick}
    style={{
      backgroundColor: '#8a2be2', // lila
      color: 'white',
      fontWeight: 'bold',
      padding: '15px 30px', // Tamaño del botón (ajustar según necesidad)
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    }}
    {...props}
    >
      {children}
    </Button>
  );
};

// Componente ContinueButton
const ContinueButton = ({ onClick, children, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export { Button, SubmitButton, RegisterButton, ContinueButton };

