import { 
  Box, 
  Center,
  Text,
  Image,
  Flex,
  Avatar,
  Link,
  Button
} from "@chakra-ui/react";

import bgImage from "./assets/images/pattern-background-desktop.svg";
import bgImageMobile from "./assets/images/pattern-background-mobile.svg";
import heroImage from "./assets/images/illustration-hero.svg";
import musicIcon from "./assets/images/icon-music.svg";

function App() {
  return (
    <Center
      h="100vh"
      padding={"20px"}
      bgImage={[bgImageMobile, bgImageMobile, bgImage]}
      bgPosition={"top"}
      bgRepeat={"no-repeat"}
      bgSize={"contain"}
    >
      <Box
        width="26rem"
        m={[0.5, 1, 5]}
        borderRadius={"15px"}
        bg="primary.paleBlue"
        bg="neutral.veryPaleBlue"
      >
        <Image
          src={heroImage}
          alt="Illustration Hero"
          borderRadius={"15px 15px 0 0"}
        />

        <Flex
          direction={"column"}
          align={"center"}
          p={["5", "6", "8"]}
        >
          <Text
            as="h3"
            color="neutral.darkBlue"
            fontWeight={"900"}
            fontSize={[18, 18, 26]}
            marginBottom={3}
          >
            Order Summary
          </Text>

          <Text
            as="p"
            textAlign={"center"}
            color="neutral.desaturatedBlue"
            marginBottom={7}
            fontSize={["sm", "sm", "md"]}
            maxW={300}
          >
            You can now listen to millions of songs, audiobooks, and podcasts on any 
    device anywhere you like!
          </Text>
          
          <Flex
            bg="primary.paleBlueOpaco"
            w="100%"
            padding={[4, 4, 5]}
            borderRadius={15}
            align="center"
          >
            <Avatar 
              src={musicIcon} 
              bg="primary.paleBlue"
              marginRight={[3, 3, 4]}
            />
            <Box
              align="center"
            >
              <Text fontSize={["sm", "sm", "md"]} color="neutral.darkBlue" fontWeight={"900"}>Annual Plan</Text>
              <Text fontSize={["sm", "sm", "md"]} color="neutral.desaturatedBlue">$59.99/year</Text>
            </Box>
            <Link
              fontSize={["sm", "sm", "md"]}
              marginLeft="auto"
              color="primary.brightBlue"
              fontWeight={"bold"}
              textDecoration={"underline"}
              _hover={{
                textDecoration: "none",
                filter: "opacity(75%)"
              }}
            >
              Change
            </Link>
          </Flex>

          <Button
            w="100%"
            marginTop={8}
            fontSize={["sm", "sm", "md"]}
            bg="primary.brightBlue"
            color="neutral.veryPaleBlue"
            padding={[6, 6, 7]}
            borderRadius={12}
            _hover={{
              bg: "primary.brightBlue",
              filter: "opacity(75%)"
            }}
          >
            Proceed to Payment
          </Button>

          <Link
            textAlign={"center"}
            fontSize={["sm", "sm", "md"]}
            marginTop={[5, 5, 10]}
            bg="transparent"
            color="neutral.desaturatedBlue"
            fontWeight={"bold"}
            _hover={{
              bg: "transparent",
              filter: "brightness(0.5)"
            }}
          >
            Cancel Order
          </Link>
        </Flex>
      </Box>
    </Center>
  );
}

export default App;
