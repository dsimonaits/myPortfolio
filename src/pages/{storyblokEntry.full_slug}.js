/* eslint-disable react/prop-types */
"use client"
import * as React from "react"
import { graphql } from "gatsby"
import {
  StoryblokComponent,
  storyblokEditable,
  useStoryblokState,
} from "gatsby-source-storyblok"
import Layout from "../components/Layout/layout"

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
    <Layout>
      <div {...storyblokEditable(story.content)}>
        <Templates blok={story.content} key={story.content._uid} />
      </div>
    </Layout>
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
