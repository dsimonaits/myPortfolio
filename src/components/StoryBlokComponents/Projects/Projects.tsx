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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok"

const Projects = ({ blok }) => {
  console.log(blok)
  return (
    <Section id="projects">
      <MainContainer>
        <Heading as="h2" size="lg" textAlign="center" mb="20px">
          Projects
        </Heading>
        <UnorderedList
          {...storyblokEditable(blok)}
          key={blok._uid}
          data-test="grid"
          listStyleType="none"
        >
          {blok.projects.map(blok => (
            <ListItem key={blok._uid} className="text-center flex-auto px-6">
              <StoryblokComponent blok={blok} />
            </ListItem>
          ))}
        </UnorderedList>
      </MainContainer>
    </Section>
  )
}

export default Projects
