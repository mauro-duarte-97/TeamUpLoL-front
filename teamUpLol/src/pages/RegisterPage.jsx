/* eslint-disable no-unused-vars */
import React from 'react';
import {Flex, Text, Box, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepSeparator, StepTitle, StepDescription, useSteps } from '@chakra-ui/react';
import RegisterStep1 from '../components/registerSteps/Step1';
import RegisterStep2 from '../components/registerSteps/Step2';
import RegisterStep3 from '../components/registerSteps/Step3';
import axios from 'axios';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const steps = [
    { title: 'Basic Information'},
    { title: 'Division'},
    { title: 'Lanes'},
    { title: 'Gamemodes'},
    { title: 'Your Presentation'},
  ]  

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

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
        flex= "1"
        height="100vh"
        width="200vh"
        backgroundImage={'./Register2.jpg'}
        backgroundSize={'cover'}
        backgroundPosition={'cover'}
        justifyContent={'flex-start'}
        flexDirection="column"
      >
        <Box flex={1} backgroundColor={'rgba(0,0,0,0.6)'}>
          <Flex height={'65vh'} flexDirection={'column'} justifyContent={'space-between'}  marginTop='2vh' marginLeft='1.5vh' padding='1.5vh'>
            <Text color='white' fontWeight={'bold'} fontSize='6xl' textAlign={'left'} >
              TeamUp LoL
            </Text>
            <Stepper size='lg' ml='5vh' index={currentStep} orientation='vertical' height='50vh' gap='0'>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink='0'>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))
              }
            </Stepper>
          </Flex>
        </Box>
      </Flex>

      <Flex flex="1" justifyContent={'center'}>
      {/* {
          currentStep == 1 && <RegisterStep1 setCurrentStep={setCurrentStep}/>
      },

      {
          currentStep == 2 && <RegisterStep2 setCurrentStep={setCurrentStep}/>
      },

              {
          currentStep == 3 && <RegisterStep3 setCurrentStep={setCurrentStep}/>
      },

              {
           currentStep == 4 && <RegisterStep4 setCurrentStep={setCurrentStep}/>
      }
              {
           currentStep == 5 && <RegisterStep5 setCurrentStep={setCurrentStep}/>
      } */}

        {currentStep === 1 && <RegisterStep1 onNextStep={handleNextStep} />}
        {currentStep === 2 && <RegisterStep2 onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />}
        {currentStep === 3 && <RegisterStep3 onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />}

      </Flex>
    
    </Flex>
    </>
  );

  // const styles = {
  //   pass
  // }
  
}