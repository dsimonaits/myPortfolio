import React from "react"
// import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { INode } from "../../../types/types"
import { MenuLinkStoryblok } from "../../../../component-types-sb"
import { Box, HStack } from "@chakra-ui/layout"
import MainContainer from "../../Container/Container"
import useScrollPosition from "../../../hooks/useScrollPosition"

const Header = () => {
  const { header } = useStaticQuery(graphql`
    {
      header: allStoryblokEntry(filter: { field_component: { eq: "header" } }) {
        edges {
          node {
            name
            uuid
            content
          }
        }
      }
    }
  `)

  // const [openMenu, setOpenMenu] = useState(false)

  const thisHeader = header?.edges?.filter(({ node }: INode) => node.uuid)
  const headerContent = thisHeader.length
    ? JSON.parse(thisHeader[0].node.content)
    : {}

  const menu = headerContent.HeaderMenu.map((menu: MenuLinkStoryblok[]) => menu)

  const Nav = () =>
    menu.map((item: MenuLinkStoryblok) =>
      item ? (
        <Box as="li" key={item._uid}>
          <a href={`${item?.link?.cached_url}`}>{item.name}</a>
        </Box>
      ) : null
    )

  return (
    <Box
      as="section"
      position="fixed"
      py="30px"
      bg="black"
      top={0}
      left={0}
      right={0}
      zIndex="100"
      transform={useScrollPosition() ? "translateY(-200px)" : "translateY(0)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      fontSize="xl"
    >
      <MainContainer>
        <HStack
          justify="space-between"
          align="center"
          bg="black"
          zIndex="100"
          px="40px"
        >
          {/* <Box>{Logo.logoName}</Box> */}
          <HStack as="ul" gap="30px">
            <Nav />
          </HStack>
        </HStack>
      </MainContainer>
    </Box>
  )
}

export default Header
