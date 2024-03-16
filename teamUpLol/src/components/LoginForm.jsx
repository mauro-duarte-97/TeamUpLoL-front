/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'
import {SubmitButton, RegisterButton} from './Button';
import { Input } from '@chakra-ui/react';

import PropTypes from 'prop-types';

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
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
    onLogin();
  };

  return (
    <form onSubmit={handleLogin}>
        <Card>

        <CardHeader>
            <Heading size='md'>
              <RegisterButton>Registrarse con Email</RegisterButton>
              <br /><br />
              <RegisterButton>Loggearse con cuenta Google</RegisterButton>
            </Heading>
        </CardHeader>

        <CardBody className="my-bodycard">
          <label htmlFor="">Email</label>
            <Input placeholder='User email' value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="">Password</label>
            <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />  
                
        </CardBody>

            <CardFooter>
                <SubmitButton />
            </CardFooter>
            </Card>
      
    </form>
  );
};

export default LoginForm;
