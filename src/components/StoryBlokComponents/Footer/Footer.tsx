import * as React from "react"
import { StoryblokComponent } from "gatsby-source-storyblok"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import { FooterStoryblok } from "../../../../component-types-sb"
import BlurContainer from "../../BlurContainer/BlurContainer"
import { Tag } from "@chakra-ui/tag"

const Footer = ({ blok }: FooterStoryblok) => {
  return (
    <>
      <Section style={{ p: ["0px", "0px", "0px"] }}>
        <MainContainer style={{ display: "flex", flexDirection: "column" }}>
          <Tag size="lg" p="20px" mb="-20px" mx="auto">
            Contact Me
          </Tag>
          <BlurContainer>
            {blok.children.map((blok: FooterStoryblok) => (
              <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
          </BlurContainer>
        </MainContainer>
      </Section>
    </>
  )
}

export default Footer
