
import HomeFirstSection from "./components/common/HomeFirstSection"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import HomeSecondSection from "./components/common/HomeSecondSection"

export const App = () => (
  <ChakraProvider theme={theme}>
    <HomeFirstSection/>
    <HomeSecondSection></HomeSecondSection>
  </ChakraProvider>
)
