import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__heading">
        <h1>What's meant to be will always find a way</h1>
        <p className="tagline">PawsUp help tou to find the best partners for your dearest fluffly friend</p>
        <a href="#" className="btn btn--cta">Find a Match</a>
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
