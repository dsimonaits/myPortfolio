import React from "react"
import { StoryblokComponent } from "gatsby-source-storyblok"
import { List, ListItem } from "@chakra-ui/layout"
import {
  SocialLinkListStoryblok,
  SocialLinkStoryblok,
} from "../../../../component-types-sb"

const SocialLinkList = ({ blok }: SocialLinkListStoryblok) => {
  return (
    <List display="flex" flexDir="row" gap="10px" justifyContent="center">
      {blok.socialLinks.map((blok: SocialLinkStoryblok) => (
        <ListItem key={blok._uid}>
          <StoryblokComponent blok={blok} />
        </ListItem>
      ))}
    </List>
  )
}

export default SocialLinkList
