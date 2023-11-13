import React from "react"
import { SocialLinkStoryblok } from "../../../../component-types-sb"
import { Image, Link } from "@chakra-ui/react"

const SocialLink = ({ blok }: SocialLinkStoryblok) => {
  return (
    <Link key={blok._uid} href={blok.url.url} target="_blank">
      <Image src={blok.icon.filename} alt={blok.url.url} width="40px" />
    </Link>
  )
}

export default SocialLink
