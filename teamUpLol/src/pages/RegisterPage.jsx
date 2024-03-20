import React from 'react';
import {Flex, Text } from '@chakra-ui/react'
import RegisterStep1 from '../components/registerSteps/Step1'
import RegisterStep2 from '../components/registerSteps/Step2';
import axios from 'axios';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = React.useState(1)

  const onRegister = async (basicInfo, division, lanes, gameMode, presentation) => {
  
    try {
    const url = 'http://localhost:3000/api/auth/Register';
    const body = { 
      basicInfo,
      division,
      lanes,
      gameMode,
      presentation
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
}
  return (
    <>
    {/* Columna izquierda con la foto */}

      <Flex>

      <Flex
        flex="1"
        height="100vh"
        width="200vh"
        backgroundImage={'./Register2.jpg'}
        backgroundSize={'cover'}
        backgroundPosition={'cover'}
        justifyContent={'flex-start'}
        flexDirection="column">
        
        <Flex justifyContent={'flex-start'}>
        <Text color='white' fontWeight={'bold'} fontSize='6xl' marginTop='2vh' marginLeft='1.5vh' padding='1.5vh' >
          TeamUp LoL
        </Text>
        </Flex>
        

        <Text color='white' fontWeight={'bold'} fontSize='5xl' marginTop='20vh' marginLeft='2.5vh' padding='2.5vh'>
          Información Básica
        </Text>

        <Text color='white' fontWeight={'bold'} fontSize='5xl' marginTop='2.5vh' marginLeft='2.5vh'>
          División
        </Text>

        <Text color='white' fontWeight={'bold'} fontSize='5xl' marginTop='2.5vh' marginLeft='2.5vh'>
          Líneas
        </Text>

        <Text color='white' fontWeight={'bold'} fontSize='5xl' marginTop='2.5vh' marginLeft='2.5vh'>
          Modo de juego
        </Text>

        <Text color='white' fontWeight={'bold'} fontSize='5xl' marginTop='2.5vh' marginLeft='2.5vh'>
          Tu presentación (opcional)
        </Text>
    </Flex>

        <Flex flex="1" justifyContent={'center'}>
        {
            currentStep == 1 && <RegisterStep1 setCurrentStep={setCurrentStep}/>
        }
        {
            currentStep == 2 && <RegisterStep2 setCurrentStep={setCurrentStep}/>
        }
        </Flex>
    
    </Flex>
    </>
  );

  // const styles = {
  //   pass
  // }
  
}