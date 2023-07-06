
import HomeFirstSection from "./components/common/HomeFirstSection"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <HomeFirstSection/>
  </ChakraProvider>
)
