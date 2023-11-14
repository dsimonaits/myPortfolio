/* eslint-disable react/prop-types */
"use client"
import * as React from "react"
import { graphql } from "gatsby"
import { StoryblokStory } from "gatsby-source-storyblok"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  if (typeof data.storyblokEntry.content === "string")
    data.storyblokEntry.content = JSON.parse(data.storyblokEntry.content)

  return (
    <Layout>
      <StoryblokStory story={data.storyblokEntry} />
    </Layout>
  )
}

export const Head = () => <Seo pageTitle="Welcome" />

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`
