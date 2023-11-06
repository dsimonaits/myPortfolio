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
          </Flex>
        </MainContainer>
      </Section>
    </>
  )
}

export default Header
