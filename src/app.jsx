import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Route from './route';
import { init } from './redux/actions/app';
import { Header } from 'components';
import { APP } from 'core/constants'

const propTypes = {
  init: PropTypes.func,
};

const defaultProps = {
  init() {},
};

function App(props) {
  useEffect(() => {
    props.init();
  }, []);

  const ns = APP.NAMESPACE

  return (
    <BrowserRouter>
      <div className={ns}>
        <div className={`${ns}__body`}>
          <div className={`${ns}__body__container`}>
            <Header />
            <Route />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch(init()),
  };
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);
