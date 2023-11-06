import React from "react"
import { SkillStoryblok } from "../../../../component-types-sb"
import { Text, Image, Box, VStack } from "@chakra-ui/react"

const Skill = ({ blok }: SkillStoryblok) => {
  console.log(blok)
  return (
    <VStack>
      <Box
        boxSize="90px"
        borderRadius="full"
        bg="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={blok.icon.filename} alt={blok.name} width="60px" />
      </Box>
      <Text>{blok.name}</Text>
    </VStack>
  )
}

export default Skill
