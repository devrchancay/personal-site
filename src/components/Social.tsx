/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { hrefIcons } from '../utils';

interface Item {
  title: string;
  icon_name: string;
  link: {
    url: string;
    target: string;
  };
}

type SocialProps = {
  items: Item[];
};

const Social = ({ items }: SocialProps) => {
  return (
    <div css={tw`flex justify-center`}>
      <ul css={tw`list-none flex p-0`}>
        {items.map(item => (
          <li key={item.title} css={tw`w-12 px-2 flex justify-center`}>
            <a
              target={item.link.target}
              href={item.link.url}
              title={item.title}
            >
              <img
                css={tw`w-full`}
                title={item.title}
                src={hrefIcons[item.icon_name]}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
