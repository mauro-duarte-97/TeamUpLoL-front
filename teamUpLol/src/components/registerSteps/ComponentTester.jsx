/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

const Carrusel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = items.length - 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  return (
    <Flex justify="center" align="center" direction="column">
      <Flex>
        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <Box style={styles.Box} className="square" key={index} m={2} p={4} borderWidth="1px">
            {item}
          </Box>
        ))}
      </Flex>
      <Flex mt={4}>

        <Button onClick={handlePrev} mr={'2.5vh'} disabled={currentIndex === 0}>
          Anterior
        </Button>

        <Button onClick={handleNext} ml={'2.5vh'} disabled={currentIndex === maxIndex}>
          Siguiente
        </Button>

      </Flex>
    </Flex>
  );
};

export default Carrusel;

const styles = {
  Box: {
    width: '10vh', // Usa el ancho completo del contenedor
    height: '10vh', // Altura automática para adaptarse al contenido
    display: 'flex',
    justifyContent: 'center', // Centra los elementos horizontalmente
    alignItems: 'center', // Centra los elementos verticalmente
    flexWrap: 'wrap',
    margin: '2.5vh',
  }
};