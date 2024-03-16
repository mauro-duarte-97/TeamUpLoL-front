// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import MainRouter from './MainRouter';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Función para iniciar sesión
    const login = () => {
      // Aquí podrías realizar la lógica de autenticación
      // Por simplicidad, asumimos que el inicio de sesión siempre es exitoso
      setIsLoggedIn(true);
    };

    // Función para cerrar sesión
    const logout = () => {
      setIsLoggedIn(false);
    };

    return (
      <>
      <ChakraProvider>
        <div>
        <MainRouter isLoggedIn={isLoggedIn} onLogin={login} onLogout={logout} />
        </div>
      </ChakraProvider>

      <Footer />
      </>
    );
};

export default App;

// link Galio : https://image-1.uhdpaper.com/wallpaper/mecha-galio-lol-skin-splash-art-4k-wallpaper-uhdpaper.com-684@1@l.jpg // ABS 'D:/Github/TeamUpLoL-front/teamUpLol/public/mecha-galio.jpg'