import React from 'react';
import CardProject from './CardProject';

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col justify-center items-center content-center py-8 md:w-full">
      <div className="container">
        <h2 className="text-2xl font-sans font-bold text-center md:text-left text-gray-800 mx-2 font-bold pb-8">
          Featured projects.
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
    </div>
  );
};

export default Projects;
