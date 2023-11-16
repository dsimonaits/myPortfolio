import React from "react"
import { VStack, Box, List } from "@chakra-ui/react"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import BlurContainer from "../../BlurContainer/BlurContainer"
import SectionTag from "../../SectionTag/SectionTag"
import {
  MySkillsStoryblok,
  SkillsListStoryblok,
} from "../../../../component-types-sb"
import { StoryblokComponent } from "gatsby-source-storyblok"

const MySkills = ({ blok }: MySkillsStoryblok) => {
  console.log(blok)
  return (
    <Section id="skills">
      <MainContainer style={{ justifyContent: "center" }}>
        <Box
          position="absolute"
          top="50%"
          right="10%"
          // background="linear-gradient(151deg, rgba(0,98,255,0) 30%, rgba(57,85,242,0.22030237580993517) 21%, rgba(255,41,195,1) 200%)"
          background="linear-gradient(151deg, rgba(0,98,255,0) 30%, rgba(57,85,242,0.22030237580993517) 21%, rgba(255,41,195,1) 200%)"
          width={["400px", "600px", "800px"]}
          height={["400px", "600px", "800px"]}
          borderRadius="50%"
          filter="blur(70px)"
          zIndex="0"
        />
        <VStack>
          <SectionTag name={"My Skills"} />
          <BlurContainer>
            <List spacing="40px">
              {blok.mySkills.map((blok: SkillsListStoryblok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
              ))}
            </List>
          </BlurContainer>
        </VStack>
      </MainContainer>
    </Section>
  )
}

export default MySkills
