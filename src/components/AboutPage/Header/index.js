import React from 'react'

const HeaderAbout = ({ locale }) => (
  <div className="py-8 flex justify-center font-sans">
    <div className="py-8">
      <h1 className="flex flex-col md:flex-row text-center text-5xl text-gray-primary text-animation">
        <span className="mx-1">About</span>
        <span className="text-blue-primary mx-1">Ramón Chancay</span>
      </h1>
    </div>
  </div>
)

export default HeaderAbout
