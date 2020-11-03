import { memo } from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <main className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8">
        <div className="py-8">
          <h1 className="text-2xl font-hind">
            Hi, my name is{' '}
            <a
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 font-black"
              href="https://linkedin.com/in/devrchancay"
              target="blank"
            >
              Ramón Chancay
            </a>
          </h1>
          <p className="text-3xl my-2 font-sans lg:text-5xl leading-tight">
            I’m a Freelance developer specializing in Javascript, React & React
            Native.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 space-x-4">
            <Link href="/projects">
              <button className="border py-2 px-5 rounded font-sans border-teal-400 text-teal-400">
                My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-teal-400 py-2 px-5 rounded font-sans bg-gradient-to-r from-teal-400 to-blue-500 text-white">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default memo(Hero);
