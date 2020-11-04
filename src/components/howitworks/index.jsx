import PropTypes from "prop-types"
import React, { useState } from "react"
import "./styles.css"
import Auth from "../../images/auth.png"

const HowItWorks = ({ sectionTitle, stages }) => {
  const [stage, setStage] = useState(0)
  return (
    <>
      <div className="container mx-auto">
        <h3 className="black font-bold text-4xl mt-4 mb-2 mt-16 text-primary">
          {sectionTitle}
        </h3>
        <section className="flex container mx-auto items-center">
          <section className="flex flex-col w-3/12 mr-16 relative text-sm">
            <div className="connector-line" />
            {stages.map((_stage, _index) => (
              <div key={_index} className="flex items-center">
                <div
                  className={`h-4 w-4 mr-4 rounded-full ${
                    _index === stage
                      ? "stage-selected text-white"
                      : "stage-not-highlighted"
                  }`}
                />
                <span
                  className={`capitalize cursor-pointer text-center rounded-full w-3/4 my-4 px-4 py-2 ${
                    _index === stage
                      ? "stage-selected text-white font-bold"
                      : "stage-not-highlighted"
                  }`}
                  onClick={() => setStage(_index)}
                >
                  {_stage.name}
                </span>
              </div>
            ))}
          </section>
          <img src={Auth} alt="Stages" className="w-10/12" />
        </section>
      </div>
    </>
  )
}

HowItWorks.propTypes = {
  sectionTitle: PropTypes.string,
  stages: PropTypes.array,
}

HowItWorks.defaultProps = {
  sectionTitle: ``,
  stages: [],
}
export default HowItWorks
