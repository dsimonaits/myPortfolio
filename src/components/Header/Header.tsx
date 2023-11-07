import * as React from "react"
import { Flex } from "@chakra-ui/react"
import Section from "../Section/Section"
import MainContainer from "../Container/Container"
import Logo from "../UI/Logo/Logo"

const Header = () => {
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
