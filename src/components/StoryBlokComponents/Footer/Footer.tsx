/* eslint-disable prefer-const */
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  ContactStoryblok,
  SocialLinkListStoryblok,
} from "../../../../component-types-sb"
import Section from "../../Section/Section"
import MainContainer from "../../Container/Container"
import BlurContainer from "../../BlurContainer/BlurContainer"
import { Tag } from "@chakra-ui/tag"
import { Box, Link, Text, VStack } from "@chakra-ui/react"
import getCurrentDateInfo from "../../CurrentDateInfo/CurrentDateInfo"

import { AiFillGithub } from "react-icons/ai"
import Contact from "../Contact/Contact"
import SocialLinkList from "../SocialLinkList/SocialLinkList"

interface nodeContent {
  name: string
  uuid: string
  content: string
}

interface INode {
  node: nodeContent
}

const Footer = () => {
  const { footer } = useStaticQuery(graphql`
    {
      footer: allStoryblokEntry(filter: { field_component: { eq: "footer" } }) {
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

  let thisFooter = footer.edges.filter(({ node }: INode) => node.uuid)
  let footerContent = thisFooter.length
    ? JSON.parse(thisFooter[0].node.content)
    : {}

  console.log(footerContent.components[1])

  const contactMe: ContactStoryblok = footerContent.components[0]
  const socialLinks: SocialLinkListStoryblok = footerContent.components[1]

  const currentYear = getCurrentDateInfo("year")
  const createdDate = currentYear === 2022 ? null : 2022 + " - "
  return (
    <>
      <Section style={{ py: ["40px", "40px", "40px"] }}>
        <MainContainer
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Box
            position="absolute"
            top="-200%"
            left="0%"
            background="linear-gradient(151deg, rgba(0,98,255,0) 60%, rgba(57,85,242,0.22030237580993517) 81%), rgba(255,41,195,0.3) 80%"
            width={["300px", "500px", "700px"]}
            height={["300px", "500px", "700px"]}
            borderRadius="50%"
            filter="blur(70px)"
            zIndex="0"
          />
          <Tag size="lg" p="20px" mb="-20px" mx="auto" zIndex="99">
            Contact Me
          </Tag>
          <BlurContainer>
            <Contact blok={contactMe} />
            <SocialLinkList blok={socialLinks} />
          </BlurContainer>
          <VStack justify="center">
            {" "}
            <Text mt="10px">
              D.S. - portfolio | {createdDate}
              {currentYear}
            </Text>
            <Link
              href="https://github.com/dsimonaits/myPortfolio"
              target="_blank"
            >
              Github <AiFillGithub />
            </Link>
          </VStack>
        </MainContainer>
      </Section>
    </>
  )
}

export default Footer
