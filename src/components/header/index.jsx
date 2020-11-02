import PropTypes from "prop-types"
import React from "react"

import Logo from "../../images/logo.png"
import Laptop from "../../images/laptop.png"
import DashboardDesign from "../../images/dashboard-design.png"

const Header = ({ siteTitle, headerDescription, owLogoUrl }) => {
  return (
    <header className="text-white px-12 h-screen pt-32 mb-24">
      <img
        className="h-20 w-20 rounded-full bg-none"
        src={Logo}
        alt="Oneworkspace"
      />
      <div className="flex space-x-24">
        <div className="w-1/5">
          <div className="text-left">
            <h1 className="text-5xl my-4 font-hairline">{siteTitle}</h1>
            <p className="font-light">{headerDescription}</p>
            <button className="bg-primary px-6 py-2 mt-3 mb-1 rounded-full text-xs text-white font-light">
              SIGNUP FOR ALPHA
            </button>
            <p className="text-xs">and get OneWorkspace free for, for 3 yrs</p>
          </div>
        </div>
        <div className="w-3/5">
          <div class="relative">
            <img
              class="absolute top-0 left-0"
              style={{ width: "826px", height: "410px" }}
              className="object-contain "
              src={Laptop}
              alt="Laptop"
            />
            <img
              class="cursor-pointer absolute top-0 left-0 rounded-md"
              style={{
                width: "510px",
                height: "318px",
                marginLeft: "157px",
                marginTop: "28px",
              }}
              src={DashboardDesign}
              alt="Dashboard Design"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
