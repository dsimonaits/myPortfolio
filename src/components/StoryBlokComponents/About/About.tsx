import React from "react"
import { render } from "storyblok-rich-text-react-renderer"
import MainContainer from "../../Container/Container"
import {
  Box,
  Image,
  Stack,
  Tag,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  VStack,
} from "@chakra-ui/react"
import Section from "../../Section/Section"
import { AboutStoryblok } from "../../../../component-types-sb"
import BlurContainer from "../../BlurContainer/BlurContainer"

const About = ({ blok }: AboutStoryblok) => {
  const aboutMe = blok.aboutMe
  const moreAbout = blok.moreAbout
  return (
    <Section id="about">
      <MainContainer>
        <Stack
          direction={["column", "column", "row"]}
          gap={["20px", "40px", "40px"]}
        >
          <Box
            position="relative"
            flex="1"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              position="absolute"
              top="10%"
              left="10%"
              background="linear-gradient(151deg, rgba(0,98,255,0) 0%, rgba(57,85,242,0.22030237580993517) 21%, rgba(255,41,195,1) 100%)"
              width="400px"
              height="400px"
              borderRadius="50%"
              filter="blur(70px)"
              zIndex="0"
            />
            <Image
              mx="auto"
              src={blok.myImage.filename}
              fallbackSrc="https://via.placeholder.com/150"
              alt="Deniss Simonaits"
              borderRadius="full"
              boxSize={["100px", "150px", "250px"]}
              zIndex="99"
            />
            <Tag size="lg" mt="15px" zIndex="99">
              {blok.title}
            </Tag>
          </Box>
          <VStack flex="1">
            <Tag size="lg" p="20px" mb="-20px">
              About Me
            </Tag>
            <BlurContainer>
              <Box>{render(aboutMe)}</Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Read more...
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>{render(moreAbout)}</AccordionPanel>
                </AccordionItem>
              </Accordion>
            </BlurContainer>
          </VStack>
        </Stack>
      </MainContainer>
    </Section>
  )
}

export default About
