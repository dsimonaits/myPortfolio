import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react"
import React from "react"

const Project = ({ blok }) => {
  console.log(blok)
  return (
    <>
      {" "}
      <Stack
        direction={["column", "column", "row"]}
        gap={["20px", "40px", "40px"]}
        justify="center"
        align="center"
      >
        <Box flex="1" justifyContent="center">
          <Image
            mx="auto"
            src={blok.Image.filename}
            fallbackSrc="https://via.placeholder.com/150"
            alt={blok.Title}
          />
        </Box>
        <Box flex="1">
          <Heading as="h3" size="md" mb="20px" textAlign="center">
            {blok.Title}
          </Heading>
          <Text>{blok.Teaser}</Text>
        </Box>
      </Stack>
    </>
  )
}

export default Project
