import React from "react"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import {
  Box,
  Stack,
  StackDivider,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react"

const Projects = () => {
  return (
    <Section id="projects">
      <MainContainer>
        <Heading as="h3" size="lg" mb="20px" textAlign="center">
          My projects
        </Heading>
        <Stack
          direction={["column", "column", "row"]}
          gap={["20px", "40px", "40px"]}
        >
          <Box flex="1" justifyContent="center">
            <Image
              mx="auto"
              src=""
              fallbackSrc="https://via.placeholder.com/150"
              alt="Deniss Simonaits"
            />
          </Box>
          <Box flex="1">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              amet quisquam, quidem quos soluta perferendis molestias recusandae
              cumque quaerat assumenda sapiente eum veritatis illo ipsa
              distinctio. Consectetur, dicta adipisci.
            </Text>
          </Box>
        </Stack>
      </MainContainer>
    </Section>
  )
}

export default Projects
