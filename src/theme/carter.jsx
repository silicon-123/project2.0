import {Box,extendTheme} from "@chakra-ui/react";
const theme = extendTheme({
    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ['100px', '50px'],
        fontWeight: '800',
        lineHeight: '110%',
        letterSpacing: '-2%',
      },
      h2: {
        fontSize: ['36px', '48px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-1%',
      },
    },
  })
  function Example() {
    return <Box textStyle='h1'>https://1000logos.net/wp-content/uploads/2020/02/carters-babies-and-kids-logo.jpg</Box>
  }
  export  default  Example;