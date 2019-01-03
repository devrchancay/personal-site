import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ locale }) => {
  return (
    <ul className="pt-6 list-reset w-full flex justify-center">
      <li className="px-2">
        <Link className="text-gray-primary hover:text-blue-primary" to={'/'}>
          Home
        </Link>
      </li>
      <li className="px-2">
        <Link
          className="text-gray-primary hover:text-blue-primary"
          to={'/about'}
        >
          About me
        </Link>
      </li>
      {/* <li className="px-2">
      <Link
        className="text-gray-primary hover:text-blue-primary"
        to={'/contact'}
      >
        Contact us
      </Link>
    </li> */}
    </ul>
  )
}

export default Menu
