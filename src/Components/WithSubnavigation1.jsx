import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react'
  import {
    HamburgerIcon,
    CloseIcon,
    //ChevronDownIcon,
    //ChevronRightIcon,
  } from '@chakra-ui/icons'
  //import { NavItem } from 'mineral-ui/Navigation';

  
  const  WithSubnavigation1=()=> {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('blue.700', 'blue.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.700', 'Gray')}
              background-color={'red'}>
               
                 little Planet 
                 oshkosh's  
                 Skip*HOP
                 </Text>
           
  
            <Flex display={{ base: 'none', md: 'inline-flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button as={'a'} fontSize={'md'} fontWeight={400} variant={'link'} href={'Orders'}>
              orders
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'black'}
              href={'Favourite'}
              >
              Favourite
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'black'}
              href={'#'}
              >
              <input type="text" placeholder='Searchbar' style={{border:'1px solid black'}}/>
            </Button>
          </Stack>
        </Flex>
       
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    )
  }
  const DesktopNav = () => {
return (
 <Stack direction={'row'} spacing={4}></Stack>
)
  }
  const MobileNav = () => {
    return (
      <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}></Stack>
    )}
  
  
  
 
  
 


  export default WithSubnavigation1;