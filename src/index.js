import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Color from './libs/Color';

import '../src/index.css';

ReactDOM.render(
  <App colorProp={new Color(220, 20, 60)}/>,
  document.getElementById('root')
);
