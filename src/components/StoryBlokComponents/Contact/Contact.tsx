import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/accordion"
import { Box, HStack, Stack } from "@chakra-ui/layout"

import { render } from "storyblok-rich-text-react-renderer"
import { ContactStoryblok } from "../../../../component-types-sb"

const Contact = ({ blok }: ContactStoryblok) => {
  const contactMe = blok.contactMe
  const contactMoreInfo = blok.contactMore

  return (
    <>
      <Stack direction={["column", "row", "row"]}>
        <Box flex="1">{render(contactMe)}</Box>
        <Accordion allowToggle flex="1">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Read more...
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>{render(contactMoreInfo)}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </>
  )
}

export default Contact
