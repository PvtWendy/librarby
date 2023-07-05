import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";

export default function Header() {
  return (
    <Flex bg="goldenrod" w="full" justify="space-between" align="center">
      <Button
        variant="link"
        w={{ base: "100px", sm: "125px", md: "150px", lg: "175px" }}
        ml="1.5vw"
      >
        <Image src="/Librarby.png"></Image>
      </Button>
      <Box mr="2vw" >
        <Button color="black" fontSize="xl" variant="link" px="10" py="10">
          Home
        </Button>
        <Button color="black" fontSize="xl" variant="link" px="10" py="10">
          Catalogue
        </Button>
        <Button color="black" fontSize="xl" variant="link" px="10" py="10">
          About
        </Button>
      </Box>
    </Flex>
  );
}
