import PropTypes from "prop-types"
import React from "react"

import IntegrationsImage from "../../images/integrations.png"

import "./styles.css"

const IntegrationsSection = ({
  sectionTitle,
  description_p1,
  description_p2,
  description_p3,
  description_p4,
}) => (
  <div className="text-black w-9/12 flex mx-auto space-x-32">
    <div className="w-1/3 text-left">
      <h3 className="text-primary text-3xl mt-4 mb-2">{sectionTitle}</h3>
      <div className="space-y-4 text-sm text-gray-500">
        <p>{description_p1}</p>
        <p>{description_p2}</p>
        <p>{description_p3}</p>
        <p>{description_p4}</p>
        <div>
          <a className="text-primary text-sm" href="/">
            Learn more about us
          </a>
        </div>
      </div>
    </div>
    <div className="w-1/2 text-left">
      <img
        style={{ height: "490px", width: "490px" }}
        src={IntegrationsImage}
        alt="ow integrations"
      />
    </div>
  </div>
)

IntegrationsSection.propTypes = {
  sectionTitle: PropTypes.string,
  description_p1: PropTypes.string,
  description_p2: PropTypes.string,
  description_p3: PropTypes.string,
  description_p4: PropTypes.string,
}

IntegrationsSection.defaultProps = {
  sectionTitle: ``,
  description_p1: ``,
  description_p2: ``,
  description_p3: ``,
  description_p4: ``,
}

export default IntegrationsSection
