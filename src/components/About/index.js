import React from 'react'
import avatar from '../../images/avatar.svg'

const About = () => (
  <div className="bg-site-color flex flex-col md:flex-row-reverse justify-center items-center content-center py-8">
    <div className="container flex flex-col md:flex-row-reverse md:justify-around md:content-center md:items-center">
      <div className="px-6 sm:flex sm:justify-center sm:content-center sm:items-center">
        <img src={avatar} alt="Ramon Chancay" className="w-full" />
      </div>
      <div className="px-6 py-2">
        <h3 className="font-sans text-left text-gray-primary my-2 md:text-3xl md:my-4">
          Ramón Chancay Ortega
        </h3>
        <p className="font-sans text-gray-primary py-1 md:text-xl">
          Desarrollador web full stack en Guayaquil Ecuador.
        </p>
        <p className="font-sans text-gray-primary py-1 md:text-xl">
          Actualmente en{' '}
          <a
            href="https://www.eluniverso.com"
            className="no-underline text-blue-primary font-bold"
          >
            El Universo
          </a>
        </p>
        <p className="font-sans text-gray-primary py-1 md:text-xl">
          Disfruto de la construcción de cosas con código.
        </p>
        <p className="font-sans text-gray-primary py-1 md:text-xl">
          Organizador y Speaker en Meetups por pizza y cerveza. 🍕🍻
        </p>
        <p className="font-sans text-gray-primary py-1 md:text-xl">
          Son todo en mi vida{' '}
          <a
            href="https://twitter.com/heydisrrael"
            target="_blank"
            className="no-underline text-blue-primary font-bold"
          >
            Heydy
          </a>{' '}
          y mis hijos.
        </p>
      </div>
    </div>
  </div>
)

export default About
