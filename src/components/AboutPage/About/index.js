import React from 'react'
import en from '../../../locales/en/About'
import es from '../../../locales/es/About'

const messages = {
  en,
  es,
}

const AboutResume = ({ locale }) => (
  <div className="py-8 bg-site-color flex justify-center font-sans">
    <div className="container flex flex-col py-8 md:flex-row">
      <div className="w-full flex justify-center pb-4 md:w-1/3">
        <div className="w-full px-4 md:px-6">
          <h2 className="text-left md:my-2">Ramón Chancay</h2>
          <ul className="list-reset mt-4 text-xl">
            {messages[locale].detailList.map((p, i) => (
              <li key={i} className="my-1">
                <span className="font-bold">{p.label}:</span> {p.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:w-2/3 pt-4">
        <div className="w-full px-4 md:px-6">
          {messages[locale].bio.map((p, i) => (
            <p key={i} className="py-1 text-justify">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default AboutResume
