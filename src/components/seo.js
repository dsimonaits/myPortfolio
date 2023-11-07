/* eslint-disable react/prop-types */
"use client"

import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata.jsx"
import { Helmet } from "react-helmet"

function Seo({ title: pageTitle, description }) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: pageTitle || defaultTitle,
    description: description || defaultDescription,
    author: author,
    url: `${siteUrl}`,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
    </Helmet>
  )
}

export default Seo
