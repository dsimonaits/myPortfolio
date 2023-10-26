import { Container } from "@chakra-ui/react"
import React, { FC } from "react"
import { Divider } from "@chakra-ui/react"

interface ICon {
  children: React.ReactNode
  style?: object
}

const MainContainer: FC<ICon> = ({ children, style }) => {
  return (
    <Container
      position="relative"
      mx="auto"
      px={["40px", "40px", "40px"]}
      maxWidth="1400px"
      {...style}
    >
      {children}
    </Container>
  )
}

export default MainContainer
