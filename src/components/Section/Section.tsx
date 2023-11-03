import { Box } from "@chakra-ui/react"
import React, { FC } from "react"

interface ISection {
  id?: string
  children: React.ReactNode
  style?: object
}

const Section: FC<ISection> = ({ id, children, style }) => {
  return (
    <Box id={id} as="section" py={["40px", "40px", "40px"]} {...style}>
      {children}
    </Box>
  )
}

export default Section
