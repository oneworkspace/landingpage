import React from "react"
import Logo from "../../images/logo.png"

export default function Nav({ siteTitle }) {
  return (
    <nav className="flex items-center justify-between">
      <img className="h-16 w-16" src={Logo} alt={siteTitle} />
      <a
        href="https://forms.gle/nzzq9Vuvc51Kok3F9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-black rounded-full text-black py-2 px-4 uppercase">
          Login
        </button>
      </a>
    </nav>
  )
}
