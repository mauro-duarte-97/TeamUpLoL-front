import { Box } from '@chakra-ui/react'
import Step1 from '../components/registerSteps/Step1'
import React from 'react';
import Step2 from '../components/registerSteps/Step2';

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = React.useState(1)
  return (
    <Box>
        {
            currentStep == 1 && <Step1 setCurrentStep={setCurrentStep}/>
        }
        {
            currentStep == 2 && <Step2 setCurrentStep={setCurrentStep}/>
        }
    </Box>
  )
}
