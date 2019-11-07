import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./../images/logo.svg"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div
        className="logo"
        style={{
          color: `#fff`,
          width: `15%`,
        }}
      >
        <Link exact="true" to="/">
          <img src={siteTitle} alt="logo" />
        </Link>
      </div>
      <nav>
        <Link to="/fashion">Мода</Link>
        <Link to="/health">Здоровье</Link>
        <Link to="/learning">Обучение</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `${logo}`,
}

export default Header
