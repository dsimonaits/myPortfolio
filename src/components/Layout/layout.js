"use client"
import React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Page from "../StoryBlokComponents/Page/page"

import Header from "../Header/Header"
import { Box, Stack, StackDivider } from "@chakra-ui/react"
import Donut from "../../images/SuperToroid-Purple-Glossy.png"
import "./layout.module.css"
import About from "../StoryBlokComponents/About/About"
import { Helmet } from "react-helmet"
import Projects from "../StoryBlokComponents/Projects/Projects"
import Project from "../StoryBlokComponents/Projects/Project"

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  apiOptions: {
    region: "eu",
  },
  use: [apiPlugin],
  components: {
    page: Page,
    about: About,
    projects: Projects,
    project: Project,
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>D.S. Portfolio</title>
      </Helmet>{" "}
      <Box position="absolute" top="-10px" right="-10px">
        <img src={Donut} alt="Purple donut" width="100px" />
      </Box>
      <Box
        position="absolute"
        top="-150px"
        left="-150px"
        background="linear-gradient(151deg, rgba(0,98,255,0) 0%, rgba(57,85,242,0.22030237580993517) 21%, rgba(255,41,195,1) 100%)"
        width="300px"
        height="300px"
        borderRadius="50%"
        filter="blur(70px)"
      />
      <Box
        mh="80vh"
        overflow="auto"
        position="relative"
        backgroundColor="rgb(255,255,255, .05)"
        borderRadius="10px"
        py={["20px", "40px", "40px"]}
        zIndex="99"
        backdropFilter="blur(10px)"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "10px",
          border: "1px solid transparent",
          background:
            "linear-gradient(90deg,grey,black,black,black) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          filter: "blur(10px)",
          zIndex: "-1",
        }}
      >
        <Header />
        <Stack
          divider={
            <StackDivider
              borderColor="white.100"
              px={[null, "10px", "10px"]}
              py={["10px", null, null]}
            />
          }
        >
          {children}
          {/* <About />
          <Projects /> */}
        </Stack>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
