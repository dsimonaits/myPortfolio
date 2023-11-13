import React from "react"
import { StoryblokComponent } from "gatsby-source-storyblok"
import { List, ListItem } from "@chakra-ui/layout"
import {
  SocialLinkListStoryblok,
  SocialLinkStoryblok,
} from "../../../../component-types-sb"

interface SocialLinkListProps {
  blok: SocialLinkListStoryblok
}

const SocialLinkList: React.FC<SocialLinkListProps> = ({ blok }) => {
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
