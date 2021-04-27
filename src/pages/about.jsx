import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

function AboutPage(props) {
  return <BlankPage title={`About`} />;
}

AboutPage.propTypes = propTypes;
AboutPage.defaultProps = defaultProps;

export { AboutPage as HomePage };
export default AboutPage;
