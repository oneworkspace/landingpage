import React, { useState } from "react"
import Auth from "../../images/auth.png"

export default function Stages() {
  const [state, setState] = useState(0)
  return (
    <section className="flex container mx-auto items-center my-32">
      <section className="flex flex-col w-2/12 mr-16">
        {["one", "two", "three", "four", "five"].map((item, index) => (
          <span
            className={`capitalize cursor-pointer text-center text-xl rounded-full my-4 px-4 py-2 ${
              index === state
                ? "bg-purple-600 text-white border border-purple-600"
                : "border-black border"
            }`}
            key={index}
            onClick={() => setState(index)}
          >
            Stage {item}
          </span>
        ))}
      </section>
      <img src={Auth} alt="Stages" className="w-10/12" />
    </section>
  )
}
