import PropTypes from "prop-types"
import React from "react"

import Logo from "../../images/logo.png"

import "./styles.css"
import Nav from "../nav"

const Header = ({
  siteTitle,
  headerSecond,
  headerDescription,
  currentOffer,
  primaryCTA,
}) => {
  return (
    <section className="hero text-center p-6 container mx-auto">
        <Nav />
        <h1 className="text-6xl font-bold">{siteTitle}</h1>
        <h2 className="text-2xl font-bold text-purple-700">Built for Freelancers and Teams</h2>
        <p className="text text-gray-600 font-medium my-4 w-8/12 mx-auto">{headerDescription}</p>
        <a href="https://forms.gle/nzzq9Vuvc51Kok3F9" target="_blank" rel="noopener noreferrer">
          <button className="cta-button text-xl text-white py-4 px-8 mb-6 mt-12 uppercase">
            Signup for Alpha
          </button>
        </a>
        <p className="text-gray-600 text-sm -mt-4">and get OneWorkspace free for a year</p>

    </section>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerSecond: PropTypes.string,
  headerDescription: PropTypes.string,
  currentOffer: PropTypes.string,
  primaryCTA: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  headerDescription: ``,
}

export default Header
