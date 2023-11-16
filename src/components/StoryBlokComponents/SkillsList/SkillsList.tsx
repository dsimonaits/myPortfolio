import React from "react"
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok"
import {
  SkillsListStoryblok,
  SkillStoryblok,
} from "../../../../component-types-sb"
import { Divider, Heading, List, ListItem } from "@chakra-ui/react"

const SkillsList = ({ blok }: SkillsListStoryblok) => {
  return (
    <ListItem>
      <Divider mb="20px" />
      <Heading as="h3" size="sm" mb="20px">
        {blok.listName}:
      </Heading>

      <List
        {...storyblokEditable(blok)}
        key={blok._uid}
        data-test="grid"
        display="flex"
        flexWrap="wrap"
        gap="10px"
        justifyContent="center"
      >
        {blok.list.map((blok: SkillStoryblok) => (
          <ListItem
            key={blok._uid}
            flexBasis={[
              "calc((100% - 2 * 10px) / 4)",
              "calc((100% - 3 * 10px) / 4)",
              "calc((100% - 5 * 10px) / 6)",
            ]}
          >
            <StoryblokComponent blok={blok} />
          </ListItem>
        ))}
      </List>
    </ListItem>
  )
}

export default SkillsList
