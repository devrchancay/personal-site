import React from 'react';
import Social from '../Common/Social';
// import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-gray-200 w-full p-4 md:p-8">
      <div className="container flex w-full px-4 flex flex-col md:flex-row">
        <div className="text-2xl font-bold w-full md:w-1/2 py-2 flex justify-center md:justify-start">
          <h3 className="font-sans">Ramón Chancay Ortega</h3>
        </div>
        <div className="w-full md:w-1/2 py-2 px-4 flex justify-center md:justify-end">
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
