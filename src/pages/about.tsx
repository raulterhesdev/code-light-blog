import React from 'react';
import Layout from '../components/Layout/Layout';
import MetaData from '../components/common/meta/MetaData';

import AboutContent from '../components/About/About';

const About = ({ location }) => {
  return (
    <>
      <MetaData location={location} />
      <Layout location={location}>
        <AboutContent />
      </Layout>
    </>
  );
};

export default About;
