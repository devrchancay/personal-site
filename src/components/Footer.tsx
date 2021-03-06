/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { Social } from '../components';

const Footer = () => {
  return (
    <footer
      css={tw`mt-8 flex flex-col justify-center bg-background-muted w-full p-4 items-center`}
    >
      <div
        css={tw`flex w-full flex flex-col md:flex-row content-center items-center`}
      >
        <div
          css={tw`text-2xl font-bold w-full md:w-1/3 py-2 flex justify-center md:justify-start`}
        >
          <h3 css={tw`text-secondary font-sans`}>Ramón Chancay Ortega</h3>
        </div>
        <div
          css={tw`order-last md:order-none w-full md:w-1/3 py-2 flex justify-center items-center content-center`}
        >
          <small css={tw`text-secondary text-md font-bold font-sans`}>
            Made with <span css={tw`text-red-500`}>❤</span> using GatsbyJS and
            Netlify
          </small>
        </div>
        <div css={tw`w-full md:w-1/3 py-2 flex justify-center md:justify-end`}>
          <Social size={35} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
