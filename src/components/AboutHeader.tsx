/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { Menu } from '.';

const Divider = styled.svg`
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));

  --transform-translate-x: 50%;
`;

const AboutHeader = () => {
  return (
    <div css={tw`relative bg-white overflow-hidden`}>
      <div css={tw`max-w-screen-xl mx-auto`}>
        <div
          css={tw`relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
        >
          <div css={tw`pt-6 px-4 sm:px-6 lg:px-8`}>
            <nav
              css={tw`relative flex items-center justify-between sm:h-10 lg:justify-start`}
            >
              <div
                css={tw`flex items-center flex-grow flex-shrink-0 lg:flex-grow-0`}
              >
                <div
                  css={tw`flex items-center justify-between w-full md:w-auto`}
                ></div>
              </div>
            </nav>
          </div>

          <div css={tw`absolute top-0 inset-x-0 p-2 md:hidden`}>
            <div css={tw`rounded-lg shadow-md`}>
              <div css={tw`rounded-lg bg-white shadow-xs overflow-hidden`}>
                <div css={tw`px-5 pt-4 flex items-center justify-between`}>
                  <div>
                    <img
                      css={tw`h-8 w-auto`}
                      src="/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div css={tw`-mr-2`}>
                    <button
                      type="button"
                      css={tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500`}
                    >
                      <svg
                        css={tw`h-6 w-6`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            css={tw`mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`}
          >
            <div css={tw`sm:text-center lg:text-left`}>
              <h2
                css={tw`text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl`}
              >
                Ramón Chancay Ortega
                <br />
                <span css={tw`text-indigo-600 xl:text-4xl`}>
                  Frontend Developer
                </span>
              </h2>
              <p
                css={tw`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`}
              >
                Front-end / Back-end Developer in Guayaquil Ecuador. Currently
                at Everymundo, previously at El Universo. I enjoy teaching and
                sharing what I know. I give professional advice to developers
                and companies. My wife and my children are everything in my
                life.
              </p>
              <div
                css={tw`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start`}
              >
                <div css={tw`rounded-md shadow`}>
                  <a
                    href="#"
                    css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10`}
                  >
                    Contact me
                  </a>
                </div>
                <div css={tw`mt-3 sm:mt-0 sm:ml-3`}>
                  <a
                    href="#"
                    css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10`}
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Divider
            css={tw`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white`}
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Divider>
        </div>
      </div>
      <div css={tw`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2`}>
        <img
          css={tw`h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full`}
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutHeader;
