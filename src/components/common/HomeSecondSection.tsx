import { Box, Flex, Text } from "@chakra-ui/react"
import Book from "./Book"

export default function(){
    const KMK12 = {
        bookName: "Kumo desu ga nani ka? - Vol 12",
        bookRatings: 4.12,
        bookImg: "KMK-12.jpg",
        bookPrice: 19.99
    }
    return(
        <>
            <Box textAlign="center">
                <Text fontSize="5xl" mt="2vw">Newest Books</Text>
                    <Book {...KMK12}></Book>
                <Flex></Flex>
            </Box>
        </>
    )
}