import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'
import SubmitButton from './Button';
import { Input } from '@chakra-ui/react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos de inicio de sesión al servidor
  };

  return (
    <form onSubmit={handleSubmit}>
        <Card className="my-card">

        <CardHeader>
            <Heading size='md'>Register</Heading>
        </CardHeader>

        <CardBody className="my-bodycard">
            <Input placeholder='User email' value={username} onChange={(e) => setUsername(e.target.value)} />
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
