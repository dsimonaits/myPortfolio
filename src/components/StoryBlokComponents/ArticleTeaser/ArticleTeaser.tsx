"use client"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import {
  Box,
  Heading,
  Image,
  Link,
  VStack,
  Stack,
  Tag,
  HStack,
} from "@chakra-ui/react"
import React from "react"
import { ArticleStoryblok } from "../../../../component-types-sb"
import BlurContainer from "../../BlurContainer/BlurContainer"
import { useMediaQuery } from "react-responsive"

interface IDesktopMarkup {
  even?: boolean
  article: ArticleStoryblok
  slug: string
}

const ArticleTeaser = ({ article, slug, index }: ArticleStoryblok) => {
  const isMobile = useMediaQuery({ maxWidth: 480 })

  const articlePositionEven = index % 2 === 0

  const desktop = desktopMarkup({ article, slug, even: articlePositionEven })
  const mobile = mobileMarkup({ article, slug })

  const tagPosition = isMobile ? "auto" : "0"

  return (
    <Box>
      <HStack
        display="flex"
        justify={articlePositionEven && !isMobile ? "left" : "right"}
      >
        <Tag size={["sm", "md", "lg"]} p="20px" mx={tagPosition} mb="-10px">
          Featured project - {article.title}
        </Tag>
      </HStack>
      <Stack
        direction={["column", "row", "row"]}
        display={["block", "flex", "flex"]}
        alignItems="flex-start"
        justifyContent="center"
        _notLast={{ mb: "40px" }}
      >
        {isMobile ? mobile : desktop}
      </Stack>
    </Box>
  )
}

export default ArticleTeaser

const desktopMarkup = ({ article, slug, even }: IDesktopMarkup) => {
  return (
    <>
      {even ? (
        <>
          <BlurContainer
            style={{
              mr: ["0", "-50px", "-50px"],
              mb: ["-20px", "0", "0"],
              maxW: ["100%", "100%", "100%"],
              flex: "1",
            }}
          >
            {" "}
            <VStack align="left" height="auto">
              <Heading as="h3" size="sm" mt="10px" textAlign="left">
                {article.subtitle}
              </Heading>
              <Box mt="4px">
                <Link
                  href={`/blog/${article.slug || slug}`}
                  mb="10px"
                  display="block"
                  color="secondary.400"
                >
                  Read More over {article.title} <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </VStack>
          </BlurContainer>
          <Image
            mx="auto"
            rounded="15px"
            src={`${article?.image?.filename}/m/filters:format(webp)`}
            fallbackSrc="https://via.placeholder.com/150"
            alt={article.title}
            maxW={["100%", "50%", "50%"]}
            flex="1"
          />
        </>
      ) : (
        <>
          <Image
            mx="auto"
            rounded="15px"
            src={`${article?.image?.filename}/m/filters:format(webp)`}
            fallbackSrc="https://via.placeholder.com/150"
            alt={article.title}
            maxW={["100%", "50%", "50%"]}
          />
          <BlurContainer
            style={{
              ml: ["0", "-50px", "-50px"],
              mt: ["-20px", "0", "0"],
              maxW: ["100%", "100%", "100%"],
              flex: "1",
            }}
          >
            {" "}
            <VStack align="left" height="auto">
              <Heading as="h3" size="sm" mt="10px" textAlign="left">
                {article.subtitle}
              </Heading>
              <Box mt="4px">
                <Link
                  href={`/blog/${article.slug || slug}`}
                  mb="10px"
                  display="block"
                  color="secondary.400"
                >
                  Read More over {article.title} <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </VStack>
          </BlurContainer>
        </>
      )}
    </>
  )
}

const mobileMarkup = ({ article, slug }: IDesktopMarkup) => {
  return (
    <>
      <BlurContainer
        style={{
          mb: ["-20px", "0", "0"],
          maxW: ["100%", "100%", "100%"],
          flex: "1",
        }}
      >
        {" "}
        <VStack align="left" height="auto">
          {" "}
          <Heading
            as="h2"
            size="md"
            mb="20px"
            textAlign="left"
            color="secondary.600"
          >
            {article.title}
          </Heading>
          <Heading as="h3" size="sm" mt="10px" textAlign="left">
            {article.subtitle}
          </Heading>
          <Box mt="4px">
            <Link
              href={`/blog/${article.slug || slug}`}
              mb="10px"
              display="block"
              color="secondary.400"
            >
              Read More over {article.title} <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </VStack>
      </BlurContainer>
      <Image
        mx="auto"
        rounded="15px"
        src={`${article?.image?.filename}/m/filters:format(webp)`}
        fallbackSrc="https://via.placeholder.com/150"
        alt={article.title}
        maxW={["100%", "50%", "50%"]}
        flex="1"
      />
    </>
  )
}
