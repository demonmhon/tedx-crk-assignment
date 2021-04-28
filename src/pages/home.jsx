import React from 'react';

import { APP } from 'core/constants';
import heroImg from 'assets/hero.png';

const propTypes = {};

const defaultProps = {};

const ns = APP.NAMESPACE;

const Banner = () => {
  return (
    <div className={`${ns}-page--home__banner`}>
      <div className={`${ns}-page--home__banner__hero`}>
        <div className="banner__hero__bg">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
      <div className={`${ns}-page--home__banner__heading-container`}>
        <div className="container">
          <div className={`${ns}-page--home__banner__heading`}>
            <div>
              <div className="title">
                <h1 className="title-text">
                  What's meant to be will always find a way.
                </h1>
              </div>
              <p className="tagline">
                PawsUp help you to find the best partners for your dearest
                fluffly friend
              </p>
              <a href="/" className="btn btn--cta">
                Find A Match
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DogTypes = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
};
function HomePage(props) {
  return (
    <div className={`${ns}-page--home`}>
      <Banner />
      <DogTypes />
    </div>
  );
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export { HomePage };
export default HomePage;
