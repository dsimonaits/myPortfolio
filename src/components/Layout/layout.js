import React from "react"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Page from "../StoryBlokComponents/Page/page"
import "./layout.module.css"
import About from "../StoryBlokComponents/About/About"
import Article from "../StoryBlokComponents/Article/Article"
import AllArticles from "../StoryBlokComponents/AllArticles/AllArticles"
import MainContainer from "../Container/Container"
import SkillsList from "../StoryBlokComponents/SkillsList/SkillsList"
import Skill from "../StoryBlokComponents/Skill/Skill"

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
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <MainContainer>{children}</MainContainer>
    </>
  )
}

export default Layout
