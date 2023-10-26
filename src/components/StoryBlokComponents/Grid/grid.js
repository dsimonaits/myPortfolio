import React from "react"
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok"
import MainContainer from "../../Container/Container"

const Grid = ({ blok }) => (
  <MainContainer>
    {" "}
    <ul
      className="grid grid-cols-3"
      {...storyblokEditable(blok)}
      key={blok._uid}
      data-test="grid"
    >
      {blok.columns.map(blok => (
        <li key={blok._uid} className="text-center flex-auto px-6">
          <StoryblokComponent blok={blok} />
        </li>
      ))}
    </ul>
  </MainContainer>
)

export default Grid
