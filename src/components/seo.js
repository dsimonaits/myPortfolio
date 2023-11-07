/* eslint-disable react/prop-types */
"use client"

import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata.jsx"

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
    <>
      <title>{seo.title}</title>
    </>
  )
}

export default Seo
