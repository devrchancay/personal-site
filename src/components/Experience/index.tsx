/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import tw from 'tailwind.macro';
import { formatDistanceStrict } from 'date-fns';

const List = styled.div`
  ul {
    list-style: circle;
    padding: 0;
    margin: 1rem 0;
  }
  li {
    margin: 0;
    margin-bottom: 0.3rem;
  }
`;

const Experience = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          experience: allPrismicExperience(
            sort: { fields: data___experience_end, order: DESC }
          ) {
            edges {
              node {
                id
                data {
                  experience_position {
                    text
                  }
                  experience_company {
                    text
                  }
                  experience_start(formatString: "MMM YYYY")
                  experience_end(formatString: "MMM YYYY")
                  startDate: experience_start
                  endDate: experience_end
                  experience_description {
                    html
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div css={tw`p-4 lg:p-8 bg-white`}>
            <div css={tw`lg:px-8 lg:justify-center lg:flex`}>
              <div css={tw`lg:w-11/12`}>
                <h2 css={tw`my-2 text-center text-2xl lg:text-4xl`}>
                  Experience
                </h2>
                <h3 css={tw`text-center text-base lg:text-xl text-gray-500`}>
                  Jobs as a Web developer.
                </h3>
                <div
                  css={tw`lg:mt-8 py-4 flex flex-col items-center content-center lg:justify-start sm:justify-center`}
                >
                  {data.experience.edges.map(({ node }) => (
                    <div
                      css={tw`w-5/6 lg:w-full lg:w-2/3 my-2 flex flex-col lg:flex-row  border-gray-300 border-b pb-2`}
                      key={node.id}
                    >
                      <div
                        css={tw`lg:w-1/3 flex justify-center content-start  mb-6 lg:mb-0 items-start pt-4`}
                      >
                        <div
                          css={tw`shadow-lg px-2 py-6 bg-blue-400`}
                          style={{ minWidth: 190, maxWidth: 190 }}
                        >
                          <p css={tw`text-white text-center`}>
                            {node.data.experience_company.text}
                          </p>
                          <p css={tw`text-center`}>
                            
                            {formatDistanceStrict(
                              new Date(node.data.startDate),
                              node.data.endDate
                                ? new Date(node.data.endDate)
                                : new Date(),
                              { roundingMethod: 'floor' }
                            )}
                          </p>
                        </div>
                      </div>
                      <div css={tw`lg:w-2/3 text-center lg:text-left`}>
                        <h4
                          css={tw`text-center lg:text-left text-xl lg:text-3xl font-sans my-2`}
                        >
                          {node.data.experience_position.text}
                        </h4>
                        <p css={tw`text-gray-500 mb-2`}>
                          {node.data.experience_start} -{' '}
                          {node.data.experience_end
                            ? node.data.experience_end
                            : 'Present'}
                        </p>
                        <List
                          css={tw`text-center lg:text-left`}
                          dangerouslySetInnerHTML={{
                            __html: node.data.experience_description.html
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Experience;
