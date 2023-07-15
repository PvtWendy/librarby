import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
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
        <InputGroup color="blackAlpha.600" mt="5vw" w={{ base: "80vw", md: "40vw" }}>
          <InputLeftElement>
            <Search2Icon></Search2Icon>
          </InputLeftElement>
          <Input
            _focus={{
              bgColor: "gray.100",
            }}
            textAlign="center"
            variant="filled"
            placeholder="Search for your favorite book"
          ></Input>
        </InputGroup>
      </Flex>
    </Box>
  );
}
