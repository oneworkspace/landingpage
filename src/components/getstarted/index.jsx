import PropTypes from "prop-types"
import React from "react"

import "./styles.css"

const GetStarted = ({
  sectionTitle,
  description_p1,
  description_p2,
  description_p3,
  ctaText,
}) => {
  return (
    <div className="container mx-auto mt-64">
      <div className="text-left w-9/12">
        <h4 className="text-4xl font-bold my-4 ow-color">{sectionTitle}</h4>
        <p className="font-bold text-xl ow-color">{description_p1}</p>
        <p className="font-bold text-xl ow-color">{description_p2}</p>
        <p className="font-bold text-xl ow-color">{description_p3}</p>
        <div>
          <button className="bg-primary px-8 py-3 mt-6 mb-1 rounded-full  text-white">
            {ctaText}
          </button>
        </div>
      </div>
      <div className="border-b-2 border-primary w-64 my-32 mx-auto" />
    </div>
  )
}

GetStarted.propTypes = {
  sectionTitle: PropTypes.string,
  description_p1: PropTypes.string,
  description_p2: PropTypes.string,
  description_p3: PropTypes.string,
  ctaText: PropTypes.string,
}

GetStarted.defaultProps = {
  sectionTitle: ``,
  description_p1: ``,
  description_p2: ``,
  description_p3: ``,
  ctaText: ``,
}

export default GetStarted
