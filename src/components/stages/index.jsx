import React, { useState } from "react"
import "./styles.css"
import Auth from "../../images/auth.png"

export default function Stages() {
  const [state, setState] = useState(0)
  return (
    <section className="flex container mx-auto items-center my-32">
      <section className="flex flex-col w-2/12 mr-16 relative">
        <div className="connector-line" />
        {["one", "two", "three", "four", "five"].map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`h-4 w-4 mr-4 rounded-full ${
                index === state
                  ? "stage-selected text-white"
                  : "stage-not-highlighted"
              }`}
            />
            <span
              className={`capitalize cursor-pointer text-center text-xl rounded-full w-3/4 my-4 px-4 py-2 ${
                index === state
                  ? "stage-selected text-white"
                  : "stage-not-highlighted"
              }`}
              onClick={() => setState(index)}
            >
              Stage {item}
            </span>
          </div>
        ))}
      </section>
      <img src={Auth} alt="Stages" className="w-10/12" />
    </section>
  )
}
