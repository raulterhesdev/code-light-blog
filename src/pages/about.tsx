import React from 'react';
import Layout from '../components/Layout/Layout';
import MetaData from '../components/common/meta/MetaData';

const About = ({ location }) => {
  console.log(location);
  return (
    <>
      <MetaData location={location} />
      <Layout>
        <p>About</p>
      </Layout>
    </>
  );
};

export default About;
