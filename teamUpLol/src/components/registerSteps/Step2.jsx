import { Box, Button, Text } from '@chakra-ui/react'

export default function Step2({setCurrentStep}) {
    const handleCLickGoBack = () => {
        setCurrentStep(1)
    }
  return (
    <Box>
        <Button onClick={handleCLickGoBack}>volver</Button>
        <Text>Pantalla B</Text>
        <Button>:D</Button>
    </Box>
  )
}
