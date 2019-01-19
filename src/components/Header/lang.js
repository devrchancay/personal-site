import React from 'react'
import { Link } from 'gatsby'
import locales from '../../locales/'

const Lang = ({ locale, pathname }) => {
  //TODO I'm not proud of this
  const alternative = locales[locale].default
    ? `${pathname}/es`
    : pathname.replace('es', '')

  return (
    <ul className="list-reset w-full flex justify-center bg-blue">
      <li className="p-1">
        <Link
          className="text-2xl no-underline hover:no-underline font-black"
          to={alternative}
        >
          {locale === 'es' ? (
            <span role="img" aria-label="English version">
              🇺🇸
            </span>
          ) : (
            <span role="img" aria-label="Version en español">
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
}

export default Lang
