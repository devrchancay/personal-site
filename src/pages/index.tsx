/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Social from '../components/Social';
import AboutInfo from '../components/AboutInfo';
import Seo from '../components/Seo';

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo title="Front-end Developer and Educator | Ramón Chancay Ortega" />
      <main>
        <Hero
          name={data.prismicBio.data.short_name}
          position={data.prismicBio.data.position}
        />
        <Social items={data.prismicBio.data.body[0].items} />
        <AboutInfo
          name={data.prismicBio.data.name}
          description={data.prismicBio.data.description_bio.html}
          avatar={
            data.prismicBio.data.profile_picture.localFile.childImageSharp.fluid
          }
        />
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    prismicBio {
      data {
        name
        short_name
        position
        description_bio {
          html
        }
        body {
          items {
            title
            icon_name
            link {
              url
              target
            }
          }
        }
        profile_picture {
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;
