import Link from 'next/link';
import { useCallback, useMemo, useState, memo } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const classMenu = useMemo(() => (isOpen ? 'w-screen h-screen' : 'w-0 h-0'), [
    isOpen,
  ]);

  return (
    <header className="py-2 px-2 flex justify-between lg:py-3">
      <a className="w-10 h-10 bg-gray-900 p-2 rounded-lg text-white flex justify-center items-center text-xl lg:w-12 lg:h-12">
        RC
      </a>
      <div className="block flex justify-center items-center lg:hidden">
        <button onClick={handleMenu} className="w-10 text-gray-900 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${classMenu} text-gray-700 transition-all duration-300 overflow-hidden absolute left-0 pl-2 top-0 w-full bg-white space-y-6  lg:flex lg:bg-white lg:static lg:space-y-0 lg:h-auto lg:w-auto lg:space-x-5 lg:px-0 lg:py-0 items-center`}
      >
        <li className="pt-12 lg:pt-0">
          <Link href="/about">
            <a className="font-hind text-5xl lg:text-xl hover:text-gray-900">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a className="font-hind text-5xl lg:text-xl hover:text-gray-900">
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="font-hind text-5xl lg:text-xl hover:text-gray-900">
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="font-hind text-5xl lg:text-xl hover:text-gray-900">
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default memo(Header);
