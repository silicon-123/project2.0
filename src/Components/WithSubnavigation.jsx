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
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons'
  //import { NavItem } from 'mineral-ui/Navigation';

  
  const  WithSubnavigation=()=> {
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
          borderColor={useColorModeValue('gray.200', 'gray.900')}
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
              textAlign={useBreakpointValue({ base: 'center', lg: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'Blue')}>
              Carter's
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
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
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Box>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Box
        as="a"
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    )
  }
  
  const MobileNav = () => {
    return (
      <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Box
          py={2}
          as="a"
          href={href ?? '#'}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: 'none',
          }}>
          <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Box>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Box as="a" key={child.label} py={2} href={child.href}>
                  {child.label}
                </Box>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    )
  }
  
 
  
  const NAV_ITEMS = [
    {
      label: 'Baby',
      children: [
        {
          label: 'Baby Girl',
          subLabel:'Baby Girl Clothes Shop now',
          href: 'Baby Girl',
        },
        {
          label: 'Baby Boy',
          subLabel:'Baby Boy Clothes Shop now',
          href: 'Baby Boy',
        },
        {
          label: 'Baby Nuetral',
          subLabel:'Baby Nuetral Clothes Shop now',
          href: 'Baby Nuetral',
        },
        {
          label: 'Baby Nursery & Gear',
          subLabel:'Shop All Skip Hop',
          subLabel:'Shop All Nursery & Gear',
          href: 'Baby Nursery & Gear',
        },
        
      ],
    },
    {
      label: 'Toddler',
      children: [
        {
          label: 'Toddler Girl',
          subLabel: 'Shop All Toddler Girl Clothes',
          subLabel:'Just Arrived',
          subLabel:'mix & match',
          subLabel:'Best seller',
          href: 'Toddler Girl',
        },
        {
          label: 'Toddler Boy',
          subLabel: 'Shop All Toddler Boy Clothes',
          subLabel:'swimmerwear',
          subLabel:'bestseller',
          subLabel:'new sets',
          href: 'Toddler Boy',
        },
      ],
  },
  {
      label:'Kid',
      children:  [
          {
              label:'boy',
              subLabel:"Shop all varieties boy's clothes",
              subLabel:'bestseller',
              subLabel:'pajamas',
              subLabel:'new sets',
              subLabel:'mix & match',
              href:'boy',
  
              },
              {
                  label:'girl',
              subLabel:"Shop all varieties girl's clothes",
              subLabel:'bestseller',
              subLabel:'pajamas',
              subLabel:'new sets',
              subLabel:'mix & match',
              href:'girl',
  
              }
          ],
      },
      {
          label:'New & Popular',
          children:[
              {
                  label:'Just Arrived',
                  subLabel:'baby boy',
                  subLabel:'baby girl',
                  subLabel :'Toddler girl',
                  subLabel:'Toddler boy',
                  subLabel :'kid girl',
                  subLabel:'kid boy',
                  href:'#',
              },
              {
                  label:'Halloween',
                  subLabel:'shop All',
                  href:'#',
              },
              {
                  label:'Family Matching Moment',
                  subLabel:'COLLECTIONS:From team spirit to holiday cuteness, we put all of our favorite styles in easy-to-shop collections just for you.',
                  href:'#',
  
              },
              {
                  label:'Little Planet ',
                  href:'#',
              },
              {
                  label:'Fan Shop',
                  subLabel:'Shop all Fan Shop ',
                  subLabel:'Collegiate sport',
                  subLabel:'NLF Sports',
                  href:'#',
              },
          ],
          label:'Shoes',
          children :[
              {
                  label:'baby girl(0-6)',
  
  
              },
              {
                  label:'Baby Boy(0-6)',
              },
              {
                  label:'Toddler Girl(6-12)',
  
  
              },
              {
                  label:'Toddler Boy(6-12)',
  
              },
              {
                  label:'kid boy(13-4y)',
  
              },
              {
                  label:'Kid Girl(13-4y)',
  
              },
  
          ],
          label:'Sale!!!',
          children:[
              {
                  label:'Daily Deals:Ready to Save?!!!!!!'
              },
          ],
      }
  ]


  export default WithSubnavigation;