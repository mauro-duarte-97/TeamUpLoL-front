/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Container, Box, FormLabel, FormControl, Flex, Divider, Text, Checkbox, Alert, AlertIcon, AlertTitle, AlertDescription, Spinner } from '@chakra-ui/react'
import {SubmitButton, RegisterButton} from './Button';
import { Input } from '@chakra-ui/react';

function LoginForm ({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // VALIDAR CAMPOS
    setIsLoading(true);


    // Aquí podrías realizar la validación de los datos de inicio de sesión
    // Por simplicidad, solo mostraremos los datos en la consola
    console.log("Username:", username);
    console.log("Password:", password);
    // Aquí podrías enviar los datos a un backend para autenticar al usuario
    // y manejar el resultado de la autenticación

    // Limpiamos los campos después de enviar los datos
    setUsername('');
    setPassword('');
    // Llamamos a la función de callback proporcionada por el componente padre
    await onLogin(username,password);
    setIsLoading(false);
  };

  return (
    <Container>
      <Flex direction={'column'} h={'10vh'} justifyContent={'space-between'} mt='7vh'>
        <RegisterButton onClick={() => window.location.href = '/register'}>Registrarse con Email</RegisterButton>
        <RegisterButton>Loguearse con cuenta Google</RegisterButton>
      </Flex>
      <Divider orientation='horizontal' my={'2vh'} style={{ borderColor: "black" }} borderWidth={'1px'}/>
      
      <form onSubmit={handleLogin}>
        <Box mt='5vh'>
            <Text color={'black'} fontSize='3xl'>Login</Text>
            <Flex mb='3vh' direction={'column'} mt='2vh' justifyContent={'space-between'} height={'13vh'}>

              <FormControl>
                <FormLabel color={'black'} >Email</FormLabel>
                <Input color={'black'} value={username} onChange={(e) => setUsername(e.target.value)}  type='email' required/>
              </FormControl>
              
              {/* <Alert status='error' py={'1.5vh'} mb='1vh'>
                <AlertIcon />
                <AlertTitle color={'black'}>La contraseña debe tener al menos 8 caracteres y 1 numero con una mayuscula</AlertTitle>
              </Alert> */}

              <FormControl>
                <FormLabel color={'black'}>Contraseña</FormLabel>
                <Input color={'black'} value={password} onChange={(e) => setPassword(e.target.value)}  type='password' required/>  
              </FormControl>

            </Flex>
        </Box>

        <Flex direction={'column'}  justifyContent={'space-between'} height={'7vh'}>
          <Checkbox color={'black'}> Mantener sesión iniciada</Checkbox>
          <SubmitButton w='100%' disabled={isLoading}>
          {
              isLoading ? <Spinner color='red.500' /> : <Text>Login</Text>
          }            
            </SubmitButton>
        </Flex>
      </form>
      
    </Container>
  );
}

export default LoginForm;
