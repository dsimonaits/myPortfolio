import { Container } from "@chakra-ui/react"
import React, { FC } from "react"

interface ICon {
  children: React.ReactNode
  style?: object
  as?: object
}

const MainContainer: FC<ICon> = ({ children, style, as }) => {
  return (
    <Container
      {...as}
      position="relative"
      mx="auto"
      px={["10px", "40px", "40px"]}
      maxWidth="1400px"
      {...style}
    >
      {children}
    </Container>
  )
}

export default MainContainer
