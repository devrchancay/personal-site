import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="bg-white flex justify-center py-8 flex-col font-sans content-center items-center md:h-160">
    <div className="container py-8 flex flex-col items-center content-center md:justify-start sm:justify-center">
      <h1 className="my-4 text-center flex flex-col md:flex-row text-4xl md:text-6xl">
        <span className="text-gray-primary mx-1">Hola Soy</span>
        <span className="text-blue-primary mx-1">Ramón Chancay</span>
      </h1>
      <h2 className="text-gray-primary text-center text-xl font-bold md:text-3xl">
        Desarrollo Full Stack Web 💻
      </h2>
    </div>
    <div className="container flex justify-center">
      <a
        href="mailto:ramonchancayortega@gmail.com"
        className="btn bg-linear-blue text-white font-normal no-underline py-3 md:py-4 px-4 md:px-8 rounded-lg"
      >
        Contactame
      </a>
    </div>
  </div>
)

export default Header
