import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Image from '../images/404.svg';

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <SEO title="404: Not Found" />
        <div className="w-2/3 mx-auto my-0 flex flex-col justify-center items-center content-center pt-6">
          <h1 className="text-center py-4">
            Oh no... lo que buscas no esta aqui
          </h1>
          <img alt="Not Found" className="w-2/3" src={Image} />
        </div>
        <p className="text-center">
          ps: Si buscas algo de php que Dios te perdone
        </p>
      </>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
