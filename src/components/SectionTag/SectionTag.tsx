import { Tag } from "@chakra-ui/react"
import React, { FC } from "react"

interface iSectionTag {
  name: string
}

const SectionTag: FC<iSectionTag> = ({ name }) => {
  return (
    <Tag size="lg" p="20px" mb="-20px">
      {name}
    </Tag>
  )
}

export default SectionTag
