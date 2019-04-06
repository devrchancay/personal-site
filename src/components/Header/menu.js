import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <ul className="pt-6 list-reset w-full flex justify-center">
      <li className="px-2">
        <Link className="text-gray-primary hover:text-blue-primary" to={"/"}>
          Home
        </Link>
      </li>
      <li className="px-2">
        <Link
          className="text-gray-primary hover:text-blue-primary"
          to={`/blog`}
        >
          Blog
        </Link>
      </li>
    </ul>
  )
}

export default Menu
