import PropTypes from "prop-types"
import React from "react"

import IntegrationsImage from "../../images/integrations.png"

import "./styles.css"

const IntegrationsSection = ({
  sectionTitle,
  description_p1,
  description_p2,
  description_p3,
}) => (
  <section className="text-black w-10/12 flex mx-auto justify-between">
    <article className="w-5/12 text-left">
      <h3 className="text-black font-medium text-4xl mt-4 mb-2">{sectionTitle}</h3>
      <section className="space-y-4 text-gray-500">
        <p>{description_p1}</p>
        <p>{description_p2}</p>
        <p>{description_p3}</p>
      </section>
    </article>
    <section className="w-6/12 text-left">
      <img
        style={{ height: "490px", width: "490px" }}
        src={IntegrationsImage}
        className="mx-auto"
        alt="ow integrations"
      />
    </section>
  </section>
)

IntegrationsSection.propTypes = {
  sectionTitle: PropTypes.string,
  description_p1: PropTypes.string,
  description_p2: PropTypes.string,
  description_p3: PropTypes.string,
}

IntegrationsSection.defaultProps = {
  sectionTitle: ``,
  description_p1: ``,
  description_p2: ``,
  description_p3: ``,
}

export default IntegrationsSection
