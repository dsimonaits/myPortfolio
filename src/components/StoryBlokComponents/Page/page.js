import React from "react"
import { storyblokEditable, StoryblokComponent } from "gatsby-source-storyblok"

const Page = ({ blok }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map(nestedBlok => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
)

export default Page
