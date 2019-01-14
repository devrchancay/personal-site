import React from 'react'
import { Link } from 'gatsby'

const Lang = ({ locale }) => (
  <ul className="list-reset w-full flex justify-center bg-blue">
    <li className="p-1">
      <Link
        className="text-2xl no-underline hover:no-underline font-black"
        to={locale === 'es' ? '/en' : '/'}
      >
        {locale === 'es' ? (
          <span role="img" aria-label="English version">
            🇺🇸
          </span>
        ) : (
          <span role="img" aria-label="English version">
            🇪🇸
          </span>
        )}{' '}
        <span className="text-white">
          {locale === 'es' ? 'English Version' : 'Version en español'}
        </span>
      </Link>
    </li>
  </ul>
)

export default Lang
