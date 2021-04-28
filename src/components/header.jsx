import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { APP } from 'core/constants';
import logoUrl from '../assets/logo.svg';

const propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const defaultProps = {
  match: {},
  location: {},
  history: {},
};

const ns = APP.NAMESPACE;

const Header = (props) => {
  const { location } = props;
  const { pathname } = location;

  return (
    <header className={`${ns}__header`}>
      <span className={`${ns}__header__logo`}>
        <Link to="/">
          <img src={logoUrl} alt="logo" />
        </Link>
      </span>
      <ul>
        <li className={pathname === '/' ? 'active' : null}>
          <Link to="/">Find A Match</Link>
        </li>
        <li className={pathname === '/dogs-personalities' ? 'active' : null}>
          <Link to="/dogs-personalities">Dog's Personalities</Link>
        </li>
        <li className={pathname === '/about' ? 'active' : null}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={pathname === '/contact' ? 'active' : null}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withRouter(Header);
