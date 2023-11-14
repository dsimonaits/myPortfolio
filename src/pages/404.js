"use client"
import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Section from "../components/Section/Section"
import MainContainer from "../components/Container/Container"
import { navigate } from "gatsby"
import { Heading, Text, VStack, Button } from "@chakra-ui/react"

const NotFoundPage = () => (
  <Layout>
    <Section>
      <MainContainer style={{ zIndex: "100" }}>
        <VStack minH="300px" justifyContent="center" alignItems="center">
          <Heading as="h3">404: page not found</Heading>
          <Text fontSize="lg">
            You just hit a route that doesn&#39;t exist... the sadness.
          </Text>

          <Button
            _hover={{ bg: "secondary.600", color: "main.100" }}
            transition="all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
        </VStack>
      </MainContainer>
    </Section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
