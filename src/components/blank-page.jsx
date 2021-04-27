import React from 'react';
import PropTypes from 'prop-types';

import { APP } from 'core/constants';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  title: '',
};

const BlankPage = (props) => {
  const ns = APP.NAMESPACE;
  const { title } = props;
  return (
    <div className={`${ns}-page ${ns}-page--blank`}>
      <span>{title}</span>
    </div>
  );
};

BlankPage.propTypes = propTypes;
BlankPage.defaultProps = defaultProps;

export default BlankPage;
