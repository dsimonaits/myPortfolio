import React from "react"
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok"
import {
  SkillsListStoryblok,
  SkillStoryblok,
} from "../../../../component-types-sb"
import { List, ListItem, Tag, VStack, Box } from "@chakra-ui/react"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import BlurContainer from "../../BlurContainer/BlurContainer"

const SkillsList = ({ blok }: SkillsListStoryblok) => {
  return (
    <Section id="skills">
      <MainContainer style={{ justifyContent: "center" }}>
        <Box
          position="absolute"
          top="50%"
          right="10%"
          background="linear-gradient(151deg, rgba(0,98,255,0) 30%, rgba(57,85,242,0.22030237580993517) 21%, rgba(255,41,195,1) 200%)"
          width={["400px", "600px", "800px"]}
          height={["400px", "600px", "800px"]}
          borderRadius="50%"
          filter="blur(70px)"
          zIndex="0"
        />
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
              gap="10px"
              justifyContent="center"
            >
              {blok.list.map((blok: SkillStoryblok) => (
                <ListItem
                  key={blok._uid}
                  flexBasis={[
                    "calc((100% - 2 * 10px) / 4)",
                    "calc((100% - 3 * 10px) / 4)",
                    "calc((100% - 5 * 10px) / 6)",
                  ]}
                >
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
