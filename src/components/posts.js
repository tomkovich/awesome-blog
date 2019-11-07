import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import nb from "../images/nb.jpg"

const Posts = props => {
  let posts = useStaticQuery(graphql`
    query {
      allContentfulBlogposts(sort: { fields: title, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
            intro {
              childMarkdownRemark {
                html
              }
            }
            imageIntro {
              fluid(sizes: "300") {
                src
              }
            }
          }
        }
      }
    }
  `)

  posts = posts.allContentfulBlogposts.edges.map((post, index) => (
    <Post
      key={index}
      title={post.node.title}
      date={post.node.publishedDate}
      intro={post.node.intro.childMarkdownRemark.html}
      slug={post.node.slug}
      img={post.node.imageIntro.fluid.src}
    />
  ))

  return <div className="posts">{posts}</div>
}

const Post = ({ title, slug, date, img, intro }) => {
  return (
    <div className="postContainer">
      <div className="post">
        <div className="postTitle">{title}</div>
        <div className="postInfo">
          <span className="postComments">
            <strong>0</strong> comments
          </span>
          <span className="postDate">{date}</span>
        </div>
        <div className="postIntro" dangerouslySetInnerHTML={{__html: intro}}></div>
        <Link to={`/blog/${slug}`} className="postRead">
          Read.
        </Link>
      </div>
      <div className="contentImg">
        <img src={img} />
      </div>
    </div>
  )
}

export default Posts
