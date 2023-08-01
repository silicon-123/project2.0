import React from "react";
import Final from "../Components/Carousel/Final";
import Final1 from "../Components/Carousel1/Final1";
import "react-multi-carousel/lib/styles.css";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
  Grid,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { Link as RouterLink } from "react-router-dom";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(0);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
        "https://scontent.fbbi5-1.fna.fbcdn.net/v/t31.18172-8/15129688_10153921018156587_1505068587621837870_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=H1UF2-JFen0AX8g2QxT&_nc_ht=scontent.fbbi5-1.fna&oh=00_AfCIfUEljh0o1gGbCHEd3sny_0DNQs5Wy9kn5pTLSET_0A&oe=64F02730",
        href:"products",
    },
    {
      image:
        "https://freebies2deals.com/wp-content/uploads/2014/01/freebies2deals-carters-clearance.png",
        href:"products",
    },
    {
        image:"https://mms.businesswire.com/media/20230410005405/en/1760073/4/CRI_Airplane_Apology_Image_April_2023_FINAL.jpg?download=1",
    }
  ];
  const data = [
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/7A9oOokf9FRtfIylHTOR0z/d4d608853f0ec1b8fc0e5c413e404805/car_desktop_072523_sec1_dealsbaby.jpg",
      title: "Baby Deals",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/PpUszDjJZ6Cn52b5cfhJP/1ebdc0d21c1e106757659fb32b92ba63/car_desktop_072523_sec2_dealsforhim.jpg",
      title: "Deals For Him",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/4obVKu5RMH8BssJc05ngtH/7bde1601746b833b8b9c0c8bf8e6011f/car_desktop_072523_sec3_dealsforher.jpg",
      title: "Deals For Her",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/4QO99yChcfgWZ3BbEk25FI/bf5d9b24fa2c888181ca36e7d1b36c0a/car_desktop_072723_sec4_shoes.jpg",
      title: "Stock-up for Sale",
    },
    
  ];
  const data2 = [
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/XrRcDzTRzDSrxlNjuFRa6/4df7daa32e8a349d4126ba02ee7a0640/Artboard_____1.png",
      title: "Read now",
    },
  ];
  const data3 = [
    {

      img: "https://images.ctfassets.net/621t91s0mnkp/2wLBA2NR9SvUHAhgUDiLO6/3ea5061ccc8937fab2e83af7bfeec1e2/car_Q2_babygirl_blue.png",
      title: "Baby Girl",
      href:'Baby Girl',
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/75F4rtYujbXXybJbDgHAup/cfa6276f45611fe3c12bb1cf2fd55ba5/car_Q2_todgirl_blue.png",
      title: "Toddler Girl",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/450QCCYp9LiL8L6r3dOKem/9206f04d599fc63a4f5d8dee37967efe/car_Q2_kidgirl_blue.png",
      title: "kid Girl",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/5T7VqOXgf4cx4oTVGIcX57/ea987d93442bd89641775ebf51d943c6/car_Q2_babyboy_blue.png",
      title: "Baby Boy",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/6uJZRQ7gtHrZmkDfFm6nZq/dfbfb39720b75260a358b8b6f31d3ef7/car_Q2_todboy_blue.png",
      title: "Toddler boy",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/2X342vD6rlQBJuG7KOQjAM/fe460558adfdb78aa447c24802d4b5d4/car_Q2_kidboy_blue.png",
      title: "kid boy",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/3rXNIhmfB7YxSUcodxkB8x/c8ce2cdf0a09327d797dfcefe8f58026/car_Q2_familymatching_blue.png",
      title: "Family matching",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/5xrHhP3DB3GEWO3QQVm6Kl/013a36c1f6dffa44ea425e4eb1632642/car_tops_category_072523.jpg",
      title: "Tops",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/6LTkJqVWLxJj4ZZnmZdlm3/760670c0c209ce5a7e64643fc7c92232/car_pants_category_072523.jpg",
      title: "Bottom",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/2aQcpgYmRfZcC4nygRfycM/57b945ffa88f7f7fc9960de40d1cd673/shopourfaves_blue_pjs.png",
      title: "Pajama",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/78vDsIPoctR4bBviG5oyZ3/6c7bcff898a94e3a8df82ff2aa345144/car_shoes_category_072523.jpg",
      title: "Shoes",
    },
    {
      img:"https://images.ctfassets.net/621t91s0mnkp/43TO7zZ6fG9promfUhk2Re/5272a8030ed6813d4cc6d9c5debb061d/shopourfaves_clr.png",
      title:"Clearance",
    },
  ];
  const data4 = [
    {
        label:"Deal for You",
        children:[
            {
                title:"Deal for You",
                img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw5557eb47/productimages/3O961210.jpg?sw=470",
                title: "$8.00",
              },
              {
                img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa397097a/productimages/3K589310.jpg?sw=470",
                title: "$8.00",
              },
              {
                img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwda1cee5c/productimages/3H739410.jpg?sw=470",
                title: "$12.00",
              },
              {
                img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw3adf6ceb/productimages/1N724810.jpg?sw=470",
                title: "$7.89",
              },
              {
                img:"https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwf6af3c2a/productimages/2P496611.jpg?sw=470",
                title:"$4.49",
              },
              {
                img:"https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw0c4b2cd8/productimages/1P042410.jpg?",
                title:"$11.00",
              },
            ],
        },
        ];
  
  

  const data8 = [
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/XaPcZn1V7LrzFBgwp2aHL/6a4d54f8b45282835cee97106ac61bb6/car_desktop_062023_holiday1.jpg",
      name: "Soft & Sustainable",
      title: "Made with your little one and our planet in mind!",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/DwG2ChYZy1kpXQc83NTtD/d2be3137a2fb35123d0ae3011233c62b/car_desktop_071323_sec2_purelysoft.png",
      name: "Purely soft pajamas",
      title:"Shop aour strchy ,snuggly new sleep collection.",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/78yNsW5xgn6dJNZSuosi0z/3ce6c887b4992faae213a98d51776b0a/car_desktop_072523_sec4_halloween.jpg",
      name: "Halloween Shop",
      title:
        "Treat the whole fam to new ,spooky cute styles.",
    },
  ];
  return (
    <>
      <Center>
        <Box
          marginTop={5}
          position={"relative"}
          height={"100%"}
          width={"95%"}
          overflow={""}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt size="40px" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <BiRightArrowAlt size="40px" />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card, index) => (
              <Box
                key={index}
                height={"2xl"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}
              >
                {/* This is the block you need to change, to customize the caption */}
                <Container
                  size="container.lg"
                  height="100%"
                  position="relative"
                >
                    <image 
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px'}}/>
                  <Stack
                    spacing={6}
                    w={"full"}
                    maxW={"sm"}
                    position="absolute"
                    top="50%"
                    transform="translate(0, -50%)"
                  >
                    <Heading fontSize={{ base: "xl", md: "xl", lg: "xl" }}>
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                      {card.text}
                    </Text>
                  </Stack>
                </Container>
              </Box>
            ))}
          </Slider>
        </Box>
      </Center>

      <Grid templateColumns="repeat(4,20%)" ml="5%" gap="20" mt="40px">
        {data.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="90%" />
              </Box>
            </RouterLink>
            <Center>
              <Button
                style={{
                  width: "1000px",
                  backgroundColor: "Blue",
                  mt: "-100px",
                  position: "relative",
                  bottom: "1px",
                  borderRadius: "5%",
                }}
              >
                {item.title}
              </Button>
            </Center>
          </div>
        ))}
      </Grid>

      <Grid ml="5%" mt="40px">
        {data2.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} Border-radius="50%" />
              </Box>
            </RouterLink>
            <Center>
              <Button
                style={{
                  width: "auto",
                  backgroundColor: "white",
                  mt: "-100px",
                  position: "relative",
                  bottom: "70px",
                  borderRadius: "none",
                }}
              >
                {item.title}
              </Button>
            </Center>
          </div>
        ))}
      </Grid>
      <Grid templateColumns="repeat(3,30%)" ml="5%" gap="3" mt="40px" style={{backgroundColor:"gray"}}>
        {data3.map((item, i) => (
          <div key={i} >
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="50%" />
              </Box>
            </RouterLink>
            <Center>
              <Button
                style={{
                  width: "auto",
                  backgroundColor: "blue",
                  mt: "-10px",
                  position: "center",
                  bottom: "1px",
                  borderRadius: "10%",
                  href:'item.title',
                  variant:'outline',
                }}
              >
                {item.title}
              </Button>
            </Center>
          </div>
        ))}
      </Grid>

      <Grid templateColumns="repeat(4,30%)" ml="5%" gap="3" mt="40px">
        {data4.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="95%" />
              </Box>
            </RouterLink>
            <Center>
              <Button
                style={{
                  width: "auto",
                  backgroundColor: "white",
                  mt: "-100px",
                  position: "relative",
                  bottom: "70px",
                  borderRadius: "none",
                }}
              >
                {item.title}
              </Button>
            </Center>
          </div>
        ))}
      </Grid>

    
      <Text style={{ marginLeft: "68px" }}> You May Also Like</Text>
      <hr />
      <Final/>

     

      <Text style={{ marginLeft: "68px", marginTop: "90px", }}> Trending</Text>
      <hr />
      <Final1/>

     

      <Center>
        <Text style={{ marginLeft: "68px", marginTop: "90px" }}> More</Text>
      </Center>
      <hr />

      <Grid
        templateColumns="repeat(3,30%)"
        ml="5%"
        gap="7"
        mt="40px"
        backgroundColor="whitesmoke"
      >
        {data8.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="100%" />
              </Box>
            </RouterLink>
            <Text fontWeight="300" backgroundColor={"blue.200"}>{item.name}</Text>
            <Text fontSize="12" backgroundColor={"blue.200"}>{item.title}</Text>
          </div>
        ))}
      </Grid>

      <Center>
        <Text
          style={{
            marginLeft: "68px",
            marginTop: "90px",
            marginBottom: "50px",
          }}
        >
          {" "}
          Exclusions apply.See details
        </Text>
      </Center>
      <hr />

      <Text style={{ marginLeft: "68px", marginTop: "30px" }}> About Us</Text>

      <Text style={{ marginLeft: "68px", marginTop: "30px" }}>
        {" "}
        *EXCLUSIONS AND DISCLAIMERS.
        UP TO 50% OFF: Savings based on MSRP. Select styles. Excludes Select New Arrivals, LITTLE PLANET®, Sneak Peek, Treasure Box, Licensed Styles, SKIP HOP®, Doorbusters, and Clearance. Other exclusions may apply.
        *MSRP is our Manufacturer’s Suggested Retail Price at which we suggest our collections be initially offered. We list an MSRP on our products that we sell ourselves and that sell through our wholesale partners. Our wholesale partners are free to use our MSRP or set a different selling price. We generally introduce our new collections at MSRP on our website. Since MSRP is a suggested price, actual sales may or may not have been made at MSRP in any certain area or in all areas. Prices may vary by channel or location.
        Many of our collections have a DOB (Date of Birth) on the price tag or on their website product page. This is the date that this item or a similar item was originally offered for sale at the MSRP.....
        
        
      </Text>
    </>
  );
}