import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__heading">
        <h1>What's meant to be will always find a way</h1>
      </div>
    </div>
  )
}

const DogTypes = () => {
  return (
    <div className="row">
      <div className="col">

      </div>
    </div>
  )
}
function HomePage(props) {
  return  (
    <div className="container">
      <Banner />
      <DogTypes />
    </div>
  );
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export { HomePage };
export default HomePage;
