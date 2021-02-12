import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Presentation from './presentation';

ReactDOM.render(
    <Presentation />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextPresentation = require('./presentation').default;
    ReactDOM.render(
        <NextPresentation />,
      document.getElementById('root')
    );
  });
}
