/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

type HeroProps = {
  name: String;
  position: String;
};

const Hero = ({ name, position }: HeroProps) => {
  return (
    <div
      css={tw`bg-white flex justify-center py-6 pt-4 flex-col font-sans content-center items-center md:h-80`}
    >
      <div
        css={tw` py-4 flex flex-col items-center content-center md:justify-start sm:justify-center`}
      >
        <h1
          css={tw`my-4 text-center flex flex-col md:flex-row text-4xl md:text-6xl text-animation`}
        >
          <span css={tw`text-gray-800 mx-1 font-bold`}>Hello I'm</span>
          <span css={tw`text-blue-400 mx-1 font-bold`}>{name}</span>
        </h1>
        <h2 css={tw`text-gray-800 text-center text-xl md:text-3xl m-0`}>
          {position}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
