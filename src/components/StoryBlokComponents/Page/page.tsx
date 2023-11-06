import React from "react"
import { storyblokEditable, StoryblokComponent } from "gatsby-source-storyblok"
import {
  PageStoryblok,
  AboutStoryblok,
  AllArticlesStoryblok,
  ArticleStoryblok,
} from "../../../../component-types-sb"

const Page = ({ blok }: PageStoryblok) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
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
  </main>
)

export default Page
