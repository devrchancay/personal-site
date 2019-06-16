import React from 'react';

import CardProject from './CardProject';

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col justify-center items-center content-center py-8 md:w-full">
      <div className="container">
        <h2 className="text-2xl font-sans font-bold text-center md:text-left text-gray-800 mx-2 font-bold pb-8">
          Featured projects
        </h2>
      </div>
      <div className="container flex flex-col md:flex-row flex-wrap content-start">
        {projects.map(project => (
          <div
            className="w-full px-8 md:w-1/3 md:px-1 py-2"
            key={project.node.id}
          >
            <CardProject {...project.node} />
          </div>
        ))}
      </div>
      <div className="container flex flex-col sm:justify-center md:flex-row items-center p-4 pb-0">
        <a
          href="https://github.com/devrchancay"
          target="__blank"
          className="bg-gray-300 hover:fill-white hover:bg-blue-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span className="font-sans">view on github</span>
          <svg
            className="fill-current w-4 h-4 ml-2 hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="268.832px"
            height="268.832px"
            viewBox="0 0 268.832 268.832"
          >
            <g>
              <path d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5   c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678   c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z" />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
