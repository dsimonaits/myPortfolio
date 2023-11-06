import React from "react"
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok"
import {
  SkillsListStoryblok,
  SkillStoryblok,
} from "../../../../component-types-sb"
import { List, ListItem, Tag, VStack } from "@chakra-ui/react"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import BlurContainer from "../../BlurContainer/BlurContainer"

const SkillsList = ({ blok }: SkillsListStoryblok) => {
  return (
    <Section>
      <MainContainer style={{ justifyContent: "center" }}>
        <VStack>
          <Tag size="lg" p="20px" mb="-20px">
            My Skills
          </Tag>
          <BlurContainer>
            <List
              {...storyblokEditable(blok)}
              key={blok._uid}
              data-test="grid"
              display="flex"
              flexWrap="wrap"
              // flexDir={["column", "row", "row"]}
            >
              {blok.list.map((blok: SkillStoryblok) => (
                <ListItem key={blok._uid} flex="1">
                  <StoryblokComponent blok={blok} />
                </ListItem>
              ))}
            </List>
          </BlurContainer>
        </VStack>
      </MainContainer>
    </Section>
  )
}

export default SkillsList
