import { Box, Button, Text } from '@chakra-ui/react'

export default function Step1({ setCurrentStep }) {
  return (
    <Box>
        <Text>Pantalla A</Text>
        <Button onClick={() => setCurrentStep(2)}>Continue</Button>
    </Box>
  )
}
