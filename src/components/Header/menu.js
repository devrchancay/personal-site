import React from 'react'
import { Link } from 'gatsby'
import enMessages from '../../locales/en/Menu'
import esMessages from '../../locales/es/Menu'

const messages = {
  en: enMessages,
  es: esMessages,
}

const Menu = ({ locale }) => {
  const path = locale === 'en' ? '' : '/es/'
  return (
    <ul className="pt-6 list-reset w-full flex justify-center">
      <li className="px-2">
        <Link className="text-gray-primary hover:text-blue-primary" to={path}>
          {messages[locale].home.label}
        </Link>
      </li>
      <li className="px-2">
        <Link
          className="text-gray-primary hover:text-blue-primary"
          to={`/about/${path}`}
        >
          {messages[locale].about.label}
        </Link>
      </li>
      <li className="px-2">
        <a
          className="text-gray-primary hover:text-blue-primary"
          href="https://medium.com/@devrchancay"
          target="_blank"
          rel="noopener noreferrer"
        >
          {messages[locale].blog.label}
        </a>
      </li>
    </ul>
  )
}

export default Menu
