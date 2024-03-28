/* eslint-disable no-unused-vars */
import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { SubmitButton } from '../Button'
// eslint-disable-next-line no-unused-vars
import axios from 'axios';


export default function RegisterStep1({onNextStep}) {
    const handleCLickGoBack = () => {
        // setCurrentStep(1) //LOGIN
    }
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
        <Button mt={'2vh'} ml={'0'} justifySelf={'flex-start'}>← Go Back</Button>
        <Flex mt='5vh' direction={'column'}>
        
            <Box>
                <Text color={'black'} fontSize='6xl'>Register</Text>
                <Text color={'black'} fontSize='4xl'>Step 1 - Basic Information</Text>
            </Box>
            

            <Flex mb='3vh' direction={'column'} mt='2vh' justifyContent={'space-between'}>

            {/* NOMBRE USUARIO */}
            <FormControl>
                <FormLabel color={'black'} >Nombre usuario</FormLabel>
                <Input mb='3vh' placeholder='Nico Garofalo' color={'black'} value={username} onChange={(e) => setUsername(e.target.value)}  type='text' required/>
            </FormControl>

            {/*EMAIL*/}
            <FormControl>
                <FormLabel color={'black'} >Email</FormLabel>
                <Input mb='3vh' placeholder='nico.garofalo@gmail.com' color={'black'} value={email} onChange={(e) => setEmail(e.target.value)}  type='email' required/>
            </FormControl>

            {/*EDAD*/}
            <FormControl>
                <FormLabel color={'black'} >Edad usuario</FormLabel>
                <Input mb='3vh' placeholder='70' color={'black'} value={edad} onChange={(e) => setEdad(e.target.value)}  type='number' required/>
            </FormControl>

            {/* CONTRASEÑA */}
            <FormControl>
                <FormLabel color={'black'} >Contraseña</FormLabel>
                <Input mb='3vh' placeholder='MauroElMasGrande98' color={'black'} value={password} onChange={(e) => setPassword(e.target.value)}  type='password' required/>
            </FormControl>

            {/* REPETIR CONTRASEÑA */}
            <FormControl>
                <FormLabel color={'black'} >Repetir Contraseña</FormLabel>
                <Input mb='3vh' placeholder='MauroElMasGrande98' color={'black'} value={validPassword} onChange={(e) => setValidPassword(e.target.value)}  type='password' required/>
            </FormControl>

            {/* RIOT ID */}
            <FormControl>
                <FormLabel color={'black'}>Riot ID</FormLabel>
                <Input mb='3vh' color={'black'} value={riotID} onChange={(e) => setRiotID(e.target.value)}  type='text' required/>
            </FormControl>

            </Flex>
        

        <Box>

            <SubmitButton w='100%' onClick={onNextStep}>
            <Text>Continue</Text>
            </SubmitButton>

        </Box>

        </Flex>
  </form>
  )
}

