"use client"
import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Section from "../components/Section/Section"
import MainContainer from "../components/Container/Container"
import { VStack } from "@chakra-ui/react"

const NotFoundPage = () => (
  <Layout>
    <Section>
      <MainContainer>
        <VStack minH="300px" justifyContent="center" alignItems="center">
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </VStack>
      </MainContainer>
    </Section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
