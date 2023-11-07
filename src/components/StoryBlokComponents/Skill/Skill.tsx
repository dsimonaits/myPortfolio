import React from "react"
import { SkillStoryblok } from "../../../../component-types-sb"
import { Text, Image, Box, VStack } from "@chakra-ui/react"

const Skill = ({ blok }: SkillStoryblok) => {
  return (
    <VStack>
      <Box
        boxSize={["70px", "80px", "90px"]}
        borderRadius="full"
        bg="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={blok.icon.filename}
          alt={blok.name}
          width={["40px", "50px", "60px"]}
        />
      </Box>
      <Text>{blok.name}</Text>
    </VStack>
  )
}

export default Skill
