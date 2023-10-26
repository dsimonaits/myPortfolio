import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text } from "@chakra-ui/react"

const Logo = () => {
  return (
    <Link to={"/"}>
      <Box
        _hover={{
          textDecorationColor: "none",
          textDecorationStyle: "none",
        }}
      >
        <Heading fontWeight="bold" fontSize="15">
          D. S. | Portfolio
        </Heading>
      </Box>
    </Link>
  )
}

export default Logo
