import PropTypes from "prop-types"
import React, { useState } from "react"
import "./styles.css"
import First from "../../images/first.png"
import Second from "../../images/second.png"
import Third from "../../images/third.png"
import Fourth from "../../images/fourth.png"
import Fifth from "../../images/fifth.png"

const stageIllustrations = [First, Second, Third, Fourth, Fifth]

const HowItWorks = ({ sectionTitle, stages }) => {
  const [stage, setStage] = useState(0)
  return (
    <>
      <section className="container mx-auto">
        <h3 className="black font-bold text-4xl mt-4 mb-2 mt-16 text-primary">
          {sectionTitle}
        </h3>
        <section className="flex container mx-auto items-center">
          <section className="flex flex-col w-4/12 mr-16 relative text-sm">
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
                  className={`capitalize cursor-pointer rounded-full w-3/4 my-4 px-4 py-4 ${
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
          <img
            src={stageIllustrations[stage]}
            alt="Stages"
            className="w-8/12 border-4 border-t-8 border-ow rounded-2xl"
          />
        </section>
      </section>
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
