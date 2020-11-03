import PropTypes from "prop-types"
import React from "react"

import EngineerCaricature from "../../images/engineer.svg"
import DesignerCaricature from "../../images/designer.svg"

import "./styles.css"

const WorkspaceFor = ({ sectionTitle }) => {
  return (
    <div className="text-white h-screen pt-32 mb-24">
      <div className="text-center">
        <h4 className="text-xl text-primary font-semibold">{sectionTitle}</h4>
      </div>
      <div className="flex justify-between w-1/2 mx-auto my-12">
        <img className="h-64 w-64" src={EngineerCaricature} alt="Engineer" />
        <img className="h-64 w-64" src={DesignerCaricature} alt="Designer" />
      </div>
      <h5 className="text-lg text-primary font-semibold text-center">
        And everyone who loves to create!
      </h5>
    </div>
  )
}

WorkspaceFor.propTypes = {
  sectionTitle: PropTypes.string,
}

WorkspaceFor.defaultProps = {
  sectionTitle: ``,
}

export default WorkspaceFor
