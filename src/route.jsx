import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { HomePage, AboutPage, Error404Page } from './pages';

function AppRoute() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={Error404Page} />
    </Switch>
  );
}

AppRoute.propTypes = {};

AppRoute.defaultProps = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export { AppRoute };

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
