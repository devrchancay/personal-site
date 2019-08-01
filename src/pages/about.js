import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Menu from '../components/Header/menu';
import SEO from '../components/seo';

const About = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              experience {
                id
                title
                company
                location
                description {
                  id
                  text
                }
                startDate
                endDate
                time
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <SEO
              title="Front-end Developer and Educator"
              keywords={[
                `freelance`,
                `gatsby`,
                `javascript`,
                `react`,
                `javascript courses`,
                `it consulting`,
              ]}
            />

            <header className="w-full">
              <Menu />
            </header>

            <div className="bg-white flex justify-center py-8 flex-col font-sans content-center items-center md:h-80">
              <div className="container py-4 flex flex-col items-center content-center md:justify-start sm:justify-center">
                <h1 className="my-4 text-center flex flex-col md:flex-row text-3xl md:text-6xl text-animation">
                  <span className="text-gray-800 mx-1 font-bold">About</span>
                  <span className="text-blue-400 mx-1 font-bold">
                    {data.site.siteMetadata.title}
                  </span>
                </h1>
              </div>
            </div>

            <div className="bg-gray-200 flex justify-center py-8 flex-col font-sans content-center items-center md:h-80">
              <div className="container py-4 flex flex-col md:flex-row items-center content-center md:items-start md:justify-start">
                <div className="md:w-1/2 p-2">
                  <h3 className="text-3xl text-blue-400">Ramón Chancay</h3>
                  <ul className="pt-4">
                    <li className="my-0 text-sans">
                      <span className="font-bold pr-1">27 years old</span>
                    </li>

                    <li className="my-0 text-sans">
                      <span className="font-bold pr-1">$25 / hour</span>
                    </li>
                    <li className="my-0 text-sans">
                      <span className="font-bold pr-1">Guayaquil, Ecuador</span>
                    </li>
                    <li className="my-0 text-sans">
                      <span className="font-bold pr-1">
                        ramon.chancay@gmail.com
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 mt-8 flex justify-center content-center items-center hidden md:block">
                  <p className="font-sans w-2/3">
                    Front-end / Back-end Developer in Guayaquil Ecuador.
                    Currently at Everymundo , previously at El Universo. I enjoy
                    teaching and sharing what I know. I give professional advice
                    to developers and companies. My wife and my children are
                    everything in my life.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white flex justify-start py-8 flex-col font-sans content-center items-center md:h-80">
              <div className="container py-4 flex flex-col items-center content-center md:justify-start sm:justify-center">
                <h2 className="my-2 text-center flex flex-col md:flex-row text-4xl md:text-5xl text-animation">
                  Experience
                </h2>
                <h3 className="text-center flex flex-col md:flex-row text-xl md:text-xl text-animation text-gray-500">
                  Jobs as a Web developer.
                </h3>
              </div>
              <div className="container md:mt-8 py-4 flex flex-col items-center content-center md:justify-start sm:justify-center">
                {data.site.siteMetadata.experience.map(experience => (
                  <div
                    className="w-5/6 md:w-2/3 my-2 flex flex-col md:flex-row  border-gray-300 border-b pb-2"
                    key={experience.id}
                  >
                    <div className="md:w-1/3 flex justify-center content-start  mb-6 md:mb-0 items-start pt-4">
                      <div
                        className="shadow-lg px-2 py-6 bg-blue-400"
                        style={{ minWidth: 190, maxWidth: 190 }}
                      >
                        <p className="text-white text-center">
                          {experience.company}
                        </p>
                        <p className="text-center">{experience.time}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <h4 className="text-center md:text-left text-xl md:text-3xl font-sans my-2">
                        {experience.title}
                      </h4>
                      <p className="text-gray-500">
                        {experience.startDate} - {experience.endDate}
                      </p>
                      <ul className="text-left mt-8 md:mt-0 font-sans">
                        {experience.description.map(description => {
                          return (
                            <li className="my-1" key={description.id}>
                              {description.text}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

export default About;
