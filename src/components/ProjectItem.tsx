import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import Image from 'gatsby-image';

const ProjectItem = ({ slug, name, excerpt, image }) => {
  return (
    <div>
      <article css={tw`flex flex-col lg:flex-row-reverse`}>
        <div css={tw`lg:w-1/2`}>
          <Image fluid={image} css={tw`rounded`} />
        </div>
        <div css={tw`lg:w-1/2 lg:px-1`}>
          <h3 css={tw`my-2`}>{name}</h3>
          <p css={tw`text-secondary`}>{excerpt}</p>
          <a target="blank" css={tw`my-2 block text-xl`} href={slug}>
            See project »
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProjectItem;
