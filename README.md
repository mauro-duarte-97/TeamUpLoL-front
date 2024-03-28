# TeamUpLoL-front
Proyecto de pagina web de lol con Nico

Comandos populares:

Ejecutar proyecto: npm run dev









Codigo posible a usar:

 const MyCarousel = () => {
      const emblaRef = useRef(null); // Crea una referencia al carrusel
    
      useEffect(() => {
        // Inicializa Embla Carousel cuando el componente se monta
        const emblaApi = EmblaCarousel(emblaRef.current);
      }); // Add closing parenthesis here
    };  

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