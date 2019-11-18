import React from 'react';
import { graphql } from 'gatsby';
import { format, formatDistanceStrict } from 'date-fns';
import Image from 'gatsby-image';

import Menu from '../components/Header/menu';
import SEO from '../components/seo';

const About = ({ data }) => {
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

      <div className="flex flex-col justify-center items-center px-2 border-bottom border-top-0">
        <div className="container flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 md:p-8">
            <Image
              className="md:p-8"
              fluid={data.profilePhoto.childImageSharp.fluid}
            />
            <p className="font-sans text-center my-2 font-bold">
              I'm the one who wears glasses <span aria-hidden="true">🤓</span>
            </p>
          </div>
          <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between md:pb-8 md:pt-2">
            <h1 className="my-4 text-left text-3xl md:text-5xl text-animation">
              <span className="text-gray-800 mx-1 font-bold">About</span>
            </h1>
            <ul className="mb-4 md:mb-8">
              <li className="font-sans text-xl m-0 ml-2">
                - Husband, parent, developer.
              </li>
              <li className="font-sans text-xl m-0 ml-2">
                - Open Source on default.
              </li>
              <li className="font-sans text-xl m-0 ml-2">
                - Creator of technology memes.
              </li>
            </ul>
          </div>
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
                <span className="font-bold pr-1">hola@ramonchancay.me</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 flex justify-center content-center items-center hidden md:block">
            <p className="font-sans w-2/3">
              Front-end / Back-end Developer in Guayaquil Ecuador. Currently at
              Everymundo , previously at El Universo. I enjoy teaching and
              sharing what I know. I give professional advice to developers and
              companies. My wife and my children are everything in my life.
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
          {data.allExperienceYaml.edges.map(({ node }) => (
            <div
              className="w-5/6 md:w-2/3 my-2 flex flex-col md:flex-row  border-gray-300 border-b pb-2"
              key={node.id}
            >
              <div className="md:w-1/3 flex justify-center content-start  mb-6 md:mb-0 items-start pt-4">
                <div
                  className="shadow-lg px-2 py-6 bg-blue-400"
                  style={{ minWidth: 190, maxWidth: 190 }}
                >
                  <p className="text-white text-center">{node.company}</p>
                  <p className="text-center">
                    {formatDistanceStrict(
                      new Date(node.startDate),
                      node.endDate ? new Date(node.endDate) : new Date(),
                      { roundingMethod: 'floor' },
                    )}
                  </p>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h4 className="text-center md:text-left text-xl md:text-3xl font-sans my-2">
                  {node.title}
                </h4>
                <p className="text-gray-500">
                  {format(new Date(node.startDate), 'MMMM yyyy')} -{' '}
                  {node.endDate
                    ? format(new Date(node.endDate), 'MMMM yyyy')
                    : 'Present'}
                </p>
                <ul className="text-left mt-8 md:mt-0 font-sans">
                  {node.description.map((description, key) => {
                    return (
                      <li className="my-1" key={key}>
                        - {description}
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
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    profilePhoto: file(name: { eq: "dad-and-son" }) {
      id
      childImageSharp {
        fluid(maxWidth: 522, maxHeight: 600, grayscale: true) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    companies: allFile(filter: { name: { in: ["desarol", "ivcmedia"] } }) {
      edges {
        node {
          id
          childImageSharp {
            fixed(width: 300, height: 150) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
    allExperienceYaml {
      totalCount
      edges {
        node {
          id
          title
          company
          location
          startDate
          endDate
          description
        }
      }
    }
  }
`;

export default About;
