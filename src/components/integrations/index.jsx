import PropTypes from "prop-types"
import React from "react"

import IntegrationsImage from "../../images/integrations.png"

const IntegrationsSection = ({ assetUrl }) => (
  <div className="text-black w-9/12 flex mx-auto space-x-32">
    <div className="w-1/3 text-left">
      <h3 className="text-3xl mt-4 mb-2">
        Use all your favourite apps on the same platform!
      </h3>
      <div class="space-y-4 text-sm text-gray-500">
        <p>Porta etiam dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Consequat eu congue morbi sem augue amet. Id imperdiet diam quis
          tempor rhoncus, ipsum placerat aliquam massa. Luctus porttitor massa
          amet nunc, sollicitudin. Erat amet faucibus adipiscing ut sed massa
          convallis vitae.
        </p>
        <p>
          Eu sit placerat nunc adipiscing. Laoreet amet commodo nunc, morbi urna
          ornare. Leo laoreet dignissim massa elementum nullam sem pellentesque
          feugiat in. Lectus dolor pharetra tortor viverra netus eget mi in in.
        </p>
        <p>
          Quis consequat velit a vestibulum. Porta etiam odio sit at. At
          adipiscing posuere rhoncus non vivamus lobortis sed.
        </p>
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
  assetUrl: PropTypes.string,
}

IntegrationsSection.defaultProps = {
  assetUrl: ``,
}

export default IntegrationsSection
