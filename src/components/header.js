import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../assets/gatsby_shopify.svg';

const Header = ({ siteTitle }) => (
  <header>
    <img src={logo} alt="Logo" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
