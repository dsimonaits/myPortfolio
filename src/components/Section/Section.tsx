import { Box, Divider } from "@chakra-ui/react"
import React, { FC } from "react"

interface ISection {
  id?: string
  children: React.ReactNode
  style?: object
}

const Section: FC<ISection> = ({ id, children, style }) => {
  return (
    <Box id={id} as="section" py={["10px", "20px", "20px"]} {...style}>
      {children}
      <Divider mt="15px" />
    </Box>
  )
}

export default Section
