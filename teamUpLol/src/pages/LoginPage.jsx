/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import { Box, Flex, Text} from '@chakra-ui/react';
import axios from 'axios';

function LoginPage () {
  const handleLogin = async (email, password) => {
    try {
      const url = 'http://localhost:3000/api/auth/login';
      const body = { 
        email,
        password
      };

      const response = await axios.post(url, body);
      console.log('el player es: ',response.data); 
      console.log('el status de la response es: ',response.status); 
      if(response.status == 200){
        console.log("Inicio de sesión exitoso");
        window.location.href = '/home';
      }else {
        //Handleo de error
      }
      
    } catch (error) {
      console.error('Pasaron cosas',error)
      //Handleo de error
    }
  };

  return (
  <Flex>
  {/* Columna izquierda con la foto */}
  <Flex flex="1" height="100vh" width="200vh" backgroundImage={'./AureWP4K.jpeg'} backgroundSize={'cover'} backgroundPosition={'cover'} justifyContent={'flex-start'}>
      <Text color='white' fontWeight={'bold'} fontSize='5xl' mt={'2.5vh'} ml={'2.5vh'}>TeamUp LoL</Text>
    {/* <img src="./AureWP4K.jpeg" alt="Foto" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
  </Flex>

  {/* Columna derecha con el div azul */}
  <Box flex="1" bg="white.500" color="white">
    <Box>
      <LoginForm onLogin={handleLogin} />
    </Box>
  </Box>
</Flex>
  );
}

const styles = {
  fullContainer: {
    margin: 0,
    padding: 0, 
    height: '100%', 
    width: '100%'
  }
}

export default LoginPage;
