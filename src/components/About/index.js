import React from 'react'
import avatar from '../../images/avatar.svg'

import enMessages from '../../locales/en/Home'
import esMessages from '../../locales/es/Home'

const messages = {
  en: enMessages,
  es: esMessages
}

const About = ({ locale }) => (
  <div className="bg-site-color flex flex-col md:flex-row-reverse justify-center items-center content-center py-8">
    <div className="container flex flex-col md:flex-row-reverse md:justify-around md:content-center md:items-center">
      <div className="px-6 sm:flex sm:justify-center sm:content-center sm:items-center">
        <img src={avatar} alt="Ramon Chancay" className="w-full" />
      </div>
      <div className="px-6 py-2">
        <h3 className="font-sans text-left text-gray-primary my-2 md:text-3xl md:my-4">
          {messages[locale].fullName}
        </h3>

        {messages[locale].about.map((item, key) => (
          <p key={key} className="font-sans text-gray-primary py-1 md:text-xl" dangerouslySetInnerHTML={{__html : item }} />
        ))}
      </div>
    </div>
  </div>
)

export default About
