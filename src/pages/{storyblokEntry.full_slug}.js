import * as React from "react"
import { graphql } from "gatsby"
import {
  StoryblokComponent,
  storyblokEditable,
  useStoryblokState,
} from "gatsby-source-storyblok"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout/layout"
import { MainTheme } from "../styles/theme/styles"

export default function Page({ data }) {
  let story = data.storyblokEntry
  story = useStoryblokState(story)

  //     {
  //     resolveRelations: ["popular-articles.articles"],
  //   }

  const Templates = () => {
    if (story.content.component === "page") {
      return story.content.body.map(blok => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))
    }
    return story.content.component !== "page" ? (
      <StoryblokComponent blok={story.content} key={story.content._uid} />
    ) : null
  }

  return (
    <ChakraProvider theme={MainTheme}>
      <Layout>
        <div {...storyblokEditable(story.content)}>
          <Templates blok={story.content} key={story.content._uid} />
        </div>
      </Layout>
    </ChakraProvider>
  )
}

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`
