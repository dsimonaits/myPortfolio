import React from "react"
import { StoryblokComponent } from "gatsby-source-storyblok"
import {
  PageStoryblok,
  AboutStoryblok,
  AllArticlesStoryblok,
  ArticleStoryblok,
} from "../../../../component-types-sb"

const Page = ({ blok }: PageStoryblok) => (
  <>
    {blok.body.map(
      (
        nestedBlok:
          | AboutStoryblok
          | AllArticlesStoryblok
          | ArticleStoryblok
          | PageStoryblok
      ) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      )
    )}
  </>
)

export default Page
