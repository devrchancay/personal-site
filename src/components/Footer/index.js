import React from 'react';
import Social from '../Common/Social';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-gray-200 w-full p-4 md:p-8">
      <div className="container flex w-full px-4 flex flex-col md:flex-row">
        <div className="text-2xl font-bold w-full md:w-1/3 py-2 flex justify-center md:justify-start">
          <h3 className="font-sans">Ramón Chancay Ortega</h3>
        </div>
        <div className="w-full md:w-1/3 py-2 flex justify-center items-center content-center">
          <small className="text-md font-bold font-sans">
            Made with <span className="text-red-500">❤</span> using GatsbyJS
          </small>
        </div>
        <div className="w-full md:w-1/3 py-2 px-4 flex justify-center md:justify-end">
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
