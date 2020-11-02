import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, headerDescription, owLogoUrl }) => (
  <header className="bg-accent text-white px-12 h-screen mt-10">
    <div className="mt-6">
      <div className="bg-white h-24 w-24 shadow-md rounded-full p-2 mt-4">
        <img className="w-20 h-20" src={owLogoUrl} alt="Oneworkspace" />
      </div>
    </div>
    <div className="w-1/4 text-left">
      <h1 className="text-4xl font-light mt-4 mb-2">{siteTitle}</h1>
      <p className="text-xs font-gray-200">{headerDescription}</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
