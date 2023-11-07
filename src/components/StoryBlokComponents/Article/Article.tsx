import React from "react"
import { render } from "storyblok-rich-text-react-renderer"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import { Box, Heading, Image, Link, Tag } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { ArticleStoryblok } from "../../../../component-types-sb"
import BlurContainer from "../../BlurContainer/BlurContainer"

const Article = ({ blok }: ArticleStoryblok) => {
  const richText = blok.content

  return (
    <Section>
      <MainContainer>
        <Tag
          size="lg"
          _hover={{ bg: "secondary.600", color: "main.100" }}
          transition="all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Link href="/">Go back</Link>
        </Tag>
        <BlurContainer style={{ justify: "center" }}>
          <Heading as="h1" mb="10px" color="secondary.600">
            {blok.title}
          </Heading>
          <Image
            alt={blok.image.alt}
            src={`${blok.image.filename}/m/filters:format(webp)`}
            maxW={["300px", "500px", "700px"]}
            mb="10px"
            mx="auto"
            rounded="10px"
          />
          <Box>
            <Link
              href={`${blok.link.url}`}
              mb="10px"
              display="block"
              color="secondary.400"
              isExternal
            >
              Open Demo page - {blok.title} <ExternalLinkIcon mx="2px" />
            </Link>
            <Box lineHeight="150%">{render(richText)}</Box>
          </Box>
        </BlurContainer>
      </MainContainer>
    </Section>
  )
}
export default Article
