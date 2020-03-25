/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

type Props = {
  isDark: boolean;
  toggle?: (e: any) => void;
};

const ColorModeToggle = ({ isDark, toggle }: Props) => (
  <button
    onClick={toggle}
    type="button"
    aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    css={tw`absolute right-0 top-0 mt-1 mr-1 lg:mt-3 lg:mr-3 bg-transparent border-0 text-2xl lg:text-4xl cursor-pointer`}
  >
    {isDark ? '☀️' : '🌜'}
  </button>
);

export default ColorModeToggle;
