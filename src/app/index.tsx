import React from 'react';
import { withProviders } from './providers';
import Routing from 'pages';

import './styles/index.scss'

function App() {
  return (
    <Routing />
  );
}

export default withProviders(App);
