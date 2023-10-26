import * as React from "react"
import {
  Flex,
  HStack,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Section from "../Section/Section"
import MainContainer from "../Container/Container"
import Logo from "../UI/Logo/Logo"

const Header = () => {
  const Links = [
    { name: "Quiz", path: "/" },
    { name: "How it works", path: "how-it-works" },
    { name: "About", path: "about" },
  ]

  return (
    <>
      <Section style={{ p: ["0px", "0px", "0px"] }}>
        <MainContainer>
          <Flex justifyContent="space-between" alignItems="center">
            <Logo />
            <Hide breakpoint="(max-width: 768px)">
              <HStack spacing="30px">{/* Navigation Links */}</HStack>
            </Hide>
            <Show breakpoint="(max-width: 768px)">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon w="40px" h="40px" />}
                  variant="unstyled"
                />
                <MenuList
                  display="flex"
                  p="20px"
                  flexDirection="column"
                  alignItems="center"
                >
                  {/* NavigationLinks */}
                </MenuList>
              </Menu>
            </Show>
          </Flex>
        </MainContainer>
      </Section>
    </>
  )
}

export default Header
