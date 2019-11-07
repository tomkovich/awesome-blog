import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      <p>
        Need the best developer?
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/tomkovich_ya"
          target="_blank"
        >
          Contact me
        </a>
      </p>
      <p>
        <Link to="/about" replace>
          Here
        </Link>{" "}
        you can read about me :)
      </p>
    </Layout>
  )
}

export default contact
