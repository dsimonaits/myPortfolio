import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Heading, Image, Link, HStack, VStack } from "@chakra-ui/react"
import React from "react"
import { ArticleStoryblok } from "../../../../component-types-sb"
import BlurContainer from "../../BlurContainer/BlurContainer"

const ArticleTeaser = ({ article, slug, index }: ArticleStoryblok) => {
  return (
    <>
      <HStack display="flex" alignItems="flex-start" _notLast={{ mb: "40px" }}>
        {index % 2 === 0 ? (
          <>
            {" "}
            <BlurContainer style={{ mr: "-50px", minW: "50%", flex: "1" }}>
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
              src={`${article.image.filename}/m/filters:format(webp)`}
              fallbackSrc="https://via.placeholder.com/150"
              alt={article.title}
              maxW="50%"
              flex="1"
            />
          </>
        ) : (
          <>
            <Image
              mx="auto"
              rounded="15px"
              src={`${article.image.filename}/m/filters:format(webp)`}
              fallbackSrc="https://via.placeholder.com/150"
              alt={article.title}
              maxW="50%"
            />
            <BlurContainer style={{ ml: "-50px", minW: "50%", flex: "1" }}>
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
          </>
        )}
      </HStack>
    </>
  )
}

export default ArticleTeaser
