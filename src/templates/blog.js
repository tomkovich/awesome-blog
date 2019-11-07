import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogposts(slug: { eq: $slug }) {
      title
      cat
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  console.log(props)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  let data = props.data.contentfulBlogposts
  return (
    <Layout>
      <div className="singlePost">
        <h2>{data.title}</h2>
        <div className="singlePostCat">Категория: <span>{data.cat}</span></div>
        <div className="singlePostDate">{props.data.publishedDate}</div>
        {documentToReactComponents(
          props.data.contentfulBlogposts.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default Blog
