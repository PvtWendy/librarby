
import * as React from "react"
import Header from "./components/common/Header"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
  </ChakraProvider>
)
