import React from 'react';
import InterfaceProvider from '../context/InterfaceProvider.js';
import Landing from '../screens/Landing.js';

export default () => (
  <InterfaceProvider>
    <Landing />
  </InterfaceProvider>
);
