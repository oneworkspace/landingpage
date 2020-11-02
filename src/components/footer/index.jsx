import PropTypes from "prop-types"
import React from "react"

import Facebook from "../../images/facebook.svg"
import Twitter from "../../images/twitter.svg"
import Instagram from "../../images/instagram.svg"
import LinkedIn from "../../images/linkedin.svg"

const Footer = ({ recentBlog, socialLinks }) => {
  return (
    <footer className="w-10/12 mx-auto flex justify-between mb-12 text-sm">
      <div className="w-1/4">
        <div className="uppercase pb-2 font-semibold">Company</div>
        <div className="border-b-2 border-primary w-12 mb-4"></div>
        <div className="mb-3">
          <a className="cursor-pointer uppercase" href="/">
            Contact
          </a>
        </div>
        <div className="mb-3">
          <a className="cursor-pointer uppercase" href="/">
            Press
          </a>
        </div>
        <div className="mb-3">
          <a className="cursor-pointer uppercase" href="/">
            Blog
          </a>
        </div>
      </div>
      <div className="w-2/4">
        <div className="uppercase pb-2 text-sm font-semibold">Recent Blog</div>
        <div className="border-b-2 border-primary w-12 mb-4"></div>
        {recentBlog.map((_blogItem, _index) => {
          return (
            <div key={_index} className="text-left text-gray-600 mb-2">
              <p>{_blogItem.title}</p>
              <p className="text-xs">
                {_blogItem.description}
                <span className="text-primary ml-3 cursor-pointer">
                  <a href={_blogItem.link}>Read More</a>
                </span>
              </p>
            </div>
          )
        })}
      </div>
      <div className="w-1/4">
        <div className="uppercase pb-2 text-sm font-semibold">Social Links</div>
        <div className="border-b-2 border-primary w-12 mb-4"></div>
        <div className="mb-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex items-center"
            href={socialLinks?.facebook}
          >
            <img className="mr-2 h-8 w-8" src={Facebook} alt="facebook" />
            Facebook
          </a>
        </div>
        <div className="mb-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex items-center"
            href={socialLinks?.twitter}
          >
            <img className="mr-2 h-8 w-8" src={Twitter} alt="twitter" />
            Twitter
          </a>
        </div>
        <div className="mb-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex items-center"
            href={socialLinks?.instagram}
          >
            <img className="mr-2 h-8 w-8" src={Instagram} alt="instagram" />
            Instagram
          </a>
        </div>
        <div className="mb-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex items-center"
            href={socialLinks?.linkedin}
          >
            <img className="mr-2 h-8 w-8" src={LinkedIn} alt="linkedin" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
Footer.propTypes = {
  recentBlog: PropTypes.array,
  socialLinks: PropTypes.object,
}

Footer.defaultProps = {
  recentBlog: [],
  socialLinks: {},
}

export default Footer
