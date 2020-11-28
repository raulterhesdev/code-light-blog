import React from 'react';
import Layout from '../components/Layout/Layout';
import MetaData from '../components/common/meta/MetaData';

import { AllPagesEnum } from '../types/AllPagesEnum';

const About = ({ location }) => {
  return (
    <>
      <MetaData location={location} />
      <Layout page={AllPagesEnum.about}>
        <p>About</p>
      </Layout>
    </>
  );
};

export default About;
