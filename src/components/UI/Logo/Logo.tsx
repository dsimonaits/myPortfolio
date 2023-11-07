import * as React from "react"
import { Link } from "gatsby"
import { Box, Tag } from "@chakra-ui/react"

const Logo = () => {
  return (
    <Link to={"/"}>
      <Box
        _hover={{
          textDecorationColor: "none",
          textDecorationStyle: "none",
        }}
      >
        <Tag fontWeight="bold" size="lg">
          D. S. | Bringing Imagination to Digital Life
        </Tag>
      </Box>
    </Link>
  )
}

export default Logo
