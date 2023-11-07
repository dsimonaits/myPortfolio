"use client"
import React from "react"
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser"
import { storyblokEditable } from "gatsby-source-storyblok"
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react"
import { Tag, VStack } from "@chakra-ui/react"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import { AllArticlesStoryblok } from "../../../../component-types-sb"

interface ArticleNode {
  id: string
  uuid: string
  name: string
  slug: string
  full_slug: string
  content: string
  created_at: string
}

interface ArticleEdge {
  node: ArticleNode
}

interface Data {
  posts: {
    edges: ArticleEdge[]
  }
}

const AllArticles = ({ blok }: AllArticlesStoryblok) => {
  const data: Data = useStaticQuery(graphql`
    {
      posts: allStoryblokEntry(filter: { field_component: { eq: "article" } }) {
        edges {
          node {
            id
            uuid
            name
            slug
            full_slug
            content
            created_at
          }
        }
      }
    }
  `)

  const [articles, setArticles] = useState<ArticleEdge[]>([])
  useEffect(() => {
    const getArticles = async () => {
      const filteredArticles = data.posts.edges.filter(edge => edge)
      setArticles(() => filteredArticles.map(article => article))
    }
    getArticles()
  }, [])

  return (
    <Section>
      <MainContainer>
        <VStack>
          <Tag size="lg" p="20px" mb="-20px" mr="50%">
            {blok.title}
          </Tag>
          <div {...storyblokEditable(blok)}>
            <VStack spacing="40px">
              {articles[0] &&
                articles.map((article, index) => {
                  return (
                    <ArticleTeaser
                      article={JSON.parse(article.node.content)}
                      key={article.node.uuid}
                      slug={article.node.slug}
                      index={index}
                    />
                  )
                })}
            </VStack>
          </div>
        </VStack>
      </MainContainer>
    </Section>
  )
}
export default AllArticles
