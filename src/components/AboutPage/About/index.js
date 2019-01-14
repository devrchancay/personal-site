import React from 'react'

const AboutResume = ({ locale }) => (
  <div className="py-8 bg-site-color flex justify-center font-sans">
    <div className="container flex flex-col py-8 md:flex-row">
      <div className="w-full flex justify-center pb-4 md:w-1/3">
        <div className="w-full px-4 md:px-6">
          <h2 className="text-left md:my-2">Ramon Chancay</h2>
          <ul className="list-reset mt-4 text-xl">
            <li className="my-1">
              <span className="font-bold">Age:</span> 26
            </li>
            <li className="my-1">
              <span className="font-bold">Job:</span> Frontend Engineer
            </li>
            <li className="my-1">
              <span className="font-bold">Company:</span> Everymundo
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-2/3 pt-4">
        <div className="w-full px-4 md:px-6">
          <p className="py-2 text-justify">
            My name is Ramón Chancay I'm a 26 years old Front End Engineer based
            in Ecuador. Currently I'm working at a company called
            <strong> Everymundo</strong>, as a Front End Engineer.
          </p>
          <p className="py-2 text-justify">
            I enjoy building things with code in my free time and helping
            developers improve their skills, I write in medium in Spanish.
          </p>
          <p className="py-2 text-justify">
            I'm a fan of remote work and Javascript technologies, you can ask
            for help with Javascript React, Vue and Nodejs.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default AboutResume
