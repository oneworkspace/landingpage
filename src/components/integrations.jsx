import PropTypes from "prop-types"
import React from "react"

const IntegrationsSection = ({ assetUrl }) => (
  <div className="bg-white text-black w-full flex">
    <div className="w-1/2 text-left">
      <h3 className="text-xl mt-4 mb-2">
        Use all your favorite apps on the same platform
      </h3>
      <p className="text-xs text-gray-500">
        More Information goes here! More Information goes here! More Information
        goes here! More Information goes here! More Information goes here! More
        Information goes here! More Information goes here! More Information goes
        here! More Information goes here! More Information goes here!{" "}
      </p>
    </div>
    <div className="w-1/2 text-left">
      <img className="w-64 h-64" src={assetUrl} alt="ow integrations" />
    </div>
  </div>
)

IntegrationsSection.propTypes = {
  assetUrl: PropTypes.string,
}

IntegrationsSection.defaultProps = {
  assetUrl: ``,
}

export default IntegrationsSection
