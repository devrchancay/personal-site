/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

import { CardProject } from '../components';

const Projects = ({ projects }) => {
  return (
    <div
      css={tw`flex flex-col justify-center items-center content-center py-8 md:w-full`}
    >
      <div css={tw`px-4`}>
        <h2
          css={tw`text-2xl font-sans font-bold text-center md:text-left text-gray-800 mx-2 font-bold pb-8`}
        >
          Featured projects
        </h2>
      </div>
      <div css={tw`px-4 flex flex-col md:flex-row flex-wrap content-start`}>
        {projects.map(project => (
          <div
            css={tw`w-full px-8 md:w-1/3 md:px-1 py-2`}
            key={project.node.id}
          >
            <CardProject {...project.node} />
          </div>
        ))}
      </div>
      <div
        css={tw`px-4 flex flex-col sm:justify-center md:flex-row items-center p-4 pb-0`}
      >
        <a
          href="https://github.com/devrchancay"
          target="__blank"
          css={tw`bg-gray-300 hover:fill-white hover:bg-blue-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
        >
          <span css={tw`font-sans`}>view on github</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
