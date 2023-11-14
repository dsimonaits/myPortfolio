/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Page from "../StoryBlokComponents/Page/page"
import "./layout.module.css"
import { ChakraProvider } from "@chakra-ui/react"
import { MainTheme } from "../../styles/theme/styles.ts"
import Header from "../StoryBlokComponents/Header/Header.tsx"
import Footer from "../StoryBlokComponents/Footer/Footer.tsx"
import About from "../StoryBlokComponents/About/About"
import Article from "../StoryBlokComponents/Article/Article"
import AllArticles from "../StoryBlokComponents/AllArticles/AllArticles"
import MainContainer from "../Container/Container"
import SkillsList from "../StoryBlokComponents/SkillsList/SkillsList"
import Skill from "../StoryBlokComponents/Skill/Skill"
import SocialLink from "../StoryBlokComponents/SocialLink/SocialLink.tsx"
import PopularArticles from "../StoryBlokComponents/PopularArticles/PopularArticles.tsx"

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  apiOptions: {
    region: "eu",
  },
  use: [apiPlugin],
  components: {
    page: Page,
    about: About,
    article: Article,
    "all-articles": AllArticles,
    "skills-list": SkillsList,
    skill: Skill,
    socialLink: SocialLink,
    "popular-articles": PopularArticles,
  },
})

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={MainTheme}>
      <Header />
      <MainContainer as={{ as: "main" }} style={{ pt: "60px" }}>
        {children}
      </MainContainer>
      <Footer />
    </ChakraProvider>
  )
}

export default Layout
