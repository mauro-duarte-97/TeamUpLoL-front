/* eslint-disable no-unused-vars */
import { Box, Button, Container, Flex, FormControl, Text} from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { SubmitButton } from '../Button'
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';

export default function RegisterStep2({setCurrentStep}) {

    const handleCLickGoBack = () => {
        setCurrentStep(2)
    }

    const MyCarousel = () => {
      const emblaRef = useRef(null); // Crea una referencia al carrusel
    
      useEffect(() => {
        // Inicializa Embla Carousel cuando el componente se monta
        const emblaApi = EmblaCarousel(emblaRef.current);
      }); // Add closing parenthesis here
    };  

    return (
        <form> 
          <Button mt={'2vh'} ml={'0'} justifySelf={'flex-start'} onClick={setCurrentStep(1)}>← Step 1</Button>
          <Flex mt='5vh' direction={'column'} backgroundColor={'pink'}>
          
              <Box>
                  <Text color={'black'} fontSize='6xl'>Register</Text>
                  <Text color={'black'} fontSize='4xl'>Step 2 - Division</Text>
              </Box>
              
              <Flex mb='3vh' direction={'row'} mt='2vh' justifyContent={'center'}>
                <Box ref={emblaRef}>
                  <Box style={{ display: 'flex' }}>
                    {[...Array(9)].map((_, index) => (
                      <Box key={index} w="100%" p={4} borderWidth="1px" borderRadius="md" shadow="md">
                        <Button>Botón {index + 1}</Button>
                      </Box>
                    ))}
                  </Box>
                </Box>
  
                <FormControl>
                  <Box style={styles.container} class="container">
                    <Box style={styles.square} class="square"><Button>I</Button></Box>  
                    <Box style={styles.square} class="square"><Button>II</Button></Box> 
                    <Box style={styles.square} class="square"><Button>III</Button></Box>  
                    <Box style={styles.square} class="square"><Button>IV</Button></Box>
                  </Box>
                </FormControl>
              </Flex>
  
              <Box>
                <SubmitButton w='100%' onClick={setCurrentStep(3)}>
                  <Text>Continue</Text>
                </SubmitButton>
              </Box>
  
          </Flex>
        </form>
    );
}

    const styles = {
      container: {
        width: '200px',
        height: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      square: {
        width: 'calc(50% - 2px)',
        height: 'calc(50% - 2px)',
        backgroundColor: '#333',
        margin: '1px',
      }
    }
