import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

function HomePage(props) {
  return <BlankPage title={`React 16x Starter`} />;
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export { HomePage };
export default HomePage;
