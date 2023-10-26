import { Box } from "@chakra-ui/react"
import React, { FC } from "react"

interface ISection {
  children: React.ReactNode
  style?: object
}

const Section: FC<ISection> = ({ children, style }) => {
  return (
    <Box as="section" py={["40px", "40px", "40px"]} {...style}>
      {children}
    </Box>
  )
}

export default Section
