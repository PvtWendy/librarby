import { Box, Image, Text } from "@chakra-ui/react";

interface BookInterface {
  bookName: string;
  bookRatings: number;
  bookImg: string;
  bookPrice: number;
}

export default function Book(props: BookInterface) {
  return (
    <>
      <Box
        display="flex"
        flexDir="column"
        w="10vw"
        border="1px solid black"
        borderRadius="md"
        alignItems={"center"}
        margin="2vw"
      >
        <Image
          src={props.bookImg}
          w="80%"
          mt="1vw"
          border={"1px solid black"}
        ></Image>
        <Text mt={"1vw"}>{props.bookName}</Text>
      </Box>
    </>
  );
}
