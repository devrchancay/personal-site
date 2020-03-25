/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

type Props = {
  isDark: boolean;
  toggle?: (e: any) => void;
};

const Icon = styled.div<Props>`
position: relative;
width: 24px;
height: 24px;
border-radius: 50%;
transition: all 0.45s ease;
${props =>
  props.isDark &&
  `
  box-shadow: inset 8px -8px 0px 0px var(--color-secondary);
  transform: scale(0.55);
  overflow:visible;
  `}

${props =>
  !props.isDark &&
  `
    border: solid 4px var(--color-secondary); 
    overflow: hidden;
    `}

&:before: {
  content: "";
  position: absolute;
  right: -9px;
  top: -9px;
  height: 24px;
  width: 24px;
  ${props =>
    props.isDark &&
    `
    border: 2px solid var(--color-secondary);
    transform: translate(14px, -14px);
    opacity:0;
  `}
  ${props =>
    !props.isDark &&
    `
    border: none;
    transform:translate(0, 0);
    opacity: 1;
  `}
  borderRadius:50%;

  transition: transform 0.45s ease;
},
'&:after': {
  content: "",
  width: 8px;
  height: 8px;
  borderRadius: 50%;
  margin: -4px 0 0 -4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.35s ease;
  box-shadow: 0 -23px 0 var(--color-secondary), 0 23px 0 var(--color-secondary), 23px 0 0 var(--color-secondary), -23px 0 0 var(--color-secondary), 15px 15px 0 var(--color-secondary), -15px 15px 0 var(--color-secondary), 15px -15px 0 var(--color-secondary), -15px -15px 0 var(--color-secondary)
  ${props =>
    props.isDark &&
    `
    
    transform: scale(1);
    
  `}
  ${props =>
    !props.isDark &&
    `
    transform: scale(0);
  `}
}

`;

const ColorModeToggle = ({ isDark, toggle }: Props) => (
  <button
    onClick={toggle}
    type="button"
    aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    css={{
      opacity: 0.65,
      position: `absolute`,
      borderRadius: `5px`,
      width: `40px`,
      height: `25px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      transition: `opacity 0.3s ease`,
      border: `none`,
      outline: `none`,
      background: `none`,
      cursor: `pointer`,
      padding: 0,
      appearance: `none`,
      right: 7,
      top: 7
    }}
  >
    <Icon isDark={isDark} />
  </button>
);

export default ColorModeToggle;
