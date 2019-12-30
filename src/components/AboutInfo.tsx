/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import Image from 'gatsby-image';

type AboutInfoProps = {
  name: string;
  description: string;
  avatar: any;
};

const AboutInfo = ({ name, description, avatar }: AboutInfoProps) => {
  return (
    <div
      css={tw`bg-gray-200 flex justify-around flex-col md:flex-row-reverse items-center content-center py-8`}
    >
      <div
        css={tw`px-6 sm:flex sm:justify-center sm:content-center sm:items-center`}
      >
        <Image
          style={{ minWidth: 300, minHeight: 300 }}
          css={tw`w-full`}
          fluid={avatar}
        />
      </div>
      <div
        css={tw`flex flex-col md:flex-row-reverse md:justify-around md:content-center md:items-center`}
      >
        <div css={tw`px-6 py-2`}>
          <h3
            css={tw`font-sans text-center text-gray-800 my-2 md:text-3xl md:my-4 font-bold md:text-left`}
          >
            {name}
          </h3>
          <div
            css={tw`font-serif text-gray-800 py-1 md:text-xl leading-tight`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
