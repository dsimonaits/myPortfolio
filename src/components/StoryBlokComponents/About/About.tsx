import React from "react"
import MainContainer from "../../Container/Container"
import { Box, Image, Text, Stack } from "@chakra-ui/react"
import Section from "../../Section/Section"

const About = ({ blok }) => {
  console.log(blok)
  return (
    <Section id="about">
      <MainContainer>
        <Stack
          direction={["column", "column", "row"]}
          gap={["20px", "40px", "40px"]}
        >
          <Box flex="1" justifyContent="center">
            <Image
              mx="auto"
              src={blok.myImage.filename}
              fallbackSrc="https://via.placeholder.com/150"
              alt="Deniss Simonaits"
              borderRadius="full"
              boxSize={["150px", "250px", "250px"]}
            />
          </Box>
          <Box flex="1">
            <Text>{blok.aboutMe}</Text>
          </Box>
        </Stack>
      </MainContainer>
    </Section>
  )
}

export default About
