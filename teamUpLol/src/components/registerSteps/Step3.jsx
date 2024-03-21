/* eslint-disable no-unused-vars */
import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { SubmitButton } from '../Button'
import axios from 'axios';


export default function RegisterStep3({setCurrentStep}) {
    // eslint-disable-next-line no-unused-vars
    const handleCLickGoBack = () => {
        setCurrentStep(1)
    }





    // const handleContinue = async () => {

    //   // Aquí podrías realizar la validación de los datos de inicio de sesión
    //   // Por simplicidad, solo mostraremos los datos en la consola

    //   // Aquí podrías enviar los datos a un backend para autenticar al usuario
    //   // y manejar el resultado de la autenticación

    //   // Limpiamos los campos después de enviar los datos

    // };



    return (// onSubmit={handleLogin}>
      <form> 
          <Button mt={'2vh'} ml={'0'} justifySelf={'flex-start'} onClick={setCurrentStep(2)}>← Step 2</Button>
          <Flex mt='5vh' direction={'column'}>
          
              <Box>
                  
                  <Text color={'black'} fontSize='6xl'>Register</Text>
                  <Text color={'black'} fontSize='4xl'>Step 3 - Modo de juego</Text>
              </Box>
              

              <Flex mb='3vh' direction={'column'} mt='2vh' justifyContent={'space-between'}>

              <FormControl>
                <FormLabel color={'black'}>Modo de juego</FormLabel>
                <Input color={'black'} type='text' required/>
              </FormControl>


              </Flex>
          

          <Box>

              <SubmitButton w='100%'>
              <Text>Continue</Text>
              </SubmitButton>

          </Box>

          </Flex>
    </form>
  )
}