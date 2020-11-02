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
    <div className="getstarted w-full text-white my-20">
      <div className="text-left pt-64 space-y-4 w-9/12 mx-auto">
        <h4 className="text-3xl my-4 w-1/4">{sectionTitle}</h4>
        <p className="font-light">{description_p1}</p>
        <p className="font-light">{description_p2}</p>
        <p className="font-light">{description_p3}</p>
        <div>
          <button className="bg-primary px-8 py-3 mt-6 mb-1 rounded-full  text-white">
            {ctaText}
          </button>
        </div>
      </div>
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
