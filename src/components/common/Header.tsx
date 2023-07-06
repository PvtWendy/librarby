import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import { HamburgerIcon } from "@chakra-ui/icons";
import * as React from "react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <Flex
      pos="sticky"
      top={0}
      bg="goldenrod"
      w="full"
      justify="space-between"
      align="center"
    >
      <Button
        objectFit="cover"
        variant="link"
        w={{ base: "100px", sm: "125px", md: "150px", lg: "175px" }}
        ml="1.5vw"
      >
        <Image src="/Librarby.png"></Image>
      </Button>
      <Box mr="2vw" display={{ base: "none", md: "flex" }}>
        <Button color="black" fontSize="xl" variant="link" px="10" py="6">
          Home
        </Button>
        <Button color="black" fontSize="xl" variant="link" px="10" py="6">
          Catalogue
        </Button>
        <Button color="black" fontSize="xl" variant="link" px="10" py="6">
          About
        </Button>
      </Box>

      <Button
        ref={btnRef}
        onClick={onOpen}
        aspectRatio={1}
        mr="4vw"
        display={{ base: "flex", md: "none" }}
      >
        <HamburgerIcon boxSize={6} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerCloseButton height={10} width={10} />
          <DrawerBody bg="goldenrod">
            <Box display="flex" flexDirection="column" my="16vw">
              <Button color="black" fontSize="xl" variant="link" py="8">
                Home
              </Button>
              <Button color="black" fontSize="xl" variant="link" py="8">
                Catalogue
              </Button>
              <Button color="black" fontSize="xl" variant="link" py="8">
                About
              </Button>
            </Box>
          </DrawerBody>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
