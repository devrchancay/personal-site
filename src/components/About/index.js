import React from 'react';
import avatar from '../../images/avatar.svg';

const About = () => (
  <div className="bg-site-color flex flex-col md:flex-row-reverse justify-center items-center content-center py-8">
    <div className="container flex flex-col md:flex-row-reverse md:justify-around md:content-center md:items-center">
      <div className="px-6 sm:flex sm:justify-center sm:content-center sm:items-center">
        <img src={avatar} alt="Ramon Chancay" className="w-full" />
      </div>
      <div className="px-6 py-2">
        <h3 className="font-sans text-left text-gray-primary my-2 md:text-3xl md:my-4">
          Ramón Chancay Ortega
        </h3>

        <p className="font-serif text-gray-primary py-1 md:text-xl">
          Front-end / Back-end Developer in Guayaquil Ecuador.
        </p>
        <p className="font-serif text-gray-primary py-1 md:text-xl">
          Currently at{' '}
          <a
            className="no-underline text-blue-primary font-bold"
            href="https://everymundo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Everymundo
          </a>{' '}
          , previously at{' '}
          <a
            className="no-underline text-blue-primary font-bold"
            href="https://eluniverso.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            El Universo
          </a>
          .
        </p>
        <p className="font-serif text-gray-primary py-1 md:text-xl">
          I enjoy teaching and sharing what I know.
        </p>
        <p className="font-serif text-gray-primary py-1 md:text-xl">
          I give professional advice to developers and companies.
        </p>
        <p className="font-serif text-gray-primary py-1 md:text-xl">
          My{' '}
          <a
            href="https://twitter.com/@heydisrrael"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-blue-primary font-bold"
          >
            wife
          </a>{' '}
          and my children are everything in my life.
        </p>
      </div>
    </div>
  </div>
);

export default About;
