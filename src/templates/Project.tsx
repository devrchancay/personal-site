import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import tw from 'tailwind.macro';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import { Layout, Menu, Seo, Footer } from '../components';

const ImageWrapper = styled.div`
  position: relative;
  border: solid 1px var(--color-secondary);
  border-radius: 4px;
  &::before {
    content: '';
    height: 100%;
    position: absolute;
    background: var(--color-secondary);
    right: -1.85rem;
    bottom: -0.85rem;
    z-index: 0;
    width: 100%;
    left: 5px;
    border-radius: 4px;
  }
`;

const ProjectDescription = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding 1.5rem 2rem;
  p {
    color: var(--color-secondary);
  }
  h3{
    text-align: center;
  }
  .block-img{
    text-align:center;
  }
`;

const Project = ({ data }) => {
  return (
    <Layout>
      <Seo title={`Blog`} />
      <div css={tw`pt-4`}>
        <Menu isHome={false} />
      </div>
      <div css={tw`bg-background px-4 pt-8 lg:px-8`}>
        <div css={tw`flex flex-col lg:flex-row`}>
          <div
            css={tw`lg:w-1/2 lg:flex lg:flex-col lg:content-center lg:items-center lg:justify-center lg:px-4`}
          >
            <h1
              css={tw`text-secondary text-3xl text-center lg:text-left lg:text-4xl lg:w-full`}
            >
              {data.prismicProjects.data.name.text}
            </h1>
            <p css={tw`text-secondary text-center lg:text-left`}>
              {data.prismicProjects.data.excerpt.text}
            </p>
          </div>
          <ImageWrapper css={tw`mt-4 lg:w-1/2`}>
            <Image
              css={tw`rounded`}
              fluid={
                data.prismicProjects.data.image.localFile.childImageSharp.fluid
              }
            />
          </ImageWrapper>
        </div>
        <div css={tw`flex mt-8`}>
          <ProjectDescription
            dangerouslySetInnerHTML={{
              __html: data.prismicProjects.data.description.html,
            }}
          />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query($ProjectId: String!) {
    prismicProjects(id: { eq: $ProjectId }) {
      data {
        name {
          text
        }
        description {
          html
        }
        excerpt {
          text
        }
        image {
          alt
          localFile {
            childImageSharp {
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default Project;
