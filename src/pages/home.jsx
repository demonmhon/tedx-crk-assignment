import React from 'react';

import { APP } from 'core/constants';
import heroImg from 'assets/hero.png';
import Slide from './home/slide'

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

const Content = () => {
  return (
    <div className={`${ns}-page ${ns}-page--home__content`}>
      <div className="container">
        <div className="title">
          <h2 className="title-text">
            Dog have these 5 major personality steps.
          </h2>
        </div>
        <Slide />
        <a href="/" className="btn btn--more">
          Learn more
        </a>
      </div>
    </div>
  );
};
function HomePage(props) {
  return (
    <div className={`${ns}-page--home`}>
      <Banner />
      <Content />
    </div>
  );
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export { HomePage };
export default HomePage;
