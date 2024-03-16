/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = () => {
    // Esta función manejaría el éxito del inicio de sesión, por ejemplo,
    // redirigiendo al usuario a otra página o mostrando un mensaje de éxito.
    console.log("Inicio de sesión exitoso");
  };

  return (
    <>
    <div className="container">
    <div className="image-container" >
      <img src='./AureWP4K.jpeg' alt="Portada Aure" className="image"/>
    </div>

    <div className='my-form'>
        <LoginForm onLogin={handleLogin} />
    </div>

    </div>

    <footer>
        <Footer />
    </footer>
    </>);
};

export default LoginPage;
