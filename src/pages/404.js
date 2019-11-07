import React from "react"

import SEO from "../components/seo"
import notFound from "../images/404.jpg"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div className="notfoundPageContainer">
    <div
      className="notfoundPage"
      style={{
        width: `100%`,
        height: `100%`,
        position: `absolute`,
        top: 0,
        left: 0,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        zIndex: -1,
        backgroundImage: `url(${notFound})`,
      }}
    >
      <SEO title="404: Not found" />
      <h1>Страница не найдена</h1>
      <p>Похоже ты немножко устал - отдохни... или вернись на главную</p>
      <Link className="homeLink" to="/">
        Главная.
      </Link>
    </div>
  </div>
)

export default NotFoundPage
