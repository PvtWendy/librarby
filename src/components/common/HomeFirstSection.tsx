import { Box, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import Header from "./Header";
import { Search2Icon } from "@chakra-ui/icons";
export default function HomeFirstSection() {
  return (
    <Box bgImage="/LibraryImg.jpg" bgSize="cover" textAlign="center">
      <Header />
      <Flex
        w="full"
        flexDirection="column"
        align="center"
        mt="8vw"
        textColor="white"
        pb="8vw"
      >
        <Text fontSize={{ base: "6xl", sm: "8xl" }}>LIBRARBY</Text>
        <Text fontSize="4xl">Where all the best books reside</Text>
        <Input
        mt="5vw"
        variant="filled"
          w="40vw"
          textAlign="center"
          placeholder="Search for your favorite book"
        ></Input>
      </Flex>
    </Box>
  );
}
