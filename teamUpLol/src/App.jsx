// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <>

      <div className="container">
          <div className="image-container" >
            <img src='./AureWP4K.jpeg' alt="Portada Galio" className="image"/>
          </div>

        <div className='my-form'>
          <LoginForm />
        </div>

      </div>
      
      <footer>
        <Footer />
      </footer>
    </>
    </ChakraProvider>
    
  )
}

export default App

// link Galio : https://image-1.uhdpaper.com/wallpaper/mecha-galio-lol-skin-splash-art-4k-wallpaper-uhdpaper.com-684@1@l.jpg // ABS 'D:/Github/TeamUpLoL-front/teamUpLol/public/mecha-galio.jpg'