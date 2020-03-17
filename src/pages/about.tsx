/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import {
  Layout,
  AboutHeader,
  Seo,
  Companies,
  Experience,
  Footer
} from '../components';

const About = () => {
  return (
    <Layout>
      <Seo title="About me" />
      <AboutHeader />
      <Companies />
      <Experience />
      <Footer />
    </Layout>
  );
};

export default About;
