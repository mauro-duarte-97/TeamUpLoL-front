import './App.css'
// import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import MainRouter from './routers/mainrouter';
import { RouterProvider } from 'react-router-dom';

const App = () => {

    return (
      <>
      <ChakraProvider>
        <RouterProvider router={MainRouter} />
      </ChakraProvider>
{/*  <Footer /> */}
      </>
    );
};

export default App;

// link Galio : https://image-1.uhdpaper.com/wallpaper/mecha-galio-lol-skin-splash-art-4k-wallpaper-uhdpaper.com-684@1@l.jpg // ABS 'D:/Github/TeamUpLoL-front/teamUpLol/public/mecha-galio.jpg'