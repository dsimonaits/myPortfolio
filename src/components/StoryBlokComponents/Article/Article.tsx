import React from "react"
import { render } from "storyblok-rich-text-react-renderer"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import { Box, Heading, Image, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { ArticleStoryblok } from "../../../../component-types-sb"

const Article = ({ blok }: ArticleStoryblok) => {
  const richText = blok.content

  return (
    <Section>
      <MainContainer>
        <Heading as="h1" mb="10px" color="secondary.600">
          {blok.title}
        </Heading>
        <Image
          alt={blok.image.alt}
          src={blok.image.filename}
          maxW={["300px", "600px", "800px"]}
          mb="10px"
        />
        <Box>
          <Link
            href={`${blok.link.url}`}
            mb="10px"
            display="block"
            color="secondary.400"
            isExternal
          >
            Open Demo page <ExternalLinkIcon mx="2px" />
          </Link>
          <Box lineHeight="150%">{render(richText)}</Box>
        </Box>
      </MainContainer>
    </Section>
  )
}
export default Article
