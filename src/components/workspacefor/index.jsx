import PropTypes from "prop-types"
import React from "react"

import EngineerCaricature from "../../images/engineer.svg"
import DesignerCaricature from "../../images/designer.svg"
import Creator_1 from "../../images/creator_1.svg"
import Creator_2 from "../../images/creator_2.svg"
import Creator_3 from "../../images/creator_3.svg"
import Creator_4 from "../../images/creator_4.svg"
import Creator_5 from "../../images/creator_5.svg"
import Creator_6 from "../../images/creator_6.svg"
import Creator_7 from "../../images/creator_7.svg"
import Creator_8 from "../../images/creator_8.svg"
import Creator_9 from "../../images/creator_9.svg"

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
        And basically every creator...
      </h5>
      <div className="my-12">
        <div className="flex space-x-16 justify-center">
          <img className="h-32" src={Creator_1} alt="creator-1" />
          <img className="h-32" src={Creator_2} alt="creator-2" />
          <img className="h-32 pl-20" src={Creator_3} alt="creator-3" />
        </div>
        <div className="flex space-x-8 my-2 justify-center">
          <img className="h-32" src={Creator_4} alt="creator-4" />
          <img className="h-32" src={Creator_5} alt="creator-5" />
          <img className="h-32 -mt-10" src={Creator_6} alt="creator-6" />
          <img className="h-32" src={Creator_7} alt="creator-7" />
        </div>
        <div className="flex space-x-8 justify-center">
          <img className="h-32" src={Creator_8} alt="creator-8" />
          <img className="h-32" src={Creator_9} alt="creator-9" />
        </div>
      </div>
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
