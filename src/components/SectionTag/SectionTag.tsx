import { Tag } from "@chakra-ui/react"
import React, { FC } from "react"

interface iSectionTag {
  name: string
  style?: object
}

const SectionTag: FC<iSectionTag> = ({ name, style }) => {
  return (
    <Tag size="lg" p="20px" mb="-20px" {...style}>
      {name}
    </Tag>
  )
}

export default SectionTag
