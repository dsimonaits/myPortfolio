import React from "react"
import MainContainer from "../../Container/Container"
import { Box, Image, Text, Stack, Heading } from "@chakra-ui/react"
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
          <Box
            flex="1"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              mx="auto"
              src={blok.myImage.filename}
              fallbackSrc="https://via.placeholder.com/150"
              alt="Deniss Simonaits"
              borderRadius="full"
              boxSize={["100px", "150px", "250px"]}
            />
            <Heading as="h3" size="md" mt="10px">
              {blok.title}
            </Heading>
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
