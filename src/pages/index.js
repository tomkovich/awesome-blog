import React from "react"

import Layout from "../components/layout"
import Posts from "../components/posts"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="WoW"/>
      <Posts />
    </Layout>
  )
}

export default IndexPage
