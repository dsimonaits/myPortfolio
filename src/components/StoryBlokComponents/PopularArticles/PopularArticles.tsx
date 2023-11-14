import React from "react"
import { storyblokEditable } from "gatsby-source-storyblok"
import {
  ArticleStoryblok,
  PopularArticlesStoryblok,
} from "../../../../component-types-sb"
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser"
import { Box, HStack, Tag, VStack } from "@chakra-ui/react"
import { useMediaQuery } from "react-responsive"
import MainContainer from "../../Container/Container"
import Section from "../../Section/Section"

const PopularArticles = ({ blok }: PopularArticlesStoryblok) => {
  console.log(blok)

  const isMobile = useMediaQuery({ maxWidth: 480 })

  const tagPosition = isMobile ? "auto" : "0"

  return (
    <Section id="featured">
      <MainContainer style={{ zIndex: "99" }}>
        <VStack>
          <div {...storyblokEditable(blok)}>
            <VStack spacing="60px">
              {blok.articles.map((article: ArticleStoryblok, index: number) => {
                const articlePositionEven = index % 2 === 0
                return (
                  <Box key={article.uuid}>
                    <HStack
                      display="flex"
                      justify={
                        articlePositionEven && !isMobile ? "left" : "right"
                      }
                    >
                      <Tag
                        size={["md", "md", "lg"]}
                        p="20px"
                        mx={tagPosition}
                        mb="-10px"
                      >
                        Featured project - {article.title}
                      </Tag>
                    </HStack>
                    <ArticleTeaser
                      article={article.content}
                      slug={article.slug}
                      index={index}
                      _uid={""}
                      component={"article"}
                    />
                  </Box>
                )
              })}
            </VStack>
          </div>
        </VStack>
      </MainContainer>
    </Section>
  )
}
export default PopularArticles
