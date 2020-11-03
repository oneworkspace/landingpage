import PropTypes from "prop-types"
import React from "react"

import Logo from "../../images/logo.png"

import "./styles.css"

const Header = ({
  siteTitle,
  headerSecond,
  headerDescription,
  currentOffer,
  primaryCTA,
}) => {
  return (
    <section className="hero mb-24">
      <section className="w-4/12">
        <img className="h-48 w-48" src={Logo} alt={siteTitle} />
        <h1 className="text-6xl text-white">{siteTitle}</h1>
        <h2 className="text-white text-2xl">OW is built for Freelancers and Teams!</h2>
        <p className="text-white text-sm w-8/12">{headerDescription}</p>
        <a href="https://forms.gle/nzzq9Vuvc51Kok3F9" target="_blank" rel="noopener noreferrer">
          <button className="cta-button text-xl text-white py-4 px-8 mb-6 mt-12 uppercase">
            Signup for Alpha
          </button>
        </a>
        <p className="text-white text-xl">and get OneWorkspace free tire for a year.</p>
      </section>
      <section className="laptop w-8/12" />
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
