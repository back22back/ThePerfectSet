import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../client/src/components/App.jsx';

afterEach(cleanup);

describe('App', () => {
  test('App is rendering correctly', () => {
    render( <App /> )
  })
})