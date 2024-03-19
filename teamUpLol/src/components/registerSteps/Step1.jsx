import { Box, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { SubmitButton } from '../Button'
// eslint-disable-next-line no-unused-vars
import axios from 'axios';


export default function RegisterStep1() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [edad, setEdad] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [validPassword, setValidPassword] = React.useState('');
    const [riotID, setRiotID] = React.useState('');

      // eslint-disable-next-line no-unused-vars
    // const handleContinue = async (basicInfo,
    //   division,
    //   lanes,
    //   gameMode,
    //   presentation) => {

    //   // Aquí podrías realizar la validación de los datos de inicio de sesión
    //   // Por simplicidad, solo mostraremos los datos en la consola
    //   console.log("Username:", username);
    //   console.log("Email:", email);
    //   console.log("Edad:", edad);
    //   console.log("Password:", password);
    //   console.log("ValidPassword:", validPassword)
    //   console.log("RiotID:", riotID);
    //   // Aquí podrías enviar los datos a un backend para autenticar al usuario
    //   // y manejar el resultado de la autenticación

    //   // Limpiamos los campos después de enviar los datos
    //   setUsername('');
    //   setEmail('');
    //   setEdad('');
    //   setPassword('');
    //   setValidPassword('');
    //   setRiotID('');
      
    // };



  return (// onSubmit={handleLogin}>
    <form> 
        <Box mt='5vh'>
            <Text color={'black'} fontSize='3xl'>Go Back</Text>
            
            <Text color={'black'} fontSize='6xl'>Register</Text>
            <Text color={'black'} fontSize='4xl'>Step 1 - Basic Information</Text>
            <Flex mb='3vh' direction={'column'} mt='2vh' justifyContent={'space-between'} height={'13vh'}>

            {/* NOMBRE USUARIO */}
            <FormControl>
                <FormLabel color={'black'} >Nombre usuario</FormLabel>
                <Input placeholder='Nico Garofalo' color={'black'} value={username} onChange={(e) => setUsername(e.target.value)}  type='text' required/><Input/>
            </FormControl>

            {/*EMAIL*/}
            <FormControl>
                <FormLabel color={'black'} >Email</FormLabel>
                <Input placeholder='nico.garofalo@gmail.com' color={'black'} value={email} onChange={(e) => setEmail(e.target.value)}  type='email' required/><Input/>
            </FormControl>

            {/*EDAD*/}
            <FormControl>
                <FormLabel color={'black'} >Edad usuario</FormLabel>
                <Input placeholder='70' color={'black'} value={edad} onChange={(e) => setEdad(e.target.value)}  type='number' required/><Input/>
            </FormControl>

            {/* CONTRASEÑA */}
            <FormControl>
                <FormLabel color={'black'} >Contraseña</FormLabel>
                <Input placeholder='MauroElMasGrande98' color={'black'} value={password} onChange={(e) => setPassword(e.target.value)}  type='password' required/><Input/>
            </FormControl>

            {/* REPETIR CONTRASEÑA */}
            <FormControl>
                <FormLabel color={'black'} >Repetir Contraseña</FormLabel>
                <Input placeholder='MauroElMasGrande98' color={'black'} value={validPassword} onChange={(e) => setValidPassword(e.target.value)}  type='password' required/><Input/>
            </FormControl>

            {/* RIOT ID */}
            <FormControl>
                <FormLabel color={'black'}>Riot ID</FormLabel>
                <Input color={'black'} value={riotID} onChange={(e) => setRiotID(e.target.value)}  type='text' required/>  <Input/>
            </FormControl>

            </Flex>
        </Box>

        <Flex direction={'column'}  justifyContent={'space-between'} height={'7vh'}>

        <SubmitButton w='100%'>
          <Text>Continue</Text>
        </SubmitButton>
        </Flex>
  </form>
  )
}

