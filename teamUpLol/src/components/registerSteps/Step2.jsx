/* eslint-disable no-unused-vars */
import { Box, Button, Container, Flex, FormControl, Text} from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { SubmitButton } from '../Button'
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import Carrusel from './ComponentTester';

import HierroLogo from '../../../public/HierroLogo2.webp';
import BronceLogo from '../../../public/BronceLogo3.png';
import PlataLogo from '../../../public/PlataLogo2.png';
import OroLogo from '../../../public/OroLogo2.png';
import PlatinoLogo from '../../../public/PlatinoLogo2.webp';
import EsmeraldaLogo from '../../../public/EsmeraldLogo2.webp';
import DiamanteLogo from '../../../public/DiamanteLogo2.png';
import MasterLogo from '../../../public/MasterLogo2.png';
import GrandMasterLogo from '../../../public/GrandMasterLogo1.png';
import ChallengerLogo from '../../../public/ChallengerLogo4.png';




export default function RegisterStep2({onNextStep, onPreviousStep}) {

    const handleCLickGoBack = () => {
      onPreviousStep
    }

    const items = [
      <Button style={styles.btn}  key="hierro"><img style={styles.img} src={HierroLogo} alt="Hierro"/>Hierro</Button>,
      <Button style={styles.btn}  key="bronce"><img style={styles.img} src={BronceLogo} alt="Bronce"/>Bronce</Button>,
      <Button style={styles.btn}  key="plata"><img style={styles.img} src={PlataLogo} alt="Plata"/>Plata</Button>,
      <Button style={styles.btn}  key="oro"><img style={styles.img} src={OroLogo} alt="Oro"/>Oro</Button>,
      <Button style={styles.btn}  key="platino"><img style={styles.img} src={PlatinoLogo} alt="Platino"/>Platino</Button>,
      <Button style={styles.btn}  key="esmeralda"><img style={styles.img} src={EsmeraldaLogo} alt="Esmeralda"/>Esmeralda</Button>,
      <Button style={styles.btn}  key="diamante"><img style={styles.img} src={DiamanteLogo} alt="Diamante"/>Diamante</Button>,
      <Button style={styles.btn}  key="maestro"><img style={styles.img} src={MasterLogo} alt="Master"/>Master</Button>,
      <Button style={styles.btn}  key="gran-maestro"><img style={styles.img} src={GrandMasterLogo} alt="GrandMaster"/>GrandMaster</Button>,
      <Button style={styles.btn}  key="retador"><img style={styles.img} src={ChallengerLogo} alt="Challenger"/>Challenger</Button>,
    ];
   

    return (
        <form> 
          <Button mt={'2vh'} ml={'0'} justifySelf={'flex-start'} onClick={handleCLickGoBack}>← Step 1</Button>
          <Box backgroundColor={'Blue'} h={"100vh"} w={"100vh"} direction={'column'}>
          <Flex mt='5vh' direction={'column'} backgroundColor={'pink'} justifyContent= {'center'} w={'100%'}>
          
            <Flex  direction={'column'}>
                <Text color={'black'} fontSize='6xl'>Register</Text>
                <Text color={'black'} fontSize='4xl'>Step 2 - Division</Text>
            </Flex>
              
            <FormControl direction={'column'}>
              <Carrusel items={items}/>
             
  
            
              <Flex style={styles.container} className="container">
                <Flex style={styles.square} className="square"><Button h={'100%'} w={'100%'}>I</Button></Flex>  
                <Flex style={styles.square} className="square"><Button h={'100%'} w={'100%'}>II</Button></Flex> 
                <Flex style={styles.square} className="square"><Button h={'100%'} w={'100%'}>III</Button></Flex>  
                <Flex style={styles.square} className="square"><Button h={'100%'} w={'100%'}>IV</Button></Flex>
              </Flex>
            </FormControl>
          </Flex>
  
          <Flex justifyContent= {'center'} mt={'15vh'}>
            <SubmitButton w='100%' onClick={onNextStep}>
              <Text>Continue</Text>
            </SubmitButton>
          </Flex>
          </Box>

        </form>
    );
}

const styles = {
  container: {
    width: '100%', // Usa el ancho completo del contenedor
    height: 'auto', // Altura automática para adaptarse al contenido
    display: 'flex',
    justifyContent: 'center', // Centra los elementos horizontalmente
    alignItems: 'center', // Centra los elementos verticalmente
    flexWrap: 'wrap',
    margin: '2.5vh',
  },
  square: {
    width: 'calc(15% - 10px)', // 25% del ancho total del contenedor
    height: '100px', // Altura fija o ajusta según tus necesidades
    backgroundColor: '#333',
    margin: '3vh',
    display: 'flex',
    justifyContent: 'center space-around', // Centra el contenido horizontalmente
    alignItems: 'center', // Centra el contenido verticalmente
  },
  btn: {
    width: '10vh',
    height: '10vh',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  img: {
    width: '20vh',
    height: '100%',
  }
}


